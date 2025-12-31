import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import ValueSection from './ValueSection'
import CustomerSuccess from './CustomerSuccess'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'HRM 人力资源全生命周期管理 | 泊冉软件',
  description: '用友BIP HRM人力资源解决方案，覆盖从招聘入职、培训发展到薪酬绩效的全流程。数智化人才管理，激活组织活力，赋能业务增长。',
  keywords: ['HRM', '人力资源', '人才管理', 'YonBIP', 'YonSuite', '薪酬', '绩效', '招聘', '泊冉软件'],
  openGraph: {
    title: 'HRM 人力资源全生命周期管理 - 激活组织活力',
    description: '数智化人才管理，从招聘到离职全流程数字化，激活组织活力。',
  },
}

export default function HRMPage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <ValueSection />
      <CustomerSuccess />
      <CTASection />
    </>
  )
}
