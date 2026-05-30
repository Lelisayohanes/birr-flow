"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/data-table/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Proposal = {
  id: string
  startupName: string
  challengeName: string
  status: string
  submittedAt: string
  donorScore: number | null
}

export default function ProposalsClient({ data, donorId }: { data: Proposal[], donorId: string }) {
  const columns: ColumnDef<Proposal>[] = [
    {
      accessorKey: "startupName",
      header: "Startup",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("startupName")}</div>
      ),
    },
    {
      accessorKey: "challengeName",
      header: "Challenge",
    },
    {
      accessorKey: "submittedAt",
      header: "Submitted",
    },
    {
      accessorKey: "donorScore",
      header: "Score",
      cell: ({ row }) => {
        const score = row.getValue("donorScore") as number | null
        return score ? <span className="font-semibold text-blue-600">{score}/100</span> : <span className="text-gray-400">Not scored</span>
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        let variant: "default" | "secondary" | "destructive" | "outline" = "default"
        
        if (status === "submitted") variant = "secondary"
        if (status === "shortlisted") variant = "default"
        if (status === "winner") variant = "default"
        if (status === "rejected") variant = "destructive"
  
        return (
          <Badge variant={variant} className="capitalize">
            {status}
          </Badge>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const proposal = row.original
  
        return (
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/donor/${donorId}/proposals/${proposal.id}`}>
              Review
            </Link>
          </Button>
        )
      },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Proposals</h2>
          <p className="text-gray-500">Review submissions to your challenges.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
