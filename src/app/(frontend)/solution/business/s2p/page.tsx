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
  title: 'S2P 从需求采购到付款解决方案 | 泊冉软件',
  description: '用友BIP端到端数字化供应链解决方案，覆盖战略寻源、采购执行、供应商管理全流程，实现采购效率提升20%、采购周期缩短4天、阳光透明采购。',
  keywords: ['S2P', '采购到付款', 'Source to Pay', '供应链管理', 'SRM', '电子采购', '用友BIP', 'YonSuite', '泊冉软件', '数字化采购'],
  openGraph: {
    title: 'S2P 从需求采购到付款解决方案 - 端到端数字化供应链专家',
    description: '从需求采购到付款的端到端数字化供应链解决方案，实现采购效率提升20%、采购周期缩短4天。',
  },
}

export default function S2PPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <CustomerSuccess />
      <PainPoints />
      <HowItWorks />
      <Features />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/business/s2p"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
