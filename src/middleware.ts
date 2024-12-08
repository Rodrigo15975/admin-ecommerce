import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { verifyToken } from './modules/login/services/api'

const getToken = (req: NextRequest) => req.cookies.get('auth')

export async function middleware(req: NextRequest) {
  const token = getToken(req)
  const { pathname } = req.nextUrl
  if (!token) {
    if (config.matcher.includes(pathname))
      return NextResponse.redirect(new URL('/', req.url))

    return NextResponse.next()
  }

  const tokenVerify = await verifyToken(token?.value)
  // Si el token es inválido, redirige al inicio
  if (!tokenVerify.success && config.matcher.includes(pathname))
    return NextResponse.redirect(new URL('/', req.url))

  // Si el token es válido, redirigir al dashboard
  if (tokenVerify.success && pathname === '/')
    return NextResponse.redirect(new URL(config.matcher[0], req.url))

  return NextResponse.next() // Si todo está bien, continúa con la solicitud
}

export const config = {
  matcher: [
    '/dashboard',
    '/coupon',
    '/category',
    '/orders',
    '/products',
    '/users',
    '/create-products',
  ],
}

// import { NextResponse, NextRequest } from 'next/server'

// export const middleware = (req: NextRequest) => {
//   const ip = req.headers.get('x-forwarded-for') || req.ip || 'Unknown IP'

//  Añadir la IP a las cookies o headers para su uso en el componente
//   const res = NextResponse.next()
//   res.cookies.set('user-ip', ip)
//   return res
// }
