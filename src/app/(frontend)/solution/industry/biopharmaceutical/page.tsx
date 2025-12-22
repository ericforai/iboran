import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '生物医药行业解决方案 - CDMO数字化转型 | 泊冉软件',
  description: '泊冉软件为生物医药CDMO企业提供一站式数字化解决方案，涵盖项目全生命周期管理、多组织协同生产、精细化成本核算、GMP/GCP/GLP质量管理体系，助力研产一体化价值激发',
  keywords: ['生物医药', 'CDMO', '医药数字化', 'GMP', '批次追溯', '项目管理', '用友YonSuite', '泊冉软件', '合同研发生产'],
  openGraph: {
    title: '生物医药行业解决方案 | 泊冉软件',
    description: '数智赋能，激发CDMO研产一体化价值',
  },
}

export default function BiopharmaceuticalSolutionPage() {
  return (
    <>
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <ValueSection />
      <CTASection />
    </>
  )
}
