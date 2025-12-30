'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 opacity-50 skew-x-12 translate-x-32" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#0052D9] text-sm font-bold mb-6 border border-blue-100">
                用友银企联 · 数智化金融服务底座
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1F2329] mb-6 leading-tight">
                2500+ <span className="text-[#0052D9]">银企直联</span><br />
                构建全量收付管理闭环
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                屏蔽银行差异，连接全球资源。泊冉软件银企联解决方案，为您提供开箱即用的“银账通、快结算、电票通”产品组合，让资金管理更简单、更安全、更高效。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  免费预约演示
                </button>
                <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all active:scale-95">
                  查看技术白皮书
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">
                      C{i}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0052D9] flex items-center justify-center text-xs font-bold text-white">
                    +1k
                  </div>
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-[#1F2329]">1000+</span> 头部集团企业已通过银企联实现资金数智化
                </p>
              </div>
            </motion.div>

            {/* 右侧引导图 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <Image
                  src="/images/solutions/bank-enterprise-link-hero.png"
                  alt="银企联产品展示"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* 装饰性浮动元素 */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-2xl z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-100 rounded-full opacity-30 blur-3xl z-10" />
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
