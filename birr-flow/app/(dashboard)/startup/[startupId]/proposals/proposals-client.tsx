"use client"

import { useProposals } from "@/hooks/api/useProposals"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { Loader2, AlertCircle, Search, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProposalsClient({ startupId }: { startupId: string }) {
  const { data: myProposals, isLoading, isError } = useProposals({ startupId })

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
          <p>Failed to load proposals. Please try again later.</p>
        </div>
      </div>
    )
  }

  const proposalsList = myProposals || []

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Proposals</h1>
          <p className="text-gray-500">Track the status of your applications.</p>
        </div>
        <Link href={`/startup/${startupId}/challenges`}>
          <Button>Find More Challenges</Button>
        </Link>
      </div>

      {proposalsList.length === 0 ? (
        <Card className="flex h-[300px] flex-col items-center justify-center text-center">
          <div className="rounded-full bg-gray-100 p-4 mb-4">
            <FileText className="h-8 w-8 text-gray-400" />
          </div>
          <CardTitle className="text-lg mb-2">No proposals submitted yet</CardTitle>
          <CardDescription>
            You haven't applied to any challenges. Browse open challenges to get started.
          </CardDescription>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proposalsList.map((proposal) => (
            <Card key={proposal.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant={
                      proposal.status === 'winner' ? 'default' :
                      proposal.status === 'rejected' ? 'destructive' :
                      proposal.status === 'shortlisted' ? 'secondary' : 'outline'
                    }
                    className={
                      proposal.status === 'winner' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                      proposal.status === 'shortlisted' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : ''
                    }
                  >
                    {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                  </Badge>
                  {proposal.donorScore != null && (
                    <Badge variant="outline" className="font-mono">
                      Score: {proposal.donorScore}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {(proposal as unknown as { challenge?: { title: string } }).challenge?.title || "Unknown Challenge"}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="text-sm text-gray-600 line-clamp-3">
                  {proposal.ideaDescription || "No description provided."}
                </div>
                
                <div className="pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-500">
                  <span>Submitted: {format(new Date(proposal.submittedAt), 'MMM d, yyyy')}</span>
                </div>
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <Link href={`/startup/${startupId}/proposals/${proposal.id}`} className="w-full">
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
