import { Suspense } from "react"
import { GrantDetailsClient } from "./grant-details-client"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function StartupGrantDetailsPage(props: { params: Promise<{ startupId: string; id: string }> }) {
  const params = await props.params;
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  if (session.user.id !== params.startupId) {
    redirect(`/startup/${session.user.id}/grants/${params.id}`)
  }

  return (
    <Suspense fallback={<div>Loading grant details...</div>}>
      <GrantDetailsClient startupId={params.startupId} grantId={params.id} />
    </Suspense>
  )
}
