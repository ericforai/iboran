'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import FinanceCloudDashboardMockup from './FinanceCloudDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-white pt-24 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-5/12"
            >
              <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 border border-blue-100 rounded-full">
                <span className="text-sm font-bold text-[#0052D9] tracking-wider uppercase">
                  YonBIP & YonSuite 财务云
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1F2329] mb-6 leading-[1.15]">
                BIP 智能财务 <br />
                <span className="text-[#E60012]">从价值记录到价值创造</span>
              </h1>
              <p className="text-xl text-[#0052D9] font-medium mb-6">
                事项法会计 · 业财水乳交融 · 智能会计 · 全球司库
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                基于"事项法会计"理论，以大数据技术为支撑，构建财务共享、精细管控、全球司库等一体化应用。打破"票、账、表"传统模式，实现全业务流、全生命周期的自动化与智能化，支撑企业全球化经营。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                  预约专家演示
                </button>
                <button className="px-10 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all">
                  下载财务云白皮书
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-7/12 relative"
            >
              <div className="relative z-10">
                <FinanceCloudDashboardMockup />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100/30 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  )
}
