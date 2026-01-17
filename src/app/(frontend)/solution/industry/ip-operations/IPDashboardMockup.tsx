'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, FileText, Receipt, Brain, Bell, Search, MapPin, 
  Globe, CheckCircle, AlertTriangle, Image, Download, DollarSign,
  ShoppingBag, TrendingUp, Eye, Shield
} from 'lucide-react'

interface IPDashboardMockupProps {
  type?: 'overview' | 'asset' | 'license' | 'settlement' | 'ai'
}

export default function IPDashboardMockup({ type = 'overview' }: IPDashboardMockupProps) {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-full aspect-[16/10] flex text-xs">
      {/* Sidebar */}
      <div className="w-14 md:w-44 bg-[#1F2329] text-slate-400 flex flex-col border-r border-slate-800">
        <div className="h-12 flex items-center justify-center border-b border-slate-700 font-bold text-white tracking-wider text-[10px]">
          <span className="hidden md:block">IP 运营平台</span>
          <span className="md:hidden">IP</span>
        </div>
        <div className="p-2 space-y-1 flex-1">
          {[
            { icon: BarChart3, label: '工作台', active: type === 'overview' },
            { icon: Image, label: 'IP 资产', active: type === 'asset' },
            { icon: FileText, label: '授权管理', active: type === 'license' },
            { icon: Receipt, label: '结算中心', active: type === 'settlement' },
            { icon: Brain, label: 'AI 维权', active: type === 'ai' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className={`px-2 md:px-3 py-2 rounded flex items-center gap-2 cursor-pointer transition-colors ${
                item.active 
                  ? 'bg-purple-600 text-white' 
                  : 'hover:bg-slate-800'
              }`}
            >
              <item.icon size={14} />
              <span className="hidden md:inline">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-10 bg-white border-b border-slate-200 flex items-center justify-between px-4 shadow-sm flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="font-bold text-slate-700 text-[11px]">
              {type === 'overview' && '仪表盘 / 总览'}
              {type === 'asset' && 'IP 资产中心'}
              {type === 'license' && '授权合同管理'}
              {type === 'settlement' && '分成结算中心'}
              {type === 'ai' && 'AI 维权巡检'}
            </div>
          </div>
          <div className="flex gap-3 text-slate-400 items-center">
            <Search size={14} />
            <Bell size={14} />
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-[10px] font-bold">A</div>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-3 overflow-hidden">
          {type === 'overview' && <OverviewContent />}
          {type === 'asset' && <AssetContent />}
          {type === 'license' && <LicenseContent />}
          {type === 'settlement' && <SettlementContent />}
          {type === 'ai' && <AIContent />}
        </div>
      </div>
    </div>
  )
}

function OverviewContent() {
  return (
    <div className="h-full flex flex-col gap-3">
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: 'IP 资产总数', value: '2,458', icon: Image, color: 'purple' },
          { label: '有效授权', value: '1,832', icon: FileText, color: 'blue' },
          { label: '本月 Royalty', value: '¥2.8M', icon: DollarSign, color: 'green' },
          { label: '待处理预警', value: '12', icon: AlertTriangle, color: 'red' },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <stat.icon size={12} className={`text-${stat.color}-500`} />
              <span className="text-slate-500 text-[10px]">{stat.label}</span>
            </div>
            <div className="text-sm font-bold text-slate-800">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-2 gap-3">
        {/* Authorization Map */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-slate-700 text-[11px]">全球授权地图</span>
            <Globe size={12} className="text-slate-400" />
          </div>
          <div className="h-[calc(100%-24px)] bg-gradient-to-br from-blue-50 to-purple-50 rounded flex items-center justify-center relative">
            <div className="absolute top-2 left-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute top-6 left-8 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-4 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <MapPin size={20} className="text-purple-300" />
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm"
        >
          <div className="font-bold text-slate-700 text-[11px] mb-2">最新动态</div>
          <div className="space-y-2">
            {[
              { text: '新签授权：品牌A-饮料品类', icon: CheckCircle, color: 'green' },
              { text: 'Royalty 到账：¥128,000', icon: DollarSign, color: 'blue' },
              { text: '冲突预警：品类重叠', icon: AlertTriangle, color: 'red' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[10px]">
                <item.icon size={10} className={`text-${item.color}-500`} />
                <span className="text-slate-600 truncate">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function AssetContent() {
  return (
    <div className="h-full flex flex-col gap-3">
      {/* Category Filter */}
      <div className="flex gap-2">
        {['全部', '快消', '服饰', '玩具', '家居'].map((cat, idx) => (
          <span 
            key={idx}
            className={`px-2 py-1 rounded text-[10px] cursor-pointer ${
              idx === 0 ? 'bg-purple-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Asset Grid */}
      <div className="flex-1 grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item * 0.05 }}
            className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden group cursor-pointer"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
              <Image size={20} className="text-purple-300" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Download size={12} className="text-white" />
                <Eye size={12} className="text-white" />
              </div>
            </div>
            <div className="p-1.5">
              <div className="text-[10px] font-medium text-slate-700 truncate">IP 形象 #{item}</div>
              <div className="text-[9px] text-slate-400">快消 / 饮料</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function LicenseContent() {
  return (
    <div className="h-full flex flex-col gap-3">
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="flex-1 bg-white border border-slate-200 rounded px-2 py-1.5 flex items-center gap-2">
          <Search size={12} className="text-slate-400" />
          <span className="text-slate-400 text-[10px]">搜索合同...</span>
        </div>
        <button className="px-3 py-1.5 bg-purple-600 text-white rounded text-[10px] font-medium">新建合同</button>
      </div>

      {/* Contract List */}
      <div className="flex-1 bg-white rounded-lg border border-slate-100 overflow-hidden">
        <div className="grid grid-cols-5 gap-2 px-3 py-2 bg-slate-50 text-[10px] font-bold text-slate-500 border-b">
          <span>合同编号</span>
          <span>被授权方</span>
          <span>品类</span>
          <span>状态</span>
          <span>操作</span>
        </div>
        {[
          { id: 'IP-2024-001', party: '某某公司', category: '饮料', status: '执行中' },
          { id: 'IP-2024-002', party: '品牌方B', category: '服饰', status: '待审核' },
          { id: 'IP-2024-003', party: '经销商C', category: '玩具', status: '已到期' },
        ].map((contract, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="grid grid-cols-5 gap-2 px-3 py-2 text-[10px] border-b border-slate-50 hover:bg-slate-50"
          >
            <span className="text-purple-600 font-medium">{contract.id}</span>
            <span className="text-slate-700">{contract.party}</span>
            <span className="text-slate-500">{contract.category}</span>
            <span className={`${
              contract.status === '执行中' ? 'text-green-600' : 
              contract.status === '待审核' ? 'text-amber-600' : 'text-slate-400'
            }`}>{contract.status}</span>
            <span className="text-blue-600 cursor-pointer">查看</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function SettlementContent() {
  return (
    <div className="h-full flex flex-col gap-3">
      {/* Period Selector */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {['本月', '上月', '本季度'].map((period, idx) => (
            <span 
              key={idx}
              className={`px-2 py-1 rounded text-[10px] cursor-pointer ${
                idx === 0 ? 'bg-green-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {period}
            </span>
          ))}
        </div>
        <button className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] text-slate-600">导出报表</button>
      </div>

      {/* Settlement Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'MG 保底费', value: '¥1,200,000', trend: '+5%' },
          { label: 'Royalty 分成', value: '¥1,580,000', trend: '+18%' },
          { label: '待回款', value: '¥320,000', trend: '-12%' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-3 rounded-lg border border-slate-100"
          >
            <div className="text-[10px] text-slate-500 mb-1">{stat.label}</div>
            <div className="text-sm font-bold text-slate-800">{stat.value}</div>
            <div className={`text-[9px] flex items-center gap-1 mt-1 ${
              stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
            }`}>
              <TrendingUp size={10} />
              {stat.trend}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="flex-1 bg-white rounded-lg border border-slate-100 p-3">
        <div className="text-[11px] font-bold text-slate-700 mb-2">Royalty 趋势</div>
        <div className="h-[calc(100%-24px)] bg-gradient-to-t from-green-50 to-white rounded flex items-end justify-around px-2 pb-2">
          {[40, 65, 55, 80, 70, 90, 85].map((h, idx) => (
            <motion.div
              key={idx}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-4 bg-gradient-to-t from-green-500 to-green-300 rounded-t"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function AIContent() {
  return (
    <div className="h-full flex flex-col gap-3">
      {/* Scan Status */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield size={16} />
            <span className="font-bold text-[11px]">AI 侵权巡检</span>
          </div>
          <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">运行中</span>
        </div>
        <div className="mt-2 text-[10px] text-purple-100">
          已扫描 12,458 个商品 | 最后更新：2 分钟前
        </div>
      </div>

      {/* Alerts */}
      <div className="flex-1 bg-white rounded-lg border border-slate-100 overflow-hidden">
        <div className="px-3 py-2 bg-slate-50 border-b flex items-center justify-between">
          <span className="font-bold text-slate-700 text-[11px]">疑似侵权预警</span>
          <span className="text-[10px] text-red-500 font-medium">3 条待处理</span>
        </div>
        <div className="p-2 space-y-2">
          {[
            { platform: '淘宝', product: 'XX 品牌水杯', match: '92%' },
            { platform: '拼多多', product: 'XX 卡通T恤', match: '87%' },
            { platform: '京东', product: 'XX 联名手机壳', match: '78%' },
          ].map((alert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between p-2 bg-red-50 rounded border border-red-100"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag size={12} className="text-red-500" />
                <div>
                  <div className="text-[10px] font-medium text-slate-700">{alert.product}</div>
                  <div className="text-[9px] text-slate-500">{alert.platform}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold text-red-600">{alert.match} 匹配</div>
                <div className="text-[9px] text-blue-600 cursor-pointer">查看详情</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
