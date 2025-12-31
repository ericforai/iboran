import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'


export default async function AboutLayout({ children }: { children: React.ReactNode }) {
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  return (
    <>
      <main className="flex-grow">{children}</main>
    </>
  )
}
