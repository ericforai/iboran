import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '川至悦来家具数字化案例 - 家居零售业财一体化实战 | 泊冉软件',
  description: '川至悦来家具如何通过业财一体化实现门店-库存-财务数据打通？解决家居零售订单管理复杂、定制化成本核算难问题。家居零售行业数字化转型实战案例。',
  openGraph: {
    title: '川至悦来家具数字化案例 - 家居零售业财一体化实战',
    description: '川至悦来家具如何通过业财一体化实现门店-库存-财务数据打通？解决家居零售订单管理复杂、定制化成本核算难问题。家居零售行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/shang-hai-chuan-zhi-yue-lai-jia-ju-you-xian-gong-si"
        variant="case"
      />
      <CTA />
    </main>
  )
}
