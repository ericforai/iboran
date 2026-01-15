'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Globe, 
  FileText, 
  CheckCircle2, 
  ArrowRightLeft, 
  Settings,
  Calculator,
  Database
} from 'lucide-react'

export default function ConsolidatedDashboardMockup() {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-[10px] md:text-xs">
      {/* Sidebar - Pro Dark Navigation */}
      <div className="w-12 md:w-32 bg-[#001529] text-slate-400 flex flex-col border-r border-slate-800">
        <div className="h-10 flex items-center px-4 border-b border-slate-800 shrink-0">
          <div className="w-6 h-6 bg-[#E60012] rounded flex items-center justify-center mr-2">
            <span className="text-white font-bold text-xs">B</span>
          </div>
          <span className="hidden md:inline text-white font-bold tracking-tight">合并中心</span>
        </div>
        <div className="p-2 space-y-1 flex-1 overflow-auto">
          {[
            { icon: BarChart3, label: '工作台', active: true },
            { icon: Database, label: '采集' },
            { icon: ArrowRightLeft, label: '对账' },
            { icon: Calculator, label: '抵销' },
            { icon: FileText, label: '报告' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className={`p-2 rounded flex items-center gap-2 cursor-pointer transition-colors ${
                item.active ? 'bg-[#1890FF] text-white' : 'hover:bg-slate-800'
              }`}
            >
              <item.icon size={14} />
              <span className="hidden md:inline">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-10 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">控制台 /</span>
            <span className="font-semibold text-slate-700">2025Q4 集团合并</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-blue-50 text-[#0052D9] px-2 py-0.5 rounded-full border border-blue-100">
              <Globe size={12} />
              <span className="scale-90">CNY/USD</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-slate-200 border border-slate-300"></div>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-3 space-y-3 overflow-auto">
          {/* Top Status Cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: '合并进度', value: '85%', color: 'text-blue-500', sub: '已上报 42/50' },
              { label: '自动抵销率', value: '98.2%', color: 'text-green-500', sub: '覆盖 128 条规则' },
              { label: '差异', value: '3', color: 'text-red-500', sub: '需人工干预' },
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm"
              >
                <div className="text-slate-400 scale-75 origin-left mb-1">{stat.label}</div>
                <div className={`text-base font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-[7px] text-slate-400 whitespace-nowrap">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Workflow Visualization */}
          <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
            <div className="font-bold text-slate-700 mb-3 flex items-center gap-2 scale-90 origin-left">
              <Calculator size={12} className="text-blue-500" />
              <span>一键合并工作流</span>
            </div>
            <div className="flex items-center justify-between relative px-1">
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
              {[
                { label: '数据采集', status: 'complete' },
                { label: '折算', status: 'complete' },
                { label: '对账', status: 'processing' },
                { label: '抵销', status: 'pending' },
                { label: '出表', status: 'pending' },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center gap-1 bg-white px-1">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                    step.status === 'complete' ? 'bg-green-500 border-green-500 text-white' :
                    step.status === 'processing' ? 'bg-blue-50 border-blue-500 text-blue-500 animate-pulse' :
                    'bg-white border-slate-200 text-slate-300'
                  }`}>
                    {step.status === 'complete' ? <CheckCircle2 size={10} /> : 
                     step.status === 'processing' ? <Settings size={10} className="animate-spin" /> :
                     <span className="text-[9px]">{i + 1}</span>}
                  </div>
                  <span className={`scale-[0.7] origin-top text-center w-full ${step.status === 'pending' ? 'text-slate-400' : 'text-slate-700 font-medium'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Grid: Tables */}
          <div className="grid grid-cols-2 gap-3">
            {/* Elimination Log */}
            <div className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-slate-50 px-2 py-1 border-b border-slate-200 text-[9px] font-bold text-slate-600">
                实时抵销日志
              </div>
              <div className="p-1 space-y-1">
                {[
                  { type: '权益', title: '子权益抵销', amount: '¥ 1.5B', status: '成功' },
                  { type: '内部', title: '买卖对销', amount: '¥ 850M', status: '成功' },
                  { type: '往来', title: '应收对销', amount: '¥ 420M', status: '校验中' },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-1 bg-slate-50/50 rounded text-[9px]">
                    <div className="flex flex-col">
                      <span className="text-[7px] text-blue-500 font-bold">{log.type}</span>
                      <span className="text-slate-700 font-medium truncate max-w-[60px]">{log.title}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-800">{log.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Entity Status */}
            <div className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-slate-50 px-2 py-1 border-b border-slate-200 text-[9px] font-bold text-slate-600">
                成员单位上报
              </div>
              <div className="p-1 space-y-2">
                 {[
                  { name: '华东部', progress: 100 },
                  { name: '美国研发', progress: 100 },
                  { name: '东南亚', progress: 65 },
                ].map((entity, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <div className="flex justify-between items-center text-[8px]">
                      <span className="text-slate-700">{entity.name}</span>
                      <span className="text-slate-400">{entity.progress}%</span>
                    </div>
                    <div className="w-full h-0.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        style={{ width: `${entity.progress}%` }}
                        className={`h-full ${entity.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
