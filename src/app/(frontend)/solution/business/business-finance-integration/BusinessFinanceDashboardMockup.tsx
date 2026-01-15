'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Database, 
  Activity, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Filter,
  Layers
} from 'lucide-react'

export default function BusinessFinanceDashboardMockup() {
  return (
    <div className="bg-[#F8FAFC] rounded-2xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-[10px] md:text-xs">
      {/* Sidebar */}
      <div className="w-12 md:w-48 bg-[#001529] text-slate-400 flex flex-col">
        <div className="h-12 md:h-16 flex items-center px-4 bg-[#002140]">
          <div className="w-6 h-6 rounded bg-[#E60012] flex items-center justify-center mr-2">
            <Database className="text-white w-4 h-4" />
          </div>
          <span className="hidden md:inline text-white font-bold tracking-tight">EVENT CLOUD</span>
        </div>
        
        <div className="p-2 space-y-1">
          <NavItem icon={<BarChart3 size={14} />} label="工作台" active />
          <NavItem icon={<Activity size={14} />} label="事项中心" />
          <NavItem icon={<Layers size={14} />} label="核算规则" />
          <NavItem icon={<Calendar size={14} />} label="智能月结" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-12 md:h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 hidden md:inline">工作台 /</span>
            <span className="font-semibold text-slate-800">业财数据大屏</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-slate-500">
              <Filter size={14} />
              <span>全集团</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm"></div>
          </div>
        </header>

        {/* content area */}
        <div className="p-4 md:p-6 space-y-4 md:space-y-6 overflow-hidden">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            <StatCard 
              label="今日事项数" 
              value="128,492" 
              trend="+12%" 
              color="blue"
            />
            <StatCard 
              label="月结进度" 
              value="85.4%" 
              trend="快于同期" 
              color="green"
            />
            <StatCard 
              label="稽核通过率" 
              value="99.98%" 
              trend="稳定" 
              color="red"
            />
          </div>

          <div className="grid grid-cols-5 gap-4 h-full">
            {/* Left: Event Ledger */}
            <div className="col-span-3 space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm h-full">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                    <Activity size={14} className="text-[#0052D9]" />
                    实时事项流水
                  </h4>
                  <span className="text-[10px] text-[#0052D9] font-medium bg-blue-50 px-2 py-0.5 rounded cursor-pointer">
                    查看全部
                  </span>
                </div>
                <div className="space-y-2">
                  <EventItem 
                    name="销售出库确认" 
                    time="14:20:12" 
                    status="已核算" 
                    amount="¥ 12,400.00"
                  />
                  <EventItem 
                    name="采购入库暂估" 
                    time="14:18:05" 
                    status="已核算" 
                    amount="¥ 45,000.00"
                  />
                  <EventItem 
                    name="固定资产折旧" 
                    time="14:15:22" 
                    status="计算中" 
                    amount="¥ 8,200.00"
                  />
                  <EventItem 
                    name="销售开票事项" 
                    time="14:10:45" 
                    status="已核算" 
                    amount="¥ 22,000.00"
                  />
                </div>
              </div>
            </div>

            {/* Right: Closing Progress */}
            <div className="col-span-2 space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm h-full flex flex-col">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Calendar size={14} className="text-[#E60012]" />
                  2025-12 月结动态
                </h4>
                <div className="flex-1 flex flex-col justify-around">
                  <ClosingStep label="业务关账" status="complete" />
                  <ClosingStep label="对账稽核" status="complete" />
                  <ClosingStep label="事项核算" status="processing" progress={65} />
                  <ClosingStep label="最后结账" status="pending" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Chart Area (Visual only) */}
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
             <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-slate-800">实时业财大数据分析 (实时采集)</h4>
                <TrendingUp size={14} className="text-green-500" />
             </div>
             <div className="h-16 flex items-end gap-1">
                {[45, 60, 40, 70, 85, 50, 65, 90, 75, 55, 60, 80, 70, 50, 60].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, type: 'spring' }}
                    className="flex-1 bg-gradient-to-t from-[#0052D9] to-blue-300 rounded-t-sm"
                  />
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`px-3 py-2 rounded-lg flex items-center gap-3 cursor-pointer transition-all ${active ? 'bg-[#1890FF] text-white shadow-lg' : 'hover:bg-slate-800 text-slate-400'}`}>
      {icon}
      <span className="hidden md:inline font-medium">{label}</span>
    </div>
  )
}

function StatCard({ label, value, trend, color }: { label: string, value: string, trend: string, color: 'blue' | 'green' | 'red' }) {
  const colorMap = {
    blue: 'border-blue-100 bg-blue-50/30 text-blue-600',
    green: 'border-green-100 bg-green-50/30 text-green-600',
    red: 'border-red-100 bg-red-50/30 text-red-600'
  }
  
  return (
    <div className={`p-4 rounded-xl border shadow-sm ${colorMap[color]}`}>
      <div className="text-slate-500 font-medium mb-1 truncate">{label}</div>
      <div className="text-lg md:text-xl font-bold text-slate-800">{value}</div>
      <div className="text-[10px] flex items-center gap-1 mt-1 font-semibold">
        <TrendingUp size={12} /> {trend}
      </div>
    </div>
  )
}

function EventItem({ name, time, status, amount }: { name: string, time: string, status: string, amount: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors rounded px-2">
      <div className="flex flex-col">
        <span className="font-bold text-slate-700">{name}</span>
        <span className="text-slate-400 flex items-center gap-1"><Clock size={10} /> {time}</span>
      </div>
      <div className="text-right flex flex-col">
        <span className="font-bold text-slate-900">{amount}</span>
        <span className={`text-[9px] font-bold ${status === '已核算' ? 'text-green-500' : 'text-orange-500'}`}>
          {status}
        </span>
      </div>
    </div>
  )
}

function ClosingStep({ label, status, progress = 0 }: { label: string, status: 'complete' | 'processing' | 'pending', progress?: number }) {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
        status === 'complete' ? 'bg-green-100 text-green-600' : 
        status === 'processing' ? 'bg-blue-100 text-blue-600 animate-pulse' : 
        'bg-slate-100 text-slate-400'
      }`}>
        {status === 'complete' ? <CheckCircle2 size={12} /> : status === 'processing' ? <Clock size={12} /> : <div className="w-1 h-1 rounded-full bg-slate-300" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className={`font-semibold ${status === 'pending' ? 'text-slate-400' : 'text-slate-700'}`}>{label}</span>
          {status === 'processing' && <span className="text-[9px] font-bold text-blue-600">{progress}%</span>}
        </div>
        {status === 'processing' && (
          <div className="w-full bg-slate-100 rounded-full h-1">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-blue-500 h-1 rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}
