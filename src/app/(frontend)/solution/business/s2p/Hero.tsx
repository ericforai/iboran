'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import S2PDashboardMockup from './S2PDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 pt-28 pb-24 overflow-hidden relative">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-white border border-blue-100 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#E60012]"></span>
                <span className="text-xs font-bold text-[#0052D9] tracking-wide uppercase">
                  YonBIP 数字化供应链
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-[#1F2329] mb-6 leading-[1.1] tracking-tight">
                构建韧性、合规、<br />
                高效的 <span className="text-[#E60012] relative inline-block">
                   S2P 供应链
                   <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                   </svg>
                </span>
              </h2>
              <p className="text-xl text-[#0052D9] font-medium mb-6">
                从战略寻源到付款结算，实现全流程数字化闭环
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                连接企业内部与全球供应商网络，通过 AI 驱动的寻源决策、自动化的采购执行与全生命周期的供应商管理，帮助企业降低拥有成本，提升供应链抗风险能力。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200 flex items-center gap-2 group"
                >
                  预约专家演示
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  下载解决方案白皮书
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                   <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                   <span>500+ 头部企业验证</span>
                </div>
                 <div className="flex items-center gap-2">
                   <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</div>
                   <span>SOC2 安全认证</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative perspective-1000"
            >
              <div className="relative z-10 transform origin-center hover:scale-[1.02] transition-transform duration-500">
                {/* Main Dashboard Preview using the Mockup Component */}
                <div className="relative rounded-xl shadow-2xl overflow-hidden border border-slate-200/50 bg-white">
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 z-20 pointer-events-none"></div>
                   <div className="scale-[0.8] origin-top-left w-[125%] h-[125%] pointer-events-none">
                     <S2PDashboardMockup type="sourcing" />
                   </div>
                </div>

                {/* Floating Elements (Simulating specific feature highlights) */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden lg:block z-30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">AI</div>
                    <div className="text-xs font-bold text-slate-800">智能寻源建议</div>
                  </div>
                  <div className="text-xs text-slate-500">
                    建议邀请 3 家优质供应商备选，预计节资 <span className="text-green-600 font-bold">12%</span>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden lg:block z-30"
                >
                   <div className="flex items-center gap-3">
                     <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden">
                           {/* Avatar placeholder */}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                     </div>
                     <div>
                       <div className="text-xs font-bold text-slate-800">供应商准入审核</div>
                       <div className="text-[10px] text-blue-600 font-medium">待我审批 (2)</div>
                     </div>
                   </div>
                </motion.div>
              </div>
              
              {/* Back glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/30 blur-3xl rounded-full -z-10" />
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
