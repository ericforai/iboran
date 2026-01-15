import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '爱数科技数字化转型案例 | 泊冉软件',
  description: '爱数科技提供数据管理、数据备份与恢复、数据安全及数字化转型相关的软件产品与技术服务。',
  openGraph: {
    title: '爱数科技数字化转型案例',
    description: '爱数科技提供数据管理、数据备份与恢复、数据安全及数字化转型相关的软件产品与技术服务。',
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
