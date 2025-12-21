import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'R2R 核算到报告解决方案 | 泊冉软件',
  description: '用友BIP智能财务解决方案，打通从业务事件到会计核算、成本管理、合并报表的全流程，实现财务数智化转型。合并效率提升80%，主表自动化率100%。',
  keywords: ['R2R', '核算到报告', '智能财务', '财务数智化', '合并报表', '用友BIP', 'YonSuite', '泊冉软件', '会计核算', '成本管理'],
  openGraph: {
    title: 'R2R 核算到报告解决方案 - 财务数智化转型专家',
    description: '从业务发生到财务报告的端到端智能解决方案，实现合并效率提升80%、主表自动化率100%。',
  },
}

export default function R2RPage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <ValueSection />
      <CTASection />
    </>
  )
}
