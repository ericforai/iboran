'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  UserPlus, 
  BarChart3, 
  Wallet, 
  TrendingUp, 
  Search, 
  Bell, 
  CheckCircle2,
  Calendar,
  MoreHorizontal
} from 'lucide-react'

export const HRMDashboardMockup = () => {
  return (
    <div className="w-full h-full bg-[#F4F7FC] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 flex text-[#1F2329] text-[10px] leading-tight">
      {/* Sidebar */}
      <div className="w-20 bg-white border-r border-slate-100 flex flex-col items-center py-6 gap-6">
        <div className="w-8 h-8 bg-[#E60012] rounded-lg flex items-center justify-center text-white font-bold text-xs mb-4">
          BIP
        </div>
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0052D9]">
          <Users size={18} />
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400">
          <UserPlus size={18} />
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400">
          <BarChart3 size={18} />
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400">
          <Wallet size={18} />
        </div>
        <div className="mt-auto w-10 h-10 rounded-full bg-slate-100 border border-slate-200" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-14 bg-white border-b border-slate-100 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={12} />
              <div className="w-full bg-slate-50 border border-slate-100 rounded-full py-1.5 pl-8 pr-4 text-slate-400">
                搜索员工、合同...
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell size={14} className="text-slate-400" />
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              <Calendar size={12} className="text-[#0052D9]" />
              <span className="font-medium">2025-12-31</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-6 grid grid-cols-12 gap-4">
          {/* Top Stats */}
          <div className="col-span-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between text-slate-400">
              <span>在职人数</span>
              <Users size={12} />
            </div>
            <div className="text-xl font-bold">12,482</div>
            <div className="flex items-center text-green-500 text-[8px] font-medium">
              <TrendingUp size={10} className="mr-1" />
              +2.4% 比上月
            </div>
          </div>

          <div className="col-span-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between text-slate-400">
              <span>本月入职</span>
              <UserPlus size={12} />
            </div>
            <div className="text-xl font-bold">156</div>
            <div className="flex items-center text-[#0052D9] text-[8px] font-medium">
              <CheckCircle2 size={10} className="mr-1" />
              128 已完成入职
            </div>
          </div>

          <div className="col-span-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2 text-white bg-gradient-to-br from-[#0052D9] to-blue-600 border-none">
            <div className="flex items-center justify-between opacity-80">
              <span>人均产值提升</span>
              <TrendingUp size={12} />
            </div>
            <div className="text-xl font-bold">+15.8%</div>
            <div className="text-[8px] opacity-80 font-medium">
              数智化赋能
            </div>
          </div>

          <div className="col-span-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between text-slate-400">
              <span>薪酬核算率</span>
              <Wallet size={12} />
            </div>
            <div className="text-xl font-bold">98.5%</div>
            <div className="bg-slate-100 h-1.5 w-full rounded-full overflow-hidden mt-1">
              <div className="h-full bg-[#E60012] w-[98.5%]" />
            </div>
          </div>

          {/* Recruitment Funnel */}
          <div className="col-span-8 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-xs uppercase tracking-wider">招聘漏斗分析</h4>
              <MoreHorizontal size={12} className="text-slate-400 cursor-pointer" />
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: '简历投递', count: 4200, percent: '100%' },
                { label: '初步筛选', count: 1250, percent: '30%' },
                { label: '技术面试', count: 480, percent: '11%' },
                { label: '录用沟通', count: 120, percent: '3%' },
                { label: '正式入职', count: 85, percent: '2%' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-16 text-slate-400">{item.label}</div>
                  <div className="flex-1 h-6 bg-slate-50 rounded-sm relative overflow-hidden flex items-center px-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: item.percent }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`absolute left-0 top-0 h-full ${i === 4 ? 'bg-[#E60012]' : 'bg-blue-100 border-r border-[#0052D9]/20'}`}
                    />
                    <span className="relative z-10 font-bold ml-auto">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Circle */}
          <div className="col-span-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col">
            <h4 className="font-bold text-xs uppercase tracking-wider mb-6">绩效分布</h4>
            <div className="flex-1 flex items-center justify-center relative">
               <svg className="w-24 h-24 transform -rotate-90">
                 <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
                 <motion.circle 
                   cx="48" cy="48" r="40" 
                   stroke="#0052D9" 
                   strokeWidth="8" 
                   fill="transparent" 
                   strokeDasharray="251.2"
                   initial={{ strokeDashoffset: 251.2 }}
                   animate={{ strokeDashoffset: 251.2 * 0.35 }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                 />
                 <motion.circle 
                   cx="48" cy="48" r="40" 
                   stroke="#E60012" 
                   strokeWidth="8" 
                   fill="transparent" 
                   strokeDasharray="251.2"
                   initial={{ strokeDashoffset: 251.2 }}
                   animate={{ strokeDashoffset: 251.2 * 0.85 }}
                   transition={{ duration: 1.5, delay: 0.8 }}
                   className="opacity-30"
                 />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                 <span className="text-lg font-extrabold">85</span>
                 <span className="text-[6px] text-slate-400">平均分</span>
               </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#0052D9]" />
                <span className="text-slate-500">优秀 (A)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-300" />
                <span className="text-slate-500">良好 (B)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="text-slate-500">合格 (C)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
