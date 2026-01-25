import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '吴淞口投资数字化案例 - 园区运营业财一体化实战 | 泊冉软件',
  description: '吴淞口投资如何通过业财一体化实现园区资产精细化管理？解决园区运营租金收入确认难、多项目成本管控问题。园区运营行业数字化转型实战案例。',
  openGraph: {
    title: '吴淞口投资数字化案例 - 园区运营业财一体化实战',
    description: '吴淞口投资如何通过业财一体化实现园区资产精细化管理？解决园区运营租金收入确认难、多项目成本管控问题。园区运营行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/wu-song-kou-tou-zi"
        variant="case"
      />
      <CTA />
    </main>
  )
}
