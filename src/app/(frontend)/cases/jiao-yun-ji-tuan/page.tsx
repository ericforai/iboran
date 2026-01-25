import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '交运集团数字化案例 - 交通运输业财一体化实战 | 泊冉软件',
  description: '交运集团如何通过业财一体化实现多业态业务数据打通？解决交通运输成本核算不准、多线路收入确认效率低问题。交通运输行业数字化转型实战案例。',
  openGraph: {
    title: '交运集团数字化案例 - 交通运输业财一体化实战',
    description: '交运集团如何通过业财一体化实现多业态业务数据打通？解决交通运输成本核算不准、多线路收入确认效率低问题。交通运输行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/jiao-yun-ji-tuan"
        variant="case"
      />
      <CTA />
    </main>
  )
}
