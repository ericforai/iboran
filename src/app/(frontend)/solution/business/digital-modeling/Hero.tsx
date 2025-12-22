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
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#E60012] text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E60012] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60012]"></span>
                </span>
                数字化建模 (APP) 数智化底座
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                企业数智化<br/>
                <span className="text-[#E60012]">创新加速器</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                建立领先、统一、灵活的数智化资产模型。通过多维组织、智能流程与统一主数据，打破业务边界，释放创新潜能。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
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
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 多维组织架构</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 智能流程中心</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 全球合规支持</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full max-w-lg lg:max-w-none"
            >
              <div className="relative">
                {/* Visual Representation of Modeling */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 relative z-10 overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-[#1F2329]">企业数智化建模看板</h3>
                    <span className="text-xs font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">SYS READY</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">组织维度</div>
                      <div className="text-xl font-bold text-[#1F2329]">12+</div>
                      <div className="mt-2 text-[10px] text-green-600 bg-green-50 inline-block px-1.5 py-0.5 rounded">多维映射</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">活跃流程</div>
                      <div className="text-xl font-bold text-[#1F2329]">8,400+</div>
                      <div className="mt-2 text-[10px] text-blue-600 bg-blue-50 inline-block px-1.5 py-0.5 rounded">智能驱动</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 col-span-2">
                      <div className="text-xs text-slate-500 mb-2">主数据治理覆盖率</div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#E60012] h-full" style={{ width: '95%' }}></div>
                      </div>
                      <div className="mt-1 text-right text-[10px] font-bold text-[#1F2329]">95%</div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-bold">A</div>
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 text-xs font-bold">B</div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 text-xs font-bold">C</div>
                    <div className="w-4 h-px bg-slate-200"></div>
                    <div className="text-[10px] text-slate-400 font-medium">数智化集成</div>
                  </div>
                </div>
                
                {/* Decorative behind elements */}
                <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-slate-200 rounded-2xl"></div>
                <div className="absolute -z-20 top-12 -right-12 w-full h-full bg-slate-100 rounded-2xl"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
