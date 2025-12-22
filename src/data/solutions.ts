import {
  TrendingUp,
  Wallet,
  Package,
  FlaskConical,
  Factory,
  Wrench,
  Calculator,
  FileSpreadsheet,
  Bot,
  Link2,
  Users,
  Blocks,
  Cpu,
  Pill,
  Car,
  ShoppingBag,
  Code2,
  Database,
  HardHat,
  UserCircle,
  Landmark,
  Atom,
  Zap,
  Globe,
  type LucideIcon,
} from 'lucide-react'

// 业务解决方案类型
export interface BusinessSolutionItem {
  label: string
  href: string
  desc: string
  icon: LucideIcon
}

export interface BusinessCategory {
  name: string
  items: BusinessSolutionItem[]
}

// 行业解决方案类型
export interface IndustryCategory {
  name: string
  icon: LucideIcon
  href: string
  desc: string
}

// 解决方案分类（按业务领域）
export const solutionByBusiness: BusinessCategory[] = [
  {
    name: '销售与收款',
    items: [
      { label: 'L2C 销售到收款', href: '/solution/business/lead-to-cash', desc: '线索多、转化低、回款慢？从销售到收款的全流程闭环', icon: TrendingUp },
      { label: '营收云', href: '/solution/business/revenue-cloud', desc: '业绩不差，但钱回得慢？销售到收款的经营可视化', icon: Wallet },
    ]
  },
  {
    name: '采购与供应链',
    items: [
      { label: 'S2P 采购到付款', href: '/solution/business/s2p', desc: '供应商多、管控难、合规风险高？采购到付款的全流程管控', icon: Package },
    ]
  },
  {
    name: '研发与制造',
    items: [
      { label: 'PLM 研发云', href: '/solution/business/plm', desc: '研发周期长、协同难、市场响应慢？加速产品创新的研发管理', icon: FlaskConical },
      { label: 'P2M 制造全生命周期', href: '/solution/business/p2m', desc: '计划常变、现场失控、成本不准？生产全过程透明可控', icon: Factory },
      { label: 'MES 生产管理', href: '/solution/business/mes', desc: '排产靠经验，问题靠追人？让生产进度与质量实时可见', icon: Wrench },
    ]
  },
  {
    name: '财务与资金',
    items: [
      { label: '财务云', href: '/solution/business/finance-cloud', desc: '多组织、对账难、报表慢？业财一体的集团财务管控', icon: Calculator },
      { label: 'R2R 核算到报告', href: '/solution/business/r2r', desc: '账算得清，但看不懂业务？让财务真正参与经营决策', icon: FileSpreadsheet },
      { label: 'TRM 资金管理', href: '/solution/business/trm', desc: '资金分散、调度难、风险盲区多？资金可视化与精准管控', icon: Landmark },
    ]
  },
  {
    name: '人力与资产',
    items: [
      { label: 'HRM 人力资源', href: '/solution/business/hrm', desc: '人不少，但效率看不清？组织、人效、成本一体管理', icon: UserCircle },
      { label: 'EAM 资产管理', href: '/solution/business/eam', desc: '资产多、台账乱、利用率低？从采购到退役的全生命周期管理', icon: HardHat },
    ]
  },
  {
    name: '智能平台',
    items: [
      { label: 'AIP 智能化应用', href: '/solution/business/aip-intelligent-apps', desc: '想用AI但不知从何下手？YonGPT 智能体快速落地', icon: Bot },
      { label: '企业集成平台', href: '/solution/business/enterprise-integration', desc: '系统孤岛多、数据不互通？让业务连接更简单', icon: Link2 },
      { label: 'EOC 数智化协作', href: '/solution/business/eoc-collaboration', desc: '信息散乱、协作低效、事事靠人？AI 驱动的组织效能提升', icon: Users },
      { label: '数字化建模', href: '/solution/business/digital-modeling', desc: '需求变化快、开发跟不上？快速构建企业专属应用', icon: Blocks },
      { label: 'CTP 技术平台', href: '/solution/business/ctp', desc: '技术栈老旧、扩展困难？云原生技术底座支撑转型', icon: Cpu },
      { label: 'DEV 开发平台', href: '/solution/business/dev', desc: '开发周期长、维护成本高？低代码快速构建业务应用', icon: Code2 },
      { label: 'DMP 数据平台', href: '/solution/business/dmp', desc: '数据分散、分析困难、决策靠感觉？数据驱动经营决策', icon: Database },
    ]
  },
]

// 解决方案分类（按行业） - 链接到 CMS 管理的行业解决方案
export const solutionByIndustry: IndustryCategory[] = [

  {
    name: '芯片半导体',
    icon: Cpu,
    href: '/solution/industry/semiconductor',
    desc: '智造芯未来 · CIM赋能12寸量产线Auto3全自动化转型',
  },
  {
    name: '医药健康',
    icon: Pill,
    href: '/solution/industry/biopharmaceutical',
    desc: '数智赋能CDMO研产一体化 · 项目管控 · 质量合规',
  },
  {
    name: '新材料',
    icon: Atom,
    href: '/solution/industry/new-materials',
    desc: '数智驱动负极材料企业IPO合规与精益制造',
  },
  {
    name: '能源行业',
    icon: Zap,
    href: '/solution/industry/energy',
    desc: '数智驱动能源企业高质量发展 · 智能生产 · 设备全生命周期',
  },
  {
    name: '电气装备',
    icon: Zap,
    href: '/solution/industry/electrical-equipment',
    desc: '智能制造驱动电气装备企业数字化转型 · 项目型生产 · 成本精准',
  },
  {
    name: '汽车行业',
    icon: Car,
    href: '/solution',
    desc: '多层级供应链下的协同管控 · 质量追溯 · 成本透明',
  },
  {
    name: '消费品',
    icon: ShoppingBag,
    href: '/solution',
    desc: '多渠道、快周转场景下的精细化运营与动态库存管理',
  },
  {
    name: '中企出海',
    icon: Globe,
    href: '/solution/business/global-operations',
    desc: 'YonBIP助力全球化经营·多语多币多时区统一管理',
  },
  {
    name: '基础化工',
    icon: FlaskConical,
    href: '/solution/industry/basic-chemicals',
    desc: '绿色·高端·智能 驱动化工行业数智化转型升级',
  },
]

// 扁平化所有业务解决方案用于其他场景
export const allBusinessSolutions = solutionByBusiness.flatMap(cat => cat.items)