import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Shield,
  Upload,
  Check,
  Star,
  Globe,
  Mail,
  Activity,
  ArrowRight,
  Wallet,
  Landmark,
  FileText,
  Building,
  CreditCard,
  QrCode,
  Heart,
  Rocket,
  AtSign
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f4fbf7] font-sans text-slate-900 flex flex-col">
      {/* Navigation */}
      <header className="px-6 py-4 flex items-center justify-between max-w-7xl w-full mx-auto">
        <div className="text-2xl font-bold text-[#067a52]">BirrFlow</div>
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#" className="text-[#067a52] border-b-2 border-[#067a52] pb-1">Features</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Pricing</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">About</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/investor">
            <Button variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100">Login (Investor)</Button>
          </Link>
          <Button className="bg-[#00c07f] hover:bg-[#00a86f] text-white">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-16 pb-24 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6">
          <Badge className="bg-[#dcf4e8] text-[#067a52] hover:bg-[#dcf4e8] hover:text-[#067a52] text-xs font-bold tracking-wider px-3 py-1 rounded-full uppercase border-none shadow-none">
            THE MILESTONE PROTOCOL
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            Stop guessing where the money went. <span className="text-[#067a52]">Start seeing what it built.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            BirrFlow is the first milestone-proof platform for Ethiopian startups and the funders who back them. No bank API. No expensive ERP. Just proof. Just trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button size="lg" className="bg-[#00c07f] hover:bg-[#00a86f] text-white shadow-lg shadow-emerald-500/20 text-md">
              Launch a funding challenge
            </Button>
            <Button size="lg" className="bg-[#ff8533] hover:bg-[#e67329] text-white shadow-lg shadow-orange-500/20 text-md">
              Build your Accountability Passport
            </Button>
          </div>
        </div>

        <div className="relative h-[500px] w-full hidden md:block">
          {/* Card 1 */}
          <Card className="absolute top-10 right-20 w-80 z-10 border-slate-100 shadow-xl rounded-2xl">
            <CardHeader className="pb-3 pt-5 px-5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 tracking-wider">DONOR DASHBOARD</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-6">
                <div className="text-sm font-semibold mb-2">Project: Green Agro-Tech</div>
                <Progress value={60} className="h-2 bg-slate-200" />
              </div>
              <div className="bg-[#f0f9f4] p-4 rounded-lg border border-[#c3ebd6] mb-4">
                <div className="text-sm font-bold text-[#067a52] mb-1">Milestone #3: Warehouse Completion</div>
                <div className="text-xs text-slate-500 italic">Awaiting proof review...</div>
              </div>
              <Button className="w-full bg-[#067a52] hover:bg-[#056644] text-white text-sm font-semibold shadow-md">
                Approve Milestone
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="absolute bottom-10 left-10 w-72 z-20 border-slate-100 shadow-2xl rounded-2xl p-4">
            <div className="h-32 bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-[#067a52]" />
              <span className="font-bold text-sm">Milestone Evidence</span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Uploading photo: "Team Expansion - 5 New Developers Hired"
            </p>
            <div className="flex justify-between items-center text-sm font-bold">
              <span>Trust Score</span>
              <span className="text-[#067a52]">98/100</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Logos/Intro Section */}
      <section className="bg-white py-24 px-6 relative">
         <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f4fbf7] to-white"></div>
         <div className="max-w-4xl mx-auto text-center relative z-10 mb-16">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Telebirr moves money. Michu lends money.<br/>
              <span className="text-[#067a52]">BirrFlow proves what money achieves.</span>
            </h2>
         </div>

         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="rounded-2xl border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center pt-8 pb-8 px-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Telebirr</h3>
              <p className="text-slate-600 text-sm">Transfer Money. Instant settlements for everyday transactions across Ethiopia.</p>
            </Card>
            <Card className="rounded-2xl border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center pt-8 pb-8 px-6">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-500">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Michu</h3>
              <p className="text-slate-600 text-sm">Lend Money. Simplified credit access for MSMEs and individuals via digital scoring.</p>
            </Card>
            <Card className="rounded-2xl border-[#c3ebd6] shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-center flex flex-col items-center relative overflow-hidden pt-8 pb-8 px-6">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#067a52]"></div>
              <div className="w-12 h-12 bg-[#e0f5ea] rounded-xl flex items-center justify-center mb-6 text-[#067a52]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">BirrFlow</h3>
              <p className="text-slate-600 text-sm">Verify Outcomes. Proving exactly how funding is utilized through milestone verification.</p>
            </Card>
         </div>

         {/* Timeline */}
         <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-200 -z-10 -translate-y-1/2 hidden md:block"></div>
              
              <div className="flex flex-col items-center gap-3 bg-white px-2">
                <div className="w-12 h-12 rounded-full border-2 border-[#067a52] flex items-center justify-center bg-white text-[#067a52]">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-800 tracking-wider">MONEY SENT</span>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white px-2">
                <div className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center bg-white text-slate-500">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-500 tracking-wider">STARTUP WORKS</span>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white px-2">
                <div className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center bg-white text-slate-500">
                  <Upload className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-500 tracking-wider">PROOF UPLOADED</span>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white px-2">
                <div className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center bg-white text-slate-500">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-500 tracking-wider">VERIFIED</span>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white px-2">
                <div className="w-12 h-12 rounded-full border-2 border-[#067a52] flex items-center justify-center bg-[#067a52] text-white">
                  <Check className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-[#067a52] tracking-wider">FUNDING RELEASED</span>
              </div>
            </div>
         </div>
      </section>

      {/* Built for entire ecosystem */}
      <section className="py-24 px-6 bg-[#f4fbf7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Built for the entire <span className="text-[#067a52]">ecosystem.</span>
            </h2>
            <div className="flex flex-col gap-2">
              <Button className="justify-start px-6 py-6 bg-[#067a52] hover:bg-[#056644] text-white rounded-lg font-semibold shadow-md text-md">
                Donor
              </Button>
              <Button variant="ghost" className="justify-start px-6 py-6 text-slate-600 font-semibold hover:bg-slate-100 rounded-lg text-md">
                Startup
              </Button>
              <Button variant="ghost" className="justify-start px-6 py-6 text-slate-600 font-semibold hover:bg-slate-100 rounded-lg text-md">
                Investor
              </Button>
              <Button variant="ghost" className="justify-start px-6 py-6 text-slate-600 font-semibold hover:bg-slate-100 rounded-lg text-md">
                Grant Officer
              </Button>
              <Button variant="ghost" className="justify-start px-6 py-6 text-slate-600 font-semibold hover:bg-slate-100 rounded-lg text-md">
                Regulator
              </Button>
            </div>
          </div>
          <Card className="p-10 rounded-3xl shadow-xl border-slate-100">
            <h3 className="text-3xl font-bold mb-4">Cut audit time from weeks to minutes.</h3>
            <p className="text-slate-600 mb-10 text-lg">
              Automate compliance tracking with real-time milestone evidence. No more chasing receipts—get a live dashboard of every funded project's progress.
            </p>
            {/* Mock Chart */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 h-64 flex items-end gap-4 justify-between relative overflow-hidden">
               <div className="absolute inset-0 flex flex-col justify-between py-6 px-6 z-0">
                  <div className="w-full h-[1px] bg-slate-200"></div>
                  <div className="w-full h-[1px] bg-slate-200"></div>
                  <div className="w-full h-[1px] bg-slate-200"></div>
                  <div className="w-full h-[1px] bg-slate-200"></div>
                  <div className="w-full h-[1px] bg-slate-200"></div>
               </div>
               {[40, 60, 30, 80, 50, 90, 70, 40].map((h, i) => (
                 <div key={i} className="w-full bg-[#067a52] rounded-t-sm z-10 hover:bg-[#056644] transition-colors" style={{ height: `${h}%` }}></div>
               ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Simple. Verifiable. Unstoppable. */}
      <section className="bg-[#131b2b] text-white py-24 px-6 text-center">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-slate-300 font-medium mb-20">Simple. Verifiable. Unstoppable.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left relative">
              <div className="absolute top-10 left-10 right-10 h-[1px] bg-slate-700 hidden md:block"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#067a52] rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-[0_0_30px_rgba(6,122,82,0.4)]">1</div>
                <h3 className="text-2xl font-bold mb-4">DEFINE</h3>
                <p className="text-slate-400 leading-relaxed">
                  Set clear, measurable milestones. Define the evidence required for each release of capital.
                </p>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#067a52] rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-[0_0_30px_rgba(6,122,82,0.4)]">2</div>
                <h3 className="text-2xl font-bold mb-4">PROVE</h3>
                <p className="text-slate-400 leading-relaxed">
                  Startups upload timestamped, geo-tagged proof of work. Photos, contracts, or code commits.
                </p>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#067a52] rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-[0_0_30px_rgba(6,122,82,0.4)]">3</div>
                <h3 className="text-2xl font-bold mb-4">TRUST</h3>
                <p className="text-slate-400 leading-relaxed">
                  Generate instant compliance reports. Capital flows automatically as milestones are verified.
                </p>
              </div>
            </div>
         </div>
      </section>

      {/* Signature Feature */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Badge className="bg-[#fdf3e8] text-[#c25e03] hover:bg-[#fdf3e8] hover:text-[#c25e03] font-bold px-4 py-2 rounded-full mb-6 border-none gap-2 text-sm shadow-none">
              <Star className="w-4 h-4 fill-current" /> Signature Feature
            </Badge>
            <h2 className="text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
              Your <span className="text-[#c25e03]">Accountability Passport</span> is your new credit score.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ditch the static pitch deck. Show real traction data verified by 3rd parties. The Passport is a portable, cryptographically signed record of every milestone your startup has ever hit.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#e0f5ea] rounded-full p-1">
                  <Check className="w-4 h-4 text-[#067a52]" />
                </div>
                <span className="font-semibold text-slate-800">MVP Built (Verified by EU Ethiopia)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#e0f5ea] rounded-full p-1">
                  <Check className="w-4 h-4 text-[#067a52]" />
                </div>
                <span className="font-semibold text-slate-800">3 Developers Hired (Verified via BIRRFLOW AI)</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fdf3e8] to-[#e0f5ea] rounded-full blur-3xl opacity-30"></div>
            <Card className="rounded-3xl p-8 shadow-[0_20px_50px_rgb(0,0,0,0.06)] relative z-10 border-slate-100">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-bold">Kacha Technologies</h3>
                <Badge className="bg-[#e0f5ea] text-[#067a52] hover:bg-[#e0f5ea] border-none px-3 py-1 uppercase text-xs">TRUSTED ENTITY</Badge>
              </div>
              <div className="flex items-center gap-6 mb-8 border border-slate-100 rounded-2xl p-4 bg-slate-50">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border border-slate-200">
                  <QrCode className="w-8 h-8 text-slate-400" />
                </div>
                <div>
                  <div className="text-sm font-bold mb-1">Verification ID</div>
                  <div className="text-xs text-slate-500 font-mono">BF-2024-KACHA-8891</div>
                </div>
              </div>
              <div className="mb-6">
                 <div className="flex justify-between items-center text-sm font-bold mb-2">
                   <span>Verified Milestones</span>
                   <span>12/14</span>
                 </div>
                 <Progress value={85} className="h-2 bg-slate-200" />
              </div>
              <div className="text-sm text-slate-500 italic">
                "Kacha has demonstrated exceptional execution speed in the Fintech sector."
              </div>
            </Card>
          </div>
        </div>

        {/* Stats & Testimonials */}
        <div className="max-w-6xl mx-auto bg-[#f4fbf7] rounded-3xl p-12 text-center border border-[#e0f5ea]">
          <p className="text-slate-600 mb-12">Trusted by funders who demand proof — and startups who deliver it.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <div className="text-4xl font-extrabold text-[#067a52] mb-2">$2.4M</div>
              <div className="text-xs font-bold text-slate-800 tracking-widest uppercase">TRACKED FUNDING</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#067a52] mb-2">850+</div>
              <div className="text-xs font-bold text-slate-800 tracking-widest uppercase">MILESTONES VERIFIED</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#067a52] mb-2">120+</div>
              <div className="text-xs font-bold text-slate-800 tracking-widest uppercase">STARTUPS</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#067a52] mb-2">98%</div>
              <div className="text-xs font-bold text-slate-800 tracking-widest uppercase">COMPLIANCE RATE</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="p-8 rounded-2xl shadow-sm border-slate-100">
              <p className="text-slate-600 italic mb-6 text-lg">
                "BirrFlow has revolutionized how we manage grant distributions in East Africa. We now have 100% visibility into where every Euro is spent."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                <div>
                  <div className="font-bold">Tigist A.</div>
                  <div className="text-sm text-slate-500">EU Ethiopia Delegate</div>
                </div>
              </div>
            </Card>
            <Card className="p-8 rounded-2xl shadow-sm border-slate-100">
              <p className="text-slate-600 italic mb-6 text-lg">
                "The Accountability Passport helped us secure our Series A. Investors didn't need to do three months of due diligence—the data was already there."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                <div>
                  <div className="font-bold">Samuel K.</div>
                  <div className="text-sm text-slate-500">Founder, Kacha</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-[#f4fbf7]">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-slate-600">Transparent plans for transparent growth.</h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* Free Tier */}
          <Card className="p-8 rounded-3xl shadow-sm border-slate-100">
            <div className="text-lg font-bold mb-2">Startup</div>
            <div className="text-4xl font-extrabold mb-8">Free</div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>1 Project Profile</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>Standard Verification</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>QR Passport</span>
              </div>
            </div>
            <Button variant="outline" className="w-full py-6 rounded-lg font-bold border-2 border-[#067a52] text-[#067a52] hover:bg-[#f4fbf7] hover:text-[#067a52] text-md transition-colors">
              Start Building
            </Button>
          </Card>

          {/* Essentials Tier */}
          <Card className="p-8 rounded-3xl shadow-xl border-2 border-[#067a52] relative transform md:-translate-y-4">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#067a52] hover:bg-[#067a52] text-white text-xs font-bold px-3 py-1 rounded-full uppercase border-none shadow-none">
              MOST POPULAR
            </Badge>
            <div className="text-lg font-bold mb-2">Essentials</div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-extrabold">$29</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm font-semibold">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>Unlimited Milestones</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>Priority AI Auditing</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>Custom Proof Hooks</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>PDF Export Reports</span>
              </div>
            </div>
            <Button className="w-full py-6 rounded-lg font-bold bg-[#067a52] text-white hover:bg-[#056644] shadow-lg shadow-emerald-500/30 text-md transition-all">
              Go Pro
            </Button>
          </Card>

          {/* Enterprise Tier */}
          <Card className="p-8 rounded-3xl shadow-sm border-slate-100">
            <div className="text-lg font-bold mb-2">Enterprise</div>
            <div className="text-4xl font-extrabold mb-8">Custom</div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>Multi-entity Management</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>On-premise Storage</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-[#067a52]" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>
            <Button variant="outline" className="w-full py-6 rounded-lg font-bold border-2 border-slate-900 text-slate-900 hover:bg-slate-50 hover:text-slate-900 text-md transition-colors">
              Contact Sales
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="bg-[#131b2b] text-white pt-24 pb-12 px-6 relative overflow-hidden mt-auto">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]"></div>
           <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316]"></div>
           <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
           <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="25%" y1="25%" x2="66%" y2="33%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="25%" y1="25%" x2="33%" y2="75%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
           </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 mb-20">
          <div className="text-slate-300 font-medium mb-6">Ethiopia's funding future is transparent.</div>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-12">
            Join the new standard for trust. Whether you are providing capital or deploying it, BirrFlow makes the journey verifiable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-[#00c07f] hover:bg-[#00a86f] text-white px-10 py-8 rounded-2xl font-bold text-xl h-auto flex flex-col items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all">
              <Heart className="w-8 h-8" />
              I am a donor
            </Button>
            <Button className="bg-[#ff8533] hover:bg-[#e67329] text-white px-10 py-8 rounded-2xl font-bold text-xl h-auto flex flex-col items-center gap-2 shadow-lg shadow-orange-500/20 transition-all">
              <Rocket className="w-8 h-8" />
              I am a startup
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-slate-800 pt-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold text-white mb-4">BirrFlow</div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Empowering the Ethiopian innovation ecosystem through cryptographic trust and milestone-based funding.
            </p>
          </div>
          <div>
            <div className="font-bold text-emerald-500 mb-4">Product</div>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-emerald-500 mb-4">Company</div>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-emerald-500 mb-4">Resources</div>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">API Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 relative z-10">
          <div>© 2024 BirrFlow. Technical Optimism for Ethiopian Innovation.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><AtSign className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
