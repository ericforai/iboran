'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Utensils, Store, Package, Calculator, TrendingUp, Users } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-orange-100 text-slate-700 text-sm font-medium mb-6">
                <Utensils size={16} className="text-orange-600" />
                餐饮行业解决方案
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                <span className="text-orange-600">业财一体</span><br/>
                餐饮<span className="text-[#E60012]">连锁</span>高效经营
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP为餐饮连锁企业提供门店运营、供应链协同、成本管控与会员营销一体化数智解决方案
              </p>
              
              <p className="text-sm text-slate-500 mb-8 italic">
                &ldquo;从中央厨房到门店终端，全链路数字化管理&rdquo;
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-200/50 flex items-center gap-2 group"
                >
                  预约行业专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button className="px-8 py-3.5 bg-white text-[#0052D9] border-2 border-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition">
                  下载白皮书
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 门店管理</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 成本管控</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 会员营销</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg shadow-orange-500/30 mb-4">
                      <Utensils size={40} className="text-white" />
                    </div>
                    <h3 className="text-[#1F2329] font-bold text-lg">餐饮连锁数智平台</h3>
                    <p className="text-slate-400 text-sm mt-1">全渠道一体化运营</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Store, name: '门店', desc: '连锁管理' },
                      { icon: Package, name: '供应链', desc: '中央厨房' },
                      { icon: Calculator, name: '成本', desc: '精细核算' },
                      { icon: Users, name: '会员', desc: '营销运营' },
                      { icon: TrendingUp, name: 'BI', desc: '经营分析' },
                      { icon: Utensils, name: '点餐', desc: '全渠道' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-orange-50 rounded-lg p-3 text-center border border-orange-100 hover:bg-orange-100 transition">
                        <module.icon size={20} className="mx-auto text-orange-600 mb-1" />
                        <div className="text-[#1F2329] font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-orange-100 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">35%+</div>
                      <div className="text-xs text-slate-400">成本降低</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">50%+</div>
                      <div className="text-xs text-slate-400">效率提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">20%+</div>
                      <div className="text-xs text-slate-400">复购增长</div>
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
        source="industry-catering"
      />
    </>
  )
}
