import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '爱发科数字化案例 - 装备制造业财一体化实战 | 泊冉软件',
  description: '爱发科如何通过业财一体化打通生产-交付-服务全链路？解决装备制造项目成本核算难、售后服务管理复杂问题。装备制造行业数字化转型实战案例。',
  openGraph: {
    title: '爱发科数字化案例 - 装备制造业财一体化实战',
    description: '爱发科如何通过业财一体化打通生产-交付-服务全链路？解决装备制造项目成本核算难、售后服务管理复杂问题。装备制造行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/ai-fa-ke"
        variant="case"
      />
      <CTA />
    </main>
  )
}
