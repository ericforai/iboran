import {
  Layers,
  Database,
  Users,
  FileText,

  Share2,
  BarChart3,
  Cloud,
  Workflow,
  Network,
  Sparkles,
  Layout,
  Code2,
  Bot,
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
        desc: '先进成熟的企业软件与智能服务平台', 
        icon: Sparkles 
      },
      { 
        label: '用友 YonSuite', 
        href: '/products/yonsuite', 
        desc: '成长型企业商业创新平台，全场景 SaaS 服务', 
        icon: Cloud 
      },
      { 
        label: '用友 U8/U9/NC 升迁', 
        href: '/solution/erp-migration', 
        desc: '原厂级运维保障 · 平滑升级 BIP · 激发数智新动能', 
        icon: Sparkles 
      },
    ]
  },
  {
    name: '协同与流程平台',
    description: '组织与流程能力 · 落地执行',
    items: [
      { 
        label: '协同办公', 
        href: '/products/collaborative-office', 
        desc: 'A8 数智化协同运营平台 (COP)', 
        icon: Users 
      },
      { 
        label: 'BPM 流程引擎', 
        href: '/products/bpm', 
        desc: '灵活配置企业业务流程，实现端到端闭环', 
        icon: Workflow 
      },
      { 
        label: '企业门户', 
        href: '/products/enterprise-portal', 
        desc: '企业统一的应用入口与价值聚合平台，实现业务一站式触达', 
        icon: Layout 
      },
      { 
        label: '项目协同管理', 
        href: '/products/project-collaboration', 
        desc: '项目全生命周期管理，实现进度、成本与资源实时可视', 
        icon: Share2 
      },
      { 
        label: '合同管理系统', 
        href: '/products/contract-management', 
        desc: '合同全生命周期数智化管理，规避风险提升效率', 
        icon: FileText 
      },
      { 
        label: '采购管理', 
        href: '/products/procurement-management', 
        desc: '数字化采购管理平台，实现从请购到支付的全流程闭环', 
        icon: Layers 
      },
    ]
  },
  {
    name: '数据与开发集成平台',
    description: '数据驱动 · 连接与智能 · 敏捷创新',
    items: [
      { 
        label: 'AI智能平台', 
        href: '/solution/business/aip-intelligent-apps', 
        desc: '想用AI但不知从何下手？YonGPT 智能体快速落地', 
        icon: Bot 
      },
      { 
        label: 'MDM主数据治理', 
        href: '/products/mdm', 
        desc: '建立统一数据标准，保障数据一致性与准确性', 
        icon: Database 
      },
      { 
        label: 'Link系统集成平台', 
        href: '/products/ipaas', 
        desc: '连接异构系统，打破信息孤岛，实现业务通畅', 
        icon: Network 
      },
      { 
        label: 'BI与数据中台', 
        href: '/products/bi-data', 
        desc: '数据可视化分析，辅助管理层科学决策', 
        icon: BarChart3 
      },
      { 
        label: '低代码平台', 
        href: '/products/yonbuilder', 
        desc: '企业级云原生应用构建平台，可视化拖拽开发', 
        icon: Code2 
      },
    ]
  }
]
