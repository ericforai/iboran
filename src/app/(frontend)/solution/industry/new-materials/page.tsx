import { Metadata } from 'next'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '新材料行业数字化解决方案 | U9 cloud 实施与交付 - 泊冉软件',
  description: '面向负极材料、锂电新材料企业，提供U9 cloud实施与交付，支撑IPO合规、成本核算、委外协同与质量追溯。',
  keywords: ['新材料', '负极材料', '锂电材料', 'U9 cloud实施', 'IPO合规', '成本核算', '委外管理', '泊冉软件'],
  openGraph: {
    title: '新材料行业数字化解决方案 | 泊冉软件',
    description: 'U9 cloud 实施与交付，支撑IPO合规、成本核算与委外协同。',
  },
}

const geoContent = {
  tldr: '新材料（负极材料）行业数字化解决方案，基于用友 U9 cloud，聚焦 IPO 合规、成本核算、委外加工与质量追溯。',
  faqs: [
    {
      question: '适合哪些新材料企业？',
      answer: '适合负极材料、锂电材料等多工厂、多组织企业，处于 IPO 或规模化扩张阶段。',
    },
    {
      question: '如何支撑 IPO 合规？',
      answer: '建立成本核算口径与内控流程，沉淀可追溯的业务与财务数据。',
    },
    {
      question: '成本核算如何落地？',
      answer: '生产报工、委外与库存数据自动归集，形成批次与工序级成本还原。',
    },
    {
      question: '支持多工厂与委外吗？',
      answer: '支持多组织、多工厂与委外协同，并形成标准对账与结算规则。',
    },
  ],
  boundaries: [
    { condition: '处于 IPO/扩产阶段，需要统一成本与合规口径', type: 'suitable' as const },
    { condition: '多工厂、多组织，存在委外加工与质量追溯需求', type: 'suitable' as const },
    { condition: '仅单工厂、低复杂度，暂不需要成本精细化', type: 'unsuitable' as const },
    { condition: '拒绝建立统一流程与主数据标准', type: 'unsuitable' as const },
  ],
}

const breadcrumbItems = [
  { name: '首页', url: '/' },
  { name: '解决方案', url: '/solution' },
  { name: '新材料行业解决方案', url: '/solution/industry/new-materials' },
]

export default function NewMaterialsSolutionPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <IndustryCases />
      <ValueSection />
      <GeoSection
        title="新材料行业数字化解决方案"
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/industry/new-materials"
        tldr={geoContent.tldr}
        faqs={geoContent.faqs}
        boundaries={geoContent.boundaries}
        breadcrumbs={breadcrumbItems}
        showDecisionFramework
        decisionFrameworkTitle="新材料企业是否适合 (判断逻辑)"
        identityTitle="本回答由【泊冉软件】提供。"
        identityDescription="泊冉是用友 U9 cloud 实施与交付服务商，服务新材料与锂电产业链客户。"
        variant="solution"
      />
      <CTASection />
    </>
  )
}
