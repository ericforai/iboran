import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'

export default async function SolutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen bg-white">
        {children}
      </main>
    </>
  )
}

