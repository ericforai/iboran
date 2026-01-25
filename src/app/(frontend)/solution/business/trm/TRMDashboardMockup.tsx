'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wallet, 
  ArrowUpRight, 
  Building2, 
  PieChart as PieIcon,
  Search,
  Bell,
  CheckCircle2,
  Clock,
  ExternalLink,
  RefreshCw,
  TrendingUp,
  Landmark,
  ShieldCheck,
  CreditCard
} from 'lucide-react'

const BalanceView = () => (
  <div className="space-y-4 p-4">
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] text-blue-600 font-medium">可用资金总量</span>
          <Wallet className="w-3 h-3 text-blue-500" />
        </div>
        <div className="text-lg font-bold text-slate-800">¥ 482.5M</div>
        <div className="text-[9px] text-green-600 flex items-center gap-0.5 mt-0.5">
          <TrendingUp className="w-2 h-2" /> +5.2% 较昨日
        </div>
      </div>
      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] text-slate-500 font-medium">待结算金额</span>
          <Clock className="w-3 h-3 text-slate-400" />
        </div>
        <div className="text-lg font-bold text-slate-700">¥ 28.4M</div>
        <div className="text-[9px] text-slate-400 mt-0.5">12 笔待审核</div>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
      <div className="px-3 py-2 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
        <span className="text-[10px] font-bold text-slate-700">银行账户分布 (Top 4)</span>
        <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
      </div>
      <div className="p-2 space-y-2">
        {[
          { name: '中国工商银行', type: '基本户', balance: '125.4M', color: 'bg-red-500' },
          { name: '招商银行', type: '结算户', balance: '98.2M', color: 'bg-red-400' },
          { name: '中国建设银行', type: '外币户', balance: '76.5M', color: 'bg-blue-500' },
          { name: '汇丰银行', type: '境外户', balance: '42.1M', color: 'bg-red-600' }
        ].map((bank, i) => (
          <div key={i} className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${bank.color}`} />
              <span className="text-slate-600 font-medium">{bank.name}</span>
            </div>
            <div className="text-slate-800 font-bold">¥ {bank.balance}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const LiquidityView = () => (
  <div className="p-4 space-y-4">
    <div className="bg-white rounded-xl border border-slate-100 p-3">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-bold text-slate-700">未来 30 天现金流预测</span>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-0.5 bg-blue-500" />
            <span className="text-[8px] text-slate-400">预计流入</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-0.5 bg-red-400" />
            <span className="text-[8px] text-slate-400">预计流出</span>
          </div>
        </div>
      </div>
      <div className="h-24 flex items-end justify-between gap-1">
        {[40, 60, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
             <div className="w-full flex flex-col gap-0.5 translate-y-2">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 0.6}%` }}
                  className="bg-blue-500/80 rounded-t-sm"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 0.4}%` }}
                  className="bg-red-400/80 rounded-b-sm"
                />
             </div>
             <span className="text-[7px] text-slate-300 transform scale-75">D{i*3+1}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div className="bg-green-50 p-2 rounded-lg border border-green-100 text-center">
        <div className="text-[8px] text-green-600 mb-0.5">资金盈余率</div>
        <div className="text-xs font-bold text-green-700">18.4%</div>
      </div>
      <div className="bg-orange-50 p-2 rounded-lg border border-orange-100 text-center">
        <div className="text-[8px] text-orange-600 mb-0.5">风险预警</div>
        <div className="text-xs font-bold text-orange-700">2 低</div>
      </div>
      <div className="bg-blue-50 p-2 rounded-lg border border-blue-100 text-center">
        <div className="text-[8px] text-blue-600 mb-0.5">建议调拨</div>
        <div className="text-xs font-bold text-blue-700">¥ 1.2M</div>
      </div>
    </div>
  </div>
)

const PaymentView = () => (
  <div className="p-4 space-y-3">
    {[
      { company: '上海互联科技有限公司', amount: '¥ 120,000.00', status: '已下达', bank: '工行银企直联', date: '14:20:15' },
      { company: '北京中投集团', amount: '¥ 2,845,000.00', status: '审批中', bank: '招行结算', date: '13:45:22' },
      { company: '广州贸易物流', amount: '¥ 45,200.00', status: '待审核', bank: '中行直联', date: '11:12:08' },
      { company: '深港实业（海外项目）', amount: '$ 85,000.00', status: '已下达', bank: '汇丰境外', date: '10:30:00' },
    ].map((item, i) => (
      <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.status === '已下达' ? 'bg-green-50 text-green-500' : 'bg-blue-50 text-blue-500'}`}>
            {item.status === '已下达' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-700 truncate max-w-[120px]">{item.company}</div>
            <div className="text-[8px] text-slate-400 mt-0.5 flex items-center gap-1">
              <Landmark className="w-2 ha-2" /> {item.bank} • {item.date}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-bold text-slate-800">{item.amount}</div>
          <div className={`text-[8px] mt-0.5 ${item.status === '已下达' ? 'text-green-500' : 'text-blue-500'}`}>{item.status}</div>
        </div>
      </div>
    ))}
  </div>
)

const FinanceView = () => (
  <div className="p-4 space-y-4">
    <div className="bg-slate-900 rounded-xl p-4 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <TrendingUp className="w-16 h-16" />
      </div>
      <div className="relative z-10">
        <div className="text-[10px] text-slate-400 font-medium mb-1">集团理财总收益 (2025)</div>
        <div className="text-2xl font-bold tracking-tight">¥ 12,482,500<span className="text-xs text-green-400 ml-2">.00</span></div>
        <div className="mt-4 flex gap-4">
          <div>
            <div className="text-[8px] text-slate-500">年化收益率</div>
            <div className="text-sm font-bold text-blue-400">4.85%</div>
          </div>
          <div className="w-px h-8 bg-slate-800" />
          <div>
            <div className="text-[8px] text-slate-500">贷款余额</div>
            <div className="text-sm font-bold text-red-400">¥ 85.2M</div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-green-500" />
          <span className="text-[9px] font-bold">合规风控</span>
        </div>
        <div className="flex -space-x-1.5">
          {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border border-white bg-slate-100 flex items-center justify-center text-[8px] text-slate-400">{i}</div>)}
        </div>
        <div className="text-[8px] text-slate-400">本月未触发重大预警</div>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col gap-2">
         <div className="flex items-center gap-1.5">
          <CreditCard className="w-3 h-3 text-blue-500" />
          <span className="text-[9px] font-bold">融资成本</span>
        </div>
        <div className="text-sm font-bold text-slate-700">3.2% - 4.5%</div>
        <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full w-2/3" />
        </div>
      </div>
    </div>
  </div>
)

export default function TRMDashboardMockup() {
  const [activeTab, setActiveTab] = useState('balance')

  const tabs = [
    { id: 'balance', label: '资金余额', icon: Wallet },
    { id: 'liquidity', label: '流动性预测', icon: TrendingUp },
    { id: 'payment', label: '结算中心', icon: ArrowUpRight },
    { id: 'finance', label: '投融资管理', icon: Landmark }
  ]

  return (
    <div className="w-full h-full bg-slate-50 relative group overflow-hidden select-none">
      {/* Sidebar Overlay */}
      <div className="absolute inset-y-0 left-0 w-48 bg-white border-r border-slate-200 z-10 flex flex-col shadow-sm">
        <div className="h-14 flex items-center gap-2 px-6 border-b border-slate-100">
          <div className="w-7 h-7 bg-[#E60012] rounded-lg flex items-center justify-center">
            <Building2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-slate-800 text-sm tracking-tight text-center">BIP TRM 资金云</span>
        </div>

        <div className="p-3 space-y-1">
          <div className="px-3 py-2 bg-slate-50 text-slate-400 flex items-center gap-2 rounded-lg text-[10px] mb-2">
            <Search className="w-3 h-3" />
            <span>搜索功能模块...</span>
          </div>

          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                activeTab === tab.id 
                ? 'bg-[#0052D9] text-white shadow-md shadow-blue-100' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto p-4 border-t border-slate-50">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
              AD
             </div>
             <div>
               <div className="text-[10px] font-bold text-slate-700">陈经理 (Admin)</div>
               <div className="text-[8px] text-slate-400">上海运营中心</div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Panel */}
      <div className="absolute inset-0 left-48 flex flex-col">
        {/* Top Header */}
        <header className="h-14 bg-white border-b border-slate-100 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-slate-700 text-sm">仪表盘 / {tabs.find(t => t.id === activeTab)?.label}</h2>
            <div className="bg-green-50 text-green-600 px-2 py-0.5 rounded text-[8px] font-bold">已连接银企直联 (12)</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-4 h-4 text-slate-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
              <RefreshCw className="w-3 h-3" />
              <span className="text-[10px]">实时刷新</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {activeTab === 'balance' && <BalanceView />}
              {activeTab === 'liquidity' && <LiquidityView />}
              {activeTab === 'payment' && <PaymentView />}
              {activeTab === 'finance' && <FinanceView />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer info bars */}
        <footer className="h-10 bg-white border-t border-slate-50 flex items-center px-6 justify-between text-[9px] text-slate-400 font-medium">
           <div className="flex gap-4">
              <span className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-green-400" /> 系统正常运行</span>
              <span className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-blue-400" /> 数据同步于: 2024-03-20 14:30</span>
           </div>
           <div className="flex items-center gap-2">
              <span>YonBIP 数智司库版</span>
              <span>v8.5.12</span>
           </div>
        </footer>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ y: [0, -8, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-8 w-12 h-12 bg-white/40 backdrop-blur shadow-xl rounded-2xl border border-white/50 z-20 flex items-center justify-center"
      >
        <PieIcon className="w-6 h-6 text-red-500" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 8, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 right-16 w-10 h-10 bg-white/40 backdrop-blur shadow-xl rounded-xl border border-white/50 z-20 flex items-center justify-center"
      >
        <TrendingUp className="w-5 h-5 text-blue-500" />
      </motion.div>
    </div>
  )
}
