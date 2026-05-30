import React from "react";
import { Info } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function CapTablePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Cap Table</h1>
        <p className="text-slate-500">View and manage ownership details across your portfolio.</p>
      </div>

      <Card className="rounded-3xl border-none shadow-sm overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-bold">Cap Table / Share Snapshot</CardTitle>
          <Info className="w-4 h-4 text-slate-400" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-100 hover:bg-transparent">
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500">Startup</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500 text-right">Ownership %</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500 text-right">Shares</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-wider text-slate-500 text-right">Last Valuation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-slate-100">
                <TableCell className="font-semibold text-slate-900 py-4">Lasta Logistics</TableCell>
                <TableCell className="text-right font-medium text-slate-600 py-4">12.5%</TableCell>
                <TableCell className="text-right font-medium text-slate-600 py-4">125,000</TableCell>
                <TableCell className="text-right py-4">
                  <div className="font-bold text-slate-900">15,000,000</div>
                  <div className="text-[10px] font-bold text-slate-500">ETB</div>
                </TableCell>
              </TableRow>
              <TableRow className="border-slate-100">
                <TableCell className="font-semibold text-slate-900 py-4">Kero Tech</TableCell>
                <TableCell className="text-right font-medium text-slate-600 py-4">8.0%</TableCell>
                <TableCell className="text-right font-medium text-slate-600 py-4">80,000</TableCell>
                <TableCell className="text-right py-4">
                  <div className="font-bold text-slate-900">6,500,000</div>
                  <div className="text-[10px] font-bold text-slate-500">ETB</div>
                </TableCell>
              </TableRow>
              <TableRow className="border-slate-100">
                <TableCell className="font-semibold text-slate-900 py-4">Buna Flow</TableCell>
                <TableCell className="text-right font-medium text-slate-600 py-4">15.0%</TableCell>
                <TableCell className="text-right font-medium text-slate-600 py-4">150,000</TableCell>
                <TableCell className="text-right py-4">
                  <div className="font-bold text-slate-900">8,200,000</div>
                  <div className="text-[10px] font-bold text-slate-500">ETB</div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-[10px] text-slate-400 mt-6 italic">
            *This is for tracking only. Consult your legal documents for binding records. Valuation estimates are based on most recent funding rounds.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}