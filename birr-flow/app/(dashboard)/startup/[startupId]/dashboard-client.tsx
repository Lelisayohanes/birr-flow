"use client"

import React from "react";
import Link from "next/link";
import {
  Upload,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGrants } from "@/hooks/api/useGrants";
import { useProposals } from "@/hooks/api/useProposals";
import { useChallenges } from "@/hooks/api/useChallenges";

export function StartupDashboardClient({ startupId, userName }: { startupId: string; userName: string }) {
  const { data: myGrants, isLoading: isLoadingGrants } = useGrants({ startupId })
  const { data: myProposals, isLoading: isLoadingProposals } = useProposals({ startupId })
  const { data: challenges, isLoading: isLoadingChallenges } = useChallenges()

  if (isLoadingGrants || isLoadingProposals || isLoadingChallenges) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  const activeGrants = myGrants?.filter(g => g.status === 'active') || []
  
  const pendingProposals = myProposals?.filter(p => p.status === 'submitted') || []

  // Calculate some milestone stats from myGrants
  let verifiedMilestones = 0
  let pendingMilestones = 0
  
  myGrants?.forEach(grant => {
    const ms = (grant as { milestones?: Array<{ proofs?: Array<{ submittedAt: string | Date; status: string }> }> }).milestones || [];
    ms.forEach(m => {
      const latestProof = m.proofs && m.proofs.length > 0 
        ? m.proofs.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())[0]
        : null;
      if (latestProof?.status === 'approved') verifiedMilestones++;
      if (latestProof?.status === 'pending') pendingMilestones++;
    });
  });

  const publicChallenges = challenges?.filter(c => c.isPublic && c.status === 'open') || []

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900">Hello, {userName}</h1>
            <Badge className="bg-[#e0f5ea] text-[#067a52] hover:bg-[#e0f5ea] font-bold px-2 py-0.5 border-none text-[10px] uppercase">Verified</Badge>
          </div>
          <p className="text-slate-500 mt-2">Track your active grants and submit milestone proofs.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/startup/${startupId}/passport`}>
            <Button variant="outline" className="font-semibold rounded-lg shadow-sm">View Passport</Button>
          </Link>
          <Link href={`/startup/${startupId}/grants`}>
            <Button className="bg-[#067a52] hover:bg-[#056644] text-white font-semibold rounded-lg shadow-sm">
              <Upload className="w-4 h-4 mr-2" /> Upload Proof
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
          <div className="text-sm font-medium text-slate-500 mb-1">Active Grants</div>
          <div className="text-3xl font-bold text-slate-900">{activeGrants.length}</div>
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
          <div className="text-sm font-medium text-slate-500 mb-1">Verified Milestones</div>
          <div className="text-3xl font-bold text-slate-900">{verifiedMilestones}</div>
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
          <div className="text-sm font-medium text-slate-500 mb-1">Pending Proposals</div>
          <div className="text-3xl font-bold text-slate-900">{pendingProposals.length}</div>
        </div>
        <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-5 shadow-sm">
          <div className="text-sm font-medium text-[#166534] mb-1">Accountability Score</div>
          <div className="text-3xl font-bold text-[#15803d]">92/100</div>
        </div>
      </div>

      {/* Available Funding Challenges */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-slate-900">Available Funding Challenges</h2>
          <Link href={`/startup/${startupId}/challenges`} className="text-sm font-medium text-[#067a52] hover:underline">
            View All
          </Link>
        </div>
        
        {publicChallenges.length === 0 ? (
           <div className="p-8 text-center text-slate-500 border border-slate-100 rounded-xl bg-white shadow-sm">No public challenges available right now.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {publicChallenges.slice(0, 3).map((challenge) => (
              <Link key={challenge.id} href={`/startup/${startupId}/challenges/${challenge.id}`} className="block group h-full">
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-[#067a52] hover:shadow-md transition-all h-full flex flex-col">
                  <Badge className="w-max bg-slate-100 text-slate-700 font-medium px-2 py-0.5 border-none mb-3">
                    {challenge.sector || 'General'}
                  </Badge>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#067a52] transition-colors line-clamp-1">{challenge.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2">
                    {challenge.problemStatement || "No description provided."}
                  </p>
                  <div className="text-xs font-medium text-slate-400 mt-auto">
                    Deadline: {challenge.submissionDeadline ? new Date(challenge.submissionDeadline).toLocaleDateString() : 'None'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
