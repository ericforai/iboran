import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '汉堡王数字化转型案例 | 泊冉软件',
  description: '汉堡、薯条、鸡翅、饮料等快餐食品及堂食、外带、外卖服务',
  openGraph: {
    title: '汉堡王数字化转型案例',
    description: '汉堡、薯条、鸡翅、饮料等快餐食品及堂食、外带、外卖服务 - 数字化升级解决方案',
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
