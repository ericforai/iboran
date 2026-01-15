'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import DashboardMockup from './DashboardMockup'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
              BIP 管理会计解决方案
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              业财融合 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">财管分离</span>
              <br />
              数智化成本决策引擎
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              基于事项会计中台，构建财务合规与管理决策双重体系。
              实现从实时模拟到智能月结的全链路数字化管控，助力大型企业降本增效。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-base font-semibold transition-all hover:scale-105 active:scale-95">
                预约产品演示 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-full px-8 h-14 text-base font-semibold transition-all">
                <Download className="mr-2 h-5 w-5" /> 下载方案白皮书
              </Button>
            </div>
          </motion.div>

            {/* Dynamic Dashboard Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 relative"
            >
               <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
               <DashboardMockup type="hero-banner" />
            </motion.div>
        </div>
      </div>
    </section>
  )
}
