import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '中国华信邮电数字化案例 - 通信集成业财一体化实战 | 泊冉软件',
  description: '中国华信邮电如何通过业财一体化实现项目-交付-验收全流程打通？解决通信集成项目成本核算难、多地区收入确认复杂问题。通信集成行业数字化转型实战案例。',
  openGraph: {
    title: '中国华信邮电数字化案例 - 通信集成业财一体化实战',
    description: '中国华信邮电如何通过业财一体化实现项目-交付-验收全流程打通？解决通信集成项目成本核算难、多地区收入确认复杂问题。通信集成行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/zhong-guo-hua-xin-you-dian"
        variant="case"
      />
      <CTA />
    </main>
  )
}
