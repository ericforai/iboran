import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '天田中国数字化案例 - 机床设备业财一体化实战 | 泊冉软件',
  description: '天田中国如何通过业财一体化实现销售-服务-配件全流程打通？解决机床设备售后服务成本核算难、配件库存管理复杂问题。机床设备行业数字化转型实战案例。',
  openGraph: {
    title: '天田中国数字化案例 - 机床设备业财一体化实战',
    description: '天田中国如何通过业财一体化实现销售-服务-配件全流程打通？解决机床设备售后服务成本核算难、配件库存管理复杂问题。机床设备行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/tian-tian-zhong-guo"
        variant="case"
      />
      <CTA />
    </main>
  )
}
