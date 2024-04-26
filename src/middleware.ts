import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
let locales = ['en', 'es']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  const isSpanish = request.headers.get('accept-language')?.split(';')[0].includes('es');
  const isPostPath = pathname.startsWith('/post/')
  const isPublic = ['/blog/','/documents/','/experience/','/projects/', '/thumbnail', '/icon', 'davidquint'].some(path => pathname.startsWith(path))
 
  if (pathnameHasLocale || isPostPath || isPublic) return
 
  const locale = isSpanish ? 'es' : 'en'

  request.nextUrl.pathname = `/${locale}/${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}
