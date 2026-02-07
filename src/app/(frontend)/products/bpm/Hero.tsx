'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Workflow, Network, Zap } from 'lucide-react'
import Image from 'next/image'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

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
                <Workflow size={16} />
                智能敏捷 BPM 流程治理平台
              </div>
              
              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                让管理规则<span className="text-blue-600">自动</span>落地<br/>
                消除组织<span className="text-[#E60012]">协作</span>断层
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                连接人、系统与业务，构建企业级流程运营中枢。实现流程从设计、执行到优化的闭环治理，助力企业数字化转型从“系统集成”迈向“业务卓越”。
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
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-md font-bold hover:bg-blue-50 transition shadow-sm flex items-center justify-center gap-2">
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
                    <p className="text-sm font-bold text-slate-900">30% 效率提升</p>
                    <p className="text-xs text-slate-500">自动化替代人工审批</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">SAP/NC 深度集成</p>
                    <p className="text-xs text-slate-500">打破企业信息孤岛</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">合规执行可追溯</p>
                    <p className="text-xs text-slate-500">流程审计自动追溯</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Visual Element */}
            <div className="flex-1 w-full relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <Image 
                    src="/media/bpm-hero.png"
                    alt="BPM 流程架构示意图"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Floating UI Badges */}
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur shadow-lg rounded-lg border border-blue-50 flex items-center gap-3 animate-pulse">
                    <div className="p-2 bg-blue-600 rounded-md text-white">
                      <Network size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-medium">REAL-TIME SYNC</p>
                      <p className="text-xs font-bold text-slate-900">ERP 数据集成中...</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur shadow-lg rounded-lg border border-red-50 flex items-center gap-3">
                    <div className="p-2 bg-[#E60012] rounded-md text-white">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-medium">AI OPTIMIZATION</p>
                      <p className="text-xs font-bold text-slate-900">流程瓶颈自动诊断</p>
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
