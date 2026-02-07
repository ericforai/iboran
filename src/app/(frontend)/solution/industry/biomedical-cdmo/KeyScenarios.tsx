'use client'

import React, { useState } from 'react'
import { Microscope, FileCheck, Link2, Globe2, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const scenarios = [
  {
    id: 'rd-mfg',
    icon: Microscope,
    title: "研产一体化协同",
    description: "打通临床前研究、工艺开发到商业化生产的全链路。实现研发BOM向生产BOM的分钟级转化，以保障工艺参数的准确传递。",
    features: [
      "多项目并行进度与里程碑管理",
      "研发工艺配方到生产工单自动转换",
      "LIMS实验数据自动采集与关联",
      "临床试验物料精准批次管控"
    ],
    image: "/assets/industry/cdmo/rd-mfg.png"
  },
  {
    id: 'compliance',
    icon: FileCheck,
    title: "GMP/CSV 质量合规",
    description: "内置符合NMPA/FDA标准的质量管控体系，支持计算机化系统验证（CSV），实现生产全过程透明可溯源。",
    features: [
      "基于GAMP5的全生命周期CSV验证",
      "QMS/DMS/TMS质量运营一体化",
      "电子签名与电子批记录(EBR)审计追踪",
      "稳定性考察与留样全生命周期管理"
    ],
    image: "/assets/industry/cdmo/compliance.png"
  },
  {
    id: 'accounting',
    icon: Link2,
    title: "精益成本与事项会计",
    description: "基于事项会计中台，实时获取业务原始凭证。实现单项目、单批次的精准成本核算与利润预测，提升经营效能。",
    features: [
      "跨组织、跨地域项目成本自动归集",
      "物料单耗分析与废品损益实时可见",
      "多维会计核算支撑科学决策",
      "全员线上报销与预算事前控制"
    ],
    image: "/assets/industry/cdmo/accounting.png"
  },
  {
    id: 'multi-org',
    icon: Globe2,
    title: "多组织生产制造协同",
    description: "针对集团化、跨工厂的生产模式，建立统一的计划管理体系。解决插单、改单频繁导致的交付难题。",
    features: [
      "多工厂产能协同与统一排程管理",
      "集团集中采购与分散收货结算",
      "实时库存查询与项目物料预留",
      "出外包业务的全生命周期管控"
    ],
    image: "/assets/industry/cdmo/multi-org.png"
  }
]

export function KeyScenarios() {
  const [activeTab, setActiveTab] = useState(scenarios[0].id)
  const activeScenario = scenarios.find(s => s.id === activeTab)!

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 outline-none">
            四大核心业务场景
            <span className="text-blue-600 block sm:inline"> 驱动高效增长</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            针对 CDMO 企业研产跨度大、项目要求杂的特点，提供全方位的数智化支撑。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3 space-y-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveTab(scenario.id)}
                className={`w-full flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 ${
                  activeTab === scenario.id
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 ring-1 ring-blue-600'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
                }`}
              >
                <scenario.icon className={`w-6 h-6 ${activeTab === scenario.id ? 'text-white' : 'text-blue-600'}`} />
                <span className="text-lg font-bold">{scenario.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">{activeScenario.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {activeScenario.description}
                    </p>
                    <ul className="space-y-4">
                      {activeScenario.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src={activeScenario.image}
                      alt={activeScenario.title}
                      fill
                      className="object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
