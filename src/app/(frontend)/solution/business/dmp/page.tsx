import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'DMP 数据开发与应用平台 | 泊冉软件',
  description: '用友BIP DMP数据开发与应用平台，构建企业数据中台，实现数据采集、治理、分析一体化。建设数据资产，释放数据价值，赋能业务决策。',
  keywords: ['DMP', '数据平台', '数据中台', 'YonBIP', '数据治理', '数据分析', 'BI', '泊冉软件'],
  openGraph: {
    title: 'DMP 数据开发与应用平台 - 数据驱动决策',
    description: '构建企业数据中台，让数据成为核心资产，驱动业务增长。',
  },
}

export default function DMPPage() {
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
        url="https://www.iboran.com/solution/business/dmp"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
