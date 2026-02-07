'use client'

import Image from 'next/image'
import { ChevronRight, BarChart3, PieChart, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#050B14] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/case-study/anneng-hero-bg.png" 
          alt="Anneng Logistics Smart Network" 
          fill 
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/90 to-[#050B14]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Breadcrumb / Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-blue-400 font-medium mb-8"
            >
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs tracking-wider uppercase backdrop-blur-sm">客户案例</span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
              <span className="text-xs tracking-wider uppercase text-slate-400">现代服务业</span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
              <span className="text-xs tracking-wider uppercase text-slate-400">物流</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-heading tracking-tight leading-tight">
              安能物流：
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white mt-2 whitespace-nowrap">
                业财融合的一体化重塑
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl mb-10 border-l-2 border-blue-500 pl-6">
              打破业务与财务的数据孤岛，为中国优质的零担快运服务商打造以&quot;利润中心&quot;为导向的数字化运营体系。
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
               <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 flex items-center gap-2">
                 <BarChart3 className="w-4 h-4 text-blue-400" />
                 业财一体化
               </span>
               <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 flex items-center gap-2">
                 <PieChart className="w-4 h-4 text-blue-400" />
                 精细化核算
               </span>
               <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 flex items-center gap-2">
                 <ArrowUpRight className="w-4 h-4 text-blue-400" />
                 战略支撑
               </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 max-w-md">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white font-heading">30,000+</span>
                <span className="text-sm text-slate-500 mt-1 uppercase tracking-wide">网点实时核算</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white font-heading">100%</span>
                <span className="text-sm text-slate-500 mt-1 uppercase tracking-wide">会计准则合规</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Metrics Card (Visual Interest) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative"
          >
             <div className="relative z-10 bg-[#0F172A]/90 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md ml-auto hover:border-blue-500/30 transition-colors duration-500">
                <div className="flex items-center justify-between mb-8">
                   <div>
                      <h3 className="text-white font-bold text-lg">实时盈利监控</h3>
                      <p className="text-xs text-slate-400">Profit Center Monitor</p>
                   </div>
                   <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-400">杭州分拨中心</span>
                        <span className="text-green-400 font-mono">+12.5% YoY</span>
                     </div>
                     <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-400">上海转运枢纽</span>
                        <span className="text-green-400 font-mono">+8.2% YoY</span>
                     </div>
                     <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                        />
                     </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="text-xs text-slate-500 mb-1">自动凭证生成</div>
                          <div className="text-xl font-bold text-white font-mono">0.2s</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="text-xs text-slate-500 mb-1">报表实时率</div>
                          <div className="text-xl font-bold text-white font-mono">99.9%</div>
                      </div>
                  </div>
                </div>
             </div>

             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
