"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle2, Clock, FileText, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function GrantDetailsPage() {
  const { donorId, id: grantId } = useParams() as { donorId: string, id: string }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/donor/${donorId}/grants`}>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
            Agrotech Co.
            <Badge variant="default">Active</Badge>
          </h2>
          <p className="text-gray-500">Total Grant: $50,000 • GreenTech Innovation Challenge</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Milestone Progress</CardTitle>
              <CardDescription>Track deliverables and tranche releases.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative border-l border-gray-200 ml-3 space-y-8 pb-4">
                {/* Milestone 1 - Completed */}
                <div className="relative pl-6">
                  <span className="absolute -left-[13px] bg-white text-green-500">
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">Milestone 1: Project Kickoff & Setup</h4>
                        <p className="text-sm text-gray-500">Initial planning and resource acquisition.</p>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Completed</Badge>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md text-sm flex justify-between items-center border">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <span>Signed Contracts & Team Setup.pdf</span>
                      </div>
                      <span className="text-gray-500 text-xs">Approved on Apr 10, 2026</span>
                    </div>
                    <div className="text-sm font-medium mt-1">
                      Tranche Released: <span className="text-gray-900">$10,000</span>
                    </div>
                  </div>
                </div>

                {/* Milestone 2 - Pending Review */}
                <div className="relative pl-6">
                  <span className="absolute -left-[13px] bg-white text-blue-500">
                    <Clock className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">Milestone 2: Prototype Development</h4>
                        <p className="text-sm text-gray-500">First working prototype of the packaging solution.</p>
                      </div>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">Pending Review</Badge>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-md text-sm border border-orange-200 space-y-3">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-orange-800">Proof submitted for your review</p>
                          <p className="text-orange-600 text-xs mt-1">Submitted 2 days ago</p>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 mt-2">
                        <Button variant="outline" size="sm" className="bg-white">View Proofs</Button>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">Approve Tranche</Button>
                      </div>
                    </div>
                    <div className="text-sm font-medium mt-1 text-gray-500">
                      Pending Tranche: <span>$20,000</span>
                    </div>
                  </div>
                </div>

                {/* Milestone 3 - Upcoming */}
                <div className="relative pl-6">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-gray-300 bg-white"></span>
                  <div className="flex flex-col gap-2 opacity-60">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">Milestone 3: Initial Manufacturing Run</h4>
                        <p className="text-sm text-gray-500">Producing the first batch of 10,000 units.</p>
                      </div>
                      <Badge variant="secondary">Upcoming</Badge>
                    </div>
                    <div className="text-sm font-medium mt-1 text-gray-500">
                      Future Tranche: <span>$20,000</span>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Grant Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Total Amount:</span>
                <span className="font-bold">$50,000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Disbursed:</span>
                <span className="font-medium">$10,000 (20%)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Remaining:</span>
                <span className="font-medium">$40,000</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-500">Start Date:</span>
                <span className="font-medium">Apr 1, 2026</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" /> View Original Proposal
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                <AlertCircle className="h-4 w-4 mr-2" /> Report Issue / Suspend
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
