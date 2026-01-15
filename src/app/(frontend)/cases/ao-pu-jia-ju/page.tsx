import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '奥普家居数字化转型案例 | 泊冉软件',
  description: '提供家居产品，主要包括集成吊顶、浴霸、照明电器及智能家居系统。',
  openGraph: {
    title: '奥普家居数字化转型案例',
    description: '提供家居产品，主要包括集成吊顶、浴霸、照明电器及智能家居系统。',
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
