import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '拳头游戏数字化案例 - 游戏行业业财一体化实战 | 泊冉软件',
  description: '拳头游戏如何通过业财一体化实现全球业务财务数据打通？解决游戏行业多地区收入确认难、虚拟资产对账复杂问题。游戏行业数字化转型实战案例。',
  openGraph: {
    title: '拳头游戏数字化案例 - 游戏行业业财一体化实战',
    description: '拳头游戏如何通过业财一体化实现全球业务财务数据打通？解决游戏行业多地区收入确认难、虚拟资产对账复杂问题。游戏行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/quan-tou-you-xi"
        variant="case"
      />
      <CTA />
    </main>
  )
}
