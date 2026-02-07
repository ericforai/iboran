'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Target, ShoppingCart, Truck, Megaphone, Check
} from 'lucide-react'
import DashboardMockup from './DashboardMockup'

const features = [
  {
    id: "sale",
    label: "销售管理",
    icon: Target,
    title: "端到端 CRM 销售闭环",
    desc: "覆盖从线索获取、商机挖掘、报价谈判到合同签订的全生命周期管理。",
    color: "blue",
    points: [
      "线索评分与智能分配，提升线索转化率",
      "商机 360° 全景视图，透视客户关系",
      "CPQ 智能报价，支持复杂产品组合",
      "可视化销售漏斗，精准预测业绩"
    ]
  },
  {
    id: "commerce",
    label: "B2B 电商",
    icon: ShoppingCart,
    title: "数字化 B2B 订货平台",
    desc: "为经销商和直客提供类 B2C 的采购体验，实现订货业务在线化、数字化。",
    color: "indigo",
    points: [
      "个性化价格体系，支持一客一价",
      "多级渠道库存可视，智能补货建议",
      "自助下单、对账、返利查询",
      "移动端商城，随时随地做生意"
    ]
  },
  {
    id: "supply",
    label: "产销协同",
    icon: Truck,
    title: "销售与供应链无缝集成",
    desc: "打通销售订单与生产计划、采购计划，实现以销定产，以产定购。",
    color: "green",
    points: [
      "订单自动转采购/生产工单",
      "实时库存查询与承诺 (ATP)",
      "物流发货全程追踪，自动签收",
      "退换货流程自动化处理"
    ]
  },
  {
    id: "finance",
    label: "业财融合",
    icon: Megaphone, // Changed icon conceptually, though using Megaphone as requested/existing
    title: "营销费用与资金管控",
    desc: "实现营销费用的精准投放与管控，以保障每一笔资金发挥最大价值。",
    color: "red",
    points: [
      "营销预算全流程闭环控制",
      "多维度费用分摊与 ROI 分析",
      "在线支付与银企直联，资金秒级到账",
      "自动对账核销，财务凭证自动生成"
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
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">全面覆盖核心业务场景</h2>
          <div className="w-16 h-1 bg-[#0052D9] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            融合 CRM、B2B 电商、供应链与财务管理，构建一体化数字营销平台。
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

                {/* Visual Placeholder */}
                <div className="flex-1 w-full relative">
                  <div className="relative z-10">
                     <DashboardMockup type={activeTab} />
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
