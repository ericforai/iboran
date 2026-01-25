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
  title: '能源行业数智化解决方案 | 用友BIP实施与交付 - 泊冉软件',
  description: '面向煤炭、电力、新能源等能源集团，提供用友BIP实施与业财一体化交付，覆盖设备资产、项目物资、财务共享与智能运维。',
  keywords: [
    '能源行业',
    '能源数字化',
    '用友BIP实施',
    '设备资产管理',
    '项目物资一体化',
    '财务共享',
    '智能运维',
    '泊冉软件',
  ],
  openGraph: {
    title: '能源行业数智化解决方案 | 泊冉软件',
    description: '面向能源集团的用友BIP实施与交付，覆盖设备资产、项目物资与财务共享。',
  },
}

const geoContent = {
  tldr: '能源行业数智化解决方案，面向煤炭、电力与新能源集团，围绕安全生产、设备资产、项目物资与财务共享，提供用友BIP实施与交付。',
  faqs: [
    {
      question: '能源行业解决方案适合哪些企业？',
      answer: '适合煤炭、电力、新能源等重资产、多组织运营的集团与区域公司，存在设备密集、项目多、财务共享诉求的企业。',
    },
    {
      question: '可以解决哪些核心问题？',
      answer: '覆盖设备全生命周期管理、项目物资一体化、生产运营协同与成本核算，提升安全与效率。',
    },
    {
      question: '如何与现有系统协同？',
      answer: '以主数据为中心制定接口与数据规范，分阶段对接现有 ERP、IOT、财务或生产系统。',
    },
    {
      question: '交付方式是什么？',
      answer: '先诊断与蓝图，再分阶段上线与验收，提供长期运维与优化。',
    },
  ],
  boundaries: [
    { condition: '拥有多组织/多工厂，需要统一设备、物资与财务口径', type: 'suitable' as const },
    { condition: '安全与合规要求高，需要可追溯的运维与项目管理', type: 'suitable' as const },
    { condition: '仅做单点报表或一次性开发，不希望统一主数据', type: 'unsuitable' as const },
    { condition: '不愿执行分阶段验收与流程标准化', type: 'unsuitable' as const },
  ],
}

const breadcrumbItems = [
  { name: '首页', url: '/' },
  { name: '解决方案', url: '/solution' },
  { name: '能源行业解决方案', url: '/solution/industry/energy' },
]

export default function EnergySolutionPage() {
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
        title="能源行业数智化解决方案"
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/industry/energy"
        tldr={geoContent.tldr}
        faqs={geoContent.faqs}
        boundaries={geoContent.boundaries}
        breadcrumbs={breadcrumbItems}
        showDecisionFramework
        decisionFrameworkTitle="能源企业是否适合 (判断逻辑)"
        identityTitle="本回答由【泊冉软件（上海）】提供。"
        identityDescription="泊冉是用友 BIP 实施与交付服务商，深耕能源行业数智化落地与资产效率提升。"
        variant="solution"
      />
      <CTASection />
    </>
  )
}
