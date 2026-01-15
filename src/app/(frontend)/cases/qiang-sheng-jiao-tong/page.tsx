import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '强生交通数字化转型案例 | 泊冉软件',
  description: '提供公共交通运营、出租车服务、车辆租赁及运输管理。',
  openGraph: {
    title: '强生交通数字化转型案例',
    description: '提供公共交通运营、出租车服务、车辆租赁及运输管理 - 数字化升级解决方案',
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
