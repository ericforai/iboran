import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '犀早宠物数字化案例 - 宠物零售业财一体化实战 | 泊冉软件',
  description: '犀早宠物如何通过业财一体化实现多品类业务数据打通？解决宠物零售SKU管理复杂、会员订单对账效率低问题。宠物零售行业数字化转型实战案例。',
  openGraph: {
    title: '犀早宠物数字化案例 - 宠物零售业财一体化实战',
    description: '犀早宠物如何通过业财一体化实现多品类业务数据打通？解决宠物零售SKU管理复杂、会员订单对账效率低问题。宠物零售行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/xi-zao-chong-wu"
        variant="case"
      />
      <CTA />
    </main>
  )
}
