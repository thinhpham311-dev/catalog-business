import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import { ScrollTriggerProxy } from "@/components"
import LocomotiveProvider from "@/providers/LocomotiveScrollProvider"

export const metadata: Metadata = {
  title: 'The Catalog Business',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <LocomotiveProvider>
            <ScrollTriggerProxy />
            <GlobalStyles />
            {children}
          </LocomotiveProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
