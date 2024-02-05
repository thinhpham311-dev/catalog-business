import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import LocomotiveProvider from "@/providers/LocomotiveScrollProvider"
import { Loading } from "@/components"

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
          <Loading>
            <LocomotiveProvider>
              <GlobalStyles />
              {children}
              <SpeedInsights />
            </LocomotiveProvider>
          </Loading>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
