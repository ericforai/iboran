'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import { ChevronRight, TrendingUp, Activity, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0B1121] overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/west_basin_hero.png" 
          alt="West Basin Supply Chain Digital Transformation" 
          fill 
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1121] via-[#0B1121]/80 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                客户案例
              </span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span className="text-slate-300">现代服务业 / 电商 / MRO</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              西域供应链
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
                数字化转型实践
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl mb-10 border-l-4 border-blue-500 pl-6">
              通过构建一体化智能管控平台，打通资金流、物流与信息流，实现供应链全链路的高效协同与精细化管理。
            </p>

            <div className="flex flex-wrap gap-4">
              {['供应链管理', '物流配送', '仓储服务', '采购分销'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Floating Cards */}
          <div className="relative hidden lg:block h-[500px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0] 
              }}
              transition={{ 
                opacity: { delay: 0.3, duration: 0.8 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="absolute top-0 right-4 z-10"
            >
              <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-2xl w-72">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-green-400 text-sm font-bold">+125%</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-slate-400">订单处理准确率</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -15, 0] 
              }}
              transition={{ 
                opacity: { delay: 0.5, duration: 0.8 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
              }}
              className="absolute top-40 right-64 z-20"
            >
              <div className="bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl border border-slate-600 shadow-2xl w-64">
                <div className="flex items-center justify-between mb-4">
                   <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Activity className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">RT</div>
                <div className="text-sm text-slate-400">实时数据同步</div>
              </div>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -12, 0] 
              }}
              transition={{ 
                opacity: { delay: 0.7, duration: 0.8 },
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-10 right-10 z-10"
            >
              <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-2xl w-72">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white font-medium">系统运行正常</span>
                 </div>
                 <div className="text-xs text-slate-500">已连续稳定运行 1,200+ 天</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
