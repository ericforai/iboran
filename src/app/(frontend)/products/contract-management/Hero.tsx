'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, FileText, Gavel, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F8FAFC]">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-top-right"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              {/* Product Category Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 shadow-sm border border-blue-200">
                <FileText size={16} />
                合同全生命周期数智化管理
              </div>
              
              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                让合同管理从<span className="text-blue-600">风险监管</span><br/>
                转变为<span className="text-[#E60012]">价值驱动</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                实现从合同起草、智能内审、电子签章到履约监控、财务对账及自动归档的闭环管理。规范业务流程，规避法律风险，提升组织风控能力与运营效率。
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group"
                >
                  预约专家视频演示
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button onClick={handleOpenConsult} className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-md font-bold hover:bg-blue-50 transition shadow-sm flex items-center justify-center gap-2">
                  获取交付价值清单
                </button>
              </div>

              {/* Quick Value Points */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-2">
                  <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">40% 签署效率提升</p>
                    <p className="text-xs text-slate-500">电子签章秒级盖章</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">90% 法律风险防控</p>
                    <p className="text-xs text-slate-500">范本库与智能合规审核</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">履约全程可追溯</p>
                    <p className="text-xs text-slate-500">关键节点自动预警提醒</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Visual Element */}
            <div className="flex-1 w-full relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <Image 
                    src="/media/contract-management-hero.png"
                    alt="合同管理系统场景示意图"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Floating UI Badges */}
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur shadow-lg rounded-lg border border-blue-50 flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-md text-white">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-medium">COMPLIANCE</p>
                      <p className="text-xs font-bold text-slate-900">法务合规性审计通过</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur shadow-lg rounded-lg border border-red-50 flex items-center gap-3">
                    <div className="p-2 bg-[#E60012] rounded-md text-white">
                      <Gavel size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-medium">E-SIGNATURE</p>
                      <p className="text-xs font-bold text-slate-900">电子合同法律存证中</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-slate-200 rounded-full blur-2xl opacity-50"></div>
            </div>

          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
