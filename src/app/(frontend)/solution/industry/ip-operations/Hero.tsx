'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Shield, Coins } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { motion } from 'framer-motion'
import IPDashboardMockup from './IPDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-[#F7F8FA]">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-50/30 skew-x-12 translate-x-1/4 z-0"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-100 shadow-sm text-purple-600 text-sm font-semibold mb-8">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600"></span>
                  </span>
                  IP/品牌授权行业解决方案
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F2329] leading-tight mb-8 tracking-tight">
                  <span className="text-purple-600">IP 创意</span>到<br/>
                  <span className="text-[#E60012]">现金流</span>的闭环
                </h2>
                
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  基于用友 YonBIP 底座，打造“四位一体” IP 数智化管理体系：资产中心、授权闭环、自动结算、AI 维权。
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start mb-12">
                  <button 
                    onClick={() => setIsDemoOpen(true)}
                    className="px-10 py-4 bg-[#E60012] text-white rounded-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100 hover:shadow-red-200 flex items-center gap-2 group text-lg"
                  >
                    预约专家演示
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                  <button onClick={handleOpenConsult} className="px-10 py-4 bg-white text-[#1F2329] border border-slate-200 rounded-lg font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 text-lg">
                    下载白皮书
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
                  <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> 对账效率 +1000%</span>
                  <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> 研发周期 -70%</span>
                  <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> 资金回笼 +30%</span>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 w-full relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative z-10"
              >
                <IPDashboardMockup type="overview" />

                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -right-8 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">侵权监测</div>
                      <div className="text-lg font-bold text-[#1F2329]">AI 24h 巡检</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Coins size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">本月 Royalty</div>
                      <div className="text-lg font-bold text-[#1F2329]">¥ 2.8M <span className="text-green-500 text-xs">+18%</span></div>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
              
              {/* Back Decor */}
              <div className="absolute top-10 -right-10 w-full h-full bg-purple-100 rounded-3xl -z-10 rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
