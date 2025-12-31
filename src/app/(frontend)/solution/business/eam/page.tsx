import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import ValueSection from './ValueSection'
import CustomerSuccess from './CustomerSuccess'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'EAM 资产全生命周期管理 | 泊冉软件',
  description: '用友BIP EAM资产管理解决方案，覆盖资产从获取、运维到退役的全生命周期。实现资产精细化管理，提升资产利用率，降低运营成本。',
  keywords: ['EAM', '资产管理', '设备管理', 'YonBIP', 'YonSuite', '预测性维护', '资产全生命周期', '泊冉软件'],
  openGraph: {
    title: 'EAM 资产全生命周期管理 - 从获取到退役',
    description: '实现资产精细化管理，提升资产利用率，降低运营成本。',
  },
}

export default function EAMPage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <ValueSection />
      <CustomerSuccess />
      <CTASection />
    </>
  )
}

