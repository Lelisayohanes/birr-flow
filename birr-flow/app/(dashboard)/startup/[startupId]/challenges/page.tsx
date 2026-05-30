import { Suspense } from "react"
import { ChallengesClient } from "./challenges-client"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function StartupChallengesPage(props: { params: Promise<{ startupId: string }> }) {
  const params = await props.params;
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  if (session.user.id !== params.startupId) {
    redirect(`/startup/${session.user.id}/challenges`)
  }

  return (
    <Suspense fallback={<div>Loading challenges...</div>}>
      <ChallengesClient startupId={params.startupId} />
    </Suspense>
  )
}
