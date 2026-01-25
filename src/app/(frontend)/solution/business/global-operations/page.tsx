import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '中企出海全球运营解决方案 - YonBIP助力全球化经营 | 泊冉软件',
  description: '泊冉软件为中国出海企业提供全球化运营解决方案，支持多语言、多币种、多时区统一管理。覆盖120+国家地区，30+语种，助力企业两周上线海外业务',
  keywords: ['中企出海', '全球化运营', '多语言', '多币种', '多时区', '海外ERP', 'YonBIP', '泊冉软件', '用友'],
  openGraph: {
    title: '中企出海全球运营解决方案 | 泊冉软件',
    description: 'YonBIP助力中国企业全球化经营，全球一套系统，多语多币多时区统一管理',
  },
}

export default function GlobalOperationsSolutionPage() {
  return (
    <>
      {/* Global Operations Solution Page */}
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <Features />
      <IndustryCases />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/business/global-operations"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
