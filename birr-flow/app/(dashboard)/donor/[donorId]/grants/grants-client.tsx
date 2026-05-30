"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/data-table/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Grant = {
  id: string
  startupName: string
  challengeName: string
  totalAmount: number
  status: string
  progress: number
}

export default function GrantsClient({ data, donorId }: { data: Grant[], donorId: string }) {
  const columns: ColumnDef<Grant>[] = [
    {
      accessorKey: "startupName",
      header: "Startup",
      cell: ({ row }) => (
        <div className="font-medium text-blue-600">
          {row.getValue("startupName")}
        </div>
      ),
    },
    {
      accessorKey: "challengeName",
      header: "Challenge",
    },
    {
      accessorKey: "totalAmount",
      header: "Amount",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("totalAmount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
        return formatted
      },
    },
    {
      accessorKey: "progress",
      header: "Progress",
      cell: ({ row }) => {
        const progress = row.getValue("progress") as number
        return (
          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs text-gray-500">{progress}%</span>
          </div>
        )
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        let variant: "default" | "secondary" | "destructive" | "outline" = "default"
        
        if (status === "active") variant = "default"
        if (status === "completed") variant = "secondary"
        if (status === "defaulted") variant = "destructive"
  
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
        const grant = row.original
  
        return (
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/donor/${donorId}/grants/${grant.id}`}>
              View Milestones
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Active Grants</h2>
          <p className="text-gray-500">Monitor funded proposals and their milestone progress.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
