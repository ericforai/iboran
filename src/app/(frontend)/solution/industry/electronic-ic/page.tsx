import { Metadata } from 'next'
import { Cpu, Settings, Network, Search, BarChart3, Layers, Database, TrendingUp, ShieldCheck, Zap } from 'lucide-react'
import Hero from './Hero'
import IndustryChallenges from './IndustryChallenges'
import SolutionOverview from './SolutionOverview'
import KeyScenarios from './KeyScenarios'
import IndustryCases from './IndustryCases'
import ValueSection from './ValueSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: '芯片半导体/电子IC行业解决方案 - 数字化转型 | 泊冉软件',
  description: '泊冉软件为电子IC行业提供一站式数字化解决方案，针对Fabless、IDM模式提供研发、委外、供应链一体化服务，实现批号追溯与精细化成本管控。',
  keywords: [
    '芯片半导体', 
    '电子IC', 
    'Fabless',
    '半导体数字化',
    '芯片委外管理',
    '泊冉软件', 
    '用友'
  ],
}

export default function ElectronicICPage() {
  const industryName = '电子IC'

  const challenges = [
    {
      icon: Settings,
      title: '研发协同与版本管理',
      description: 'IP选用验证复杂，研发经验难以系统化，ECR（工程变更）频繁，导致设计与生产脱节。',
      dataPoint: '研发投入占营收比重高达20%+'
    },
    {
      icon: Network,
      title: '复杂委外供应链协同',
      description: '高度依赖Foundry与封装厂，制程中拆批、并批频繁，WIP（在制品）透明度底。',
      dataPoint: '生产周期变动率可达30%'
    },
    {
      icon: Search,
      title: '全生命周期追溯要求',
      description: '需从Wafer到成品实现Lot Tracking、刻号管理及BIN良率分析，合规压力大。',
      dataPoint: '99.9%的批号追溯准确率要求'
    },
    {
      icon: BarChart3,
      title: '精细化成本与良率核算',
      description: '需核算出每一批、每一个Die的单位成本。由于良率波动，成本结算滞后且不准。',
      dataPoint: '良率波动直接影响毛利5-10%'
    }
  ]

  const solutionOverview = {
    description: '泊冉软件基于用友BIP超级版，为电子IC行业构建“研供产销服”一体化平台。针对Fabless模式，重点强化委外协同与批号追踪；针对IDM模式，强化生产执行与良率分析，帮助企业实现从实验室研发到规模化量产的全过程数智化。',
    coreProducts: [
      { name: '智石开 PLM', role: '研发项目时程与版本管控' },
      { name: 'BIP 供应链云', role: '全场景委外协同与计划编排' },
      { name: '制造云 (WIP)', role: 'LOT/刻号追踪与工装治具管理' },
      { name: '财务/成本中心', role: '订单级精细成本与差异分析' }
    ]
  }

  const scenarios = [
    {
      title: 'Fabless 全程委外协同',
      icon: Network,
      problem: 'Fabless企业对Foundry/封测厂的WIP状态掌握不及时，回货拆批、并批及良率数据全凭线下Excel，极易出错。',
      solution: '建立委外服务门户，实时对接委外厂商数据，支持在线下达Turnkey指令，自动生成批号继承关系。',
      outcome: 'WIP数据同步频率从“按周”提升至“准实时”。委外结算准确率提升至100%。多级委外节点全程可视。'
    },
    {
      title: '端到端批号/刻号追溯',
      icon: Search,
      problem: '从Wafer到CP、AS、FT各个阶段，批号、片号、管脚排列等属性众多，任何环节断档都将导致无法溯源。',
      solution: '支持一品多属性管理，自动记录Wafer批号继承CP、AS、FT批号的过程，实现“一码到底”的全程数字化档案。',
      outcome: '异常召回定位耗时从“天级”缩短至“分钟级”。满足最严苛的汽车、军工级合规要求。'
    },
    {
      title: '芯片/晶圆多维度物料管理',
      icon: Layers,
      problem: '同一料号下存在不同的BIN等级、DateCode。由于缺乏辅助属性，往往需要建立海量料号，维护成本极高。',
      solution: '采用“料号+辅助属性”模式，动态管理BIN等级、Wafer等级及存储有效期，智能匹配客户订单规格要求。',
      outcome: '物料编码维护量降低70%。库存周转率提升15%。极大地减少选配出货的差错率。'
    }
  ]

  const cases = [
    {
      company: '长晶科技',
      industry: '半导体设计与销售',
      scale: '上市公司/知名分立器件供应商',
      challenge: '专业分包工序多，变化快，总部与分子公司协同压力大，亟需精细化成本核算。',
      solution: '通过BIP超级版实现集团化管控，打通长晶到浦联的协同流程，实现PDA扫码入库与生产现场MES链接。',
      result: '全流程打通实现“内链接、外协同”，大幅提升了委外采购效率与入库精度。',
      quote: '用友BIP帮助我们实现了从长晶到代工厂的深度业务整合。'
    },
    {
      company: '奥拉半导体',
      industry: '无晶圆厂（Fabless）',
      scale: '跨国模拟/混合信号集成电路供应商',
      challenge: '全球多研发中心，信息孤岛严重，且原系统无法支撑跨组织交易与复杂委外核销。',
      solution: '构建全球管控一体化平台，规范数据标准，打通研产供销闭环，引入订单级精细成本核算。',
      result: '业务财务一体化，加强了财务与业务一致性，实现了全球范围内的精细化管控。',
      quote: '数字化的核心不仅是流程，更是数据的标准化与实时性。'
    }
  ]

  const metrics = [
    {
      icon: TrendingUp,
      value: '25%+',
      label: '成本结算效率提升',
      description: '通过智能模拟与自动结算引擎，实现快速准确的良品单位成本核算。'
    },
    {
      icon: Zap,
      value: '40%',
      label: '供应链协同提效',
      description: '打通外部Foundry/封测厂协作节点，缩短订单周期与沟通成本。'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: '合规追溯准确率',
      description: '从晶圆刻号到成品Reel号的全程链路锁定，确保每一颗芯片可溯源。'
    }
  ]

  return (
    <main className="min-h-screen">
      <Hero 
        industryName={industryName}
        tagline="智慧芯片，数智链动未来"
        description="针对Fabless、IDM等不同经营模式，提供涵盖研发管理、委外协同、批号追溯及精细化成本核算的电子IC行业全生命周期数字化解决方案。"
      />
      
      <IndustryChallenges 
        industryName={industryName}
        challenges={challenges}
      />
      
      <SolutionOverview 
        description={solutionOverview.description}
        coreProducts={solutionOverview.coreProducts}
      />
      
      <KeyScenarios 
        scenarios={scenarios}
      />
      
      <IndustryCases 
        cases={cases}
      />
      
      <ValueSection 
        metrics={metrics}
      />
      
      <CTASection />
    </main>
  )
}
