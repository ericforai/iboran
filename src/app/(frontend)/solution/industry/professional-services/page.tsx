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

const industryName = "专业服务"
const tagline = "财务人力一体 · 项目精细管控 · 销售全程闭环"
const description = "面向法律、会计、审计、税务、咨询、工程设计、人力资源、市场调查等专业服务机构，提供财务+人力+项目+CRM一体化数智解决方案，助力企业实现从商机到交付、从成本到利润的全流程精益管理。"

export const metadata: Metadata = {
  title: `${industryName}行业解决方案 - 数字化转型 | 泊冉软件`,
  description: `泊冉软件为${industryName}机构提供一站式数字化解决方案，${tagline}。${description}`,
}

export default function ProfessionalServicesPage() {

  const scenarios = [
    {
      title: "财务人力一体化",
      problem: "薪资核算后需手工导入财务系统做凭证，成本分摊靠 Excel，跨系统数据不一致。",
      solution: "人力云与财务云深度集成，薪资发放自动生成会计凭证，成本按项目/部门自动分摊，一键完成业财联动。",
      outcome: "财务处理效率提升 60%，人力成本节省 40%。",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "项目全生命周期管理",
      problem: "项目进度、收入、成本分散在不同系统，PMO无法一览项目全貌，盈亏状况模糊。",
      solution: "项目云提供统一工作台，从立项→进度→工时→收款→采购全维度可视化，实时掌握项目损益。",
      outcome: "项目毛利可视化 近100%，回款周期缩短 20 天。",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "LTC 销售交付闭环",
      problem: "销售签单后交付脱节，合同变更无法同步，回款计划与实际收款差距大。",
      solution: "打通 CRM 与项目云，商机转立项自动关联，里程碑完成触发开票计划，销售与交付高效协同。",
      outcome: "签单交付协同效率提升 30%，赢单率提升 15%。",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    }
  ]

  const cases = [
    {
      company: "容诚税务师事务所",
      industry: "税务服务",
      scale: "全国多分支机构",
      challenge: "本公司员工管理与薪酬核算复杂，服务甲方客户的员工管理及工资报表需求多样，财务处理效率低。",
      solution: "第一期上线核心人力（员工管理、薪资核算、多组织），第二期上线财务总账（固定资产、财务报表），实现人力财务一体化。",
      result: "员工自助服务上线，HR 事务工作减少 50%，财务处理效率提升 60%。",
      quote: "YonSuite 让我们真正实现了人力与财务的无缝衔接。"
    }
  ]

  const metrics = [
    { value: "60%", label: "财务处理效率提升" },
    { value: "40%", label: "人力事务成本节省" },
    { value: "近100%", label: "项目毛利可视化" },
    { value: "20天", label: "回款周期缩短" }
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
      
        title={metadata.title as string}
      
        description={metadata.description as string}
        keywords={metadata.keywords}
      
        url="https://www.iboran.com/solution/industry/professional-services"
      
        variant="solution"
      
        showDecisionFramework
      
      />
      
      <CTASection />
    </main>
  )
}
