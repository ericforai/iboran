import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '上海优动运动用品有限公司数字化转型案例 | 泊冉软件',
  description: '运动用品销售与相关配套服务',
  openGraph: {
    title: '上海优动运动用品数字化转型案例',
    description: '运动用品销售与相关配套服务 - 数字化升级解决方案',
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
