import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import { ScrollTriggerProxy } from "@/components"
import LocomotiveProvider from "@/providers/LocomotiveScrollProvider"

export const metadata: Metadata = {
  title: 'Twin example',
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
            <GlobalStyles />
            <ScrollTriggerProxy />
            {children}
          </LocomotiveProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
