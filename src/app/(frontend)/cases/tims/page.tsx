import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: 'tims数字化转型案例 | 泊冉软件',
  description: 'tims（Tim Hortons）主要提供咖啡、茶饮、烘焙食品（如甜甜圈、贝果、三明治）、快餐简餐及轻食，同时提供外带、外卖和移动点餐服务。',
  openGraph: {
    title: 'Tims 数字化转型案例',
    description: 'tims（Tim Hortons）主要提供咖啡、茶饮、烘焙食品（如甜甜圈、贝果、三明治）、快餐简餐及轻食，同时提供外带、外卖和移动点餐服务。',
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
