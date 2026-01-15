import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '西域供应链数字化转型案例 | 泊冉软件',
  description: '供应链管理服务、物流配送、仓储服务、采购与分销、进出口贸易',
  openGraph: {
    title: '西域供应链数字化转型案例',
    description: '供应链管理服务、物流配送、仓储服务、采购与分销、进出口贸易 - 数字化升级解决方案',
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
      <CTA />
    </main>
  )
}
