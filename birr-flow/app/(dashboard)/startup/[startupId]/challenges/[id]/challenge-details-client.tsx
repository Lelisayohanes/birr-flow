"use client"

import { useChallenge } from "@/hooks/api/useChallenges"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import Link from "next/link"
import { Loader2, AlertCircle, ArrowLeft, Calendar, FileText, Building } from "lucide-react"

interface ChallengeWithParams {
  id: string;
  title: string;
  status: string;
  sector?: string;
  problemStatement?: string;
  submissionDeadline?: Date | string;
  reviewPeriodStart?: Date | string;
  announcementDate?: Date | string;
  parameters?: Array<{
    id: string;
    paramName: string;
    paramType: string;
    required: boolean;
  }>;
}

export function ChallengeDetailsClient({ startupId, challengeId }: { startupId: string; challengeId: string }) {
  const { data: rawChallenge, isLoading, isError } = useChallenge(challengeId)
  const challenge = rawChallenge as unknown as ChallengeWithParams | undefined

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  if (isError || !challenge) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-red-500">
          <AlertCircle className="h-8 w-8" />
          <p>Failed to load challenge details. Please try again later.</p>
          <Link href={`/startup/${startupId}/challenges`}>
            <Button variant="outline">Back to Challenges</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href={`/startup/${startupId}/challenges`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{challenge.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {challenge.sector || 'General'}
            </Badge>
            <Badge variant="secondary" className={challenge.status === 'open' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-700'}>
              {challenge.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5 text-gray-500" />
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {challenge.problemStatement || "No description provided."}
              </p>
            </CardContent>
          </Card>

          {challenge.parameters && challenge.parameters.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Required Application Parameters</CardTitle>
                <CardDescription>You will need to provide this information when applying.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {challenge.parameters.map((param) => (
                    <li key={param.id} className="text-gray-700">
                      <span className="font-medium">{param.paramName}</span> ({param.paramType})
                      {param.required && <span className="text-red-500 ml-1">*</span>}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Important Dates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-gray-900">Submission Deadline</div>
                  <div className="text-sm text-gray-500">
                    {challenge.submissionDeadline ? format(new Date(challenge.submissionDeadline), 'PPP') : 'Not specified'}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-gray-900">Review Period Starts</div>
                  <div className="text-sm text-gray-500">
                    {challenge.reviewPeriodStart ? format(new Date(challenge.reviewPeriodStart), 'PPP') : 'Not specified'}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-gray-900">Winner Announcement</div>
                  <div className="text-sm text-gray-500">
                    {challenge.announcementDate ? format(new Date(challenge.announcementDate), 'PPP') : 'Not specified'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Link href={`/startup/${startupId}/challenges/${challenge.id}/apply`}>
                <Button className="w-full" size="lg" disabled={challenge.status !== 'open'}>
                  {challenge.status === 'open' ? 'Apply Now' : 'Applications Closed'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
