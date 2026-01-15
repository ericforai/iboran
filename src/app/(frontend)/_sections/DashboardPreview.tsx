'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Activity, 
  Globe, 
  Terminal, 
  Command, 
  Search,
  MoreVertical,
  Cpu,
  Server,
  ArrowUpRight
} from 'lucide-react'

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: 0.8 }
  }
}

export const DashboardPreview = () => {
  const [tickerIndex, setTickerIndex] = useState(0)
  
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

  useEffect(() => {
    const timer = setInterval(() => {
        setTickerIndex((prev) => (prev + 1) % logs.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative w-full h-full min-h-[500px] bg-[#0A0A0A] flex flex-col font-mono text-sm shadow-2xl rounded-xl"
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
             <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-400">
                <Search size={12} />
                <span>搜索...</span>
                <span className="ml-2 text-[10px] bg-white/10 px-1 rounded">⌘K</span>
             </div>
             <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-blue-600"></div>
         </div>
      </div>

      {/* 2. Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
         {/* Sidebar */}
         <div className="w-56 border-r border-white/5 bg-white/[0.01] flex flex-col py-4">
            <div className="px-4 mb-6">
               <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2">经营管理</div>
               <div className="space-y-0.5">
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-white/5 text-cyan-400 rounded cursor-pointer">
                     <BarChart3 size={14} /> <span>财务全景</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer transition-colors">
                     <Globe size={14} /> <span>全球司库</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer transition-colors">
                     <Server size={14} /> <span>供应链中心</span>
                  </div>
               </div>
            </div>
            
            <div className="px-4">
               <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2">智能分析</div>
               <div className="space-y-0.5">
                  <div className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer transition-colors">
                     <Shield size={14} /> <span>业务预警</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer transition-colors">
                     <Cpu size={14} /> <span>决策支持</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Content Area */}
         <div className="flex-1 p-6 bg-black relative">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
               backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
               backgroundSize: '20px 20px'
            }}></div>

            <div className="relative z-10 flex flex-col gap-4">
               {/* Header Stats */}

               <div className="grid grid-cols-2 gap-4">
                  {[
                     { l: '本月营收 (Revenue)', v: '¥ 12.8 亿', c: 'text-white' },
                     { l: '净利润率 (Margin)', v: '24.8%', c: 'text-emerald-400' },
                     { l: '同比增长 (YoY)', v: '+15.2%', c: 'text-cyan-400' },
                     { l: '经营现金流', v: '¥ 4.5 亿', c: 'text-purple-400' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#111] border border-white/5 p-3 rounded-lg hover:bg-white/5 hover:border-cyan-500/30 transition-all group cursor-pointer relative">
                       <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight size={12} className="text-slate-400" />
                       </div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 flex justify-between truncate" title={stat.l}>
                          {stat.l}
                       </div>
                       <div className={`text-xl font-bold ${stat.c} whitespace-nowrap`}>{stat.v}</div>
                    </div>
                  ))}
               </div>






               {/* Bottom Logs -> Multi-line Rolling Console */}
               <div className="flex-1 bg-[#0d0d0d] border border-white/5 rounded-lg p-3 overflow-hidden flex flex-col min-h-[160px]">
                  <div className="flex items-center gap-2 text-slate-500 border-b border-white/5 pb-2 mb-2">
                     <Terminal size={12} /> 
                     <span className="text-[10px] whitespace-nowrap">实时交易动态 (Live)</span>
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
               

            </div>
         </div>
      </div>
    </motion.div>
  )
}
