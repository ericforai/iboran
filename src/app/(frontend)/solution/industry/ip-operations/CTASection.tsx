'use client'

import { useState } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-gradient-to-r from-[#0052D9] to-blue-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              开启 IP 运营数智化之旅
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              泊冉软件，用友合作伙伴，为您提供 IP 行业全生命周期数智化解决方案
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-4 bg-[#E60012] text-white rounded-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-900/30 flex items-center gap-2 group text-lg"
              >
                预约专家演示
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="tel:400-9955-161"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center gap-2 text-lg"
              >
                <Phone size={20} />
                咨询热线
              </a>
            </div>

            <p className="mt-8 text-blue-200 text-sm">
              专业顾问将在 24 小时内与您联系
            </p>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
