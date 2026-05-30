"use client"

import { LogOut } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export function SignOutButton() {
  const router = useRouter()

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login")
        }
      }
    })
  }

  return (
    <button 
      onClick={handleSignOut}
      className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors text-left"
    >
      <LogOut className="h-5 w-5" />
      <span className="font-medium">Sign Out</span>
    </button>
  )
}
