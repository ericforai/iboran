import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '斯丹姆医药开发数字化案例 - CRO服务业财一体化实战 | 泊冉软件',
  description: '斯丹姆医药开发如何通过业财一体化实现项目-临床试验-结算全流程打通？解决CRO服务项目成本核算难、多中心收入确认复杂问题。CRO行业数字化转型实战案例。',
  openGraph: {
    title: '斯丹姆医药开发数字化案例 - CRO服务业财一体化实战',
    description: '斯丹姆医药开发如何通过业财一体化实现项目-临床试验-结算全流程打通？解决CRO服务项目成本核算难、多中心收入确认复杂问题。CRO行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/si-dan-mu-yi-yao-kai-fa"
        variant="case"
      />
      <CTA />
    </main>
  )
}
