'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, Zap, BarChart3, Target, Layers } from 'lucide-react'

const features = [
  {
    id: 'modeling',
    icon: Layers,
    title: '多维数智建模',
    subtitle: '灵活适配复杂业务场景',
    description: '基于多维内存数据库，支持企业根据组织、产品、项目、渠道等多维度自由建模，实现从集团到单元的穿透式管理。',
    bullets: [
      '支持 MDR 规则与实时运算',
      '跨年度、跨组织、跨期间灵活组合',
      '多场景沙箱模拟（Sandbox）'
    ],
    metric: '计算速度提升 100x'
  },
  {
    id: 'prediction',
    icon: Zap,
    title: '智能预测模拟',
    subtitle: '从经验主义转向算法驱动',
    description: '内置 AI 算法模型，结合历史经营数据与外部市场变量，提供自动化的趋势预测与风险预警。',
    bullets: [
      'YonGPT 智能测算模型',
      '一元时序与多元监督学习预测',
      '多版本对比与自动差异分析'
    ],
    metric: '预测准确率 95%+'
  },
  {
    id: 'control',
    icon: Target,
    title: '全业务环节编控',
    subtitle: '事前、事中、事后的全流程闭环',
    description: '深度集成费控、财资、采购与营销系统，实现预算在业务发起端的硬控制，以保障执行不偏离。',
    bullets: [
      '实时预算占用与自动释放',
      '柔性提醒与刚性阻断组合策略',
      '支持异构系统标准化接入'
    ],
    metric: '实时管控延迟 < 1s'
  },
  {
    id: 'analysis',
    icon: BarChart3,
    title: '深度执行分析',
    subtitle: '多维穿透，直达业务源头',
    description: '提供丰富的可视化报表看板，支持从财务结果指标直接穿透至业务单据，让每一分预算的去向清晰透明。',
    bullets: [
      '即席查询与自主多维分析',
      '自动生成智能管理报告',
      '关键指标动态预警监控'
    ],
    metric: '分析报表自动生成'
  }
]

// --- Visual Components for Each Feature ---

function ModelingVisual() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: '组织维', icon: '🏢', count: 54 },
          { label: '产品维', icon: '📦', count: 1200 },
          { label: '渠道维', icon: '🌐', count: 12 },
          { label: '科目维', icon: '💹', count: 85 }
        ].map((v, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center gap-3"
          >
            <span className="text-xl">{v.icon}</span>
            <div>
              <div className="text-[10px] text-slate-400 font-medium">{v.label}</div>
              <div className="text-sm font-bold text-slate-800">{v.count} 项</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center">
        <div className="text-[10px] text-slate-400 mb-4 px-2 py-0.5 bg-white border border-slate-200 rounded">多级穿透模型体系</div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-8 bg-[#0052D9] rounded flex items-center justify-center text-white font-bold text-[10px]">集团总部</div>
          <div className="w-px h-4 bg-slate-300" />
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-20 h-8 bg-blue-100 border border-blue-200 rounded flex items-center justify-center text-[#0052D9] font-bold text-[10px]">销售中心</div>
              <div className="w-px h-4 bg-slate-300" />
              <div className="flex gap-2">
                <div className="w-12 h-6 bg-white border border-slate-200 rounded flex items-center justify-center text-slate-600 text-[8px]">华东</div>
                <div className="w-12 h-6 bg-white border border-slate-200 rounded flex items-center justify-center text-slate-600 text-[8px]">华南</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-8 bg-blue-100 border border-blue-200 rounded flex items-center justify-center text-[#0052D9] font-bold text-[10px]">研发中心</div>
              <div className="w-px h-4 bg-slate-300" />
              <div className="w-12 h-6 bg-white border border-slate-200 rounded flex items-center justify-center text-slate-600 text-[8px]">实验室</div>
            </div>
          </div>
        </div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-blue-400/5 rounded-lg -z-1"
        />
      </div>
    </div>
  )
}

function PredictionVisual() {
  return (
    <div className="flex flex-col h-full bg-slate-900 rounded-lg p-6 text-white overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-[10px] text-slate-400">AI 智能预测 (MDR)</div>
          <div className="text-lg font-bold">2026年营收趋势模拟</div>
        </div>
        <div className="px-2 py-1 bg-green-500/20 text-green-400 text-[8px] rounded border border-green-500/30">置信度: 98%</div>
      </div>
      <div className="flex-1 relative flex items-end justify-between px-2 gap-1 mb-6">
        {/* Past Data */}
        {[30, 45, 40, 55, 60, 65, 75, 70].map((h, i) => (
          <div key={i} className="flex-1 bg-white/20 rounded-t-sm relative group h-full flex items-end">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              className="w-full bg-[#0052D9] rounded-t-sm"
            />
          </div>
        ))}
        {/* Forecast Data (Pulsing) */}
        {[80, 85, 95, 92].map((h, i) => (
          <div key={i+8} className="flex-1 bg-white/5 rounded-t-sm relative h-full flex items-end">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              className="w-full bg-red-500/60 rounded-t-sm relative overflow-hidden"
            >
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="absolute inset-0 bg-white/20"
              />
            </motion.div>
            {i === 3 && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-red-400 animate-bounce">
                +18.4% 预测增长
              </div>
            )}
          </div>
        ))}
        {/* Grid lines */}
        <div className="absolute inset-0 border-b border-white/10 flex flex-col justify-between pointer-events-none">
          <div className="border-t border-white/5 w-full h-0" />
          <div className="border-t border-white/5 w-full h-0" />
          <div className="border-t border-white/5 w-full h-0" />
        </div>
      </div>
      <div className="text-[8px] text-slate-500 flex justify-between">
        <span>Q1-Q2 (实际值)</span>
        <span>Q3-Q4 (AI 测算)</span>
      </div>
    </div>
  )
}

function ControlVisual() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-slate-500 font-medium">费控占用率: 市场推广活动</span>
          <span className="text-red-600 font-bold">88.5% 临界预警</span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden flex">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '88.5%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-red-500"
          />
        </div>
      </div>
      
      <div className="relative p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <div className="absolute -top-3 left-6 px-2 py-0.5 bg-[#E60012] text-white text-[8px] font-bold rounded">编控预警流程</div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0052D9] border border-blue-200 shadow-sm">
              <CheckCircle2 size={16} />
            </div>
            <span className="text-[10px] font-medium text-slate-700">业务申请</span>
          </div>
          <ArrowFlow />
          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 border border-yellow-200 shadow-sm">
              <Target size={16} />
            </div>
            <span className="text-[10px] font-medium text-slate-700">实时编控</span>
          </div>
          <ArrowFlow isWarning />
          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[#E60012] border border-red-200 shadow-sm relative">
              <Zap size={16} />
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white flex items-center justify-center text-white text-[6px]">!</motion.div>
            </div>
            <span className="text-[10px] font-medium text-slate-700">刚性阻断</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 p-2 bg-white rounded border border-slate-100 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[9px] text-slate-600">柔性提醒策略已生效</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white rounded border border-slate-100 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-[9px] text-slate-600">刚性拦截阈值: 100%</span>
        </div>
      </div>
    </div>
  )
}

function ArrowFlow({ isWarning = false }: { isWarning?: boolean }) {
  return (
    <div className="flex-1 h-px bg-slate-300 relative">
      <motion.div 
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 border-t-2 border-r-2 ${isWarning ? 'border-red-400' : 'border-blue-400'} rotate-45`}
      />
    </div>
  )
}

function AnalysisVisual() {
  return (
    <div className="flex flex-col gap-4 overflow-visible h-full">
      <div className="bg-[#001529] p-4 rounded-xl flex flex-col gap-4 text-white shadow-xl relative z-20">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-wider opacity-80 uppercase">执行率深度分析</span>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: '市场推广费', p: 85, c: '#E60012' },
            { label: '研发物料费', p: 48, c: '#0052D9' },
            { label: '日常办公费', p: 92, c: '#22C55E' }
          ].map((item: any, i: number) => (
                    <div key={i}>
                        <h3>{item.title || item.label || ""}</h3>
                        <p>{item.problem || item.description || item.desc || ""}</p>
                        <p>{item.solution || ""}</p>
                        <p>{item.outcome || ""}</p>
                        {item.features && Array.isArray(item.features) && <ul>{item.features.map((f: any, fi: number) => <li key={fi}>{f}</li>)}</ul>}
                        {item.points && Array.isArray(item.points) && <ul>{item.points.map((p: any, pi: number) => <li key={pi}>{p}</li>)}</ul>}
                        {item.benefits && Array.isArray(item.benefits) && <ul>{item.benefits.map((b: any, bi: number) => <li key={bi}>{b}</li>)}</ul>}
                    </div>
                ))}
        </div>
      </div>
      
      <div className="flex-1 relative mt-[-10px] z-10">
        {/* Layered Effect for Drill-down */}
        <div className="absolute inset-0 bg-white border border-slate-200 rounded-xl p-4 pt-8 shadow-2xl flex flex-col gap-3">
          <div className="text-[9px] font-bold text-[#0052D9] flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-1">
             <BarChart3 size={12} /> 点击柱条穿透至业务凭证
          </div>
          {[
            { name: '华北区市场活动', id: 'BX00192', val: '¥ 45,000' },
            { name: 'Q1 广告位投放', id: 'BX00204', val: '¥ 12,500' },
            { name: '社交媒体推广', id: 'BX00215', val: '¥ 8,800' }
          ].map((item: any, i: number) => (
                    <div key={i}>
                        <h3>{item.title || item.label || ""}</h3>
                        <p>{item.problem || item.description || item.desc || ""}</p>
                        <p>{item.solution || ""}</p>
                        <p>{item.outcome || ""}</p>
                        {item.features && Array.isArray(item.features) && <ul>{item.features.map((f: any, fi: number) => <li key={fi}>{f}</li>)}</ul>}
                        {item.points && Array.isArray(item.points) && <ul>{item.points.map((p: any, pi: number) => <li key={pi}>{p}</li>)}</ul>}
                        {item.benefits && Array.isArray(item.benefits) && <ul>{item.benefits.map((b: any, bi: number) => <li key={bi}>{b}</li>)}</ul>}
                    </div>
                ))}
            </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Content and Tabs */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#1F2329] mb-8">
              核心功能特性
            </h2>
            
            <div className="flex flex-col gap-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`text-left p-6 rounded-xl transition-all duration-300 border ${
                    activeTab === feature.id
                      ? 'bg-red-50 border-red-100 shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeTab === feature.id ? 'bg-[#E60012] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <feature.icon size={20} />
                    </div>
                    <span className={`text-xl font-bold ${activeTab === feature.id ? 'text-[#E60012]' : 'text-slate-700'}`}>
                      {feature.title}
                    </span>
                  </div>
                  {activeTab === feature.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4"
                    >
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <CheckCircle2 className="text-green-500 w-4 h-4" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Visual Support */}
          <div className="lg:w-1/2 relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 min-h-[500px] flex flex-col justify-center relative w-full"
              >
                {/* Background Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0052D9]/5 rounded-full blur-[100px] -z-10" />
                
                <div className="relative z-10 text-center lg:text-left">
                   <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-[#0052D9] font-bold text-sm mb-6">
                     核心指标: {features.find(f => f.id === activeTab)?.metric}
                   </div>
                   
                   {/* High Fidelity Visual Framework */}
                   <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden min-h-[360px] flex flex-col">
                      <div className="h-8 bg-slate-100 flex items-center px-4 gap-2 border-b border-slate-200 shrink-0">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_5px_rgba(248,113,113,0.5)]" />
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                         <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col min-h-0">
                         <div className="flex items-center justify-between mb-8 shrink-0">
                            <div className="space-y-1">
                               <div className="text-slate-400 text-xs">实时数智引擎</div>
                               <div className="text-xl font-bold text-slate-800 tracking-tight">
                                  {features.find(f => f.id === activeTab)?.subtitle}
                               </div>
                            </div>
                             {(() => {
                                const FeatureIcon = features.find(f => f.id === activeTab)?.icon
                                return FeatureIcon ? <FeatureIcon className="w-12 h-12 text-[#E60012]/10" /> : null
                             })()}
                         </div>
                         
                         {/* Dynamic Visualization Content */}
                         <div className="flex-1 min-h-0 overflow-visible relative">
                            {activeTab === 'modeling' && <ModelingVisual />}
                            {activeTab === 'prediction' && <PredictionVisual />}
                            {activeTab === 'control' && <ControlVisual />}
                            {activeTab === 'analysis' && <AnalysisVisual />}
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
