import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '童涵春堂数字化案例 - 中药零售业财一体化实战 | 泊冉软件',
  description: '童涵春堂如何通过业财一体化实现门店-库存-会员全流程打通？解决中药零售多业态库存割裂、医保对账效率低问题。中药零售行业数字化转型实战案例。',
  openGraph: {
    title: '童涵春堂数字化案例 - 中药零售业财一体化实战',
    description: '童涵春堂如何通过业财一体化实现门店-库存-会员全流程打通？解决中药零售多业态库存割裂、医保对账效率低问题。中药零售行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/tong-han-chun-tang"
        variant="case"
      />
      <CTA />
    </main>
  )
}
