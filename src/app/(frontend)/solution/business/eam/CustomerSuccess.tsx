'use client'

import React from 'react'

import { Quote } from 'lucide-react'

const customers = [
  { name: '汉盛科技', logo: '/logos/customer-1.png', industry: '先进制造' },
  { name: '久事集团', logo: '/logos/customer-2.png', industry: '公共服务' },
  { name: '万安科技', logo: '/logos/customer-3.png', industry: '汽车零部件' },
  { name: '德邦快递', logo: '/logos/customer-4.png', industry: '交通物流' },
  { name: '华新水泥', logo: '/logos/customer-5.png', industry: '流程制造' },
  { name: '某著名文旅度假区', logo: '/logos/customer-6.png', industry: '文旅度假' },
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">深受 10,000+ 领先企业的信赖</h2>
          <p className="text-slate-600">助力各行业实现资产管理的数智化转型</p>
        </div>

        {/* Logo Wall */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-20 opacity-50 contrast-125 grayscale hover:grayscale-0 transition-all">
          {customers.map((customer, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="h-12 w-32 bg-slate-200 rounded animate-pulse" /> {/* Placeholder for logos */}
              <span className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{customer.name}</span>
            </div>
          ))}
        </div>

        {/* Highlight Case */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 flex flex-col justify-center bg-gradient-to-br from-[#0052D9] to-blue-600 text-white">
            <Quote size={48} className="text-white/20 mb-6" />
            <blockquote className="text-2xl font-medium leading-relaxed mb-8">
              “通过 YonBIP EAM 的智能巡检与预测性维护，我们实现了大型文旅设施的零非计划停机，运维效率提升了 35%，显著增强了宾客的安全感与满意度。”
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">W</div>
              <div>
                <div className="font-bold">王总</div>
                <div className="text-sm text-white/70">某知名文旅集团 · 资产管理总监</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-12 bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-6">典型业务价值</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-black text-[#E60012]">35%</div>
                <div className="text-slate-600 leading-tight">资产运维效率<br /><span className="text-xs font-bold text-slate-400">效率突破</span></div>
              </div>
              <div className="border-t border-slate-100 w-full" />
              <div className="flex items-center gap-4">
                <div className="text-3xl font-black text-[#E60012]">100%</div>
                <div className="text-slate-600 leading-tight">实现移动化作业<br /><span className="text-xs font-bold text-slate-400">全场景覆盖</span></div>
              </div>
              <div className="border-t border-slate-100 w-full" />
              <div className="flex items-center gap-4">
                <div className="text-3xl font-black text-[#E60012]">12.4%</div>
                <div className="text-slate-600 leading-tight">年度维保成本降低<br /><span className="text-xs font-bold text-slate-400">降本增效</span></div>
              </div>
            </div>
            
            <button className="mt-10 text-[#0052D9] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              查看更多行业案例 <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
