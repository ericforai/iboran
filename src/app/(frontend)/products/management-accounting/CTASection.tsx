'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-white/5 skew-x-12 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[100%] border-r border-white/10 -skew-x-12 -translate-x-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                 准备好开启<br /><span className="text-blue-600">数智化管理会计</span>新篇章吗？
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 泊冉软件的资深咨询顾问已就绪，为您提供免费的初步转型评估与系统演示。让数据真正成为驱动您企业增长的核心引擎。
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-slate-400">
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    免费咨询
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    定制演示
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    实施路标规划
                 </div>
              </div>
           </div>

           <div className="flex flex-col gap-4 w-full max-w-sm">
              <Button size="lg" className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-bold shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95">
                 立即预约演示 <Calendar className="ml-2 h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="w-full h-16 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-2xl text-lg font-bold transition-all">
                 联系技术顾问 <MessageSquare className="ml-2 h-6 w-6" />
              </Button>
              <p className="text-center text-xs text-slate-400 mt-2">
                 或者拨打我们的专家热线: <span className="text-slate-700 font-bold">400-XXX-XXXX</span>
              </p>
           </div>
        </div>
      </div>
    </section>
  )
}
