'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-[#F7F8FA] border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1F2329] mb-6">
              提升餐饮连锁经营韧性，从现在开始
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              数千家餐饮连锁标杆企业的共同选择。立即预约专业顾问，为您量身定制符合企业实际情况的数智化一体化方案。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg shadow-red-200 active:scale-95"
              >
                立即预约行业专家
              </button>
              <button className="px-10 py-4 border-2 border-[#0052D9] text-[#0052D9] font-semibold rounded-md hover:bg-blue-50 transition-all active:scale-95">
                申请产品方案演示
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)}
        source="industry-catering-cta"
      />
    </>
  )
}
