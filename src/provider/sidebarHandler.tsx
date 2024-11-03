"use client"
import { usePathname } from "next/navigation"
import { Sidebar } from "../components/common/Sidebar"
import { matcher } from "@/router/matcher"

export default function SidebarHandler({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isProtected = matcher.some((route) => pathname.startsWith(route))

  return (
    <>
      {isProtected && <Sidebar />}
      {children}
    </>
  )
}
