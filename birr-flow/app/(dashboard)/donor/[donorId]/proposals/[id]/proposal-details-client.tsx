"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ArrowLeft, CheckCircle, XCircle, FileText, Download, Loader2 } from "lucide-react"
import Link from "next/link"

type BudgetItem = {
  category?: string
  description?: string
  amount?: number | string
}

export default function ProposalDetailsClient({ 
  proposal, 
  donorId,
  onAccept,
  onReject 
}: { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  proposal: any, 
  donorId: string,
  onAccept: (score: number, feedback: string) => Promise<void>,
  onReject: (score: number, feedback: string) => Promise<void>
}) {
  const [score, setScore] = useState<string>(proposal.donorScore?.toString() || "")
  const [feedback, setFeedback] = useState<string>(proposal.donorFeedback || "")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAccept = async () => {
    setIsSubmitting(true)
    try {
      await onAccept(Number(score), feedback)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReject = async () => {
    setIsSubmitting(true)
    try {
      await onReject(Number(score), feedback)
    } finally {
      setIsSubmitting(false)
    }
  }

  const budgetItems = proposal.budgetBreakdown ? (Array.isArray(proposal.budgetBreakdown) ? proposal.budgetBreakdown : []) : []
  const requestedAmount = budgetItems.reduce((sum: number, item: BudgetItem) => sum + (Number(item.amount) || 0), 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/donor/${donorId}/proposals`}>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-3">
            {proposal.startup.startupProfile?.startupName || proposal.startup.name || "Startup Proposal"}
            <Badge variant={proposal.status === "submitted" ? "secondary" : proposal.status === "rejected" ? "destructive" : "default"}>
              {proposal.status}
            </Badge>
          </h2>
          <p className="text-gray-500">{proposal.challenge.title} • Submitted: {new Date(proposal.submittedAt).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start border-b border-gray-200 rounded-none bg-transparent h-auto p-0">
              <TabsTrigger 
                value="details" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Idea Details
              </TabsTrigger>
              <TabsTrigger 
                value="budget" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Budget & Milestones
              </TabsTrigger>
              <TabsTrigger 
                value="documents" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Documents
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Idea Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-gray-700">
                  <p className="whitespace-pre-wrap">{proposal.ideaDescription || "No description provided."}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="budget" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Budget Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {budgetItems.length > 0 ? (
                      <>
                        {budgetItems.map((item: BudgetItem, i: number) => (
                          <div key={i} className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600">{item.category || item.description || "Item"}</span>
                            <span className="font-medium">${Number(item.amount || 0).toLocaleString()}</span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center font-bold text-lg pt-2">
                          <span>Total Requested</span>
                          <span className="text-blue-600">${requestedAmount.toLocaleString()}</span>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-500">No budget details provided.</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Supporting Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {proposal.pitchDeckUrl ? (
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">Pitch Deck</p>
                          <p className="text-xs text-gray-500">Link</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={proposal.pitchDeckUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" /> View / Download
                        </a>
                      </Button>
                    </div>
                  ) : null}
                  
                  {proposal.videoUrl ? (
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium text-sm">Video Pitch</p>
                          <p className="text-xs text-gray-500">Link</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={proposal.videoUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" /> View
                        </a>
                      </Button>
                    </div>
                  ) : null}

                  {!proposal.pitchDeckUrl && !proposal.videoUrl && (
                    <p className="text-gray-500">No documents attached.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Donor Review</CardTitle>
              <CardDescription>Evaluate this proposal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="score">Score (0-100)</Label>
                <Input 
                  id="score" 
                  type="number" 
                  placeholder="e.g. 85" 
                  max="100" 
                  min="0" 
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  disabled={proposal.status !== "submitted" || isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="feedback">Feedback for Startup</Label>
                <textarea 
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  disabled={proposal.status !== "submitted" || isSubmitting}
                  className="flex min-h-[100px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
                  placeholder="Provide constructive feedback..."
                ></textarea>
              </div>
            </CardContent>
            {proposal.status === "submitted" && (
              <CardFooter className="flex-col gap-3">
                <div className="flex gap-2 w-full">
                  <Button 
                    variant="outline" 
                    className="w-1/2 text-green-600 border-green-200 hover:bg-green-50"
                    onClick={handleAccept}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <CheckCircle className="h-4 w-4 mr-2" />} 
                    Accept
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-1/2 text-red-600 border-red-200 hover:bg-red-50"
                    onClick={handleReject}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <XCircle className="h-4 w-4 mr-2" />} 
                    Reject
                  </Button>
                </div>
              </CardFooter>
            )}
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Startup Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <span className="text-gray-500">Name:</span>
                <p className="font-medium text-gray-900">{proposal.startup.startupProfile?.startupName || proposal.startup.name}</p>
              </div>
              <div>
                <span className="text-gray-500">Sector:</span>
                <p className="font-medium text-gray-900">{proposal.startup.startupProfile?.sector || "Not specified"}</p>
              </div>
              <div>
                <span className="text-gray-500">Accountability Score:</span>
                <p className="font-medium text-blue-600">{proposal.startup.startupProfile?.accountabilityScore || 0} / 100</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}