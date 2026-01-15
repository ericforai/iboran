'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link2, LayoutGrid, Building2, FlaskConical, CheckCircle2 } from 'lucide-react'

const scenarios = [
  {
    id: 'oem',
    title: '主机厂协同',
    icon: Link2,
    description: '打通整车厂(OEM)与下游零件厂的信息壁垒，实现订单、计划、发运的高效同步。',
    features: [
      'EDI/API 实时接口对接',
      '订单自动转化与排产',
      '挂账与结算在线核对',
      '供应商协同门户管理'
    ],
    cases: '一汽集团实现与99家散件供应商在线协同',
    image: '/images/scenarios/oem-sync.jpg' // Placeholder logic
  },
  {
    id: 'lean',
    title: '精益生产',
    icon: LayoutGrid,
    description: '通过MES与WMS的深度整合，实现线边仓配送、工位自动拉动与生产过程透明化。',
    features: [
      'JIT/JIS 按序拉动配送',
      '线边仓条码化精细管理',
      '关键模具轨迹与寿命跟踪',
      '实时生产看板与异常预警'
    ],
    cases: '物流流转效率提升40%，齐套率提升30%',
    image: '/images/scenarios/lean-manufacturing.jpg'
  },
  {
    id: 'group',
    title: '集团管控',
    icon: Building2,
    description: '针对多事业部、多分子工厂的复杂架构，构建统一的财务监控与资金司库体系。',
    features: [
      '统一的司库资金中心',
      '事业部责任会计核算',
      '多制造模式资源统筹',
      '银企/税企一键直连'
    ],
    cases: '北汽集团价值创造型司库系统上线',
    image: '/images/scenarios/group-control.jpg'
  },
  {
    id: 'rd',
    title: '研产协同',
    icon: FlaskConical,
    description: 'PLM与ERP数据同源，缩短研发到制造的回路时间，解决设计频繁变更带来的物料积压。',
    features: [
      '工程BOM到制造BOM自动转化',
      '研发项目全生命周期管理',
      '设计方案评审流在线闭环',
      '车型增减配灵活建模'
    ],
    cases: '研发沟通效率提升40%以上',
    image: '/images/scenarios/rd-sync.jpg'
  }
]

export default function KeyScenarios() {
  const [activeTab, setActiveTab] = useState(scenarios[0].id)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            核心 <span className="text-[#E60012]">业务场景</span> 实战
          </h2>
          <p className="text-lg text-slate-600">
            针对汽配行业特有的管理痛点，提供场景化深度的数智化闭环。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 左侧 Tabs 控制器 */}
          <div className="lg:col-span-4 space-y-4">
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                  activeTab === s.id 
                  ? 'bg-blue-50/50 border-[#0052D9] shadow-lg shadow-blue-500/10' 
                  : 'bg-white border-transparent hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    activeTab === s.id ? 'bg-[#0052D9] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold ${activeTab === s.id ? 'text-[#0052D9]' : 'text-slate-900'}`}>{s.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-1">{s.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* 右侧 内容展示 */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {scenarios.map((s) => s.id === activeTab && (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 h-full flex flex-col"
                >
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-red-100 text-[#E60012] text-xs font-extrabold rounded-lg tracking-wider">SCENARIO</span>
                        <h3 className="text-2xl font-bold text-slate-900">{s.title}</h3>
                      </div>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {s.description}
                      </p>
                      
                      <div className="space-y-4 mb-10">
                        {s.features.map((f) => (
                          <div key={f} className="flex items-center gap-3 text-slate-700">
                             <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                             <span className="font-medium text-sm md:text-base">{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-6 bg-white rounded-2xl border-l-4 border-red-500 shadow-sm">
                        <div className="text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Success Case</div>
                        <div className="text-[#0052D9] font-bold">{s.cases}</div>
                      </div>
                    </div>
                    
                    {/* 示意图区域 (CSS 模拟/占位) */}
                    <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[400px] bg-slate-200 rounded-2xl overflow-hidden relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center p-12">
                        <s.icon className="w-32 h-32 text-slate-400 opacity-30 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-xl border border-white/50 z-20">
                         <div className="text-xs font-bold text-slate-400 mb-1">Visual Preview</div>
                         <div className="text-sm font-bold text-slate-900">数字化{s.title}看板模型</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
