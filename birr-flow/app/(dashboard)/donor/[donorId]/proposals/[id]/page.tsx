import { notFound, redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import ProposalDetailsClient from "./proposal-details-client"
import { revalidatePath } from "next/cache"

export default async function ProposalReviewPageWrapper({
  params,
}: {
  params: Promise<{ donorId: string; id: string }>
}) {
  const { donorId, id } = await params

  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return notFound()
  }

  const proposal = await prisma.proposal.findUnique({
    where: { id },
    include: {
      challenge: true,
      startup: {
        include: {
          startupProfile: true
        }
      }
    }
  })

  if (!proposal || proposal.challenge.donorId !== donorId) {
    return notFound()
  }

  // Define Server Actions for Accept / Reject inside the Server Component
  async function acceptProposal(score: number, feedback: string) {
    "use server"
    await prisma.proposal.update({
      where: { id },
      data: {
        status: "shortlisted", // or "winner" depending on logic, let's use shortlisted to match typical flow
        donorScore: score,
        donorFeedback: feedback
      }
    })
    revalidatePath(`/donor/${donorId}/proposals/${id}`)
    revalidatePath(`/donor/${donorId}/proposals`)
  }

  async function rejectProposal(score: number, feedback: string) {
    "use server"
    await prisma.proposal.update({
      where: { id },
      data: {
        status: "rejected",
        donorScore: score,
        donorFeedback: feedback
      }
    })
    revalidatePath(`/donor/${donorId}/proposals/${id}`)
    revalidatePath(`/donor/${donorId}/proposals`)
  }

  return (
    <ProposalDetailsClient 
      proposal={proposal} 
      donorId={donorId}
      onAccept={acceptProposal}
      onReject={rejectProposal}
    />
  )
}
