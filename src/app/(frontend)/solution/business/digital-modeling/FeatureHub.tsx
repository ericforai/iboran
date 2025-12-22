'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Network, GitBranch, ShieldCheck, Globe, Layout, Wrench } from 'lucide-react'

const features = [
  {
    id: 'org',
    icon: Network,
    title: '多维组织建模',
    description: '支持行政、税收、财务核算等多维度组织架构同步管理，提供部门全生命周期管控。',
    details: ['多维组织映射', '虚拟组织支持', '组织演进追踪'],
  },
  {
    id: 'process',
    icon: GitBranch,
    title: '智能流程中心',
    description: '统一流程引擎，支持分支表达式、共享节点及AI流程效率分析。',
    details: ['动态流程编排', '审批路径优化', '实时效能监控'],
  },
  {
    id: 'data',
    icon: ShieldCheck,
    title: '主数据管理',
    description: '元数据驱动设计，建立统一数据标准，实现基础数据的分层分级治理。',
    details: ['主数据全生命周期', '质量评估体系', '全局唯一标识'],
  },
  {
    id: 'global',
    icon: Globe,
    title: '全球化服务',
    description: '多语言词条集中抽取，多币种、多时区合规框架支持，助力出海业务。',
    details: ['多语言实时翻译', '全球合规地图', '多币种自动换算'],
  },
  {
    id: 'portal',
    icon: Layout,
    title: '全员画布/仪表盘',
    description: '个人化工作台设计，支持 BIP Digital Hub 及移动穿透式配置。',
    details: ['零代码画布设计', '千人千面体验', '多端实时同步'],
  },
  {
    id: 'tools',
    icon: Wrench,
    title: '自动化配置工具',
    description: '自动配置工作台与配置迁移工具，显著提升交付效率与维护简易度。',
    details: ['一键配置迁移', '智能规则校验', '环境快速克隆'],
  },
]

export default function FeatureHub() {
  const [activeTab, setActiveTab] = useState(features[0].id)
  const activeFeature = features.find(f => f.id === activeTab)!

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            核心功能矩阵
          </h2>
          <p className="text-slate-600">
            全方位的数智化建模能力，为企业构建稳固而灵活的技术架构
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs List */}
          <div className="lg:w-1/3 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === feature.id
                    ? 'bg-[#0052D9] text-white shadow-lg shadow-blue-200'
                    : 'bg-white text-[#1F2329] border border-slate-100 hover:border-blue-200'
                }`}
              >
                <feature.icon className={`w-6 h-6 ${activeTab === feature.id ? 'text-white' : 'text-[#0052D9]'}`} />
                <span className="font-bold text-sm lg:text-base">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-slate-100 h-full"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0052D9]">
                    <activeFeature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F2329] mb-2">{activeFeature.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {activeFeature.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {activeFeature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E60012]" />
                      <span className="text-sm font-semibold text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-red-50/50 rounded-2xl border border-red-50">
                  <p className="text-[#E60012] text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E60012] animate-pulse" />
                    数智化价值：显著提升系统灵活性与交付速度 [XX]%
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
