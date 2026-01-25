import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '开能健康数字化案例 - 制造业业财一体化实战 | 泊冉软件',
  description: '开能健康如何通过业财一体化打通生产-库存-销售全链路？解决制造业成本核算不准、生产计划排程难问题。制造业数字化转型实战案例。',
  openGraph: {
    title: '开能健康数字化案例 - 制造业业财一体化实战',
    description: '开能健康如何通过业财一体化打通生产-库存-销售全链路？解决制造业成本核算不准、生产计划排程难问题。制造业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/kai-neng-jian-kang"
        variant="case"
      />
      <CTA />
    </main>
  )
}
