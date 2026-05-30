import { Suspense } from "react"
import { GrantsClient } from "./grants-client"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function StartupGrantsPage(props: { params: Promise<{ startupId: string }> }) {
  const params = await props.params;
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  if (session.user.id !== params.startupId) {
    redirect(`/startup/${session.user.id}/grants`)
  }

  return (
    <Suspense fallback={<div>Loading grants...</div>}>
      <GrantsClient startupId={params.startupId} />
    </Suspense>
  )
}
