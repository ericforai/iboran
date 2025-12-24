'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Factory, Calculator, Store, CheckCircle, Sprout, ShoppingCart, FileSearch } from 'lucide-react'

const scenarios = [
  {
    id: 'compliance',
    title: 'GMP/GSP质量合规',
    icon: ShieldCheck,
    description: '构建符合新版GMP/GSP要求的质量管理体系，实现全流程合规管控。',
    features: [
      '供应商审计与准入管理',
      '实验室信息管理 (LIMS) 集成',
      '电子批记录与电子签名',
      'CSV计算机系统验证支持',
    ],
    image: 'bg-emerald-100', // Placeholder style
  },
  {
    id: 'manufacturing',
    title: '中药智能制造',
    icon: Factory,
    description: '针对中药前处理、提取、制剂等工艺特点，打造透明化、智能化的生产车间。',
    features: [
      '配方与工艺参数管理',
      '趁鲜切制过程管控',
      '生产批次与序列号管理',
      '设备全生命周期维护',
    ],
    image: 'bg-blue-100',
  },
  {
    id: 'cost',
    title: '精细化成本管控',
    icon: Calculator,
    description: '应对药材价格波动，通过精细化核算实现成本的精准把控与利润分析。',
    features: [
      '多版本标准成本测算',
      '实际成本分步结转',
      '得率/收率差异分析',
      '单品/批次利润实时洞察',
    ],
    image: 'bg-orange-100',
  },
  {
    id: 'marketing',
    title: '中药全渠道营销',
    icon: Store,
    description: '打通线上线下渠道，实现从各级经销商到终端药店/医院的营销闭环。',
    features: [
      '全渠道订单统一中心',
      '流向查询与防窜货管理',
      '营销费用预算与管控',
      '客户信用与返利管理',
    ],
    image: 'bg-indigo-100',
  },
]

export function KeyScenarios() {
  const [activeTab, setActiveTab] = useState(scenarios[0].id)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            面向中药行业的关键业务场景
          </h2>
          <p className="text-lg text-slate-600">
            深度融合中药行业特性，提供从种植源头到消费终端的全场景数智化服务
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Navigation */}
          <div className="lg:w-1/3 space-y-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveTab(scenario.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                  activeTab === scenario.id
                    ? 'border-emerald-600 bg-emerald-50 shadow-sm'
                    : 'border-transparent hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === scenario.id ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <scenario.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${
                      activeTab === scenario.id ? 'text-emerald-900' : 'text-slate-900'
                    }`}>
                      {scenario.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="lg:w-2/3 bg-slate-50 rounded-3xl p-8 border border-slate-100 min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              {scenarios.map((scenario) => (
                activeTab === scenario.id && (
                  <motion.div
                    key={scenario.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
                          核心方案
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">{scenario.title}</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                          {scenario.description}
                        </p>
                        
                        <div className="space-y-4">
                          {scenario.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                              <span className="text-slate-800 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Visual Graphic Representation */}
                      <div className={`aspect-square rounded-2xl ${scenario.image} flex items-center justify-center relative overflow-hidden group`}>
                         <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                         
                         {/* Dynamic Icons based on scenario */}
                         {scenario.id === 'compliance' && (
                           <div className="relative z-10 grid grid-cols-2 gap-4">
                              <div className="bg-white p-4 rounded-lg shadow-sm animate-float">
                                <ShieldCheck className="w-8 h-8 text-emerald-600 mb-2" />
                                <div className="text-xs font-bold text-slate-700">GMP合规</div>
                              </div>
                              <div className="bg-white p-4 rounded-lg shadow-sm animate-float delay-100">
                                <FileSearch className="w-8 h-8 text-blue-600 mb-2" />
                                <div className="text-xs font-bold text-slate-700">电子批记录</div>
                              </div>
                           </div>
                         )}

                         {scenario.id === 'manufacturing' && (
                           <div className="relative z-10">
                              <Factory className="w-24 h-24 text-blue-600 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                              <div className="bg-white p-6 rounded-xl shadow-lg relative z-20">
                                <div className="flex items-center gap-3 mb-3">
                                  <Sprout className="w-6 h-6 text-green-600" />
                                  <div className="h-1 bg-slate-200 w-12 rounded-full" />
                                  <Factory className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="text-sm font-bold text-slate-900 text-center">种植到生产一体化</div>
                              </div>
                           </div>
                         )}

                         {scenario.id === 'cost' && (
                            <div className="relative z-10 flex flex-col items-center">
                              <div className="bg-white p-4 rounded-xl shadow-lg mb-4 w-48">
                                <div className="flex justify-between text-xs text-slate-500 mb-2">
                                  <span>标准成本</span>
                                  <span>实际成本</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full w-3/4 bg-orange-500" />
                                </div>
                              </div>
                              <Calculator className="w-16 h-16 text-orange-400" />
                            </div>
                         )}

                         {scenario.id === 'marketing' && (
                            <div className="relative z-10">
                               <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl">
                                  <div className="grid grid-cols-2 gap-4 mb-4">
                                     <div className="text-center p-2 bg-indigo-50 rounded-lg">
                                       <ShoppingCart className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
                                       <div className="text-[10px] text-indigo-900">电商</div>
                                     </div>
                                     <div className="text-center p-2 bg-purple-50 rounded-lg">
                                       <Store className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                                       <div className="text-[10px] text-purple-900">门店</div>
                                     </div>
                                  </div>
                                  <div className="text-center text-xs font-bold text-slate-800">全渠道订单统一</div>
                               </div>
                            </div>
                         )}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
