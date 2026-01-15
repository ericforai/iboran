import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '上海清算所数字化转型案例 | 泊冉软件',
  description: '提供金融交易清算服务，包括登记、托管、结算、保证金管理等。',
  openGraph: {
    title: '上海清算所数字化转型案例',
    description: '提供金融交易清算服务，包括登记、托管、结算、保证金管理等 - 数字化升级解决方案',
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
