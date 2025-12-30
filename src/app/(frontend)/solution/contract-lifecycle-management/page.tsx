import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import CustomerSuccess from './CustomerSuccess'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'CLM 数智合同管理解决方案 | 业财法融合 | 泊冉软件',
  description: '泊冉 CLM 合同全生命周期管理解决方案，提供从合同起草、智能审批、电子签章到履约监控的一站式服务。打通业财数据孤岛，防范合规风险，提升签约效率。',
  keywords: ['CLM', '合同管理系统', '电子签章', '业财融合', '合同全生命周期', '智能合同', '用友BIP'],
}

export default function SolutionPage() {
  return (
    <main>
      <Hero />
      <CustomerSuccess />
      <PainPoints />
      <HowItWorks />
      <Features />
      <ValueSection />
      <CTASection />
    </main>
  )
}
