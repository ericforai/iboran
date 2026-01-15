'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileCheck, ShieldAlert, Receipt, PieChart, Check } from 'lucide-react'

const features = [
  {
    id: 'declaration',
    icon: FileCheck,
    title: '全税种一键申报',
    description: '连接金税接口，支持增值税、所得税、印花税等全税种自动计算与一键申报，告别手工填报。',
    benefits: [
      '预置全国36个省市申报表模板',
      '自动从财务系统获取底表数据',
      '申报状态实时回写，进度可查',
      '支持批量申报，效率提升90%'
    ],
    image: 'bg-blue-50' // Placeholder for image logic if needed, using CSS for now
  },
  {
    id: 'risk',
    icon: ShieldAlert,
    title: '智能税务风控',
    description: '内置数百项税务风险指标体系，实时扫描企业税务数据，将风险消灭在申报之前。',
    benefits: [
      '纳税信用等级实时预测',
      '进销项比对异常预警',
      '税负率异常波动监控',
      '自动生成税务健康体检报告'
    ],
    image: 'bg-red-50'
  },
  {
    id: 'invoice',
    icon: Receipt,
    title: '进销项发票管理',
    description: '实现发票的全生命周期管理，从开具、采集、查验、勾选认证到入账归档的全流程数字化。',
    benefits: [
      '全票种OCR智能识别',
      '进项发票自动查验确真',
      '一键批量勾选认证',
      '发票影像与凭证自动关联'
    ],
    image: 'bg-green-50'
  },
  {
    id: 'analytics',
    icon: PieChart,
    title: '税务数据洞察',
    description: '多维度税务数据分析驾驶舱，为管理层提供可视化的决策支持，辅助税务筹划。',
    benefits: [
      '集团税负全景可视化',
      '各税种缴纳趋势分析',
      '税收优惠政策测算',
      '同行业税务指标对标'
    ],
    image: 'bg-purple-50'
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">
            全面赋能企业税务数字化转型
          </h2>
          <div className="w-20 h-1.5 bg-[#E60012] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {features.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-6 rounded-xl transition-all duration-300 border ${
                  activeTab === idx 
                    ? 'bg-white border-[#E60012] shadow-lg scale-105 z-10' 
                    : 'bg-slate-50 border-transparent hover:bg-slate-100 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-2 rounded-lg ${activeTab === idx ? 'bg-[#E60012] text-white' : 'bg-slate-200 text-slate-500'}`}>
                    <feature.icon size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${activeTab === idx ? 'text-[#1F2329]' : 'text-slate-500'}`}>
                    {feature.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed pl-[52px] ${activeTab === idx ? 'text-slate-600' : 'text-slate-400'}`}>
                  {feature.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Content Area */}
          <div className="lg:w-2/3 w-full bg-slate-50 rounded-3xl p-8 lg:p-12 min-h-[500px] flex items-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E60012] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0052D9] opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full relative z-10"
              >
                <div className="mb-8">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-slate-600 text-sm font-bold mb-4">
                    核心优势
                  </div>
                  <h3 className="text-3xl font-bold text-[#1F2329] mb-4">
                    {features[activeTab].title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                    {features[activeTab].description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {features[activeTab].benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 mt-0.5">
                        <Check size={14} />
                      </div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
