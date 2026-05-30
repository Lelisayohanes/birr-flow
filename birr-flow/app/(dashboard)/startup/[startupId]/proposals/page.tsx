import { Suspense } from "react"
import { ProposalsClient } from "./proposals-client"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function StartupProposalsPage(props: { params: Promise<{ startupId: string }> }) {
  const params = await props.params;
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  if (session.user.id !== params.startupId) {
    redirect(`/startup/${session.user.id}/proposals`)
  }

  return (
    <Suspense fallback={<div>Loading proposals...</div>}>
      <ProposalsClient startupId={params.startupId} />
    </Suspense>
  )
}
