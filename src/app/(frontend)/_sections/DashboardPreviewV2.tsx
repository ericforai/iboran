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
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
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

export const DashboardPreviewV2 = React.memo(() => {
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
                   <div key={i} className="bg-white/[0.03] border border-white/[0.05] p-3 rounded-lg hover:bg-white/[0.08] hover:border-cyan-500/40 transition-all group cursor-pointer relative overflow-hidden backdrop-blur-sm">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowUpRight size={12} className="text-slate-400" />
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 flex justify-between items-center truncate">
                         <span>{stat.l}</span>
                         <span className="opacity-50">{stat.i}</span>
                      </div>
                      <div className={`text-xl font-bold font-mono ${stat.c} whitespace-nowrap`}>{stat.v}</div>
                   </div>
                ))}
             </div>
             <div className="flex-1 bg-black/40 border border-white/[0.05] rounded-lg p-3 overflow-hidden flex flex-col min-h-[300px] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] to-transparent pointer-events-none"></div>
                <div className="flex items-center gap-2 text-slate-500 border-b border-white/[0.05] pb-2 mb-2 relative z-10">
                   <Terminal size={12} className="text-cyan-500/70" /> 
                   <span className="text-[10px] tracking-tight uppercase font-bold text-slate-400">Real-time Transaction Stream</span>
                   <div className="flex-1"></div>
                   <div className="flex gap-1.5 items-center">
                      <span className="text-[9px] font-mono text-cyan-500/50 uppercase">Active</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"></div>
                   </div>
                </div>
                <div className="flex-1 relative overflow-hidden z-10">
                   <div className="flex flex-col gap-2">
                      <AnimatePresence mode="popLayout" initial={false}>
                         {[0,1,2,3,4].map((offset) => {
                           const index = (tickerIndex + offset) % logs.length;
                           const log = logs[index];
                           return (
                              <motion.div 
                                 key={`${log.time}-${index}`}
                                 layout
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 exit={{ opacity: 0, x: 10 }}
                                 transition={{ duration: 0.3 }}
                                 className="flex items-center text-[11px] border-b border-white/[0.02] last:border-0 pb-1.5 group/log"
                              >
                                 <span className={`${log.color} w-10 shrink-0 font-bold opacity-80 group-hover/log:opacity-100 transition-opacity`}>[{log.type}]</span>
                                 <span className="text-slate-600 w-16 shrink-0 font-mono text-[10px]">{log.time}</span>
                                 <span className="text-slate-400 truncate flex-1 block group-hover/log:text-slate-200 transition-colors" title={log.msg}>{log.msg}</span>
                              </motion.div>
                           );
                         })}
                      </AnimatePresence>
                   </div>
                </div>
                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(transparent 50%, #fff 50%)', backgroundSize: '100% 4px' }}></div>
             </div>
          </motion.div>
        )
      case 'treasury':
        return (
          <motion.div key="treasury" variants={tabContentVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4 h-full flex-1">
             <div className="relative h-44 bg-white/[0.02] rounded-lg border border-white/[0.05] overflow-hidden flex items-center justify-center group cursor-crosshair backdrop-blur-sm">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                <div className="relative z-10 grid grid-cols-2 gap-8 w-full px-8">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)] animate-pulse"></div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CNY Pool (Shanghai)</span>
                        </div>
                        <div className="text-2xl font-mono font-bold text-white tracking-tighter">¥ 842.15 M</div>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">USD Pool (Singapore)</span>
                            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                        </div>
                        <div className="text-2xl font-mono font-bold text-white tracking-tighter">$ 124.89 M</div>
                    </div>
                </div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    <path d="M 120 100 Q 250 20 400 100" fill="none" stroke="url(#gradient-v2)" strokeWidth="1.5" strokeDasharray="6 4">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                    </path>
                    <defs>
                        <linearGradient id="gradient-v2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>
             </div>

             <div className="grid grid-cols-2 gap-3 flex-1 min-h-[300px]">
                <div className="bg-white/[0.02] rounded-lg p-4 border border-white/[0.05] flex flex-col justify-between hover:border-cyan-500/40 transition-all backdrop-blur-sm group">
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">USD / CNY</span>
                        <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            <TrendingUp size={10} />
                            <span>+0.12%</span>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="flex items-end gap-[3px] h-10">
                            {[4,6,3,7,5,8,6,9,7,8,9,6,5,8,9].map((h, i) => (
                                <motion.div 
                                  key={i} 
                                  initial={{ height: 0 }} 
                                  animate={{ height: `${h * 10}%` }}
                                  className="flex-1 bg-gradient-to-t from-cyan-600/20 to-cyan-400/60 rounded-t-sm"
                                ></motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="text-xl font-bold font-mono text-white tracking-tight">7.2341 <span className="text-[10px] font-normal text-slate-500 ml-1">SPOT</span></div>
                </div>
                <div className="bg-white/[0.02] rounded-lg p-4 border border-white/[0.05] flex flex-col justify-between hover:border-indigo-500/40 transition-all backdrop-blur-sm group">
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">EUR / CNY</span>
                        <div className="flex items-center gap-1 text-[10px] text-rose-400 font-mono bg-rose-500/10 px-1.5 py-0.5 rounded">
                            <Activity size={10} />
                            <span>-0.05%</span>
                        </div>
                    </div>
                    <div className="py-2">
                         <div className="flex items-end gap-[3px] h-10">
                            {[8,7,9,6,5,7,8,6,5,4,5,6,3,5,4].map((h, i) => (
                                <motion.div 
                                  key={i} 
                                  initial={{ height: 0 }} 
                                  animate={{ height: `${h * 10}%` }}
                                  className="flex-1 bg-gradient-to-t from-indigo-600/20 to-indigo-400/60 rounded-t-sm"
                                ></motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="text-xl font-bold font-mono text-white tracking-tight">7.8892 <span className="text-[10px] font-normal text-slate-500 ml-1">SPOT</span></div>
                </div>
             </div>
          </motion.div>
        )
      case 'supply':
        return (
          <motion.div key="supply" variants={tabContentVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4 h-full flex-1">
             <div className="flex items-center justify-between px-4 py-5 bg-white/[0.02] rounded-lg border border-white/[0.05] backdrop-blur-sm">
                {[
                    { icon: <Factory size={16} />, label: 'Production', val: '98%', c: 'text-cyan-400' },
                    { icon: <CheckCircle2 size={16} />, label: 'QC Pass', val: '99.5%', c: 'text-emerald-400' },
                    { icon: <Package size={16} />, label: 'Inbound', val: '24h', c: 'text-blue-400' },
                    { icon: <Truck size={16} />, label: 'Delivery', val: 'ON TIME', c: 'text-indigo-400' },
                ].map((step, i) => (
                    <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-2 group/step">
                             <div className={`w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center ${step.c} border border-white/10 group-hover/step:border-cyan-500/50 group-hover/step:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all`}>
                                 {step.icon}
                             </div>
                             <div className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{step.label}</div>
                             <div className="text-xs font-bold text-white font-mono">{step.val}</div>
                        </div>
                         {i < 3 && (
                           <div className="flex-1 h-[1px] mx-2 bg-gradient-to-r from-white/5 via-white/20 to-white/5 relative">
                              <motion.div 
                                initial={{ left: -10 }}
                                animate={{ left: '110%' }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                className="absolute top-[-2px] w-4 h-[5px] bg-cyan-500/40 blur-[2px]"
                              />
                           </div>
                         )}
                    </React.Fragment>
                ))}
             </div>

             <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/[0.05] p-5 flex flex-col gap-6 min-h-[300px] backdrop-blur-sm">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Inventory Waterline</span>
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-bold">HEALTH: OPTIMAL</span>
                </div>
                
                <div className="space-y-5">
                    {[
                      { label: 'RAW MATERIALS', val: 65, color: 'bg-cyan-500' },
                      { label: 'WORK IN PROGRESS', val: 42, color: 'bg-indigo-500' },
                      { label: 'FINISHED GOODS', val: 88, color: 'bg-blue-600' }
                    ].map((bar, i) => (
                      <div key={i} className="space-y-2">
                          <div className="flex justify-between text-[10px] font-black text-slate-500 tracking-wider">
                               <span>{bar.label}</span>
                               <span className="text-slate-300 font-mono">{bar.val}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden p-[1px]">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: `${bar.val}%` }}
                                 transition={{ duration: 1, delay: i * 0.1 }}
                                 className={`h-full ${bar.color} rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]`}
                               ></motion.div>
                          </div>
                      </div>
                    ))}
                </div>
                
                <div className="mt-auto grid grid-cols-3 gap-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="h-1 bg-white/[0.03] rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2 + i, repeat: Infinity, ease: 'linear' }}
                          className="w-1/2 h-full bg-cyan-500/20"
                        />
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        )
      case 'alert':
        return (
          <motion.div key="alert" variants={tabContentVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4 h-full flex-1">
             <div className="flex gap-3">
                 {[
                   { icon: <AlertOctagon size={16} />, val: '3', label: 'SEVERE', bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-500', sub: 'text-rose-300/60' },
                   { icon: <AlertTriangle size={16} />, val: '12', label: 'WARNING', bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-500', sub: 'text-amber-300/60' },
                   { icon: <Shield size={16} />, val: '98%', label: 'SECURITY', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-500', sub: 'text-cyan-300/60' }
                 ].map((item, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    className={`flex-1 ${item.bg} border ${item.border} p-4 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all`}
                   >
                       <div className={item.text}>{item.icon}</div>
                       <span className="text-3xl font-black font-mono text-white tracking-tighter">{item.val}</span>
                       <span className={`text-[9px] font-black tracking-[0.2em] ${item.sub}`}>{item.label}</span>
                   </motion.div>
                 ))}
             </div>

             <div className="flex-1 bg-black/40 border border-white/[0.05] rounded-xl overflow-hidden flex flex-col min-h-[300px] backdrop-blur-md">
                 <div className="px-4 py-3 border-b border-white/[0.05] flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em]">System Risk Engine v2.4</span>
                    <div className="flex gap-1">
                       <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                       <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                       <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                    </div>
                 </div>
                 <div className="flex-1 p-3 space-y-2.5 overflow-y-auto">
                     {[
                         { msg: 'Database latency spike detected (>240ms)', lvl: 'critical', time: '2m ago' },
                         { msg: 'APAC supply chain disruption risk: 65%', lvl: 'critical', time: '14m ago' },
                         { msg: 'Fiscal Q4 budget utilization: 92.4%', lvl: 'warning', time: '1h ago' },
                         { msg: 'Blocked unauthorized IP: 192.168.1.104', lvl: 'critical', time: '2h ago' },
                         { msg: 'License renewal required (15 days remaining)', lvl: 'warning', time: '1d ago' },
                     ].map((alert, i) => (
                         <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.03] transition-all cursor-pointer group/alert relative overflow-hidden">
                             <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${alert.lvl === 'critical' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)] animate-pulse' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]'}`}></div>
                             <div className="flex-1">
                                <span className="text-[11px] text-slate-300 leading-snug font-medium group-hover/alert:text-white transition-colors block">{alert.msg}</span>
                                <span className="text-[9px] font-mono text-slate-600 mt-1 block tracking-wider">{alert.time}</span>
                             </div>
                             <ArrowUpRight size={12} className="text-slate-700 group-hover/alert:text-slate-400 opacity-0 group-hover/alert:opacity-100 transition-all transform translate-y-1 group-hover/alert:translate-y-0" />
                         </div>
                     ))}
                 </div>
             </div>
          </motion.div>
        )
      case 'decision':
        return (
          <motion.div key="decision" variants={tabContentVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-5 h-full flex-1 relative">
              <div className="p-4 bg-gradient-to-br from-indigo-950/40 via-blue-900/10 to-transparent border border-indigo-500/30 rounded-xl flex items-start gap-4 relative overflow-hidden group/ai shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[40px] rounded-full pointer-events-none"></div>
                  <div className="mt-1 p-2 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-lg shadow-lg group-hover/ai:rotate-12 transition-transform">
                      <Cpu size={18} className="text-white" />
                  </div>
                  <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                         <span className="text-[10px] text-indigo-300 font-black uppercase tracking-[0.2em]">Boran Intelligence Insight</span>
                         <span className="h-px flex-1 bg-indigo-500/20"></span>
                      </div>
                      <div className="text-[13px] text-slate-200 leading-relaxed font-medium">
                          Based on multi-dimensional data models, Q1 revenue is projected to exceed targets by <span className="text-cyan-400 font-black">+8.4%</span>.
                          <div className="mt-2 text-indigo-200/80 italic text-xs border-l-2 border-indigo-500/40 pl-3 py-1">
                            Action: Increase strategic inventory by 15% to leverage forecasted demand surge.
                          </div>
                      </div>
                  </div>
              </div>

              <div className="flex-1 bg-white/[0.02] rounded-xl border border-white/[0.05] relative flex items-center justify-center min-h-[300px] backdrop-blur-md overflow-hidden">
                  <div className="absolute top-4 left-5 text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                     <Activity size={12} className="text-indigo-500" />
                     Enterprise Health Index
                  </div>
                  
                  <div className="relative w-40 h-40 flex items-center justify-center">
                       {/* Background pulse rings */}
                       <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 border border-indigo-500/20 rounded-full" />
                       
                       {[0, 1, 2, 3].map(i => (
                           <div key={i} className="absolute inset-0 border border-white/[0.03]" 
                           style={{ 
                               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                               transform: `scale(${1 - i * 0.25})`
                           }}></div>
                       ))}
                       
                       <motion.div 
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-indigo-600/30 border border-cyan-400/50 shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                          style={{ 
                              clipPath: 'polygon(50% 12%, 88% 30%, 82% 68%, 52% 88%, 18% 72%, 22% 32%)'
                          }}
                       />
                       
                        {/* Interactive Nodes */}
                        <div className="absolute top-[-25px] flex flex-col items-center">
                           <span className="text-[10px] font-black text-slate-400 tracking-tighter uppercase">Growth</span>
                           <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,1)]"></div>
                        </div>
                        <div className="absolute bottom-[-25px] flex flex-col items-center">
                           <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                           <span className="text-[10px] font-black text-slate-400 tracking-tighter uppercase">Risk</span>
                        </div>
                        <div className="absolute left-[-25px] flex items-center gap-1.5">
                           <span className="text-[10px] font-black text-slate-400 tracking-tighter uppercase text-right">Cost</span>
                           <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                        </div>
                        <div className="absolute right-[-25px] flex items-center gap-1.5">
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                           <span className="text-[10px] font-black text-slate-400 tracking-tighter uppercase">Effy</span>
                        </div>
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
      className="relative w-full h-full min-h-[500px] bg-[#050505] flex flex-col font-sans text-sm shadow-[0_0_60px_rgba(0,0,0,1)] rounded-2xl border border-white/[0.08] overflow-hidden group/main"
    >
      {/* Dynamic Glow Overlay */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[100px] pointer-events-none group-hover/main:bg-cyan-500/15 transition-all duration-1000"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[100px] pointer-events-none"></div>

      {/* 1. Branded Header Bar */}
      <div className="h-14 border-b border-white/[0.08] flex items-center justify-between px-6 bg-white/[0.02] backdrop-blur-xl relative z-20">
         <div className="flex items-center gap-5">
            <div className="flex gap-2.5">
               <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)]"></div>
               <div className="w-3 h-3 rounded-full bg-amber-500 opacity-40"></div>
               <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-40"></div>
            </div>
            <div className="h-5 w-[1px] bg-white/[0.08]"></div>
            <div className="flex items-center gap-3 text-slate-400 tracking-tight">
               <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  <span className="text-[10px] font-black italic text-cyan-400">BORAN</span>
               </div>
               <span className="text-slate-600 text-xs font-mono">/</span>
               <span className="text-slate-300 font-black uppercase text-[11px] tracking-widest">Digital Command Center</span>
            </div>
         </div>
         
         <div className="flex items-center gap-4">
             <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] text-slate-500 hidden md:flex hover:bg-white/[0.06] transition-colors group/search cursor-text">
                <Search size={14} className="group-hover/search:text-white transition-colors" />
                <span className="font-bold tracking-wider">GLOBAL SEARCH</span>
                <span className="ml-2 text-[9px] bg-white/[0.05] px-1.5 py-0.5 rounded border border-white/5 font-mono">CMD + K</span>
             </div>
             <motion.div 
               whileHover={{ scale: 1.1, rotate: 5 }}
               className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center"
             >
                <div className="w-4 h-4 rounded-full border-2 border-white/30"></div>
             </motion.div>
         </div>
      </div>

      {/* 2. Enhanced Workspace */}
      <div className="flex-1 flex overflow-hidden relative z-10">
         {/* Adaptive Sidebar */}
         <div className="w-48 lg:w-60 border-r border-white/5 bg-black/40 flex flex-col py-6 gap-8 shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.01] to-transparent pointer-events-none"></div>
            
            <div className="px-4 lg:px-6 relative z-10">
               <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.25em] mb-4 pl-3 border-l-2 border-slate-800">Operational CNS</div>
               <div className="space-y-1.5">
                  {[
                    { id: 'finance', label: 'FINANCE PANORAMA', icon: <BarChart3 size={14} /> },
                    { id: 'treasury', label: 'GLOBAL TREASURY', icon: <Globe size={14} /> },
                    { id: 'supply', label: 'SUPPLY CHAIN', icon: <Server size={14} /> }
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[10px] font-black transition-all group/btn ${activeTab === tab.id ? 'bg-indigo-500/10 text-white border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.02] border border-transparent'}`}
                    >
                       <div className="flex items-center gap-3">
                          <span className={activeTab === tab.id ? 'text-indigo-400' : 'text-slate-600 group-hover/btn:text-slate-400 transition-colors'}>{tab.icon}</span>
                          <span className="tracking-widest uppercase">{tab.label}</span>
                       </div>
                       {activeTab === tab.id && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>}
                    </button>
                  ))}
               </div>
            </div>
            
            <div className="px-4 lg:px-6 relative z-10">
               <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.25em] mb-4 pl-3 border-l-2 border-slate-800">Intelligence Layers</div>
               <div className="space-y-1.5">
                  {[
                    { id: 'alert', label: 'BUSINESS ALERTS', icon: <Shield size={14} /> },
                    { id: 'decision', label: 'AI DECISION SUPPORT', icon: <Cpu size={14} /> }
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[10px] font-black transition-all group/btn ${activeTab === tab.id ? 'bg-cyan-500/10 text-white border border-cyan-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.02] border border-transparent'}`}
                    >
                       <div className="flex items-center gap-3">
                          <span className={activeTab === tab.id ? 'text-cyan-400' : 'text-slate-600 group-hover/btn:text-slate-400 transition-colors'}>{tab.icon}</span>
                          <span className="tracking-widest uppercase">{tab.label}</span>
                       </div>
                       {activeTab === tab.id && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>}
                    </button>
                  ))}
               </div>
            </div>

            <div className="mt-auto p-6">
               <div className="bg-gradient-to-tr from-cyan-950/20 to-indigo-950/20 border border-white/[0.05] p-3 rounded-lg flex items-center justify-between group/status cursor-help">
                  <div className="flex flex-col">
                     <span className="text-[9px] font-bold text-slate-500 tracking-tighter uppercase whitespace-nowrap">Core Engine</span>
                     <span className="text-[10px] font-black text-slate-300">V3.0 STABLE</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               </div>
            </div>
         </div>

         {/* Refined Content Area */}
         <div className="flex-1 p-6 sm:p-8 bg-[#030303] relative h-full overflow-hidden">
            {/* Fine Metric Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
               backgroundSize: '32px 32px'
            }}></div>

            <div className="relative z-10 w-full h-full flex flex-col pt-2">
               <AnimatePresence mode="wait">
                 {renderContent()}
               </AnimatePresence>
            </div>
         </div>
      </div>
    </motion.div>
  )
})

DashboardPreviewV2.displayName = 'DashboardPreviewV2'
