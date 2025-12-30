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
  Briefcase,
  Building2,
  Wine,
  Utensils,
  Milk,
  Sparkles,
  Beer,
  Microscope,
  Apple,
  Shirt,
  Tv,
  CircuitBoard,
  Settings2,
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
    name: '销售与收款',
    items: [
      { label: 'L2C：销售到收款', href: '/solution/business/lead-to-cash', desc: '线索多、转化低、回款慢？从销售到收款的全流程闭环', icon: TrendingUp },
      { label: 'REVENUE：营收云', href: '/solution/business/revenue-cloud', desc: '业绩不差，但钱回得慢？销售到收款的经营可视化', icon: Wallet },
    ]
  },
  {
    name: '采购与供应链',
    items: [
      { label: 'S2P：采购到付款', href: '/solution/business/s2p', desc: '供应商多、管控难、合规风险高？采购到付款的全流程管控', icon: Package },
    ]
  },
  {
    name: '研发与制造',
    items: [
      { label: 'PLM：研发云', href: '/solution/business/plm', desc: '研发周期长、协同难、市场响应慢？加速产品创新的研发管理', icon: FlaskConical },
      { label: 'P2M：制造全生命周期', href: '/solution/business/p2m', desc: '计划常变、现场失控、成本不准？生产全过程透明可控', icon: Factory },
      { label: 'MES：生产管理', href: '/solution/business/mes', desc: '排产靠经验，问题靠追人？让生产进度与质量实时可见', icon: Wrench },
    ]
  },
  {
    name: '财务与资金',
    items: [
      { label: 'FINANCE：财务云', href: '/solution/business/finance-cloud', desc: '多组织、对账难、报表慢？业财一体的集团财务财务管控', icon: Calculator },
      { label: 'R2R：核算到报告', href: '/solution/business/r2r', desc: '账算得清，但看不懂业务？让财务真正参与经营决策', icon: FileSpreadsheet },
      { label: 'TRM：资金管理', href: '/solution/business/trm', desc: '资金分散、调度难、风险盲区多？资金可视化与精准管控', icon: Landmark },
      { label: 'BANK：银企联', href: '/solution/business/bank-enterprise-link', desc: '2500+银行直联，开箱即用，构建数智化金融服务底座', icon: Landmark },
    ]
  },
  {
    name: '人力与资产',
    items: [
      { label: 'HRM：人力资源', href: '/solution/business/hrm', desc: '人不少，但效率看不清？组织、人效、成本一体管理', icon: UserCircle },
      { label: 'EAM：资产管理', href: '/solution/business/eam', desc: '资产多、台账乱、利用率低？从采购到退役的全生命周期管理', icon: HardHat },
    ]
  },
  {
    name: '智能平台',
    items: [
      { label: 'AIP：智能化应用', href: '/solution/business/aip-intelligent-apps', desc: '想用AI但不知从何下手？YonGPT 智能体快速落地', icon: Bot },
      { label: 'IPaaS：企业集成平台', href: '/solution/business/enterprise-integration', desc: '系统孤岛多、数据不互通？让业务连接更简单', icon: Link2 },
      { label: 'EOC：数智化协作', href: '/solution/business/eoc-collaboration', desc: '信息散乱、协作低效、事事靠人？AI 驱动的组织效能提升', icon: Users },
      { label: 'APP：数字化建模', href: '/solution/business/digital-modeling', desc: '需求变化快、开发跟不上？快速构建企业专属应用', icon: Blocks },
      { label: 'CTP：技术平台底座', href: '/solution/business/ctp', desc: '技术栈老旧、扩展困难？云原生技术底座支撑转型', icon: Cpu },
      { label: 'DEV：开发平台', href: '/solution/business/dev', desc: '开发周期长、维护成本高？低代码快速构建业务应用', icon: Code2 },
      { label: 'DMP：数据平台', href: '/solution/business/dmp', desc: '数据分散、分析困难、决策靠感觉？数据驱动经营决策', icon: Database },
    ]
  },
]

// 解决方案分类（按行业） - 链接到 CMS 管理的行业解决方案
export const solutionByIndustry: IndustryCategory[] = [
  {
    name: 'SEMI：芯片半导体',
    icon: Cpu,
    href: '/solution/industry/semiconductor',
    desc: '智造芯未来 · CIM赋能12寸量产线Auto3全自动化转型',
  },
  {
    name: 'IC：电子IC',
    icon: Cpu,
    href: '/solution/industry/electronic-ic',
    desc: '精细化委外协同 · 批号/刻号全局追溯 · 实时成本/效益模拟',
  },
  {
    name: 'HEALTH：医药健康',
    icon: Pill,
    href: '/solution/industry/biopharmaceutical',
    desc: '赋能药企全产业链数智化 · 营销合规 · 事项会计 · AI 智能体',
  },
  {
    name: 'CDMO：研产一体化',
    icon: Microscope,
    href: '/solution/industry/biomedical-cdmo',
    desc: '研产一体化 · GMP/CSV 合规 · 多组织协同 · 精细成本',
  },
  {
    name: 'N-MATT：新材料',
    icon: Atom,
    href: '/solution/industry/new-materials',
    desc: '数智驱动负极材料企业IPO合规与精益制造',
  },
  {
    name: 'ENERGY：能源行业',
    icon: Zap,
    href: '/solution/industry/energy',
    desc: '数智驱动能源企业高质量发展 · 智能生产 · 设备全生命周期',
  },
  {
    name: 'ELEC：电气装备',
    icon: Zap,
    href: '/solution/industry/electrical-equipment',
    desc: '智能制造驱动电气装备企业数字化转型 · 项目型生产 · 成本精准',
  },
  {
    name: 'AUTO：汽车行业',
    icon: Car,
    href: '/solution',
    desc: '多层级供应链下的协同管控 · 质量追溯 · 成本透明',
  },
  {
    name: 'FMCG：消费品',
    icon: ShoppingBag,
    href: '/solution',
    desc: '多渠道、快周转场景下的精细化运营与动态库存管理',
  },
  {
    name: 'GLOBAL：中企出海',
    icon: Globe,
    href: '/solution/business/global-operations',
    desc: 'YonBIP助力全球化经营·多语多币多时区统一管理',
  },
  {
    name: 'CHEM：基础化工',
    icon: FlaskConical,
    href: '/solution/industry/basic-chemicals',
    desc: '绿色·高端·智能 驱动化工行业数智化转型升级',
  },
  {
    name: 'BS：商务服务',
    icon: Briefcase,
    href: '/solution/industry/business-services',
    desc: '项目化经营 · 精细化核算 · 人才化运营',
  },
  {
    name: 'TS：科技服务',
    icon: Code2,
    href: '/solution/industry/tech-services',
    desc: '数智驱动项目与人才双轮飞轮 · L2C项目管理 · 业财一体',
  },
  {
    name: 'WEB：互联网行业',
    icon: Globe,
    href: '/solution/industry/internet',
    desc: '数智驱动 · 集团管控 · 全球化运营 · 业财融合',
  },
  {
    name: 'LIQUOR：白酒行业',
    icon: Wine,
    href: '/solution/industry/baijiu',
    desc: '数智酿造 · 品质传承 · 产销一体化协同',
  },
  {
    name: 'DEVICE：医疗器械',
    icon: Activity,
    href: '/solution/industry/medical-device',
    desc: '覆盖研发、制造、GSP、UDI 追溯全链路，助力医疗器械企业合规稳健增长',
  },
  {
    name: 'DINE：餐饮行业',
    icon: Utensils,
    href: '/solution/industry/catering',
    desc: '业财一体助力餐饮连锁高效经营 · 精细化成本管控 · 全渠道订单闭环',
  },
  {
    name: 'EPC：工程项目管理',
    icon: Building2,
    href: '/solution/industry/engineering-project',
    desc: '业主方业财一体深度管控 · 投资可控 · 进度可视 · 价值闭环',
  },
  {
    name: 'DAIRY：乳制品行业',
    icon: Milk,
    href: '/solution/industry/dairy',
    desc: '全产业链协同 · 收奶、生产、流通实时感知 · 守护每一滴品质',
  },
  {
    name: 'SOE：国资国企',
    icon: Building2,
    href: '/solution/industry/state-owned',
    desc: '构建"智慧监管+智能运营"体系 · 激活数智新动能 · 打造新质生产力',
  },
  {
    name: 'COSM：化妆品行业',
    icon: Sparkles,
    href: '/solution/industry/cosmetics',
    desc: '全域营销 · B2B2C一体化 · 供应链协同 · 业财融合',
  },
  {
    name: 'PS：专业服务',
    icon: Briefcase,
    href: '/solution/industry/professional-services',
    desc: '财务人力一体 · 项目精细管控 · 销售全程闭环',
  },
  {
    name: 'TCM：中药企业',
    icon: Pill,
    href: '/solution/industry/traditional-chinese-medicine',
    desc: '传承精华·守正创新 质量全追溯与成本精细化管控',
  },
  {
    name: 'BEER：啤酒行业',
    icon: Beer,
    href: '/solution/industry/beer',
    desc: '数智酿造 · 品质升级 · 产销一体化协同',
  },
  {
    name: 'FOOD：食品行业',
    icon: Apple,
    href: '/solution/industry/food',
    desc: '全产业链溯源 · 精益生产管控 · 业财一体转型',
  },
  {
    name: 'SNACK：休食行业',
    icon: Apple,
    href: '/solution/industry/snack',
    desc: '全渠道营销 · 敏捷供应协同 · AI 智能应用',
  },
  {
    name: 'FASHION：服装纺织',
    icon: Shirt,
    href: '/solution/industry/apparel',
    desc: '柔性化生产 · 快反供应链 · 全域订单管理',
  },
  {
    name: 'HOME：家用电器',
    icon: Tv,
    href: '/solution/industry/home-appliances',
    desc: '价值激发方案 · 研产供销一体 · 售后服务体系',
  },
  {
    name: 'EMS：电子组装',
    icon: CircuitBoard,
    href: '/solution/industry/electronic-assembly',
    desc: '数字化车间 · 精细化委外协同 · 批次全追溯',
  },
  {
    name: 'PARTS：汽配行业',
    icon: Settings2,
    href: '/solution/industry/automotive-parts',
    desc: '多层级供应链协同 · 质量体系管控 · 成本透明化',
  },
]

// 解决方案分类（按行业大类） - 二级分类结构
export const solutionByIndustryCategory: IndustryBusinessCategory[] = [
  {
    name: '芯片半导体',
    items: [
      { label: 'SEMI：芯片半导体', href: '/solution/industry/semiconductor', desc: '智造芯未来 · CIM赋能12寸量产线Auto3全自动化转型', icon: Cpu },
      { label: 'IC：电子IC', href: '/solution/industry/electronic-ic', desc: '精细化委外协同 · 批号/刻号全局追溯 · 实时成本/效益模拟', icon: Cpu },
    ]
  },
  {
    name: '高端制造',
    items: [
      { label: 'N-MATT：新材料', href: '/solution/industry/new-materials', desc: '数智驱动负极材料企业IPO合规与精益制造', icon: Atom },
      { label: 'ELEC：电气装备', href: '/solution/industry/electrical-equipment', desc: '智能制造驱动电气装备企业数字化转型 · 项目型生产 · 成本精准', icon: Zap },
      { label: 'HOME：家用电器', href: '/solution/industry/home-appliances', desc: '价值激发方案 · 研产供销一体 · 售后服务体系', icon: Tv },
      { label: 'EMS：电子组装', href: '/solution/industry/electronic-assembly', desc: '数字化车间 · 精细化委外协同 · 批次全追溯', icon: CircuitBoard },
      { label: 'PARTS：汽配行业', href: '/solution/industry/automotive-parts', desc: '多层级供应链协同 · 质量体系管控 · 成本透明化', icon: Settings2 },
      { label: 'AUTO：汽车行业', href: '/solution', desc: '多层级供应链下的协同管控 · 质量追溯 · 成本透明', icon: Car },
    ]
  },
  {
    name: '能源化工',
    items: [
      { label: 'ENERGY：能源行业', href: '/solution/industry/energy', desc: '数智驱动能源企业高质量发展 · 智能生产 · 设备全生命周期', icon: Zap },
      { label: 'CHEM：基础化工', href: '/solution/industry/basic-chemicals', desc: '绿色·高端·智能 驱动化工行业数智化转型升级', icon: FlaskConical },
    ]
  },
  {
    name: '医药与大健康',
    items: [
      { label: 'HEALTH：医药健康', href: '/solution/industry/biopharmaceutical', desc: '赋能药企全产业链数智化 · 营销合规 · 事项会计 · AI 智能体', icon: Pill },
      { label: 'CDMO：研产一体化', href: '/solution/industry/biomedical-cdmo', desc: '研产一体化 · GMP/CSV 合规 · 多组织协同', icon: Microscope },
      { label: 'DEVICE：医疗器械', href: '/solution/industry/medical-device', desc: '覆盖研发、制造、GSP、UDI 追溯全链路，助力医疗器械企业合规稳健增长', icon: Activity },
      { label: 'TCM：中药企业', href: '/solution/industry/traditional-chinese-medicine', desc: '传承精华·守正创新 质量全追溯与成本精细化管控', icon: Pill },
    ]
  },
  {
    name: '消费品与餐饮',
    items: [
      { label: 'LIQUOR：白酒行业', href: '/solution/industry/baijiu', desc: '数智酿造 · 品质传承 · 产销一体化协同', icon: Wine },
      { label: 'DAIRY：乳制品行业', href: '/solution/industry/dairy', desc: '全产业链协同 · 收奶、生产、流通实时感知 · 守护每一滴品质', icon: Milk },
      { label: 'DINE：餐饮行业', href: '/solution/industry/catering', desc: '业财一体助力餐饮连锁高效经营 · 精细化成本管控 · 全渠道订单闭环', icon: Utensils },
      { label: 'COSM：化妆品行业', href: '/solution/industry/cosmetics', desc: '全域营销 · B2B2C一体化 · 供应链协同 · 业财融合', icon: Sparkles },
      { label: 'BEER：啤酒行业', href: '/solution/industry/beer', desc: '数智酿造 · 品质升级 · 产销一体化协同', icon: Beer },
      { label: 'FOOD：食品行业', href: '/solution/industry/food', desc: '全产业链溯源 · 精益生产管控 · 业财一体转型', icon: Apple },
      { label: 'SNACK：休食行业', href: '/solution/industry/snack', desc: '全渠道营销 · 敏捷供应协同 · AI 智能应用', icon: Apple },
      { label: 'FASHION：服装纺织', href: '/solution/industry/apparel', desc: '柔性化生产 · 快反供应链 · 全域订单管理', icon: Shirt },
      { label: 'FMCG：消费品', href: '/solution', desc: '多渠道、快周转场景下的精细化运营与动态库存管理', icon: ShoppingBag },
    ]
  },
  {
    name: '现代服务业',
    items: [
      { label: 'TS：科技服务', href: '/solution/industry/tech-services', desc: '数智驱动项目与人才双轮飞轮 · L2C项目管理 · 业财一体', icon: Code2 },
      { label: 'BS：商务服务', href: '/solution/industry/business-services', desc: '项目化经营 · 精细化核算 · 人才化运营', icon: Briefcase },
      { label: 'PS：专业服务', href: '/solution/industry/professional-services', desc: '财务人力一体 · 项目精细管控 · 销售全程闭环', icon: Briefcase },
      { label: 'WEB：互联网行业', href: '/solution/industry/internet', desc: '数智驱动 · 集团管控 · 全球化运营 · 业财融合', icon: Globe },
    ]
  },
  {
    name: '工程与基建',
    items: [
      { label: 'EPC：工程项目管理', href: '/solution/industry/engineering-project', desc: '业主方业财一体深度管控 · 投资可控 · 进度可视 · 价值闭环', icon: Building2 },
    ]
  },
  {
    name: '特色专题',
    items: [
      { label: 'GLOBAL：中企出海', href: '/solution/business/global-operations', desc: 'YonBIP助力全球化经营·多语多币多时区统一管理', icon: Globe },
      { label: 'SOE：国资国企', href: '/solution/industry/state-owned', desc: '构建"智慧监管+智能运营"体系 · 激活数智新动能 · 打造新质生产力', icon: Building2 },
    ]
  },
]

// 扁平化所有业务解决方案用于其他场景
export const allBusinessSolutions = solutionByBusiness.flatMap(cat => cat.items)