import type { Metadata } from 'next'
import { SeoH1 } from '@/components/SeoH1'
import { GeoSection } from '@/components/GeoSection'
import Hero from './Hero'
import PainPoints from './PainPoints'
import Features from './Features'
import HowItWorks from './HowItWorks'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '司库19张报表建设方案 | 国资委监管合规与数字化转型 | 泊冉软件',
  description:
    '为集团企业提供专业的司库19张监管报表建设方案。依托“总账-台账-系统”分步路径，快速补齐业务口径，实现国资委监管数据自动化报送与资金全生命周期穿透管理。',
  keywords: [
    '司库19张报表',
    '国资委司库监管',
    '司库建设方案',
    '资金管理系统',
    '19张报表清单',
    '用友司库实施',
    '集团资金集中',
    '财务公司系统'
  ],
  alternates: {
    canonical: 'https://www.iboran.com/solution/siku-19-reports',
  },
  openGraph: {
    title: '司库19张报表建设方案 - 泊冉软件',
    description: '快速满足监管报送，实现资金实时监控。',
  },
}

export default function Siku19ReportsPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />
      
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <ValueSection />
      <CTASection />

      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/siku-19-reports"
        variant="solution"
        faqs={[
          {
            question: '19张报表建设中，数据源头如何保证准确？',
            answer: '方案通过总账直接取数保证财务一致性，配合业务台账补录维度，通过系统逻辑验证确保监管报送数据账表相符。'
          },
          {
            question: '如何解决业务口径缺失（如金融衍生品）的问题？',
            answer: '针对ERP总账中缺失的业务标签，系统提供轻量化台账工具，支持业务部门手工补录或Excel快速导入，自动映射至监管科目。'
          },
          {
            question: '建设周期通常需要多久？',
            answer: '依托现有的ERP总账基础，首月即可完成核心报表查数，3个月内实现重点台账流程上线。'
          }
        ]}
        boundaries={[
          { condition: '集团总部需要快速应对国资委1号文监管报送要求', type: 'suitable' },
          { condition: '已具备基本财务核算体系，但缺少司库口径描述', type: 'suitable' },
          { condition: '仅需单张报表临时导出，不考虑系统化管理', type: 'unsuitable' },
          { condition: '不愿对现有财务核算科目进行微调适配', type: 'unsuitable' }
        ]}
      />
    </>
  )
}
