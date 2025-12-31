'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  Square, 
  Users, 
  GitBranch, 
  Database, 
  ShieldCheck, 
  Search, 
  Bell, 
  Settings, 
  ChevronRight,
  Plus,
  Layout,
  BarChart3,
  ArrowRight,
  Globe,
  Lock,
  Workflow
} from 'lucide-react'

type ViewType = 'overview' | 'organization' | 'process' | 'object' | 'data' | 'compliance'

interface DashboardMockupProps {
  activeView?: ViewType
}

export default function DigitalModelingDashboardMockup({ activeView = 'overview' }: DashboardMockupProps) {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-[10px] md:text-xs">
      {/* Sidebar */}
      <div className="w-12 md:w-40 bg-[#001529] text-slate-400 flex flex-col border-r border-slate-800">
        <div className="h-10 flex items-center px-4 border-b border-slate-800 shrink-0">
          <div className="w-5 h-5 bg-[#1890FF] rounded flex items-center justify-center text-white mr-2">
            <Square size={12} fill="currentColor" />
          </div>
          <span className="hidden md:inline font-bold text-white tracking-widest text-[10px]">YonBIP PaaS</span>
        </div>
        
        <div className="p-2 space-y-1 overflow-y-auto grow custom-scrollbar">
          {[
            { id: 'overview', icon: Layout, label: '工作台概览' },
            { id: 'organization', icon: Users, label: '组织建模' },
            { id: 'process', icon: Workflow, label: '流程设计' },
            { id: 'object', icon: GitBranch, label: '业务对象' },
            { id: 'data', icon: Database, label: '主数据管理' },
            { id: 'compliance', icon: ShieldCheck, label: '合规与风险' },
          ].map((item) => (
            <div 
              key={item.id}
              className={`px-3 py-2 rounded flex items-center gap-2 cursor-pointer transition-colors ${
                activeView === item.id ? 'bg-[#1890FF] text-white' : 'hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <item.icon size={14} />
              <span className="hidden md:inline">{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="p-3 border-t border-slate-800 hidden md:block">
          <div className="flex items-center gap-2 text-[10px]">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            系统运行正常
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#F5F7FA] flex flex-col min-w-0">
        {/* Header */}
        <div className="h-10 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-2">
            <div className="text-slate-400">数字化建模 / </div>
            <div className="font-semibold text-slate-700">
              {activeView === 'overview' && '控制台总览'}
              {activeView === 'organization' && '多维组织树管理'}
              {activeView === 'process' && 'BPMN 2.0 流程设计器'}
              {activeView === 'object' && '业务对象元数据'}
              {activeView === 'data' && '主数据分级存储'}
              {activeView === 'compliance' && '多因子安全认证'}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
              <div className="w-32 h-6 bg-slate-100 rounded-full" />
            </div>
            <Bell size={14} className="text-slate-400" />
            <Settings size={14} className="text-slate-400" />
            <div className="w-6 h-6 rounded-full bg-[#0052D9] text-white flex items-center justify-center font-bold text-[10px]">
              Admin
            </div>
          </div>
        </div>
        
        {/* Body Area */}
        <div className="flex-1 p-4 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {activeView === 'overview' && <OverviewUI />}
              {activeView === 'organization' && <OrgTreeUI />}
              {activeView === 'process' && <ProcessDesignerUI />}
              {activeView === 'object' && <ObjectModelingUI />}
              {activeView === 'data' && <DataMasterUI />}
              {activeView === 'compliance' && <SecurityUI />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function OverviewUI() {
  return (
    <div className="grid grid-cols-3 gap-3 h-full overflow-hidden">
      <div className="col-span-2 space-y-3 shrink-0 min-w-0">
        {/* Charts Section */}
        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm h-48 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-slate-800">业务处理时长分析 (E2E)</span>
            <span className="text-[10px] text-blue-500 cursor-pointer">查看详情 <ChevronRight size={10} className="inline" /></span>
          </div>
          <div className="flex-1 flex items-end gap-2 pb-2">
            {[60, 45, 80, 55, 90, 70, 75].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-[#0052D9] to-[#40A9FF] rounded-t-sm"
              />
            ))}
          </div>
          <div className="flex justify-between border-t border-slate-100 pt-1 text-[8px] text-slate-400">
            <span>周一</span><span>周二</span><span>周三</span><span>周四</span><span>周五</span><span>周六</span><span>周日</span>
          </div>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col gap-1">
            <div className="text-slate-400">运行中实例</div>
            <div className="text-xl font-bold font-mono text-slate-800">2,842</div>
            <div className="text-green-500 text-[10px]">↑ 12.5% 从昨日</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col gap-1">
            <div className="text-slate-400">预警待处理</div>
            <div className="text-xl font-bold font-mono text-[#E60012]">15</div>
            <div className="text-[#E60012] opacity-60 text-[10px]">涉及 3 个高风险项</div>
          </div>
        </div>
      </div>
      
      {/* Right List Card */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-3 flex flex-col min-w-0">
        <div className="font-bold text-slate-800 mb-3 text-[11px] border-b border-slate-100 pb-2">异常巡检报告</div>
        <div className="space-y-3 shrink-0 overflow-y-auto grow pr-1 custom-scrollbar">
          {[
            { tag: '权限', title: '三员隔离审计异常', color: 'bg-red-50 text-red-600 border-red-100' },
            { tag: '主数据', title: '物料编码唯一性冲突', color: 'bg-orange-50 text-orange-600 border-orange-100' },
            { tag: '组织', title: '多维架构时间轴错位', color: 'bg-blue-50 text-blue-600 border-blue-100' },
            { tag: '流程', title: '采购审批流节点挂起', color: 'bg-slate-50 text-slate-600 border-slate-100' },
          ].map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-center shrink-0">
                <span className={`px-1.5 py-0.5 rounded text-[8px] border ${item.color}`}>{item.tag}</span>
                <span className="text-[8px] text-slate-300">10:45</span>
              </div>
              <div className="text-slate-700 font-medium truncate shrink-0">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OrgTreeUI() {
  return (
    <div className="bg-white h-full rounded-lg border border-slate-200 shadow-sm flex flex-col">
      <div className="p-3 border-b border-slate-100 flex justify-between items-center shrink-0">
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-blue-600 font-bold border-b-2 border-blue-600 pb-1">
            <Users size={12} /> 集团法人树
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 cursor-pointer pb-1">
            <BarChart3 size={12} /> 对内核算树
          </div>
        </div>
        <button className="bg-[#1890FF] text-white px-2 py-1 rounded flex items-center gap-1">
          <Plus size={10} /> 新增节点
        </button>
      </div>
      
      <div className="flex-1 p-4 flex flex-col items-center gap-4 overflow-auto custom-scrollbar">
        {/* Org Tree Mockup */}
        <div className="w-24 p-2 bg-slate-800 text-white rounded text-center font-bold shadow-md shrink-0">泊冉集团</div>
        <div className="w-0.5 h-6 bg-slate-300 shrink-0" />
        <div className="w-full flex justify-center gap-8 relative px-4 shrink-0">
          <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-slate-300 shrink-0" />
          {[
            { label: '华东大区', children: ['上海子公司', '南京办事处'] },
            { label: '华南大区', children: ['广州分公司', '深圳研发中心'] },
            { label: '海外事业部', children: ['新加坡中心', '欧洲办事处'] }
          ].map((node, i) => (
            <div key={i} className="flex flex-col items-center min-w-[80px] shrink-0">
              <div className="w-20 p-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded text-center font-medium shadow-sm shrink-0">
                {node.label}
              </div>
              <div className="w-0.5 h-4 bg-slate-200 shrink-0" />
              <div className="flex gap-2 shrink-0">
                {node.children.map((child, ci) => (
                  <div key={ci} className="w-16 p-1 bg-white border border-slate-100 rounded text-[8px] text-slate-500 text-center shadow-xs truncate shrink-0">
                    {child}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProcessDesignerUI() {
  return (
    <div className="bg-[#F8FAFC] h-full rounded-lg border border-slate-200 shadow-inner flex flex-col overflow-hidden">
      <div className="h-8 bg-white border-b border-slate-200 flex items-center px-4 gap-4 shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="text-[10px] text-slate-500 border-l border-slate-200 pl-4 font-mono font-medium">采购合同审批流.bpmn</div>
      </div>
      
      <div className="flex-1 relative flex shrink-0 min-w-0">
        {/* Nodes Palette */}
        <div className="w-8 md:w-32 bg-white border-r border-slate-100 p-2 space-y-2 shrink-0">
          <div className="font-bold text-[9px] text-slate-400 mb-2 uppercase hidden md:block">节点类型</div>
          {['开始', '任务', '分支', '消息', '子流程'].map((n, i) => (
            <div key={i} className="p-1.5 md:p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded flex items-center gap-2 cursor-grab shrink-0">
              <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-500/10 rounded flex items-center justify-center shrink-0">
                <div className={`w-2 h-2 ${i === 0 ? 'rounded-full' : i === 2 ? 'rotate-45' : ''} bg-blue-500`} />
              </div>
              <span className="hidden md:block scale-90 origin-left">{n}</span>
            </div>
          ))}
        </div>
        
        {/* Designer Canvas Area */}
        <div className="flex-1 relative overflow-hidden bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:20px_20px] shrink-0 min-w-0">
          <div className="absolute inset-0 flex items-center justify-center px-8 shrink-0 min-w-0">
            <div className="flex items-center gap-6 md:gap-12 shrink-0">
              <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-green-200 flex items-center justify-center text-white shrink-0 shadow-lg">
                <Plus size={14} />
              </div>
              <ArrowRight className="text-slate-300 shrink-0" size={16} />
              <motion.div 
                animate={{ scale: [1, 1.02, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 md:w-32 p-3 bg-white border-2 border-blue-500 rounded-lg shadow-xl relative shrink-0"
              >
                <div className="text-[#0052D9] font-bold mb-1 border-b border-blue-100 pb-1">财务部经理审批</div>
                <div className="text-slate-400 text-[8px] flex items-center gap-1 shrink-0"><Users size={10} /> 角色: 财务主管</div>
              </motion.div>
              <ArrowRight className="text-slate-300 shrink-0" size={16} />
              <div className="w-24 md:w-32 p-3 bg-white border border-slate-200 rounded-lg shadow-md shrink-0">
                <div className="text-slate-800 font-medium mb-1">CFO 终审</div>
                <div className="text-slate-400 text-[8px] shrink-0">并行网关校验</div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-2 right-2 bg-blue-50 border border-blue-200 px-2 py-1 rounded text-[#0052D9] font-bold animate-pulse shrink-0">
            仿真运行中
          </div>
        </div>
      </div>
    </div>
  )
}

function ObjectModelingUI() {
  return (
    <div className="bg-white h-full rounded-lg border border-slate-200 shadow-sm flex flex-col shrink-0 min-w-0 overflow-hidden">
      <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center gap-4 shrink-0">
        <div className="bg-blue-600 text-white px-2 py-1 rounded scale-90 shrink-0 font-bold">实体管理</div>
        <div className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer scale-90 shrink-0">关联规则</div>
        <div className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer scale-90 shrink-0">UI模板对照</div>
      </div>
      <div className="flex-1 flex overflow-hidden shrink-0 min-w-0">
        <div className="w-1/3 border-r border-slate-100 p-3 shrink-0 flex flex-col overflow-y-auto">
          <div className="text-slate-400 text-[9px] mb-2 uppercase shrink-0">实体库</div>
          {['销售订单 (SalesOrder)', '采购请购单 (PurchaseReq)', '物料主档 (Material)', '客户档案 (Customer)'].map((t, i) => (
            <div key={i} className={`p-2 rounded mb-1 cursor-pointer truncate ${i === 2 ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-600'}`}>
              {t}
            </div>
          ))}
        </div>
        <div className="flex-1 p-3 shrink-0 min-w-0 overflow-y-auto custom-scrollbar">
          <div className="font-bold text-slate-800 mb-3 shrink-0">属性定义: Material</div>
          <table className="w-full text-left shrink-0">
            <thead>
              <tr className="text-slate-400 border-b border-slate-100 font-normal">
                <th className="pb-2 font-normal">字段名称</th>
                <th className="pb-2 font-normal">类型</th>
                <th className="pb-2 font-normal">特征映射</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 overflow-y-auto">
              {[
                { name: 'material_code', type: 'String', mapping: '编码规则: MAT01' },
                { name: 'material_name', type: 'I18nString', mapping: '多语言翻译项' },
                { name: 'specification', type: 'String', mapping: '自由特征组: Spec' },
                { name: 'unit', type: 'Reference', mapping: '计量单位库' },
                { name: 'is_active', type: 'Boolean', mapping: '-' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-2 font-mono shrink-0 truncate">{row.name}</td>
                  <td className="py-2 shrink-0">{row.type}</td>
                  <td className="py-2 text-blue-500 scale-90 origin-left shrink-0 truncate">{row.mapping}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function DataMasterUI() {
  return (
    <div className="h-full flex flex-col gap-3 shrink-0 min-w-0 overflow-hidden">
      <div className="flex gap-3 shrink-0 h-1/3">
        <div className="flex-1 bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between shrink-0">
           <div className="flex items-center gap-2 text-blue-600">
             <Database size={16} /> <span className="font-bold">分级管控策略</span>
           </div>
           <div className="text-2xl font-bold text-slate-800">168 <span className="text-[10px] font-normal text-slate-400">个档案节点</span></div>
           <div className="flex gap-1 shrink-0">
             <div className="h-1.5 flex-1 bg-blue-500 rounded-full" />
             <div className="h-1.5 flex-1 bg-blue-300 rounded-full" />
             <div className="h-1.5 w-1/4 bg-slate-200 rounded-full" />
           </div>
        </div>
        <div className="flex-1 bg-[#1F2329] p-3 rounded-lg text-white flex flex-col justify-between shrink-0">
           <div className="flex items-center gap-2 text-slate-400">
             <Globe size={16} /> <span>国际化语种</span>
           </div>
           <div className="text-xl font-bold">10+ <span className="text-[10px] font-normal text-slate-500">已部署语言</span></div>
           <div className="flex gap-2 text-[8px] opacity-70 shrink-0">
             <span>CN</span><span>EN</span><span>HK</span><span>TW</span><span>SG</span>
           </div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col shrink-0 min-w-0 overflow-y-auto scrollbar-hide">
        <div className="px-4 py-3 border-b border-slate-100 font-bold text-slate-800 shrink-0">物料结构化编码定义</div>
        <div className="p-4 flex flex-col gap-4 shrink-0 min-w-0">
           <div className="flex items-center gap-1 overflow-x-auto pb-1 shrink-0 scrollbar-hide">
             {[
               { label: '物料分类', val: '01' },
               { label: '属性特征', val: 'WD' },
               { label: '年份', val: '24' },
               { label: '流水号', val: '001' }
             ].map((seg, i) => (
               <div key={i} className="flex items-center shrink-0">
                 <div className="flex flex-col items-center">
                   <div className="text-[8px] text-slate-400 mb-1">{seg.label}</div>
                   <div className="px-3 py-2 bg-slate-100 rounded font-mono font-bold text-slate-700">{seg.val}</div>
                 </div>
                 {i < 3 && <div className="mx-2 mt-4 text-slate-300">-</div>}
               </div>
             ))}
           </div>
           <div className="p-3 bg-blue-50 rounded italic text-blue-700 text-[10px] shrink-0 border border-blue-100">
             预览: 01-WD-24-001 (当前环境已启用自动流水规则)
           </div>
        </div>
      </div>
    </div>
  )
}

function SecurityUI() {
  return (
    <div className="bg-slate-900 h-full rounded-lg border border-slate-700 p-4 text-slate-300 flex flex-col shrink-0 min-w-0 overflow-hidden">
      <div className="flex justify-between items-center mb-6 shrink-0">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-green-400" size={18} />
          <span className="font-bold text-white text-base">安全及合规审计看板</span>
        </div>
        <div className="bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded text-[10px] shrink-0">已启用 MFA 强制认证</div>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-4 shrink-0 min-w-0 overflow-y-auto custom-scrollbar">
        <div className="space-y-4 shrink-0 overflow-hidden">
          <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shrink-0">
            <div className="text-slate-400 mb-2">访问地理位置分布</div>
            <div className="w-full aspect-video bg-slate-700/50 rounded flex items-center justify-center shrink-0">
              {/* Fake Map */}
              <div className="relative w-full h-full opacity-40 shrink-0">
                <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-blue-500 rounded-full animate-ping shrink-0" />
                <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-green-500 rounded-full shrink-0" />
              </div>
              <span className="absolute text-[8px] text-slate-500">MAP PREVIEW</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700 shrink-0">
              <div className="text-[9px] text-slate-500 mb-1">拦截攻击</div>
              <div className="text-lg font-bold text-white uppercase shrink-0">0 Detected</div>
            </div>
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700 shrink-0">
              <div className="text-[9px] text-slate-500 mb-1">当前存活令牌</div>
              <div className="text-lg font-bold text-white uppercase shrink-0">1,249</div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex flex-col shrink-0 overflow-hidden">
          <div className="text-slate-400 mb-2 shrink-0">管理员“三员监控”日志</div>
          <div className="space-y-2 grow shrink-0 overflow-y-auto">
            {[
              { op: '角色授权', user: 'Admin', status: 'Passed', icon: Lock },
              { op: '密级设定', user: 'Security', status: 'Alert', icon: ShieldCheck },
              { op: '数据脱敏', user: 'System', status: 'Success', icon: Database },
              { op: '环境迁移', user: 'Admin', status: 'Audit', icon: Globe },
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-2 p-1.5 hover:bg-slate-700 rounded transition-colors shrink-0">
                <log.icon size={12} className="text-slate-500 shrink-0" />
                <span className="truncate flex-1 shrink-0">{log.op}</span>
                <span className="text-[9px] text-slate-500 shrink-0">{log.user}</span>
                <span className={`text-[8px] ${log.status === 'Alert' ? 'text-red-400' : 'text-green-400'} shrink-0`}>[{log.status}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
