'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Workflow, GitBranch, Database, ShieldCheck, CheckCircle2, type LucideIcon } from 'lucide-react'
import DigitalModelingDashboardMockup from './DigitalModelingDashboardMockup'

type TabID = 'organization' | 'process' | 'object' | 'data' | 'compliance'

interface Feature {
  id: TabID
  title: string
  icon: LucideIcon
  description: string
  details: string[]
  metric: string
}

const features: Feature[] = [
  {
    id: 'organization',
    title: '多维组织建模',
    icon: Users,
    description: '支撑企业按管理思想灵活构建组织架构，跨越职能边界。',
    details: [
      '支持集团法人树、核算树、人力行政树多维度并存',
      '组织时间轴管理，记录全生命周期，支持追溯与预测',
      '支持职能共享设置，一套人马多个牌子的多组织协同',
      '灵活的汇报关系定义，满足复杂业务下的多级审批路径'
    ],
    metric: '组织调整效率提升 80%'
  },
  {
    id: 'process',
    title: '可视化流程引擎',
    icon: Workflow,
    description: 'BPMN 2.0 标准驱动，实现业务自动化与流程效能诊断。',
    details: [
      '图形化流程设计器，拖拽式配置审批人与分支条件',
      '支持流程分级管控：统一管控、代理设置与流程预测',
      '业务流全链路打通，实现跨领域单据转换与回写规则',
      '流程效能分析看板，精准诊断耗时瓶颈并提供优化建议'
    ],
    metric: '审批周期缩短 65%'
  },
  {
    id: 'object',
    title: '业务对象建模',
    icon: GitBranch,
    description: '元数据驱动，支撑弹性字段扩展与业务规则自定义配置。',
    details: [
      '支持 765+ 扩展特征字段，满足不同行业精细化描述',
      '相关性规则配置，实现属性间的相互约束与自动赋值',
      'UI 模板一键更新与跨终端同步，实现千人千面配置',
      '支持多语言、多时区、多格式的全球化基础建模服务'
    ],
    metric: '系统配置灵活度 99%以上'
  },
  {
    id: 'data',
    title: '主数据分级管理',
    icon: Database,
    description: '明确数据管理权与使用权，实现跨组织的档案标准统一。',
    details: [
      '覆盖 168 个档案节点，支持物料、客户、供应商等管理',
      '主数据分级分权管控规则，实现“既能管又能放”',
      '基于特征的结构化编码定义，隐含业务信息可识别',
      '支持商品 SKU 最小单元经营，打通营销与供应链链路'
    ],
    metric: '数据准确率提升 98%'
  },
  {
    id: 'compliance',
    title: '合规与风险管理',
    icon: ShieldCheck,
    description: '构建智能合规风控闭环，以保障企业经营的安全性与透明度。',
    details: [
      '智能审计感知系统，对安全行为进行全方位监控记录',
      '支持三员密级管理与四级数据分级权限动态控制',
      '智能巡检报告，自动识别合同违约、财务异常等风险',
      '多因子认证（MFA）强制控制，适配全球数据合规要求'
    ],
    metric: '安全合规风险降至 0'
  }
]

export default function FeatureHub() {
  const [activeTab, setActiveTab] = useState<TabID>('organization')

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            全场景、端到端的建模能力
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            从组织重塑到流程再造，从数据治理到合规管控，YonBIP 为企业提供一体化的数智底座配置能力。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start text-xs md:text-sm lg:text-base">
          {/* Tabs Navigation */}
          <div className="lg:w-1/3 w-full space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer group ${
                  activeTab === feature.id
                    ? 'border-[#0052D9] bg-blue-50/50 shadow-lg shadow-blue-100'
                    : 'border-slate-100 bg-white hover:border-blue-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg transition-colors ${
                    activeTab === feature.id ? 'bg-[#0052D9] text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500'
                  }`}>
                    <feature.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg mb-1 ${activeTab === feature.id ? 'text-[#0052D9]' : 'text-slate-800'}`}>
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Content Display */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100 min-h-[500px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-10 lg:mb-12">
                    <div className="text-sm font-bold text-[#E60012] mb-2 uppercase tracking-wider">{features.find(f => f.id === activeTab)?.metric}</div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">关键核心特性</h2>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {features.find(f => f.id === activeTab)?.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-1">
                          <CheckCircle2 size={18} className="text-[#0052D9] shrink-0 mt-0.5" />
                          <span className="text-slate-600 leading-relaxed text-sm md:text-base">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-slate-200 lg:pt-12">
                    <div className="text-sm text-slate-400 mb-4 font-medium uppercase tracking-widest">系统演示界面预览</div>
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-300">
                      <DigitalModelingDashboardMockup activeView={activeTab} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
