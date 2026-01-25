import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '润达医疗数字化案例 - 医疗服务业财一体化实战 | 泊冉软件',
  description: '润达医疗如何通过业财一体化实现产品-服务-回款全流程打通？解决医疗服务对账效率低、多机构财务管控难问题。医疗服务行业数字化转型实战案例。',
  openGraph: {
    title: '润达医疗数字化案例 - 医疗服务业财一体化实战',
    description: '润达医疗如何通过业财一体化实现产品-服务-回款全流程打通？解决医疗服务对账效率低、多机构财务管控难问题。医疗服务行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/run-da-yi-liao"
        variant="case"
      />
      <CTA />
    </main>
  )
}
