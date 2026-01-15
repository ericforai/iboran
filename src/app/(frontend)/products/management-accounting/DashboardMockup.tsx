'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, BarChart2, TrendingUp, DollarSign, Activity, Users, Database } from 'lucide-react'

interface MockupProps {
  type: 'cost-analysis' | 'smart-closing' | 'standard-cost' | 'multi-org' | 'hero-banner'
}

export default function DashboardMockup({ type }: MockupProps) {
  const renderContent = () => {
    switch (type) {
      case 'cost-analysis':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
               <h5 className="font-bold text-slate-800">产品盈利能力穿透</h5>
               <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">实时更新</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase">毛利贡献</p>
                  <p className="text-sm font-bold text-slate-700">¥{(842 - i * 120)}k</p>
                </div>
              ))}
            </div>
            <div className="h-40 bg-slate-50 rounded-xl border border-slate-100 flex items-end justify-between px-4 pb-2">
               {[40, 70, 45, 90, 65, 80].map((h, i) => (
                 <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className="w-8 bg-blue-500 rounded-t-sm"
                 />
               ))}
            </div>
          </div>
        )
      case 'smart-closing':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
               <h5 className="font-bold text-slate-800">智能月结工作台</h5>
               <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-slate-400">进行中</span>
               </div>
            </div>
            <div className="space-y-3">
               {[
                 { label: '事项分录生产', status: 'done', progress: 100 },
                 { label: '成本卷积计算', status: 'active', progress: 65 },
                 { label: '结转规则验证', status: 'pending', progress: 0 }
               ].map((step, i) => (
                 <div key={i} className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm transition-all hover:bg-slate-50">
                    <div className="flex justify-between text-xs mb-2">
                       <span className="text-slate-600 font-medium">{step.label}</span>
                       <span className={step.status === 'done' ? 'text-green-500' : 'text-blue-500'}>{step.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${step.progress}%` }}
                          className={`h-full ${step.status === 'done' ? 'bg-green-500' : 'bg-blue-500'}`}
                       />
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )
      case 'standard-cost':
         return (
           <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                 <h5 className="font-bold text-slate-800">标准成本差异监控</h5>
              </div>
              <div className="flex space-x-4">
                 <div className="flex-1 aspect-square rounded-full border-[10px] border-slate-100 flex items-center justify-center relative">
                    <div className="text-center">
                       <p className="text-[10px] text-slate-400">总价差</p>
                       <p className="text-lg font-bold text-red-500">-2.4%</p>
                    </div>
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                       <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#ef4444" strokeWidth="10" strokeDasharray="60 300" />
                    </svg>
                 </div>
                 <div className="flex-1 space-y-2 py-2">
                    <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 rounded-full bg-blue-500" />
                       <span className="text-[10px] text-slate-500">量差: +1.2%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 rounded-full bg-red-500" />
                       <span className="text-[10px] text-slate-500">价差: -3.6%</span>
                    </div>
                 </div>
              </div>
              <div className="bg-slate-900 text-white p-3 rounded-lg font-mono text-[10px]">
                 <p className="text-blue-400">{'// Variance Analysis'}</p>
                 <p>SELECT material_id, std_cost, act_cost</p>
                 <p>FROM cost_records WHERE diff {'>'} 0.05;</p>
              </div>
           </div>
         )
      case 'multi-org':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
               <h5 className="font-bold text-slate-800">多组织成本映射</h5>
            </div>
            <div className="flex items-center justify-between px-10 relative">
               <div className="z-10 bg-blue-50 border border-blue-200 p-3 rounded-xl text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white"><Users className="w-4 h-4" /></div>
                  <p className="text-[10px] font-bold text-blue-800">上海中心</p>
               </div>
               <div className="z-10 bg-indigo-50 border border-indigo-200 p-3 rounded-xl text-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white"><Activity className="w-4 h-4" /></div>
                  <p className="text-[10px] font-bold text-indigo-800">全球合并</p>
               </div>
               <div className="z-10 bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                  <div className="w-8 h-8 bg-slate-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white"><Database className="w-4 h-4" /></div>
                  <p className="text-[10px] font-bold text-slate-800">工厂 B</p>
               </div>
               {/* Arcs */}
               <svg className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-12 overflow-visible">
                  <path d="M 60 0 Q 150 -40 240 0" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 440 0 Q 300 -40 240 0" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
               </svg>
            </div>
            <div className="text-center">
               <span className="text-[10px] bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                  双口径实时对账
               </span>
            </div>
          </div>
        )
      case 'hero-banner':
        return (
          <div className="relative w-full h-full flex flex-col">
             {/* Header */}
             <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-slate-800 px-4 py-1 rounded-full text-xs text-slate-400 font-mono flex items-center gap-2">
                   <Activity className="w-3 h-3 text-green-500 animate-pulse" />
                   System Status: Live
                </div>
             </div>
             
             {/* Main Content Grid */}
             <div className="grid grid-cols-12 gap-6 flex-1">
                {/* Left Panel: Cost Structure */}
                <div className="col-span-12 md:col-span-4 space-y-4">
                   <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                      <h6 className="text-slate-400 text-xs uppercase font-bold mb-3">实时成本构成</h6>
                      <div className="space-y-3">
                         {['直接材料', '直接人工', '制造费用', '外协成本'].map((label, i) => (
                           <div key={i}>
                              <div className="flex justify-between text-xs text-slate-300 mb-1">
                                 <span>{label}</span>
                                 <span>{(32.5 + i * 4.2).toFixed(1)}%</span>
                              </div>
                              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${45 + (i * 15) % 50}%` }}
                                    transition={{ duration: 1.5, delay: i * 0.2 }}
                                    className="h-full bg-blue-500"
                                 />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                   
                   <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center justify-between">
                      <div>
                         <p className="text-slate-400 text-xs">当月预估毛利</p>
                         <p className="text-xl font-bold text-white mt-1">¥ 2,845,290</p>
                      </div>
                      <div className="h-10 w-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                         <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                   </div>
                </div>

                {/* Center Panel: Global Map Visualization */}
                <div className="col-span-12 md:col-span-8 bg-slate-800/30 rounded-xl border border-slate-700/50 relative overflow-hidden flex items-center justify-center min-h-[200px]">
                   {/* Abstract Map Nodes */}
                   {[1, 2, 3, 4, 5].map((node, i) => (
                      <motion.div
                         key={i}
                         className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"
                         initial={{ opacity: 0, scale: 0 }}
                         animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
                         transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                         style={{ 
                            top: `${20 + (i * 17) % 60}%`, 
                            left: `${10 + (i * 23) % 80}%` 
                         }}
                      />
                   ))}
                   {/* Connecting Lines */}
                   <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
                      <motion.path 
                         d="M 100 150 Q 250 50 400 150 T 700 150"
                         fill="none"
                         stroke="url(#gradient-line)"
                         strokeWidth="2"
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <defs>
                         <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="transparent" />
                         </linearGradient>
                      </defs>
                   </svg>
                   
                   <div className="absolute top-4 left-4">
                      <p className="text-xs font-mono text-slate-400 tracking-wider">GLOBAL OPERATIONS CENTER</p>
                   </div>
                </div>
             </div>
          </div>
        )
    }
  }

  const isHero = type === 'hero-banner'
  
  return (
    <div className={`w-full bg-white rounded-2xl border border-slate-200 shadow-xl p-6 overflow-hidden ${isHero ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-slate-700/50 shadow-2xl min-h-[460px]' : 'min-h-[320px]'}`}>
       {renderContent()}
    </div>
  )
}
