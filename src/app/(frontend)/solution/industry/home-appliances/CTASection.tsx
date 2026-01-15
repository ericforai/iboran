'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* 背景装饰 */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              开启家电及 3C 行业<br />价值激发新可能
            </h2>
            <p className="text-blue-100 text-lg mb-12 leading-relaxed">
              打通全渠道集成链路，落地「多仓一盘货」战略。
              立即预约，与行业专家深度探讨您的数智化转型蓝图。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-red-50 transition-all text-lg shadow-lg"
              >
                免费预约行业专家咨询
              </button>
              <button className="px-10 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all text-lg">
                下载行业白皮书
              </button>
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)}
        source="industry-home-appliances-cta"
      />
    </section>
  )
}
