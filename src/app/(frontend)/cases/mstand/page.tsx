import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: 'M Stand数字化案例 - 连锁咖啡品牌业财一体化 | 泊冉软件',
  description: 'M Stand如何通过业财一体化实现多门店会员数据打通？解决连锁咖啡库存同步难、会员订单对账问题。连锁咖啡品牌数字化转型实战案例。',
  openGraph: {
    title: 'M Stand数字化案例 - 连锁咖啡品牌业财一体化',
    description: 'M Stand如何通过业财一体化实现多门店会员数据打通？解决连锁咖啡库存同步难、会员订单对账问题。连锁咖啡品牌数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/mstand"
        variant="case"
      />
      <CTA />
    </main>
  )
}
