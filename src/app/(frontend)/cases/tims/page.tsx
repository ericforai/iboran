import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: 'Tims咖啡数字化案例 - 连锁咖啡品牌业财一体化 | 泊冉软件',
  description: 'Tims咖啡如何通过业财一体化打通多门店业务-财务-税务全链路？解决移动点餐数据对账、会员订单同步难题。连锁咖啡品牌数字化转型实战案例。',
  openGraph: {
    title: 'Tims咖啡数字化案例 - 连锁咖啡品牌业财一体化',
    description: 'Tims咖啡如何通过业财一体化打通多门店业务-财务-税务全链路？解决移动点餐数据对账、会员订单同步难题。连锁咖啡品牌数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/tims"
        variant="case"
      />
      <CTA />
    </main>
  )
}
