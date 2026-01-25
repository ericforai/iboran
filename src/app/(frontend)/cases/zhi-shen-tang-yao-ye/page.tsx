import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '芝神堂药业数字化案例 - 中医药业财一体化实战 | 泊冉软件',
  description: '芝神堂药业如何通过业财一体化实现种植-生产-销售全流程打通？解决中医药成本追溯难、GAP合规管理复杂问题。中医药行业数字化转型实战案例。',
  openGraph: {
    title: '芝神堂药业数字化案例 - 中医药业财一体化实战',
    description: '芝神堂药业如何通过业财一体化实现种植-生产-销售全流程打通？解决中医药成本追溯难、GAP合规管理复杂问题。中医药行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/zhi-shen-tang-yao-ye"
        variant="case"
      />
      <CTA />
    </main>
  )
}
