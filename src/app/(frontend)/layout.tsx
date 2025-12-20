import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'
import './globals.css'

import { MobileStickyBar } from '@/components/MobileStickyBar'
import { getCachedGlobal } from '@/utilities/getGlobals'

// A minimal layout ensuring NO database or Payload code runs on the Home Page
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const contactData = await getCachedGlobal('contact', 1)()

  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        {children}
        <MobileStickyBar contactData={contactData} />
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Boran Software | Yonyou Platinum Partner',
  description: 'Pro implementation services for Yonyou software.',
}
