import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '上海川至悦来家具有限公司数字化转型案例 | 泊冉软件',
  description: '国外品牌家具销售与定制服务',
  openGraph: {
    title: '上海川至悦来家具数字化转型案例',
    description: '国外品牌家具销售与定制服务 - 数字化升级解决方案',
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
