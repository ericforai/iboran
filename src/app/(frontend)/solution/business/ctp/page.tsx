import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'CTP 技术平台底座 | 泊冉软件',
  description: '用友BIP CTP技术平台底座，为企业提供统一的云原生技术架构，支撑业务敏捷创新。具备高性能、高可用、高扩展能力，支持多云多端部署。',
  keywords: ['CTP', '技术平台', 'YonBIP', '云原生', 'PaaS', '微服务', '低代码', '泊冉软件', '企业数智化'],
  openGraph: {
    title: 'CTP 技术平台底座 - 企业数智化基石',
    description: '统一技术底座，支撑业务创新，构建企业级云原生PaaS平台。',
  },
}

export default function CTPPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <Features />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/business/ctp"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
