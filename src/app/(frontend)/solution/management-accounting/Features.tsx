'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'
import { 
  Calculator, 
  ArrowRightLeft, 
  Layers, 
  Zap, 
  Database, 
  CheckCircle2, 
  TrendingUp, 
  FileText,
  Users,
  Settings,
  Package,
  Activity
} from 'lucide-react'

const FEATURES = [
  {
    id: 'integration',
    title: '业财深度融合',
    description: '通过智能会计平台与事项中台，实现业务发生即财务发生。业务端单据自动触发财务分录，财务关账实时控制业务制单，确保业财数据一致性。',
    icon: Calculator,
    metrics: ['自动化分录率 98%', '数据同步 实时']
  },
  {
    id: 'multi-purpose',
    title: '多目的核算体系',
    description: '支持同源分流，一套业务数据支撑财务核算（合规）、管理核算（考核）及责任会计（分析）等多重口径，满足不同维度的经营决策需求。',
    icon: ArrowRightLeft,
    metrics: ['多口径核算 支撑', '数据源 统一']
  },
  {
    id: 'precision',
    title: '精细化成本管理',
    description: '支持成本组件细分、上下游制程分层核算及分项/综合双结转视图。不仅记录总额，更能穿透还原到每一份原材料与作业人力的明细。',
    icon: Layers,
    metrics: ['组件核算 40+', '还原率 100%']
  },
  {
    id: 'intelligence',
    title: '智能测算与分析',
    description: '提供全领域适配的智能月结工作台与实时成本模拟引擎。支持 PDCA 循环管理，从预算预测、进度监控到分析改进，驱动价值创造。',
    icon: Zap,
    metrics: ['月结效率 提升5x', '模拟精度 99%']
  }
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Content & Tabs */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-[#1F2329] mb-4 tracking-tight">
                核心功能与技术优势
              </h2>
              <div className="w-20 h-1.5 bg-[#E60012] rounded-full mb-12" />
            </motion.div>
            
            <div className="space-y-4">
              {FEATURES.map((feature, idx) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveFeature(idx)}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    activeFeature === idx 
                      ? 'bg-blue-50/80 border-blue-200 shadow-xl shadow-blue-500/5 translate-x-2' 
                      : 'bg-white border-slate-100 hover:border-blue-100 hover:bg-slate-50/50'
                  }`}
                >
                  {activeFeature === idx && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0052D9]"
                    />
                  )}
                  <div className="flex items-start gap-5">
                    <div className={`p-4 rounded-xl transition-colors duration-300 ${
                      activeFeature === idx 
                        ? 'bg-[#0052D9] text-white shadow-lg shadow-blue-500/20' 
                        : 'bg-slate-50 text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50'
                    }`}>
                      <feature.icon size={26} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 transition-colors ${
                        activeFeature === idx ? 'text-[#0052D9]' : 'text-[#1F2329]'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        activeFeature === idx ? 'text-slate-700' : 'text-slate-500'
                      }`}>
                        {feature.description}
                      </p>
                      
                      <AnimatePresence>
                        {activeFeature === idx && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-wrap gap-3 mt-4"
                          >
                            {feature.metrics.map((metric, i) => (
                              <span key={i} className="text-[11px] font-bold text-[#0052D9] bg-white border border-blue-100 px-3 py-1 rounded-full shadow-sm">
                                {metric}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Visual */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-32 h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-2xl bg-[#F8FAFC] rounded-[40px] border border-slate-200/60 p-1 shadow-inner overflow-hidden flex items-center justify-center">
               {/* Decorative background grids */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
               
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeFeature}
                   initial={{ opacity: 0, scale: 0.95, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 1.05, y: -20 }}
                   transition={{ type: "spring", damping: 25, stiffness: 200 }}
                   className="relative z-10 w-full h-full p-8 flex items-center justify-center"
                 >
                    <FeatureVisualRenderer type={FEATURES[activeFeature].id} />
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function FeatureVisualRenderer({ type }: { type: string }) {
  switch (type) {
    case 'integration': return <IntegrationVisual />
    case 'multi-purpose': return <MultiPurposeVisual />
    case 'precision': return <PrecisionCostVisual />
    case 'intelligence': return <ForecastingVisual />
    default: return null
  }
}

// 1. 业财深度融合 Visual
function IntegrationVisual() {
  return (
    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 relative overflow-hidden h-[400px]">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Database size={20} />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800">业务事项中台</div>
            <div className="text-[10px] text-slate-400">Transaction Hub</div>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold border border-green-100 flex items-center gap-1">
          <CheckCircle2 size={12} /> 实时处理中
        </div>
      </div>

      <div className="relative h-48 flex items-center justify-between">
        {/* Left: Events */}
        <div className="space-y-3 z-10 w-32">
          {[
            { label: '销售出库单', color: 'bg-blue-500' },
            { label: '采购入库单', color: 'bg-indigo-500' },
            { label: '领料出库单', color: 'bg-slate-700' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-2 group hover:shadow-md transition-all"
            >
              <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
              <span className="text-[10px] font-bold text-slate-600">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Center: The Magic Bridge */}
        <div className="flex-1 px-4 relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {[0, 1, 2].map((i) => (
                  <motion.path
                    key={i}
                    d={`M 10,${30 + i * 20} Q 50,50 90,${30 + i * 20}`}
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.4,
                      repeatType: "loop"
                    }}
                  />
                ))}
              </svg>
            </div>
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="w-16 h-16 bg-blue-50 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center relative shadow-inner"
            >
               <Zap className="text-blue-500" size={24} />
            </motion.div>
        </div>

        {/* Right: Accounting Entries */}
        <div className="space-y-3 z-10 w-32">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.2 }}
              className="p-3 bg-slate-900 rounded-xl shadow-lg border border-slate-700 flex flex-col gap-1"
            >
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-mono text-blue-400">Entry #{1000 + i}</span>
                <CheckCircle2 size={10} className="text-green-500" />
              </div>
              <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                  className="h-full bg-blue-500"
                ></motion.div>
              </div>
              <span className="text-[8px] font-bold text-white">事项分录自动生成</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-blue-600" />
            <span className="text-[11px] font-bold text-blue-800">业务驱动财务，同步率 100%</span>
          </div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"
          />
      </div>
    </div>
  )
}

// 2. 多目的核算体系 Visual
function MultiPurposeVisual() {
  return (
    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 relative overflow-hidden h-[400px] flex flex-col">
       <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <FileText size={20} />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800">一套业务数据 · 多准则分流</div>
            <div className="text-[10px] text-slate-400">Single Source, Multi-Book</div>
          </div>
       </div>

       <div className="flex-1 relative flex items-center justify-center gap-4">
          {/* Main Data Source */}
          <div className="z-10">
             <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-slate-100 p-5 rounded-3xl border-2 border-slate-200 text-center shadow-md"
              >
                <Database className="mx-auto mb-2 text-slate-600" size={28} />
                <div className="text-xs font-black text-slate-800">原始业务单据</div>
                <div className="text-[10px] text-slate-500">统一数据源</div>
             </motion.div>
          </div>

          {/* Diverging Paths */}
          <div className="flex-1 h-full relative">
             <svg className="w-full h-full" viewBox="0 0 200 150">
                <path d="M 0,75 L 50,75 C 100,75 120,30 150,30" stroke="#6366F1" strokeWidth="2" fill="none" className="opacity-30" />
                <path d="M 0,75 L 50,75 C 100,75 120,75 150,75" stroke="#10B981" strokeWidth="2" fill="none" className="opacity-30" />
                <path d="M 0,75 L 50,75 C 100,75 120,120 150,120" stroke="#F59E0B" strokeWidth="2" fill="none" className="opacity-30" />
                
                {/* Animated Particles */}
                {[30, 75, 120].map((y, i) => (
                  <motion.circle
                    key={i}
                    r="3"
                    fill={i === 0 ? "#6366F1" : i === 1 ? "#10B981" : "#F59E0B"}
                    animate={{ cx: [0, 150], cy: [75, y], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
                  />
                ))}
             </svg>
          </div>

          {/* Output Books */}
          <div className="flex flex-col gap-4 z-10">
             {[
               { title: '财务核算', sub: '外部合规', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
               { title: '管理核算', sub: '内部考核', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
               { title: '责任会计', sub: '利润中心', color: 'bg-amber-50 border-amber-200 text-amber-700' }
             ].map((book, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.2 }}
                  className={`${book.color} p-3 rounded-2xl border-2 shadow-sm w-32`}
                >
                   <div className="text-[11px] font-black">{book.title}</div>
                   <div className="text-[9px] opacity-70">{book.sub}</div>
                </motion.div>
             ))}
          </div>
       </div>
    </div>
  )
}

// 3. 精细化成本管理 Visual
function PrecisionCostVisual() {
  return (
    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 relative overflow-hidden h-[400px] flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white">
              <Layers size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">原子级成本还原</div>
              <div className="text-[10px] text-slate-400">Atomic Cost Drill-down</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-600">正在追踪物料流</span>
          </div>
       </div>

       <div className="flex-1 space-y-4">
          {/* Main Product */}
          <div className="bg-[#1F2329] p-4 rounded-2xl text-white shadow-xl flex items-center justify-between border border-slate-700">
             <div className="flex items-center gap-3">
                <Package className="text-blue-400" size={24} />
                <div>
                   <div className="text-[10px] text-slate-400">产成品产值</div>
                   <div className="text-lg font-black font-mono">¥ 2,840,000.00</div>
                </div>
             </div>
             <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-[10px] font-bold">
               已完成自动还原
             </div>
          </div>

          {/* Cost Components Breakdown */}
          <div className="space-y-2">
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">成本组件细分</div>
             {[
               { label: '原材料 (Raw Materials)', value: 65, color: '#3B82F6', icon: Database },
               { label: '人工成本 (Direct Labor)', value: 20, color: '#F59E0B', icon: Users },
               { label: '制造费用 (Overhead)', value: 15, color: '#10B981', icon: Settings }
             ].map((cost, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.3 + i * 0.1 }}
                 className="bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer group"
               >
                 <div className="flex justify-between items-center mb-1.5">
                    <div className="flex items-center gap-2">
                       <cost.icon size={12} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                       <span className="text-[11px] font-bold text-slate-700">{cost.label}</span>
                    </div>
                    <span className="text-[11px] font-mono font-black text-slate-800">{cost.value}%</span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${cost.value}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: cost.color }}
                    />
                 </div>
               </motion.div>
             ))}
          </div>
       </div>
    </div>
  )
}

// 4. 智能测算与分析 Visual
function ForecastingVisual() {
  const percent = useMotionValue(0)
  const contribution = useTransform(percent, v => Math.round(v / 2 + 20))
  const scanId = useTransform(percent, v => 1280 + Math.round(v))
  const widthStr = useTransform(percent, v => `${v}%`)

  useEffect(() => {
    const controls = animate(percent, 100, {
      duration: 5,
      repeat: Infinity,
      ease: "linear"
    })
    return controls.stop
  }, [])

  return (
    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 relative overflow-hidden h-[400px] flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-500/20">
              <Zap size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">经营波动模拟</div>
              <div className="text-[10px] text-slate-400">What-if Scenario Analysis</div>
            </div>
          </div>
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-slate-200"></div>
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          </div>
       </div>

       <div className="flex-1 space-y-6">
          {/* Main Chart Container */}
          <div className="h-32 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden flex items-end px-2 pt-8">
             <div className="absolute top-2 left-4 text-[9px] font-bold text-slate-400 uppercase">预测收益趋势</div>
             <svg className="w-full h-full" viewBox="0 0 200 60">
                <path 
                  d="M 0,50 Q 50,45 100,20 T 200,5" 
                  fill="none" 
                  stroke="#E60012" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                <motion.path 
                   d="M 100,20 T 200,5 L 200,60 L 100,60 Z" 
                   fill="rgba(230,0,18,0.05)"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1 }}
                />
                <motion.circle 
                   animate={{ cx: [100, 200], cy: [20, 5] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   r="3" 
                   fill="white" 
                   stroke="#E60012" 
                   strokeWidth="2" 
                />
             </svg>
             {/* Threshold line */}
             <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-slate-300"></div>
          </div>

          {/* Controls / Variables */}
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-red-100 transition-colors group">
                <div className="flex items-center gap-2 mb-2 text-slate-500">
                   <TrendingUp size={12} className="group-hover:text-red-500 transition-colors" />
                   <span className="text-[10px] font-bold">原材料成本波动</span>
                </div>
                <div className="flex items-center justify-between">
                   <div className="text-lg font-black font-mono text-red-600">+15%</div>
                   <div className="w-8 h-4 bg-slate-100 rounded-full relative">
                      <motion.div 
                        animate={{ x: [0, 16] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute inset-y-0.5 left-0.5 w-3 h-3 bg-red-600 rounded-full"
                      ></motion.div>
                   </div>
                </div>
             </div>
             <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-100 transition-colors group">
                <div className="flex items-center gap-2 mb-2 text-slate-500">
                   <Activity size={12} className="group-hover:text-blue-500 transition-colors" />
                   <span className="text-[10px] font-bold">边际贡献率</span>
                </div>
                <div className="flex items-center justify-between">
                   <div className="text-lg font-black font-mono text-blue-600">
                     <motion.span>{contribution}</motion.span>%
                   </div>
                   <div className="text-[9px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">↑ 稳健</div>
                </div>
             </div>
          </div>
       </div>

       <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
             <motion.div 
                style={{ width: widthStr }}
                className="h-full bg-red-600"
             />
          </div>
          <span className="text-[10px] font-mono font-black text-slate-400">
            SCAN #<motion.span>{scanId}</motion.span>
          </span>
       </div>
    </div>
  )
}
