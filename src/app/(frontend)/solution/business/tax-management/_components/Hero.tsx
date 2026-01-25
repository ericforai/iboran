'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import TaxDashboardMockup from './TaxDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50 pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E60012] text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60012]"></span>
                </span>
                金税四期首选合作伙伴
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-[#1F2329] mb-6 leading-tight">
                税务管理<br/>
                <span className="text-4xl lg:text-5xl text-slate-500 font-medium">Data-Driven Tax Cloud</span>
              </h2>
              
              <p className="text-2xl text-[#0052D9] font-semibold mb-6">
                数据驱动，打造精准、合规、高效的税务管理平台
              </p>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                基于云原生架构与AI智能引擎，连接金税四期接口，实现全集团税务数据实时采集、自动算税、一键申报。
                帮助大型企业建立税务风险防火墙，提升税务合规遵从度，释放数据价值。
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg shadow-lg shadow-red-100 hover:bg-red-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  预约专家演示
                </button>
                <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-[#0052D9] hover:text-[#0052D9] hover:bg-blue-50 transition-all duration-300">
                  下载解决方案白皮书
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-slate-200 flex items-center gap-8 text-slate-400 text-sm font-semibold grayscale opacity-70">
                <span>中国500强首选</span>
                <span>ISO27001认证</span>
                <span>CSA云安全认证</span>
              </div>
            </motion.div>

            {/* Right Content - Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative w-full"
            >
              {/* Decorative Elements around mockup */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-100/30 rounded-full blur-3xl"></div>
              
              <div className="relative">
                 <TaxDashboardMockup />
                 
                 {/* Floating Badge */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -right-6 bottom-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[180px] hidden md:block"
                 >
                   <div className="flex items-center gap-3 mb-2">
                     <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                     </div>
                     <div>
                       <div className="text-xs text-slate-500 font-medium">合规风险</div>
                       <div className="text-lg font-bold text-[#1F2329]">0 预警</div>
                     </div>
                   </div>
                   <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                     <div className="bg-green-500 h-full w-full"></div>
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
