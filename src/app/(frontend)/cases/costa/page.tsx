import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: 'Costa咖啡业财一体化案例 - 连锁餐饮数字化实战 | 泊冉软件',
  description: 'Costa咖啡如何通过业财一体化打通业务-财务-税务-资金全链路？解决多门店对账低效、数据孤岛难题。连锁餐饮数字化转型解决方案实战案例。',
  openGraph: {
    title: 'Costa咖啡业财一体化案例 - 连锁餐饮数字化实战',
    description: 'Costa咖啡如何通过业财一体化打通业务-财务-税务-资金全链路？解决多门店对账低效、数据孤岛难题。连锁餐饮数字化转型解决方案实战案例。',
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
        url="https://www.iboran.com/cases/costa"
        variant="case"
      />
      <CTA />
    </main>
  )
}
