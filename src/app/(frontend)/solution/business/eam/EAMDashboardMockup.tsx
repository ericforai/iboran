'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Bell, 
  LayoutDashboard, 
  Database, 
  Wrench, 
  ClipboardCheck, 
  BarChart3,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react'

interface EAMDashboardMockupProps {
  activeTab?: string
}

const EAMDashboardMockup: React.FC<EAMDashboardMockupProps> = ({ activeTab = 'overview' }) => {
  return (
    <div className="w-full bg-[#F8FAFC] rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex font-sans text-slate-800 aspect-[16/10] min-h-[500px]">
      {/* Sidebar */}
      <div className="w-16 md:w-48 bg-[#011627] text-white/70 flex flex-col border-r border-slate-800 transition-all">
        <div className="h-16 flex items-center px-4 md:px-6 gap-3 border-b border-white/5">
          <div className="w-8 h-8 bg-[#E60012] rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-900/20">
            <Database size={16} />
          </div>
          <span className="font-extrabold text-white tracking-tight hidden md:block text-sm whitespace-nowrap">YonBIP EAM</span>
        </div>
        
        <div className="flex-1 py-4 px-2 md:px-3 space-y-1">
          <NavItem icon={<LayoutDashboard size={18} />} label="工作台" active={activeTab === 'overview'} />
          <NavItem icon={<Database size={18} />} label="资产台账" active={activeTab === 'registry'} />
          <NavItem icon={<Wrench size={18} />} label="运行维护" active={activeTab === 'maintenance'} />
          <NavItem icon={<ClipboardCheck size={18} />} label="智能巡检" active={activeTab === 'inspection'} />
          <NavItem icon={<BarChart3 size={18} />} label="数据分析" active={activeTab === 'analysis'} />
        </div>

        <div className="p-4 border-t border-white/10 hidden md:block">
          <div className="bg-white/5 rounded-lg p-3">
            <div className="text-[10px] text-white/40 uppercase font-semibold mb-1">系统状态</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-white/80">运行中: 2,492 资产</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-slate-800 tracking-tight">
              {activeTab === 'overview' && '智能资产管理概览'}
              {activeTab === 'registry' && '资产全生命周期台账'}
              {activeTab === 'maintenance' && '预测性维护工作台'}
              {activeTab === 'inspection' && '智能巡检管理'}
              {activeTab === 'analysis' && '资产运营效益分析'}
            </h2>
            <div className="hidden sm:flex bg-slate-100 rounded-full px-3 py-1 items-center gap-2 text-slate-400">
              <Search size={14} />
              <span className="text-xs">全局搜索资产、记录...</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 hover:bg-slate-100 rounded-full text-slate-500 relative cursor-pointer">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex items-center gap-2 pl-3 border-l border-slate-200 whitespace-nowrap">
              <div className="w-7 h-7 rounded-full bg-[#0052D9] text-white flex items-center justify-center text-[10px] font-medium">张</div>
              <div className="hidden md:block">
                <div className="text-[10px] font-bold text-slate-800 leading-tight">张经理</div>
                <div className="text-[8px] text-slate-400 leading-tight">资产管理员</div>
              </div>

            </div>
          </div>

        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && <OverviewView />}
            {activeTab === 'registry' && <RegistryView />}
            {activeTab === 'maintenance' && <MaintenanceView />}
            {activeTab === 'inspection' && <InspectionView />}
            {activeTab === 'analysis' && <AnalysisView />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

// Sub-components
const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`
    flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200
    ${active ? 'bg-[#0052D9] text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}
  `}>
    <div className="shrink-0">{icon}</div>
    <span className="text-[13px] font-medium hidden md:block whitespace-nowrap">{label}</span>
  </div>
)


const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white rounded-xl border border-slate-200 shadow-sm p-4 ${className}`}
  >
    {children}
  </motion.div>
)

const OverviewView = () => (
  <div className="space-y-6">
    {/* Summary Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {[
        {
          label: '资产总值', 
          value: '¥ 1.28 B', 
          trend: '+2.4%', 
          icon: <Database className="text-blue-500" size={18} />,
          color: 'blue'
        },
        { 
          label: '在用资产', 
          value: '2,140', 
          trend: '94.2%', 
          icon: <CheckCircle2 className="text-green-500" size={18} />,
          color: 'green'
        },
        { 
          label: '待修工单', 
          value: '42', 
          trend: '-5', 
          icon: <Wrench className="text-orange-500" size={18} />,
          color: 'orange'
        },
        { 
          label: '本月故障率', 
          value: '0.12%', 
          trend: '-0.02%', 
          icon: <AlertTriangle className="text-red-500" size={18} />,
          color: 'red'
        },
      ].map((stat, i) => (
        <Card key={i} className="flex flex-col justify-between h-28 md:h-32 p-3 md:p-5 group hover:border-blue-200 transition-colors">
          <div className="flex justify-between items-start">
            <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider whitespace-nowrap">{stat.label}</span>
            <div className="p-1.5 md:p-2.5 bg-slate-50 rounded-lg md:rounded-xl group-hover:bg-white transition-colors">{stat.icon}</div>
          </div>

          <div className="flex items-baseline justify-between gap-1 overflow-hidden">
            <span className="text-base md:text-xl font-black text-slate-800 tracking-tighter whitespace-nowrap shrink-0">{stat.value}</span>
            <div className={`px-1.5 md:px-2 py-0.5 rounded text-[8px] md:text-[9px] font-black tracking-tighter whitespace-nowrap ${
              stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 
              stat.trend.startsWith('-') ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
            }`}>
              {stat.trend}
            </div>
          </div>

        </Card>
      ))}



    </div>

    {/* Secondary Layer */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-800">资产负荷与维护趋势</h3>
          <div className="flex gap-2">
            <span className="flex items-center gap-1 text-[10px] text-slate-400"><div className="w-2 h-2 rounded-full bg-blue-500" /> 运行负荷</span>
            <span className="flex items-center gap-1 text-[10px] text-slate-400"><div className="w-2 h-2 rounded-full bg-red-500" /> 故障预警</span>
          </div>
        </div>
        <div className="h-48 flex items-end gap-2 px-2">
          {[40, 60, 45, 80, 55, 90, 70, 85, 60, 75, 50, 65].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="w-full bg-blue-500/20 hover:bg-blue-500/40 rounded-t transition-colors relative group"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-blue-500 rounded-full" />
                {i === 5 && <div className="absolute -top-1 w-full h-1 bg-red-500 rounded-full animate-ping" />}
              </motion.div>
              <span className="text-[10px] text-slate-300 scale-75">{i+1}月</span>
            </div>
          ))}
        </div>
      </Card>
      
      <Card>
        <h3 className="font-bold text-slate-800 mb-4">近期资产动态</h3>
        <div className="space-y-4">
          {[
            { title: '特种起重机-A28 巡检异常', time: '10分钟前', type: 'warning' },
            { title: '中央空调#2 维护工单已关闭', time: '2小时前', type: 'success' },
            { title: '新资产入库: 工业机器人x5', time: '5小时前', type: 'info' },
            { title: '备品备件库存低于临界值', time: '昨天', type: 'danger' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <div className={`w-1 h-8 rounded-full shrink-0 ${
                item.type === 'warning' ? 'bg-orange-400' : 
                item.type === 'success' ? 'bg-green-400' : 
                item.type === 'danger' ? 'bg-red-400' : 'bg-blue-400'
              }`} />
              <div>
                <div className="text-[11px] font-semibold text-slate-800 line-clamp-1">{item.title}</div>
                <div className="text-[10px] text-slate-400">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
)

const RegistryView = () => (
  <Card className="h-full">
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-4">
        <div className="space-x-1">
          <button className="px-3 py-1 bg-slate-100 rounded text-[11px] font-bold text-slate-700">全部资产</button>
          <button className="px-3 py-1 hover:bg-slate-50 rounded text-[11px] font-medium text-slate-400">特种设备</button>
          <button className="px-3 py-1 hover:bg-slate-50 rounded text-[11px] font-medium text-slate-400">基础建设</button>
        </div>
      </div>
      <button className="flex items-center gap-1 px-3 py-1.5 bg-[#E60012] text-white rounded-md text-[11px] font-bold">
        <Plus size={14} /> 新增资产
      </button>
    </div>
    <div className="overflow-hidden">
      <table className="w-full text-left">
        <thead className="border-b border-slate-100 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
          <tr>
            <th className="pb-3 pl-2">资产编码</th>
            <th className="pb-3">资产名称</th>
            <th className="pb-3">类别</th>
            <th className="pb-3">状态</th>
            <th className="pb-3 text-right pr-2">剩余寿命(天)</th>
          </tr>
        </thead>
        <tbody className="text-[11px]">
          {[
            { id: 'EAM-2024-0012', name: '精密注塑机 #04', type: '机电设备', status: '运行中', health: 1205 },
            { id: 'EAM-2024-0045', name: '自动化搬运AGV', type: '特种设备', status: '维护中', health: 432 },
            { id: 'EAM-2024-0128', name: '高压变压器 3#', type: '基础设施', status: '就绪', health: 2840 },
            { id: 'EAM-2024-0256', name: '数控加工中心 T1', type: '机电设备', status: '运行中', health: 890 },
            { id: 'EAM-2024-0312', name: '消防监控系统', type: '基础设施', status: '故障', health: 12 },
          ].map((asset, i) => (
            <tr key={i} className="border-b border-slate-50 group hover:bg-slate-50/80 transition-colors">
              <td className="py-3 pl-2 font-mono text-slate-500">{asset.id}</td>
              <td className="py-3 font-bold text-slate-800">{asset.name}</td>
              <td className="py-3 text-slate-500">{asset.type}</td>
              <td className="py-3">
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                  asset.status === '运行中' ? 'bg-green-50 text-green-600' :
                  asset.status === '维护中' ? 'bg-orange-50 text-orange-600' :
                  asset.status === '故障' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                }`}>
                  {asset.status}
                </span>
              </td>
              <td className="py-3 text-right pr-2 font-bold text-slate-700">
                {asset.health}
                <div className="w-24 bg-slate-100 h-1 mt-1 rounded-full overflow-hidden ml-auto">
                   <div className={`h-full ${asset.health < 100 ? 'bg-red-500 w-[10%]' : 'bg-blue-500 w-[70%]'}`} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
)

const MaintenanceView = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
    <Card className="flex flex-col">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Wrench size={16} className="text-[#0052D9]" /> 维护工单列表
      </h3>
      <div className="flex-1 space-y-3">
        {[
          { title: '注塑机液压系统漏油修复', priority: '高', date: '今日' },
          { title: '中央空调冷却塔季度保养', priority: '中', date: '明日' },
          { title: '变配电系统定期除尘', priority: '低', date: '12-28' },
        ].map((task, i) => (
          <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-1">
              <div className="text-[11px] font-bold text-slate-800 group-hover:text-blue-600">{task.title}</div>
              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                task.priority === '高' ? 'bg-red-100 text-red-600' : 
                task.priority === '中' ? 'bg-orange-100 text-orange-600' : 'bg-slate-200 text-slate-600'
              }`}>{task.priority}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400 flex items-center gap-1"><Clock size={10} /> 截止: {task.date}</span>
              <span className="text-[9px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">接单 →</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
    
    <Card className="bg-slate-900 border-none text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 text-[#0052D9]/20">
        <Wrench size={120} />
      </div>
      <div className="relative z-10">
        <div className="text-xs text-white/40 mb-1">AI 预测性报告</div>
        <h3 className="text-lg font-bold mb-4">设备健康趋势分析</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span>注塑机#04 实时轴承温度</span>
              <span className="text-orange-400">82°C (预警位: 85°C)</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="bg-orange-400 h-full w-[94%]" />
            </div>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={14} className="text-yellow-500" />
              <div className="text-[11px] font-bold">维护建议</div>
            </div>
            <p className="text-[10px] text-white/60 leading-relaxed">
              根据振动监测数据流，该设备减速机存在 85% 概率在未来 72 小时内发生机械疲劳。
              建议立即排期进行润滑检查。
            </p>
          </div>
        </div>
      </div>
    </Card>
  </div>
)

const InspectionView = () => (
  <Card className="h-full relative overflow-hidden">
    <div className="absolute inset-0 bg-slate-50 pointer-events-none opacity-50" />
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-800">区域巡检概览</h3>
        <div className="flex gap-2">
           <div className="flex items-center gap-1 text-[10px]"><div className="w-2 h-2 rounded bg-green-500" /> 已完成</div>
           <div className="flex items-center gap-1 text-[10px]"><div className="w-2 h-2 rounded bg-orange-500" /> 进行中</div>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-4">
        {[
          { name: 'A区 生产车间', progress: 100, staff: '李工', issues: 0 },
          { name: 'B区 仓储中心', progress: 45, staff: '王工', issues: 2 },
          { name: 'C区 动力机房', progress: 80, staff: '陈工', issues: 1 },
          { name: 'D区 办公主楼', progress: 0, staff: '未领用', issues: 0 },
        ].map((area, i) => (
          <div key={i} className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-slate-800 mb-1">{area.name}</div>
              <div className="text-[10px] text-slate-400">执行人: {area.staff}</div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-[9px] mb-1">
                <span>巡检进度 {area.progress}%</span>
                {area.issues > 0 && <span className="text-red-500 font-bold">发现了 {area.issues} 个隐患</span>}
              </div>
              <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full transition-all duration-500 ${
                  area.progress === 100 ? 'bg-green-500' : 'bg-orange-500'
                }`} style={{ width: `${area.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
            <TrendingUp size={20} />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">智能点检在线</div>
            <div className="text-[10px] text-slate-500">当前 12 名巡检员已上线，实时同步 382 个采集点位</div>
          </div>
        </div>
        <button className="px-4 py-2 bg-white text-blue-600 text-[10px] font-bold rounded-lg border border-blue-100 shadow-sm">
          查看大盘
        </button>
      </div>
    </div>
  </Card>
)

const AnalysisView = () => (
   <div className="grid grid-cols-3 gap-6 h-full">
     <Card className="col-span-1 flex flex-col justify-between">
       <div>
         <h3 className="font-bold text-slate-800 mb-6">资产类别分布</h3>
         <div className="relative h-40 flex items-center justify-center">
            {/* Simple Pie Chart Representation */}
            <div className="w-32 h-32 rounded-full border-[10px] border-blue-500 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold">642</div>
                <div className="text-[10px] text-slate-400">设备总数</div>
              </div>
            </div>
            {/* Legend */}
            <div className="absolute top-0 right-0 space-y-2">
              <div className="flex items-center gap-2 text-[9px] font-bold"><div className="w-2 h-2 rounded bg-blue-500" /> 机电设备 42%</div>
              <div className="flex items-center gap-2 text-[9px] font-bold"><div className="w-2 h-2 rounded bg-red-400" /> 特种设备 24%</div>
              <div className="flex items-center gap-2 text-[9px] font-bold"><div className="w-2 h-2 rounded bg-slate-300" /> 其他 34%</div>
            </div>
         </div>
       </div>
       <div className="pt-4 border-t border-slate-50">
          <button className="w-full py-2 bg-slate-50 text-slate-600 text-[10px] font-bold rounded flex items-center justify-center gap-1">
            <ArrowUpRight size={12} /> 查看详细报告
          </button>
       </div>
     </Card>

     <Card className="col-span-2">
        <h3 className="font-bold text-slate-800 mb-6">资产全寿命周期投资收益 (ROI)</h3>
        <div className="h-56 relative">
          {/* ROI Chart Mock */}
          <div className="absolute inset-0 flex items-end justify-around px-4">
            {[30, 45, 40, 65, 80, 75, 95].map((h, i) => (
              <div key={i} className="w-8 flex flex-col items-center gap-2">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="w-full bg-gradient-to-t from-[#0052D9] to-blue-400 rounded-t-lg"
                />
                <span className="text-[10px] text-slate-400">Q{i+1}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 bg-blue-50 p-3 rounded-lg border border-blue-100">
             <div className="text-[10px] text-blue-800 font-bold mb-1 flex items-center gap-1"><TrendingUp size={12} /> ROI 提升率</div>
             <div className="text-xl font-black text-blue-900">18.5%</div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
           <div className="p-3 bg-slate-50 rounded-lg">
             <div className="text-[10px] text-slate-400">折旧率监控</div>
             <div className="text-sm font-bold text-slate-800">符合预期</div>
           </div>
           <div className="p-3 bg-slate-50 rounded-lg">
             <div className="text-[10px] text-slate-400">维保费用对比</div>
             <div className="text-sm font-bold text-red-600">-12.4% (同比)</div>
           </div>
        </div>
     </Card>
   </div>
)

export default EAMDashboardMockup
