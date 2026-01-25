import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: 'MES 生产执行系统解决方案 | 泊冉软件',
  description: '连接计划与现场，实时采集设备、物料与人员数据，实现生产过程的全透明、可追溯与即时调度。',
  keywords: ['MES', '生产执行系统', '智能车间', '质量追溯', '生产报工', '用友BIP', 'YonSuite', '泊冉软件', 'OEE'],
  openGraph: {
    title: 'MES 生产执行系统 - 打造透明化智能车间',
    description: '连接ERP与生产现场的数字桥梁，实现生产全过程的可视化管理。',
  },
}

export default function MESPage() {
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
        url="https://www.iboran.com/solution/business/mes"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
