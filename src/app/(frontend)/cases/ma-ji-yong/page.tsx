import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '马记永数字化转型案例 | 泊冉软件',
  description: '马记永提供拉面、凉菜、小吃等餐饮服务，主打兰州牛肉面及相关面食产品。',
  openGraph: {
    title: '马记永数字化转型案例',
    description: '马记永提供拉面、凉菜、小吃等餐饮服务，主打兰州牛肉面及相关面食产品。',
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
