import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '交运集团数字化转型案例 | 泊冉软件',
  description: '交运集团提供交通运输、物流配送、客运服务、货运服务及相关的运输设备租赁与维护。',
  openGraph: {
    title: '交运集团数字化转型案例',
    description: '交运集团提供交通运输、物流配送、客运服务、货运服务及相关的运输设备租赁与维护。',
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
