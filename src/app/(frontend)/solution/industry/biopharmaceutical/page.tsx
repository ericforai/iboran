import type { Metadata } from 'next'
import { Hero } from './Hero'
import { IndustryChallenges } from './IndustryChallenges'
import { SolutionOverview } from './SolutionOverview'
import { KeyScenarios } from './KeyScenarios'
import { IndustryCases } from './IndustryCases'
import { ValueSection } from './ValueSection'
import { CTASection } from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '生物医药行业解决方案 - GMP/GSP合规与研产一体化 | 泊冉软件',
  description: '泊冉软件为生物医药企业提供符合GMP/GSP/CSV合规要求的全产业链数智化解决方案，覆盖CDMO研产一体化、质量管理、供应链协同与全球化运营，助力药企IPO上市与高质量发展。',
  keywords: '生物医药ERP, 医药行业解决方案, CDMO管理系统, GMP合规软件, GSP管理系统, CSV验证, 事项会计, YonGPT, AI智能体, 药企数字化转型',
}

export default function BiopharmaceuticalSolutionPage() {
  return (
    <main className="flex min-h-screen flex-col">
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
        url="https://www.iboran.com/solution/industry/biopharmaceutical"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
