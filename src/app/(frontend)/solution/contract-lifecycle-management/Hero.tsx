'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import CLMDashboardMockup from './CLMDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-slate-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top-right z-0"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-red-50/40 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-white text-[#0052D9] text-xs font-bold rounded-full mb-8 shadow-sm border border-blue-100 uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#E60012] mr-2 animate-pulse"></span>
                YonBIP & YonSuite 数智合同
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-[#1F2329] mb-8 leading-[1.15]">
                CLM 合同全生命周期 <br />
                <span className="text-[#E60012]">业财法融合缔约中心</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                从合同起草、智能审批到电子签约、履约监控，全链路数智化升级。汇集业务与财务数据，实现合规风险实时管控。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl shadow-red-100 flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  预约专家演示
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button 
                  className="px-8 py-4 border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-white hover:border-slate-300 transition-all bg-white/50 backdrop-blur w-full sm:w-auto"
                >
                  下载解决方案白皮书
                </button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500 font-medium">
                 <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                    <span>AI 智能合规审查</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</div>
                    <span>电子签章法律效力</span>
                 </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative perspective-1000"
            >
              <div className="relative transform hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500 delay-100 origin-center">
                 {/* Main Dashboard Mockup */}
                 <div className="relative z-20 rounded-xl shadow-2xl bg-white">
                    <CLMDashboardMockup type="overview" />
                 </div>

                 {/* Decorative Elements */}
                 <div className="absolute -top-10 -right-10 w-full h-full border-2 border-dashed border-blue-200 rounded-xl -z-10 bg-transparent"></div>
                 
                 {/* Floating Feature Badge */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -left-6 bottom-12 z-30 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px]"
                 >
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 font-bold text-xs ring-4 ring-green-50/50">
                         Risk
                       </div>
                       <div>
                          <div className="text-xs font-bold text-slate-800">风险拦截成功</div>
                          <div className="text-[10px] text-green-600 font-bold">已为您规避 3 处风险</div>
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

