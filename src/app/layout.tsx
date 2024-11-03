import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import { PrimeReactProvider } from "primereact/api"

import "primereact/resources/themes/lara-light-cyan/theme.css"
import "./globals.css"

import SidebarHandler from "@/provider/sidebarHandler"
import QueryProvides from "@/provider/ReeactQueryProvider"
import CookieProviderClient from "@/provider/CookieProvider"
export const metadata: Metadata = {
  title: "RDG Admin",
  description: "ADMIN",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#000000"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={500}
          zIndex={999999999}
          showAtBottom={false}
        />
        <QueryProvides>
          <PrimeReactProvider>
            <SidebarHandler>
              <CookieProviderClient>
                <>{children}</>
              </CookieProviderClient>
            </SidebarHandler>
            <Toaster />
          </PrimeReactProvider>
        </QueryProvides>
      </body>
    </html>
  )
}
