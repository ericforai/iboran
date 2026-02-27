'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import MESDashboardMockup from './MESDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="bg-white pt-24 pb-20 overflow-hidden relative">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 border border-blue-100 rounded-full">
                <span className="text-sm font-bold text-[#0052D9] tracking-wider uppercase">
                  YonBIP & YonSuite 制造执行系统
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-[#1F2329] mb-6 leading-[1.15]">
                MES 生产执行系统 <br />
                <span className="text-[#E60012]">透明化</span> 智能车间
              </h2>
              <p className="text-xl text-[#0052D9] font-medium mb-6">
                连接计划与现场：让生产进度与质量实时可见
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                连接 ERP 与生产现场的数字桥梁。实时采集设备、物料与人员数据，实现生产过程的全透明、可追溯与即时调度，打造高效协同的数字化车间。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                  预约专家演示
                </button>
                <button onClick={handleOpenConsult} className="px-10 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all">
                  下载解决方案白皮书
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10">
                 <MESDashboardMockup />
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#0052D9_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
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
