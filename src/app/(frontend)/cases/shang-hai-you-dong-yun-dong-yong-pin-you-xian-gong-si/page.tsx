import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '上海优动运动用品数字化案例 - 体育用品业财一体化实战 | 泊冉软件',
  description: '上海优动运动用品如何通过业财一体化实现多渠道库存打通？解决体育用品线上线下库存割裂、订单对账效率低问题。体育用品行业数字化转型实战案例。',
  openGraph: {
    title: '上海优动运动用品数字化案例 - 体育用品业财一体化实战',
    description: '上海优动运动用品如何通过业财一体化实现多渠道库存打通？解决体育用品线上线下库存割裂、订单对账效率低问题。体育用品行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/shang-hai-you-dong-yun-dong-yong-pin-you-xian-gong-si"
        variant="case"
      />
      <CTA />
    </main>
  )
}
