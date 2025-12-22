'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            准备好加速您的 CDMO 数字化转型了吗？
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            泊冉软件作为用友铂金伙伴，提供专业的生物医药行业数字化解决方案实施与定制服务。
            立即预约演示，了解如何为您的企业量身定制研产一体化方案。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg shadow-red-900/20 flex items-center gap-2 group"
            >
              预约行业专家演示
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:4009955161"
              className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-all"
            >
              致电 400-9955-161
            </a>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
