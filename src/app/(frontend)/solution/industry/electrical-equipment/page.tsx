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
  title: '电气装备行业解决方案 - 智能制造数字化转型 | 泊冉软件',
  description: '泊冉软件为电气装备行业提供智能制造数字化转型解决方案。涵盖生产计划管理、WMS仓储、TMS运输、项目型生产管控，助力电气装备企业实现智能化升级与绿色低碳发展',
  keywords: ['电气装备', '智能制造', '数字化转型', 'MES', 'WMS', 'TMS', '生产计划', '项目型生产', '泊冉软件', '用友BIP'],
  openGraph: {
    title: '电气装备行业解决方案 | 泊冉软件',
    description: '智造电气未来 · 数智驱动产业升级',
  },
}

export default function ElectricalEquipmentSolutionPage() {
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
        url="https://www.iboran.com/solution/industry/electrical-equipment"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
