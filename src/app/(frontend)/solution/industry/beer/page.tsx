import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '啤酒行业数智化解决方案 | 智能酿造与产销协同 | 泊冉软件',
  description: '泊冉软件为啤酒企业提供一站式数智化解决方案，涵盖智能酿造、数字工厂、产销协同、全渠道营销及业财一体化，助力啤酒行业高质量发展。',
  keywords: ['啤酒行业', '啤酒数字化', '智能酿造', '数字工厂', '产销协同', '即时零售', '用友BIP', '泊冉软件'],
  openGraph: {
    title: '啤酒行业数智化解决方案 | 泊冉软件',
    description: '数智酿造，品质升级。用友BIP赋能啤酒行业全价值链数字化转型。',
  },
}

export default function BeerSolutionPage() {
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
