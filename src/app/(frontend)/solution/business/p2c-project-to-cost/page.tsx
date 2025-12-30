import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import HowItWorks from './HowItWorks'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

const productTitle = 'P2C：从项目到成本'
const description = '打通项目立项、资源调度、预算控制、采购执行到核算报告的全流程，实现项目型企业的端到端自动化管理与精益成本。'

export const metadata: Metadata = {
  title: `${productTitle}解决方案 | 泊冉软件`,
  description: description,
  keywords: [productTitle, '项目管理', '成本管控', 'ERP', '用友', 'YonSuite', 'YonBIP', '泊冉软件'],
  openGraph: {
    title: `${productTitle}解决方案 | 泊冉软件`,
    description: description,
    images: ['/images/solutions/p2c-hero.jpg'], // Assuming placeholder or future asset
  },
}

export default function P2CSolutionPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <ValueSection />
      <CTASection />
    </main>
  )
}
