import { Navbar } from '@/components/Navbar'
import { Footer } from '@/Footer/Component'

export default async function SolutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans text-slate-600 bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
