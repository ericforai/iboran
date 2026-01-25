'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import FinanceCloudDashboardMockup from './FinanceCloudDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-[#F8FAFC] pt-24 pb-20 overflow-hidden relative">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-5/12"
            >
              <div className="inline-block px-4 py-1.5 mb-6 bg-white/60 backdrop-blur-md border border-blue-200/50 rounded-full shadow-sm">
                <span className="text-sm font-bold text-[#2563EB] tracking-wider uppercase">
                  YonBIP & YonSuite 财务云
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1E293B] mb-6 leading-[1.15] tracking-tight">
                BIP 智能财务 <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#F97316]">从价值记录到价值创造</span>
              </h2>
              <p className="text-xl text-[#2563EB] font-semibold mb-6">
                事项法会计 · 业财联动 · 智能核算 · 全球司库
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
                基于&quot;事项法会计&quot;理论，以大数据技术为支撑，构建财务共享、精细管控、全球司库等一体化应用。打破&quot;票、账、表&quot;传统模式，实现全业务流、全生命周期的自动化与智能化，支撑企业全球化经营。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-[#1D4ED8] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-blue-200/50 cursor-pointer"
                >
                  预约专家演示
                </button>
                <button className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer shadow-sm">
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
