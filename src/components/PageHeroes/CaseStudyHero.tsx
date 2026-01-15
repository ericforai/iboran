'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Globe, Users } from 'lucide-react'

export const CaseStudyHero = () => {
  const highlights = ['半导体', '智能制造', '新零售', '国资/央企', '医疗健康']
  const stats = [
    { icon: Users, label: '服务客户', value: '500+' },
    { icon: Globe, label: '覆盖行业', value: '15+' },
    { icon: BarChart3, label: '平均效率提升', value: '40%' },
  ]

  return (
    <div className="relative bg-slate-950 pb-32 md:pb-36 pt-28 sm:pt-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-red-400 mb-6 backdrop-blur-sm">
              客户成功案例
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 sm:mb-8">
              与行业领袖共同
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                定义数字化未来
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              探索我们如何助力全球 500+ 企业重塑业务流程，
              通过数据驱动决策实现指数级增长。
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-4">
              {highlights.map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 text-[11px] sm:text-xs font-medium text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 grid gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform">
                    <stat.icon size={22} />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
                <div className="hidden sm:block text-xs text-slate-500">典型项目</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
