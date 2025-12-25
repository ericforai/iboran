import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '汽配行业解决方案 - 泊冉软件',
  description: '多层级供应链协同 · 质量体系管控 · 成本透明化。',
}

export default function AutomotivePartsSolutionPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">汽配行业解决方案</h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          泊冉软件正致力于为汽车零部件制造企业打造多维度协同方案。
          <br />该方案包含：多层级供应链协同、IATF16949 质量管控体系、精细化成本核算与生产透明化。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/about/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
          >
            咨询方案细节
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  )
}
