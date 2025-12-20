'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Sparkles, Layout } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-32 z-0"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0052D9] text-sm font-semibold mb-6"
              >
                <Sparkles size={16} className="text-[#0052D9]" />
                EOC 企业数智化协同办公
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6"
              >
                AI 驱动的<span className="text-[#E60012]">业务流程</span><br/>
                效率革命
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                打破信息孤岛，连接人、业务与数据。通过统一数智门户与 AI 智能助手，实现无缝跨部门协作，助力企业高效创新。
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
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 协同效率提升 30%+</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 审批周期缩短 50%</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 快速构建业务应用</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-1 w-full max-w-lg lg:max-w-none"
            >
              <div className="relative">
                {/* Visual Representation: AI Assistant Chat & Portal */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 border border-slate-100 relative z-10 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center gap-3 mb-6 border-b pb-4 border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Sparkles size={20} className="text-[#E60012]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2329] text-sm">智友 AI 助手</h3>
                      <p className="text-[10px] text-green-500 font-medium">正在为您优化协作流程...</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0" />
                      <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none text-xs text-slate-600 max-w-[80%]">
                        帮我总结一下刚才的技术评审会议要点，并生成待办任务。
                      </div>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="flex gap-3 justify-end"
                    >
                      <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[80%] shadow-md shadow-blue-100">
                        好的。已为您提取 3 个核心议题，并为 5 位成员分配了跟进任务，同步至“数智门户”提醒。
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Sparkles size={14} className="text-[#0052D9]" />
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 }}
                      className="pt-2"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-2">自动生成的待办</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 p-2 bg-green-50 border border-green-100 rounded-lg">
                          <CheckCircle size={12} className="text-green-500" />
                          <span className="text-[10px] text-slate-600 truncate">更新接口文档</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-100 rounded-lg">
                          <CheckCircle size={12} className="text-slate-300" />
                          <span className="text-[10px] text-slate-600 truncate">确认服务器资源</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Decorative floating portal element */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-12 -left-12 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 z-20 hidden md:block"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Layout size={16} className="text-[#0052D9]" />
                    <span className="text-xs font-bold">数智门户</span>
                  </div>
                  <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-[#0052D9]" />
                  </div>
                </motion.div>

                {/* Decorative backgrounds */}
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
                  className="absolute -z-10 -top-6 -right-6 w-full h-full bg-slate-100/50 rounded-[2rem]"
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
