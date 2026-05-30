export const dynamic = 'force-dynamic'

import prisma from "@/lib/prisma"
import GrantsClient from "./grants-client"

import { redirect } from "next/navigation"

export default async function DonorGrantsPage({ params }: { params: Promise<{ donorId: string }> }) {
  const { donorId } = await params

  if (!/^[0-9a-fA-F]{24}$/.test(donorId)) {
    return redirect("/donor")
  }

  const grants = await prisma.grant.findMany({
    where: { donorId },
    include: {
      startup: true,
      proposal: {
        include: {
          challenge: true
        }
      },
      milestones: true,
      tranches: true
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  const formattedData = grants.map(g => {
    const totalReleased = g.tranches.reduce((sum, t) => sum + t.amountReleased, 0)
    const progress = g.totalAmount > 0 ? Math.round((totalReleased / g.totalAmount) * 100) : 0

    return {
      id: g.id,
      startupName: g.startup.fullName || g.startup.email,
      challengeName: g.proposal?.challenge?.title || "Direct Grant",
      totalAmount: g.totalAmount,
      status: g.status,
      progress: progress,
    }
  })

  return <GrantsClient data={formattedData} donorId={donorId} />
}
