import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '国资国企数智化转型解决方案 - 激活数智新动能 | 泊冉软件',
  description: '泊冉软件为国资国企提供一站式数字化转型解决方案，涵盖智慧国资监管、国有资本投资运营、企业数字化转型等领域，助力国资国企构建"智慧监管+智能运营"体系，推动国有资本布局优化和结构调整。',
  keywords: [
    '国资国企',
    '数字化转型',
    '智慧国资',
    '国资监管',
    '新质生产力',
    '泊冉软件',
    '用友',
    '三重一大',
    '财务共享',
    '司库管理'
  ],
}

export default function StateOwnedSolutionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <ValueSection />
      <CTASection />
    </main>
  )
}
