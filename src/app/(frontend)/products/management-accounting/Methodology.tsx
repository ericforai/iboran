'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Settings2, Share2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: '数字化建模',
    description: '通过咨询诊断，梳理企业法人与管理架构，定义成本敏感特征与管理目的口径。',
    color: 'bg-blue-500'
  },
  {
    icon: <Settings2 className="w-6 h-6" />,
    title: '规则配置',
    description: '建立会计规则中心，统一定义事项分录转换逻辑、成本核算要素与分配方法。',
    color: 'bg-indigo-500'
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: '系统集成',
    description: '打通营销、制造、供应、人力等全业务云，实现事项驱动下的业财数据源实时共享。',
    color: 'bg-purple-500'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: '自动化运营',
    description: '上线智能月结平台，实现从成本卷积到差异回摊的自动化闭环，达成降本增效目标。',
    color: 'bg-pink-500'
  }
]

export default function Methodology() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            泊冉交付方法论：从规划到卓越运营
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            不仅是软件上线，衡量成功的标准是为您构建可自我进化的数智化管控体系。
          </p>
        </div>

        <div className="relative">
          {/* Centered Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 text-center group"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
                   {step.icon}
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-[32px] group-hover:bg-slate-800 transition-colors">
                   <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {/* Arrow for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-8 pointer-events-none">
                     <motion.div 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full h-full border-t-2 border-r-2 border-slate-700 rotate-45"
                     />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
