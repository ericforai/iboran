'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  Layers, 
  Database, 
  Calculator, 
  PieChart, 
  FileText, 
  Activity, 
  CheckCircle2,
  Globe,
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react'

interface DashboardMockupProps {
  activeTab?: string
}

export default function R2RDashboardMockup({ activeTab = 'overview' }: DashboardMockupProps) {
  return (
    <div className="relative w-full aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
      {/* OS App Frame */}
      <div className="absolute inset-0 flex flex-col bg-white">
        {/* Title Bar */}
        <div className="h-10 bg-slate-900 flex items-center justify-between px-4 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
            YonBIP Smart Finance | Record to Report
          </div>
          <div className="w-12 h-4 bg-slate-800 rounded-full" />
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-16 md:w-56 bg-[#001529] text-slate-400 shrink-0 flex flex-col pt-4 border-r border-slate-800">
            <div className="px-4 mb-8 hidden md:block">
              <div className="h-8 bg-blue-600 rounded flex items-center px-3 gap-2">
                <div className="w-4 h-4 bg-white/20 rounded-sm" />
                <span className="text-white text-[10px] font-bold">工作台</span>
              </div>
            </div>
            <div className="space-y-1 px-2">
              {[
                { icon: Database, label: '事项管理', active: activeTab === 'accounting' },
                { icon: Calculator, label: '智能核算', active: activeTab === 'accounting' },
                { icon: Globe, label: '合并报表', active: activeTab === 'consolidation' },
                { icon: Activity, label: '经营分析', active: activeTab === 'insights' },
                { icon: FileText, label: '会计档案', active: false },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 px-3 py-2.5 rounded transition-colors group cursor-pointer ${item.active ? 'bg-blue-600/10 text-blue-400' : 'hover:bg-slate-800'}`}
                >
                  <item.icon size={16} />
                  <span className="text-[11px] hidden md:inline font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 bg-[#F5F7FA] overflow-y-auto p-4 md:p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && <OverviewView key="overview" />}
              {activeTab === 'accounting' && <AccountingView key="accounting" />}
              {activeTab === 'consolidation' && <ConsolidationView key="consolidation" />}
              {activeTab === 'insights' && <InsightsView key="insights" />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

function OverviewView() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="h-full flex flex-col gap-6"
    >
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-lg font-bold text-slate-800">R2R 端到端全场景闭环</h3>
          <p className="text-[11px] text-slate-500">事项驱动，穿透查询，实时出表</p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100 flex items-center gap-1">
            <CheckCircle2 size={12} /> 系统合规
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Architecture Stack */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
          {/* Layer 4: Report */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-4/5 h-16 bg-white rounded-xl shadow-lg border-2 border-slate-100 flex items-center justify-between px-6 bg-gradient-to-r from-white to-blue-50/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <PieChart size={18} />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-700">财务报告与经营洞察</div>
                <div className="text-[9px] text-slate-400 italic">一键合并、多维报表、AI分析</div>
              </div>
            </div>
            <div className="flex gap-4">
               <div className="text-center">
                  <div className="text-[12px] font-bold text-blue-600">实时</div>
                  <div className="text-[8px] text-slate-400 uppercase">合并速度</div>
               </div>
            </div>
          </motion.div>

          <div className="h-6 flex flex-col items-center justify-center">
             <div className="w-0.5 h-full bg-blue-100" />
          </div>

          {/* Layer 3: Engine */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-4/5 h-16 bg-blue-600 rounded-xl shadow-lg flex items-center justify-between px-6 text-white"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Calculator size={18} />
              </div>
              <div>
                <div className="text-[11px] font-bold">智能核算引擎</div>
                <div className="text-[9px] text-white/70 italic">多准则自动分摊、凭证实时生成</div>
              </div>
            </div>
            <ShieldCheck className="text-white/40" size={24} />
          </motion.div>

          <div className="h-6 flex flex-col items-center justify-center">
             <div className="w-0.5 h-full bg-blue-100" />
          </div>

          {/* Layer 2: Hub */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-4/5 h-16 bg-white rounded-xl shadow-lg border-2 border-blue-200 flex items-center justify-between px-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                <Layers size={18} />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-700">事项法会计中台 (Event Hub)</div>
                <div className="text-[9px] text-slate-400 italic">全量业务数据采集、同源分流</div>
              </div>
            </div>
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             >
                <Activity size={20} className="text-blue-300" />
             </motion.div>
          </motion.div>

          <div className="h-6 flex flex-col items-center justify-center">
             <div className="w-0.5 h-full bg-blue-100" />
          </div>

          {/* Layer 1: Sources */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-4/5 h-16 bg-slate-50 border border-dashed border-slate-300 rounded-xl flex items-center justify-center gap-12"
          >
             {['采购', '销售', '项目', '资产', '税务'].map((s, i) => (
               <div key={i} className="flex flex-col items-center gap-1 opacity-50">
                  <div className="w-6 h-6 bg-slate-200 rounded-full" />
                  <span className="text-[8px] font-medium text-slate-500">{s}</span>
               </div>
             ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function AccountingView() {
  return (
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="space-y-4"
    >
       <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800">智能核算流水</h3>
          <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded italic">实时生成中...</span>
       </div>
       <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-[10px]">
             <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                   <th className="px-4 py-2 text-left font-bold text-slate-500">业务事项</th>
                   <th className="px-4 py-2 text-left font-bold text-slate-500">分流口径</th>
                   <th className="px-4 py-2 text-left font-bold text-slate-500">状态</th>
                   <th className="px-4 py-2 text-right font-bold text-slate-500">凭证编号</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-slate-50">
                {[
                  { event: '采购入库清单-2938', type: 'CAS / IFRS', status: '已转换', id: 'VOU-100021' },
                  { event: '销售收款预提-1022', type: '管理口径', status: '已转换', id: 'VOU-100022' },
                  { event: '固定资产折旧计提', type: 'CAS / IFRS', status: '进行中', id: 'VOU-100023' },
                  { event: '内部交易协同对账', type: '抵销口径', status: '待处理', id: '-' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                     <td className="px-4 py-2.5 font-medium">{row.event}</td>
                     <td className="px-4 py-2.5 text-slate-400">{row.type}</td>
                     <td className="px-4 py-2.5">
                        <span className={`px-1.5 py-0.5 rounded-full text-[8px] ${
                          row.status === '已转换' ? 'bg-green-100 text-green-600' :
                          row.status === '进行中' ? 'bg-blue-100 text-blue-600 animate-pulse' :
                          'bg-slate-100 text-slate-400'
                        }`}>
                          {row.status}
                        </span>
                     </td>
                     <td className="px-4 py-2.5 text-right font-mono text-blue-600">{row.id}</td>
                  </tr>
                ))}
             </tbody>
          </table>
       </div>

       <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl text-white">
             <div className="text-[10px] opacity-70 mb-1">本月凭证自动化率</div>
             <div className="text-2xl font-bold">99.4%</div>
             <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '99.4%' }}
                  className="h-full bg-white"
                />
             </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
             <div className="text-[10px] text-slate-400 mb-1">异常事项提醒</div>
             <div className="text-xl font-bold text-red-600">03</div>
             <div className="text-[9px] text-slate-500 mt-1 flex items-center gap-1">
                点击快速复核 <ArrowRight size={10} />
             </div>
          </div>
       </div>
    </motion.div>
  )
}

function ConsolidationView() {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-full flex flex-col pt-2"
    >
       <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 flex-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
             <Globe size={120} />
          </div>
          
          <div className="mb-6">
             <h4 className="text-sm font-bold text-slate-800">全球合并任务看板</h4>
             <p className="text-[10px] text-slate-400">Multi-GAAP & Multi-Currency Consolidation</p>
          </div>

          <div className="space-y-6 relative z-10">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                   <div className="text-sm font-bold">L1</div>
                </div>
                <div className="flex-1">
                   <div className="flex justify-between text-[10px] mb-1.5 font-medium">
                      <span>中信集团本部 (CAS)</span>
                      <span className="text-green-600">已就绪 100%</span>
                   </div>
                   <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full" />
                   </div>
                </div>
             </div>

             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                   <div className="text-sm font-bold">L2</div>
                </div>
                <div className="flex-1">
                   <div className="flex justify-between text-[10px] mb-1.5 font-medium">
                      <span>海外事业部 (IFRS/USD)</span>
                      <span className="text-blue-600">合并中 85%</span>
                   </div>
                   <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: '0%' }}
                        animate={{ width: '85%' }}
                        className="h-full bg-blue-500"
                      />
                   </div>
                </div>
             </div>

             <div className="flex items-center gap-4 opacity-50">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-slate-200 shrink-0">
                   <div className="text-sm font-bold">L2</div>
                </div>
                <div className="flex-1">
                   <div className="flex justify-between text-[10px] mb-1.5 font-medium text-slate-300">
                      <span>华南大区公司 (CAS)</span>
                      <span>等待关账...</span>
                   </div>
                   <div className="h-1.5 bg-slate-50 rounded-full" />
                </div>
             </div>
          </div>

          <div className="mt-8 flex gap-3 text-[10px]">
             <div className="flex-1 bg-blue-50 p-3 rounded-lg border border-blue-100 text-blue-700">
                <div className="font-bold mb-1">实时关联交易对账</div>
                <div>匹配度: 98.2%</div>
             </div>
             <div className="flex-1 bg-red-50 p-3 rounded-lg border border-red-100 text-[#E60012]">
                <div className="font-bold mb-1">异常抵销提醒</div>
                <div>点击进入处理专区</div>
             </div>
          </div>
       </div>
    </motion.div>
  )
}

function InsightsView() {
  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="h-full grid grid-cols-2 gap-4"
    >
       <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
             <div className="text-[11px] font-bold text-slate-700">集团经营利润分析 (多口径)</div>
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-[#E60012]" />
             </div>
          </div>
          <div className="h-32 flex items-end gap-2 px-2">
             {[45, 60, 30, 80, 55, 90, 75, 40, 65, 85, 70, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                   <div className="w-full flex">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 }}
                        className="flex-1 bg-blue-100 rounded-t-sm"
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h * 0.7}%` }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                        className="flex-1 bg-blue-600 rounded-t-sm"
                      />
                   </div>
                   <div className="text-[7px] text-slate-300">{i+1}月</div>
                </div>
             ))}
          </div>
       </div>

       <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="text-[10px] text-slate-500 mb-1">净资产收益率 (ROE)</div>
          <div className="text-xl font-bold text-blue-600 flex items-center gap-1">
             15.8% <TrendingUp size={14} className="text-green-500" />
          </div>
          <div className="text-[8px] text-slate-400 mt-1">行业均值: 12.4%</div>
       </div>

       <div className="bg-[#001529] p-4 rounded-xl shadow-lg border border-slate-800 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
             <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
             <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">AI Insight</span>
          </div>
          <p className="text-[9px] text-white/80 leading-relaxed italic">
            &quot;基于事项大数据分析。本月采购成本波动主要受原材料价格上涨影响，建议启动二期套期保值策略...&quot;
          </p>
       </div>
    </motion.div>
  )
}
