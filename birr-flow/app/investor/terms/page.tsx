import React from "react";
import { FileText } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function MilestoneTermsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Milestone Terms</h1>
        <p className="text-slate-500">Configure and manage governance layers for your capital.</p>
      </div>

      <Card className="rounded-3xl border-none shadow-sm overflow-hidden">
        <CardHeader className="flex flex-row items-start gap-4 pb-2 pt-8 px-8">
          <div className="w-12 h-12 bg-[#00b87c] rounded-xl flex items-center justify-center text-white shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-slate-900">Set Milestone Terms</CardTitle>
            <CardDescription className="text-sm mt-1 text-slate-500">
              Build the governance layer for your capital.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-8 pt-6">
          
          {/* Stepper */}
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 whitespace-nowrap bg-[#e0f5ea] px-3 py-1.5 rounded-full">
              <div className="w-5 h-5 rounded-full bg-[#00b87c] text-white flex items-center justify-center text-[10px] font-bold">1</div>
              <span className="text-xs font-bold text-[#00b87c]">Select Startup</span>
            </div>
            <div className="w-4 h-[1px] bg-slate-200 shrink-0"></div>
            <div className="flex items-center gap-2 whitespace-nowrap px-2">
              <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-[10px] font-bold">2</div>
              <span className="text-xs font-semibold text-slate-500">Funding Type</span>
            </div>
            <div className="w-4 h-[1px] bg-slate-200 shrink-0"></div>
            <div className="flex items-center gap-2 whitespace-nowrap px-2">
              <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-[10px] font-bold">3</div>
              <span className="text-xs font-semibold text-slate-500">Define Terms</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Select Portfolio Company</label>
                <Select defaultValue="lasta">
                  <SelectTrigger className="w-full h-12 bg-white rounded-xl border-slate-200">
                    <SelectValue placeholder="Select company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lasta">Lasta Logistics</SelectItem>
                    <SelectItem value="kero">Kero Tech</SelectItem>
                    <SelectItem value="buna">Buna Flow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Tranche Frequency</label>
                <Select defaultValue="monthly">
                  <SelectTrigger className="w-full h-12 bg-white rounded-xl border-slate-200">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="milestone">Milestone-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="bg-[#f4fbf7] p-5 rounded-2xl border border-[#e0f5ea] flex flex-col justify-center">
              <h4 className="text-[10px] font-bold text-[#00b87c] tracking-widest uppercase mb-2">GOVERNANCE NOTE</h4>
              <p className="text-sm text-slate-600 italic">
                "Startup must agree to these terms before any money moves. BirrFlow does not execute legal agreements – it's your proof layer."
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <Button variant="ghost" className="text-slate-500 font-semibold hover:bg-slate-100">Cancel</Button>
            <Button className="bg-[#00b87c] hover:bg-[#009f6b] text-white font-bold px-8 rounded-xl h-12">
              Next Step
            </Button>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
}