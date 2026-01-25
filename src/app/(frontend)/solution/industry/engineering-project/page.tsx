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
  title: '业主方工程项目管理解决方案 - 业财一体深度管控 | 泊冉软件',
  description: '泊冉软件为业主方提供从规划立项、招标管理、合同协同、进度质安到验收转固的业财一体化深度解决方案。实现投资可控、进度可视、风险可查、价值闭环。',
  keywords: ['工程项目管理', '业主方', '项目管理数字化', '业财一体', '招标管理', '动态成本', '竣工转固', '用友BIP', '泊冉软件'],
  openGraph: {
    title: '业主方工程项目管理解决方案 | 泊冉软件',
    description: '业财一体深度管控，驱动工程全生命周期价值实现',
  },
}

export default function EngineeringProjectSolutionPage() {
  return (
    <>
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
        url="https://www.iboran.com/solution/industry/engineering-project"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
