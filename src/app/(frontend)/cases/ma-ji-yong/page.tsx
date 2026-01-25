import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '马记永数字化案例 - 连锁餐饮业财一体化实战 | 泊冉软件',
  description: '马记永如何通过业财一体化实现多门店数据打通？解决连锁餐饮库存同步难、供应商结算效率低问题。连锁餐饮行业数字化转型实战案例。',
  openGraph: {
    title: '马记永数字化案例 - 连锁餐饮业财一体化实战',
    description: '马记永如何通过业财一体化实现多门店数据打通？解决连锁餐饮库存同步难、供应商结算效率低问题。连锁餐饮行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/ma-ji-yong"
        variant="case"
      />
      <CTA />
    </main>
  )
}
