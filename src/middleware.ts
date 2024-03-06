import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest,  res: NextResponse) {
  const response = NextResponse.next()
  const hasDNI = request.cookies.has("dni")
  const userAuth = request.cookies.has("userAuth")
  const hasAdminAuth = request.cookies.has("adminAuth")

  if (!hasDNI && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if(!userAuth && request.nextUrl.pathname === "/user"){
    return NextResponse.redirect(new URL("/", request.url))
  }
  
  return  response
}


export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}