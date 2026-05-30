"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save, Rocket } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function NewChallengePage() {
  const { donorId } = useParams() as { donorId: string }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/donor/${donorId}/challenges`}>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Create Challenge</h2>
          <p className="text-gray-500">Define a new funding campaign or innovation challenge.</p>
        </div>
      </div>

      <form className="max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Challenge Details</CardTitle>
            <CardDescription>Provide the core information about what you are looking for.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Challenge Title</Label>
              <Input id="title" placeholder="e.g. GreenTech Innovation Challenge 2026" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="sector">Target Sector</Label>
                <Input id="sector" placeholder="e.g. Clean Energy" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Submission Deadline</Label>
                <Input id="deadline" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem">Problem Statement</Label>
              <textarea 
                id="problem"
                className="flex min-h-[150px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Describe the problem you want startups to solve..."
              ></textarea>
            </div>
            
            <div className="space-y-2">
              <Label>Required Submission Parameters</Label>
              <div className="flex gap-2 items-center text-sm border p-3 rounded-md bg-gray-50">
                <Input type="checkbox" id="param-pitch" className="w-4 h-4 border-gray-300 rounded" defaultChecked />
                <label htmlFor="param-pitch" className="flex-1 cursor-pointer">Pitch Deck (PDF)</label>
              </div>
              <div className="flex gap-2 items-center text-sm border p-3 rounded-md bg-gray-50">
                <Input type="checkbox" id="param-budget" className="w-4 h-4 border-gray-300 rounded" defaultChecked />
                <label htmlFor="param-budget" className="flex-1 cursor-pointer">Budget Breakdown</label>
              </div>
              <div className="flex gap-2 items-center text-sm border p-3 rounded-md bg-gray-50">
                <Input type="checkbox" id="param-video" className="w-4 h-4 border-gray-300 rounded" />
                <label htmlFor="param-video" className="flex-1 cursor-pointer">Founder Pitch Video (Link)</label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-3 border-t p-6">
            <Button variant="outline" type="button">
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            <Button type="button">
              <Rocket className="h-4 w-4 mr-2" />
              Publish Challenge
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
