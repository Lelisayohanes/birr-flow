import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import { ShieldCheck, User, Briefcase, Landmark, UserCheck, Shield } from "lucide-react"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function SelectRolePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id }
  })

  if (!user) {
    redirect("/login")
  }

  const roles = ["donor", "startup", "investor", "regulator", "grant_officer"]

  const roleConfig = {
    donor: {
      icon: <User className="h-6 w-6 text-blue-500" />,
      title: "Donor Dashboard",
      desc: "Manage challenges, review proposals, and disburse grants.",
      href: `/donor/${user.id}`
    },
    startup: {
      icon: <Briefcase className="h-6 w-6 text-green-500" />,
      title: "Startup Dashboard",
      desc: "Submit proposals, manage milestones, and upload proofs.",
      href: `/startup/${user.id}`
    },
    investor: {
      icon: <Landmark className="h-6 w-6 text-purple-500" />,
      title: "Investor Dashboard",
      desc: "Co-invest with donors and track portfolio performance.",
      href: `/investor/${user.id}`
    },
    regulator: {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: "Regulator Dashboard",
      desc: "Audit compliance and oversee platform accountability.",
      href: `/regulator/${user.id}`
    },
    grant_officer: {
      icon: <UserCheck className="h-6 w-6 text-amber-500" />,
      title: "Grant Officer Dashboard",
      desc: "Review proofs and approve milestone disbursements.",
      href: `/grant-officer/${user.id}`
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 font-sans text-gray-900">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-md">
            <ShieldCheck className="h-7 w-7 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Welcome back, {user.name}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Which profile would you like to access today?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {roles.map((r) => {
            const config = roleConfig[r as keyof typeof roleConfig]
            if (!config) return null

            return (
              <Link key={r} href={config.href} className="block group">
                <Card className="h-full border-gray-200 transition-all hover:border-blue-500 hover:shadow-md cursor-pointer">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="rounded-full bg-gray-100 p-3 group-hover:bg-blue-50 transition-colors">
                      {config.icon}
                    </div>
                    <CardTitle className="text-lg">{config.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-500">
                      {config.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
        
        <div className="text-center pt-4">
          <form action={async () => {
            "use server"
            await auth.api.signOut({ headers: await headers() })
            redirect("/login")
          }}>
            <Button variant="outline" type="submit">
              Sign Out
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
