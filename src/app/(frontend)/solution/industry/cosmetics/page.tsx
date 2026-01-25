import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '化妆品行业数智化解决方案 | 全域营销与业财一体 | 泊冉软件',
  description: '泊冉软件为化妆品企业提供一站式数智化解决方案，涵盖全域营销、B2B/B2C一体化、供应链协同及业财融合，赋能美妆企业高质量发展与品牌升级。',
  keywords: ['化妆品行业', '美妆数字化', '全域营销', 'B2B2C', '供应链协同', '业财一体', '用友BIP', '泊冉软件'],
  openGraph: {
    title: '化妆品行业数智化解决方案 | 泊冉软件',
    description: '全域营销，品牌升级。用友BIP赋能化妆品行业全价值链。',
  },
}

export default function CosmeticsSolutionPage() {
  return (
    <div className="bg-white">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/industry/cosmetics"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </div>
  )
}
