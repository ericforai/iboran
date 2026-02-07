'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-[#1F2329]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            开启低代码开发新时代
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
            泊冉软件作为用友合作伙伴，拥有丰富的低代码平台实施经验。我们不仅提供 DEV 开发平台的技术能力，更为您提供从培训赋能到项目落地的全程支持。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-12 py-5 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl shadow-red-900/40 flex items-center gap-2 group text-lg"
            >
              申请免费试用
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:4009955161"
              className="px-12 py-5 border-2 border-slate-600 text-white font-bold rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-all text-lg"
            >
              致电专家: 400-9955-161
            </a>
          </div>
          <div className="mt-12 text-slate-500 text-sm">
            用友 BIP Partner | 低代码开发专家
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
