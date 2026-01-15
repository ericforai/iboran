'use client'

import { Activity, Globe, Wallet, ShieldCheck, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { useState } from 'react'

export default function FinanceCloudDashboardMockup() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden w-full aspect-[16/10] flex text-xs shadow-blue-500/10">
      {/* Sidebar */}
      <div className="w-16 md:w-48 bg-[#0F172A] text-slate-400 flex flex-col border-r border-slate-800/50">
        <div className="h-12 flex items-center justify-center border-b border-slate-800/50 font-bold text-white tracking-widest text-[10px] md:text-xs">
          BIP FINANCE
        </div>
        <div className="p-2 space-y-1">
          <div 
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-200 ${activeTab === 'overview' ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20' : 'hover:bg-slate-800/50 hover:text-slate-200'}`}
          >
            <Globe size={14} /> <span className="hidden md:inline font-medium">全球司库</span>
          </div>
          <div 
            onClick={() => setActiveTab('accounting')}
            className={`px-3 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-200 ${activeTab === 'accounting' ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20' : 'hover:bg-slate-800/50 hover:text-slate-200'}`}
          >
            <Activity size={14} /> <span className="hidden md:inline font-medium">智能核算</span>
          </div>
          <div 
            onClick={() => setActiveTab('invoice')}
            className={`px-3 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-200 ${activeTab === 'invoice' ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20' : 'hover:bg-slate-800/50 hover:text-slate-200'}`}
          >
            <ShieldCheck size={14} /> <span className="hidden md:inline font-medium">票据档案</span>
          </div>
          <div className="px-3 py-2 hover:bg-slate-800 rounded flex items-center gap-2 cursor-pointer transition-colors">
            <Wallet size={14} /> <span className="hidden md:inline">资金池</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-50/50 flex flex-col backdrop-blur-sm">
        {/* Header */}
        <div className="h-12 bg-white/60 backdrop-blur-md border-b border-slate-200/50 flex items-center justify-between px-4">
          <div className="font-bold text-slate-700 flex items-center gap-2">
            <span className="text-[#2563EB]">财务云</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{activeTab === 'overview' ? '全球资金监控' : '实时智能核算'}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-[9px] uppercase tracking-wider">Live Updates</span>
            <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200" />
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-4 flex-1 overflow-hidden relative">
          {activeTab === 'overview' ? (
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
          ) : activeTab === 'accounting' ? (
            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="col-span-2 space-y-4">
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <div className="font-bold text-slate-700 mb-4">实时事项会计引擎</div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-blue-50 p-3 rounded border border-blue-100 text-center">
                      <div className="text-[10px] text-slate-500">业务单据</div>
                      <div className="font-bold text-blue-700">12,543</div>
                    </div>
                    <div className="text-slate-300">→</div>
                    <div className="flex-1 bg-purple-50 p-3 rounded border border-purple-100 text-center">
                      <div className="text-[10px] text-slate-500">事项转换</div>
                      <div className="font-bold text-purple-700">100%</div>
                    </div>
                    <div className="text-slate-300">→</div>
                    <div className="flex-1 bg-green-50 p-3 rounded border border-green-100 text-center">
                      <div className="text-[10px] text-slate-500">自动凭证</div>
                      <div className="font-bold text-green-700">12,543</div>
                    </div>
                  </div>
                 </div>
                 
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex-1">
                    <div className="font-bold text-slate-700 mb-2">多维利润分析</div>
                    <div className="space-y-3">
                      <ProgressBar label="产品线 A 利润率" value={85} color="bg-blue-500" />
                      <ProgressBar label="产品线 B 利润率" value={62} color="bg-blue-400" />
                      <ProgressBar label="区域 X 贡献度" value={92} color="bg-green-500" />
                    </div>
                 </div>
              </div>
              
              <div className="col-span-1 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <div className="font-bold text-slate-700 mb-4">自动关账进度</div>
                <div className="relative w-32 h-32 mx-auto mb-4">
                   <svg className="w-full h-full transform -rotate-90">
                     <circle cx="64" cy="64" r="56" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                     <circle cx="64" cy="64" r="56" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="351.86" strokeDashoffset="35.18" />
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center flex-col">
                     <span className="text-2xl font-bold text-slate-700">90%</span>
                     <span className="text-[10px] text-slate-500">已完成</span>
                   </div>
                </div>
                <div className="space-y-2 text-[10px]">
                  <div className="flex justify-between"><span>应收对账</span><span className="text-green-500">完成</span></div>
                  <div className="flex justify-between"><span>应付对账</span><span className="text-green-500">完成</span></div>
                  <div className="flex justify-between"><span>固定资产</span><span className="text-green-500">完成</span></div>
                  <div className="flex justify-between"><span>成本结转</span><span className="text-blue-500 animate-pulse">进行中...</span></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 h-full">
              {/* Invoice Stats */}
              <div className="col-span-2 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <div className="text-[10px] text-slate-400 mb-1">今日开票总额</div>
                    <div className="text-xl font-bold text-slate-800">¥ 1,245,000</div>
                    <div className="flex items-center text-[10px] text-green-500 mt-1">
                      <ArrowUpRight size={10} /> 自动化率 100%
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <div className="text-[10px] text-slate-400 mb-1">进项采集验真</div>
                    <div className="text-xl font-bold text-slate-800">2,456 张</div>
                    <div className="flex items-center text-[10px] text-blue-500 mt-1">
                      查验成功率 100%
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex-1">
                  <div className="font-bold text-slate-700 mb-4">电子档案收集情况 (六号令合规)</div>
                  <div className="space-y-3">
                    <ProgressBar label="会计凭证归档率" value={98} color="bg-[#E60012]" />
                    <ProgressBar label="电子发票关联率" value={100} color="bg-green-500" />
                    <ProgressBar label="银行回单获取率" value={92} color="bg-blue-500" />
                  </div>
                </div>
              </div>

              {/* Security & Audit */}
              <div className="col-span-1 space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 h-full">
                  <div className="font-bold text-slate-700 mb-4">智能风控预警</div>
                  <div className="space-y-3">
                    <div className="p-2 bg-red-50 rounded border-l-2 border-red-500">
                      <div className="font-bold text-red-700 text-[10px]">发票红冲预警</div>
                      <div className="text-slate-500 text-[9px]">检测到 2 张进项发票已异常</div>
                    </div>
                    <div className="p-2 bg-orange-50 rounded border-l-2 border-orange-500">
                      <div className="font-bold text-orange-700 text-[10px]">重复报销拦截</div>
                      <div className="text-slate-500 text-[9px]">2023-Q4 票据去重成功</div>
                    </div>
                    <div className="p-2 bg-blue-50 rounded border-l-2 border-blue-500">
                      <div className="font-bold text-blue-700 text-[10px]">审计调阅追踪</div>
                      <div className="text-slate-500 text-[9px]">外部审计借阅审批中 (1)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function KPICard({ title, value, trend, isUp, isGood = true }: { title: string, value: string, trend: string, isUp: boolean, isGood?: boolean }) {
  const colorClass = (isUp && isGood) || (!isUp && !isGood) ? 'text-green-500' : 'text-red-500'
  const Icon = isUp ? ArrowUpRight : ArrowDownRight
  
  return (
    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
      <div className="text-[10px] text-slate-400 mb-1 font-medium underline decoration-[#2563EB]/30">{title}</div>
      <div className="text-lg font-bold text-[#1E293B] mb-1">{value}</div>
      <div className={`flex items-center text-[10px] font-semibold ${colorClass}`}>
        <Icon size={10} className="mr-0.5" /> {trend}
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
