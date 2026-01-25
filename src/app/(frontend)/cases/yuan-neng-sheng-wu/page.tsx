import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '原能生物数字化案例 - 生物制药业财一体化实战 | 泊冉软件',
  description: '原能生物如何通过业财一体化打通研发-生产-销售全链路？解决生物制药批次管理难、成本核算不准确问题。生物制药行业数字化转型实战案例。',
  openGraph: {
    title: '原能生物数字化案例 - 生物制药业财一体化实战',
    description: '原能生物如何通过业财一体化打通研发-生产-销售全链路？解决生物制药批次管理难、成本核算不准确问题。生物制药行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/yuan-neng-sheng-wu"
        variant="case"
      />
      <CTA />
    </main>
  )
}
