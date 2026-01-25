'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

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
                  YonBIP 技术平台底座
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-[#1F2329] mb-6 leading-[1.15]">
                CTP 云原生技术 <br />
                <span className="text-[#E60012]">平台底座</span>
              </h2>
              <p className="text-xl text-[#0052D9] font-medium mb-6">
                统一技术架构：构建企业数智化创新基石
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                用友BIP CTP技术平台底座，提供云原生、微服务、低代码等核心技术能力，为企业构建统一的技术支撑平台。支持多云多端部署，具备高性能、高可用、弹性扩展能力，助力企业快速响应业务变化。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                  预约专家演示
                </button>
                <button className="px-10 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all">
                  了解技术架构
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100">
                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                   {/* Placeholder for an image or graphic */}
                   <div className="text-center p-8">
                     <div className="w-16 h-1 bg-[#E60012] mx-auto mb-4" />
                     <p className="text-slate-400 font-medium">云原生技术架构图</p>
                   </div>
                </div>
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
