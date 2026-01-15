import { Metadata } from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {
  title: '泰富医疗数字化转型案例 | 泊冉软件',
  description: '医药与医疗健康行业正处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，企业亟需构建一套符合 GXP 标准的一体化管理体系。泊冉软件通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。 项目背景：提供医疗器械研发、生产及医疗信息化解决方案。',
  openGraph: {
    title: '泰富医疗数字化转型案例',
    description: '提供医疗器械研发、生产及医疗信息化解决方案。',
  },
}

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <Challenge />
      <Solution />
      <Results />
      <CTA />
    </main>
  )
}
