import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '汇纳股份数字化案例 - 数据服务企业业财一体化实战 | 泊冉软件',
  description: '汇纳股份如何通过业财一体化实现项目-交付-回款全流程打通？解决数据服务项目成本核算难、应收账款管理复杂问题。数据服务行业数字化转型实战案例。',
  openGraph: {
    title: '汇纳股份数字化案例 - 数据服务企业业财一体化实战',
    description: '汇纳股份如何通过业财一体化实现项目-交付-回款全流程打通？解决数据服务项目成本核算难、应收账款管理复杂问题。数据服务行业数字化转型实战案例。',
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
        url="https://www.iboran.com/cases/hui-na-gu-fen"
        variant="case"
      />
      <CTA />
    </main>
  )
}
