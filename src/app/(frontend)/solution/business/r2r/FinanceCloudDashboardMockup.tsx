'use client'

import { Activity, Globe, ShieldCheck, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { useState } from 'react'

export default function FinanceCloudDashboardMockup() {
  const [activeTab, setActiveTab] = useState('closing')

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-xs">
      {/* Sidebar */}
      <div className="w-16 md:w-48 bg-[#001529] text-slate-400 flex flex-col border-r border-slate-800">
        <div className="h-12 flex items-center justify-center border-b border-slate-800 font-bold text-white tracking-wider">
          BIP R2R
        </div>
        <div className="p-2 space-y-1">
          <div 
            onClick={() => setActiveTab('closing')}
            className={`px-3 py-2 rounded flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'closing' ? 'bg-[#E60012] text-white' : 'hover:bg-slate-800'}`}
          >
            <ShieldCheck size={14} /> <span className="hidden md:inline">智能关账</span>
          </div>
          <div 
            onClick={() => setActiveTab('treasury')}
            className={`px-3 py-2 rounded flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'treasury' ? 'bg-[#E60012] text-white' : 'hover:bg-slate-800'}`}
          >
            <Globe size={14} /> <span className="hidden md:inline">全球司库</span>
          </div>
          <div className="px-3 py-2 hover:bg-slate-800 rounded flex items-center gap-2 cursor-pointer transition-colors">
             <Activity size={14} /> <span className="hidden md:inline">合并报表</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-50 flex flex-col">
        {/* Header */}
        <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4 shadow-sm">
          <div className="font-bold text-slate-700 flex items-center gap-2">
            财务云驾驶舱 / {activeTab === 'treasury' ? '全球资金监控' : '智能关账工作台'}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-[10px]">当前账期: 2024-12</span>
            <div className="w-6 h-6 rounded-full bg-slate-200" />
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-4 flex-1 overflow-hidden relative">
          {activeTab === 'treasury' ? (
            <div className="grid grid-cols-3 gap-4 h-full">
              {/* KPIS */}
              <div className="col-span-3 grid grid-cols-4 gap-4">
                <KPICard title="全球资金总额" value="¥ 128.5 亿" trend="+12.5%" isUp={true} />
                <KPICard title="今日归集资金" value="¥ 4.2 亿" trend="+5.3%" isUp={true} />
                <KPICard title="融资加权成本" value="3.45%" trend="-0.12%" isUp={false} isGood={true} />
                <KPICard title="汇率风险敞口" value="$ 2.1 M" trend="+2.1%" isUp={true} isGood={false} />
              </div>

              {/* Map Area */}
              <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex flex-col">
                <div className="font-bold text-slate-700 mb-4 flex justify-between items-center">
                  <span>全球资金分布</span>
                  <div className="flex gap-2 text-[10px]">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded">CNY</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">USD</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">EUR</span>
                  </div>
                </div>
                <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 relative flex items-center justify-center">
                  <Globe className="text-slate-200 mb-2" size={64} />
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full" />
                  <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-500 rounded-full" />
                </div>
              </div>

              {/* Right Charts */}
              <div className="col-span-1 grid grid-rows-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <div className="font-bold text-slate-700 mb-2">资金流入流出</div>
                  <div className="h-24 flex items-end gap-2 px-2">
                    {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-500 rounded-t opacity-80" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <div className="font-bold text-slate-700 mb-2">账户预警监控</div>
                  <div className="space-y-2">
                    <AlertItem msg="北京分公司账户余额不足" time="10:23" level="high" />
                    <AlertItem msg="上海子公司大额支付预警" time="09:45" level="medium" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="col-span-2 space-y-4">
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex-1 h-full min-h-[140px]">
                  <div className="font-bold text-slate-700 mb-4 flex justify-between">
                    <span>月结关账检查清单</span>
                    <span className="text-blue-600 cursor-pointer">自动检查中...</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-[11px]">
                     <ChecklistItem label="应收账款对账" status="done" />
                     <ChecklistItem label="应付账款对账" status="done" />
                     <ChecklistItem label="固定资产折旧" status="done" />
                     <ChecklistItem label="存货成本结转" status="done" />
                     <ChecklistItem label="汇兑损益重估" status="processing" />
                     <ChecklistItem label="内部交易抵销" status="pending" />
                  </div>
                 </div>
                 
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex-1">
                    <div className="font-bold text-slate-700 mb-2">集团合并进度</div>
                    <div className="space-y-3">
                      <ProgressBar label="单体报表提交率" value={98} color="bg-green-500" />
                      <ProgressBar label="内部对账通过率" value={85} color="bg-blue-500" />
                      <ProgressBar label="合并抵销完成率" value={45} color="bg-purple-500" />
                    </div>
                 </div>
              </div>
              
              <div className="col-span-1 bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                <div className="font-bold text-slate-700 mb-6 w-full text-left">关账倒计时</div>
                <div className="relative w-36 h-36 mx-auto mb-6">
                   <svg className="w-full h-full transform -rotate-90">
                     <circle cx="72" cy="72" r="64" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                     <circle cx="72" cy="72" r="64" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="402" strokeDashoffset="80" />
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center flex-col">
                     <span className="text-3xl font-bold text-slate-700">80%</span>
                     <span className="text-xs text-slate-500 mt-1">预计提速 2 天</span>
                   </div>
                </div>
                <div className="w-full bg-green-50 text-green-700 p-3 rounded text-center">
                  预计完成时间: 12-31 18:00
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ChecklistItem({label, status}: {label: string, status: 'done' | 'processing' | 'pending'}) {
   return (
      <div className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-100">
        <span className="text-slate-600">{label}</span>
        {status === 'done' && <span className="text-green-500 font-bold">✓ 完成</span>}
        {status === 'processing' && <span className="text-blue-500 animate-pulse">↻ 处理中</span>}
        {status === 'pending' && <span className="text-slate-400">waiting</span>}
      </div>
   )
}

function KPICard({ title, value, trend, isUp, isGood = true }: { title: string, value: string, trend: string, isUp: boolean, isGood?: boolean }) {
  const colorClass = (isUp && isGood) || (!isUp && !isGood) ? 'text-green-500' : 'text-red-500'
  const Icon = isUp ? ArrowUpRight : ArrowDownRight
  
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
      <div className="text-[10px] text-slate-400 mb-1">{title}</div>
      <div className="text-lg font-bold text-slate-800 mb-1">{value}</div>
      <div className={`flex items-center text-[10px] ${colorClass}`}>
        <Icon size={10} /> {trend}
      </div>
    </div>
  )
}

function AlertItem({ msg, time, level }: { msg: string, time: string, level: 'high' | 'medium' }) {
  const bgClass = level === 'high' ? 'bg-red-50 text-red-700' : 'bg-orange-50 text-orange-700'
  return (
    <div className={`p-2 rounded text-[10px] flex justify-between items-center ${bgClass}`}>
      <span>{msg}</span>
      <span className="opacity-75">{time}</span>
    </div>
  )
}

function ProgressBar({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] mb-1">
        <span className="text-slate-600">{label}</span>
        <span className="text-slate-900 font-medium">{value}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
