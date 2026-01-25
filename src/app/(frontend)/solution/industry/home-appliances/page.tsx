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
  title: '家用电器及消费电子行业解决方案 - 数字化转型 | 泊冉软件',
  description: '泊冉软件为家电及 3C 消费电子行业提供一体化数智解决方案。实现天猫/京东等多平台订单聚合、多仓一盘货集成、SN 码全生命周期追溯，助力企业激发全渠道增长活力。',
  keywords: [
    '家电行业数字化', 
    '消费电子解决方案', 
    '一盘货管理',
    '3C 序列号追溯',
    '电商全渠道集成',
    '泊冉软件', 
    '用友 YonSuite'
  ],
}

export default function HomeAppliancesPage() {
  const industryName = '家用电器及消费电子'

  return (
    <main className="min-h-screen">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      
      <IndustryChallenges 
        industryName={industryName}
      />
      
      <SolutionOverview />
      
      <KeyScenarios />
      
      <IndustryCases />
      
      <ValueSection />
      
      <GeoSection
      
        title={metadata.title as string}
      
        description={metadata.description as string}
        keywords={metadata.keywords}
      
        url="https://www.iboran.com/solution/industry/home-appliances"
      
        variant="solution"
      
        showDecisionFramework
      
      />
      
      <CTASection />
    </main>
  )
}
