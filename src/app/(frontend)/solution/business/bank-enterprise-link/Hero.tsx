'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import BankLinkIllustration from './BankLinkIllustration'

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

            {/* 右侧引导图 - SVG 动画 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block group"
            >
              {/* 核心 SVG 插图 */}
              <div className="relative z-20 flex justify-center items-center animate-float">
                <div className="w-full relative">
                  <BankLinkIllustration />
                </div>
              </div>
              
              {/* 装饰性浮动元素 - 动态光效 */}
              {/* Decorative Elements around mockup */}
              <motion.div 
                animate={{ opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"
                style={{ willChange: "opacity" }}
              ></motion.div>
              <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-100/30 rounded-full blur-3xl"
                style={{ willChange: "opacity" }}
              ></motion.div>
              
              {/* 装饰性浮动元素 - 动态光效 */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10">
                <motion.div 
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-[100px]"
                  style={{ willChange: "opacity" }}
                ></motion.div>
                <motion.div 
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                  className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-400/10 rounded-full blur-[100px]"
                  style={{ willChange: "opacity" }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* 自定义动画样式 */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  )
}
