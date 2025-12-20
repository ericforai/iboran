import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'AIP 企业自建智能化应用 | 泊冉软件',
  description: 'AIP（Enterprise Self-built Intelligent Applications）是 YonBIP & YonSuite 企业智能化重构的技术底座，支持 YonGPT 构建、RAG 知识库与智能 Agent。',
  keywords: ['AIP', '智能化应用', 'YonGPT', 'RAG', '智能助手', 'Agent', '用友BIP', '泊冉软件'],
  openGraph: {
    title: 'AIP 企业自建智能化应用',
    description: '赋能企业快速构建、部署和管理数智化应用，将 AI 深度嵌入业务流程。',
  },
}

export default function AIPSolutionPage() {
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
