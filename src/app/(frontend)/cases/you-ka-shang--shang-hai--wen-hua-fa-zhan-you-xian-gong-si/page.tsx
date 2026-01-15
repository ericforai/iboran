import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '优卡赏（上海）文化发展有限公司数字化转型案例 | 泊冉软件',
  description: '提供文化创意服务，包括卡牌、收藏品的设计、开发与销售，专注于集换式卡牌游戏及相关衍生品。',
  openGraph: {
    title: '优卡赏数字化转型案例',
    description: '提供文化创意服务，包括卡牌、收藏品的设计、开发与销售，专注于集换式卡牌游戏及相关衍生品。',
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
