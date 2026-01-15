'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { PortalDashboardMockup } from './PortalDashboardMockup'

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100/50 rounded-full px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium text-blue-700">企业级统一入口解决方案</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                连接人员、业务与数据<br />
                <span className="text-blue-600">重塑企业数字工作台</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                YonBIP 企业门户是企业统一的应用入口与价值聚合平台。通过场景化、个性化、沉浸式的体验，实现应用、消息、待办与数据的一站式触达，让协作更高效，让管理更从容。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 font-medium flex items-center justify-center gap-2 group">
                  预约演示
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium flex items-center justify-center gap-2">
                  <PlayCircle className="w-4 h-4" />
                  观看视频
                </button>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>统一待办</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>千人千面</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>移动端同步</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="w-full lg:w-7/12 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
               <div className="relative rounded-xl shadow-2xl bg-white/50 backdrop-blur-sm p-2 border border-white/50">
                   <div className="aspect-[16/10] overflow-hidden rounded-lg bg-slate-50">
                        <PortalDashboardMockup />
                   </div>
               </div>
               
               {/* Decorative floating elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden lg:block"
               >
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <div>
                          <p className="text-xs text-slate-500">待办处理效率</p>
                          <p className="text-lg font-bold text-slate-800">+50%</p>
                      </div>
                  </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden lg:block"
               >
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                      </div>
                      <div>
                          <p className="text-xs text-slate-500">统一集成系统</p>
                          <p className="text-lg font-bold text-slate-800">50+</p>
                      </div>
                  </div>
               </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
