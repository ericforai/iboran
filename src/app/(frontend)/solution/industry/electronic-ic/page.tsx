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
  title: '芯片制造/电子IC行业解决方案 - 数字化转型 | 泊冉软件',
  description: '泊冉软件为电子IC行业提供一站式数字化解决方案，针对Fabless、IDM模式提供研发、委外、供应链一体化服务，实现批号追溯与精细化成本管控。',
  keywords: [
    '芯片制造', 
    '电子IC', 
    'Fabless',
    '半导体数字化',
    '芯片委外管理',
    '泊冉软件', 
    '用友'
  ],
}

export default function ElectronicICPage() {
  const industryName = '电子IC'

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
      
        url="https://www.iboran.com/solution/industry/electronic-ic"
      
        variant="solution"
      
        showDecisionFramework
      
      />
      
      <CTASection />
    </main>
  )
}
