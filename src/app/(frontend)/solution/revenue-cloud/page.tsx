import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import FeatureHub from './FeatureHub'
import DetailModel from './DetailModel'
import RollingDiff from './RollingDiff'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '营收云解决方案 | 泊冉软件',
  description: '用友BIP营收云8.0，AI智能对账，明细级对账模型+滚动式差异处理，99.9%准确率，全球业务支持',
  keywords: ['营收云', '智能对账', 'AI对账', '用友BIP', '泊冉软件', '收入管理'],
  openGraph: {
    title: '营收云解决方案 - AI智能对账',
    description: '从大海捞针到精准穿透，消灭人工对账的繁琐与误差',
  },
}

export default function RevenueCloudPage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <FeatureHub />
      <DetailModel />
      <RollingDiff />
      <ValueSection />
      <CTASection />
    </>
  )
}
