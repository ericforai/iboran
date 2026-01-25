import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '中晶新源数字化案例 - 半导体业财一体化实战 | 泊冉软件',
  description: '中晶新源如何通过业财一体化实现生产-质检-交付全流程打通？解决半导体批次追溯难、质量成本核算不准问题。半导体行业数字化转型实战案例。',
  openGraph: {
    title: '中晶新源数字化案例 - 半导体业财一体化实战',
    description: '中晶新源如何通过业财一体化实现生产-质检-交付全流程打通？解决半导体批次追溯难、质量成本核算不准问题。半导体行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/zhong-jing-xin-yuan"
        variant="case"
      />
      <CTA />
    </main>
  )
}
