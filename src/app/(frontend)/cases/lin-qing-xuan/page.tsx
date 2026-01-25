import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '林清轩数字化案例 - 新零售品牌业财一体化实战 | 泊冉软件',
  description: '林清轩如何通过业财一体化实现线上线下一盘货管理？解决新零售门店库存同步难、会员订单对账问题。新零售品牌数字化转型实战案例。',
  openGraph: {
    title: '林清轩数字化案例 - 新零售品牌业财一体化实战',
    description: '林清轩如何通过业财一体化实现线上线下一盘货管理？解决新零售门店库存同步难、会员订单对账问题。新零售品牌数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/lin-qing-xuan"
        variant="case"
      />
      <CTA />
    </main>
  )
}
