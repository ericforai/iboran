'use client'

import { motion } from 'framer-motion'
import { 
  FileText, Search, PenTool, LayoutTemplate, 
  BarChart3, AlertTriangle, CheckCircle2, 
  Clock, Bell, Settings, ChevronRight,
  ShieldCheck, AlertCircle, type LucideIcon
} from 'lucide-react'

interface CLMDashboardMockupProps {
  type?: 'overview' | 'drafting' | 'review' | 'signing' | 'monitoring'
}

export default function CLMDashboardMockup({ type = 'overview' }: CLMDashboardMockupProps) {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-xs font-sans selection:bg-blue-100">
      {/* Sidebar */}
      <div className="w-16 md:w-56 bg-[#001529] text-slate-400 flex flex-col flex-shrink-0 transition-all duration-300">
        <div className="h-14 flex items-center px-4 border-b border-slate-800/50">
          <div className="w-8 h-8 rounded-lg bg-[#E60012] flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
            Y
          </div>
          <span className="font-bold text-white tracking-wider hidden md:block truncate">YonBIP CLM</span>
        </div>

        <div className="flex-1 py-4 space-y-1 overflow-y-auto">
          <SidebarItem icon={LayoutTemplate} label="工作台" active={type === 'overview'} />
          <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-600 hidden md:block mt-4">
            合同管理
          </div>
          <SidebarItem icon={FileText} label="合同起草" active={type === 'drafting'} />
          <SidebarItem icon={ShieldCheck} label="合规审查" active={type === 'review'} />
          <SidebarItem icon={PenTool} label="电子签署" active={type === 'signing'} />
          <SidebarItem icon={BarChart3} label="履约监控" active={type === 'monitoring'} />
          <SidebarItem icon={Search} label="合同台账" />
        </div>

        <div className="p-4 border-t border-slate-800/50">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-200 font-bold border border-blue-800">
               JD
             </div>
             <div className="hidden md:block">
               <div className="text-slate-200 text-xs font-medium">法务总监</div>
               <div className="text-[10px]">admin@corp.com</div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#F3F4F6] min-w-0">
        {/* Header */}
        <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm flex-shrink-0">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="cursor-pointer hover:text-slate-800">首页</span>
            <ChevronRight size={14} />
            <span className="font-bold text-slate-800">
              {type === 'overview' && '合同全景看板'}
              {type === 'drafting' && '智能起草中心'}
              {type === 'review' && '智能合规审查'}
              {type === 'signing' && '签署任务中心'}
              {type === 'monitoring' && '履约执行监控'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell size={18} className="text-slate-500 hover:text-slate-700 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <Settings size={18} className="text-slate-500 hover:text-slate-700 cursor-pointer" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-hidden relative">
          {type === 'overview' && <OverviewView />}
          {type === 'drafting' && <DraftingView />}
          {type === 'review' && <ReviewView />}
          {type === 'signing' && <SigningView />}
          {type === 'monitoring' && <MonitoringView />}
        </div>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  active?: boolean
}

function SidebarItem({ icon: Icon, label, active = false }: SidebarItemProps) {
  return (
    <div className={`
      mx-2 px-3 py-2.5 rounded-lg flex items-center gap-3 cursor-pointer transition-all group
      ${active ? 'bg-[#E60012] text-white shadow-lg shadow-red-900/20' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'}
    `}>
      <Icon size={16} className={active ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'} />
      <span className="hidden md:block font-medium">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white hidden md:block" />}
    </div>
  )
}

// --- Views ---

function OverviewView() {
  return (
    <div className="space-y-6 h-full flex flex-col">
       {/* Stats Grid */}
       <div className="grid grid-cols-4 gap-4">
         <StatCard label="本月新增合同" value="128" trend="+12%" color="blue" />
         <StatCard label="待审核" value="15" trend="High Priority" color="amber" />
         <StatCard label="待签署" value="8" trend="Urgent" color="purple" />
         <StatCard label="履约风险预警" value="3" trend="-2" color="red" />
       </div>

       {/* Main Chart Area */}
       <div className="flex-1 grid grid-cols-3 gap-6 min-h-0">
          <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800">合同履行趋势</h3>
              <div className="flex gap-2 text-[10px]">
                <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">近30天</span>
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-400">近半年</span>
              </div>
            </div>
            {/* Mock Chart */}
            <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
               {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   transition={{ delay: i * 0.05 }}
                   className="w-full bg-blue-50 rounded-t-sm relative group"
                 >
                   <div className="absolute bottom-0 w-full bg-[#0052D9] rounded-t-sm transition-all duration-500" style={{ height: `${h * 0.6}%` }}></div>
                 </motion.div>
               ))}
            </div>
             <div className="flex justify-between text-[10px] text-slate-400 mt-2 px-2">
               <span>1月</span><span>2月</span><span>3月</span><span>4月</span>
             </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
            <h3 className="font-bold text-slate-800 mb-4">风险合规分布</h3>
            <div className="flex-1 flex items-center justify-center relative">
               <div className="w-32 h-32 rounded-full border-[12px] border-slate-100 border-t-[#E60012] border-r-orange-400 border-b-blue-500 -rotate-45" />
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-2xl font-bold text-slate-800">98.5%</span>
                 <span className="text-[10px] text-slate-400">合规率</span>
               </div>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-xs">
                 <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#E60012]"/> 高风险条款</span>
                 <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between text-xs">
                 <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-400"/> 相对方资质</span>
                 <span className="font-bold">5</span>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

function DraftingView() {
  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      {/* Templates */}
      <div className="col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 font-bold text-slate-700">标准范本库</div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {['采购框架合同 (2024版)', '技术服务协议', '保密协议 (NDN)', '劳动合同', '房屋租赁合同'].map((t, i) => (
            <div key={i} className={`p-3 rounded-lg text-xs cursor-pointer flex items-center gap-2 ${i === 0 ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'hover:bg-slate-50 text-slate-600'}`}>
               <FileText size={14} />
               {t}
            </div>
          ))}
        </div>
      </div>

      {/* Editor Area */}
      <div className="col-span-9 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
         <div className="h-12 border-b border-slate-100 flex items-center justify-between px-4">
            <div className="flex items-center gap-4 text-xs text-slate-600">
              <span className="font-bold">采购框架合同_V1.docx</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px]">编辑中</span>
            </div>
            <div className="flex gap-2">
               <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors text-xs font-bold">OCR 识别</button>
               <button className="px-3 py-1.5 bg-[#0052D9] text-white rounded hover:bg-blue-700 transition-colors text-xs font-bold">保存并送审</button>
            </div>
         </div>
         <div className="flex-1 p-8 bg-slate-100 overflow-y-auto">
            <div className="max-w-3xl mx-auto bg-white shadow-sm p-12 min-h-[500px] text-slate-800 leading-relaxed text-sm">
               <h1 className="text-center text-lg font-bold mb-8">采购框架合同</h1>
               <p className="mb-4">甲方（采购方）：<span className="bg-blue-50 px-2 py-0.5 border-b border-blue-200 text-blue-800">北京某某科技有限公司</span></p>
               <p className="mb-4">乙方（供应方）：<span className="bg-yellow-50 px-2 py-0.5 border-b border-yellow-200 text-slate-500">[请选择供应商]</span></p>
               <p className="mb-4 indent-8">
                 鉴于甲方因业务需要，向乙方采购相关产品/服务，双方根据《民法典》及相关法律法规，经友好协商，达成如下协议...
               </p>
               <div className="my-6 p-4 bg-slate-50 border border-dashed border-slate-300 rounded text-slate-400 text-center">
                 [条款 3.1 付款方式 待填充]
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

function ReviewView() {
  return (
    <div className="flex h-full gap-6">
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col relative">
         <div className="p-4 border-b border-slate-100 flex justify-between items-center">
            <span className="font-bold text-slate-800">合同文本审查</span>
            <div className="flex items-center gap-2 text-xs">
               <span className="flex items-center gap-1"><AlertTriangle size={12} className="text-orange-500" /> 3 处风险</span>
               <span className="flex items-center gap-1"><AlertCircle size={12} className="text-red-500" /> 1 处严重</span>
            </div>
         </div>
         <div className="flex-1 p-8 bg-slate-50 relative overflow-hidden">
             {/* Document visual */}
             <div className="bg-white shadow p-8 mx-auto max-w-2xl h-full text-xs text-slate-400 blur-[2px]">
                {Array(20).fill(0).map((_, i) => (
                  <div key={i} className="h-2 bg-slate-100 rounded mb-3 w-full" style={{ width: `${60 + (i * 10) % 40}%` }} />
                ))}
            </div>

            {/* AI Overlay Highlights */}
            <motion.div 
               className="absolute top-24 left-1/2 -translate-x-1/2 w-3/4 max-w-lg bg-orange-50 border border-orange-200 p-4 rounded-lg shadow-lg"
               initial={{ opacity: 0, y: 10, scale: 0.9 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ delay: 0.2 }}
            >
               <div className="flex gap-3">
                  <div className="mt-1"><AlertTriangle size={16} className="text-orange-500" /></div>
                  <div>
                    <div className="font-bold text-orange-900 mb-1">付款条款风险提示</div>
                    <p className="text-orange-800 leading-snug">
                      检测到&quot;预付 80%&quot;条款，高于集团采购管理办法规定的最高预付比例 (30%)。
                    </p>
                    <div className="mt-3 flex gap-2">
                      <button className="bg-white border border-orange-200 text-orange-700 px-2 py-1 rounded shadow-sm hover:bg-orange-50">保留原款</button>
                      <button className="bg-orange-500 text-white px-2 py-1 rounded shadow-sm hover:bg-orange-600">一键修正为 30%</button>
                    </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
      
      {/* Right Panel: AI Analysis */}
      <div className="w-80 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
         <div className="p-4 bg-purple-50 border-b border-purple-100">
            <div className="flex items-center gap-2 text-purple-700 font-bold">
               <ShieldCheck size={16} /> AI 智能合规助手
            </div>
         </div>
         <div className="p-4 space-y-4">
             <AnalysisItem title="相对方资信" status="pass" desc="营业执照存续，无重大涉诉记录" />
             <AnalysisItem title="金额一致性" status="pass" desc="大写金额与小写一致" />
             <AnalysisItem title="付款节点" status="warn" desc="预付款比例超标" />
             <AnalysisItem title="违约责任" status="pass" desc="条款完整，符合范本要求" />
         </div>
      </div>
    </div>
  )
}

function SigningView() {
   return (
      <div className="h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200 p-8">
         <div className="max-w-2xl w-full">
            <div className="relative flex justify-between mb-12">
               <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10" />
               <SignStep num="1" label="发起签署" status="done" />
               <SignStep num="2" label="相对方签署" status="active" />
               <SignStep num="3" label="内部用印" status="wait" />
               <SignStep num="4" label="签署完成" status="wait" />
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600"
               >
                 <PenTool size={32} />
               </motion.div>
               <h3 className="text-xl font-bold text-slate-800 mb-2">等待相对方签署</h3>
               <p className="text-slate-500 mb-6">已通过短信/邮件发送签署链接至 138****0000</p>
               <div className="flex justify-center gap-3">
                 <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">查看签署链接</button>
                 <button className="px-4 py-2 bg-[#0052D9] text-white rounded-lg hover:bg-blue-700">发送催签提醒</button>
               </div>
            </div>
         </div>
      </div>
   )
}

function MonitoringView() {
   return (
     <div className="h-full flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-6">
           <div className="p-4 bg-green-50 rounded-xl border border-green-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-green-600 shadow-sm"><CheckCircle2 size={20} /></div>
              <div>
                 <div className="text-xs text-green-700 font-bold uppercase">履行正常</div>
                 <div className="text-xl font-bold text-slate-800">856 份</div>
              </div>
           </div>
           <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-orange-500 shadow-sm"><Clock size={20} /></div>
              <div>
                 <div className="text-xs text-orange-700 font-bold uppercase">即将到期</div>
                 <div className="text-xl font-bold text-slate-800">23 份</div>
              </div>
           </div>
           <div className="p-4 bg-red-50 rounded-xl border border-red-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-500 shadow-sm"><AlertCircle size={20} /></div>
              <div>
                 <div className="text-xs text-red-700 font-bold uppercase">履约异常</div>
                 <div className="text-xl font-bold text-slate-800">5 份</div>
              </div>
           </div>
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
           <div className="p-4 border-b border-slate-100 font-bold text-slate-700">收付款计划监控</div>
           <div className="flex-1 overflow-x-auto">
             <table className="w-full text-left text-sm">
               <thead className="bg-slate-50 text-slate-500">
                 <tr>
                   <th className="p-4 font-medium">合同名称</th>
                   <th className="p-4 font-medium">款项类型</th>
                   <th className="p-4 font-medium">计划日期</th>
                   <th className="p-4 font-medium">金额</th>
                   <th className="p-4 font-medium">状态</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {[
                   { name: "年度IT设备采购合同", type: "预付款 30%", date: "2024-05-15", amt: "¥ 150,000", status: "paid" },
                   { name: "园区安保服务协议", type: "进度款 Q2", date: "2024-06-30", amt: "¥ 85,000", status: "pending" },
                   { name: "核心系统维保合同", type: "尾款 10%", date: "2024-07-10", amt: "¥ 28,000", status: "pending" },
                 ].map((row, i) => (
                   <tr key={i} className="hover:bg-slate-50">
                     <td className="p-4 font-medium text-slate-700">{row.name}</td>
                     <td className="p-4 text-slate-600">{row.type}</td>
                     <td className="p-4 text-slate-600">{row.date}</td>
                     <td className="p-4 font-mono font-bold text-slate-700">{row.amt}</td>
                     <td className="p-4">
                       {row.status === 'paid' ? 
                         <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">已支付</span> : 
                         <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">待支付</span>
                       }
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
     </div>
   )
}


// --- Components ---

interface StatCardProps {
  label: string
  value: string
  trend: string
  color: 'blue' | 'amber' | 'purple' | 'red'
}

function StatCard({ label, value, trend, color }: StatCardProps) {
  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    purple: "bg-purple-50 text-purple-600",
    red: "bg-red-50 text-red-600"
  }
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">{label}</div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-slate-800">{value}</div>
        <div className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${colors[color]}`}>{trend}</div>
      </div>
    </div>
  )
}

interface AnalysisItemProps {
  title: string
  status: 'pass' | 'warn' | 'fail'
  desc: string
}

function AnalysisItem({ title, status, desc }: AnalysisItemProps) {
   return (
     <div className="flex gap-3">
       <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${status === 'pass' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
         {status === 'pass' ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
       </div>
       <div>
         <div className="font-bold text-slate-700 text-xs">{title}</div>
         <div className="text-[10px] text-slate-500">{desc}</div>
       </div>
     </div>
   )
}

interface SignStepProps {
  num: string
  label: string
  status: 'done' | 'active' | 'wait'
}

function SignStep({ num, label, status }: SignStepProps) {
  return (
    <div className="flex flex-col items-center relative z-10 w-24">
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-colors
        ${status === 'done' ? 'bg-green-500 text-white' : ''}
        ${status === 'active' ? 'bg-[#0052D9] text-white ring-4 ring-blue-100' : ''}
        ${status === 'wait' ? 'bg-white border-2 border-slate-200 text-slate-300' : ''}
      `}>
        {status === 'done' ? <CheckCircle2 size={16} /> : num}
      </div>
      <div className={`text-xs font-bold ${status === 'wait' ? 'text-slate-300' : 'text-slate-700'}`}>{label}</div>
    </div>
  )
}
