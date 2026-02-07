'use client'

import { 
  Users, TrendingUp, DollarSign,
  ShoppingCart, Package, Truck, Activity,
  MoreHorizontal, Plus, Search, Bell
} from 'lucide-react'
import { motion } from 'framer-motion'

interface DashboardMockupProps {
  type: string
}

export default function DashboardMockup({ type }: DashboardMockupProps) {
  
  const renderContent = () => {
    switch(type) {
      case 'sale':
        return <CRMDashboard />
      case 'commerce':
        return <CommerceDashboard />
      case 'supply':
        return <SupplyDashboard />
      case 'finance':
        return <FinanceDashboard />
      default:
        return <CRMDashboard />
    }
  }

  return (
    <div className="w-full h-full min-h-[400px] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xl relative select-none">
      {/* Browser/App Header */}
      <div className="bg-white border-b border-slate-200 h-14 flex items-center justify-between sticky top-0 z-20">
        {/* Dark Sidebar Header Extension */}
        <div className="w-16 lg:w-56 h-full bg-slate-900 border-r border-slate-900 hidden md:flex items-center justify-center lg:justify-start lg:px-6">
           {/* Mobile Menu Icon Placeholder */}
           <div className="flex gap-2 lg:hidden">
              <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/20"></div>
           </div>
        </div>
        
        {/* Main Header Content */}
        <div className="flex-1 px-4 flex items-center justify-between h-full">
           <div className="flex items-center gap-2 md:hidden">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          <div className="flex-1 max-w-xl mx-4 bg-slate-100 rounded-lg h-9 hidden md:flex items-center px-4 hover:bg-slate-200/50 transition-colors cursor-text group">
            <Search size={16} className="text-slate-400 group-hover:text-slate-500" />
            <span className="ml-3 text-sm text-slate-400 group-hover:text-slate-500">Global Search...</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer hover:bg-slate-100 p-2 rounded-full transition-colors">
               <Bell size={20} className="text-slate-500" />
               <div className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="w-8 h-8 bg-indigo-600 rounded-full text-sm text-white flex items-center justify-center font-bold shadow-sm cursor-pointer hover:ring-2 hover:ring-indigo-100 transition-all">
              A
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="flex h-full min-h-[500px]">
        {/* Sidebar */}
        <div className="w-16 lg:w-56 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col flex-shrink-0 transition-all duration-300 pt-6">
           {/* Navigation */}
           <div className="space-y-1 px-3 flex-1 overflow-y-auto">
             {[
               { icon: Activity, label: "工作台", active: true },
               { icon: Users, label: "客户管理", active: false },
               { icon: DollarSign, label: "销售机会", active: false },
               { icon: ShoppingCart, label: "订单中心", active: false },
               { icon: MoreHorizontal, label: "更多应用", active: false },
             ].map((item, idx) => (
               <div 
                  key={idx} 
                  className={`
                    h-10 rounded-lg flex items-center justify-center lg:justify-start lg:px-3 gap-3 cursor-pointer transition-colors
                    ${item.active ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                  `}
               >
                  <item.icon size={20} className={item.active ? "text-white" : "text-slate-400"} />
                  <span className={`text-sm font-medium hidden lg:block ${item.active ? "text-white" : ""}`}>{item.label}</span>
               </div>
             ))}
           </div>

           {/* Bottom User Area */}
           <div className="p-4 border-t border-slate-800 mt-auto">
             <div className="flex items-center gap-3 justify-center lg:justify-start bg-slate-800/50 p-2 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 border-2 border-slate-700"></div>
               <div className="hidden lg:block overflow-hidden">
                 <div className="text-sm font-bold text-slate-200 truncate">Admin User</div>
                 <div className="text-xs text-slate-500 truncate">admin@example.com</div>
               </div>
             </div>
           </div>
        </div>

        {/* Main Area */}
        <div className="flex-1 bg-[#F5F7FA] p-4 lg:p-6 overflow-hidden">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

function CRMDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-slate-800 text-lg">销售总览</h3>
          <p className="text-xs text-slate-500">最后更新: 刚刚</p>
        </div>
        <div className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1">
          <Plus size={12} /> 新建商机
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-slate-500 font-medium">本月销售额</span>
            <TrendingUp size={14} className="text-green-500" />
          </div>
          <div className="text-xl font-bold text-slate-800">¥1,245K</div>
          <div className="text-[10px] text-green-600 bg-green-50 inline-block px-1.5 py-0.5 rounded mt-1">+12.5%</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-slate-500 font-medium">转化率</span>
            <Activity size={14} className="text-blue-500" />
          </div>
          <div className="text-xl font-bold text-slate-800">28.4%</div>
          <div className="text-[10px] text-blue-600 bg-blue-50 inline-block px-1.5 py-0.5 rounded mt-1">+3.2%</div>
        </div>
      </div>

      {/* Funnel */}
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <h4 className="text-sm font-bold text-slate-700 mb-4">销售漏斗</h4>
        <div className="space-y-3">
          {[
            { l: '线索', v: '近100%', c: 'bg-blue-100' },
            { l: '商机', v: '75%', c: 'bg-blue-200' },
            { l: '报价', v: '50%', c: 'bg-blue-400' },
            { l: '合同', v: '25%', c: 'bg-blue-600' }
          ].map((item, idx) => (
             <div key={idx} className="flex items-center gap-2">
               <span className="text-[10px] w-8 text-slate-500">{item.l}</span>
               <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: item.v }}
                   transition={{ duration: 1, delay: idx * 0.1 }}
                   className={`h-full rounded-full ${item.c}`} 
                 />
               </div>
               <span className="text-[10px] w-8 text-right font-medium">{item.v}</span>
             </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
         <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
             <Bell size={14} />
           </div>
           <div>
             <div className="text-xs font-bold text-slate-700">待办审批</div>
             <div className="text-[10px] text-slate-500">3 个合同待签</div>
           </div>
         </div>
         <div className="w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center">
           <ArrowIcon />
         </div>
      </div>
    </div>
  )
}

function CommerceDashboard() {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-5 text-white shadow-lg">
          <div className="text-xs opacity-80 mb-1">今日交易总额 (GMV)</div>
          <div className="text-2xl font-bold mb-3">¥ 482,900.00</div>
          <div className="flex gap-3">
             <div className="bg-white/20 px-2 py-1 rounded text-[10px]">订单 1,240</div>
             <div className="bg-white/20 px-2 py-1 rounded text-[10px]">客单 ¥389</div>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-3">
           {[1,2,3,4].map(i => (
             <div key={i} className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                <div className="w-full aspect-square bg-slate-100 rounded mb-2 relative overflow-hidden">
                    {/* Skeleton Image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100"></div>
                </div>
                <div className="h-2 w-2/3 bg-slate-200 rounded mb-1"></div>
                <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
             </div>
           ))}
        </div>
      </div>
    )
}

function SupplyDashboard() {
  return (
    <div className="space-y-6">
       <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <h4 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
             <Truck size={16} className="text-green-600"/> 物流概览
          </h4>
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   <span className="text-xs text-slate-600">在途运输</span>
                </div>
                <span className="text-sm font-bold text-slate-800">124 车</span>
             </div>
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                   <span className="text-xs text-slate-600">待发货</span>
                </div>
                <span className="text-sm font-bold text-slate-800">45 单</span>
             </div>
          </div>
       </div>

       <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-3">
             <h4 className="text-sm font-bold text-slate-700">库存预警</h4>
             <span className="text-[10px] text-red-500 bg-red-50 px-2 py-0.5 rounded-full">3 项严重</span>
          </div>
          <div className="space-y-3">
             {[1,2,3].map(i => (
                <div key={i} className="flex items-center gap-3 p-2 rounded bg-slate-50">
                   <div className="w-8 h-8 bg-white rounded border border-slate-200 flex items-center justify-center">
                      <Package size={14} className="text-slate-400" />
                   </div>
                   <div className="flex-1">
                      <div className="h-2 w-20 bg-slate-300 rounded mb-1"></div>
                      <div className="h-1.5 w-12 bg-red-200 rounded"></div>
                   </div>
                   <div className="text-xs font-bold text-red-600">缺货</div>
                </div>
             ))}
          </div>
       </div>
    </div>
  )
}

function FinanceDashboard() {
  return (
    <div className="space-y-6">
       <div className="flex gap-4 overflow-x-auto pb-2">
          <div className="flex-shrink-0 w-32 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
             <div className="text-[10px] text-slate-500 mb-1">市场预算</div>
             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className="h-full w-[70%] bg-blue-500 rounded-full"></div>
             </div>
             <div className="text-xs font-bold text-slate-700">70% 已用</div>
          </div>
          <div className="flex-shrink-0 w-32 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
             <div className="text-[10px] text-slate-500 mb-1">ROI</div>
             <div className="flex items-end gap-1">
                 <div className="text-xl font-bold text-green-600">1:4.5</div>
                 <div className="mb-1"><TrendingUp size={10} className="text-green-500"/></div>
             </div>
          </div>
       </div>

       <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <h4 className="text-sm font-bold text-slate-700 mb-4">费用支出趋势</h4>
          <div className="flex items-end gap-2 h-32 pt-4">
             {[30, 45, 35, 60, 50, 75, 65].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                   <motion.div 
                     initial={{ height: 0 }}
                     animate={{ height: `${h}%` }}
                     transition={{ duration: 0.8, delay: i * 0.1 }}
                     className="w-full bg-blue-100 rounded-t-sm group-hover:bg-blue-500 transition-colors"
                   />
                </div>
             ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-slate-400">
             <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
       </div>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  )
}
