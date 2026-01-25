import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '汉堡王业财一体化案例 - 连锁快餐数字化实战 | 泊冉软件',
  description: '汉堡王如何通过业财一体化实现多门店订单、库存、财务数据打通？解决门店对账效率低、供应链协同难问题。连锁快餐数字化转型解决方案实战案例。',
  openGraph: {
    title: '汉堡王业财一体化案例 - 连锁快餐数字化实战',
    description: '汉堡王如何通过业财一体化实现多门店订单、库存、财务数据打通？解决门店对账效率低、供应链协同难问题。连锁快餐数字化转型解决方案实战案例。',
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
        url="https://www.iboran.com/cases/han-bao-wang"
        variant="case"
      />
      <CTA />
    </main>
  )
}
