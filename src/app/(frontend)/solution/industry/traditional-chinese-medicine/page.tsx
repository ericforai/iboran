import type { Metadata } from 'next'
import Hero from './Hero'
import { IndustryChallenges } from './IndustryChallenges'
import { SolutionOverview } from './SolutionOverview'
import { KeyScenarios } from './KeyScenarios'
import { IndustryCases } from './IndustryCases'
import { ValueSection } from './ValueSection'
import { CTASection } from './CTASection'

export const metadata: Metadata = {
  title: '中药企业数智化解决方案 - 质量合规 | 成本管控 | 泊冉软件',
  description: '泊冉软件为中药企业提供从种植、加工、生产到流通的全产业链数智化解决方案。满足新GAP/GMP/GSP合规要求，实现质量全追溯与成本精细化管控。',
}

export default function TraditionalChineseMedicineSolution() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <ValueSection />
      <IndustryCases />
      <CTASection />
    </main>
  )
}
