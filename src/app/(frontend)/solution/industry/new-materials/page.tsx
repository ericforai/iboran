import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '新材料行业解决方案 - 负极材料数字化转型 | 泊冉软件',
  description: '泊冉软件为新材料（负极材料）行业提供一站式数字化解决方案，助力企业IPO合规、成本精细化核算、多组织协同管控，已成功服务东岛新能源、月星新材料等标杆客户',
  keywords: ['新材料', '负极材料', '锂电池', 'U9 cloud', 'IPO合规', '成本核算', '泊冉软件', '用友'],
  openGraph: {
    title: '新材料行业解决方案 | 泊冉软件',
    description: '数智驱动新材料企业IPO合规与精益制造',
  },
}

export default function NewMaterialsSolutionPage() {
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
