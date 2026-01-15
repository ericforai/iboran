import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '休食行业解决方案 - 泊冉软件',
  description: '全渠道营销 · 敏捷供应协同 · AI 智能应用。',
}

export default function SnackSolutionPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">休食行业解决方案</h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          泊冉软件正致力于为休闲食品企业打造敏捷数智化方案。
          <br />该方案包含：全渠道营销、敏捷供应协同、动态库存管理与 AI 智能补货应用。
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
