import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '电子组装行业数字化解决方案 | 委外协同与批次追溯',
  description: '面向电子组装制造企业，构建数字化车间、委外协同与批次全流程追溯体系，提升质量可控性与交付稳定性。',
}

export default function ElectronicAssemblySolutionPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">电子组装行业数字化解决方案</h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          泊冉软件正致力于为电子组装制造企业打造数字化车间方案。
          <br />该方案包含：数字化车间管理、精细化委外协同、批次全过程追溯与质量体系。
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
        url="https://www.iboran.com/solution/industry/electronic-assembly"
        variant="solution"
        showDecisionFramework
      />
    </main>
  )
}
