import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '福寿康数字化案例 - 养老服务业财一体化实战 | 泊冉软件',
  description: '福寿康如何通过业财一体化实现多网点服务数据打通？解决养老服务成本核算难、多机构财务管控复杂问题。养老服务行业数字化转型实战案例。',
  openGraph: {
    title: '福寿康数字化案例 - 养老服务业财一体化实战',
    description: '福寿康如何通过业财一体化实现多网点服务数据打通？解决养老服务成本核算难、多机构财务管控复杂问题。养老服务行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/fu-shou-kang"
        variant="case"
      />
      <CTA />
    </main>
  )
}
