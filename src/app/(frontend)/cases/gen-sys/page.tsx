import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '正帆科技数字化案例 - 半导体设备业财一体化实战 | 泊冉软件',
  description: '正帆科技如何通过业财一体化实现项目-交付-验收全流程打通？解决半导体设备项目成本核算难、多行业收入确认复杂问题。半导体设备行业数字化转型实战案例。',
  openGraph: {
    title: '正帆科技数字化案例 - 半导体设备业财一体化实战',
    description: '正帆科技如何通过业财一体化实现项目-交付-验收全流程打通？解决半导体设备项目成本核算难、多行业收入确认复杂问题。半导体设备行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/gen-sys"
        variant="case"
      />
      <CTA />
    </main>
  )
}
