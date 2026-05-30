export const dynamic = 'force-dynamic'

import prisma from "@/lib/prisma"
import ChallengesClient from "./challenges-client"

import { redirect } from "next/navigation"

export default async function DonorChallengesPage({ params }: { params: Promise<{ donorId: string }> }) {
  const { donorId } = await params

  if (!/^[0-9a-fA-F]{24}$/.test(donorId)) {
    return redirect("/donor")
  }

  const challenges = await prisma.challenge.findMany({
    where: { donorId },
    include: {
      proposals: true,
    },
    orderBy: {
      submissionDeadline: "asc"
    }
  })

  const formattedData = challenges.map(c => ({
    id: c.id,
    title: c.title,
    status: c.status,
    submissionDeadline: c.submissionDeadline ? c.submissionDeadline.toISOString().split('T')[0] : "No deadline",
    proposalsCount: c.proposals.length,
  }))

  return <ChallengesClient data={formattedData} donorId={donorId} />
}
