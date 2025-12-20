'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Sparkles, BrainCircuit } from 'lucide-react'
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
                AIP 企业智能化应用底座
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6"
              >
                AI 驱动的<br/>
                企业<span className="text-[#E60012]">智变</span>引擎
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                AIP：YonGPT + Intelligent Applications，企业智能重构的技术底座。赋能企业快速构建、部署和管理数智化应用，将 AI 深度嵌入业务流程，实现端到端的智能化升级。
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
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 业务效率提升 30%+</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 审批周期缩短 50%</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 全流程智能化覆盖</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-1 w-full max-w-lg lg:max-w-none"
            >
              <div className="relative">
                {/* Visual Representation: AIP Central Hub */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 border border-slate-100 relative z-10 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center gap-4 mb-8 border-b pb-6 border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                      <BrainCircuit size={28} className="text-[#E60012]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2329] text-lg">AIP 智能中心</h3>
                      <p className="text-xs text-green-500 font-medium">模型就绪，正在驱动业务场景...</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="p-4 bg-slate-50 rounded-2xl border border-slate-100"
                      >
                        <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Knowledge Engine</div>
                        <div className="text-sm font-bold text-[#1F2329]">RAG 向量库</div>
                        <div className="mt-2 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="h-full bg-blue-500" 
                          />
                        </div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="p-4 bg-slate-50 rounded-2xl border border-slate-100"
                      >
                        <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">AI Agent</div>
                        <div className="text-sm font-bold text-[#1F2329]">智能体运行中</div>
                        <div className="flex gap-1 mt-2">
                          {[1,2,3,4].map(i => (
                            <motion.div 
                              key={i}
                              animate={{ scaleY: [1, 1.5, 1] }}
                              transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                              className="w-1 h-3 bg-red-400 rounded-full"
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="bg-[#1F2329] p-4 rounded-xl text-xs font-mono text-green-400"
                    >
                      <div>\u003e Initializing YonGPT context...</div>
                      <div className="mt-1">\u003e Connecting to enterprise ERP data...</div>
                      <div className="mt-1 text-white">\u003e AI Agent: 已识别生产异常，正在生成优化建议...</div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Decorative floating elements */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-6 -left-12 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 z-20 hidden md:block"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles size={16} className="text-[#0052D9]" />
                    <span className="text-xs font-bold text-[#1F2329]">数智融合</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600">ERP</div>
                    <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center text-[10px] font-bold text-red-600">AI</div>
                    <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-600">IoT</div>
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
