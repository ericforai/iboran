import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import CustomerSuccess from './CustomerSuccess'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'FINANCE 财务云解决方案 | 泊冉软件',
  description: '用友BIP 财务云解决方案，基于"事项法会计"理论。覆盖智能会计、全球司库、电子档案、智慧税务等核心领域。实现业财深度融合，支撑企业全球化经营与合规管控。',
  keywords: ['财务云', '事项法会计', '智能核算', '全球司库', '电子档案', 'YonBIP', 'YonSuite', '泊冉软件'],
  openGraph: {
    title: 'FINANCE 财务云解决方案 - 事项法会计与智能财务',
    description: '通过智能会计、全球司库和电子档案，重构企业财务管理体系，实现业财水乳交融。',
  },
}

export default function FinanceCloudPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <CustomerSuccess />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/business/finance-cloud"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
