import { Toaster } from '@/components/ui/toaster'
import CookieProviderClient from '@/provider/CookieProvider'
import QueryProvides from '@/provider/ReeactQueryProvider'
import SidebarHandler from '@/provider/sidebarHandler'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/soho-light/theme.css'
import './globals.css'
import { ConfirmPopup } from 'primereact/confirmpopup'
import { NextUIProvider } from '@nextui-org/react'
export const metadata: Metadata = {
  title: 'RDG Admin',
  description: 'ADMIN',
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
          color="#000009"
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
          <PrimeReactProvider
            value={
              {
                // pt: Tailwind,
                // unstyled: true,
              }
            }
          >
            <SidebarHandler>
              <AnimatePresence>
                <CookieProviderClient>
                  <LazyMotion features={domAnimation}>
                    <>
                      <NextUIProvider>
                        {children}
                        <Toaster />
                        <ConfirmPopup />
                      </NextUIProvider>
                    </>
                  </LazyMotion>
                </CookieProviderClient>
              </AnimatePresence>
            </SidebarHandler>
          </PrimeReactProvider>
        </QueryProvides>
      </body>
    </html>
  )
}
