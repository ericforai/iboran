import type { Metadata } from 'next'
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
  title: '乳制品行业解决方案 - 全产业链数智化 | 泊冉软件',
  description: '泊冉软件为乳制品行业提供端到端数字化解决方案，涵盖数智化牧场、智能制造、全渠道营销及质量追溯体系，助力乳企实现精益化运营。',
  keywords: ['乳制品', '乳业数智化', '牧场管理', '乳品追溯', '用友BIP', '全渠道营销'],
}

export default function DairyIndustryPage() {
  return (
    <main className="bg-white">
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
        url="https://www.iboran.com/solution/industry/dairy"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
