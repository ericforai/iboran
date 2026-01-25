import { Metadata } from 'next'
import { Hero } from './Hero'
import { PainPoints } from './PainPoints'
import { Architecture } from './Architecture'
import { Features } from './Features'
import { CoreCapabilities } from './CoreCapabilities'
import { ValueSection } from './ValueSection'
import { CTASection } from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '主数据管理 MDM - 企业级主数据治理平台 | 用友 BIP',
  description: '用友 BIP 主数据管理 (MDM) 帮助企业建立统一的数据标准，打通数据孤岛，提升数据质量。实现主数据全生命周期管理，构建单一事实来源，赋能业务高效协同。',
  keywords: ['主数据管理', 'MDM', '数据治理', '数据标准', '主数据清洗', '用友BIP', '黄金数据', '数据血缘'],
  openGraph: {
    title: '主数据管理 MDM - 企业级主数据治理平台',
    description: '建立统一数据标准，打通数据孤岛，实现主数据全生命周期管理。',
  },
}

export default function MDMPage() {
  return (
    <main className="min-h-screen bg-white">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <Architecture />
      <Features />
      <CoreCapabilities />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/products/mdm"
        variant="product"
        showDecisionFramework
      />
      <CTASection />
    </main>
  )
}
