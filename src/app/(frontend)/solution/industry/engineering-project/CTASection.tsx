'use client'

import { useState } from 'react'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              开启业主方工程项目<span className="text-blue-400">数智化管控</span>之旅
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              预约工程管理行业专家咨询，获取定制化解决方案，实现投资可控、进度可视、风险可查、价值闭环。
            </p>
            
            {/* Trust Points */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-400" />
                用友BIP超级版
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-400" />
                业财一体化深度融合
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-400" />
                全生命周期资产管控
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition shadow-lg shadow-red-900/30 flex items-center gap-2 group"
              >
                预约项目管理专家咨询
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={handleOpenConsult} className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-md font-semibold hover:bg-white/20 transition">
                下载工程白皮书
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400">
              <a href="tel:400-9955-161" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={18} />
                <span>400-9955-161</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
