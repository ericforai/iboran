'use client'

import Link from 'next/link'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Pill, Sprout, FlaskConical, Package, Leaf, TrendingUp } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-emerald-100 text-slate-700 text-sm font-medium mb-6">
                <Pill size={16} className="text-emerald-600" />
                中药行业解决方案
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                <span className="text-emerald-600">传承精华</span><br/>
                <span className="text-[#E60012]">全产业链</span>追溯
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP构建&ldquo;种植-加工-生产-流通&rdquo;全链路数智化平台，满足GAP/GMP/GSP合规要求，实现中药质量全程可追溯
              </p>
              
              <p className="text-sm text-slate-500 mb-8 italic">
                &ldquo;守正创新，数智赋能中药高质量发展&rdquo;
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link 
                href="/resources/whitepaper"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                  预约行业专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
                <button onClick={handleOpenConsult} className="px-8 py-3.5 bg-white text-[#0052D9] border-2 border-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition">
                  下载白皮书
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> GAP种植</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 质量追溯</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 精细成本</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg shadow-emerald-500/30 mb-4">
                      <Sprout size={40} className="text-white" />
                    </div>
                    <h3 className="text-[#1F2329] font-bold text-lg">中药全产业链平台</h3>
                    <p className="text-slate-400 text-sm mt-1">种植-生产-流通全溯源</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Sprout, name: '种植', desc: 'GAP基地' },
                      { icon: FlaskConical, name: '加工', desc: '饮片炮制' },
                      { icon: Pill, name: '制药', desc: '中成药' },
                      { icon: Package, name: '流通', desc: 'GSP管理' },
                      { icon: TrendingUp, name: '营销', desc: '全渠道' },
                      { icon: Leaf, name: '质量', desc: '全检追溯' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-100 hover:bg-emerald-100 transition">
                        <module.icon size={20} className="mx-auto text-emerald-600 mb-1" />
                        <div className="text-[#1F2329] font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-emerald-100 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">99%以上</div>
                      <div className="text-xs text-slate-400">追溯覆盖</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">GAP</div>
                      <div className="text-xs text-slate-400">合规基地</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">20%+</div>
                      <div className="text-xs text-slate-400">成本降低</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-traditional-chinese-medicine"
      />
    </>
  )
}
