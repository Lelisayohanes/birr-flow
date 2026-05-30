import React from "react";
import Link from "next/link";
import { 
  FileCheck, 
  AlertTriangle, 
  BarChart, 
  MessageSquare,
  Filter,
  CheckCircle,
  Flag,
  FileText,
  Lightbulb,
  Calendar,
  Mail,
  History,
  Bold,
  Italic,
  List,
  ShieldOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function OperationsDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">Hello, Sarah.</h1>
        <p className="text-slate-500 text-lg">Your desk – now lighter.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-36">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-slate-700 w-1/2 leading-tight">Proofs Pending Review</h3>
            <FileCheck className="w-5 h-5 text-[#065f46]" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-slate-900">14</span>
          </div>
          <p className="text-xs font-semibold text-[#00b87c]">↘ 4% since yesterday</p>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm flex flex-col justify-between min-h-36">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-red-900 w-1/2 leading-tight">Suspicious Flags Raised</h3>
            <AlertTriangle className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-red-700">3</span>
          </div>
          <p className="text-xs font-bold text-red-600 tracking-wide uppercase">URGENT ACTION REQUIRED</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-36">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-slate-700 w-1/2 leading-tight">Reports This Week</h3>
            <BarChart className="w-5 h-5 text-slate-400" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-slate-900">9</span>
          </div>
          <p className="text-xs text-slate-500">Targets: 12 reports</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-36">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-slate-700 w-1/2 leading-tight">Feedback Sent</h3>
            <MessageSquare className="w-5 h-5 text-orange-600" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-slate-900">5</span>
          </div>
          <p className="text-xs font-semibold text-orange-600">Losing Startups</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Proofs Awaiting Your Review */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 flex items-center justify-between border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Proofs Awaiting Your Review</h2>
                <p className="text-sm text-slate-500 mt-1">Prioritized by Milestone Deadlines</p>
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#f0fdf4] text-slate-700 font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Startup</th>
                    <th className="px-6 py-4">Milestone</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Risk</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-[#e0f2fe] text-[#0369a1] flex items-center justify-center font-bold">K</div>
                        <span className="font-medium text-slate-900">Kifiya Tech</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">Q3 Agri-Data Integration</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 font-semibold text-[10px] tracking-wider uppercase">INVOICE</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00b87c]"></div>
                        <span className="font-medium text-slate-700">12%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700">In Review</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-[#ffedd5] text-[#c2410c] flex items-center justify-center font-bold">L</div>
                        <span className="font-medium text-slate-900">Lemon Health</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">Clinical Trial Phase 1</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-purple-50 text-purple-700 font-semibold text-[10px] tracking-wider uppercase">PAYROLL</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span className="font-medium text-slate-700">68%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-red-100 text-red-700">High Risk</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-[#f1f5f9] text-[#475569] flex items-center justify-center font-bold">Z</div>
                        <span className="font-medium text-slate-900">ZayRide Africa</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">Fleet Electrification</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-semibold text-[10px] tracking-wider uppercase">REPORT</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00b87c]"></div>
                        <span className="font-medium text-slate-700">5%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700">In Review</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-white text-center border-t border-slate-100">
              <Link href="#" className="text-[#065f46] font-semibold text-sm hover:underline">
                View all 14 pending proofs
              </Link>
            </div>
          </div>

          {/* Flagged Proofs - Investigation Mode */}
          <div className="bg-[#f8faf9] rounded-2xl border border-slate-100 shadow-sm p-6 relative">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">Flagged Proofs – Investigation Mode</h2>
              <Badge className="bg-red-600 text-white hover:bg-red-700 font-bold tracking-wider text-[10px]">3 ACTIVE CASES</Badge>
            </div>
            
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <ShieldOff className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900 text-lg">Ethio-Organic Ltd.</h3>
                    <span className="text-xs text-slate-400 font-medium">2h ago</span>
                  </div>
                  <p className="text-slate-600 text-sm mt-1">Duplicated receipt detected in database (ID: 8942).</p>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2">Internal Investigation Notes</label>
                <textarea 
                  className="w-full h-24 p-3 bg-[#f0fdf4] border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#065f46] resize-none"
                  placeholder="Donor cannot see these notes..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="secondary" className="bg-slate-200 text-slate-800 hover:bg-slate-300 font-semibold">
                  Clear Flag
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                  Escalate to Donor
                </Button>
                <Button className="bg-slate-800 hover:bg-slate-900 text-white font-semibold ml-auto">
                  Lock for Audit
                </Button>
              </div>
            </div>
          </div>

          {/* Feedback Center */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">Feedback Center - Support Future Winners</h2>
              <Link href="#" className="flex items-center gap-2 text-[#065f46] text-sm font-semibold hover:underline">
                <History className="w-4 h-4" />
                History
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-3">Unaddressed Rejections</h3>
                <div className="space-y-3">
                  <div className="bg-[#f0fdf4] border border-slate-200 p-4 rounded-xl cursor-pointer hover:border-[#065f46] transition-colors">
                    <h4 className="font-semibold text-slate-900">SolarMesh Hubs</h4>
                    <p className="text-xs text-slate-500 mt-1">Smart Energy Challenge · 2 days ago</p>
                  </div>
                  <div className="bg-[#f0fdf4] border border-slate-200 p-4 rounded-xl cursor-pointer hover:border-[#065f46] transition-colors">
                    <h4 className="font-semibold text-slate-900">Buna Cold-Chain</h4>
                    <p className="text-xs text-slate-500 mt-1">Coffee Logistics Fund · 4 days ago</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8faf9] rounded-xl p-4 border border-slate-200 flex flex-col">
                <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-3">Anonymised Feedback Template</h3>
                <div className="bg-white border border-slate-200 rounded-lg flex-1 flex flex-col overflow-hidden">
                  <div className="border-b border-slate-100 p-2 flex items-center gap-2 bg-[#f8faf9]">
                    <button className="p-1.5 hover:bg-slate-200 rounded text-slate-600"><Bold className="w-4 h-4" /></button>
                    <button className="p-1.5 hover:bg-slate-200 rounded text-slate-600"><Italic className="w-4 h-4" /></button>
                    <button className="p-1.5 hover:bg-slate-200 rounded text-slate-600"><List className="w-4 h-4" /></button>
                  </div>
                  <textarea 
                    className="flex-1 w-full p-4 text-sm text-slate-600 focus:outline-none resize-none"
                    placeholder="Dear Team, thank you for your submission. While the scalability was impressive, the unit economics for rural deployment..."
                  ></textarea>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button className="bg-[#065f46] hover:bg-[#044e39] text-white font-semibold px-6">
                    Send Feedback
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar Widgets) */}
        <div className="space-y-6">
          
          {/* Review Queue Health */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Review Queue Health</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-semibold text-slate-700">Average Review Time</span>
                <span className="text-lg font-bold text-[#00b87c]">14.2 min</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-[#00b87c] h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div>
                <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Workload</span>
                <span className="text-lg font-bold text-slate-900">Moderate</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Fraud Rate</span>
                <span className="text-lg font-bold text-orange-600">0.8%</span>
              </div>
            </div>
          </div>

          {/* Quick Command */}
          <div className="bg-[#065f46] rounded-2xl shadow-sm p-6 text-white">
            <h3 className="font-bold mb-4">Quick Command</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-[#044e39] hover:bg-[#033a2a] p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors border border-transparent hover:border-[#00b87c]/30">
                <CheckCircle className="w-6 h-6 text-[#00b87c]" />
                <span className="text-xs font-semibold">Review</span>
              </button>
              <button className="bg-[#044e39] hover:bg-[#033a2a] p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors border border-transparent hover:border-red-400/30">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <span className="text-xs font-semibold">Flag</span>
              </button>
              <button className="bg-[#044e39] hover:bg-[#033a2a] p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors border border-transparent hover:border-blue-400/30">
                <BarChart className="w-6 h-6 text-blue-400" />
                <span className="text-xs font-semibold">Report</span>
              </button>
              <button className="bg-[#044e39] hover:bg-[#033a2a] p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors border border-transparent hover:border-orange-400/30">
                <MessageSquare className="w-6 h-6 text-orange-400" />
                <span className="text-xs font-semibold">Feedback</span>
              </button>
            </div>
          </div>

          {/* Tip Box */}
          <div className="bg-[#fff7ed] rounded-2xl border border-orange-100 p-5 flex gap-4">
            <Lightbulb className="w-6 h-6 text-orange-500 shrink-0" />
            <p className="text-sm text-orange-900 leading-relaxed">
              "Startups that receive feedback are <strong className="font-bold">2x more likely</strong> to win a future grant. Be kind, be specific."
            </p>
          </div>

          {/* Compliance Report */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-5">Compliance Report</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Donor</label>
                  <Select defaultValue="world-bank">
                    <SelectTrigger className="w-full text-sm">
                      <SelectValue placeholder="Select donor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="world-bank">World Bank</SelectItem>
                      <SelectItem value="ifc">IFC</SelectItem>
                      <SelectItem value="usaid">USAID</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Grant</label>
                  <Select defaultValue="agri-flow-2024">
                    <SelectTrigger className="w-full text-sm">
                      <SelectValue placeholder="Select grant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agri-flow-2024">Agri-Flow 2024</SelectItem>
                      <SelectItem value="health-fund-2024">Health Fund 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Challenge</label>
                <Select defaultValue="sustainable">
                  <SelectTrigger className="w-full text-sm">
                    <SelectValue placeholder="Select challenge" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sustainable">Sustainable Irrigation Pilot</SelectItem>
                    <SelectItem value="solar">Solar Energy Drive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Date Range</label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Input type="text" placeholder="mm/dd/yyyy" className="pr-8 text-sm" />
                    <Calendar className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                  <span className="text-slate-400 text-sm">to</span>
                  <div className="relative flex-1">
                    <Input type="text" placeholder="mm/dd/yyyy" className="pr-8 text-sm" />
                    <Calendar className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#475569] hover:bg-[#334155] text-white flex items-center justify-center gap-2 mt-2 py-5">
                <Mail className="w-4 h-4" />
                <span>Generate & Email to Donor</span>
              </Button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center pt-8 pb-4 text-xs text-slate-400">
        © 2024 BirrFlow Financial Technologies. All rights reserved. Precise Grant Operations.
      </div>
    </div>
  );
}
