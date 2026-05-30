export const dynamic = 'force-dynamic'

import prisma from "@/lib/prisma"
import ProposalsClient from "./proposals-client"

import { redirect } from "next/navigation"

export default async function DonorProposalsPage({ params }: { params: Promise<{ donorId: string }> }) {
  const { donorId } = await params

  if (!/^[0-9a-fA-F]{24}$/.test(donorId)) {
    return redirect("/donor")
  }

  const challenges = await prisma.challenge.findMany({
    where: { donorId },
    select: { id: true, title: true }
  })

  const challengeIds = challenges.map(c => c.id)

  const proposals = await prisma.proposal.findMany({
    where: { challengeId: { in: challengeIds } },
    include: {
      startup: true,
      challenge: true,
    },
    orderBy: {
      submittedAt: "desc"
    }
  })

  const formattedData = proposals.map(p => ({
    id: p.id,
    startupName: p.startup.fullName || p.startup.email,
    challengeName: p.challenge.title,
    status: p.status,
    submittedAt: p.submittedAt.toISOString().split('T')[0],
    donorScore: p.donorScore,
  }))

  return <ProposalsClient data={formattedData} donorId={donorId} />
}
