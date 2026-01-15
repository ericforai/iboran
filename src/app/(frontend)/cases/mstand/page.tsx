import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: 'm stand数字化转型案例 | 泊冉软件',
  description: '咖啡、烘焙食品、轻食、饮品',
  openGraph: {
    title: 'M Stand 数字化转型案例',
    description: '咖啡、烘焙食品、轻食、饮品 - 数字化升级解决方案',
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
