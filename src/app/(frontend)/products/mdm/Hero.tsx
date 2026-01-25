'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Database, ShieldCheck, Activity } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                <Database className="w-4 h-4" />
                <span>高标准 · 高质量 · 高效率</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                管理企业主数据 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  打造企业黄金数据资产
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                用友 BIP 主数据管理平台帮助企业建立统一的数据标准，打通数据孤岛。
                通过全生命周期管理与智能清洗，构建数智化经营的坚实底座。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors gap-2"
                >
                  预约演示
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/resources" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                  下载白皮书
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500">数据标准化</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-slate-900">50%+</div>
                  <div className="text-sm text-slate-500">效率提升</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-slate-900">0</div>
                  <div className="text-sm text-slate-500">数据孤岛</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-2">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                 {/* Abstract Dashboard Simulation */}
                 <div className="bg-slate-50 rounded-xl p-6 min-h-[400px]">
                    <div className="flex items-center justify-between mb-8">
                       <div className="h-4 w-32 bg-slate-200 rounded"></div>
                       <div className="flex gap-2">
                          <div className="h-8 w-8 bg-blue-100 rounded-full"></div>
                          <div className="h-8 w-8 bg-indigo-100 rounded-full"></div>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                       <div className="p-4 bg-white rounded-lg shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                             <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                <Database className="w-5 h-5" />
                             </div>
                             <div className="font-medium text-slate-700">主数据总量</div>
                          </div>
                          <div className="text-2xl font-bold text-slate-900">2,845,900</div>
                          <div className="text-xs text-green-600 mt-1">↑ 12.5% 较上月</div>
                       </div>
                       <div className="p-4 bg-white rounded-lg shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                             <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                <ShieldCheck className="w-5 h-5" />
                             </div>
                             <div className="font-medium text-slate-700">数据质量评分</div>
                          </div>
                          <div className="text-2xl font-bold text-slate-900">98.5</div>
                          <div className="text-xs text-green-600 mt-1">↑ 2.1% 较上月</div>
                       </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-4 h-48 flex items-center justify-center border border-dashed border-slate-200">
                       <div className="text-center">
                          <Activity className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                          <div className="text-sm text-slate-400">实时数据清洗与分发监控</div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl text-blue-100 mix-blend-multiply filter"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl text-indigo-100 mix-blend-multiply filter"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
