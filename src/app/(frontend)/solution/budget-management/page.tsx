import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import HowItWorks from './HowItWorks'
import CustomerSuccess from './CustomerSuccess'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

const SOLUTION_NAME = '全面预算管理'
const DESCRIPTION = '基于云原生架构与多维内存数据库，构建战略、计划、预算、绩效四位一体的数智化闭环，支持实时模拟测算与全业务编控，帮助企业实现从战略目标到经营执行的精准落地。'

export const metadata: Metadata = {
  title: `${SOLUTION_NAME}解决方案 | 泊冉软件`,
  description: DESCRIPTION,
  keywords: [SOLUTION_NAME, '全面预算', '预算编报', '预算控制', '业财一体', '用友BIP', '计划预算', '预算执行分析'],
  openGraph: {
    title: `${SOLUTION_NAME}解决方案 | 泊冉软件`,
    description: DESCRIPTION,
  },
}

export default function BudgetManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <SeoH1 title={metadata.title as string} />
      <Hero 
        title={SOLUTION_NAME}
        tagline="多维数智预算，敏捷算赢未来"
        description={DESCRIPTION}
      />
      
      <PainPoints />
      
      <Features />
      
      <HowItWorks />
      
      <ValueSection />
      
      <CustomerSuccess />
      
      <GeoSection
      
        title={metadata.title as string}
      
        description={metadata.description as string}
        keywords={metadata.keywords}
      
        url="https://www.iboran.com/solution/budget-management"
      
        variant="solution"
      
        showDecisionFramework
      
      />
      
      <CTASection />
    </main>
  )
}
