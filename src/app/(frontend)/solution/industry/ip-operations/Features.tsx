'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Database, FileCheck, Receipt, Brain, Check
} from 'lucide-react'
import IPDashboardMockup from './IPDashboardMockup'

const features = [
  {
    id: "asset",
    label: "IP 资产中心",
    icon: Database,
    title: "IP 资产数智中心（DMP + Digital Asset）",
    desc: "全景资产画像，通过「标签化」管理 IP 形象、商标、著作权。",
    color: "purple",
    points: [
      "支持 1-2-3 级品类颗粒度管控（如：快消-饮料-气泡水）",
      "云端图库分发，集成水印溯源技术",
      "DMP 数据管理平台实现素材包安全下发",
      "完整记录每一次下载动作，可追溯可审计"
    ]
  },
  {
    id: "license",
    label: "授权闭环",
    icon: FileCheck,
    title: "授权全链路闭环（L2C + CLM）",
    desc: "录入合同意向时，系统基于已签合同库自动扫描，确保 100% 合规。",
    color: "blue",
    points: [
      "冲突自动预警：品类或地域冲突即时拦截",
      "智能合同引擎：预置 IP 行业标准条款",
      "电子签章支持，全流程线上化",
      "从线索到合同签订的「秒级」协同"
    ]
  },
  {
    id: "settlement",
    label: "结算引擎",
    icon: Receipt,
    title: "极致自动化结算引擎（R2R + TRM）",
    desc: "内置 IP 行业算法库，支持最复杂的分成计算模型。",
    color: "green",
    points: [
      "支持「预付冲抵」「保底+分成」「多梯度累进率」",
      "被授权商门户（Licensee Portal）自助提报销量",
      "接口直连电商平台，自动生成结算单",
      "对账效率提升 1000%，无需手工 Excel"
    ]
  },
  {
    id: "ai",
    label: "AI+ 维权",
    icon: Brain,
    title: "AI+ 维权与内容创新（AIP）",
    desc: "利用 AIP 图像识别自动比对主流电商平台，识别疑似侵权产品。",
    color: "red",
    points: [
      "智能侵权巡检：24 小时自动扫描主流电商平台",
      "疑似未获授权的 IP 衍生品智能预警",
      "AI 辅助设计：企业专属大模型快速生成样稿",
      "产品研发周期缩短 70%"
    ]
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(features[0].id)
  const activeFeature = features.find(f => f.id === activeTab) || features[0]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">泊冉「四位一体」解决方案蓝图</h2>
          <div className="w-16 h-1 bg-[#0052D9] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            基于用友 YonBIP 底座，深度定制 IP 行业专用的数智化管理体系
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === feature.id
                  ? 'bg-[#0052D9] text-white shadow-lg shadow-blue-200'
                  : 'bg-[#F7F8FA] text-slate-600 hover:bg-blue-50 hover:text-[#0052D9]'
              }`}
            >
              <feature.icon size={18} />
              {feature.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F7F8FA] rounded-3xl p-8 lg:p-12 overflow-hidden border border-slate-100"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Text Content */}
                <div className="flex-1">
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-${activeFeature.color}-100`}>
                    <activeFeature.icon className={`text-${activeFeature.color}-600`} size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#1F2329] mb-4">
                    {activeFeature.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {activeFeature.desc}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {activeFeature.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className={`mt-1 min-w-[20px] h-5 rounded-full bg-${activeFeature.color}-100 flex items-center justify-center`}>
                          <Check size={12} className={`text-${activeFeature.color}-600`} />
                        </div>
                        <span className="text-slate-700 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual - Dashboard Mockup */}
                <div className="flex-1 w-full relative">
                  <div className="relative z-10">
                     <IPDashboardMockup type={activeTab} />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute top-10 -right-4 w-full h-full bg-${activeFeature.color}-500/5 rounded-3xl -z-10`}></div>
                  <div className={`absolute -bottom-6 -left-6 w-40 h-40 bg-${activeFeature.color}-500/10 rounded-full blur-3xl -z-20`}></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
