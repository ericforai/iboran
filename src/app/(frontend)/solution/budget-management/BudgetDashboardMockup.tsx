'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  TrendingUp,
  CheckCircle2,
  Layers,
  Zap,
  LayoutDashboard,
  FileText,
  Settings,
  Bell,
  Search,
  Globe
} from 'lucide-react'

interface BudgetDashboardMockupProps {
  activeTab?: string
}

export default function BudgetDashboardMockup({ activeTab: _activeTab = 'default' }: BudgetDashboardMockupProps) {
  return (
    <div className="bg-[#F8FAFC] rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-[10px] md:text-xs">
      {/* Sidebar - Dark Professional Sidebar */}
      <div className="w-12 md:w-40 bg-[#001529] text-slate-400 flex flex-col">
        <div className="h-10 flex items-center px-4 border-b border-white/10 shrink-0">
          <div className="w-5 h-5 bg-[#E60012] rounded flex items-center justify-center mr-2">
            <Target className="text-white w-3 h-3" />
          </div>
          <span className="hidden md:inline font-bold text-white text-[12px] tracking-tight">YonBIP 预算</span>
        </div>
        
        <div className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto scrollbar-hide">
          <SidebarItem icon={<LayoutDashboard size={14} />} label="系统首页" active />
          <SidebarItem icon={<Layers size={14} />} label="预算建模" />
          <SidebarItem icon={<FileText size={14} />} label="预算编报" />
          <SidebarItem icon={<Target size={14} />} label="预算控制" />
          <SidebarItem icon={<TrendingUp size={14} />} label="分析报表" />
          <SidebarItem icon={<Zap size={14} />} label="智能测算" />
          <div className="mt-auto pb-4">
             <SidebarItem icon={<Settings size={14} />} label="系统设置" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#F0F2F5]">
        {/* Navigation/Header Bar */}
        <div className="h-10 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">预算编报</span>
            <span className="text-slate-300">/</span>
            <span className="font-medium text-slate-700">2026年度预算综合看板</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden lg:block">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" size={12} />
              <input 
                type="text" 
                placeholder="搜索功能..." 
                className="bg-slate-50 border border-slate-200 rounded-full py-1 pl-7 pr-3 outline-none w-32 focus:w-48 transition-all"
              />
            </div>
            <Bell size={14} className="text-slate-400 cursor-pointer" />
            <Globe size={14} className="text-slate-400 cursor-pointer" />
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#0052D9] font-bold text-[10px]">
              AD
            </div>
          </div>
        </div>

        {/* Dashboard Scrollable Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard 
              label="预算总金额" 
              value="¥ 12.8B" 
              trend="+5.2%" 
              trendType="up"
              color="#0052D9"
            />
            <MetricCard 
              label="已占用金额" 
              value="¥ 8.45B" 
              trend="66.1%" 
              trendType="neutral"
              color="#E60012"
            />
            <MetricCard 
              label="预算执行率" 
              value="72.4%" 
              trend="+2.1%" 
              trendType="up"
              color="#22C55E"
            />
            <MetricCard 
              label="待审核单据" 
              value="24" 
              trend="-5" 
              trendType="down"
              color="#F59E0B"
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Primary Chart: Execution Trend */}
            <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-700">预算执行趋势分析</h4>
                <div className="flex gap-2">
                   <div className="px-2 py-0.5 rounded border border-slate-200 text-[8px] bg-slate-50">年度</div>
                   <div className="px-2 py-0.5 rounded border border-blue-200 text-[8px] bg-blue-50 text-blue-600">月度</div>
                </div>
              </div>
              <div className="h-40 w-full flex items-end justify-between px-2 gap-2">
                {[40, 65, 45, 90, 75, 55, 80, 95, 70, 85, 60, 50].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full relative">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className={`w-full rounded-t-sm ${i === 7 ? 'bg-[#E60012]' : 'bg-[#0052D9]'} opacity-80 group-hover:opacity-100 transition-opacity`}
                      />
                    </div>
                    <span className="text-[8px] text-slate-400">{i + 1}月</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Widget: Sandbox Simulation */}
            <div className="bg-[#001529] p-4 rounded-lg shadow-sm text-white flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={14} className="text-yellow-400" />
                <h4 className="font-bold text-white">数智沙箱模拟</h4>
              </div>
              <div className="flex-1 space-y-3">
                <SandboxOption label="基准方案" value="100.0%" active />
                <SandboxOption label="激进增长 (+15%)" value="112.4%" />
                <SandboxOption label="降本增效 (-10%)" value="92.1%" />
                
                <div className="mt-4 p-3 bg-white/5 rounded border border-white/10">
                   <div className="text-slate-400 text-[9px] mb-2">AI 智能预判</div>
                   <div className="text-white font-medium">预计Q4达成率 98.4%</div>
                   <div className="flex items-center gap-1 text-[#22C55E] text-[8px] mt-1">
                     <CheckCircle2 size={10} /> 差异在可控范围内
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - List of Alerts/Tasks */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
             <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-700">实时预算控制预警</h4>
                <button className="text-blue-600 font-medium">查看全部</button>
             </div>
             <div className="space-y-2">
                <AlertRow status="error" dept="市场部" event="2026 Q1 推广活动" amount="¥ 2,450,000" msg="超支预警 - 强制阻断" />
                <AlertRow status="warn" dept="行政部" event="云服务器续费" amount="¥ 120,400" msg="接近阈值 - 柔性提醒" />
                <AlertRow status="success" dept="研发中心" event="专利申请奖励" amount="¥ 45,000" msg="控制通过 - 自动放行" />
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`mx-2 px-3 py-2 rounded-md flex items-center gap-3 cursor-pointer transition-colors ${active ? 'bg-[#0052D9] text-white' : 'hover:bg-white/5 text-slate-400'}`}>
      {icon}
      <span className="hidden md:inline">{label}</span>
    </div>
  )
}

function MetricCard({ label, value, trend, trendType, color }: { label: string, value: string, trend: string, trendType: 'up' | 'down' | 'neutral', color: string }) {
  return (
    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col gap-1">
      <span className="text-slate-500 text-[9px]">{label}</span>
      <div className="text-sm md:text-base font-bold text-slate-800" style={{ color: color }}>{value}</div>
      <div className={`text-[8px] ${trendType === 'up' ? 'text-green-500' : trendType === 'down' ? 'text-red-500' : 'text-slate-400'}`}>
        {trend} {trendType === 'up' ? '↑' : trendType === 'down' ? '↓' : ''}
      </div>
    </div>
  )
}

function SandboxOption({ label, value, active = false }: { label: string, value: string, active?: boolean }) {
  return (
    <div className={`p-2 rounded border flex items-center justify-between transition-all ${active ? 'bg-blue-600/20 border-blue-500' : 'bg-white/5 border-white/10 grayscale opacity-60'}`}>
      <span className="text-[10px]">{label}</span>
      <span className="font-bold text-blue-400">{value}</span>
    </div>
  )
}

function AlertRow({ status, dept, event, amount, msg }: { status: 'error' | 'warn' | 'success', dept: string, event: string, amount: string, msg: string }) {
  return (
    <div className="flex items-center gap-4 py-2 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors px-2 -mx-2">
      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${status === 'error' ? 'bg-red-500' : status === 'warn' ? 'bg-yellow-400' : 'bg-green-500'}`} />
      <div className="w-16 font-medium text-slate-600">{dept}</div>
      <div className="flex-1 text-slate-700 truncate">{event}</div>
      <div className="w-24 text-right font-bold text-slate-800">{amount}</div>
      <div className={`w-32 text-right ${status === 'error' ? 'text-red-500' : status === 'warn' ? 'text-yellow-600' : 'text-green-600'}`}>
        {msg}
      </div>
    </div>
  )
}
