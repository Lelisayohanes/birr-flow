import React from "react";
import { FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProofsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Proofs Waiting for Your Approval</h1>
        <p className="text-slate-500">Review evidence and release capital tranches.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Card className="rounded-3xl border-none shadow-sm overflow-hidden flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e0f5ea] text-[#00b87c] font-bold flex items-center justify-center text-lg">L</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Lasta Logistics</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">SERIES A - MILESTONE 3</div>
                </div>
              </div>
              <Badge className="bg-[#fdf3e8] text-[#c25e03] hover:bg-[#fdf3e8] text-[10px] font-bold border-none uppercase tracking-wider">PENDING REVIEW</Badge>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">Launch Merchant App to 500 users</h3>
            <p className="text-sm text-slate-500 mb-6 flex-1">
              Evidence: User metrics report, App Store live link, 10 customer testimonials.
            </p>

            <div className="h-32 bg-slate-100 rounded-xl mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center opacity-80 mix-blend-multiply"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            <div className="bg-[#f4fbf7] p-4 rounded-xl border border-[#e0f5ea] flex justify-between items-center mb-6">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Requested<br/>Tranche</div>
              <div className="text-right">
                <div className="text-xl font-extrabold text-[#00b87c]">250,000</div>
                <div className="text-xs font-bold text-[#00b87c]">ETB</div>
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <Button className="w-full bg-[#00b87c] hover:bg-[#009f6b] text-white font-bold py-6 rounded-xl">
                Approve & Release Tranche
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full py-5 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 font-bold">Reject</Button>
                <Button variant="outline" className="w-full py-5 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 font-bold">Clarify</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="rounded-3xl border-none shadow-sm overflow-hidden flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e6f0fa] text-[#0066cc] font-bold flex items-center justify-center text-lg">K</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Kero Tech</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">SEED - MILESTONE 1</div>
                </div>
              </div>
              <Badge className="bg-[#fdf3e8] text-[#c25e03] hover:bg-[#fdf3e8] text-[10px] font-bold border-none uppercase tracking-wider">PENDING REVIEW</Badge>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">Finalize Hospital Partnerships (3)</h3>
            <p className="text-sm text-slate-500 mb-6 flex-1">
              Evidence: Signed MOUs from Black Lion Hospital, St. Paul's, and Girum General.
            </p>

            <div className="h-32 bg-slate-50 border border-slate-200 rounded-xl mb-6 flex flex-col items-center justify-center gap-2 border-dashed">
               <FileText className="w-8 h-8 text-slate-300" />
               <span className="text-xs font-bold text-slate-500">MOU_Bundle_Kero.pdf</span>
            </div>

            <div className="bg-[#f4fbf7] p-4 rounded-xl border border-[#e0f5ea] flex justify-between items-center mb-6">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Requested<br/>Tranche</div>
              <div className="text-right">
                <div className="text-xl font-extrabold text-[#00b87c]">120,000</div>
                <div className="text-xs font-bold text-[#00b87c]">ETB</div>
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <Button className="w-full bg-[#00b87c] hover:bg-[#009f6b] text-white font-bold py-6 rounded-xl">
                Approve & Release Tranche
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full py-5 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 font-bold">Reject</Button>
                <Button variant="outline" className="w-full py-5 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 font-bold">Clarify</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}