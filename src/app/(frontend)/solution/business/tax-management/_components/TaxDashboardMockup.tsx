'use client'

import { motion } from 'framer-motion'
// ... existing imports ...
import { 
  PieChart, 
  BarChart3, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Calendar,
  Building2,
  Bell,
  Search,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Settings as SettingsIcon, // Renamed import
} from 'lucide-react'

// ... existing MetricCard definition ...

function SidebarIcon({ icon: Icon, active = false }: { icon: any, active?: boolean }) {
  return (
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all ${active ? 'bg-[#E60012] text-white shadow-lg shadow-red-900/20' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}>
      <Icon size={16} strokeWidth={2} />
    </div>
  )
}

function MetricCardCompact({ title, value, trend, trendUp, trendGood = trendUp, color, icon: Icon }: MetricCardProps) {
  const isPositive = trendUp ? trendGood : !trendGood
  
  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    purple: "bg-purple-50 text-purple-600"
  }

  return (
    <div className="flex-1 bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between min-w-0">
      <div className="flex justify-between items-start mb-1">
        <div className={`p-1.5 rounded-md ${colorMap[color]}`}>
          <Icon size={14} />
        </div>
        <div className={`flex items-center gap-0.5 text-[9px] font-bold px-1 py-0.5 rounded ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
          {trendUp ? '↑' : '↓'} {trend}
        </div>
      </div>
      <div>
        <div className="text-slate-400 text-[9px] mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
        <div className="text-sm font-bold text-slate-700 whitespace-nowrap overflow-hidden text-ellipsis">{value}</div>
      </div>
    </div>
  )
}

function StatusItemSmall({ label, status }: { label: string, status: 'done' | 'wait' }) {
  return (
    <div className="flex items-center justify-between text-[10px] py-1">
      <div className="flex items-center gap-2">
         <div className={`w-1.5 h-1.5 rounded-full ${status === 'done' ? 'bg-green-500' : 'bg-amber-400'}`}></div>
         <span className="text-slate-600">{label}</span>
      </div>
      {status === 'done' ? (
        <span className="text-green-600 font-bold text-[9px] bg-green-50 px-1 rounded">完成</span>
      ) : (
        <span className="text-amber-600 font-bold text-[9px] bg-amber-50 px-1 rounded">待办</span>
      )}
    </div>
  )
}


export default function TaxDashboardMockup() {
  return (
    <div className="bg-slate-50 rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-xs font-sans">
      {/* Sidebar - Compact Mode (Icon Only) to save space */}
      <div className="w-14 bg-[#001529] text-slate-400 flex flex-col border-r border-slate-800 flex-shrink-0 items-center py-4 gap-4">
        <div className="w-8 h-8 rounded bg-[#E60012] flex items-center justify-center text-white font-bold text-sm mb-2 flex-shrink-0">T</div>
        
        <SidebarIcon icon={ShieldCheck} active />
        <SidebarIcon icon={FileText} />
        <SidebarIcon icon={PieChart} />
        <SidebarIcon icon={Building2} />
        <div className="w-8 h-px bg-slate-700 my-1"></div>
        <SidebarIcon icon={BarChart3} />
        <SidebarIcon icon={Calendar} />
        
        <div className="mt-auto pb-2">
           <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 hover:text-white cursor-pointer transition-colors">
             <SettingsIcon size={14} />
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
        {/* Header - Minimalist */}
        <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4 shadow-sm flex-shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-slate-700 whitespace-nowrap">税务合规台</h2>
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-[10px] font-medium border border-green-100 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span>健康: 98</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <Search size={14} className="text-slate-400" />
             <div className="relative">
              <Bell size={14} className="text-slate-500" />
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></div>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">JD</div>
          </div>
        </div>

        {/* Dashboard Grid - Optimized for ~600px width */}
        <div className="flex-1 p-3 overflow-hidden overflow-y-auto">
          {/* Top Row: Metrics - Flex to ensure even distribution without squishing */}
          <div className="flex gap-3 mb-3">
             <MetricCardCompact 
                title="应纳税额" 
                value="¥ 284万" 
                trend="+12%" 
                trendUp 
                color="blue"
                icon={FileText}
              />
              <MetricCardCompact 
                title="风险项" 
                value="3 项" 
                trend="-2" 
                trendUp={false} 
                trendGood={true}
                color="amber"
                icon={AlertTriangle}
              />
              <MetricCardCompact 
                title="自动申报" 
                value="99.8%" 
                trend="+0.5%" 
                trendUp 
                color="purple"
                icon={CheckCircle2}
              />
          </div>

          {/* Bottom Row: split 2:1 */}
          <div className="flex gap-3 h-[calc(100%-80px)]">
             {/* Main Chart */}
             <div className="flex-[2] bg-white rounded-xl border border-slate-200 p-3 shadow-sm flex flex-col min-w-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-700 text-[11px]">税负分析</h3>
                  <div className="bg-slate-100 rounded p-0.5 flex">
                    <div className="bg-white shadow-sm rounded px-2 py-0.5 text-[10px] text-slate-800 scale-90 origin-center">增值税</div>
                    <div className="px-2 py-0.5 text-[10px] text-slate-400 scale-90 origin-center">所得税</div>
                  </div>
                </div>
                <div className="flex-1 flex items-end justify-between gap-1">
                   {[40, 60, 45, 70, 50, 80, 55, 45, 65, 50, 60, 90].map((h,i) =>(
                     <div key={i} className="w-full bg-blue-50/50 rounded-t-sm relative h-full group">
                        <motion.div 
                          className="absolute bottom-0 w-full bg-[#0052D9] rounded-t-sm opacity-80"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: i*0.05 }}
                        />
                     </div>
                   ))}
                </div>
             </div>

             {/* Right List */}
             <div className="flex-1 bg-white rounded-xl border border-slate-200 p-3 shadow-sm flex flex-col min-w-0">
                <h3 className="font-bold text-slate-700 text-[11px] mb-3">申报进度</h3>
                <div className="w-full h-1.5 bg-slate-100 rounded-full mb-3">
                   <div className="w-[85%] h-full bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex-1 space-y-2 overflow-y-auto pr-1">
                   <StatusItemSmall label="增值税" status="done" />
                   <StatusItemSmall label="所得税" status="done" />
                   <StatusItemSmall label="印花税" status="wait" />
                   <StatusItemSmall label="个税" status="wait" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#0052D9] text-white shadow-md' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}>
      <Icon size={16} />
      <span className="hidden md:inline font-medium">{label}</span>
    </div>
  )
}


interface MetricCardProps {
  title: string
  value: string
  trend: string
  trendUp: boolean
  trendGood?: boolean
  color: 'blue' | 'amber' | 'purple'
  icon: any
}

function MetricCard({ title, value, trend, trendUp, trendGood = trendUp, color, icon: Icon }: MetricCardProps) {
  const isPositive = trendUp ? trendGood : !trendGood // Good if trend matches desired direction
  
  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    purple: "bg-purple-50 text-purple-600"
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-3">
        <div className={`p-2 rounded-lg ${colorMap[color]}`}>
          <Icon size={16} />
        </div>
        <div className={`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
          {trendUp ? '↑' : '↓'} {trend}
        </div>
      </div>
      <div className="text-slate-500 text-[10px] mb-1">{title}</div>
      <div className="text-lg font-bold text-slate-800">{value}</div>
    </motion.div>
  )
}

interface StatusItemProps {
  label: string
  status: 'completed' | 'pending'
  date: string
}

function StatusItem({ label, status, date }: StatusItemProps) {
  return (
    <div className="flex items-center justify-between text-[11px]">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${status === 'completed' ? 'bg-green-500' : 'bg-amber-400'}`}></div>
        <span className="text-slate-600">{label}</span>
      </div>
      <span className={`font-medium ${status === 'completed' ? 'text-slate-400' : 'text-amber-600'}`}>{date}</span>
    </div>
  )
}

interface RiskAlertCardProps {
  level: 'high' | 'medium' | 'low'
  title: string
  desc: string
}

function RiskAlertCard({ level, title, desc }: RiskAlertCardProps) {
  const levelColor: Record<string, string> = {
    high: "border-l-red-500 bg-red-50/50",
    medium: "border-l-amber-500 bg-amber-50/50",
    low: "border-l-blue-400 bg-blue-50/50"
  }
  
  return (
    <div className={`border-l-[3px] p-3 rounded-r-md ${levelColor[level]} transition-all hover:pl-4`}>
      <div className="flex items-center gap-2 mb-1">
        <AlertTriangle size={12} className={level === 'high' ? 'text-red-500' : level === 'medium' ? 'text-amber-500' : 'text-blue-400'} />
        <span className="font-bold text-slate-700 text-[11px]">{title}</span>
      </div>
      <div className="text-[10px] text-slate-500 leading-relaxed pl-5">
        {desc}
      </div>
    </div>
  )
}
