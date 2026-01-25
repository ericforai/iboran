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
  title: 'R2R 智能会计与全球报告解决方案 | 泊冉软件',
  description: '用友BIP 事项法会计解决方案。涵盖实时智能核算、快速关账、内部交易对账与全球合并报表。帮助集团企业构建世界一流的 R2R (Record to Report) 财务管理体系。',
  keywords: ['事项法会计', '智能核算', '快速关账', '全球司库', '合并报表', 'YonBIP', 'R2R', 'RPA财务'],
  openGraph: {
    title: 'R2R 智能会计与全球报告解决方案',
    description: '从事项核算到全球报告，重构企业财务价值链。',
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
        url="https://www.iboran.com/solution/business/r2r"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
