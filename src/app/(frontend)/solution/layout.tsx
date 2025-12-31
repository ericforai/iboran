import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { PageClientWrapper } from '../page.client.wrapper'

export default async function SolutionLayout({ children }: { children: React.ReactNode }) {
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  return (
    <PageClientWrapper contactData={contactData}>
      <main className="flex-grow">{children}</main>
    </PageClientWrapper>
  )
}
