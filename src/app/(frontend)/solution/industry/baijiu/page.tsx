import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '白酒行业数智化解决方案 | 智能制造与业财一体 | 泊冉软件',
  description: '泊冉软件为白酒企业提供一站式数智化解决方案，涵盖精益酿造、数字酒库、事项会计成本核算及全球化营销，赋能酒企高质量发展与品质传承。',
  keywords: ['白酒行业', '酒企数字化', '智能酿造', '数字酒库', '事项会计', '成本核算', '产销协同', '用友BIP', '泊冉软件'],
  openGraph: {
    title: '白酒行业数智化解决方案 | 泊冉软件',
    description: '数智酿造，品质传承。用友BIP赋能白酒行业全价值链。',
  },
}

export default function BaijiuSolutionPage() {
  return (
    <div className="bg-white">
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <ValueSection />
      <CTASection />
    </div>
  )
}
