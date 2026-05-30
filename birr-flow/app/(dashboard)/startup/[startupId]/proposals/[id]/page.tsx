import { Suspense } from "react"
import { ProposalDetailsClient } from "./proposal-details-client"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function StartupProposalDetailsPage(props: { params: Promise<{ startupId: string; id: string }> }) {
  const params = await props.params;
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  if (session.user.id !== params.startupId) {
    redirect(`/startup/${session.user.id}/proposals/${params.id}`)
  }

  return (
    <Suspense fallback={<div>Loading proposal details...</div>}>
      <ProposalDetailsClient startupId={params.startupId} proposalId={params.id} />
    </Suspense>
  )
}
