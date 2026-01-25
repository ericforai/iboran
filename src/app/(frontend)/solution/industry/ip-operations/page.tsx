import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import ValueSection from './ValueSection'
import CustomerSuccess from './CustomerSuccess'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'IP 运营数智化解决方案 | 泊冉软件',
  description: '泊冉基于用友 YonBIP 底座，为 IP 授权行业提供从授权冲突预警、分成自动核算到 AI 维权巡检的全链路数智化管理，对账效率提升 1000%，产品研发周期缩短 70%。',
  keywords: ['IP运营', 'IP授权管理', '品牌授权', '版权管理', 'Royalty结算', '用友BIP', '泊冉软件', '南极电商'],
  openGraph: {
    title: 'IP 运营数智化解决方案',
    description: '从 IP 创意到现金流，打造授权全链路闭环，对账效率提升 1000%',
  },
}

export default function IPOperationsPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <ValueSection />
      <CustomerSuccess />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/industry/ip-operations"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
