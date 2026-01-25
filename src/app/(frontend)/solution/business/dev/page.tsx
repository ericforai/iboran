import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'DEV 开发平台 | 泊冉软件',
  description: '用友BIP DEV开发平台，提供低代码、零代码开发能力，支持快速应用搭建与业务创新。可视化开发、拖拽配置，让业务人员也能快速开发应用。',
  keywords: ['DEV', '开发平台', 'YonBIP', '低代码', '零代码', '可视化开发', '应用开发', '泊冉软件'],
  openGraph: {
    title: 'DEV 开发平台 - 低代码敏捷开发',
    description: '让开发更简单，让创新更快速。低代码平台助力企业快速响应业务需求。',
  },
}

export default function DEVPage() {
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
        url="https://www.iboran.com/solution/business/dev"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
