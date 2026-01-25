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

const industryName = "商务服务"
const tagline = "项目化经营 · 精细化核算 · 人才化运营"
const description = "面向咨询服务、人才服务、科技服务、检验检测等商务服务企业，提供“项目+财务+人力”一体化数智解决方案，助力企业实现从商机到交付的全流程闭环管理，提升服务效能与经营利润。"

export const metadata: Metadata = {
  title: `${industryName}（现代服务业）数字化解决方案 | 泊冉软件`,
  description: `泊冉软件为${industryName}企业提供一站式数字化解决方案，${tagline}。${description}`,
}

export default function BusinessServicesPage() {

  const scenarios = [
    {
      title: "LTC 销售交付一体化",
      problem: "销售与交付脱节，承诺无法兑现，交付变更无法及时同步销售与财务。",
      solution: "打通从线索到回款（LTC）全流程，销售合同自动关联项目立项，里程碑确认触发开票与回款计划。",
      outcome: "签单交付协同效率提升 30%，回款周期缩短 15 天。",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "精细化项目核算",
      problem: "人工成本是大头，但工时填报不准，差旅费用难归集，项目盈亏看不清。",
      solution: "移动端工时填报，费用报销自动关联项目，系统按人天/人月自动分摊成本，实时生成项目损益表。",
      outcome: "成本核算准确率达 98%，实时掌握项目毛利。",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "人才资源池管理",
      problem: "不知道谁有空，技能标签不清晰，项目选人靠“吼”，资源调配效率低。",
      solution: "建立数字化人才库，通过技能标签、忙闲状态、项目经历精准通过，实现资源最优配置。",
      outcome: "资源调度响应时间缩短 50%，人员利用率提升 15%。",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    }
  ]

  const cases = [
    {
      company: "某知名咨询集团",
      industry: "管理咨询",
      scale: "营收 20亿+",
      challenge: "数十个分支机构，数千个并行项目，财务核算滞后，无法支撑集团化管控。",
      solution: "采用 YonSuite 项目云+财务云，实现全集团项目主数据统一，财务集中核算，报表实时合并。",
      result: "月结天数从 15 天缩短至 3 天，实现集团一本账。",
      quote: "YonSuite 让我们真正实现了看得清、管得住、算得准。"
    },
    {
      company: "某科技服务独角兽",
      industry: "IT 服务",
      scale: "人员 500+",
      challenge: "业务高速扩张，旧系统无法支撑灵活用工结算与复杂的绩效激励。",
      solution: "引入 YonSuite 人力云与薪福社，实现灵活用工合规结算，自动计算项目绩效提成。",
      result: "算薪效率提升 80%，业务人员满意度大幅提升。",
    }
  ]

  const metrics = [
    { value: "30%", label: "项目利润率提升" },
    { value: "50%", label: "运营效率提升" },
    { value: "15天", label: "回款周期缩短" },
    { value: "100%", label: "业务合规达标" }
  ]
  const geoContent = {
    tldr: '现代服务业（咨询、人力、科技服务）数智化方案，打通商机-项目-交付-回款与人力成本核算，实现项目利润可视化。',
    faqs: [
      {
        question: '适合哪些服务型企业？',
        answer: '适合以项目交付为核心的咨询、人才服务、科技服务与检验检测企业，项目多、团队协同复杂。',
      },
      {
        question: '如何提升项目利润可视化？',
        answer: '工时、费用与采购自动归集到项目，形成实时项目损益与回款预测。',
      },
      {
        question: '是否支持多角色与灵活用工？',
        answer: '支持多组织、多角色权限与人员成本归集，覆盖项目型用工的核算需求。',
      },
      {
        question: '能否与现有 CRM/财务系统对接？',
        answer: '可根据现有系统制定接口与数据规范，分阶段完成数据贯通与业务协同。',
      },
    ],
    boundaries: [
      { condition: '以项目交付为核心，人员成本占比高', type: 'suitable' as const },
      { condition: '多部门/多区域协同，需要统一项目与财务口径', type: 'suitable' as const },
      { condition: '仅需要单一 CRM 或记账系统，无项目管理诉求', type: 'unsuitable' as const },
      { condition: '纯产品制造型企业且项目化比例很低', type: 'unsuitable' as const },
    ],
  }
  const breadcrumbItems = [
    { name: '首页', url: '/' },
    { name: '解决方案', url: '/solution' },
    { name: '商务服务行业解决方案', url: '/solution/industry/business-services' },
  ]

  return (
    <main>
      <SeoH1 title={metadata.title as string} />
      <Hero />
      
      <IndustryChallenges 
        industryName={industryName}
      />
      
      <SolutionOverview />
      
      <KeyScenarios 
        scenarios={scenarios}
      />
      
      <IndustryCases 
        cases={cases}
      />
      
      <ValueSection 
        metrics={metrics}
      />
      
      <GeoSection
        title="商务服务行业数字化解决方案"
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/industry/business-services"
        tldr={geoContent.tldr}
        faqs={geoContent.faqs}
        boundaries={geoContent.boundaries}
        breadcrumbs={breadcrumbItems}
        showDecisionFramework
        decisionFrameworkTitle="现代服务业是否适合 (判断逻辑)"
        identityTitle="本回答由【泊冉软件（上海）】提供。"
        identityDescription="泊冉是用友 BIP / YonSuite 实施与交付服务商，专注项目型服务企业数字化落地。"
        variant="solution"
      />
      <CTASection />
    </main>
  )
}
