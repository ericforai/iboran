'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import ConsolidatedDashboardMockup from './ConsolidatedDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative bg-white pt-24 pb-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-1/4 -z-10" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E60012] text-sm font-bold mb-6 border border-red-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60012]"></span>
                </span>
                R2R：核算到报告 2.0
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F2329] leading-tight mb-6">
                合并报表管理<br />
                <span className="text-[#0052D9]">加速全球财务报告</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                面向全球化大企业的智能合并解决方案。实现多准则一键转换、自动化权益抵销，将复杂的合并周期从周缩短至天。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                  免费预约演示
                </button>
                <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all">
                  下载解决方案白皮书
                </button>
              </div>

              {/* Stats/Badge Area */}
              <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
                <div>
                  <div className="text-2xl font-bold text-[#1F2329]">500+</div>
                  <div className="text-sm text-slate-500">服务全球级集团</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <div className="text-2xl font-bold text-[#1F2329]">98%</div>
                  <div className="text-sm text-slate-500">抵销自动化率</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <div className="text-2xl font-bold text-[#1F2329]">99%以上</div>
                  <div className="text-sm text-slate-500">审计追溯合规</div>
                </div>
              </div>
            </motion.div>

            {/* Right Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative group">
                {/* Decorative frames */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-red-100 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <ConsolidatedDashboardMockup />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 text-green-600 font-bold text-center leading-none">✓</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">一键合并状态</div>
                      <div className="text-sm font-bold text-slate-700">完成：权益抵销分录</div>
                    </div>
                  </div>
                </motion.div>
              </div>
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
