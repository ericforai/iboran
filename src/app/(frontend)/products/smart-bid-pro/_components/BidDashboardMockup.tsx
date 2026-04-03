'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Clock, 
  FileText, 
  Search, 
  TrendingUp, 
  Users,
  MoreVertical,
  Filter,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

export const BidDashboardMockup = () => {
  return (
    <div className="w-full h-full bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden font-sans text-slate-900 text-sm">
      {/* Sidebar Simulation */}
      <div className="flex h-full">
        <div className="w-20 border-r border-slate-100 flex flex-col items-center py-6 gap-8 bg-slate-50/50">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-white shadow-xl shadow-blue-600/20 text-xl">
            智
          </div>
          <div className="flex flex-col gap-6">
            <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-md shadow-blue-600/10"><TrendingUp size={24} /></div>
            <div className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-xl"><FileText size={24} /></div>
            <div className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-xl"><Users size={24} /></div>
            <div className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-xl"><Search size={24} /></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-20 border-b border-slate-100 px-8 flex items-center justify-between bg-white">
            <div className="flex items-center gap-6">
              <h3 className="font-extrabold text-xl tracking-tight">投标项目大屏</h3>
              <div className="flex bg-slate-100 rounded-xl p-1 gap-1">
                <button className="px-4 py-1.5 bg-white shadow-sm rounded-lg text-xs font-bold text-slate-900 leading-none">进行中</button>
                <button className="px-4 py-1.5 text-slate-500 text-xs font-bold leading-none hover:text-slate-700">已结束</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  readOnly 
                  placeholder="搜索项目..." 
                  className="bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-5 py-2.5 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm" />
            </div>
          </div>

          {/* Grid Layout */}
          <div className="p-8 grid grid-cols-12 gap-8 overflow-y-auto custom-scrollbar">
            {/* Stats */}
            <div className="col-span-12 grid grid-cols-4 gap-6">
              {[
                { label: '本月新增标讯', value: '1,284', grow: '+12%', icon: Search, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: '活跃跟进中', value: '42', grow: '5个临期', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
                { label: '综合中标率', value: '68.5%', grow: '+2.4%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: '知识文档库', value: '3,520', grow: '+15%', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50' }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-slate-500 text-xs font-extrabold uppercase tracking-widest">{stat.label}</span>
                    <div className={`p-1.5 rounded-lg ${stat.bg} ${stat.color}`}>
                        <stat.icon size={18} />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black">{stat.value}</span>
                    <span className={`text-[11px] font-bold px-2 py-1 rounded-full ${
                      stat.grow.includes('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {stat.grow}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Kanban Column */}
            <div className="col-span-8 bg-slate-50/50 rounded-[32px] border border-slate-100 flex flex-col p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="font-extrabold text-slate-800 text-base">当前投标进程</span>
                <div className="flex gap-3">
                  <Filter size={18} className="text-slate-400" />
                  <MoreVertical size={18} className="text-slate-400" />
                </div>
              </div>
              
              <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {[
                  { title: '某智慧城市二期建设项目', tag: '重点项目', status: '编制中', progress: 78, date: '2024-04-10', users: 5 },
                  { title: '全国电力数字化深度采购', tag: '公开招标', status: '审核中', progress: 95, date: '2024-04-05', users: 3 },
                  { title: '大型银行云基础架构项目', tag: '框架协议', status: '校对中', progress: 45, date: '2024-04-15', users: 8 }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 bg-white border border-slate-100 rounded-2xl hover:border-blue-400 transition-colors shadow-sm cursor-default group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[11px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded tracking-widest uppercase w-fit">{item.tag}</span>
                        <span className="text-base font-extrabold group-hover:text-blue-600 transition-colors tracking-tight">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Clock size={14} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 my-4">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                          className="h-full bg-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
                        />
                      </div>
                      <span className="text-sm font-black text-slate-800 w-10 text-right">{item.progress}%</span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex -space-x-2.5">
                        {[1, 2, 3].map(u => (
                          <div key={u} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-black shadow-sm">
                            U{u}
                          </div>
                        ))}
                        {item.users > 3 && (
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[11px] font-bold text-blue-600 shadow-sm">
                            +{item.users - 3}
                          </div>
                        )}
                      </div>
                      <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${
                        item.status === '审核中' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Control Column */}
            <div className="col-span-4 flex flex-col gap-6">
              <div className="bg-blue-600 border border-blue-600 rounded-[32px] p-6 flex-1 text-white shadow-xl shadow-blue-600/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>
                  <span className="font-extrabold text-base tracking-tight">AI 智能合规监测</span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <AlertCircle size={14} className="text-amber-300" />
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/80">资源风险</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed">
                      “智慧城市”项目中“资质清单”已于 3 天前过期。
                    </p>
                    <button className="text-[11px] font-black underline underline-offset-4 text-white text-left mt-1">一键更新资产库</button>
                  </div>
                  
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <TrendingUp size={14} className="text-emerald-300" />
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/80">内容质量</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed">
                      技术方案重合度达 94.5%，检测为优质标本引用，评分: 98。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-[32px] p-6 h-36 flex flex-col justify-center items-center gap-3 shadow-sm group">
                <BarChart3 size={32} className="text-blue-200 group-hover:text-blue-500 transition-colors" />
                <span className="text-[11px] font-black text-slate-300 group-hover:text-slate-500 uppercase tracking-[0.3em] transition-colors">Insights Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
