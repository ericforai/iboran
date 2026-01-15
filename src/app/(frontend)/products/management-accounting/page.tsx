import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Architecture from './Architecture'
import Capabilities from './Capabilities'
import Methodology from './Methodology'
import DeliveryScope from './DeliveryScope'
import TechSpecs from './TechSpecs'
import CustomerStories from './CustomerStories'
import Resources from './Resources'
import FAQ from './FAQ'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'BIP 管理会计｜业财融合、财管分离的数智化管理体系｜泊冉软件',
  description: '泊冉软件助力企业构建 BIP 管理会计体系，实现全面成本管理、实时模拟与智能月结。通过财管分离架构，兼顾财务合规与管理决策，提升企业核心竞争力。',
  keywords: ['管理会计', 'BIP管理会计', '成本管理', '业财融合', '财管分离', '智能月结', '泊冉软件'],
  openGraph: {
    title: 'BIP 管理会计 - 业财融合、财管分离的数智化管理体系',
    description: '实现全面成本管理、实时模拟与智能月结，兼顾财务合规与管理决策。',
  },
}

export default function ManagementAccountingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <PainPoints />
      <Architecture />
      <Capabilities />
      <Methodology />
      <DeliveryScope />
      <TechSpecs />
      <CustomerStories />
      <Resources />
      <FAQ />
      <CTASection />
    </main>
  )
}
