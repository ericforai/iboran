'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Sparkles, ShoppingBag, Store, Users, TrendingUp, Package } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-pink-50 to-rose-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl"></div>
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              {/* Industry Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-pink-100 text-slate-700 text-sm font-medium mb-6">
                <Sparkles size={16} className="text-pink-500" />
                化妆品行业解决方案
              </div>
              
              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                <span className="text-pink-500">全域营销</span>驱动<br/>
                美妆企业<span className="text-[#E60012]">数智化</span>升级
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP赋能化妆品行业高质量发展，涵盖全域数字化营销、B2B/B2C一体化运营、供应链高效协同
              </p>
              
              <p className="text-sm text-slate-500 mb-8 italic">
                &ldquo;国潮崛起，本土美妆品牌数智化转型势在必行&rdquo;
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-200/50 flex items-center gap-2 group"
                >
                  预约行业专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button onClick={handleOpenConsult} className="px-8 py-3.5 bg-white text-[#0052D9] border-2 border-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                  下载行业白皮书
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 全渠道整合</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> B2B2C一体化</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 业财深度融合</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-pink-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl shadow-lg shadow-pink-500/30 mb-4">
                      <Sparkles size={40} className="text-white" />
                    </div>
                    <h3 className="text-[#1F2329] font-bold text-lg">全域营销数智平台</h3>
                    <p className="text-slate-400 text-sm mt-1">B2B2C一体化运营中台</p>
                  </div>
                  
                  {/* Module Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Store, name: 'B2B', desc: '经销协同' },
                      { icon: ShoppingBag, name: 'B2C', desc: '全渠道零售' },
                      { icon: Users, name: 'CRM', desc: '会员运营' },
                      { icon: Package, name: 'SCM', desc: '供应链' },
                      { icon: TrendingUp, name: 'BI', desc: '数据洞察' },
                      { icon: Sparkles, name: 'AI', desc: '智能营销' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-pink-50 rounded-lg p-3 text-center border border-pink-100 hover:bg-pink-100 transition">
                        <module.icon size={20} className="mx-auto text-pink-500 mb-1" />
                        <div className="text-[#1F2329] font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-6 border-t border-pink-100 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">60%+</div>
                      <div className="text-xs text-slate-400">效率提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-500">99%</div>
                      <div className="text-xs text-slate-400">库存准确</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">25%+</div>
                      <div className="text-xs text-slate-400">复购提升</div>
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
        source="industry-cosmetics"
      />
    </>
  )
}
