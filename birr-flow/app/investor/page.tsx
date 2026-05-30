import React from "react";
import { 
  Briefcase, 
  TrendingUp, 
  AlertCircle,
  FileCheck,
  Building
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function InvestorDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Portfolio Overview</h1>
        <p className="text-slate-500 text-sm">Monitor your investments, cap tables, and verifiable milestones across your startups.</p>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Invested */}
        <Card className="rounded-2xl border-slate-100 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500 mb-4">Total Invested (Active)</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-extrabold text-slate-900">12.5M</span>
              <span className="text-sm font-bold text-slate-500 mb-1">ETB</span>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Startups */}
        <Card className="rounded-2xl border-slate-100 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500 mb-4">Startups Funded</p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-slate-900">8</span>
              <Building className="w-5 h-5 text-slate-400 mb-1" />
            </div>
          </CardContent>
        </Card>

        {/* Milestones Verified */}
        <Card className="rounded-2xl border-slate-100 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500 mb-4">Milestones Verified</p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-slate-900">42</span>
              <FileCheck className="w-5 h-5 text-[#00b87c] mb-1" />
            </div>
          </CardContent>
        </Card>

        {/* Action Needed */}
        <Card className="rounded-2xl border-none shadow-sm bg-[#fff8e6]">
          <CardContent className="p-6">
            <p className="text-sm font-semibold text-[#b8860b] mb-4">Action Needed</p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-[#b8860b]">3</span>
              <AlertCircle className="w-5 h-5 text-[#b8860b] mb-1" />
              <div className="text-[10px] font-semibold text-[#b8860b] mb-1 leading-tight">
                Pending<br/>Approvals
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 rounded-2xl border-slate-100 shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-100 px-6 py-4">
            <CardTitle className="text-base font-semibold text-slate-800">Recent Milestones Awaiting Review</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-100 hover:bg-transparent">
                  <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500 pl-6">STARTUP</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500">MILESTONE</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500 text-right pr-6">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-slate-100">
                  <TableCell className="font-medium text-slate-900 pl-6 py-4">Lasta Logistics</TableCell>
                  <TableCell className="text-slate-600 py-4 text-sm">Deploy MVP routing algorithm</TableCell>
                  <TableCell className="text-right pr-6 py-4">
                    <button className="text-sm font-semibold text-blue-600 hover:underline">Review Proof</button>
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-100">
                  <TableCell className="font-medium text-slate-900 pl-6 py-4">Buna Flow</TableCell>
                  <TableCell className="text-slate-600 py-4 text-sm">Hire 5 developers</TableCell>
                  <TableCell className="text-right pr-6 py-4">
                    <button className="text-sm font-semibold text-blue-600 hover:underline">Review Proof</button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-1 rounded-2xl border-slate-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-slate-800">Portfolio Health</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative w-40 h-40 my-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e2e8f0" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0f172a" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="50.24" className="transform -rotate-90 origin-center" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-slate-900">80%</span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">On Track</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 text-center mt-4">
              80% of your portfolio startups are meeting their milestones within the agreed timeframe.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}