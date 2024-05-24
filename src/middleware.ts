import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
let locales = ['en', 'es']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const allowedFileExtensions = /\.(png|jpg|jpeg|webp|xml|txt|svg|ico|pdf|mp4)$/i;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  const isSpanish = request.headers.get('accept-language')?.split(';')[0].includes('es');
  const isPostPath = pathname.startsWith('/post/')
  
  const isPublic = allowedFileExtensions.test(pathname);

  if (pathname === '/') {
    request.nextUrl.pathname = `/${isSpanish ? locales[1] : locales[0]}`
    return NextResponse.rewrite(request.nextUrl)
  }  
  
  if (pathnameHasLocale || isPostPath || isPublic) return
 
  const locale = isSpanish ? locales[1] : locales[0]

  request.nextUrl.pathname = `/${locale}/${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}
