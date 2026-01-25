import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'P2M 制造全生命周期解决方案 | 泊冉软件',
  description: '用友BIP & YonSuite 制造解决方案，从计划、生产到成本，助力企业实现智造升级。涵盖S&OP、LRP、智能工厂、C2M个性化定制等核心场景。',
  keywords: ['P2M', '制造解决方案', '生产管理', '智能工厂', '用友BIP', 'YonSuite', '泊冉软件', '成本核算', '生产计划'],
  openGraph: {
    title: 'P2M 制造全生命周期解决方案 - 助力企业智造升级',
    description: '打通从研发、计划、生产到成本的全流程，实现柔性制造与精益生产。',
  },
}

export default function P2MPage() {
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
        url="https://www.iboran.com/solution/business/p2m"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
