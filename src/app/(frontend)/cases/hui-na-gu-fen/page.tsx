import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '汇纳股份数字化转型案例 | 泊冉软件',
  description: '汇纳股份提供商业客流分析系统、智慧商场解决方案、数据采集设备及大数据运营服务。',
  openGraph: {
    title: '汇纳股份数字化转型案例',
    description: '汇纳股份提供商业客流分析系统、智慧商场解决方案、数据采集设备及大数据运营服务。',
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
