import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import CustomerSuccess from './CustomerSuccess'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

const name = '合并报表管理'
const description = '面向全球化集团的数智化合并解决方案，实现多准则一键转换、自动化权益抵销，将合并周期从周缩短至天。'

export const metadata: Metadata = {
  title: `${name}解决方案 | 泊冉软件`,
  description: description,
  keywords: [name, '合并报表', '集团管控', '一键出表', '国资监管报送', '用友', '泊冉软件'],
  openGraph: {
    title: `${name}解决方案`,
    description: description,
  },
}

export default function ConsolidatedStatementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <ValueSection />
      <CustomerSuccess />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/consolidated-statements"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
