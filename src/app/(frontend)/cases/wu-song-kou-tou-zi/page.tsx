import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '吴淞口投资数字化转型案例 | 泊冉软件',
  description: '吴淞口投资主要提供产业投资、资产管理、园区开发与运营服务，聚焦科技创新与新兴产业领域。',
  openGraph: {
    title: '吴淞口投资数字化转型案例',
    description: '吴淞口投资主要提供产业投资、资产管理、园区开发与运营服务，聚焦科技创新与新兴产业领域。',
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
