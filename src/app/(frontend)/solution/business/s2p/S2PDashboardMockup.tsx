'use client'

import React from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  AlertCircle, 
  Search, 
  Bell, 
  Settings,
  ShoppingCart,
  Truck,
  FileText,
  Users,
  CheckCircle2,
  Clock
} from 'lucide-react'

// Type definition for dashboard types
type DashboardType = 'sourcing' | 'procurement' | 'supplier' | 'analysis'

interface S2PDashboardMockupProps {
  type: DashboardType
}

export default function S2PDashboardMockup({ type }: S2PDashboardMockupProps) {
  return (
    <div className="w-full h-full min-h-[500px] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xl relative select-none flex flex-col">
      {/* Header - Global */}
      <div className="bg-white border-b border-slate-200 h-14 flex items-center justify-between sticky top-0 z-20">
        {/* Dark Sidebar Header Extension */}
        <div className="w-16 lg:w-56 h-full bg-slate-900 border-r border-slate-900 hidden md:flex items-center justify-center lg:justify-start lg:px-6">
           <div className="w-8 h-8 bg-[#E60012] rounded flex items-center justify-center text-white font-bold text-lg">
             Y
           </div>
           <span className="ml-3 font-bold text-white text-lg hidden lg:block tracking-tight">YonBIP S2P</span>
        </div>
        
        {/* Main Header Content */}
        <div className="flex-1 px-4 flex items-center justify-between h-full bg-white">
          <div className="flex items-center gap-4">
             <div className="text-sm font-medium text-slate-500 hidden md:block">
               {type === 'sourcing' && '战略寻源工作台'}
               {type === 'procurement' && '采购执行中心'}
               {type === 'supplier' && '供应商协同门户'}
               {type === 'analysis' && '采购支出分析'}
             </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="relative">
                <Bell size={20} className="text-slate-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
             </div>
             <Settings size={20} className="text-slate-400" />
             <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
               PM
             </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 lg:w-56 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col flex-shrink-0 pt-6">
           {/* Navigation */}
           <div className="space-y-1 px-3 flex-1 overflow-y-auto">
             {[
               { icon: BarChart3, label: "概览", active: type === 'analysis' },
               { icon: Search, label: "寻源招标", active: type === 'sourcing' },
               { icon: ShoppingCart, label: "采购订单", active: type === 'procurement' },
               { icon: Users, label: "供应商库", active: type === 'supplier' },
               { icon: FileText, label: "合同管理", active: false },
               { icon: Truck, label: "库存物流", active: false },
             ].map((item, idx) => (
               <div 
                  key={idx} 
                  className={`
                    h-10 rounded-lg flex items-center justify-center lg:justify-start lg:px-3 gap-3 cursor-pointer transition-colors
                    ${item.active ? 'bg-[#E60012] text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                  `}
               >
                  <item.icon size={18} className={item.active ? "text-white" : "text-slate-400"} />
                  <span className={`text-sm font-medium hidden lg:block ${item.active ? "text-white" : ""}`}>{item.label}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto bg-[#F7F8FA] p-6">
          {type === 'sourcing' && <SourcingView />}
          {type === 'procurement' && <ProcurementView />}
          {type === 'supplier' && <SupplierView />}
          {type === 'analysis' && <AnalysisView />}
        </div>
      </div>
    </div>
  )
}

// --- Specific View Components ---

function SourcingView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="进行中招标" value="12" sub="3个即将截止" accent="blue" />
        <StatCard title="待评审项目" value="5" sub="高优先级: 2" accent="orange" />
        <StatCard title="累计节资额" value="¥2.4M" sub="环比增长 15%" accent="green" />
      </div>

      <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-800">最新寻源项目</h3>
          <button className="text-blue-600 text-sm font-medium">查看全部</button>
        </div>
        <div className="space-y-3">
          {[
            { name: "2025年度 IT 设备集采项目", status: "招标中", date: "2024-12-30", type: "公开招标" },
            { name: "华东区物流运输服务外包", status: "专家评审", date: "2024-12-28", type: "邀请招标" },
            { name: "Q1 办公用品定点采购", status: "待发布", date: "2025-01-05", type: "询价" },
          ].map((item, i) => (
             <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100 transition-all">
               <div>
                 <div className="font-semibold text-slate-700 text-sm">{item.name}</div>
                 <div className="text-xs text-slate-400 mt-1 flex gap-2">
                   <span>{item.type}</span>
                   <span>|</span>
                   <span>截止: {item.date}</span>
                 </div>
               </div>
               <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                 item.status === '招标中' ? 'bg-blue-100 text-blue-600' :
                 item.status === '专家评审' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
               }`}>
                 {item.status}
               </span>
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProcurementView() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4 overflow-x-auto pb-2">
        <ProcessStep label="采购申请" count={8} active />
        <ProcessStep label="订单下达" count={12} active />
        <ProcessStep label="供应商确认" count={5} />
        <ProcessStep label="收货质检" count={3} />
        <ProcessStep label="入库结算" count={0} isLast />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
           <h3 className="font-bold text-slate-800 mb-4">待处理订单</h3>
           <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-3 p-2 border-b border-slate-50 last:border-0">
                  <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-blue-600">
                    <ShoppingCart size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-slate-700">PO-20241230-{i}0</span>
                      <span className="text-xs text-orange-500 font-medium">待收货</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">供应商: 联想(北京)有限公司 | ¥{(i * 12000).toLocaleString()}</div>
                  </div>
                </div>
              ))}
           </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
           <h3 className="font-bold text-slate-800 mb-4">自动补货建议</h3>
           <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 mb-3">
             <div className="flex gap-2 text-blue-700 font-medium text-sm items-center mb-1">
               <AlertCircle size={16} /> A 类物料库存预警
             </div>
             <p className="text-xs text-blue-600/80">核心芯片 X-Intel 库存低于安全水位 (500)，建议立即补货 2000。</p>
             <button className="mt-2 text-xs bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition">一键生成订单</button>
           </div>
        </div>
      </div>
    </div>
  )
}

function SupplierView() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4">供应商全生命周期概览</h3>
        <div className="grid grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-slate-50 rounded-lg">
               <div className="text-2xl font-bold text-slate-800">12</div>
               <div className="text-xs text-slate-500 mt-1">注册待审</div>
            </div>
             <div className="p-3 bg-slate-50 rounded-lg">
               <div className="text-2xl font-bold text-green-600">248</div>
               <div className="text-xs text-slate-500 mt-1">合格供应商</div>
            </div>
             <div className="p-3 bg-slate-50 rounded-lg">
               <div className="text-2xl font-bold text-orange-500">5</div>
               <div className="text-xs text-slate-500 mt-1">整改中</div>
            </div>
             <div className="p-3 bg-slate-50 rounded-lg">
               <div className="text-2xl font-bold text-red-500">2</div>
               <div className="text-xs text-slate-500 mt-1">黑名单</div>
            </div>
        </div>
      </div>

       <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
         <h3 className="font-bold text-slate-800 mb-4">风险监控列表</h3>
         <table className="w-full text-sm">
           <thead>
             <tr className="text-slate-400 text-left border-b border-slate-100">
               <th className="pb-2 pl-2">供应商名称</th>
               <th className="pb-2">主要产品</th>
               <th className="pb-2">风险等级</th>
               <th className="pb-2">预警原因</th>
             </tr>
           </thead>
           <tbody className="text-slate-600">
             <tr className="border-b border-slate-50">
               <td className="py-3 pl-2 font-medium">XX 精密电子</td>
               <td>连接器</td>
               <td><span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">高风险</span></td>
               <td className="text-xs">司法诉讼增加</td>
             </tr>
              <tr className="border-b border-slate-50">
               <td className="py-3 pl-2 font-medium">YY 物流集团</td>
               <td>运输</td>
               <td><span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs">中风险</span></td>
               <td className="text-xs">经营异常名录</td>
             </tr>
           </tbody>
         </table>
       </div>
    </div>
  )
}

function AnalysisView() {
  return (
    <div className="space-y-6">
       <div className="grid grid-cols-2 gap-4">
         <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
           <h3 className="text-sm font-bold text-slate-700 mb-4 px-2">采购支出类别占比</h3>
           <div className="flex items-center justify-center h-40 relative">
             <div className="w-32 h-32 rounded-full border-[12px] border-blue-500 border-r-green-400 border-b-orange-300"></div>
             <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500">Total</div>
           </div>
           <div className="flex justify-center gap-4 mt-2 text-xs text-slate-500">
             <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>生产</span>
             <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-400 rounded-full"></div>MRO</span>
             <span className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-300 rounded-full"></div>服务</span>
           </div>
         </div>

         <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
           <h3 className="text-sm font-bold text-slate-700 mb-4 px-2">采购价格趋势 (Top 3)</h3>
           <div className="h-40 flex items-end justify-around pb-2 gap-2 border-b border-slate-100 px-4">
              <div className="w-8 bg-blue-200 h-[80%] rounded-t mx-auto relative group">
                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-1.5 rounded opacity-0 group-hover:opacity-100 transition">CPU</div>
              </div>
              <div className="w-8 bg-blue-400 h-[60%] rounded-t mx-auto relative group">
                  <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-1.5 rounded opacity-0 group-hover:opacity-100 transition">S2</div>
              </div>
              <div className="w-8 bg-blue-600 h-[40%] rounded-t mx-auto relative group">
                   <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-1.5 rounded opacity-0 group-hover:opacity-100 transition">S3</div>
              </div>
           </div>
           <div className="text-center text-xs text-slate-400 mt-2">Q1 - Q4 均价波动</div>
         </div>
       </div>

       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-5 text-white flex justify-between items-center shadow-lg">
          <div>
            <div className="text-blue-100 text-sm mb-1">本年度累计节省成本</div>
            <div className="text-3xl font-bold">¥ 4,820,000</div>
          </div>
          <div className="text-right">
             <div className="flex items-center gap-1 text-green-300 text-sm font-medium justify-end">
               <TrendingUp size={16} /> +12.5%
             </div>
             <div className="text-blue-200 text-xs">较去年同期</div>
          </div>
       </div>
    </div>
  )
}


// --- Helper Components ---
function StatCard({ title, value, sub, accent }: { title: string, value: string, sub: string, accent: 'blue' | 'orange' | 'green' }) {
  const colors = {
    blue: "text-blue-600 bg-blue-50",
    orange: "text-orange-600 bg-orange-50",
    green: "text-green-600 bg-green-50"
  }
  
  return (
    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
      <div className="text-sm text-slate-500 mb-1">{title}</div>
      <div className={`text-2xl font-bold mb-2 ${accent === 'blue' ? 'text-blue-700' : accent === 'green' ? 'text-green-700' : 'text-orange-700'}`}>{value}</div>
      <div className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${colors[accent]}`}>
        {sub}
      </div>
    </div>
  )
}

function ProcessStep({ label, count, active, isLast }: { label: string, count: number, active?: boolean, isLast?: boolean }) {
  return (
    <div className="flex items-center flex-shrink-0">
      <div className={`
        flex flex-col items-center justify-center w-24 p-2 rounded-lg border 
        ${active ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100'}
      `}>
          <div className={`text-lg font-bold ${active ? 'text-blue-600' : 'text-slate-400'}`}>{count}</div>
          <div className={`text-xs ${active ? 'text-blue-500' : 'text-slate-500'}`}>{label}</div>
      </div>
      {!isLast && <div className="w-8 h-0.5 bg-slate-200 mx-2"></div>}
    </div>
  )
}
