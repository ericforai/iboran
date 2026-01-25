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
  title: '互联网行业解决方案 - 数字化转型 | 泊冉软件',
  description: '泊冉软件为互联网企业提供一站式数字化解决方案，涵盖全球司库管理、智能财务、人力资源数字化等核心场景，助力实现业财融合与全球化运营。',
  keywords: [
    '互联网行业解决方案',
    '互联网企业数字化',
    '全球司库管理',
    '业财融合',
    '泊冉软件',
    '用友BIP'
  ],
  openGraph: {
    title: '互联网行业数字化转型解决方案 | 泊冉软件',
    description: '数智驱动，重塑商业新增长。泊冉软件助力互联网企业构建敏捷、合规、智能的数智底座。',
  },
}

export default function InternetIndustrySolution() {
  return (
    <main>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <ValueSection />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/industry/internet"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
