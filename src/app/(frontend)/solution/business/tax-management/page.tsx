import { Metadata } from 'next'
import Hero from './_components/Hero'
import PainPoints from './_components/PainPoints'
import Features from './_components/Features'
import HowItWorks from './_components/HowItWorks'
import ValueSection from './_components/ValueSection'
import CustomerSuccess from './_components/CustomerSuccess'
import CTASection from './_components/CTASection'

export const metadata: Metadata = {
  title: '税务管理解决方案 | 泊冉软件',
  description: '泊冉税务云基于金税四期合规要求，为大型企业提供全税种自动申报、智能算税、税务风险监控与发票全生命周期管理服务，助力企业构建精准合规的数字化税务体系。',
  keywords: ['税务管理', '金税四期', '税务云', '自动申报', '税务风险', '发票管理', 'BIP', '用友'],
}

export default function TaxManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <ValueSection />
      <CustomerSuccess />
      <CTASection />
    </main>
  )
}
