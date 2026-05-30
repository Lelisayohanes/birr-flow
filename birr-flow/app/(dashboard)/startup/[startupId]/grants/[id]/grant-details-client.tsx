"use client"

import { useState } from "react"
import { useGrant } from "@/hooks/api/useGrants"
import { useSubmitProof } from "@/hooks/api/useProofs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { Loader2, AlertCircle, ArrowLeft, Upload, CheckCircle, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface GrantWithMilestones {
  id: string;
  totalAmount: number;
  equityPercent?: number;
  revenueShareTerms?: string;
  createdAt: Date | string;
  status: string;
  proposal?: {
    challenge?: { title: string };
  };
  donor?: {
    name?: string;
    organization?: string;
  };
  milestones?: Array<{
    id: string;
    title: string;
    tranchePercent?: number;
    dueDate?: Date | string;
    requiredProofType: string;
    proofs?: Array<{
      id: string;
      status: string;
      fileData?: string;
      comment?: string;
      submittedAt: Date | string;
    }>;
  }>;
}

export function GrantDetailsClient({ startupId, grantId }: { startupId: string; grantId: string }) {
  const { data: rawGrant, isLoading, isError } = useGrant(grantId)
  const grant = rawGrant as unknown as GrantWithMilestones | undefined
  const { mutate: submitProof, isPending: isSubmitting } = useSubmitProof()

  const [activeMilestoneId, setActiveMilestoneId] = useState<string | null>(null)
  const [proofData, setProofData] = useState({
    fileData: "",
    comment: ""
  })
  const [error, setError] = useState("")

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  if (isError || !grant) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-red-500">
          <AlertCircle className="h-8 w-8" />
          <p>Failed to load grant details. Please try again later.</p>
          <Link href={`/startup/${startupId}/grants`}>
            <Button variant="outline">Back to Grants</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleProofSubmit = (e: React.FormEvent, milestoneId: string) => {
    e.preventDefault()
    setError("")

    if (!proofData.fileData) {
      setError("Please provide proof (link or text).")
      return
    }

    submitProof(
      {
        milestoneId,
        uploadedById: startupId,
        fileData: proofData.fileData,
        comment: proofData.comment || undefined,
      } as unknown as Parameters<typeof submitProof>[0],
      {
        onSuccess: () => {
          setActiveMilestoneId(null)
          setProofData({ fileData: "", comment: "" })
          // Optionally show success toast
        },
        onError: (err: Error) => {
          setError(err.message || "Failed to submit proof.")
        }
      }
    )
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href={`/startup/${startupId}/grants`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Grant Details</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-500">
              {grant.proposal?.challenge?.title || "Unknown Challenge"}
            </span>
            <Badge variant="secondary" className={grant.status === 'active' ? 'bg-green-100 text-green-800' : ''}>
              {grant.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Grant Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <span className="text-gray-500 block">Total Amount</span>
                <span className="font-semibold text-lg text-green-700">${grant.totalAmount.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Equity</span>
                <span className="font-medium">{grant.equityPercent ? `${grant.equityPercent}%` : 'None'}</span>
              </div>
              {grant.revenueShareTerms && (
                <div>
                  <span className="text-gray-500 block">Rev Share</span>
                  <span className="font-medium">{grant.revenueShareTerms}</span>
                </div>
              )}
              <div>
                <span className="text-gray-500 block">Awarded On</span>
                <span className="font-medium">{format(new Date(grant.createdAt), 'PPP')}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Donor</span>
                <span className="font-medium">{grant.donor?.name || grant.donor?.organization || "Unknown"}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold">Milestones</h2>
          
          {!grant.milestones || grant.milestones.length === 0 ? (
            <Card className="flex h-[200px] items-center justify-center text-gray-500">
              No milestones defined for this grant.
            </Card>
          ) : (
            <div className="space-y-4">
              {grant.milestones.map((milestone, index) => {
                // Find latest proof
                const latestProof = milestone.proofs && milestone.proofs.length > 0 
                  ? milestone.proofs.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())[0]
                  : null

                const isPendingProof = latestProof?.status === 'pending'
                const isApproved = latestProof?.status === 'approved'
                const needsProof = !latestProof || latestProof.status === 'rejected' || latestProof.status === 'suspicious'

                return (
                  <Card key={milestone.id} className={isApproved ? "border-green-200 bg-green-50/30" : ""}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardDescription className="font-medium mb-1">
                            Milestone {index + 1}
                          </CardDescription>
                          <CardTitle className="text-lg">{milestone.title}</CardTitle>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-700">
                            {milestone.tranchePercent ? `${milestone.tranchePercent}%` : 'N/A'}
                          </div>
                          <Badge 
                            variant="outline" 
                            className={
                              isApproved ? "bg-green-100 text-green-800" :
                              isPendingProof ? "bg-amber-100 text-amber-800" : 
                              needsProof && latestProof ? "bg-red-100 text-red-800" : ""
                            }
                          >
                            {isApproved ? "Completed" : 
                             isPendingProof ? "In Review" : 
                             needsProof && latestProof ? latestProof.status : "To Do"}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-600">
                      <div className="mb-2">
                        <span className="font-medium">Required Proof: </span> 
                        {milestone.requiredProofType}
                      </div>
                      {milestone.dueDate && (
                        <div>
                          <span className="font-medium">Due Date: </span>
                          {format(new Date(milestone.dueDate), 'PPP')}
                        </div>
                      )}

                      {/* Display Latest Proof info if exists */}
                      {latestProof && (
                        <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-100 text-xs">
                          <div className="font-medium mb-1 flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            Latest Submission ({format(new Date(latestProof.submittedAt), 'MMM d, yyyy')})
                          </div>
                          <div className="text-gray-500 truncate">Data/Link: {latestProof.fileData || "N/A"}</div>
                          {latestProof.comment && <div className="text-gray-500 mt-1">Comment: {latestProof.comment}</div>}
                        </div>
                      )}
                    </CardContent>

                    {/* Actions */}
                    <CardFooter className="pt-0 border-t mt-4 flex flex-col items-stretch">
                      {isApproved ? (
                        <div className="w-full py-3 flex items-center justify-center gap-2 text-green-600 font-medium">
                          <CheckCircle className="h-5 w-5" />
                          Milestone Approved
                        </div>
                      ) : (
                        <div className="w-full pt-4">
                          {activeMilestoneId === milestone.id ? (
                            <form onSubmit={(e) => handleProofSubmit(e, milestone.id)} className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                              <h4 className="font-semibold text-sm">Submit Proof</h4>
                              {error && <div className="text-red-600 text-xs">{error}</div>}
                              
                              <div className="space-y-2">
                                <Label htmlFor={`proof-${milestone.id}`} className="text-xs">
                                  Proof Data / URL <span className="text-red-500">*</span>
                                </Label>
                                <Input 
                                  id={`proof-${milestone.id}`}
                                  placeholder={`Enter ${milestone.requiredProofType} link or text...`}
                                  value={proofData.fileData}
                                  onChange={(e) => setProofData({...proofData, fileData: e.target.value})}
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`comment-${milestone.id}`} className="text-xs">Comment (Optional)</Label>
                                <Textarea 
                                  id={`comment-${milestone.id}`}
                                  placeholder="Add context..."
                                  className="min-h-[60px]"
                                  value={proofData.comment}
                                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProofData({...proofData, comment: e.target.value})}
                                />
                              </div>
                              
                              <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" size="sm" onClick={() => setActiveMilestoneId(null)}>
                                  Cancel
                                </Button>
                                <Button type="submit" size="sm" disabled={isSubmitting}>
                                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Upload className="h-4 w-4 mr-2" />}
                                  Submit Proof
                                </Button>
                              </div>
                            </form>
                          ) : (
                            <Button 
                              variant={needsProof ? "default" : "secondary"} 
                              className="w-full"
                              onClick={() => {
                                setActiveMilestoneId(milestone.id)
                                setProofData({ fileData: "", comment: "" })
                              }}
                              disabled={isPendingProof}
                            >
                              {needsProof ? (
                                <><Upload className="h-4 w-4 mr-2" /> {latestProof ? "Resubmit Proof" : "Upload Proof"}</>
                              ) : (
                                "Proof In Review"
                              )}
                            </Button>
                          )}
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
