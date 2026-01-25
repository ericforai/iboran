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
  title: '科技服务业数智化解决方案 - 项目管理与人才服务 | 泊冉软件',
  description: '泊冉软件为科技服务企业提供一站式数智化解决方案，融合项目管理(L2C)、人才服务(HR)、财务管理(Finance)，助力企业实现经营合规与降本增效。',
  keywords: [
    '科技服务业', 
    '项目管理软件',
    'L2C',
    '数智人力', 
    '业财一体化', 
    'YonSuite', 
    '艾克瑞特案例'
  ],
}

export default function TechServicesPage() {
  return (
    <main className="min-h-screen">
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
        url="https://www.iboran.com/solution/industry/tech-services"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
