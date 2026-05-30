import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import { ShieldCheck, LogIn } from "lucide-react"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session) {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (user) {
      redirect("/select-role")
    }
  }

  // Fallback UI if not logged in
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 font-sans text-gray-900">
      <main className="flex flex-col items-center gap-8 py-16 px-12 bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 font-bold text-3xl text-blue-600">
          <span className="bg-blue-600 text-white rounded-md p-2">
            <ShieldCheck className="h-8 w-8" />
          </span>
          BirrFlow
        </div>

        <div className="text-center space-y-4 max-w-md">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Welcome to BirrFlow Platform
          </h1>
          <p className="text-gray-500">
            Transparent funding management for donors and startups.
          </p>
        </div>
        
        <Button asChild size="lg" className="w-full">
          <Link href="/login" className="flex items-center gap-2">
            <LogIn className="h-4 w-4" /> Sign In
          </Link>
        </Button>
      </main>
    </div>
  )
}
