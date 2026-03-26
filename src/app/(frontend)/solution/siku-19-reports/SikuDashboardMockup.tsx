'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart2, Users, FileText, Bell, Search, ShieldAlert } from 'lucide-react'

export default function SikuDashboardMockup() {
  const [activeTab, setActiveTab] = useState<'overview' | 'ledgerA' | 'ledgerB'>('overview')

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/11.5] flex text-xs font-sans ring-1 ring-slate-200/50 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" />
      
      {/* Sidebar - Financial Light */}
      <div className="w-16 md:w-56 shrink-0 bg-slate-50 text-slate-700 flex flex-col border-r border-slate-200 relative z-10">
        <div className="h-14 shrink-0 flex items-center justify-center md:justify-start md:px-6 border-b border-slate-200 font-bold text-slate-800 tracking-widest whitespace-nowrap overflow-hidden">
          <span className="text-blue-600">司库</span><span className="hidden md:inline ml-1 tracking-normal font-semibold">数据报送</span>
        </div>
        <div className="p-3 space-y-2">
          <div 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'overview' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200 font-bold' 
                : 'hover:bg-slate-200 hover:text-slate-800 text-slate-500'
            }`}
          >
            <BarChart2 className={`w-4 h-4 ${activeTab === 'overview' ? 'text-white' : 'text-blue-500'}`} />
            <span className="hidden md:inline">填报总览</span>
          </div>
          <div 
            onClick={() => setActiveTab('ledgerA')}
            className={`w-full flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'ledgerA' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200 font-bold' 
                : 'hover:bg-slate-200 hover:text-slate-800 text-slate-500'
            }`}
          >
            <FileText className={`w-4 h-4 ${activeTab === 'ledgerA' ? 'text-white' : 'text-blue-500'}`} />
            <span className="hidden md:inline">总账主取 (A类)</span>
          </div>
          <div 
            onClick={() => setActiveTab('ledgerB')}
            className={`w-full flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'ledgerB' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200 font-bold' 
                : 'hover:bg-slate-200 hover:text-slate-800 text-slate-500'
            }`}
          >
            <Users className={`w-4 h-4 ${activeTab === 'ledgerB' ? 'text-white' : 'text-blue-500'}`} />
            <span className="hidden md:inline">台账补充 (B类)</span>
          </div>
        </div>
      </div>

      {/* Main Content Area - Light Professional */}
      <div className="flex-1 flex flex-col bg-slate-50 min-w-0">
        <div className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-slate-200 bg-white shadow-sm z-0">
          <span className="font-bold text-slate-800 text-sm">司库数据预警与上报中心</span>
          <div className="flex items-center gap-4 text-slate-400">
            <Search className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
            <div className="relative cursor-pointer hover:text-blue-600">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-sm shadow-blue-200">A</div>
          </div>
        </div>
        
        {/* Dashboard Content Grid - Light Theme */}
        <div className="p-4 md:p-5 grid grid-cols-2 gap-4 flex-1 overflow-hidden content-start bg-slate-50">
          {activeTab === 'overview' && (
            <>
              {/* Overview Metrics */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group min-h-[90px]"
              >
                <div className="text-slate-500 mb-2 font-medium text-[10px] md:text-xs">需通过系统报送项</div>
                <div className="text-2xl font-black text-slate-900">7/19 张表</div>
                <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="w-[36%] h-full bg-blue-600 rounded-full"></div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between min-h-[90px]"
              >
                <div className="text-slate-500 mb-2 font-medium text-[10px] md:text-xs">指标整体匹配度</div>
                <div className="text-2xl font-black text-green-600">98.5%</div>
                <div className="text-emerald-600 mt-1 font-semibold flex items-center gap-1 text-[10px]">
                   ^ 12.3% 台账补齐
                </div>
              </motion.div>
              
              {/* Risk Monitoring - Professional Bordered Card */}
              <div className="bg-white rounded-xl border-l-4 border-l-red-500 border border-slate-200 shadow-sm col-span-2 overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3 h-8">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 font-bold" style={{ transform: 'translateY(-1px)' }}>风险监控预警</span>
                      <ShieldAlert className="w-4 h-4 text-red-500" />
                    </div>
                    <span 
                      className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-black rounded-full border border-red-100 uppercase"
                      style={{ transform: 'translateY(-1.5px)' }}
                    >
                      需介入
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-black text-slate-900 tracking-tight">应付债券即将违约限额</div>
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="text-red-600 font-bold">剩余 3 天到期</span>
                      <span className="text-slate-400">|</span>
                      <span className="text-blue-600 font-medium">自动拦截已开启</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Table Mockup - Clean Financial Table */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm col-span-2 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-800">报送进度追踪</span>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded font-bold">本月</span>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-200" />
                      <span className="font-bold text-slate-800">银行贷款</span>
                    </div>
                    <span className="text-slate-500 font-medium">已校验 100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-200" />
                      <span className="font-bold text-slate-800">应付票据</span>
                    </div>
                    <span className="text-slate-500 font-medium">已校验 100%</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'ledgerA' && (
            <>
              {/* Ledger A Metrics - Light Mode */}
              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600 font-bold">总账自动化取数率</div>
                  <span className="text-2xl font-black text-slate-900">89.2%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '89.2%' }} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm col-span-1">
                <div className="text-slate-500 mb-1 font-medium">科目映射完成度</div>
                <div className="text-2xl font-bold text-slate-900">96%</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm col-span-1">
                <div className="text-slate-500 mb-1 font-medium">ERP数据源质量</div>
                <div className="text-2xl font-bold text-green-600">优</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm col-span-2 p-4">
                <div className="text-slate-800 font-bold mb-3">存在对账差异科目 (3)</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] p-2 bg-red-50 rounded border border-red-100">
                    <span className="text-slate-700 font-medium">1002 银行存款-外币</span>
                    <span className="text-red-600 font-bold">￥124,500.00</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] p-2 bg-slate-50 rounded">
                    <span className="text-slate-600">1122 应收账款-关联方</span>
                    <span className="text-slate-900 font-bold">已平</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'ledgerB' && (
            <>
              {/* Ledger B - Business Supplement Focus */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="col-span-2 bg-amber-50/50 border border-amber-200 p-5 rounded-xl shadow-sm mb-2">
                <div className="text-amber-600 font-bold mb-1">业务台账待补录</div>
                <div className="text-xl font-black text-slate-900 text-balance">51 条待补完善业务逻辑</div>
                <div className="text-slate-500 text-[10px] mt-2">! 需要业务部门补齐“项目台账”与“合同条款”信息</div>
              </motion.div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 mb-2">补录完成度</div>
                <div className="text-xl font-bold text-amber-600">62%</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 mb-2">逾期未补录</div>
                <div className="text-xl font-bold text-red-600">12 个月</div>
              </div>

              <div className="col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm p-4">
                <div className="text-slate-800 font-bold mb-3">B类报表台账校验</div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] py-1 border-b border-slate-100">
                    <span className="text-slate-700">股权类金融投资月报</span>
                    <span className="text-amber-600 font-medium">待手工补录</span>
                  </div>
                  <div className="flex justify-between text-[10px] py-1 border-b border-slate-100">
                    <span className="text-slate-700">金融衍生品交易日报</span>
                    <span className="text-amber-600 font-medium">待手工补录</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
