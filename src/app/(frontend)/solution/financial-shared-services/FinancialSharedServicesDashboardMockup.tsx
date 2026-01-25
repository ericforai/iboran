'use client'

import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  FileText, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  PieChart, 
  Bell,
  Search,
  ArrowUpRight,
  ScanLine,
  Zap
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export default function FinancialSharedServicesDashboardMockup({ type: _type = 'default' }: { type?: string }) {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-xs font-sans">
      {/* Sidebar - Pro Dark Theme */}
      <div className="w-14 md:w-48 bg-[#0F172A] text-slate-400 flex flex-col border-r border-slate-800 shrink-0">
        <div className="h-14 flex items-center px-4 border-b border-slate-800">
          <div className="w-6 h-6 bg-gradient-to-br from-[#E60012] to-[#ff4d4f] rounded flex items-center justify-center text-white font-bold mr-2 text-[10px] shadow-sm">Y</div>
          <span className="hidden md:inline font-bold text-white tracking-wide">FSSC Cloud</span>
        </div>
        
        <div className="p-3 space-y-1">
          <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold px-3 mb-2 mt-2 hidden md:block">运营中心</div>
          
          <SidebarItem icon={LayoutDashboard} label="工作台" active />
          <SidebarItem icon={FileText} label="单据审核" />
          <SidebarItem icon={ScanLine} label="影像中心" />
          <SidebarItem icon={CheckCircle2} label="质量检核" />
          
          <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold px-3 mb-2 mt-4 hidden md:block">分析报表</div>
          <SidebarItem icon={BarChart3} label="运营绩效" />
          <SidebarItem icon={PieChart} label="费用分析" />
        </div>
        
        <div className="mt-auto p-4 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="hidden md:block">
              <div className="text-white text-xs">Jessica Doe</div>
              <div className="text-slate-500 text-[10px]">财务主管</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-50 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-slate-800 text-sm whitespace-nowrap">我的工作台</h2>
            <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 w-48 lg:w-64">
              <Search size={14} className="text-slate-400 mr-2" />
              <input type="text" placeholder="搜索单据..." className="bg-transparent border-none outline-none text-[10px] w-full text-slate-600" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <div className="relative">
              <Bell size={18} className="hover:text-slate-600 cursor-pointer" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
            </div>
            <div className="w-px h-4 bg-slate-200"></div>
            <SettingsIcon />
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-4 flex-1 overflow-hidden flex flex-col gap-4">
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard 
              title="待处理单据" 
              value="128" 
              trend="+12%" 
              trendUp={false} // Red implies backlog, but typically +tasks means busy. Let's say +12% vs yesterday
              icon={Clock}
              color="text-blue-600"
              bg="bg-blue-50"
            />
            <MetricCard 
              title="智能识别率" 
              value="99.8%" 
              trend="+0.2%" 
              trendUp={true}
              icon={ScanLine}
              color="text-purple-600"
              bg="bg-purple-50"
            />
            <MetricCard 
              title="自动稽核通过率" 
              value="85.4%" 
              trend="+5.1%" 
              trendUp={true}
              icon={Zap}
              color="text-amber-600"
              bg="bg-amber-50"
            />
            <MetricCard 
              title="平均处理时长" 
              value="0.8天" 
              trend="-15%" 
              trendUp={true} // Lower is better
              icon={CheckCircle2}
              color="text-green-600"
              bg="bg-green-50"
            />
          </div>

          {/* Main Visuals Area */}
          <div className="grid grid-cols-3 gap-4 flex-1 h-full min-h-0">
            {/* Left: Task Flow / Status */}
            <div className="col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-700">单据处理趋势 (近7天)</h3>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div> 自动处理
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div> 人工干预
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex justify-between gap-3 px-2 pb-1 relative overflow-hidden">
                {/* Subtle X-Axis */}
                <div className="absolute bottom-[28px] left-0 right-0 h-[1px] bg-slate-100 z-0"></div>
                
                {[40, 65, 55, 80, 72, 95, 88].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end gap-1.5 group relative z-10 h-full">
                    <div className="flex-1 relative min-h-0 w-full px-0.5">
                      <div className="absolute inset-0 flex flex-col justify-end overflow-hidden rounded-t-sm">
                        {/* Auto Process (Top) */}
                        <motion.div 
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="w-full bg-gradient-to-t from-blue-600 to-blue-400 opacity-90 group-hover:opacity-100 transition-opacityOrigin"
                          style={{ height: `${h * 0.8}%`, transformOrigin: 'bottom' }}
                        />
                        {/* Manual Intervention (Bottom) */}
                        <motion.div 
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                          className="w-full bg-slate-200"
                          style={{ height: `${h * 0.2}%`, transformOrigin: 'bottom' }}
                        />
                      </div>
                    </div>
                    <div className="text-center text-[9px] text-slate-400 font-medium shrink-0">
                      {(new Date().getDate() - 6 + i)}日
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Operational Efficiency */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col">
              <div className="font-bold text-slate-700 mb-4">共享中心效率</div>
              <div className="flex-1 flex flex-col gap-4">
                <EfficiencyBar label="单据初审" score={92} color="bg-gradient-to-r from-emerald-400 to-emerald-500" />
                <EfficiencyBar label="财务复核" score={85} color="bg-gradient-to-r from-blue-400 to-blue-600" />
                <EfficiencyBar label="资金支付" score={98} color="bg-gradient-to-r from-indigo-400 to-indigo-600" />
                <EfficiencyBar label="凭证生成" score={100} color="bg-gradient-to-r from-purple-400 to-purple-600" />
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-slate-500 text-[10px] mb-1">
                    <span>人均单据量</span>
                    <span className="font-bold text-slate-700">320 单/月</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500 text-[10px]">
                    <span>自动化占比</span>
                    <span className="font-bold text-slate-700">78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: LucideIcon; label: string; active?: boolean }) {
  return (
    <div className={`
      px-3 py-2.5 rounded-lg flex items-center gap-3 cursor-pointer transition-all
      ${active 
        ? 'bg-gradient-to-r from-[#E60012] to-[#ff4d4f] text-white shadow-lg shadow-red-900/20 font-medium' 
        : 'hover:bg-slate-800 hover:text-white'
      }
    `}>
      <Icon size={16} />
      <span className="hidden md:inline text-xs">{label}</span>
      {active && <div className="ml-auto w-1 h-1 bg-white rounded-full hidden md:block"></div>}
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: string
  trend: string
  trendUp: boolean
  icon: LucideIcon
  color: string
  bg: string
}

function MetricCard({ title, value, trend, trendUp, icon: Icon, color, bg }: MetricCardProps) {
  return (
    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between h-20 hover:shadow-md transition-shadow shrink-0">
      <div className="flex justify-between items-start">
        <div className={`p-1 rounded-lg ${bg} ${color}`}>
          <Icon size={14} />
        </div>
        <div className={`flex items-center text-[9px] font-bold ${trendUp ? 'text-green-500' : 'text-slate-400'}`}>
          {trendUp ? <ArrowUpRight size={10} className="mr-0.5" /> : null}
          {trend}
        </div>
      </div>
      <div className="mt-1">
        <div className="text-[9px] text-slate-400 mb-0.5 truncate">{title}</div>
        <div className="text-base font-black text-slate-800 tracking-tighter leading-none">{value}</div>
      </div>
    </div>
  )
}

interface EfficiencyBarProps {
  label: string
  score: number
  color: string
}

function EfficiencyBar({ label, score, color }: EfficiencyBarProps) {
  return (
    <div>
      <div className="flex justify-between text-[10px] mb-1.5">
        <span className="text-slate-600 font-medium">{label}</span>
        <span className="text-slate-400">{score}%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`}
          style={{ width: `${score}%`, transformOrigin: 'left' }}
        />
      </div>
    </div>
  )
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-slate-600 cursor-pointer">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
