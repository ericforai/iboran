import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '爱数科技数字化案例 - 数据管理软件业财一体化实战 | 泊冉软件',
  description: '爱数科技如何通过业财一体化实现订阅-交付-续费全流程打通？解决SaaS软件收入确认难、多渠道License管理复杂问题。数据管理软件行业数字化转型实战案例。',
  openGraph: {
    title: '爱数科技数字化案例 - 数据管理软件业财一体化实战',
    description: '爱数科技如何通过业财一体化实现订阅-交付-续费全流程打通？解决SaaS软件收入确认难、多渠道License管理复杂问题。数据管理软件行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/ai-shu-ke-ji"
        variant="case"
      />
      <CTA />
    </main>
  )
}
