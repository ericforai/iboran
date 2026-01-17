import {
  TrendingUp,
  Activity,
  Wallet,
  Package,
  FlaskConical,
  Factory,
  Wrench,
  Calculator,
  FileSpreadsheet,

  Link2,
  Users,
  Blocks,
  Cpu,
  Layers,
  Pill,
  Code2,
  Database,
  HardHat,
  UserCircle,
  Landmark,
  Atom,
  Zap,
  Globe,
  Briefcase,
  Building2,
  Wine,
  Utensils,
  Milk,
  Sparkles,
  Beer,
  Sun,
  Microscope,
  Apple,
  Crown,
  Shirt,
  Tv,
  CircuitBoard,
  Settings2,
  FileCheck,
  Share2,
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

// 行业解决方案明细类型
export interface IndustrySolutionItem {
  label: string
  href: string
  desc: string
  icon: LucideIcon
}

// 行业大类分类
export interface IndustryBusinessCategory {
  name: string
  items: IndustrySolutionItem[]
}

// 旧的扁平行业分类接口（保留兼容）
export interface IndustryCategory {
  name: string
  icon: LucideIcon
  href: string
  desc: string
}

// 解决方案分类（按业务领域）
export const solutionByBusiness: BusinessCategory[] = [
  {
    name: '财务管控',
    items: [
      { label: '核算到报告', href: '/solution/business/r2r', desc: '让财务真正参与经营决策，驱动价值创造', icon: FileSpreadsheet },
      { label: '智能商旅到费控', href: '/solution/tes', desc: '实现业财税资档一体化管理的智能差旅费控平台', icon: Wallet },
      { label: '司库资金管理', href: '/solution/business/trm', desc: '全球资金实时监控与精准调度，构建数智化金融底座', icon: Landmark },
      { label: '税务管理', href: '/solution/business/tax-management', desc: '金税四期合规 · 全税种自动申报 · 智能风险风控', icon: FileCheck },
      { label: '业财融合', href: '/solution/business/business-finance-integration', desc: '实时·精细·智能的业财数据底座，驱动价值转型', icon: Activity },
      { label: '财务共享', href: '/solution/financial-shared-services', desc: '打造全球财务共享服务平台，实现高效业财联动', icon: Share2 },
      { label: '全面预算管理', href: '/solution/budget-management', desc: '构建战略到执行的闭环管控，助力精准决策', icon: Calculator },
      { label: '管理会计', href: '/products/management-accounting', desc: '深度嵌入业务模型 · 实时成本还原 · 多目的核算', icon: Calculator },
      { label: '会计档案管理', href: '/solution/electronic-archives', desc: '业财档深度融合，自动化归档与智能合规检索', icon: Database },
    ]
  },
  {
    name: '业务管控',
    items: [
      { label: '研发云', href: '/solution/business/plm', desc: '集成研发、工程与制造，缩短周期，加速创新', icon: FlaskConical },
      { label: '数智合同', href: '/solution/contract-lifecycle-management', desc: '业财法一体化，全生命周期智慧合同管理', icon: FileSpreadsheet },
      { label: '销售线索到收款', href: '/solution/business/lead-to-cash', desc: '全链路商机跟踪、自动化定价，实现销售高效闭环', icon: TrendingUp },
      { label: '采购寻源到付款', href: '/solution/business/s2p', desc: '构建透明高效供应体系，实现采购全流程合规管控', icon: Package },
      { label: '项目立项到成本', href: '/solution/business/p2c-project-to-cost', desc: '项目全生命周期管控，进度透明，核算精细', icon: Layers },
      { label: '计划、生产到成本', href: '/solution/business/p2m', desc: '生产数字化、透明化管控，实现精益制造', icon: Factory },
      { label: '智能制造', href: '/solution/business/mes', desc: '实时感知、智能排产，打造数智化生产车间', icon: Wrench },
      { label: '资产全生命周期管理', href: '/solution/business/eam', desc: '实现实物资产与价值管理的统一与全生命周期协同', icon: HardHat },
      { label: '人力资源管理', href: '/solution/business/hrm', desc: '赋能员工 激活组织，构建招聘、选育用留闭环', icon: UserCircle },
    ]
  },
  {
    name: '平台',
    items: [

      { label: '企业集成平台', href: '/products/ipaas', desc: '系统孤岛多、数据不互通？让业务连接更简单', icon: Link2 },
      { label: '数智化协作', href: '/solution/business/eoc-collaboration', desc: '信息散乱、协作低效、事事靠人？AI 驱动的组织效能提升', icon: Users },
      { label: '数字化建模', href: '/solution/business/digital-modeling', desc: '需求变化快、开发跟不上？快速构建企业专属应用', icon: Blocks },
      { label: '技术平台底座', href: '/solution/business/ctp', desc: '技术栈老旧、扩展困难？云原生技术底座支撑转型', icon: Cpu },

      { label: '数据平台', href: '/solution/business/dmp', desc: '数据分散、分析困难、决策靠感觉？数据驱动经营决策', icon: Database },
    ]
  },
]

// 解决方案分类（按行业） - 链接到 CMS 管理的行业解决方案
export const solutionByIndustry: IndustryCategory[] = [
  {
    name: '芯片制造',
    icon: Cpu,
    href: '/solution/industry/semiconductor',
    desc: '芯片半导体行业数字化解决方案',
  },
  {
    name: '芯片研发',
    icon: Cpu,
    href: '/solution/industry/chip-rd',
    desc: '穿透委外黑盒，重塑全命周期价值链',
  },
  {
    name: '医疗电子',
    icon: Cpu,
    href: '/solution/industry/electronic-ic',
    desc: '精细化委外协同 · 批号/刻号全局追溯 · 实时成本/效益模拟',
  },
  {
    name: '医药健康',
    icon: Pill,
    href: '/solution/industry/biopharmaceutical',
    desc: '赋能药企全产业链数智化 · 营销合规 · 事项会计 · AI 智能体',
  },
  {
    name: '研产一体化',
    icon: Microscope,
    href: '/solution/industry/biomedical-cdmo',
    desc: '研产一体化 · GMP/CSV 合规 · 多组织协同 · 精细成本',
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
  {
    name: '商务服务',
    icon: Briefcase,
    href: '/solution/industry/business-services',
    desc: '项目化经营 · 精细化核算 · 人才化运营',
  },
  {
    name: '科技服务',
    icon: Code2,
    href: '/solution/industry/tech-services',
    desc: '数智驱动项目与人才双轮飞轮 · L2C项目管理 · 业财一体',
  },
  {
    name: '互联网行业',
    icon: Globe,
    href: '/solution/industry/internet',
    desc: '数智驱动 · 集团管控 · 全球化运营 · 业财融合',
  },
  {
    name: '白酒行业',
    icon: Wine,
    href: '/solution/industry/baijiu',
    desc: '数智酿造 · 品质传承 · 产销一体化协同',
  },
  {
    name: '医疗器械',
    icon: Activity,
    href: '/solution/industry/medical-device',
    desc: '覆盖研发、制造、GSP、UDI 追溯全链路，助力医疗器械企业合规稳健增长',
  },
  {
    name: '餐饮行业',
    icon: Utensils,
    href: '/solution/industry/catering',
    desc: '业财一体助力餐饮连锁高效经营 · 精细化成本管控 · 全渠道订单闭环服务',
  },
  {
    name: '工程项目管理',
    icon: Building2,
    href: '/solution/industry/engineering-project',
    desc: '业主方业财一体深度管控 · 投资可控 · 进度可视 · 价值闭环',
  },
  {
    name: '乳制品行业',
    icon: Milk,
    href: '/solution/industry/dairy',
    desc: '全产业链协同 · 收奶、生产、流通实时感知 · 守护每一滴品质',
  },
  {
    name: '国资国企',
    icon: Building2,
    href: '/solution/industry/state-owned',
    desc: '构建"智慧监管+智能运营"体系 · 激活数智新动能 · 打造新质生产力',
  },
  {
    name: '化妆品行业',
    icon: Sparkles,
    href: '/solution/industry/cosmetics',
    desc: '全域营销 · B2B2C一体化 · 供应链协同 · 业财融合',
  },
  {
    name: '专业服务',
    icon: Briefcase,
    href: '/solution/industry/professional-services',
    desc: '财务人力一体 · 项目精细管控 · 销售全程闭环',
  },
  {
    name: '中药企业',
    icon: Pill,
    href: '/solution/industry/traditional-chinese-medicine',
    desc: '传承精华·守正创新 质量全追溯与成本精细化管控',
  },
  {
    name: '啤酒行业',
    icon: Beer,
    href: '/solution/industry/beer',
    desc: '数智酿造 · 品质升级 · 产销一体化协同',
  },
  {
    name: '食品行业',
    icon: Apple,
    href: '/solution/industry/food',
    desc: '全产业链溯源 · 精益生产管控 · 业财一体转型',
  },
  {
    name: '休食行业',
    icon: Apple,
    href: '/solution/industry/snack',
    desc: '全渠道营销 · 敏捷供应协同 · AI 智能应用',
  },
  {
    name: '服装纺织',
    icon: Shirt,
    href: '/solution/industry/apparel',
    desc: '柔性化生产 · 快反供应链 · 全域订单管理',
  },
  {
    name: '家用电器',
    icon: Tv,
    href: '/solution/industry/home-appliances',
    desc: '全渠道订单聚合 · 多仓一盘货协作 · SN 码全程追溯',
  },
  {
    name: '电子组装',
    icon: CircuitBoard,
    href: '/solution/industry/electronic-assembly',
    desc: '数字化车间 · 精细化委外协同 · 批次全追溯',
  },
  {
    name: '汽配行业',
    icon: Settings2,
    href: '/solution/industry/automotive-parts',
    desc: '端到端实现整车厂协同、精益制造与全周期质量追溯',
  },
]

// 解决方案分类（按行业大类） - 二级分类结构
export const solutionByIndustryCategory: IndustryBusinessCategory[] = [
  {
    name: '芯片制造',
    items: [
      {
        label: '芯片制造',
        href: '/solution/industry/semiconductor',
        desc: '晶圆制造与封测一体化',
        icon: Cpu,
      },
      {
        label: '芯片研发',
        href: '/solution/industry/chip-rd',
        desc: '穿透委外黑盒，重塑全命周期价值链',
        icon: Cpu,
      },
    ],
  },
  {
    name: '高端制造',
    items: [
      { label: '新材料', href: '/solution/industry/new-materials', desc: '数智驱动负极材料企业IPO合规与精益制造', icon: Atom },
      { label: '电气装备', href: '/solution/industry/electrical-equipment', desc: '智能制造驱动电气装备企业数字化转型 · 项目型生产 · 成本精准', icon: Zap },
      { label: '家用电器', href: '/solution/industry/home-appliances', desc: '全渠道订单聚合 · 多仓一盘货协作 · SN 码全程追溯', icon: Tv },
      { label: '电子组装', href: '/solution/industry/electronic-assembly', desc: '数字化车间 · 精细化委外协同 · 批次全追溯', icon: CircuitBoard },
      { label: '汽配行业', href: '/solution/industry/automotive-parts', desc: '端到端实现整车厂协同、精益制造与全周期质量追溯', icon: Settings2 },
    ]
  },
  {
    name: '能源化工',
    items: [
      { label: '能源行业', href: '/solution/industry/energy', desc: '数智驱动能源企业高质量发展 · 智能生产 · 设备全生命周期', icon: Zap },
      { label: '基础化工', href: '/solution/industry/basic-chemicals', desc: '绿色·高端·智能 驱动化工行业数智化转型升级', icon: FlaskConical },
    ]
  },
  {
    name: '医药与大健康',
    items: [
      { label: '医药健康', href: '/solution/industry/biopharmaceutical', desc: '赋能药企全产业链数智化 · 营销合规 · 事项会计 · AI 智能体', icon: Pill },
      { label: '研产一体化', href: '/solution/industry/biomedical-cdmo', desc: '研产一体化 · GMP/CSV 合规 · 多组织协同', icon: Microscope },
      { label: '医疗器械', href: '/solution/industry/medical-device', desc: '覆盖研发、制造、GSP、UDI 追溯全链路，助力医疗器械企业合规稳健增长', icon: Activity },
      { label: '中药企业', href: '/solution/industry/traditional-chinese-medicine', desc: '传承精华·守正创新 质量全追溯与成本精细化管控', icon: Pill },
    ]
  },
  {
    name: '消费品与餐饮',
    items: [
      { label: '白酒行业', href: '/solution/industry/baijiu', desc: '数智酿造 · 品质传承 · 产销一体化协同', icon: Wine },
      { label: '乳制品行业', href: '/solution/industry/dairy', desc: '全产业链协同 · 收奶、生产、流通实时感知 · 守护每一滴品质', icon: Milk },
      { label: '餐饮行业', href: '/solution/industry/catering', desc: '业财一体助力餐饮连锁高效经营 · 精细化成本管控 · 全渠道订单闭环', icon: Utensils },
      { label: '化妆品行业', href: '/solution/industry/cosmetics', desc: '全域营销 · B2B2C一体化 · 供应链协同 · 业财融合', icon: Sparkles },
      { label: '啤酒行业', href: '/solution/industry/beer', desc: '数智酿造 · 品质升级 · 产销一体化协同', icon: Beer },
      { label: '食品行业', href: '/solution/industry/food', desc: '全产业链溯源 · 精益生产管控 · 业财一体转型', icon: Apple },
      { label: '休食行业', href: '/solution/industry/snack', desc: '全渠道营销 · 敏捷供应协同 · AI 智能应用', icon: Apple },
      { label: '服装纺织', href: '/solution/industry/apparel', desc: '柔性化生产 · 快反供应链 · 全域订单管理', icon: Shirt },
      { label: 'IP 运营', href: '/solution/industry/ip-operations', desc: '授权全链路闭环 · 自动分成结算 · AI 维权巡检', icon: Crown },
    ]
  },
  {
    name: '现代服务业',
    items: [
      { label: '科技服务', href: '/solution/industry/tech-services', desc: '数智驱动项目与人才双轮飞轮 · L2C项目管理 · 业财一体', icon: Code2 },
      { label: '商务服务', href: '/solution/industry/business-services', desc: '项目化经营 · 精细化核算 · 人才化运营', icon: Briefcase },
      { label: '专业服务', href: '/solution/industry/professional-services', desc: '财务人力一体 · 项目精细管控 · 销售全程闭环', icon: Briefcase },
      { label: '互联网行业', href: '/solution/industry/internet', desc: '数智驱动 · 集团管控 · 全球化运营 · 业财融合', icon: Globe },
    ]
  },
  {
    name: '工程与基建',
    items: [
      { label: '工程项目管理', href: '/solution/industry/engineering-project', desc: '业主方业财一体深度管控 · 投资可控 · 进度可视 · 价值闭环', icon: Building2 },
    ]
  },
  {
    name: '特色专题',
    items: [
      { label: '中企出海', href: '/solution/business/global-operations', desc: 'YonBIP助力全球化经营·多语多币多时区统一管理', icon: Globe },
      { label: '国资国企', href: '/solution/industry/state-owned', desc: '构建"智慧监管+智能运营"体系 · 激活数智新动能 · 打造新质生产力', icon: Building2 },
    ]
  },
]

// 扁平化所有业务解决方案用于其他场景
export const allBusinessSolutions = solutionByBusiness.flatMap(cat => cat.items)