"use client"

import { useState } from "react"
import { useChallenges } from "@/hooks/api/useChallenges"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import Link from "next/link"
import { Loader2, AlertCircle, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

interface ChallengeWithDonor {
  id: string;
  donor?: {
    name?: string;
    organization?: string;
  };
}

export function ChallengesClient({ startupId }: { startupId: string }) {
  const [searchTerm, setSearchTerm] = useState("")
  // We want to fetch public challenges. The hook currently gets all challenges but we should ideally pass filters.
  // For now we'll fetch all and filter client side or pass query params if supported.
  const { data: challenges, isLoading, isError } = useChallenges()

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="flex items-center gap-2 text-red-500">
          <AlertCircle className="h-5 w-5" />
          <p>Failed to load challenges. Please try again later.</p>
        </div>
      </div>
    )
  }

  // Filter challenges to show only public and open ones, plus match search term
  const filteredChallenges = challenges?.filter((challenge) => {
    const isPublicAndOpen = challenge.isPublic && challenge.status === 'open'
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (challenge.sector && challenge.sector.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return isPublicAndOpen && matchesSearch
  }) || []

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Available Challenges</h1>
          <p className="text-gray-500">Find and apply for funding opportunities.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search challenges by title or sector..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredChallenges.length === 0 ? (
        <Card className="flex h-[300px] flex-col items-center justify-center text-center">
          <div className="rounded-full bg-gray-100 p-3 mb-4">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <CardTitle className="text-lg mb-2">No challenges found</CardTitle>
          <CardDescription>
            {searchTerm ? "Try adjusting your search criteria." : "There are currently no open challenges available."}
          </CardDescription>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <Card key={challenge.id} className="flex flex-col hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {challenge.sector || 'General'}
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700">
                    Open
                  </Badge>
                </div>
                <CardTitle className="line-clamp-2">{challenge.title}</CardTitle>
                <CardDescription className="line-clamp-3 mt-2">
                  {challenge.problemStatement || "No description provided."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2 text-sm text-gray-600">
                  {challenge.submissionDeadline && (
                    <div className="flex justify-between">
                      <span className="font-medium">Deadline:</span>
                      <span>{format(new Date(challenge.submissionDeadline), 'MMM d, yyyy')}</span>
                    </div>
                  )}
                  {(challenge as unknown as ChallengeWithDonor).donor && (
                    <div className="flex justify-between">
                      <span className="font-medium">Sponsor:</span>
                      <span className="truncate ml-2">{(challenge as unknown as ChallengeWithDonor).donor?.name || (challenge as unknown as ChallengeWithDonor).donor?.organization || 'Anonymous'}</span>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/startup/${startupId}/challenges/${challenge.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
