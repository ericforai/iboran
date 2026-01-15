import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '羚牛新能源数字化转型案例 | 泊冉软件',
  description: '羚牛新能源提供新能源汽车充电解决方案及相关服务，包括充电桩销售、安装及运维，涵盖智能充电设备与能源管理服务。',
  openGraph: {
    title: '羚牛新能源数字化转型案例',
    description: '羚牛新能源提供新能源汽车充电解决方案及相关服务，包括充电桩销售、安装及运维，涵盖智能充电设备与能源管理服务。',
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
