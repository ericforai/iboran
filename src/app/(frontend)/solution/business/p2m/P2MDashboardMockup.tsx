'use client'

import { motion } from 'framer-motion'
import { Activity, BarChart3, Settings, ShieldCheck, Truck, Users, AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function P2MDashboardMockup() {
  return (
    <div className="bg-[#0f172a] rounded-xl shadow-2xl border border-slate-700 overflow-hidden w-full aspect-[16/10] flex text-xs font-mono text-slate-300 relative group">
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20"></div>

      {/* Sidebar */}
      <div className="w-16 bg-[#020617] border-r border-slate-800 flex flex-col items-center py-4 gap-6 z-10">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">M</div>
        <div className="flex flex-col gap-4 w-full px-2">
          <div className="p-2 bg-blue-600/20 text-blue-400 rounded cursor-pointer relative">
            <Activity size={18} />
            <div className="absolute right-1 top-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          </div>
          <div className="p-2 hover:bg-slate-800 rounded cursor-pointer transition-colors text-slate-500 hover:text-slate-300">
            <BarChart3 size={18} />
          </div>
          <div className="p-2 hover:bg-slate-800 rounded cursor-pointer transition-colors text-slate-500 hover:text-slate-300">
             <Truck size={18} />
          </div>
          <div className="p-2 hover:bg-slate-800 rounded cursor-pointer transition-colors text-slate-500 hover:text-slate-300">
             <Users size={18} />
          </div>
        </div>
        <div className="mt-auto p-2 text-slate-600 hover:text-slate-400 cursor-pointer">
          <Settings size={18} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#0f172a] relative z-10">
        {/* Header */}
        <div className="h-10 border-b border-slate-800 flex items-center justify-between px-4 bg-[#020617]/50">
          <div className="flex items-center gap-2">
             <span className="text-blue-500 font-bold">智慧工厂</span>
             <span className="text-slate-600">/</span>
             <span className="text-white">指挥中心</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-900/30 border border-green-800 rounded text-[10px] text-green-400">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
               实时
             </div>
             <div className="text-slate-500">2024-05-20 14:30:45</div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-4 grid grid-cols-12 grid-rows-6 gap-3 flex-1 overflow-hidden">
           
           {/* KPI Cards (Top Row) */}
           <div className="col-span-3 row-span-2 bg-[#1e293b] rounded-lg border border-slate-700 p-3 flex flex-col justify-between relative overflow-hidden">
             <div className="flex justify-between items-start z-10">
               <span className="text-slate-400 text-[10px] uppercase tracking-wider">设备综合效率 (OEE)</span>
               <Activity size={14} className="text-blue-500" />
             </div>
             <div className="text-2xl font-bold text-white z-10">87.5<span className="text-sm text-slate-500 font-normal">%</span></div>
             <div className="flex items-center gap-1 text-[10px] text-green-400 z-10">
               <span className="rotate-180">▼</span> +2.4% 较目标
             </div>
             {/* BG Chart */}
             <div className="absolute bottom-0 left-0 w-full h-8 flex items-end justify-between px-1 opacity-20">
                <div className="w-1/6 h-2 bg-blue-500 rounded-t-sm"></div>
                <div className="w-1/6 h-4 bg-blue-500 rounded-t-sm"></div>
                <div className="w-1/6 h-3 bg-blue-500 rounded-t-sm"></div>
                <div className="w-1/6 h-6 bg-blue-500 rounded-t-sm"></div>
                <div className="w-1/6 h-5 bg-blue-500 rounded-t-sm"></div>
             </div>
           </div>

           <div className="col-span-3 row-span-2 bg-[#1e293b] rounded-lg border border-slate-700 p-3 flex flex-col justify-between">
             <div className="flex justify-between items-start">
               <span className="text-slate-400 text-[10px] uppercase tracking-wider">实时产量</span>
               <Truck size={14} className="text-purple-500" />
             </div>
             <div className="text-2xl font-bold text-white">1,240<span className="text-sm text-slate-500 font-normal"> 件</span></div>
             <div className="w-full bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
               <div className="w-[75%] bg-purple-500 h-full rounded-full"></div>
             </div>
           </div>

           <div className="col-span-3 row-span-2 bg-[#1e293b] rounded-lg border border-slate-700 p-3 flex flex-col justify-between">
             <div className="flex justify-between items-start">
               <span className="text-slate-400 text-[10px] uppercase tracking-wider">良品率</span>
               <ShieldCheck size={14} className="text-green-500" />
             </div>
             <div className="text-2xl font-bold text-white">99.8<span className="text-sm text-slate-500 font-normal">%</span></div>
             <div className="flex gap-1 mt-2">
               <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
               <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
               <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
             </div>
           </div>

            <div className="col-span-3 row-span-6 bg-[#1e293b] rounded-lg border border-slate-700 p-3 flex flex-col">
              <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-2">实时告警</div>
              <div className="space-y-2 overflow-hidden relative">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-2 bg-slate-800/50 rounded border border-slate-700/50 flex gap-2 items-start"
                  >
                    {i === 1 ? <AlertTriangle size={12} className="text-yellow-500 mt-0.5 shrink-0" /> : <CheckCircle2 size={12} className="text-slate-500 mt-0.5 shrink-0" />}
                    <div>
                       <div className={`text-[10px] font-bold ${i === 1 ? 'text-yellow-100' : 'text-slate-300'}`}>
                         {i === 1 ? '设备维护请求 - 机械臂 #03' : `批次 #${3000 + i} 生产完成`}
                       </div>
                       <div className="text-[9px] text-slate-500">10 分钟前</div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Fade out bottom */}
                <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-[#1e293b] to-transparent"></div>
              </div>
            </div>

           {/* Production Line Status (Main Area) */}
           <div className="col-span-9 row-span-4 bg-[#1e293b] rounded-lg border border-slate-700 p-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div className="flex justify-between items-center mb-4 relative z-10">
                 <div className="text-white font-bold">产线 A - 总装线</div>
                 <div className="flex gap-2 text-[10px]">
                    <span className="px-2 py-0.5 bg-blue-900/30 text-blue-300 border border-blue-800 rounded">自动模式</span>
                    <span className="px-2 py-0.5 bg-slate-700 text-slate-300 rounded">早班</span>
                 </div>
              </div>

              {/* Simplified Gantt / Line Visualization */}
              <div className="relative z-10 mt-6 space-y-6">
                 {['工序 1: 焊接', '工序 2: 涂装', '工序 3: 总装'].map((stage, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                       <div className="w-24 text-right text-slate-400 text-[10px]">{stage}</div>
                       <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden relative">
                          <motion.div 
                             className={`h-full rounded-full ${idx === 1 ? 'bg-yellow-500' : 'bg-blue-500'}`}
                             initial={{ width: 0 }}
                             animate={{ width: `${85 - idx * 20}%` }}
                             transition={{ duration: 1.5, delay: 0.2 }}
                          ></motion.div>
                          {/* Moving highlight */}
                          <motion.div 
                            className="absolute top-0 bottom-0 w-10 bg-white/20 skew-x-12"
                            animate={{ x: [0, 300] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                       </div>
                       <div className="w-8 text-[10px] text-white">{85 - idx * 20}%</div>
                    </div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </div>
  )
}
