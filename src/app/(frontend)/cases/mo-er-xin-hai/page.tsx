import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '摩尔芯海数字化转型案例 | 泊冉软件',
  description: '提供AI芯片设计、半导体解决方案及智能硬件研发服务。',
  openGraph: {
    title: '摩尔芯海数字化转型案例',
    description: '提供AI芯片设计、半导体解决方案及智能硬件研发服务 - 数字化升级解决方案',
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
