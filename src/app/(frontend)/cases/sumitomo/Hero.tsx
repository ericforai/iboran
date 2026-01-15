'use client'

import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0F172A] overflow-hidden text-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-20 lg:mb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-8">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>制造 / 新材料</span>
            </div>

            {/* Title Group */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              住矿浆料
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mt-2">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
              在全球化竞争与供应链波动常态化的背景下，泊冉软件助力住矿浆料打通生产、物流与财务的脉络，实现以数据为核心的敏捷制造与精准交付。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                免费咨询
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl -rotate-6 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-slate-800 rounded-2xl rotate-0 shadow-2xl border border-slate-700/50 overflow-hidden group">
                   {/* Placeholder for potential high-quality dashboard or schematic image */}
                    <div className="flex flex-col h-full">
                        <div className="h-10 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="flex-1 p-6 relative">
                            {/* Abstract UI representation */}
                            <div className="w-32 h-8 bg-slate-700/50 rounded-md mb-8 animate-pulse" />
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="h-24 bg-blue-500/10 rounded-lg border border-blue-500/20 p-4">
                                     <div className="w-8 h-8 bg-blue-500/20 rounded-full mb-3" />
                                     <div className="w-16 h-3 bg-blue-500/20 rounded" />
                                </div>
                                <div className="h-24 bg-indigo-500/10 rounded-lg border border-indigo-500/20 p-4">
                                    <div className="w-8 h-8 bg-indigo-500/20 rounded-full mb-3" />
                                    <div className="w-16 h-3 bg-indigo-500/20 rounded" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className='h-3 w-full bg-slate-700/30 rounded' />
                                <div className='h-3 w-5/6 bg-slate-700/30 rounded' />
                                <div className='h-3 w-4/6 bg-slate-700/30 rounded' />
                            </div>
                            
                             <div className="absolute bottom-6 right-6">
                                <div className="px-4 py-2 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
                                    效率提升 +40%
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
