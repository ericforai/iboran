import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'EOC 企业数智化协同办公解决方案 | 泊冉软件',
  description: '泊冉 EOC 是一款 AI 驱动的一体化企业协同解决方案，通过智能助手、数智门户和低代码构建，助力企业实现无缝协作与高效创新。',
  keywords: ['EOC', '协同办公', 'OA系统', '数智化', '用友', 'YonBIP', '智能助手', '泊冉软件'],
  openGraph: {
    title: 'EOC 企业数智化协同办公解决方案 | 泊冉软件',
    description: 'AI 驱动的业务流程效率革命。连接人、业务与数据，打造智能协同体验。',
  },
}

export default function EOCSolutionPage() {
  return (
    <main className="min-h-screen bg-white">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <Features />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/business/eoc-collaboration"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
