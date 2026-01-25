'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, 
  Shield, 
  Activity, 
  Globe, 
  Terminal, 
  Search,
  Cpu,
  Server,
  ArrowUpRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  Truck,
  Factory,
  Package,
  AlertOctagon
} from 'lucide-react'

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: 0.8 }
  }
}

const tabContentVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
}

const logs = [
  { type: '资金', time: '10:42:01', msg: '华东大区完成一笔大额收款 ¥3,500,000，已自动对账。', color: 'text-emerald-500' },
  { type: '预警', time: '10:42:02', msg: '核心原材料库存低于 15%，触发自动补货流程。', color: 'text-yellow-500' },
  { type: '合同', time: '10:42:05', msg: '新签署战略合作协议 (ID: CT-20250101)，已归档。', color: 'text-blue-500' },
  { type: '税务', time: '10:42:08', msg: '12月增值税申报表自动生成完毕，等待审核。', color: 'text-emerald-500' },
  { type: '物流', time: '10:42:12', msg: '订单 #SH-2024889 已发货，预计明日抵达北京仓。', color: 'text-purple-500' },
  { type: '系统', time: '10:42:15', msg: 'AI 财务机器人完成上月凭证自动审核，准确率 99.8%。', color: 'text-cyan-500' },
  { type: '资金', time: '10:42:18', msg: '海外账户 (USD) 汇率波动预警，建议启动套期保值策略。', color: 'text-red-400' },
  { type: '审批', time: '10:42:21', msg: '年度预算调整申请 (OA-992) 已通过 CFO 审批。', color: 'text-blue-400' },
  { type: '销售', time: '10:42:25', msg: 'Q4 销售目标达成率 105%，触发超额奖励计算。', color: 'text-emerald-400' },
  { type: '库存', time: '10:42:28', msg: '华南仓位预警：A区利用率超过 90%，建议调拨。', color: 'text-yellow-400' },
]

export const DashboardPreview = React.memo(() => {
  const [activeTab, setActiveTab] = useState('finance')
  const [tickerIndex, setTickerIndex] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
        setTickerIndex((prev) => (prev + 1) % logs.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'finance':
        return (
          <motion.div key="finance" variants={tabContentVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4 h-full flex-1">
             <div className="grid grid-cols-2 gap-4">
                {[
                   { l: '本月营收', v: '¥ 12.8 亿', c: 'text-white', i: <TrendingUp size={14} /> },
                   { l: '净利润率', v: '24.8%', c: 'text-emerald-400', i: <Activity size={14} /> },
                   { l: '同比增长', v: '+15.2%', c: 'text-cyan-400', i: <ArrowUpRight size={14} /> },
                   { l: '经营现金流', v: '¥ 4.5 亿', c: 'text-purple-400', i: <DollarSign size={14} /> },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#111] border border-white/5 p-3 rounded-lg hover:bg-white/5 hover:border-cyan-500/30 transition-all group cursor-pointer relative">
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={12} className="text-slate-400" />
                     </div>
                     <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 flex justify-between items-center truncate" title={stat.l}>
                        <span>{stat.l}</span>
                        <span className="opacity-50">{stat.i}</span>
                     </div>
                     <div className={`text-xl font-bold ${stat.c} whitespace-nowrap`}>{stat.v}</div>
                  </div>
                ))}
             </div>
             <div className="flex-1 bg-[#0d0d0d] border border-white/5 rounded-lg p-3 overflow-hidden flex flex-col min-h-[300px]">
                <div className="flex items-center gap-2 text-slate-500 border-b border-white/5 pb-2 mb-2">
                   <Terminal size={12} /> 
                   <span className="text-[10px] whitespace-nowrap">实时交易动态</span>
                   <div className="flex-1"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="flex-1 relative overflow-hidden">
                   <div className="flex flex-col gap-2">
                      <AnimatePresence mode="popLayout" initial={false}>
                         {[0,1,2,3,4].map((offset) => {
                           const index = (tickerIndex + offset) % logs.length;
                           const log = logs[index];
                           return (
                              <motion.div 
                                 key={`${log.time}-${index}`}
                                 layout
                                 initial={{ opacity: 0, x: -20 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 exit={{ opacity: 0, x: 20 }}
                                 transition={{ duration: 0.3 }}
                                 className="flex items-center text-xs border-b border-white/[0.02] last:border-0 pb-1"
                              >
                                 <span className={`${log.color} w-10 shrink-0`}>[{log.type}]</span>
                                 <span className="text-slate-600 w-16 shrink-0 font-mono">{log.time}</span>
                                 <span className="text-slate-400 truncate flex-1 block" title={log.msg}>{log.msg}</span>
                              </motion.div>
                           );
                         })}
                      </AnimatePresence>
                   </div>
                </div>
             </div>
          </motion.div>
        )
      case 'treasury':
        return (
          <motion.div key="treasury" variants={tabContentVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4 h-full flex-1">
             {/* World Map Simulation */}
             <div className="relative h-40 bg-[#111] rounded-lg border border-white/5 overflow-hidden flex items-center justify-center group cursor-crosshair">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                <div className="relative z-10 grid grid-cols-2 gap-8 w-full px-8">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
                            <span className="text-xs text-slate-400">人民币资金池 (上海)</span>
                        </div>
                        <div className="text-xl font-mono text-white">¥ 8.42 亿</div>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-xs text-slate-400">美元资金池 (新加坡)</span>
                        </div>
                        <div className="text-xl font-mono text-white">$ 1.24 亿</div>
                    </div>
                </div>
                {/* Connecting Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <path d="M 120 80 Q 250 20 400 80" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>
             </div>

             {/* FX Rates */}
             <div className="grid grid-cols-2 gap-3 flex-1 min-h-[300px]">
                <div className="bg-[#111] rounded-lg p-3 border border-white/5 flex flex-col justify-between hover:border-blue-500/30 transition-colors">
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] text-slate-500">美元/人民币</span>
                        <span className="text-xs text-green-400 font-mono">+0.12%</span>
                    </div>
                    <div className="py-2">
                        {/* Fake Sparkline */}
                        <div className="flex items-end gap-[2px] h-8 opacity-50">
                            {[4,6,3,7,5,8,6,9,7,8,9,6,5,8,9].map((h, i) => (
                                <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{ height: `${h * 10}%` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="text-lg font-bold text-white">7.2341</div>
                </div>
                <div className="bg-[#111] rounded-lg p-3 border border-white/5 flex flex-col justify-between hover:border-purple-500/30 transition-colors">
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] text-slate-500">欧元/人民币</span>
                        <span className="text-xs text-red-400 font-mono">-0.05%</span>
                    </div>
                    <div className="py-2">
                         {/* Fake Sparkline */}
                         <div className="flex items-end gap-[2px] h-8 opacity-50">
                            {[8,7,9,6,5,7,8,6,5,4,5,6,3,5,4].map((h, i) => (
                                <div key={i} className="flex-1 bg-purple-500 rounded-t-sm" style={{ height: `${h * 10}%` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="text-lg font-bold text-white">7.8892</div>
                </div>
             </div>
          </motion.div>
        )
      case 'supply':
        return (
          <motion.div key="supply" variants={tabContentVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4 h-full flex-1">
             {/* Process Flow */}
             <div className="flex items-center justify-between px-2 py-4 bg-[#111] rounded-lg border border-white/5">
                {[
                    { icon: <Factory size={14} />, label: '生产', val: '98%', c: 'text-cyan-400' },
                    { icon: <CheckCircle2 size={14} />, label: '质检', val: '99.5%', c: 'text-emerald-400' },
                    { icon: <Package size={14} />, label: '入库', val: '24h', c: 'text-blue-400' },
                    { icon: <Truck size={14} />, label: '配送', val: '准时', c: 'text-purple-400' },
                ].map((step, i) => (
                    <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-2">
                             <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center ${step.c} border border-white/10`}>
                                 {step.icon}
                             </div>
                             <div className="text-[10px] text-slate-500">{step.label}</div>
                             <div className="text-xs font-bold text-white font-mono">{step.val}</div>
                        </div>
                         {i < 3 && <div className="h-px w-8 bg-white/10"></div>}
                    </React.Fragment>
                ))}
             </div>

             {/* Inventory Bars */}
             <div className="flex-1 bg-[#111] rounded-lg border border-white/5 p-4 flex flex-col gap-4 min-h-[300px]">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400 font-mono font-bold">库存水位</span>
                    <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20">健康状态: 良好</span>
                </div>
                
                <div className="space-y-3">
                    <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-500">
                             <span>原材料</span>
                             <span>65%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-cyan-500 w-[65%] rounded-full"></div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-500">
                             <span>在制品</span>
                             <span>42%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-yellow-500 w-[42%] rounded-full"></div>
                        </div>
                    </div>
                     <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-500">
                             <span>产成品</span>
                             <span>88%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-indigo-500 w-[88%] rounded-full"></div>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>
        )
      case 'alert':
        return (
          <motion.div key="alert" variants={tabContentVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-3 h-full flex-1">
             <div className="flex gap-2">
                 <div className="flex-1 bg-red-500/10 border border-red-500/20 p-3 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-red-500/20 transition-colors">
                     <AlertOctagon size={16} className="text-red-500" />
                     <span className="text-2xl font-bold text-white">3</span>
                     <span className="text-[10px] text-red-300">严重</span>
                 </div>
                 <div className="flex-1 bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-yellow-500/20 transition-colors">
                     <AlertTriangle size={16} className="text-yellow-500" />
                     <span className="text-2xl font-bold text-white">12</span>
                     <span className="text-[10px] text-yellow-300">警告</span>
                 </div>
                 <div className="flex-1 bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-blue-500/20 transition-colors">
                     <Shield size={16} className="text-blue-500" />
                     <span className="text-2xl font-bold text-white">98%</span>
                     <span className="text-[10px] text-blue-300">安全评分</span>
                 </div>
             </div>

             <div className="flex-1 bg-[#111] rounded-lg border border-white/5 overflow-hidden flex flex-col min-h-[300px]">
                 <div className="px-3 py-2 border-b border-white/5 text-[10px] font-bold text-slate-500 uppercase">风险日志</div>
                 <div className="flex-1 p-2 space-y-2 overflow-y-auto">
                     {[
                         { msg: '数据库连接延迟过高 (>200ms)', lvl: 'critical' },
                         { msg: '亚太区供应链中断概率上升', lvl: 'critical' },
                         { msg: 'Q4 预算使用率达到 92%，接近上限', lvl: 'warning' },
                         { msg: '已拦截来自 IP 192.168.x.x 的未授权访问', lvl: 'critical' },
                         { msg: '许可证将在 15 天后过期', lvl: 'warning' },
                     ].map((alert, i) => (
                         <div key={i} className="flex items-start gap-2 p-2 rounded hover:bg-white/5 transition-colors cursor-pointer">
                             <div className={`mt-0.5 w-1.5 h-1.5 rounded-full shrink-0 ${alert.lvl === 'critical' ? 'bg-red-500 animate-pulse' : 'bg-yellow-500'}`}></div>
                             <span className="text-xs text-slate-300 leading-tight">{alert.msg}</span>
                         </div>
                     ))}
                 </div>
             </div>
          </motion.div>
        )
      case 'decision':
        return (
          <motion.div key="decision" variants={tabContentVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4 h-full flex-1 relative">
              {/* AI Prediction Header */}
              <div className="p-3 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-lg flex items-start gap-3">
                  <div className="mt-1 p-1 bg-purple-500/20 rounded-md">
                      <Cpu size={14} className="text-purple-400" />
                  </div>
                  <div>
                      <div className="text-[10px] text-purple-300 font-bold mb-1 uppercase">AI 智能洞察</div>
                      <div className="text-xs text-slate-300 leading-relaxed">
                          基于当前趋势，预计第一季度营收将超出目标 <span className="text-white font-bold">8.4%</span>。建议行动：将标准化库存增加 15% 以满足预测的需求激增。
                      </div>
                  </div>
              </div>

              {/* Radar Chart Simulation */}
              <div className="flex-1 bg-[#111] rounded-lg border border-white/5 relative flex items-center justify-center min-h-[300px]">
                  <div className="absolute top-2 left-3 text-[10px] text-slate-500 font-bold">企业健康指数</div>
                  
                  {/* Hexagon Grid */}
                  <div className="relative w-32 h-32 flex items-center justify-center">
                       {[0, 1, 2].map(i => (
                           <div key={i} className="absolute inset-0 border border-white/10" 
                           style={{ 
                               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                               transform: `scale(${1 - i * 0.25})`
                           }}></div>
                       ))}
                       
                       {/* Data Shape */}
                       <div className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/50"
                           style={{ 
                               clipPath: 'polygon(50% 10%, 90% 30%, 85% 65%, 50% 90%, 15% 70%, 20% 30%)'
                           }}
                       ></div>
                       
                        {/* Labels */}
                        <span className="absolute -top-4 text-[9px] text-slate-400">增长</span>
                        <span className="absolute -bottom-4 text-[9px] text-slate-400">风险</span>
                        <span className="absolute -left-8 text-[9px] text-slate-400">成本</span>
                        <span className="absolute -right-8 text-[9px] text-slate-400">效率</span>
                  </div>
              </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative w-full h-full min-h-[500px] bg-[#0A0A0A] flex flex-col font-mono text-sm shadow-2xl rounded-xl border border-white/10"
    >
      {/* 1. Command Bar Header (Linear Style) */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-white/[0.02]">
         <div className="flex items-center gap-4">
            <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center gap-2 text-slate-400">
               <Activity size={14} />
               <span className="font-medium text-xs">泊冉软件</span>
               <span className="text-slate-600">/</span>
               <span className="text-cyan-400">管理驾驶舱</span>
            </div>
         </div>
         
         <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-400 hidden sm:flex">
                <Search size={12} />
                <span>搜索...</span>
                <span className="ml-2 text-[10px] bg-white/10 px-1 rounded">⌘K</span>
             </div>
             <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
         </div>
      </div>

      {/* 2. Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
         {/* Sidebar */}
         <div className="w-48 sm:w-56 border-r border-white/5 bg-white/[0.01] flex flex-col py-4 gap-6 shrink-0 z-20">
            <div className="px-3 sm:px-4">
               <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2 px-2">经营管理</div>
               <div className="space-y-1">
                  <button 
                    onClick={() => setActiveTab('finance')}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded text-xs transition-all ${activeTab === 'finance' ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                  >
                     <BarChart3 size={14} /> <span>财务全景</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('treasury')}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded text-xs transition-all ${activeTab === 'treasury' ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                  >
                     <Globe size={14} /> <span>全球司库</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('supply')}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded text-xs transition-all ${activeTab === 'supply' ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                  >
                     <Server size={14} /> <span>供应链中心</span>
                  </button>
               </div>
            </div>
            
            <div className="px-3 sm:px-4">
               <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2 px-2">智能分析</div>
               <div className="space-y-1">
                  <button 
                    onClick={() => setActiveTab('alert')}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded text-xs transition-all ${activeTab === 'alert' ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                  >
                     <Shield size={14} /> <span>业务预警</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('decision')}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded text-xs transition-all ${activeTab === 'decision' ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                  >
                     <Cpu size={14} /> <span>决策支持</span>
                  </button>
               </div>
            </div>
         </div>

         {/* Content Area */}
         <div className="flex-1 p-4 sm:p-6 bg-black relative h-full overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
               backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
               backgroundSize: '20px 20px'
            }}></div>

            <div className="relative z-10 w-full h-full flex flex-col">
               <AnimatePresence mode="wait">
                 {renderContent()}
               </AnimatePresence>
            </div>
         </div>
      </div>
    </motion.div>
  )
})

DashboardPreview.displayName = 'DashboardPreview'
