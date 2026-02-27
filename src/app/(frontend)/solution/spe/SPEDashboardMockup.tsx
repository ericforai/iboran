'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Activity, 
  PieChart, 
  ShieldAlert, 
  TrendingUp, 
  Layers,
  Search,
  Bell,
  ChevronRight,
  Database,
  ArrowUpRight,
  ArrowDownRight,
  type LucideIcon
} from 'lucide-react'

interface MockupProps {
  type?: 'default' | 'modeling' | 'budgeting' | 'control' | 'analysis' | 'ai'
}

export default function SPEDashboardMockup({ type = 'default' }: MockupProps) {
  return (
    <div className="bg-slate-900 rounded-xl shadow-2xl border border-slate-800 overflow-hidden w-full aspect-[16/10] flex text-[10px] md:text-sm text-slate-300 font-sans select-none">
      {/* Sidebar */}
      <div className="w-12 md:w-48 bg-[#001529] border-r border-slate-800 flex flex-col shrink-0">
        <div className="h-10 md:h-14 flex items-center px-4 border-b border-slate-800">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#E60012] rounded flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xs">BIP</span>
          </div>
          <span className="ml-3 font-bold text-white tracking-tight hidden md:block">SPE Cloud</span>
        </div>
        <div className="p-2 space-y-1">
          <NavItem icon={Target} label="战略目标" active={type === 'default'} />
          <NavItem icon={Layers} label="年度预算" active={type === 'budgeting'} />
          <NavItem icon={Activity} label="执行控制" active={type === 'control'} />
          <NavItem icon={PieChart} label="经营分析" active={type === 'analysis'} />
          <NavItem icon={Database} label="多维数据" active={type === 'modeling'} />
        </div>
        <div className="mt-auto p-4 border-t border-slate-800 hidden md:block">
          <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
             Vertical PDCA
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-950 flex flex-col min-w-0">
        {/* Top Header */}
        <div className="h-10 md:h-14 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:block">仪表盘 /</span>
            <span className="text-white font-medium">
              {type === 'budgeting' ? '预算编制中心' : 
               type === 'control' ? '实时执行中心' : 
               type === 'analysis' ? '核心管理驾驶舱' : 
               type === 'modeling' ? 'MDS 多维建模' : '纵向 PDCA 纵览'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <div className="bg-slate-800/50 w-32 h-7 rounded-md border border-slate-700" />
            </div>
            <Bell size={16} className="text-slate-400" />
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 border border-white/20" />
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="p-4 md:p-6 flex-1 overflow-hidden">
          {type === 'control' ? (
            <ControlView />
          ) : type === 'budgeting' ? (
            <BudgetView />
          ) : type === 'analysis' ? (
            <AnalysisView />
          ) : type === 'modeling' ? (
            <ModelingView />
          ) : (
            <Overview />
          )}
        </div>
      </div>
    </div>
  )
}

interface NavItemProps {
  icon: LucideIcon
  label: string
  active?: boolean
}

function NavItem({ icon: Icon, label, active = false }: NavItemProps) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer ${active ? 'bg-[#0052D9] text-white shadow-lg' : 'hover:bg-slate-800/50 text-slate-400'}`}>
      <Icon size={16} />
      <span className="hidden md:block font-medium">{label}</span>
    </div>
  )
}

function Overview() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="本年总营收" value="¥ 4.28 B" trend="+12.5%" isUp={true} color="blue" />
        <MetricCard label="利润达成率" value="98.2%" trend="+2.1%" isUp={true} color="red" />
        <MetricCard label="预算节余" value="¥ 12.4 M" trend="-5.4%" isUp={false} color="slate" />
        <MetricCard label="预警事项" value="03" trend="稳定" isUp={true} color="yellow" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">战略分解执行趋势</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0052D9]" />
              <div className="w-2 h-2 rounded-full bg-slate-700" />
            </div>
          </div>
          <div className="flex-1 flex items-end justify-between gap-1 px-2">
            {[40, 65, 45, 80, 55, 95, 70, 85, 60, 100].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className="w-full bg-gradient-to-t from-[#0052D9]/20 to-[#0052D9] rounded-t-sm" 
              />
            ))}
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
           <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">关键业务事项</div>
           <div className="space-y-3">
              <ActivityItem label="年度战略指标下达" status="已完成" time="10:24" />
              <ActivityItem label="Q3 费控预警激活" status="进行中" time="09:15" color="yellow" />
              <ActivityItem label="海外事业部预算重估" status="待审批" time="昨天" color="blue" />
           </div>
        </div>
      </div>
    </div>
  )
}

interface MetricCardProps {
  label: string
  value: string
  trend: string
  isUp: boolean
  color: 'blue' | 'red' | 'slate' | 'yellow'
}

function MetricCard({ label, value, trend, isUp, color }: MetricCardProps) {
  const colorMap: Record<string, string> = {
    blue: 'border-l-blue-500',
    red: 'border-l-[#E60012]',
    slate: 'border-l-slate-400',
    yellow: 'border-l-yellow-500'
  }
  return (
    <div className={`bg-slate-900 border border-slate-800 border-l-4 ${colorMap[color]} p-3 rounded-r-lg`}>
      <div className="text-[10px] text-slate-500 font-medium mb-1">{label}</div>
      <div className="text-sm md:text-lg font-bold text-white mb-1">{value}</div>
      <div className={`flex items-center gap-1 text-[10px] ${isUp ? 'text-green-500' : 'text-red-500'}`}>
        {isUp ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
        {trend}
      </div>
    </div>
  )
}

interface ActivityItemProps {
  label: string
  time: string
  status?: string
  color?: 'green' | 'yellow' | 'blue'
}

function ActivityItem({ label, time, color = 'green' }: ActivityItemProps) {
  const dotColor: Record<string, string> = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500'
  }
  return (
    <div className="flex items-center justify-between p-2 hover:bg-slate-800/50 rounded transition-colors group">
      <div className="flex items-center gap-3">
        <div className={`w-1.5 h-1.5 rounded-full ${dotColor[color]}`} />
        <span className="text-slate-300">{label}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-medium opacity-60">{time}</span>
        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  )
}

function ControlView() {
  return (
    <div className="h-full flex flex-col gap-6">
       <div className="bg-[#E60012]/10 border border-[#E60012]/30 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E60012]/20 flex items-center justify-center">
              <ShieldAlert className="text-[#E60012]" size={20} />
            </div>
            <div>
              <div className="text-white font-bold">高风险预警：Q4 营销费用超支</div>
              <div className="text-slate-400 text-xs mt-0.5">预警触发规则：预算消耗比例 {' > '} 95% 且 无后续节余</div>
            </div>
          </div>
          <span className="bg-[#E60012] text-white px-3 py-1.5 rounded text-xs font-bold shadow-lg inline-flex items-center justify-center cursor-default">立即干预</span>
       </div>
       <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <div className="text-xs font-bold text-slate-400 mb-4">实时控制链路</div>
            <div className="space-y-4">
               {[
                 { step: '单据报销', val: '¥ 12,500', status: 'Blocked' },
                 { step: '合同签约', val: '¥ 450,000', status: 'Approved' },
                 { step: '采购申请', val: '¥ 88,000', status: 'Warning' }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">{item.step}</span>
                    <span className="font-mono text-white">{item.val}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${item.status === 'Approved' ? 'bg-green-500/10 text-green-500' : item.status === 'Blocked' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'}`}>{item.status}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 relative overflow-hidden">
             <div className="text-xs font-bold text-slate-400 mb-4">预算池动态实时监控</div>
             <div className="absolute inset-0 top-12 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-[8px] border-slate-800 flex items-center justify-center">
                   <div className="text-center">
                      <div className="text-2xl font-bold text-white">88%</div>
                      <div className="text-[10px] text-slate-500 uppercase">Consumed</div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

function BudgetView() {
  return (
    <div className="h-full flex flex-col gap-4">
       <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex-1">
          <div className="flex justify-between items-center mb-6">
             <div className="text-xs font-bold text-slate-400">年度预算编制报告 - 分布视图</div>
             <div className="flex gap-2 bg-slate-800 p-1 rounded">
                <div className="px-2 py-1 bg-[#0052D9] text-white text-[10px] rounded">按区域</div>
                <div className="px-2 py-1 text-slate-500 text-[10px] rounded">按产品</div>
             </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             {['华东', '华北', '华南', '西南'].map((reg, i) => (
               <div key={reg} className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <div className="text-xs text-slate-500 mb-2">{reg}大区</div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${(i+4)*15}%` }}
                       className="h-full bg-blue-500" 
                     />
                  </div>
                  <div className="text-right font-mono text-[10px] tracking-tight">¥ {(i+1)*2}42.5 M</div>
               </div>
             ))}
          </div>
          <div className="mt-8">
             <div className="text-[10px] text-slate-500 mb-2">多版滚动预测趋势</div>
             <div className="h-32 w-full flex items-end gap-1">
                {[30, 45, 60, 55, 75, 85, 90, 80, 95, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-1 items-center justify-end">
                     <div className="w-full bg-slate-800 rounded-t-sm" style={{ height: `${h * 0.8}%` }} />
                     <div className="w-full bg-blue-600 rounded-t-sm" style={{ height: `${h}%` }} />
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  )
}

function AnalysisView() {
  return (
    <div className="h-full grid grid-cols-3 gap-4">
       <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-6">
             <div className="text-xs font-bold text-slate-400">高管驾驶舱 - 利润灵敏度分析</div>
             <TrendingUp size={16} className="text-blue-500" />
          </div>
          <div className="flex-1 bg-slate-950/30 rounded border border-slate-800/50 m-2 flex flex-col p-4">
             <div className="text-[10px] text-slate-500 mb-4 italic">&quot;分析结论：若客单价下降 5%，为维持 20% 净利率，需消减物流成本 12.4%...&quot;</div>
             <div className="flex-1 relative">
                 {/* Simplified Chart Line */}
                 <svg className="w-full h-full" viewBox="0 0 400 150">
                    <path d="M0,100 Q100,20 200,80 T400,30" fill="none" stroke="#E60012" strokeWidth="2" />
                    <path d="M0,120 Q100,50 200,100 T400,60" fill="none" stroke="#0052D9" strokeWidth="2" strokeDasharray="4 2" />
                 </svg>
             </div>
          </div>
       </div>
       <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <div className="text-xs font-bold text-slate-400 mb-4">智能归因建议</div>
          <div className="space-y-4">
             <div className="p-2 border border-blue-900/50 bg-blue-950/20 rounded">
                <div className="text-blue-400 font-bold text-[10px]">收入增长归因</div>
                <div className="text-slate-300 text-[9px] mt-1">华东区双十一大促带动，环比贡献度 +18.2%</div>
             </div>
             <div className="p-2 border border-red-900/50 bg-red-950/20 rounded">
                <div className="text-[#E60012] font-bold text-[10px]">异常预警建议</div>
                <div className="text-slate-300 text-[9px] mt-1">原材料成本上涨风险：建议锁定 Q1 期货协议</div>
             </div>
          </div>
       </div>
    </div>
  )
}

function ModelingView() {
  return (
    <div className="h-full flex flex-col center items-center justify-center relative bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
       {/* Multidimensional database visualization */}
       <div className="flex gap-4">
          {[1,2,3].map(i => (
            <motion.div 
              key={i}
              initial={{ rotateX: 60, rotateY: 0, rotateZ: 45 }}
              animate={{ rotateZ: 405 }}
              transition={{ duration: 10 + i*2, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 border border-blue-500/50 relative flex items-center justify-center"
            >
               <div className="absolute inset-0 bg-blue-500/10" />
               <Database size={24} className="text-blue-500 opacity-40 -rotate-45" />
            </motion.div>
          ))}
       </div>
       <div className="mt-8 text-center px-8">
          <div className="text-blue-400 font-bold mb-2">M-OLAP 高性能引擎</div>
          <div className="text-slate-500 text-xs">亿级数据瞬间卷积，实现秒级经营实时反映。内置多维建模算法，支持从法人组织到管理纬度的全量镜像映射。</div>
       </div>
       <div className="absolute bottom-4 right-4 flex gap-2">
          <div className="px-2 py-1 bg-slate-800 text-slate-400 text-[8px] rounded">计算核心：ACTIVE</div>
          <div className="px-2 py-1 bg-slate-800 text-slate-400 text-[8px] rounded">延时：&lt; 0.1ms</div>
       </div>
    </div>
  )
}
