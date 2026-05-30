"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/data-table/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

type Challenge = {
  id: string
  title: string
  status: string
  submissionDeadline: string
  proposalsCount: number
}

export default function ChallengesClient({ data, donorId }: { data: Challenge[], donorId: string }) {
  const columns: ColumnDef<Challenge>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        let variant: "default" | "secondary" | "destructive" | "outline" = "default"
        
        if (status === "open") variant = "default"
        if (status === "draft") variant = "secondary"
        if (status === "closed") variant = "outline"
        if (status === "completed") variant = "default"
  
        return (
          <Badge variant={variant} className="capitalize">
            {status}
          </Badge>
        )
      },
    },
    {
      accessorKey: "submissionDeadline",
      header: "Deadline",
    },
    {
      accessorKey: "proposalsCount",
      header: "Proposals",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const challenge = row.original
  
        return (
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/donor/${donorId}/challenges/${challenge.id}`}>
              View
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Challenges</h2>
          <p className="text-gray-500">Manage your open innovation challenges and campaigns.</p>
        </div>
        <Link href={`/donor/${donorId}/challenges/new`}>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Challenge
          </Button>
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
