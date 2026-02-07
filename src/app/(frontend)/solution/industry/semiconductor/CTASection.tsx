'use client'

import { useState } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              准备好开启半导体智造之旅了吗？
            </h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              泊冉软件作为用友合作伙伴，提供专业的半导体CIM解决方案咨询与实施服务。
              立即预约半导体行业专家，了解如何为您的工厂定制智能化升级方案。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg shadow-red-900/30 flex items-center gap-2 group"
              >
                预约半导体专家咨询
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:4009955161"
                className="px-10 py-4 border-2 border-slate-500 text-white font-semibold rounded-md hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Phone size={18} />
                致电 400-9955-161
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 mb-4">已服务的半导体企业</p>
              <div className="flex items-center justify-center gap-8 flex-wrap text-slate-400">
                <span className="text-sm">芯恩青岛</span>
                <span className="text-slate-600">•</span>
                <span className="text-sm">国微集成</span>
                <span className="text-slate-600">•</span>
                <span className="text-sm">华虹半导体</span>
                <span className="text-slate-600">•</span>
                <span className="text-sm italic">更多头部企业...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
