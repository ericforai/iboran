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
import { ExitIntentModal } from '@/components/ExitIntentModal'
import { DesktopFloatingActions } from '@/components/DesktopFloatingActions'
import { FloatingChatButton } from '@/components/FloatingChatButton'
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
        <meta name="baidu-site-verification" content="codeva-JLdkamsCUi" />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/assets/images/boran-logo-transparent.png" rel="apple-touch-icon" sizes="180x180" />
        {/* Baidu Analytics Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?1287e22d10212a7f224ed16edae3975f";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
        {/* Baidu Aifafan Bridge Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var lxb = document.createElement("script");
                lxb.src = "https://p.qiao.baidu.com/cps/chat?siteId=1287e22d10212a7f224ed16edae3975f";
                lxb.async = true;
                // Note: Actual bridge script often loads automatically with Analytics ID, 
                // but explicit loading ensures the 'lxb' object is available for manual triggers.
              })();
            `,
          }}
        />
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
              <main className="pt-16 lg:pt-20">
                {children}
              </main>
              <Footer />


              <MobileStickyBar contactData={contactData} />
              <ScrollTriggerDrawer />
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
  title: '泊冉软件 - 专业的用友软件实施服务商 | Yonyou Partner',
  description: '泊冉软件是用友合作伙伴，深耕智能制造、新零售及生物医药行业，提供从业务咨询到系统交付的全生命周期数智化转型服务。',
  keywords: '泊冉软件, 用友实施商, YonBIP, YonSuite, 用友合作伙伴, 数智化转型, ERP实施, 业财一体化',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
