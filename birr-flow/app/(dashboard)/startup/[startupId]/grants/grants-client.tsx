"use client"

import { useGrants } from "@/hooks/api/useGrants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { Loader2, AlertCircle, CircleDollarSign } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function GrantsClient({ startupId }: { startupId: string }) {
  const { data: myGrants, isLoading, isError } = useGrants({ startupId })

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
          <p>Failed to load grants. Please try again later.</p>
        </div>
      </div>
    )
  }

  const grantsList = myGrants || []

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Grants</h1>
          <p className="text-gray-500">Manage your active grants and milestones.</p>
        </div>
      </div>

      {grantsList.length === 0 ? (
        <Card className="flex h-[300px] flex-col items-center justify-center text-center">
          <div className="rounded-full bg-gray-100 p-4 mb-4">
            <CircleDollarSign className="h-8 w-8 text-gray-400" />
          </div>
          <CardTitle className="text-lg mb-2">No active grants</CardTitle>
          <CardDescription>
            You don't have any active grants yet. Apply for challenges to secure funding.
          </CardDescription>
          <Link href={`/startup/${startupId}/challenges`} className="mt-4">
            <Button>View Challenges</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grantsList.map((grant) => (
            <Card key={grant.id} className="flex flex-col border-green-100">
              <CardHeader className="bg-green-50/50 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant={grant.status === 'active' ? 'default' : 'secondary'}
                    className={grant.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                  >
                    {grant.status.charAt(0).toUpperCase() + grant.status.slice(1)}
                  </Badge>
                  <div className="text-lg font-bold text-green-700">
                    ${grant.totalAmount.toLocaleString()}
                  </div>
                </div>
                <CardTitle className="text-lg">
                  {(grant as unknown as { proposal?: { challenge?: { title: string } } }).proposal?.challenge?.title || "Grant"}
                </CardTitle>
                <CardDescription>
                  From: {(grant as unknown as { donor?: { name?: string; organization?: string } }).donor?.name || (grant as unknown as { donor?: { name?: string; organization?: string } }).donor?.organization || "Donor"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Awarded</p>
                    <p className="font-medium">{format(new Date(grant.createdAt), 'MMM d, yyyy')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Equity</p>
                    <p className="font-medium">{grant.equityPercent ? `${grant.equityPercent}%` : 'None'}</p>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <Link href={`/startup/${startupId}/grants/${grant.id}`} className="w-full">
                  <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                    View Milestones
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
