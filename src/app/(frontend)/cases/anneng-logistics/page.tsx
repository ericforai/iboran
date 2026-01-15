import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '安能物流数字化转型案例 | 泊冉软件',
  description: '安能物流作为中国领先的零担物流服务商，面临运力调度优化、成本精细化管理和客户服务体验提升的挑战。泊冉软件为其打造了智慧物流管理平台，实现全链路数字化运营。',
  openGraph: {
    title: '安能物流数字化转型案例',
    description: '安能物流作为中国领先的零担物流服务商，面临运力调度优化、成本精细化管理和客户服务体验提升的挑战。泊冉软件为其打造了智慧物流管理平台，实现全链路数字化运营。',
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
