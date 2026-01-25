import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '西域供应链数字化案例 - 供应链管理业财一体化实战 | 泊冉软件',
  description: '西域供应链如何通过业财一体化实现采购-仓储-配送全链路打通？解决供应链管理库存周转率低、物流成本核算不准问题。供应链行业数字化转型实战案例。',
  openGraph: {
    title: '西域供应链数字化案例 - 供应链管理业财一体化实战',
    description: '西域供应链如何通过业财一体化实现采购-仓储-配送全链路打通？解决供应链管理库存周转率低、物流成本核算不准问题。供应链行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/west-basin"
        variant="case"
      />
      <CTA />
    </main>
  )
}
