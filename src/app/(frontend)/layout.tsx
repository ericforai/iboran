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
import { ExitIntentModal } from '@/components/ExitIntentModal'
import { DesktopFloatingActions } from '@/components/DesktopFloatingActions'
import { FloatingChatButton } from '@/components/FloatingChatButton'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { AttributionProvider } from '@/providers/Attribution'
import { AnalyticsProvider } from '@/providers/Analytics'
import { BAIDU_AGL_PRODUCTION_ID } from '@/utilities/baiduTracking'

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
        {/* Baidu Aifafan/Tongji integration - load only on production domains */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var __productionHosts = ['iboran.com', 'www.iboran.com'];
              if (__productionHosts.indexOf(window.location.hostname) !== -1) {
                var _hmt = window._hmt || [];
                window._hmt = _hmt;
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?aac20df95e015006d1b11e4bd6e64a83";
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(hm, s);
                })();
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var __productionHosts = ['iboran.com', 'www.iboran.com'];
              if (__productionHosts.indexOf(window.location.hostname) !== -1) {
                window._agl = window._agl || [];
                (function () {
                  window._agl.push(['production', '${BAIDU_AGL_PRODUCTION_ID}']);
                  (function () {
                    var agl = document.createElement('script');
                    agl.type = 'text/javascript';
                    agl.async = true;
                    agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=${BAIDU_AGL_PRODUCTION_ID}';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(agl, s);
                  })();
                })();
              }
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
