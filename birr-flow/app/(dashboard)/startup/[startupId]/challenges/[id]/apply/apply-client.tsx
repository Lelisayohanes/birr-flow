"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useChallenge } from "@/hooks/api/useChallenges"
import { useCreateProposal } from "@/hooks/api/useProposals"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export function ApplyClient({ startupId, challengeId }: { startupId: string; challengeId: string }) {
  const router = useRouter()
  const { data: challenge, isLoading: isChallengeLoading } = useChallenge(challengeId)
  const { mutate: createProposal, isPending } = useCreateProposal()

  const [formData, setFormData] = useState({
    ideaDescription: "",
    pitchDeckUrl: "",
    videoUrl: "",
    // Simple strings for now, could be JSON objects
    budgetBreakdown: "",
    milestonePlan: ""
  })

  const [error, setError] = useState("")

  if (isChallengeLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  if (!challenge) {
    return <div>Challenge not found</div>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.ideaDescription) {
      setError("Idea description is required")
      return
    }

    createProposal(
      {
        challengeId,
        startupId,
        ideaDescription: formData.ideaDescription,
        pitchDeckUrl: formData.pitchDeckUrl || undefined,
        videoUrl: formData.videoUrl || undefined,
        budgetBreakdown: formData.budgetBreakdown ? { text: formData.budgetBreakdown } : undefined,
        milestonePlan: formData.milestonePlan ? { text: formData.milestonePlan } : undefined,
      },
      {
        onSuccess: () => {
          router.push(`/startup/${startupId}/proposals`)
        },
        onError: (err: Error) => {
          setError(err.message || "Failed to submit proposal. Please try again.")
        }
      }
    )
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href={`/startup/${startupId}/challenges/${challengeId}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Submit Proposal</h1>
          <p className="text-gray-500">Applying for: {challenge.title}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Application Form</CardTitle>
            <CardDescription>Fill in the details below to submit your proposal.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="ideaDescription">Idea Description <span className="text-red-500">*</span></Label>
              <Textarea
                id="ideaDescription"
                placeholder="Describe your solution in detail..."
                className="min-h-[150px]"
                value={formData.ideaDescription}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, ideaDescription: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="pitchDeckUrl">Pitch Deck URL</Label>
                <Input
                  id="pitchDeckUrl"
                  type="url"
                  placeholder="https://..."
                  value={formData.pitchDeckUrl}
                  onChange={(e) => setFormData({ ...formData, pitchDeckUrl: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="videoUrl">Video Pitch URL</Label>
                <Input
                  id="videoUrl"
                  type="url"
                  placeholder="https://..."
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="milestonePlan">Milestone Plan</Label>
              <Textarea
                id="milestonePlan"
                placeholder="Outline your key milestones..."
                className="min-h-[100px]"
                value={formData.milestonePlan}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, milestonePlan: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budgetBreakdown">Budget Breakdown</Label>
              <Textarea
                id="budgetBreakdown"
                placeholder="How will you allocate the funds..."
                className="min-h-[100px]"
                value={formData.budgetBreakdown}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, budgetBreakdown: e.target.value })}
              />
            </div>

          </CardContent>
          <CardFooter className="flex justify-end gap-3 border-t p-6">
            <Link href={`/startup/${startupId}/challenges/${challengeId}`}>
              <Button variant="outline" type="button">Cancel</Button>
            </Link>
            <Button type="submit" disabled={isPending} className="bg-blue-600 hover:bg-blue-700">
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              {isPending ? "Submitting..." : "Submit Proposal"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
