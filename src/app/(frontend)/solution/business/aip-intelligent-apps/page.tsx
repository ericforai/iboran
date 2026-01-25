import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'AIP 企业智能体应用平台 | YonGPT / RAG / Agent',
  description: 'AIP（Enterprise Self-built Intelligent Applications）是 YonBIP & YonSuite 的企业智能体应用平台，支持 YonGPT 构建、RAG 知识库与智能 Agent 落地。',
  keywords: ['AIP', '智能化应用', 'YonGPT', 'RAG', '智能助手', 'Agent', '用友BIP', '泊冉软件'],
  openGraph: {
    title: 'AIP 企业智能体应用平台',
    description: '赋能企业快速构建、部署和管理数智化应用，将 AI 深度嵌入业务流程。',
  },
}

export default function AIPSolutionPage() {
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
        url="https://www.iboran.com/solution/business/aip-intelligent-apps"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
