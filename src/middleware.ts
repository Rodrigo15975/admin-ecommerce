import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { verifyToken } from "./modules/login/services/api"
import { matcher } from "./router/matcher"

const getToken = (req: NextRequest) => req.cookies.get("auth")

export const useVerifyToken = async (token: string | undefined) =>
  await verifyToken(token)

export async function middleware(req: NextRequest) {
  const token = getToken(req)
  const { pathname } = req.nextUrl
  if (!token) {
    if (matcher.includes(pathname))
      return NextResponse.redirect(new URL("/", req.url))

    return NextResponse.next()
  }

  const tokenVerify = await useVerifyToken(token?.value)
  // Si el token es inválido, redirige al inicio
  if (!tokenVerify.success && matcher.includes(pathname))
    return NextResponse.redirect(new URL("/", req.url))

  // Si el token es válido, redirigir al dashboard
  if (tokenVerify.success && pathname === "/")
    return NextResponse.redirect(new URL("/dashboard", req.url))

  return NextResponse.next() // Si todo está bien, continúa con la solicitud
}

export const config = {
  matcher,
}

// import { NextResponse, NextRequest } from 'next/server'

// export const middleware = (req: NextRequest) => {
//   const ip = req.headers.get('x-forwarded-for') || req.ip || 'Unknown IP'

//   // Añadir la IP a las cookies o headers para su uso en el componente
//   const res = NextResponse.next()
//   res.cookies.set('user-ip', ip)
//   return res
// }

// // Define las rutas donde el middleware se aplica
// export const config = {
//   matcher: ['/dashboard', '/profile'], // Puedes agregar más rutas que quieras proteger
// };
