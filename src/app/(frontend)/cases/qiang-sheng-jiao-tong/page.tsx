import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '强生交通数字化案例 - 公共交通业财一体化实战 | 泊冉软件',
  description: '强生交通如何通过业财一体化实现多业态业务数据打通？解决出租车运营成本核算难、租赁收入确认效率低问题。公共交通行业数字化转型实战案例。',
  openGraph: {
    title: '强生交通数字化案例 - 公共交通业财一体化实战',
    description: '强生交通如何通过业财一体化实现多业态业务数据打通？解决出租车运营成本核算难、租赁收入确认效率低问题。公共交通行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/qiang-sheng-jiao-tong"
        variant="case"
      />
      <CTA />
    </main>
  )
}
