
'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  PieChart, 
 
  Activity, 
  TrendingUp, 
  Zap,
  Globe,
  Database,
  LayoutGrid,
  Settings,
  Maximize2
} from 'lucide-react'

export default function BIDashboardMockup() {
  return (
    <div className="w-full aspect-[16/9] bg-[#0F172A] rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col relative group">
      {/* Background Grid Pattern - Tech Feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header - Digital Large Screen Style */}
      <div className="h-14 border-b border-slate-700/50 bg-[#0F172A]/90 backdrop-blur flex items-center justify-between px-6 z-10 relative">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="text-white font-bold tracking-wider">YonBI 智能分析</div>
            <div className="text-[10px] text-blue-400">ENTERPRISE INTELLIGENCE</div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-slate-300">实时数据接入中</span>
          </div>
          <div className="text-slate-400 text-xs">2024-03-24 10:42:30</div>
          <Maximize2 className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative z-10">
        {/* Sidebar */}
        <div className="w-16 border-r border-slate-700/50 bg-[#1E293B]/50 flex flex-col items-center py-6 gap-6">
          {[LayoutGrid, Database, Activity, Globe, Settings].map((Icon, idx) => (
            <div key={idx} className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all ${idx === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>
              <Icon size={18} />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 p-4 grid grid-cols-12 gap-4">
          
          {/* Left Column: Key Metrics */}
          <div className="col-span-3 flex flex-col gap-4">
            <MetricCard title="总销售额 (YTD)" value="¥ 28.4M" trend="+14.2%" icon={Activity} color="text-blue-400" />
            <MetricCard title="活跃用户" value="8,245" trend="+5.8%" icon={UsersIcon} color="text-emerald-400" />
            <MetricCard title="订单转化率" value="2.4%" trend="-0.5%" icon={Zap} color="text-amber-400" />
            
            {/* Mini Chart */}
            <div className="flex-1 bg-[#1E293B]/40 rounded-lg border border-slate-700/50 p-4">
              <div className="text-xs text-slate-400 mb-2 font-medium">区域销售占比</div>
              <div className="flex items-center justify-center h-full">
                <div className="relative w-24 h-24 rounded-full border-4 border-slate-700 flex items-center justify-center">
                  <PieChart className="w-10 h-10 text-blue-500 opacity-60" />
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Map Visualization */}
          <div className="col-span-6 bg-[#1E293B]/40 rounded-lg border border-slate-700/50 p-4 relative flex flex-col">
             <div className="flex justify-between items-center mb-4">
                <div className="text-sm font-bold text-white">全球业务实时监控</div>
                <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
             </div>
             
             {/* Map Placeholder */}
             <div className="flex-1 relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-[80%] h-[80%] border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                   <div className="w-[60%] h-[60%] border border-blue-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </div>
                <Globe className="w-32 h-32 text-blue-500/20" />
                
                {/* Floating Data Points */}
                <motion.div 
                  className="absolute top-[30%] left-[30%]"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_2px_rgba(96,165,250,0.5)]" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-[40%] right-[30%]"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" />
                </motion.div>
             </div>
          </div>

          {/* Right Column: Trending Lists */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="flex-1 bg-[#1E293B]/40 rounded-lg border border-slate-700/50 p-4">
               <div className="text-xs text-slate-400 mb-3 font-medium flex items-center justify-between">
                  <span>畅销商品 Top 5</span>
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
               </div>
               <div className="space-y-3">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="flex items-center gap-2 group/item">
                       <div className={`w-4 h-4 rounded-sm flex items-center justify-center text-[10px] font-bold ${i < 4 ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-700 text-slate-400'}`}>
                         {i}
                       </div>
                       <div className="h-1.5 flex-1 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-blue-500" 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${100 - i * 15}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="h-40 bg-[#1E293B]/40 rounded-lg border border-slate-700/50 p-4">
                <div className="text-xs text-slate-400 mb-2 font-medium">报警事件</div>
                <div className="space-y-2">
                    <div className="bg-red-500/10 border border-red-500/20 p-2 rounded text-[10px] text-red-400 flex gap-2 items-center">
                        <Zap size={12} /> 库存预警：华东仓库
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 p-2 rounded text-[10px] text-amber-400 flex gap-2 items-center">
                        <Activity size={12} /> 销量异常：Sku-2081
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: string
  trend: string
  icon: React.ElementType
  color: string
}

function MetricCard({ title, value, trend, icon: Icon, color }: MetricCardProps) {
    return (
        <div className="bg-[#1E293B]/40 rounded-lg border border-slate-700/50 p-4 relative overflow-hidden">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-slate-400">{title}</span>
                <Icon className={`w-4 h-4 ${color} opacity-80`} />
            </div>
            <div className="text-xl font-bold text-white mb-1">{value}</div>
            <div className="text-[10px] flex items-center gap-1">
                 <span className={`${trend.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>{trend}</span>
                 <span className="text-slate-500">vs 上月</span>
            </div>
        </div>
    )
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    return <Zap {...props} /> // Fallback using existing import
}
