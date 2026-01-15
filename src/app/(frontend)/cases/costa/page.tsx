import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: 'costa数字化转型案例 | 泊冉软件',
  description: '咖啡饮品、轻食、休闲餐饮服务',
  openGraph: {
    title: 'Costa 数字化转型案例',
    description: '咖啡饮品、轻食、休闲餐饮服务 - 数字化升级解决方案',
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
