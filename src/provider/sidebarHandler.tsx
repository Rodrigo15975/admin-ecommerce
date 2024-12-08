'use client'
import { usePathname } from 'next/navigation'
import { Sidebar } from '../components/common/Sidebar'
import { config } from '@/middleware'

export default function SidebarHandler({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isProtected = config.matcher.some(
    (route) =>
      pathname.startsWith(route) && !pathname.startsWith('/create-products')
  )

  return (
    <>
      {isProtected && <Sidebar />}
      {children}
    </>
  )
}
