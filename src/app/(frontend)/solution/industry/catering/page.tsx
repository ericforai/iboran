import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '餐饮行业解决方案 - 餐饮连锁数字化转型 | 泊冉软件',
  description: '泊冉软件为餐饮连锁企业提供一站式数字化解决方案，涵盖招商加盟、数智门店、业财深度融合、精细化日成本管理等核心场景，助力餐饮品牌高质量发展。',
  keywords: [
    '餐饮行业',
    '餐饮数字化',
    '餐饮连锁管理',
    '餐饮ERP',
    '泊冉软件',
    '曼玲集团案例',
    '快乐蜂案例',
    '餐饮业财一体'
  ],
  openGraph: {
    title: '餐饮连锁数智化转型解决方案 | 泊冉软件',
    description: '全栈云助力餐饮连锁企业深耕高质量增长，实现业财一致、精益成本、敏捷协作。',
  },
}

export default function CateringIndustryPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <ValueSection />
      <CTASection />
    </main>
  )
}
