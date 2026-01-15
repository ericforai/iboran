import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import ValueSection from './ValueSection'
import CustomerSuccess from './CustomerSuccess'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'L2C 销售到收款解决方案 | 泊冉软件',
  description: '用友BIP L2C解决方案，从活动线索、销售到收款的端到端业务流程，销售效率提升20%+，合同周期缩短30%+',
  keywords: ['L2C', 'Lead to Cash', '销售管理', 'CRM', '用友BIP', '泊冉软件', '收款管理'],
  openGraph: {
    title: 'L2C 销售到收款解决方案',
    description: '从线索到收款，打造端到端销售闭环，驱动业务持续增长',
  },
}

export default function LeadToCashPage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <ValueSection />
      <CustomerSuccess />
      <CTASection />
    </>
  )
}
