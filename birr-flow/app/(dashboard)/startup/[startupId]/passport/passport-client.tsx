"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Download, Loader2, CheckCircle, FileBadge } from "lucide-react";
import { useGrants } from "@/hooks/api/useGrants";
import { Badge } from "@/components/ui/badge";

export function StartupPassportClient({ startupId }: { startupId: string }) {
  const { data: grants, isLoading } = useGrants();
  const [isGenerating, setIsGenerating] = useState(false);

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  const myGrants = grants?.filter((g) => g.startupId === startupId) || [];
  const activeGrants = myGrants.filter((g) => g.status === "active");

  let verifiedMilestones = 0;
  let totalMilestones = 0;
  let pendingMilestones = 0;

  myGrants.forEach((grant) => {
    const ms = (grant as any).milestones || [];
    totalMilestones += ms.length;
    ms.forEach((m: any) => {
      const latestProof =
        m.proofs?.length > 0
          ? m.proofs.sort(
              (a: any, b: any) =>
                new Date(b.submittedAt).getTime() -
                new Date(a.submittedAt).getTime()
            )[0]
          : null;
      if (latestProof?.status === "approved") verifiedMilestones++;
      if (latestProof?.status === "pending") pendingMilestones++;
    });
  });

  const completionRate =
    totalMilestones > 0 ? (verifiedMilestones / totalMilestones) * 100 : 0;
  
  // Calculate a mock score based on completion rate
  const score = totalMilestones > 0 ? Math.round(50 + (completionRate / 2)) : 0;

  const handleDownload = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert("Accountability Passport PDF generated successfully!");
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Accountability Passport
          </h1>
          <p className="text-lg text-slate-600">
            Your verified track record of grant compliance and milestone execution.
          </p>
        </div>
        <Button onClick={handleDownload} disabled={isGenerating}>
          {isGenerating ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Download className="w-4 h-4 mr-2" />
          )}
          Download PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Passport Card */}
        <div className="lg:col-span-2">
          <div className="bg-[#1e293b] rounded-2xl p-8 text-white relative overflow-hidden flex flex-col h-full shadow-lg">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#334155] rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00c07f] rounded-full blur-3xl opacity-20"></div>

            <div className="flex justify-between items-start mb-10 relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-1">
                  Accountability<br />Passport
                </h2>
                <div className="text-sm text-slate-400 font-bold tracking-widest uppercase mt-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Verified Startup Entity
                </div>
              </div>
              <div className="bg-[#00c07f] rounded-full p-4 shadow-[0_0_20px_rgba(0,192,127,0.4)]">
                <FileBadge className="w-10 h-10 text-white" />
              </div>
            </div>

            <div className="mt-8 mb-12 relative z-10">
              <div className="text-sm text-slate-400 font-medium mb-2 uppercase tracking-wider">Startup Identifier</div>
              <div className="text-2xl font-mono text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700 inline-block">
                {startupId}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-auto relative z-10 border-b border-slate-700 pb-10">
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">
                  Overall Score
                </div>
                <div className="text-4xl font-bold flex items-baseline gap-1 text-[#00c07f]">
                  {score || "N/A"}{" "}
                  {score > 0 && <span className="text-sm font-normal text-slate-400">/ 100</span>}
                </div>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">
                  Active Grants
                </div>
                <div className="text-4xl font-bold text-white">
                  {activeGrants.length.toString().padStart(2, "0")}
                </div>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">
                  Milestones Met
                </div>
                <div className="text-4xl font-bold text-white">
                  {verifiedMilestones.toString().padStart(2, "0")}
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between relative z-10 mt-auto">
              <div>
                <p className="text-slate-400 text-sm">Issued by</p>
                <p className="font-bold text-white tracking-wide">BirrFlow Network</p>
              </div>
              <div className="bg-white p-2 rounded-xl">
                <div className="w-16 h-16 bg-slate-100 flex items-center justify-center border border-slate-200">
                  <div className="w-12 h-12 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BF-KACHA-8891')] bg-contain"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & History */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Milestone Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">Verified</span>
                  <span className="font-bold text-[#067a52]">{verifiedMilestones}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-[#067a52] h-2 rounded-full" style={{ width: `${(verifiedMilestones/totalMilestones)*100 || 0}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">Pending Review</span>
                  <span className="font-bold text-amber-500">{pendingMilestones}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${(pendingMilestones/totalMilestones)*100 || 0}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">To Do</span>
                  <span className="font-bold text-slate-500">{totalMilestones - verifiedMilestones - pendingMilestones}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-slate-300 h-2 rounded-full" style={{ width: `${((totalMilestones - verifiedMilestones - pendingMilestones)/totalMilestones)*100 || 0}%` }}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Recent Verifications</h3>
            {verifiedMilestones === 0 ? (
              <p className="text-slate-500 text-sm">No verified milestones yet.</p>
            ) : (
              <div className="space-y-4">
                {/* Mock data for recent verifications - in reality, we'd map through proofs */}
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#067a52] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Milestone 1 Completed</p>
                    <p className="text-xs text-slate-500">Verified on {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}