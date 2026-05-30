import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Upload,
  RefreshCcw,
  CheckCircle,
  FileText,
  Download,
  ChevronLeft,
  ChevronRight,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StartupDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Hello, Kacha Technologies.</h1>
        <p className="text-lg text-slate-600 mb-8">Prove your progress. Build your reputation. Win more funding.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 rounded-2xl border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Active Grants</div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-[#067a52]">3</span>
              <span className="text-slate-600 font-medium">Total active</span>
            </div>
          </Card>
          
          <Card className="p-6 rounded-2xl border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Milestones Completed</div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-[#067a52]">7</span>
              <span className="text-slate-600 font-medium">Verified</span>
            </div>
          </Card>
          
          <Card className="p-6 rounded-2xl border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Pending Approvals</div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-[#ff8533]">2</span>
              <span className="text-slate-600 font-medium">In review</span>
            </div>
          </Card>
          
          <Card className="p-6 rounded-2xl border-[#c3ebd6] bg-[#eaf5ef] shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="text-sm font-bold text-[#067a52] uppercase tracking-wider mb-2 z-10">Accountability Score</div>
            <div className="flex items-baseline gap-1 z-10">
              <span className="text-5xl font-extrabold text-[#067a52]">92</span>
              <span className="text-[#067a52] font-bold">/ 100</span>
            </div>
            {/* Badge Icon watermark */}
            <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
              <ShieldCheck className="w-32 h-32 text-[#067a52]" />
            </div>
          </Card>
        </div>
      </div>

      {/* What to Prove Next */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-slate-900">What to Prove Next</h2>
          <Link href="/startup/milestones" className="text-[#067a52] font-semibold hover:underline">View All Milestones</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="p-6 rounded-2xl border-slate-100 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <Badge className="bg-[#fdf3e8] text-[#c25e03] hover:bg-[#fdf3e8] font-bold px-3 border-none">Pending</Badge>
              <span className="text-sm font-bold text-slate-500">Due Dec 12</span>
            </div>
            <h3 className="text-lg font-bold mb-1">Product Market Fit Survey</h3>
            <p className="text-slate-500 text-sm mb-6 flex-1">Seed Funding Phase 2</p>
            <Button className="w-full bg-[#067a52] hover:bg-[#056644] text-white font-semibold rounded-xl py-6 text-md">
              <Upload className="w-4 h-4 mr-2" /> Upload Proof
            </Button>
          </Card>
          
          {/* Card 2 */}
          <Card className="p-6 rounded-2xl border-slate-100 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <Badge className="bg-[#e0f5ea] text-[#067a52] hover:bg-[#e0f5ea] font-bold px-3 border-none">Approved</Badge>
              <span className="text-sm font-bold text-slate-500">Done Nov 28</span>
            </div>
            <h3 className="text-lg font-bold mb-1">MVP User Interviews</h3>
            <p className="text-slate-500 text-sm mb-6 flex-1">Innovation Grant</p>
            <Button variant="outline" className="w-full bg-slate-100 border-none text-slate-400 font-semibold rounded-xl py-6 text-md cursor-not-allowed">
              <CheckCircle className="w-4 h-4 mr-2" /> Proof Verified
            </Button>
          </Card>
          
          {/* Card 3 */}
          <Card className="p-6 rounded-2xl border-slate-100 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <Badge className="bg-[#fce8e8] text-[#d93036] hover:bg-[#fce8e8] font-bold px-3 border-none">Rejected</Badge>
              <span className="text-sm font-bold text-slate-500">Overdue</span>
            </div>
            <h3 className="text-lg font-bold mb-1">Technical Roadmap V1</h3>
            <p className="text-slate-500 text-sm mb-6 flex-1">EquityFlow Accelerator</p>
            <Button className="w-full bg-[#067a52] hover:bg-[#056644] text-white font-semibold rounded-xl py-6 text-md">
              <RefreshCcw className="w-4 h-4 mr-2" /> Re-upload Proof
            </Button>
          </Card>
        </div>
      </div>

      {/* Upload & Passport Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload Form */}
        <Card className="lg:col-span-2 p-8 rounded-2xl border-slate-100 shadow-sm flex flex-col">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-[#e0f5ea] rounded-full flex items-center justify-center text-[#067a52] shrink-0">
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Upload Proof – Simple as a Selfie</h2>
              <p className="text-slate-500">Submit your progress evidence to boost your score.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Select Grant</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#067a52]/20 focus:border-[#067a52]">
                <option>Innovation Grant #420</option>
                <option>Seed Funding Phase 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Select Milestone</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#067a52]/20 focus:border-[#067a52]">
                <option>Hiring Key Personnel</option>
                <option>Product Market Fit</option>
              </select>
            </div>
          </div>
          
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center mb-6 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-slate-400">
              <FileText className="w-6 h-6" />
            </div>
            <div className="font-bold text-slate-700 mb-1">Drag and drop your proof here</div>
            <div className="text-sm text-slate-500 mb-4">Supports PDF, JPG, MP4 or Link</div>
            <Button variant="secondary" className="bg-[#e2e8f0] hover:bg-[#cbd5e1] text-slate-700 font-semibold px-6">
              Browse Files
            </Button>
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-bold text-slate-700 mb-2">Optional Comments</label>
            <textarea 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#067a52]/20 focus:border-[#067a52] min-h-[100px] resize-none"
              placeholder="Add context to your proof..."
            ></textarea>
          </div>
          
          <Button className="w-full bg-[#067a52] hover:bg-[#056644] text-white font-bold rounded-xl py-6 text-lg mt-auto">
            Submit Proof
          </Button>
        </Card>

        {/* Passport Card */}
        <div className="bg-[#1e293b] rounded-2xl p-8 text-white relative overflow-hidden flex flex-col">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#334155] rounded-full blur-3xl opacity-50"></div>
          
          <div className="flex justify-between items-start mb-10 relative z-10">
            <div>
              <h2 className="text-2xl font-bold mb-1">Accountability<br/>Passport</h2>
              <div className="text-xs text-slate-400 font-bold tracking-widest uppercase">Verified Startup Entity</div>
            </div>
            <div className="bg-[#00c07f] rounded-full p-2 shadow-[0_0_15px_rgba(0,192,127,0.3)]">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="text-4xl font-extrabold text-[#00c07f] mb-10 relative z-10">Kacha Tech</div>
          
          <div className="grid grid-cols-3 gap-4 mb-auto relative z-10 border-b border-slate-700 pb-8">
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Current Score</div>
              <div className="text-2xl font-bold flex items-baseline gap-1">92.4 <span className="text-xs font-normal text-slate-500">pts</span></div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Verified Grants</div>
              <div className="text-2xl font-bold">04</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Milestones</div>
              <div className="text-2xl font-bold">12</div>
            </div>
          </div>
          
          <div className="pt-8 flex items-end justify-between relative z-10 mt-auto">
            <div className="bg-white p-2 rounded-xl">
              <div className="w-16 h-16 bg-slate-100 flex items-center justify-center border border-slate-200">
                <div className="w-12 h-12 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BF-KACHA-8891')] bg-contain"></div>
              </div>
            </div>
            <Button variant="outline" className="bg-[#334155] border-none text-white hover:bg-[#475569] font-semibold">
              <Download className="w-4 h-4 mr-2" /> Generate PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Available Funding Challenges */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Available Funding Challenges</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Challenge 1 */}
          <Card className="p-8 rounded-2xl border-slate-100 shadow-sm flex flex-col">
            <Badge className="w-max bg-[#eff6ff] text-[#3b82f6] hover:bg-[#eff6ff] font-bold px-3 py-1 border-none mb-6">Fintech</Badge>
            <h3 className="text-xl font-bold mb-3">National Digital Payment Scale-up</h3>
            <p className="text-slate-500 text-sm mb-8 flex-1">Implement seamless micro-payments for rural merchants.</p>
            
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="text-xs font-bold text-slate-500 mb-1">Prize Pool</div>
                <div className="text-xl font-extrabold text-[#067a52]">$50,000</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-500 mb-1">Deadline</div>
                <div className="text-sm font-bold">Jan 15, 2025</div>
              </div>
            </div>
            
            <Button className="w-full bg-[#f0fdf4] text-[#067a52] hover:bg-[#dcfce7] font-bold rounded-xl py-6">
              Submit Proposal
            </Button>
          </Card>
          
          {/* Challenge 2 */}
          <Card className="p-8 rounded-2xl border-slate-100 shadow-sm flex flex-col">
            <Badge className="w-max bg-[#fef3c7] text-[#d97706] hover:bg-[#fef3c7] font-bold px-3 py-1 border-none mb-6">Sustainability</Badge>
            <h3 className="text-xl font-bold mb-3">Green Energy Ledger Challenge</h3>
            <p className="text-slate-500 text-sm mb-8 flex-1">Blockchain-based tracking for solar energy credits.</p>
            
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="text-xs font-bold text-slate-500 mb-1">Prize Pool</div>
                <div className="text-xl font-extrabold text-[#067a52]">$120,000</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-500 mb-1">Deadline</div>
                <div className="text-sm font-bold">Feb 28, 2025</div>
              </div>
            </div>
            
            <Button className="w-full bg-[#f0fdf4] text-[#067a52] hover:bg-[#dcfce7] font-bold rounded-xl py-6">
              Submit Proposal
            </Button>
          </Card>
          
          {/* Challenge 3 */}
          <Card className="p-8 rounded-2xl border-slate-100 shadow-sm flex flex-col">
            <Badge className="w-max bg-[#e0f5ea] text-[#067a52] hover:bg-[#e0f5ea] font-bold px-3 py-1 border-none mb-6">Social Impact</Badge>
            <h3 className="text-xl font-bold mb-3">Financial Literacy AI Assistant</h3>
            <p className="text-slate-500 text-sm mb-8 flex-1">Personalized financial advice for unbanked youth.</p>
            
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="text-xs font-bold text-slate-500 mb-1">Prize Pool</div>
                <div className="text-xl font-extrabold text-[#067a52]">$35,000</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-500 mb-1">Deadline</div>
                <div className="text-sm font-bold">Dec 30, 2024</div>
              </div>
            </div>
            
            <Button className="w-full bg-[#f0fdf4] text-[#067a52] hover:bg-[#dcfce7] font-bold rounded-xl py-6">
              Submit Proposal
            </Button>
          </Card>
        </div>
      </div>

      {/* Identity Verified Banner */}
      <Card className="p-8 rounded-2xl border-slate-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-[#e0f5ea] rounded-2xl flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-[#067a52]" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold">Identity Verified</h3>
              <Badge className="bg-[#e0f5ea] text-[#067a52] hover:bg-[#e0f5ea] font-bold px-2 py-0.5 border-none text-[10px] uppercase">Tier 3</Badge>
            </div>
            <p className="text-slate-500 max-w-2xl">
              Your identity and company registration are fully verified. This boosts your Accountability Score by +15% and grants access to Platinum-tier challenges.
            </p>
          </div>
        </div>
        <Button variant="outline" className="font-semibold px-6 py-6 rounded-xl shrink-0">
          Manage Credentials
        </Button>
      </Card>

    </div>
  );
}
