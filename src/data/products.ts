import {
  Layers,
  Database,
  Users,
  FileText,
  Settings,
  Share2,
  BarChart3,
  Cloud,
  Workflow,
  Box,
  CreditCard,
  Network,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

export interface ProductItem {
  label: string
  href: string
  desc: string
  icon: LucideIcon
}

export interface ProductCategory {
  name: string
  description: string
  items: ProductItem[]
}

export const productCategories: ProductCategory[] = [
  {
    name: 'ERP 与业务系统',
    description: '平台型能力 · 企业核心业务底座',
    items: [
      { 
        label: '用友 BIP', 
        href: '/products/bip', 
        desc: '全球领先的企业软件与智能服务平台', 
        icon: Sparkles 
      },
      { 
        label: '用友 YonSuite', 
        href: '/products/yonsuite', 
        desc: '成长型企业商业创新平台，全场景 SaaS 服务', 
        icon: Cloud 
      },
      { 
        label: '用友 U8 / U9 / NC', 
        href: '/products/erp', 
        desc: '经典 ERP 解决方案，覆盖财务、供应链、制造', 
        icon: Layers 
      },
      { 
        label: '财务与供应链', 
        href: '/products/finance-supply-chain', 
        desc: '业财一体化，精细化成本管控与高效协同', 
        icon: CreditCard 
      },
      { 
        label: '智能制造', 
        href: '/products/intelligent-manufacturing', 
        desc: 'PLM / MES / AIoT，打造透明化数字工厂', 
        icon: Box 
      },
    ]
  },
  {
    name: '协同与流程平台',
    description: '组织与流程能力 · 落地执行',
    items: [
      { 
        label: '协同办公 (致远/钉钉)', 
        href: '/products/collaboration', 
        desc: '统一门户、移动办公，提升组织协同效率', 
        icon: Users 
      },
      { 
        label: 'BPM 流程引擎', 
        href: '/products/workflow', 
        desc: '灵活配置企业业务流程，实现端到端闭环', 
        icon: Workflow 
      },
      { 
        label: '费控与商旅', 
        href: '/products/expense', 
        desc: '全流程费用管控，合规透明，降本增效', 
        icon: FileText 
      },
      { 
        label: '项目协同管理', 
        href: '/products/project-collaboration', 
        desc: '项目全生命周期管理，进度、成本实时可视', 
        icon: Share2 
      },
    ]
  },
  {
    name: '数据与集成平台',
    description: '数据驱动 · 连接与智能',
    items: [
      { 
        label: '主数据治理', 
        href: '/products/mdm', 
        desc: '建立统一数据标准，保障数据一致性与准确性', 
        icon: Database 
      },
      { 
        label: '系统集成平台 (iPaaS)', 
        href: '/products/ipaas', 
        desc: '连接异构系统，打破信息孤岛，实现业务通畅', 
        icon: Network 
      },
      { 
        label: 'BI 与数据中台', 
        href: '/products/bi-data', 
        desc: '数据可视化分析，辅助管理层科学决策', 
        icon: BarChart3 
      },
      { 
        label: 'API 与数据同步', 
        href: '/products/api-gateway', 
        desc: '构建企业级 API 资产能力，高效数据交换', 
        icon: Settings 
      },
    ]
  }
]
