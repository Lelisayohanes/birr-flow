import { NextResponse, type NextRequest } from "next/server"

export async function proxy(request: NextRequest) {
  // Better Auth expects to read the session cookie.
  // In a proxy handler, you might forward this, but here we just check if it exists.
  
  // Note: better-auth usually sets a session cookie (e.g. better-auth.session_token)
  // For a basic middleware check before fully setting up @better-fetch:
  const cookieHeader = request.headers.get("cookie") || ""
  const hasSession = cookieHeader.includes("better-auth")
  
  if (!hasSession && request.nextUrl.pathname.startsWith('/donor')) {
    // If we're strictly enforcing auth:
    return NextResponse.redirect(new URL("/login", request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ["/donor/:path*"],
}
