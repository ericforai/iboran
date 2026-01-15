import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '中晶新源数字化转型案例 | 泊冉软件',
  description: '中晶新源提供半导体材料、集成电路及相关产品的研发、生产与销售，专注于硅基电子材料和功率器件领域。',
  openGraph: {
    title: '中晶新源数字化转型案例',
    description: '中晶新源提供半导体材料、集成电路及相关产品的研发、生产与销售，专注于硅基电子材料和功率器件领域。',
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
