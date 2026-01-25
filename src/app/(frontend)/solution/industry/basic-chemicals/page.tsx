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
  title: '基础化工行业解决方案 - 绿色高端智能化转型 | 泊冉软件',
  description: '泊冉软件为基础化工行业提供绿色化、高端化、智能化数字转型解决方案。涵盖营销管理、采购管理、生产制造、业财一体等核心场景，服务万华化学、道恩集团等17+行业标杆客户',
  keywords: ['基础化工', '化工数字化', '智能制造', '绿色化工', '业财一体', '用友BIP', '泊冉软件'],
  openGraph: {
    title: '基础化工行业解决方案 | 泊冉软件',
    description: '绿色·高端·智能 驱动化工行业数智化转型升级',
  },
}

export default function BasicChemicalsSolutionPage() {
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
        url="https://www.iboran.com/solution/industry/basic-chemicals"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
