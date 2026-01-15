import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import HowItWorks from './HowItWorks'
import CustomerSuccess from './CustomerSuccess'

const SOLUTION_NAME = '财务共享'
const DESCRIPTION = '基于用友 BIP 打造的新一代财务共享服务平台，深度融合业财数据，应用 AI 智能技术，实现从交易到核算的端到端自动化，推动财务从管控型向价值创造型转型。'

export const metadata: Metadata = {
  title: `${SOLUTION_NAME}解决方案 | 泊冉软件`,
  description: DESCRIPTION,
  keywords: [SOLUTION_NAME, '财务共享中心', 'FSSC', '业财融合', '智能财务', '用友BIP', '财务数智化'],
  openGraph: {
    title: `${SOLUTION_NAME}解决方案 | 泊冉软件`,
    description: DESCRIPTION,
  },
}

export default function FinancialSharedServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero 
        title="业财融合 智能共享"
        tagline="新一代全球财务共享服务平台"
        description={DESCRIPTION}
      />
      
      <PainPoints />
      
      <Features />
      
      <HowItWorks />
      
      <ValueSection />
      
      <CustomerSuccess />
      
      <CTASection />
    </main>
  )
}
