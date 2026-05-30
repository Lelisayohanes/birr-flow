export const dynamic = 'force-dynamic'

import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function DonorIndexPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  // Redirect the user to their own donor dashboard
  redirect(`/donor/${session.user.id}`)
}
