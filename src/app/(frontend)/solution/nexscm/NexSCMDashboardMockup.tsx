'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Package, 
  Settings, 
  Bell, 
  Search, 
  Layers, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  Truck,
  Eye
} from 'lucide-react'

const IP_TIER_COLORS = {
  S: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  A: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  B: 'bg-gradient-to-br from-blue-400 to-blue-600',
  C: 'bg-gradient-to-br from-slate-400 to-slate-600',
}

export default function NexSCMDashboardMockup() {
  return (
    <div className="bg-[#F8FAFC] rounded-2xl shadow-2xl border border-slate-200 overflow-hidden w-full min-h-[680px] lg:min-h-[720px] flex text-[10px] md:text-xs">
      {/* Sidebar */}
      <div className="w-12 md:w-48 bg-[#001529] text-slate-400 flex flex-col border-r border-slate-800">
        <div className="h-12 flex items-center px-4 border-b border-slate-800 font-bold text-white tracking-widest uppercase">
          <span className="hidden md:inline">NexSCM</span>
          <Layers className="md:hidden w-5 h-5 mx-auto" />
        </div>
        <div className="p-2 space-y-1">
          <NavItem icon={Layers} label="IP 企划" active />
          <NavItem icon={Package} label="采购询价" />
          <NavItem icon={Activity} label="生产孪生" />
          <NavItem icon={TrendingUp} label="动力补货" />
          <NavItem icon={ShieldCheck} label="品质追溯" />
        </div>
        <div className="mt-auto p-2 border-t border-slate-800">
          <NavItem icon={Settings} label="系统设置" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4 shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-slate-800 truncate">控制台 / IP 孵化与企划</h2>
            <div className="hidden md:flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-md text-[10px]">
              <Search size={12} className="text-slate-400" />
              <input type="text" placeholder="搜索项目..." className="bg-transparent border-none outline-none w-32" />
            </div>
          </div>
          <div className="flex items-center gap-3 border-l pl-3 border-slate-100">
            <div className="relative">
              <Bell size={16} className="text-slate-400 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-[10px]">
              AD
            </div>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-4 overflow-hidden flex flex-col gap-4">
          {/* Top Row: IP Summary */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">当前分析项目</div>
                  <div className="text-base font-bold text-slate-800">赛博武士 Gen.2 潮玩系列</div>
                </div>
                <div className={`px-3 py-1 rounded-full ${IP_TIER_COLORS.S} text-white font-bold text-[10px] shadow-lg`}>
                  S-Tier (高潜)
                </div>
              </div>
              
              <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4 2xl:gap-6">
                <MetricCard label="热度指数" value="98.4" sub="+5.2%" />
                <MetricCard label="开发难度" value="A-" sub="中高" />
                <MetricCard label="预计毛利" value="342%" sub="极优" />
                <MetricCard label="商业确定性" value="92%" sub="高频" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 bg-[#0052D9] p-4 rounded-xl shadow-lg shadow-blue-200 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2 opacity-80 uppercase tracking-wider text-[10px] font-bold">
                  风险评估预警
                </div>
                <div className="text-xl font-bold">无重大风险</div>
              </div>
              <div className="flex gap-2">
                <div className="bg-white/20 p-2 rounded-lg flex-1 text-center">
                  <div className="text-[9px] opacity-70">库存风险</div>
                  <div className="font-bold">低</div>
                </div>
                <div className="bg-white/20 p-2 rounded-lg flex-1 text-center">
                  <div className="text-[9px] opacity-70">延期风险</div>
                  <div className="font-bold">极低</div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Digital Twin & Supply Chain */}
          <div className="grid grid-cols-12 gap-4 flex-1 min-h-0">
            {/* Digital Twin View */}
            <div className="col-span-12 md:col-span-7 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-3 shrink-0">
                <div className="flex items-center gap-2 font-bold text-slate-700">
                  <Activity size={14} className="text-[#0052D9]" />
                  生产数字孪生
                </div>
                <div className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded cursor-pointer hover:bg-blue-100 transition-colors">
                  点击查看监控
                </div>
              </div>
              
              <div className="flex-1 space-y-3 pt-2">
                <ProductionStep label="3D 开模" progress={100} status="Done" />
                <ProductionStep label="材料适配" progress={100} status="Done" />
                <ProductionStep label="注塑成型" progress={65} status="In Progress" active />
                <ProductionStep label="面部细节涂装" progress={0} status="Queue" />
                <ProductionStep label="成品组装" progress={0} status="Queue" />
              </div>
            </div>

            {/* Supply Chain / Inventory */}
            <div className="col-span-12 md:col-span-5 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-3 shrink-0">
                <div className="flex items-center gap-2 font-bold text-slate-700">
                  <Truck size={14} className="text-orange-500" />
                  智能补货决策
                </div>
              </div>
              
              <div className="flex-1 flex flex-col gap-3">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-[10px] text-slate-500 font-medium">当前库存</span>
                    <span className="text-lg font-bold text-slate-800">1,204 <span className="text-xs font-normal">pcs</span></span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-orange-400 h-full w-[35%] rounded-full shadow-[0_0_8px_rgba(251,146,60,0.5)]"></div>
                  </div>
                  <div className="flex justify-between text-[8px] mt-1 text-slate-400">
                    <span>预警线: 500</span>
                    <span className="text-orange-500">库存预警: 低于 25%</span>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex flex-col justify-center items-center text-center">
                  <div className="text-green-600 font-bold mb-1">AI 补货建议</div>
                  <div className="text-slate-600 text-[10px]">根据 7 日销量呈上升趋势，建议追加</div>
                  <div className="text-lg font-bold text-green-700 mt-1">+2,500 pcs</div>
                  <button className="mt-2 w-full py-1.5 bg-green-600 text-white rounded text-[10px] font-bold hover:bg-green-700 transition-colors">
                    同步生成 PR 单
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`
      flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200
      ${active ? 'bg-[#1890FF] text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800 text-slate-400'}
    `}>
      <Icon size={14} className={active ? 'text-white' : 'text-slate-500'} />
      <span className="hidden md:inline font-medium whitespace-nowrap">{label}</span>
    </div>
  )
}

function MetricCard({ label, value, sub }: { label: string, value: string, sub: string }) {
  return (
    <div className="flex flex-col gap-1 min-w-0">
      <div className="text-[9px] text-slate-400 font-bold truncate whitespace-nowrap uppercase tracking-tight" title={label}>
        {label}
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-sm md:text-base font-black text-slate-900 leading-none whitespace-nowrap">{value}</span>
        <span className="text-[9px] text-green-500 font-black leading-none whitespace-nowrap">{sub}</span>
      </div>
    </div>
  )
}

function ProductionStep({ label, progress, status, active = false }: { label: string, progress: number, status: string, active?: boolean }) {
  return (
    <div className={`relative p-2 rounded-lg border flex items-center justify-between gap-2 ${active ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-100' : 'bg-white border-slate-100'}`}>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1.5 gap-2">
          <span className={`font-bold truncate text-[10px] ${active ? 'text-blue-700' : 'text-slate-700'}`}>{label}</span>
          <span className={`text-[8px] px-1.5 py-0.5 rounded whitespace-nowrap shrink-0 font-medium ${active ? 'bg-blue-200 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
            {status}
          </span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-full rounded-full ${progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
          />
        </div>
      </div>
      <div className="shrink-0 w-7 text-right text-[9px] font-black text-slate-400">
        {progress}%
      </div>
      {active && (
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-full"
        />
      )}
    </div>
  )
}
