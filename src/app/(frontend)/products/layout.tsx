
import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { PageClientWrapper } from '../page.client.wrapper'
import { Footer } from '@/components/Footer'

export default async function ProductLayout({ children }: { children: React.ReactNode }) {
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  return (
    <div className="flex flex-col min-h-screen">
       <PageClientWrapper contactData={contactData}>
          <main className="flex-grow">
            {children}
          </main>
       </PageClientWrapper>
       <Footer />
    </div>
  )
}
