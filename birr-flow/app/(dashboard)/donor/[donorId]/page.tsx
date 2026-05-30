export const dynamic = 'force-dynamic'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, FileText, ArrowUpRight, DollarSign } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import prisma from "@/lib/prisma"

interface DonorOverviewProps {
  params: Promise<{ donorId: string }>
}

import { redirect } from "next/navigation"

export default async function DonorDashboardOverview({ params }: DonorOverviewProps) {
  const { donorId } = await params

  if (!/^[0-9a-fA-F]{24}$/.test(donorId)) {
    return redirect("/donor")
  }

  const donor = await prisma.user.findUnique({
    where: { id: donorId },
    include: { donorProfile: true }
  })

  const challenges = await prisma.challenge.findMany({
    where: { donorId },
    include: {
      proposals: true
    }
  })

  const grants = await prisma.grant.findMany({
    where: { donorId },
    include: {
      milestones: {
        include: {
          proofs: true
        }
      }
    }
  })

  const proposals = challenges.flatMap(c => c.proposals)
  const activeGrants = grants.filter(g => g.status === "active")
  
  // Calculate proofs waiting for review
  let proofsWaitingCount = 0
  grants.forEach(grant => {
    grant.milestones.forEach(milestone => {
      milestone.proofs.forEach(proof => {
        if (proof.status === "pending") {
          proofsWaitingCount++
        }
      })
    })
  })

  const totalFunded = grants.reduce((sum, g) => sum + g.totalAmount, 0)
  const activeChallengesCount = challenges.filter(c => c.status === "open").length

  const recentProposals = proposals.slice(0, 4) // simple slice for now

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Overview</h2>
          <p className="text-gray-500">Monitor your grants, challenges, and proposal reviews.</p>
        </div>
        <Link href={`/donor/${donorId}/challenges/new`}>
          <Button className="gap-2">
            <Target className="h-4 w-4" />
            Create Challenge
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Grants</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{activeGrants.length}</div>
            <div className="text-xs text-green-600 flex items-center mt-1 font-medium">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +2 this month
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Milestones Due</CardTitle>
            <Target className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">8</div>
            <div className="text-xs text-gray-500 mt-1">
              Across all active grants
            </div>
          </CardContent>
        </Card>

        <Card className={proofsWaitingCount > 0 ? "border-l-4 border-l-green-500 bg-green-50" : "border-l-4 border-l-gray-300"}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Proofs Waiting</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-gray-900">{proofsWaitingCount}</div>
              {proofsWaitingCount > 0 && (
                <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  ACTION REQUIRED
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Awaiting your approval
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Funds Disbursed</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <div className="text-3xl font-bold text-gray-900">{(totalFunded / 1000000).toFixed(1)}M</div>
              <span className="text-sm font-medium text-gray-500">ETB</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              84% of allocated cap
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Proposals</CardTitle>
            <CardDescription>Proposals recently submitted to your challenges.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProposals.length > 0 ? (
                recentProposals.map((proposal) => (
                  <div key={proposal.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{proposal.ideaDescription?.substring(0, 50) || "No description"}</p>
                      <p className="text-xs text-gray-500">Status: {proposal.status}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/donor/${donorId}/proposals/${proposal.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No proposals found.</p>
              )}
            </div>
            {recentProposals.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href={`/donor/${donorId}/proposals`} className="text-sm text-blue-600 hover:underline flex items-center justify-center gap-1">
                  View all proposals <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
