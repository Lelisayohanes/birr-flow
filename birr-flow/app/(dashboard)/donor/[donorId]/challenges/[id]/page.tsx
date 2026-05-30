import { notFound, redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Edit, Users, Calendar, Target, FileText } from "lucide-react"

interface ChallengeDetailsProps {
  params: Promise<{ donorId: string; id: string }>
}

export default async function ChallengeDetailsPage({ params }: ChallengeDetailsProps) {
  const { donorId, id } = await params

  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return notFound()
  }

  const challenge = await prisma.challenge.findUnique({
    where: { id },
    include: {
      proposals: {
        include: {
          startup: {
            include: {
              startupProfile: true
            }
          }
        },
        orderBy: {
          submittedAt: 'desc'
        }
      },
      parameters: true
    }
  })

  if (!challenge || challenge.donorId !== donorId) {
    return notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/donor/${donorId}/challenges`}>
          <Button variant="outline" size="icon" type="button">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">{challenge.title}</h2>
          <p className="text-gray-500">Manage challenge details and review proposals.</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={challenge.status === "open" ? "default" : challenge.status === "draft" ? "secondary" : "outline"} className="capitalize text-sm px-3 py-1">
            {challenge.status}
          </Badge>
          <Button variant="outline" className="gap-2">
            <Edit className="h-4 w-4" />
            Edit Challenge
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Challenge Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Problem Statement</h4>
                <p className="text-gray-900 whitespace-pre-wrap">{challenge.problemStatement || "No problem statement provided."}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                    <Target className="h-4 w-4" /> Sector
                  </h4>
                  <p className="text-gray-900">{challenge.sector || "General"}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                    <Users className="h-4 w-4" /> Visibility
                  </h4>
                  <p className="text-gray-900">{challenge.isPublic ? "Public" : "Private"}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Submission Deadline
                  </h4>
                  <p className="text-gray-900">
                    {challenge.submissionDeadline ? new Date(challenge.submissionDeadline).toLocaleDateString() : "Not set"}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Review Starts
                  </h4>
                  <p className="text-gray-900">
                    {challenge.reviewPeriodStart ? new Date(challenge.reviewPeriodStart).toLocaleDateString() : "Not set"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Proposals ({challenge.proposals.length})</CardTitle>
              </div>
              <CardDescription>Startups that have submitted solutions for this challenge.</CardDescription>
            </CardHeader>
            <CardContent>
              {challenge.proposals.length > 0 ? (
                <div className="space-y-4">
                  {challenge.proposals.map((proposal) => (
                    <div key={proposal.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                          {proposal.startup.startupProfile?.startupName || proposal.startup.name || "Unknown Startup"}
                          <Badge variant="outline" className="text-xs font-normal">
                            {proposal.status}
                          </Badge>
                        </h4>
                        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                          {proposal.ideaDescription || "No description provided."}
                        </p>
                        <div className="flex gap-4 mt-2 text-xs text-gray-400">
                          <span>Submitted: {new Date(proposal.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="shrink-0 flex gap-2">
                        <Button variant="default" asChild>
                          <Link href={`/donor/${donorId}/proposals/${proposal.id}`}>
                            Review Proposal
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 border rounded-lg bg-gray-50">
                  <FileText className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                  <h3 className="text-lg font-medium text-gray-900">No proposals yet</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto mt-1">
                    Once startups submit their proposals for this challenge, they will appear here.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
              <CardDescription>Information requested from startups</CardDescription>
            </CardHeader>
            <CardContent>
              {challenge.parameters && challenge.parameters.length > 0 ? (
                <ul className="space-y-3">
                  {challenge.parameters.map((param) => (
                    <li key={param.id} className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{param.paramName}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-[10px] uppercase">
                            {param.paramType}
                          </Badge>
                          {param.required && (
                            <span className="text-xs text-red-500 font-medium">*Required</span>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No specific parameters configured.</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" disabled={challenge.status === "closed"}>
                Close Submissions
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                Delete Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
