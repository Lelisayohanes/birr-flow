"use client"

import { useProposal } from "@/hooks/api/useProposals"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { Loader2, AlertCircle, ArrowLeft, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProposalDetailsClient({ startupId, proposalId }: { startupId: string; proposalId: string }) {
  const { data: rawProposal, isLoading, isError } = useProposal(proposalId)

  // Cast to include challenge property
  const proposal = rawProposal as unknown as {
    id: string;
    status: string;
    ideaDescription?: string;
    budgetBreakdown?: unknown;
    milestonePlan?: unknown;
    pitchDeckUrl?: string;
    videoUrl?: string;
    submittedAt: Date | string;
    donorScore?: number;
    donorFeedback?: string;
    challenge?: {
      id: string;
      title: string;
      donor?: {
        name?: string;
        organization?: string;
      }
    }
  } | undefined

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  if (isError || !proposal) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-red-500">
          <AlertCircle className="h-8 w-8" />
          <p>Failed to load proposal details. Please try again later.</p>
          <Link href={`/startup/${startupId}/proposals`}>
            <Button variant="outline">Back to Proposals</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href={`/startup/${startupId}/proposals`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Proposal Details</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-500">
              {proposal.challenge?.title || "Unknown Challenge"}
            </span>
            <Badge
              variant={
                proposal.status === 'winner' ? 'default' :
                  proposal.status === 'rejected' ? 'destructive' :
                    proposal.status === 'shortlisted' ? 'secondary' : 'outline'
              }
              className={
                proposal.status === 'winner' ? 'bg-green-100 text-green-800' :
                  proposal.status === 'shortlisted' ? 'bg-blue-100 text-blue-800' : ''
              }
            >
              {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
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
                Idea Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {proposal.ideaDescription || "No description provided."}
              </p>
            </CardContent>
          </Card>

          {Boolean(proposal.budgetBreakdown || proposal.milestonePlan) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Boolean(proposal.budgetBreakdown) && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Budget Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap text-gray-700">
                      {typeof proposal.budgetBreakdown === 'object' && proposal.budgetBreakdown !== null
                        ? (proposal.budgetBreakdown as { text?: string }).text || JSON.stringify(proposal.budgetBreakdown)
                        : String(proposal.budgetBreakdown || '')}
                    </p>
                  </CardContent>
                </Card>
              )}
              {Boolean(proposal.milestonePlan) && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Milestone Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap text-gray-700">
                      {typeof proposal.milestonePlan === 'object' && proposal.milestonePlan !== null
                        ? (proposal.milestonePlan as { text?: string }).text || JSON.stringify(proposal.milestonePlan)
                        : String(proposal.milestonePlan || '')}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {proposal.donorFeedback && (
            <Card className="border-blue-100">
              <CardHeader className="bg-blue-50/50 pb-4">
                <CardTitle className="text-lg text-blue-800">Donor Feedback</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="whitespace-pre-wrap text-gray-700">
                  {proposal.donorFeedback}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Application Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-gray-500 text-sm block">Submitted On</span>
                <span className="font-medium">{format(new Date(proposal.submittedAt), 'PPP')}</span>
              </div>

              {proposal.challenge?.donor && (
                <div>
                  <span className="text-gray-500 text-sm block">Reviewer (Donor)</span>
                  <span className="font-medium">
                    {proposal.challenge.donor.name || proposal.challenge.donor.organization || "Anonymous"}
                  </span>
                </div>
              )}

              {proposal.donorScore != null && (
                <div>
                  <span className="text-gray-500 text-sm block">Score</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-bold text-blue-600">{proposal.donorScore}</span>
                    <span className="text-sm font-medium text-gray-400">/ 100</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {(proposal.pitchDeckUrl || proposal.videoUrl) && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Attachments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {proposal.pitchDeckUrl && (
                  <a href={proposal.pitchDeckUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
                    <span className="font-medium text-sm text-blue-600">Pitch Deck</span>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                )}
                {proposal.videoUrl && (
                  <a href={proposal.videoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
                    <span className="font-medium text-sm text-blue-600">Video Pitch</span>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                )}
              </CardContent>
            </Card>
          )}

          <Link href={`/startup/${startupId}/challenges/${proposal.challenge?.id}`}>
            <Button variant="outline" className="w-full">
              View Challenge Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
