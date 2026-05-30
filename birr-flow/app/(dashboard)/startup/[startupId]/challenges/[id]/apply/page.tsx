import { Suspense } from "react"
import { ApplyClient } from "./apply-client"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function StartupApplyPage(props: { params: Promise<{ startupId: string; id: string }> }) {
  const params = await props.params;
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  if (session.user.id !== params.startupId) {
    redirect(`/startup/${session.user.id}/challenges/${params.id}/apply`)
  }

  return (
    <Suspense fallback={<div>Loading application form...</div>}>
      <ApplyClient startupId={params.startupId} challengeId={params.id} />
    </Suspense>
  )
}
