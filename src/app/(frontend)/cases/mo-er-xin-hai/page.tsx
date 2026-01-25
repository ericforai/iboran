import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '摩尔芯海数字化案例 - AI芯片业财一体化实战 | 泊冉软件',
  description: '摩尔芯海如何通过业财一体化实现研发-流片-交付全流程打通？解决AI芯片项目成本核算难、IP授权收入确认复杂问题。AI芯片行业数字化转型实战案例。',
  openGraph: {
    title: '摩尔芯海数字化案例 - AI芯片业财一体化实战',
    description: '摩尔芯海如何通过业财一体化实现研发-流片-交付全流程打通？解决AI芯片项目成本核算难、IP授权收入确认复杂问题。AI芯片行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/mo-er-xin-hai"
        variant="case"
      />
      <CTA />
    </main>
  )
}
