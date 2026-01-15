'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Clock, 
  Zap, 
  LayoutDashboard, 
  Layers, 
  Settings, 
  Bell, 
  Search, 
  Database,
  ArrowRightLeft,
} from 'lucide-react'

interface ManagementAccountingDashboardMockupProps {
  activeTab?: string
}

export default function ManagementAccountingDashboardMockup({ activeTab = 'default' }: ManagementAccountingDashboardMockupProps) {
  return (
    <div className="bg-[#F8FAFC] rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-[10px] md:text-xs">
      {/* Sidebar */}
      <div className="w-12 md:w-36 bg-[#001529] text-slate-400 flex flex-col">
        <div className="h-10 flex items-center px-4 border-b border-white/10 shrink-0">
          <div className="w-5 h-5 bg-[#E60012] rounded flex items-center justify-center mr-2">
            <BarChart3 className="text-white w-3 h-3" />
          </div>
          <span className="hidden md:inline font-bold text-white text-[12px] tracking-tight whitespace-nowrap">YonBIP 管会</span>
        </div>
        
        <div className="mx-1 py-4 flex flex-col gap-1 overflow-y-auto scrollbar-hide">
          <SidebarItem icon={<LayoutDashboard size={14} />} label="系统概览" active={activeTab === 'default'} />
          <SidebarItem icon={<Database size={14} />} label="事项会计" active={activeTab === '业财融合'} />
          <SidebarItem icon={<ArrowRightLeft size={14} />} label="内部结算" active={activeTab === '多目的核算'} />
          <SidebarItem icon={<Layers size={14} />} label="成本管理" active={activeTab === '精细化管理'} />
          <SidebarItem icon={<Zap size={14} />} label="智能月结" active={activeTab === '实时智能'} />
          <div className="mt-auto pt-4 border-t border-white/5 mx-2">
             <SidebarItem icon={<Settings size={14} />} label="规则配置" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#F0F2F5]">
        {/* Navigation/Header Bar */}
        <div className="h-10 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">管理会计</span>
            <span className="text-slate-300">/</span>
            <span className="font-medium text-slate-700">实时成本监控中心</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden lg:block mr-2">
              <input 
                type="text" 
                placeholder="搜索财务事务..." 
                className="bg-slate-50 border border-slate-200 rounded-full py-1 pl-6 pr-3 outline-none w-28 focus:w-40 transition-all"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" size={10} />
            </div>
            <Bell size={14} className="text-slate-400" />
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#0052D9] font-bold text-[10px]">MA</div>
          </div>
        </div>

        {/* Dashboard Scrollable Body */}
        <div className="flex-1 p-3 overflow-y-auto space-y-3">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <MetricCard label="本月实际成本" value="¥ 4,280,000" trend="-2.4%" trendType="down" color="#0052D9" />
            <MetricCard label="成本节约率" value="8.52%" trend="+1.2%" trendType="up" color="#22C55E" />
            <MetricCard label="自动化分录率" value="98.5%" trend="+0.5%" trendType="up" color="#0052D9" />
            <MetricCard label="待处理事务" value="12" trend="-4" trendType="down" color="#F59E0B" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Primary Chart: Cost Breakdown */}
            <div className="lg:col-span-2 bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-slate-700">多维度成本组件分析</h4>
                <div className="flex gap-1">
                   <div className="px-1.5 py-0.5 rounded border border-blue-200 text-[8px] bg-blue-50 text-blue-600">按产品</div>
                   <div className="px-1.5 py-0.5 rounded border border-slate-200 text-[8px] bg-slate-50">按订单</div>
                </div>
              </div>
              <div className="flex-1 flex gap-4">
                {/* Horizontal Bar Chart for Components */}
                <div className="flex-1 flex flex-col justify-around py-1">
                  <CostComponentBar label="直接材料" value="52%" color="#0052D9" />
                  <CostComponentBar label="直接人工" value="18%" color="#3B82F6" />
                  <CostComponentBar label="制造费用" value="15%" color="#60A5FA" />
                  <CostComponentBar label="外协加工" value="10%" color="#93C5FD" />
                  <CostComponentBar label="其它差异" value="5%" color="#BFDBFE" />
                </div>
                {/* Visual Placeholder for trend */}
                <div className="w-32 bg-slate-50 rounded p-2 flex flex-col">
                   <span className="text-[8px] text-slate-500 mb-2">成本走势 (LTM)</span>
                   <div className="flex-1 flex items-end justify-between gap-1 pb-1 px-1">
                      {[30, 45, 35, 60, 50, 40].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-100 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Side Widget: Month-end Intelligence */}
            <div className="bg-[#001529] p-3 rounded-lg shadow-sm text-white flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-yellow-400" />
                <h4 className="font-bold text-white">智能月结引擎</h4>
              </div>
              <div className="flex-1 space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] mb-1">
                    <span>当前进度</span>
                    <span className="text-blue-400">85%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <StatusRow label="事项分录生成" done />
                  <StatusRow label="存货实时计价" done />
                  <StatusRow label="差异分摊回摊" active />
                  <StatusRow label="管理报表生成" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Table: Real-time Analysis */}
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
             <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-slate-700">实时业务事项分析</h4>
                <button className="text-blue-600 text-[10px]">明细追溯</button>
             </div>
             <div className="space-y-1.5">
                <AnalysisRow order="ORD-2026-001" entity="精密制造一厂" type="生产领料" cost="¥ 245,600" status="已还原" />
                <AnalysisRow order="ORD-2026-005" entity="总装车间" type="作业申报" cost="¥ 45,200" status="已还原" />
                <AnalysisRow order="SUB-2026-012" entity="精密制造二厂" type="外协核算" cost="¥ 128,000" status="计算中" />
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`mx-2 px-2 py-1.5 rounded flex items-center gap-2 cursor-pointer transition-colors ${active ? 'bg-[#0052D9] text-white' : 'hover:bg-white/5 text-slate-400'}`}>
      <span className="shrink-0">{icon}</span>
      <span className="hidden md:inline truncate">{label}</span>
    </div>
  )
}

function MetricCard({ label, value, trend, trendType, color }: { label: string, value: string, trend: string, trendType: 'up' | 'down' | 'neutral', color: string }) {
  return (
    <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm flex flex-col gap-0.5">
      <span className="text-slate-500 text-[8px]">{label}</span>
      <div className="text-[12px] font-bold" style={{ color: color }}>{value}</div>
      <div className={`text-[8px] flex items-center gap-1 ${trendType === 'up' ? 'text-green-500' : trendType === 'down' ? 'text-red-500' : 'text-slate-400'}`}>
        {trend} {trendType === 'up' ? '↑' : trendType === 'down' ? '↓' : ''}
      </div>
    </div>
  )
}

function CostComponentBar({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="space-y-0.5">
      <div className="flex justify-between text-[8px] text-slate-500">
        <span>{label}</span>
        <span className="font-medium text-slate-700">{value}</span>
      </div>
      <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: value }}
          transition={{ duration: 1 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  )
}

function StatusRow({ label, done = false, active = false }: { label: string, done?: boolean, active?: boolean }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${done ? 'bg-green-500' : active ? 'bg-blue-500 animate-pulse' : 'bg-white/10'}`}>
        {done && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
      </div>
      <span className={`text-[9px] ${active ? 'text-white' : 'text-slate-400'}`}>{label}</span>
    </div>
  )
}

function AnalysisRow({ order, entity, type, cost, status }: { order: string, entity: string, type: string, cost: string, status: string }) {
  return (
    <div className="flex items-center gap-2 py-1 border-b border-slate-50 last:border-0 hover:bg-slate-50 px-1 rounded transition-colors text-[9px]">
      <div className="w-20 font-medium text-slate-600 truncate">{order}</div>
      <div className="w-24 text-slate-500 truncate">{entity}</div>
      <div className="flex-1 text-slate-700">{type}</div>
      <div className="w-20 text-right font-bold text-slate-800">{cost}</div>
      <div className={`w-12 text-right ${status === '已还原' ? 'text-green-500' : 'text-blue-500'}`}>
        {status}
      </div>
    </div>
  )
}
