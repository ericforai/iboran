import { Metadata } from 'next'
import Hero from './Hero'
import PainPoints from './PainPoints'
import FeatureHub from './FeatureHub'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '数字化建模解决方案 | 泊冉软件',
  description: '用友BIP & YonSuite 数字化建模（APP），企业数智化创新加速器。建立先进、统一、灵活 de 数智化资产模型，助力企业打破边界，加速创新。',
  keywords: ['数字化建模', 'YonBIP', 'YonSuite', '数智底座', '组织建模', '主数据管理', '泊冉软件', '用友'],
  openGraph: {
    title: '数字化建模解决方案 - 企业数智化创新加速器',
    description: '通过建立统一的数智化资产模型，帮助企业实现多维组织、智能流程与统一主数据的数字化转型。',
  },
}

export default function DigitalModelingPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <PainPoints />
      <FeatureHub />
      <ValueSection />
      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/business/digital-modeling"
        variant="solution"
        showDecisionFramework
      />
      <CTASection />
    </>
  )
}
