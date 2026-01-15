'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F7F8FA]">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50/50 skew-x-12 translate-x-20 z-0"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#E60012] text-sm font-semibold mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E60012] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60012]"></span>
                </span>
                LINK 企业集成平台 
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6"
              >
                让<span className="text-[#E60012]">商业连接</span>更容易<br/>
                让<span className="text-[#0052D9]">集成开发</span>更轻松
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                一体化集成、快捷连接能力及资产共享，(YonBIP & YonSuite) 助力企业低成本、快速、便捷地实现业务应用连接与集成，全面提升数智化底座韧性。
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 flex items-center gap-2 group"
                >
                  预约专家演示
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button className="px-8 py-3.5 bg-white text-[#0052D9] border-2 border-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                  下载解决方案白皮书
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500"
              >
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 集成效率提升 50%+</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 内置 100+ 连接器</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 企业级高并发支撑</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-1 w-full max-w-lg lg:max-w-none"
            >
              <div className="relative">
                {/* Visual Representation of Integration Platform */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 border border-slate-100 relative z-10 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="font-bold text-[#1F2329] text-lg">API 全生命周期监控</h3>
                      <p className="text-xs text-slate-400 mt-1">实时观测企业级数据脉动</p>
                    </div>
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { icon: '🔗', title: 'YonBIP 连接器', desc: '财务/供应链同步', color: 'bg-blue-100 text-blue-600', status: '正常运行' },
                      { icon: '☁️', title: '钉钉/企微集成', desc: '协同流程对接', color: 'bg-indigo-100 text-indigo-600', status: '已连接' },
                      { icon: '🛠️', title: 'SAP/Oracle 集成', desc: '遗留系统同步', color: 'bg-red-100 text-red-600', status: '流转中' },
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group/item"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.color} group-hover/item:scale-110 transition-transform`}>
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#1F2329]">{item.title}</div>
                            <div className="text-[11px] text-slate-500">{item.desc}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-bold text-green-600 px-2 py-0.5 bg-green-50 rounded-full border border-green-100">
                            {item.status}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Decorative backgrounds with floating animation */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 -top-6 -right-6 w-full h-full bg-slate-200/50 rounded-[2rem]"
                ></motion.div>
                <motion.div 
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -1, 0]
                  }}
                  transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-20 -bottom-8 -left-8 w-full h-full bg-[#0052D9]/5 rounded-[2.5rem]"
                ></motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
