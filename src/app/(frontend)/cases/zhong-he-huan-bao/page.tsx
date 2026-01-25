import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '中荷环保数字化案例 - 环保处理业财一体化实战 | 泊冉软件',
  description: '中荷环保如何通过业财一体化实现收运-处理-结算全流程打通？解决固废处理成本核算不准、多基地收入确认效率低问题。固废处理行业数字化转型实战案例。',
  openGraph: {
    title: '中荷环保数字化案例 - 环保处理业财一体化实战',
    description: '中荷环保如何通过业财一体化实现收运-处理-结算全流程打通？解决固废处理成本核算不准、多基地收入确认效率低问题。固废处理行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/zhong-he-huan-bao"
        variant="case"
      />
      <CTA />
    </main>
  )
}
