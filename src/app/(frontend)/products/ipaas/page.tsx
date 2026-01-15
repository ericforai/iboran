import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import Architecture from './Architecture'
import CoreCapabilities from './CoreCapabilities'

export const metadata: Metadata = {
  title: 'LINK 企业集成平台解决方案 | 泊冉软件',
  description: '让商业连接更容易，让集成开发更轻松。一体化集成、快捷连接能力及资产共享，助力企业数智化转型。',
  keywords: ['企业集成平台', 'LINK', 'YonBIP', 'YonSuite', 'API管理', 'MDM', 'ESB', '泊冉软件'],
  openGraph: {
    title: 'LINK 企业集成平台解决方案 - 泊冉软件',
    description: '通过一体化集成与快捷连接，提升企业运转效率，促成业务一体化。',
  },
}

export default function EnterpriseIntegrationPage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Architecture />
      <CoreCapabilities />
      <Features />
      <ValueSection />
      <CTASection />
    </>
  )
}
