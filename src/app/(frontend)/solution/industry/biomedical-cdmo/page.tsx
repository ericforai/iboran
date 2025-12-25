import { Metadata } from 'next'
import { Hero } from './Hero'
import { SoulSection } from './SoulSection'
import { IndustryChallenges } from './IndustryChallenges'
import { SolutionOverview } from './SolutionOverview'
import { KeyScenarios } from './KeyScenarios'
import { ValueSection } from './ValueSection'
import { IndustryCases } from './IndustryCases'
import { CTASection } from './CTASection'

export const metadata: Metadata = {
  title: '生物医药 CDMO 行业解决方案 - 研产一体化与质量合规 | 泊冉软件',
  description: '泊冉软件为生物医药 CDMO 企业提供符合 GMP/CSV 合规要求的数智化解决方案。覆盖项目全生命周期管理、研产一体化协同、精细化成本核算与多组织生产协同，助力基因治疗与生物制药企业高效发展。',
  keywords: 'CDMO ERP, 生物医药CDMO, 研产一体化, GMP合规软件, CSV验证, 医药项目管理, 事项会计, 基因治疗数智化',
}

export default function CdmoSolutionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <SoulSection />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <ValueSection />
      <IndustryCases />
      <CTASection />
    </main>
  )
}
