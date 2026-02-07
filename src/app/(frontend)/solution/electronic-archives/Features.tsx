'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Database, 
  Settings, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  BrainCircuit,
  FileCheck2,
  PackageSearch
} from 'lucide-react'

const features = [
  {
    id: 'capture',
    icon: Database,
    title: '全量捕获',
    tagline: '业财档深度融合',
    description: '支持上游异构系统（ERP、费控、税务等）单据与附件的自动采集，实现会计凭证捕获与采集方案的开箱即用。',
    highlights: ['异构系统广泛集成', '捕获方案智能推荐', '附件完整性自动校验'],
    metric: '数据采集一致性 99%以上'
  },
  {
    id: 'archive',
    icon: Settings,
    title: '智能归档',
    tagline: '自动化流水线',
    description: '自动完成分类、著录、组卷、编目、档号规则生成及装册统计，将繁琐的人工整理转变为自动化的数字流水线。',
    highlights: ['自动著录与组卷', '大凭证拆分装册', '档号方案柔性配置'],
    metric: '整理效率提升 87.5%'
  },
  {
    id: 'ai',
    icon: BrainCircuit,
    title: 'AI 智能利用',
    tagline: '不仅是存储，更是赋能',
    description: '基于知识图谱技术的凭证智能检索，实现科目、部门、客商多维可视化展示，辅助审计抽凭与疑点筛查。',
    highlights: ['知识图谱可视化', '凭证全文检索', '审计辅助分析'],
    metric: '审计效率提升 80%'
  },
  {
    id: 'governance',
    icon: ShieldCheck,
    title: '合规治理',
    tagline: '四性检测，全程溯源',
    description: '内置国家电子凭证归档标准所需的真实性、完整性、可用性、安全性检测，以保障档案全生命周期的合规管控。',
    highlights: ['四性自动检测', '全周过程留痕', '分级管理权限'],
    metric: '符合 GB/T 18894 标准'
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(features[0].id)

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Tabs Menu */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl font-bold text-[#1F2329] mb-4">核心功能</h2>
            <p className="text-slate-500 mb-10">从数据采集到档案利用，为您打造全闭环的数智档案管理体系。</p>
            
            <div className="space-y-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 border ${
                    activeTab === feature.id 
                      ? 'bg-[#0052D9] border-[#0052D9] shadow-xl shadow-blue-100' 
                      : 'bg-white border-slate-100 hover:border-blue-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeTab === feature.id ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#0052D9]'
                  }`}>
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`font-bold whitespace-nowrap transition-colors ${
                      activeTab === feature.id ? 'text-white' : 'text-[#1F2329]'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xs transition-colors ${
                      activeTab === feature.id ? 'text-white/70' : 'text-slate-400'
                    }`}>
                      {feature.tagline}
                    </p>
                  </div>
                  {activeTab === feature.id && (
                    <motion.div layoutId="arrow" className="ml-auto">
                      <ArrowRight size={20} className="text-white" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="flex-1 w-full lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              {features.map((feature) => feature.id === activeTab && (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#F8FAFC] p-10 lg:p-16 rounded-[40px] border border-slate-100 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-[#0052D9] text-sm font-bold mb-8">
                       {feature.metric}
                    </div>
                    <h3 className="text-3xl font-bold text-[#1F2329] mb-6">{feature.title}</h3>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                      {feature.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                            <FileCheck2 size={14} className="text-green-600" />
                          </div>
                          <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Visual Mockup Area */}
                  <div className="mt-auto pt-10 border-t border-slate-200">
                    <div className="flex items-center justify-between text-slate-400 text-sm">
                       <span className="flex items-center gap-2">
                         <PackageSearch size={18} /> 开箱即用，快速上线
                       </span>
                       <Zap size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
