import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '佰融实业数字化转型案例 | 泊冉软件',
  description: '佰融实业提供大宗贸易金融服务、投资管理、资产管理及相关咨询业务。',
  openGraph: {
    title: '佰融实业数字化转型案例',
    description: '佰融实业提供大宗贸易金融服务、投资管理、资产管理及相关咨询业务。',
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
