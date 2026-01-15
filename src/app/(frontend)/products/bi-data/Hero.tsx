
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import BIDashboardMockup from './BIDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                智能分析 V3.0 全新发布
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                释放数据价值 <br/>
                <span className="text-blue-600">驱动敏捷决策</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                融合企业级数据中台与智能分析能力，提供从数据采集、治理、建模到可视化的全链路解决方案，助力企业构建数智化经营大脑，实现数据驱动的精细化运营。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group"
                >
                  预约专家演示
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  下载产品白皮书
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-8 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-green-100 text-green-700">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  预置10+行业大屏模板
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-blue-100 text-blue-700">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  自助式可视化分析
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-purple-100 text-purple-700">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  移动端 100% 适配
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Content - Dashboard Mockup */}
          <motion.div 
            className="flex-1 w-full max-w-[800px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
               {/* Glow effect behind mockup */}
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl -z-10 rounded-[30px]" />
               <BIDashboardMockup />
            </div>
          </motion.div>

        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  )
}
