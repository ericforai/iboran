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
      { label: 'L2C 销售到收款', href: '/solution/lead-to-cash', desc: '从线索到收款闭环', icon: TrendingUp },
      { label: '营收云', href: '/solution/revenue-cloud', desc: 'AI 智能对账', icon: Wallet },
    ]
  },
  {
    name: '采购与供应链',
    items: [
      { label: 'S2P 采购到付款', href: '/solution/s2p', desc: '从需求采购到付款全流程', icon: Package },
    ]
  },
  {
    name: '研发与制造',
    items: [
      { label: 'PLM 研发云', href: '/solution/plm', desc: '驱动产品创新', icon: FlaskConical },
      { label: 'P2M 制造全生命周期', href: '/solution/p2m', desc: '从计划、生产到成本', icon: Factory },
      { label: 'MES 生产管理', href: '/solution/mes', desc: '智能制造', icon: Wrench },
    ]
  },
  {
    name: '财务管理',
    items: [
      { label: '财务云', href: '/solution/finance-cloud', desc: '业财一体化', icon: Calculator },
      { label: 'R2R 核算到报告', href: '/solution/r2r', desc: '从核算到报告全流程', icon: FileSpreadsheet },
    ]
  },
  {
    name: '智能平台',
    items: [
      { label: 'AIP 智能化应用', href: '/solution/aip-intelligent-apps', desc: 'YonGPT 与智能 Agent', icon: Bot },
      { label: '企业集成平台', href: '/solution/enterprise-integration', desc: 'LINK：让商业连接更容易', icon: Link2 },
      { label: 'EOC 数智化协作', href: '/solution/eoc-collaboration', desc: 'AI 驱动的效能革命', icon: Users },
      { label: '数字化建模', href: '/solution/digital-modeling', desc: '企业数智化创新加速器', icon: Blocks },
      { label: 'CTP 技术平台', href: '/solution/ctp', desc: '云原生技术底座', icon: Cpu },
    ]
  },
]

// 解决方案分类（按行业） - 链接到 CMS 管理的行业解决方案
export const solutionByIndustry: IndustryCategory[] = [
  {
    name: '制造业',
    icon: Factory,
    href: '/solutions',
    desc: '智能制造、生产管理、供应链协同',
  },
  {
    name: '高科技',
    icon: Cpu,
    href: '/solutions',
    desc: '研发创新、敏捷开发、数字化转型',
  },
  {
    name: '医药健康',
    icon: Pill,
    href: '/solutions',
    desc: '合规管理、研发追溯、业财一体',
  },
  {
    name: '汽车行业',
    icon: Car,
    href: '/solutions',
    desc: '供应链协同、质量追溯、成本管控',
  },
  {
    name: '消费品',
    icon: ShoppingBag,
    href: '/solutions',
    desc: '渠道管理、营销数智化、库存优化',
  },
]

// 扁平化所有业务解决方案用于其他场景
export const allBusinessSolutions = solutionByBusiness.flatMap(cat => cat.items)
