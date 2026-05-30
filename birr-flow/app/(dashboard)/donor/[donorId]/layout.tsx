export const dynamic = 'force-dynamic'

import Link from "next/link"
import { LayoutDashboard, Target, Users, ShieldCheck, FileText, Settings, UserCircle, LogOut } from "lucide-react"
import { auth } from "@/lib/auth"
import { SignOutButton } from "@/components/ui/sign-out-button"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

interface DashboardLayoutProps {
  children: React.ReactNode
  params: Promise<{ donorId: string }>
}

export default async function DonorDashboardLayout({ children, params }: DashboardLayoutProps) {
  const { donorId } = await params

  if (!/^[0-9a-fA-F]{24}$/.test(donorId)) {
    return redirect("/donor") // Redirect to index to find a valid donor
  }
  
  // Fetch session from better-auth
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  const user = session.user

  // Ensure the user is accessing their own dashboard
  if (user.id !== donorId) {
    // If not matching, redirect them to their own dashboard or login
    redirect(`/donor/${user.id}`)
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white text-gray-900">
        <div className="flex h-16 items-center px-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <span className="bg-blue-600 text-white rounded-md p-1.5">
              <ShieldCheck className="h-5 w-5" />
            </span>
            BirrFlow
          </Link>
        </div>
        
        <div className="p-4">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Donor Dashboard
          </div>
          <nav className="space-y-1">
            <NavItem href={`/donor/${donorId}`} icon={<LayoutDashboard className="h-5 w-5" />} label="Overview" />
            <NavItem href={`/donor/${donorId}/challenges`} icon={<Target className="h-5 w-5" />} label="Challenges" />
            <NavItem href={`/donor/${donorId}/proposals`} icon={<FileText className="h-5 w-5" />} label="Proposals" />
            <NavItem href={`/donor/${donorId}/grants`} icon={<Users className="h-5 w-5" />} label="Active Grants" />
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
          <nav className="space-y-1">
            <NavItem href={`/donor/${donorId}/settings`} icon={<Settings className="h-5 w-5" />} label="Settings" />
            <NavItem href={`/profile`} icon={<UserCircle className="h-5 w-5" />} label="Profile" />
            <SignOutButton />
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-8 text-gray-900">
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome back, {user?.name || "Donor"}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-right hidden sm:flex">
              <span className="text-sm font-medium text-gray-900">{user?.name || "Guest Donor"}</span>
              <span className="text-xs text-gray-500">{user?.email || "guest@example.com"}</span>
            </div>
            {user?.image ? (
              <img src={user.image} alt="User Avatar" className="h-8 w-8 rounded-full border border-gray-200" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {user?.name?.charAt(0).toUpperCase() || "D"}
              </div>
            )}
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  )
}
