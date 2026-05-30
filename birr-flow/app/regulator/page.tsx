import React from "react";
import { 
  ShieldCheck, 
  AlertTriangle, 
  Download,
  Lock,
  RefreshCw,
  Filter,
  CheckCircle2,
  ClipboardCheck,
  Network,
  Plus
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function RegulatoryDashboard() {
  return (
    <div className="space-y-8">
      
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">National Bank of Ethiopia – Oversight View</h1>
          <p className="text-slate-500 text-sm">Data anonymised and tamper-evident across all regulated financial sectors.</p>
        </div>
        <div className="bg-[#e0f5ea] text-[#00b87c] px-4 py-2 rounded-full flex items-center gap-2 border border-[#b2e5cc]">
          <div className="w-2 h-2 rounded-full bg-[#00b87c]"></div>
          <span className="text-xs font-semibold">Active Verification System: Secure</span>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Grants Tracked */}
        <Card className="rounded-2xl border border-slate-100 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500 mb-4">Total Grants Tracked</p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-slate-900">1,280</span>
              <Badge className="bg-slate-100 text-slate-500 hover:bg-slate-100 border-none rounded-md px-2 py-0.5 text-[10px] font-semibold mb-1">
                Last 12<br/>months
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Total Funds Utilised */}
        <Card className="rounded-2xl border border-slate-100 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500 mb-4">Total Funds Utilised</p>
            <div className="flex items-end justify-between">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-slate-900">47.3M</span>
                <span className="text-sm font-semibold text-slate-500 mb-1">ETB</span>
              </div>
              <div className="text-[10px] font-semibold text-[#00b87c] text-right mb-1">
                Reported via<br/>Proof
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suspicious Flags Raised */}
        <Card className="rounded-2xl border-none shadow-sm bg-[#feefef]">
          <CardContent className="p-6">
            <p className="text-sm font-semibold text-[#d32f2f] mb-4">Suspicious Flags Raised</p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-[#d32f2f]">23</span>
              <AlertTriangle className="w-5 h-5 text-[#d32f2f] mb-1" />
              <div className="text-[10px] font-semibold text-[#d32f2f] mb-1 leading-tight">
                Attention<br/>Required
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avg Milestone Completion */}
        <Card className="rounded-2xl border border-slate-100 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500 mb-4">Avg Milestone Completion</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-extrabold text-slate-900">78%</span>
              <span className="text-xs font-semibold text-slate-500 mb-1">Ecosystem-wide</span>
            </div>
          </CardContent>
        </Card>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Grant Utilisation by Sector Pie Chart */}
        <Card className="col-span-1 rounded-2xl border border-slate-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-slate-700">Grant Utilisation by Sector</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {/* Dummy Donut Chart */}
            <div className="relative w-48 h-48 my-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Fintech 28% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#5a6a8c" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="180.86" className="transform -rotate-90 origin-center" />
                {/* Clean Energy 34% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#007a53" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="165.79" className="transform rotate-[10deg] origin-center" />
                {/* Agriculture 22% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#a45a20" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="195.93" className="transform rotate-[132.4deg] origin-center" />
                {/* Other 16% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#c0d0c8" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="211.0" className="transform rotate-[211.6deg] origin-center" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-slate-900">100%</span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Allocated</span>
              </div>
            </div>
            
            {/* Legend */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 w-full mt-6 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#007a53]"></div>
                <span>Clean Energy (34%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5a6a8c]"></div>
                <span>Fintech (28%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#a45a20]"></div>
                <span>Agriculture (22%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0d0c8]"></div>
                <span>Other (16%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verify Proof Authenticity */}
        <Card className="col-span-1 lg:col-span-2 rounded-2xl border border-slate-100 shadow-sm bg-[#f8fbf9] flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00b87c]" />
              <CardTitle className="text-base font-semibold text-slate-800">Verify Proof Authenticity</CardTitle>
            </div>
            <span className="text-xs text-slate-500 font-medium">System Version: v4.1.2-Stable</span>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-end space-y-4">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 block">BLOCKCHAIN HASH INPUT</label>
              <div className="relative">
                <textarea 
                  className="w-full h-24 rounded-xl border border-slate-200 p-4 text-sm font-mono text-slate-600 bg-white focus:ring-1 focus:ring-[#00b87c] focus:outline-none resize-none shadow-sm"
                  placeholder="Paste proof hash from a BirrFlow report (e.g., 0x71C7656EC7ab88b098defB751B7401B5f6d8976F...)"
                ></textarea>
                <button className="absolute bottom-3 right-3 text-slate-400 hover:text-[#00b87c]">
                  <ClipboardCheck className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <Button className="w-full bg-[#006e4a] hover:bg-[#005c3e] text-white font-semibold py-6 rounded-xl flex items-center justify-center gap-2">
              <Network className="w-4 h-4" /> Verify Authenticity
            </Button>
            
            <div className="bg-[#eef8f3] border border-[#c1e6d4] rounded-xl p-4 flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-[#00b87c] flex items-center justify-center text-white shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#006e4a]">Hash matches original submission.</p>
                <p className="text-xs text-slate-600 mt-1">
                  No tampering detected. Cryptographic proof verified at 2023-11-24 14:32:01 UTC. Source: RegNode-04.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Recent Suspicious Activities Table */}
      <Card className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between bg-white border-b border-slate-100 px-6 py-4">
          <CardTitle className="text-base font-semibold text-slate-800">Recent Suspicious Activities (Anonymised)</CardTitle>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-xs font-semibold h-8 rounded-lg border-slate-200">
              <Filter className="w-3 h-3 mr-1" /> Filter High Risk
            </Button>
            <Button variant="outline" className="text-xs font-semibold h-8 rounded-lg border-slate-200">
              <RefreshCw className="w-3 h-3 mr-1" /> Refresh Feed
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500 pl-6">CASE ID</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500">SECTOR</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500">RISK LEVEL</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500">FLAG REASON</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500">DATE</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500">STATUS</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500 text-right pr-6">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                <TableCell className="font-medium text-slate-600 pl-6 text-sm">#BF-9921</TableCell>
                <TableCell className="text-slate-600 text-sm">Agriculture</TableCell>
                <TableCell>
                  <Badge className="bg-[#feefef] text-[#d32f2f] hover:bg-[#feefef] border-none text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">CRITICAL</Badge>
                </TableCell>
                <TableCell className="text-slate-600 text-sm">Velocity Threshold Exceeded</TableCell>
                <TableCell className="text-slate-600 text-sm">2023-11-24</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]"></div>
                    <span className="text-sm text-slate-700 font-medium">Pending Review</span>
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <button className="text-[#008a5b] font-bold text-xs hover:underline">Audit<br/>Trail</button>
                </TableCell>
              </TableRow>
              
              <TableRow className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                <TableCell className="font-medium text-slate-600 pl-6 text-sm">#BF-8104</TableCell>
                <TableCell className="text-slate-600 text-sm">Fintech</TableCell>
                <TableCell>
                  <Badge className="bg-[#fff4e5] text-[#ed6c02] hover:bg-[#fff4e5] border-none text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">MEDIUM</Badge>
                </TableCell>
                <TableCell className="text-slate-600 text-sm">Atypical Vendor Wallet</TableCell>
                <TableCell className="text-slate-600 text-sm">2023-11-23</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#008a5b]"></div>
                    <span className="text-sm text-slate-700 font-medium">Investigating</span>
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <button className="text-[#008a5b] font-bold text-xs hover:underline">Audit<br/>Trail</button>
                </TableCell>
              </TableRow>

              <TableRow className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                <TableCell className="font-medium text-slate-600 pl-6 text-sm">#BF-7732</TableCell>
                <TableCell className="text-slate-600 text-sm">Clean Energy</TableCell>
                <TableCell>
                  <Badge className="bg-[#e8f4fd] text-[#0288d1] hover:bg-[#e8f4fd] border-none text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">LOW</Badge>
                </TableCell>
                <TableCell className="text-slate-600 text-sm">Geographic Drift</TableCell>
                <TableCell className="text-slate-600 text-sm">2023-11-22</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-sm text-slate-700 font-medium">Escalated</span>
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <button className="text-[#008a5b] font-bold text-xs hover:underline">Audit<br/>Trail</button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Export Section */}
      <Card className="rounded-2xl border border-slate-100 shadow-sm bg-[#f8fbf9]">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Export Regulatory Data</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                Compile and export datasets for periodic reporting. NBE administrators only for full audit trails.
              </p>
            </div>
            
            <div className="flex-1 w-full flex flex-col sm:flex-row items-end gap-4 justify-end">
              <div className="space-y-4 w-full max-w-[200px]">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">DATE RANGE</label>
                  <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 font-medium flex items-center gap-2">
                    <div className="w-4 h-4 text-slate-400" />
                    Nov 01 - Nov 30, 2023
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">SECTOR</label>
                  <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 font-medium flex items-center justify-between">
                    All Sectors
                    <div className="w-3 h-3 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 w-full sm:w-auto">
                <Button className="w-full sm:w-48 bg-[#64748b] hover:bg-[#475569] text-white rounded-xl py-6 flex flex-col items-center justify-center gap-1 shadow-sm h-auto">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span className="font-semibold">Export CSV</span>
                  </div>
                  <span className="text-[10px] opacity-80">(Anonymised)</span>
                </Button>
                <Button className="w-full sm:w-48 bg-[#1e293b] hover:bg-[#0f172a] text-white rounded-xl py-6 flex flex-col items-center justify-center gap-1 shadow-sm h-auto">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span className="font-semibold">Full Audit Hashes</span>
                  </div>
                  <span className="text-[10px] opacity-80">(NBE Only)</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Footer */}
      <div className="text-center pb-4 relative">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          © 2024 NATIONAL BANK OF ETHIOPIA | BIRRFLOW NETWORK OVERSIGHT MODULE
        </p>
        <button className="absolute right-0 bottom-0 w-12 h-12 bg-[#006e4a] rounded-full text-white flex items-center justify-center shadow-lg hover:bg-[#005c3e] transition-colors">
          <Plus className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
}