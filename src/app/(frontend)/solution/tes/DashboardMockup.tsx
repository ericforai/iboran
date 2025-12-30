'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, PieChart, BarChart } from 'lucide-react'

// 模拟仪表盘数据
const stats = [
  { label: '本月差旅支出', value: '¥1,245,000', trend: '+12%', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: '预算执行率', value: '78.5%', trend: '正常', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
  { label: '待审批单据', value: '34', trend: '待处理', icon: AlertCircle, color: 'text-orange-600', bg: 'bg-orange-50' },
]

const recentTrips = [
  { user: '张伟 (销售部)', dest: '北京 -> 上海', amount: '¥2,450', status: '合规', date: '10分钟前' },
  { user: '李娜 (研发中心)', dest: '深圳 -> 杭州', amount: '¥1,800', status: '合规', date: '25分钟前' },
  { user: '王强 (市场部)', dest: '广州 -> 程度', amount: '¥3,200', status: '超标预警', date: '1小时前' },
]

export default function DashboardMockup() {
  return (
    <div className="w-full bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-2xl font-sans select-none">
      {/* 顶部导航栏模拟 */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <div className="h-4 w-[1px] bg-slate-200 mx-2"></div>
          <span className="text-xs font-bold text-slate-700">TES 智能费控工作台</span>
        </div>
        <div className="flex items-center gap-3">
           <div className="text-xs text-slate-500">下午好，财务总监</div>
           <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200"></div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-12 gap-6">
        {/* 左侧：核心指标 */}
        <div className="col-span-12 md:col-span-8 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className={`p-1.5 rounded-md ${stat.bg}`}>
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${stat.color === 'text-orange-600' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                    {stat.trend}
                  </span>
                </div>
                <div className="text-slate-500 text-xs mb-1">{stat.label}</div>
                <div className="text-lg font-bold text-slate-800">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Chart Area Simulation */}
          <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm h-48 relative overflow-hidden">
             <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-bold text-slate-700">部门费用趋势 (Year-to-Date)</h4>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                   <span className="text-[10px] text-slate-400">销售部</span>
                   <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                   <span className="text-[10px] text-slate-400">研发部</span>
                </div>
             </div>
             {/* CSS Bar Chart Simulation */}
             <div className="flex items-end justify-between h-32 px-2 gap-2">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ height: 0 }}
                     animate={{ height: `${h}%` }}
                     transition={{ duration: 1, delay: i * 0.05 }}
                     className="w-full bg-blue-50 rounded-t-sm relative group"
                   >
                      <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm transition-all duration-300 group-hover:bg-blue-600" style={{ height: `${h}%` }}></div>
                   </motion.div>
                ))}
             </div>
          </div>
        </div>

        {/* 右侧：实时动态 */}
        <div className="col-span-12 md:col-span-4 space-y-4">
           <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm h-full">
              <h4 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-slate-400" />
                实时合规监控
              </h4>
              <div className="space-y-3">
                 {recentTrips.map((trip, i) => (
                    <div key={i} className="flex flex-col p-3 bg-slate-50 rounded border border-slate-100">
                       <div className="flex justify-between mb-1">
                          <span className="text-xs font-bold text-slate-700">{trip.user}</span>
                          <span className="text-[10px] text-slate-400">{trip.date}</span>
                       </div>
                       <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500">{trip.dest}</span>
                          <span className="font-medium">{trip.amount}</span>
                       </div>
                       <div className={`mt-2 text-[10px] inline-flex items-center gap-1 ${trip.status === '超标预警' ? 'text-red-600' : 'text-green-600'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${trip.status === '超标预警' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                          {trip.status}
                       </div>
                    </div>
                 ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                 <span className="text-xs text-blue-600 font-medium cursor-pointer">查看更多监控记录 &rarr;</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
