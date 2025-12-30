'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -ml-32 -mb-32 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-[#E60012] rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">
              准备好让您的项目成本回归“可控”了吗？
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              现在预约，免费获取《P2C项目全生命周期管理》深度方案及行业标杆案例库
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-5 bg-white text-[#E60012] font-bold rounded-xl text-lg hover:bg-slate-50 transition-all shadow-lg"
              >
                免费预约专家演示
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white/40 text-white font-bold rounded-xl text-lg hover:bg-white/10 transition-all">
                在线咨询顾问
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        // source="p2c-project-to-cost" 
      />
    </>
  )
}
