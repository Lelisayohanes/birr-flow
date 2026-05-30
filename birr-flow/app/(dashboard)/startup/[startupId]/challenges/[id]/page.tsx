import { Suspense } from "react"
import { ChallengeDetailsClient } from "./challenge-details-client"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function StartupChallengeDetailsPage(props: { params: Promise<{ startupId: string; id: string }> }) {
  const params = await props.params;
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  if (session.user.id !== params.startupId) {
    redirect(`/startup/${session.user.id}/challenges/${params.id}`)
  }

  return (
    <Suspense fallback={<div>Loading challenge details...</div>}>
      <ChallengeDetailsClient startupId={params.startupId} challengeId={params.id} />
    </Suspense>
  )
}
