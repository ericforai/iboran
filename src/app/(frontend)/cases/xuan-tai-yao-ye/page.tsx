import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '宣泰药业数字化案例 - 医药行业业财一体化实战 | 泊冉软件',
  description: '宣泰药业如何通过业财一体化实现全流程合规管控？解决医药行业成本追溯难、GXP合规管理复杂问题。医药行业数字化转型实战案例。',
  openGraph: {
    title: '宣泰药业数字化案例 - 医药行业业财一体化实战',
    description: '宣泰药业如何通过业财一体化实现全流程合规管控？解决医药行业成本追溯难、GXP合规管理复杂问题。医药行业数字化转型实战案例。',
  },
}

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <Challenge />
      <Solution />
      <Results />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        url="https://www.iboran.com/cases/xuan-tai-yao-ye"
        variant="case"
      />
      <CTA />
    </main>
  )
}
