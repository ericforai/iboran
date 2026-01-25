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
  title: '芯片制造行业解决方案 | 泊冉软件',
  description: '泊冉软件为芯片制造行业提供一站式CIM数字化解决方案，涵盖MES、EAP、SPC、FDC、YMS等核心模块，助力12寸晶圆量产线实现Auto3全自动化',
  keywords: ['芯片制造', '半导体CIM', 'MES系统', '晶圆制造', '良率管理', '泊冉软件', '国产替代'],
  openGraph: {
    title: '芯片制造行业解决方案 | 泊冉软件',
    description: '智造芯未来，CIM赋能半导体数字化转型',
  },
}

export default function SemiconductorSolutionPage() {
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
        url="https://www.iboran.com/solution/industry/semiconductor"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
