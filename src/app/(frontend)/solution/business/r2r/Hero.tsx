'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import DemoRequestModal from '@/components/DemoRequestModal'
import R2RDashboardMockup from './R2RDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="bg-slate-50 pt-24 pb-20 overflow-hidden relative">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
        
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
                  YonBIP & YonSuite 事项法财务解决方案
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1F2329] mb-6 leading-[1.15]">
                R2R 核算到报告 <br />
                <span className="text-[#E60012]">业财转换 智能控制</span>
              </h2>
              <p className="text-xl text-[#0052D9] font-medium mb-6">
                基于&quot;事项法会计&quot;驱动财务管理数智化转型
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                打通从业务发生到财务报告的端到端全流程。通过事项中台采集全量业务数据，实现多准则实时核算、自动对账抵销与一键合并，赋能企业构建世界一流财务管理体系。
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-7/12 relative"
            >
              <R2RDashboardMockup activeTab="overview" />
              
              {/* Floating Stat Cards for visual richness */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block z-20"
              >
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">凭证自动化率</div>
                <div className="text-2xl font-black text-blue-600">99.4%</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block z-20"
              >
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">结账周期减少</div>
                <div className="text-2xl font-black text-[#E60012]">-3 Days</div>
              </motion.div>
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
