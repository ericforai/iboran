import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Lexend } from 'next/font/google'
import React, { Suspense } from 'react'
import './globals.css'

import { MobileStickyBar } from '@/components/MobileStickyBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
// import { ReactScan } from '@/components/ReactScan'
import { WebVitals } from '@/components/WebVitals'
import { ScrollTriggerDrawer } from '@/components/ScrollTriggerDrawer'
import { FloatingChatButton } from '@/components/FloatingChatButton'
import { ExitIntentModal } from '@/components/ExitIntentModal'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { AttributionProvider } from '@/providers/Attribution'
import { AnalyticsProvider } from '@/providers/Analytics'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
  preload: false,
})

import { OrganizationJsonLd } from '@/components/OrganizationJsonLd'

// A minimal layout ensuring NO database or Payload code runs on the Home Page
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable} ${lexend.variable}`} lang="zh-CN" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/assets/images/boran-logo-transparent.png" rel="apple-touch-icon" sizes="180x180" />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans lg:pb-0 pb-20">
        <OrganizationJsonLd />
        {/* <ReactScan /> */}
        <WebVitals />
        {/* Cinematic Grain Overlay - DISABLED for Performance
        { <div className="fixed inset-0 z-[9999] pointer-events-none bg-cinematic-grain mix-blend-overlay"></div> }
        */}
        <Suspense fallback={<div />}>
          <AnalyticsProvider>
            <AttributionProvider>
              <Navbar contactData={contactData} />
              {children}
              <Footer />
              <MobileStickyBar contactData={contactData} />
              <ScrollTriggerDrawer />
              <FloatingChatButton contactData={contactData} />
              <ExitIntentModal />
            </AttributionProvider>
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.iboran.com'),
  title: '泊冉软件 - 专业的用友软件实施服务商 | Yonyou Platinum Partner',
  description: '泊冉软件是用友全球首批铂金级合作伙伴，深耕智能制造、新零售及生物医药行业，提供从业务咨询到系统交付的全生命周期数智化转型服务。',
  keywords: '泊冉软件, 用友实施商, YonBIP, YonSuite, 用友铂金级合作伙伴, 数智化转型, ERP实施, 业财一体化',
}
