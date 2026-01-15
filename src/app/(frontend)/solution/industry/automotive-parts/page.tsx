import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '汽配行业解决方案 - 数字化转型 | 泊冉软件',
  description: '泊冉软件为汽配企业提供一站式数字化解决方案，覆盖主机厂协同、精益制造、多级质量追溯与集团管控。',
}

export default function AutomotivePartsSolutionPage() {
  return (
    <main className="min-h-screen bg-white">
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
