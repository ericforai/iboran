
'use client'

import { motion } from 'framer-motion'
import { Database, Search, Server, Monitor } from 'lucide-react'

const steps = [
  {
    icon: Server,
    title: '多元数据接入',
    desc: '连接ERP、IoT及第三方异构系统数据'
  },
  {
    icon: Database,
    title: '数据治理与建模',
    desc: '清洗转化，构建统一业务数据模型'
  },
  {
    icon: Search,
    title: '智能探索分析',
    desc: '自助式拖拽分析与AI智能洞察'
  },
  {
    icon: Monitor,
    title: '多端可视化展现',
    desc: 'PC大屏、移动端实时监控经营状况'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            端到端的智能数据分析流程
          </h2>
          <p className="text-lg text-slate-600">
            打通数据从采集到应用的全链路，消除数据孤岛，让数据资产真正流动起来
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                  <div className={`absolute inset-0 bg-blue-50 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12 -z-10`} />
                  <step.icon className="w-8 h-8 text-blue-600" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#E60012] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA or Info */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 p-8 bg-blue-600 rounded-2xl shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div>
                <h4 className="text-2xl font-bold mb-2">开箱即用的行业最佳实践</h4>
                <p className="text-blue-100">预置 100+ 财务、供应链、人力等领域分析模型</p>
            </div>
            <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-blue-400 flex items-center justify-center text-xs font-bold shadow-sm">
                       Logo
                   </div>
               ))}
               <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/50 bg-blue-500/50 flex items-center justify-center text-xs">
                  +1k
               </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
