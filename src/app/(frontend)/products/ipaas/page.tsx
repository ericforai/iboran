import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import Architecture from './Architecture'
import CoreCapabilities from './CoreCapabilities'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'LINK iPaaS 企业集成平台 | 系统连接与数据贯通',
  description: '面向多系统并行企业的一体化集成平台，覆盖API管理、数据同步、流程编排与资产复用，打通业务孤岛。',
  keywords: ['企业集成平台', 'LINK', 'YonBIP', 'YonSuite', 'API管理', 'MDM', 'ESB', '泊冉软件'],
  openGraph: {
    title: 'LINK iPaaS 企业集成平台',
    description: '通过一体化集成与快捷连接，提升企业运转效率，促成业务一体化。',
  },
}

export default function EnterpriseIntegrationPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <Architecture />
      <CoreCapabilities />
      <Features />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/products/ipaas"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
