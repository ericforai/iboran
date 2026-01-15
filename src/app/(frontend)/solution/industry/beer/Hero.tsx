'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Beer, Factory, Database, TrendingUp, ShoppingCart, Package } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-amber-100 text-slate-700 text-sm font-medium mb-6">
                <Beer size={16} className="text-amber-600" />
                啤酒行业解决方案
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                <span className="text-amber-600">数智酿造</span><br/>
                品质<span className="text-[#E60012]">升级</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP赋能啤酒行业高质量发展，涵盖智能酿造、数字工厂、产销协同、全渠道营销及业财一体化
              </p>
              
              <p className="text-sm text-slate-500 mb-8 italic">
                &ldquo;从产品创新到即时零售，全链路数智化转型&rdquo;
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
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 智能酿造</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 产销协同</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 即时零售</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl shadow-lg shadow-amber-500/30 mb-4">
                      <Beer size={40} className="text-white" />
                    </div>
                    <h3 className="text-[#1F2329] font-bold text-lg">啤酒数智化平台</h3>
                    <p className="text-slate-400 text-sm mt-1">全价值链数字化管理</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Factory, name: '智造', desc: '数字工厂' },
                      { icon: Database, name: '运营', desc: 'MOM平台' },
                      { icon: Package, name: '供应链', desc: '产销协同' },
                      { icon: ShoppingCart, name: '营销', desc: '全渠道' },
                      { icon: TrendingUp, name: '经营', desc: '业财融合' },
                      { icon: Beer, name: '品控', desc: '质量追溯' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-amber-50 rounded-lg p-3 text-center border border-amber-100 hover:bg-amber-100 transition">
                        <module.icon size={20} className="mx-auto text-amber-600 mb-1" />
                        <div className="text-[#1F2329] font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-amber-100 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">30%+</div>
                      <div className="text-xs text-slate-400">效率提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-600">100%</div>
                      <div className="text-xs text-slate-400">数据采集</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">全链路</div>
                      <div className="text-xs text-slate-400">质量可溯</div>
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
        source="industry-beer"
      />
    </>
  )
}
