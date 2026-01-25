import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'TRM 资金管理解决方案 | 泊冉软件',
  description: '用友BIP TRM资金管理解决方案，覆盖从资金流动性管理、资金结算到投融资决策的全流程。实现资金可视化、智能化管理，提升资金使用效率。',
  keywords: ['TRM', '资金管理', '司库管理', 'YonBIP', 'YonSuite', '资金池', '投融资', '泊冉软件'],
  openGraph: {
    title: 'TRM 资金管理解决方案 - 从流动性到投融资',
    description: '资金全流程数智化管理，提升资金使用效率，降低财务风险。',
  },
}

export default function TRMPage() {
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
        url="https://www.iboran.com/solution/business/trm"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
