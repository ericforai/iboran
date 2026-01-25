import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '食品行业数字化解决方案 | 全链路溯源与业财一体',
  description: '面向食品加工与流通企业，覆盖质量溯源、生产协同、全渠道分销与业财一体化管理，提升合规透明度与运营效率。',
}

export default function FoodSolutionPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">食品行业数字化解决方案</h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          泊冉软件正致力于为食品加工与流通企业打造全产业链数智化方案。
          <br />该方案包含：质量溯源、生产协同、全渠道分销与业财一体化经营。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
          >
            咨询方案细节
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/industry/food"
        variant="solution"
        showDecisionFramework
      />
    </main>
  )
}
