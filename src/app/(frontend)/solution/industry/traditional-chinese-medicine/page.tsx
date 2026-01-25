import type { Metadata } from 'next'
import Hero from './Hero'
import { IndustryChallenges } from './IndustryChallenges'
import { SolutionOverview } from './SolutionOverview'
import { KeyScenarios } from './KeyScenarios'
import { IndustryCases } from './IndustryCases'
import { ValueSection } from './ValueSection'
import { CTASection } from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '中药企业数智化解决方案 - 质量合规 | 成本管控 | 泊冉软件',
  description: '泊冉软件为中药企业提供从种植、加工、生产到流通的全产业链数智化解决方案。满足新GAP/GMP/GSP合规要求，实现质量全追溯与成本精细化管控。',
}

export default function TraditionalChineseMedicineSolution() {
  return (
    <main className="min-h-screen">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <ValueSection />
      <IndustryCases />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/industry/traditional-chinese-medicine"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
