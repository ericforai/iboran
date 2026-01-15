'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Activity, 
  Globe, 
  Archive, 
  Database,
  BarChart3,
  Search,
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react'
import R2RDashboardMockup from './R2RDashboardMockup'

const tabs = [
  {
    id: 'accounting',
    title: "智能核算 (Smart Accounting)",
    subtitle: "事项驱动，多准则实时核算",
    icon: Activity,
    mockupTab: 'accounting',
    features: [
      { title: "事项会计平台", desc: "基于'事项法'采集全量业务数据，精细化记录业务属性，支持同一事项生成多套凭证。", icon: Database },
      { title: "智能核算引擎", desc: "内置核算引擎，业务单据自动触发凭证生成，自动化率达 95%+。实现财务报告实时出具。", icon: Zap },
      { title: "内部交易对账", desc: "支持集团内部交易的实时协同与自动对账，由'事后核对'转变为'交易即对账'。", icon: Search }
    ]
  },
  {
    id: 'consolidation',
    title: "全球合并 (Consolidation)",
    subtitle: "一键合并，全球经营看板",
    icon: Globe,
    mockupTab: 'consolidation',
    features: [
      { title: "多维重组合并", desc: "支持按股权架构、管理架构等多维度的自动合并。内置复杂股权自动抵销规则。", icon: Globe },
      { title: "准则转换引擎", desc: "自动完成海内外异构数据的准则映射与余额转换，支持 CAS/IFRS/US GAAP 并行。", icon: BarChart3 },
      { title: "对账不平衡预警", desc: "实时识别内部交易与往来差异，异常数据精准定位到明细事项，提升合并效率。", icon: Activity }
    ]
  },
  {
    id: 'insights',
    title: "经营洞察 (Insights)",
    subtitle: "从价值记录到价值创造",
    icon: BarChart3,
    mockupTab: 'insights',
    features: [
      { title: "实时管财融合", desc: "不仅提供法定财务报表，更提供面向经营管理的管报体系。支持报表数据穿透查询。", icon: Archive },
      { title: "数智分析平台", desc: "基于事项大数据，提供盈利分析、现金流预测等深度经营洞察，支持决策科学化。", icon: BarChart3 },
      { title: "财税一体化", desc: "全税种自动计算与申报，纳税风险指标实时预警。外引内接，构建税务合规防火墙。", icon: ShieldCheck }
    ]
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">下一代 R2R 核心能力</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            以事项法会计为核心，重构从交易到报告的全数字化路径。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tabs Sidebar */}
          <div className="lg:w-1/3 w-full flex flex-col gap-8">
            <div className="relative space-y-4">
              {/* Vertical Flow Line */}
              <div className="absolute left-12 top-10 bottom-10 w-px border-l-2 border-dashed border-slate-200 hidden lg:block z-0" />
              
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative z-10 group ${
                    activeTab.id === tab.id 
                    ? 'bg-blue-600 border-blue-600 shadow-xl shadow-blue-100 text-white' 
                    : 'bg-white border-slate-100 hover:border-blue-200 text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                      activeTab.id === tab.id ? 'bg-white/20' : 'bg-slate-50 border border-slate-100'
                    }`}>
                      <tab.icon size={22} className={activeTab.id === tab.id ? 'text-white' : 'text-blue-600'} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-0.5">{tab.title}</h3>
                      <p className={`text-xs ${activeTab.id === tab.id ? 'text-white/80' : 'text-slate-500'}`}>
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>
                  {activeTab.id === tab.id && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rotate-45 hidden lg:block"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Core Pillars box to fill the gap */}
            <div className="bg-[#001529] rounded-2xl p-6 text-white relative overflow-hidden hidden lg:block">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Activity size={80} />
               </div>
               <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  数智化三柱石
               </h4>
               <ul className="space-y-4 relative z-10">
                  {[
                    { label: '数智核算', desc: '事项驱动，实时凭证' },
                    { label: '全球合并', desc: '智能抵销，秒级合并' },
                    { label: '经营洞察', desc: '穿透洞察，辅助决策' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                       <div className="w-1 h-8 bg-blue-500/30 rounded-full shrink-0" />
                       <div>
                          <div className="text-xs font-bold text-blue-400">{item.label}</div>
                          <div className="text-[10px] text-white/50">{item.desc}</div>
                       </div>
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          {/* Tab Content & Mockup */}
          <div className="lg:w-2/3 w-full bg-[#F7F8FA] rounded-3xl p-8 lg:px-12 lg:py-10 relative">
             <div className="space-y-10">
                <div className="grid md:grid-cols-3 gap-6">
                  {activeTab.features.map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon size={20} />
                      </div>
                      <h4 className="font-bold text-sm text-[#1F2329] mb-2">{feature.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="relative">
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        系统实时演示 (Live Mockup)
                     </span>
                     <div className="flex gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                     </div>
                  </div>
                  <div className="shadow-2xl rounded-2xl overflow-hidden overflow-x-auto ring-1 ring-slate-200">
                    <div className="min-w-[800px] lg:min-w-0">
                      <R2RDashboardMockup activeTab={activeTab.mockupTab} />
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
