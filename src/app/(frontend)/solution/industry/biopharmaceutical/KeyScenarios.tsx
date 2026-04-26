'use client'
import { openAifafanChat } from '@/utilities/openAifafanChat'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Microscope, Globe2, Link2, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const scenarios = [
  {
    id: 'cdmo',
    icon: Microscope,
    title: "研产一体化 (CDMO/CRO)",
    description: "打通临床前前研究到商业化生产全链路。实现工艺配方到生产BOM自动转换，LIMS实验数据自动采集结算。",
    features: [
      "多项目并行全生命周期管控",
      "研发工艺参数（Recipe）无缝转移",
      "LIMS 与实验数据自动集成",
      "试产物料与委托加工（B证委托）协同"
    ],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'compliance',
    icon: FileCheck,
    title: "GMP/GSP 核心合规管控",
    description: "内置符合 NMPA/FDA/EU 标准的管理规范。支持 CSV 计算机化系统验证，确保数据完整性与合规可追溯。",
    features: [
      "基于 GAMP5 的全生命周期 CSV 验证",
      "人员健康档案及年度培训管理",
      "电子批记录 (EBR) 与电子签名控制",
      "物料状态自动控制与稳定性考察"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'accounting',
    icon: Link2,
    title: "事项会计与精益成本",
    description: "基于事项会计中台，解决成本算不准、算不全的问题。单批次成本、项目损益实时核算，支撑集采科学定价。",
    features: [
      "多维会计核算，支持 IPO 审计追踪",
      "单批次、单项目全生命周期成本核算",
      "业务流程审批与预算事前强控",
      "供应链采购价格与供应商审计联动"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'ai-agents',
    icon: Globe2,
    title: "AI+全球化安全运营",
    description: "YonGPT 智能体赋能经营决策。支持 License-out 模式海外监管、多组织财务合并与数据隐私安全保护。",
    features: [
      "AI 智能辅助质量预警与风险洞察",
      "海外机构属地经营与合规审计监管",
      "跨国供应链协同与多币种自动结算",
      "企业级数据安全与隐私防泄漏保护"
    ],
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1000"
  }
]

export function KeyScenarios() {
  const [activeTab, setActiveTab] = useState(scenarios[0].id)
  const handleOpenConsult = () => {
    openAifafanChat()
  }

  return (
    <section className="py-20 bg-white">
            {/* AI Scraper Friendly Content (GEO) */}
            <div className="sr-only">
                {(scenarios as any[]).map((s: any, i: number) => (
                    <div key={i}>
                        <h3>{s.title}</h3>
                        <p>{s.problem || s.description || ""}</p>
                        <p>{s.solution || ""}</p>
                        <p>{s.outcome || ""}</p>
                        {s.features && <ul>{s.features.map((f: any, fi: number) => <li key={fi}>{(typeof f === "object" ? (f.title || f.label || f.name || f.desc || JSON.stringify(f)) : f)}</li>)}</ul>}
                    </div>
                ))}
            </div>
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            覆盖医药全生命周期的<span className="text-blue-600">核心场景</span>
          </h2>
          <p className="text-lg text-slate-600">
            从分子发现到商业化生产，从国内市场到全球布局，提供全方位的数智化支撑
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {scenarios.map((scenario: any) => (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveTab(scenario.id)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                  activeTab === scenario.id
                    ? 'bg-blue-50 border-blue-200 shadow-md'
                    : 'bg-white border-transparent hover:bg-slate-50'
                }`}
              >
                <div className={`p-3 rounded-lg ${
                  activeTab === scenario.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  <scenario.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-bold ${
                    activeTab === scenario.id ? 'text-blue-900' : 'text-slate-900'
                  }`}>
                    {scenario.title}
                  </h3>
                  <p className={`text-sm mt-1 line-clamp-1 ${
                    activeTab === scenario.id ? 'text-blue-700' : 'text-slate-500'
                  }`}>
                    {scenario.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Content Area */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {scenarios.map((scenario: any) => (
                activeTab === scenario.id && (
                  <motion.div
                    key={scenario.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-xl"
                  >
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 pointer-events-none" />
                      <Image
                        src={scenario.image} 
                        alt={scenario.title}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/90 text-white text-sm font-medium mb-3 backdrop-blur-sm">
                          <scenario.icon className="w-4 h-4" />
                          <span>核心场景</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {scenario.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {scenario.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        {scenario.features.map((feature: any, idx: number) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <button
                          type="button"
                          onClick={handleOpenConsult}
                          className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                        >
                          了解具体方案 <ArrowRight className="w-4 h-4" />
                        </button>
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
