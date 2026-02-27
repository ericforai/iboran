'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Activity, ShieldCheck, ScanLine, FileCheck, ClipboardCheck, FlaskConical } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-teal-100 text-slate-700 text-sm font-medium mb-6">
                <Activity size={16} className="text-teal-600" />
                医疗器械行业解决方案
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                <span className="text-teal-600">质量合规</span><br/>
                数智<span className="text-[#E60012]">引擎</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                面对集采压力与合规重塑，泊冉软件联合用友 YonSuite 为医疗器械企业提供从研发创新、智能制造、质量合规到客户服务的全链路数智化解决方案
              </p>
              
              <p className="text-sm text-slate-500 mb-8 italic">
                &ldquo;数智化建设将成为医疗器械企业持续高质量发展的关键引擎&rdquo;
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-200/50 flex items-center gap-2 group"
                >
                  预约行业专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button onClick={handleOpenConsult} className="px-8 py-3.5 bg-white text-[#0052D9] border-2 border-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition">
                  下载白皮书
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> GMP/GSP 合规</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> UDI 追溯</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> CSV 验证</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-teal-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl shadow-lg shadow-teal-500/30 mb-4">
                      <Activity size={40} className="text-white" />
                    </div>
                    <h3 className="text-[#1F2329] font-bold text-lg">医疗器械数智化平台</h3>
                    <p className="text-slate-400 text-sm mt-1">全价值链数字化管理</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: ShieldCheck, name: 'GMP', desc: '质量合规' },
                      { icon: ScanLine, name: 'UDI', desc: '全链追溯' },
                      { icon: FileCheck, name: 'CSV', desc: '系统验证' },
                      { icon: ClipboardCheck, name: 'GSP', desc: '经营规范' },
                      { icon: FlaskConical, name: '研发', desc: '一体协同' },
                      { icon: Activity, name: '品控', desc: '电子批记录' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-teal-50 rounded-lg p-3 text-center border border-teal-100 hover:bg-teal-100 transition">
                        <module.icon size={20} className="mx-auto text-teal-600 mb-1" />
                        <div className="text-[#1F2329] font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-teal-100 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">99%以上</div>
                      <div className="text-xs text-slate-400">合规达标</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600">60%+</div>
                      <div className="text-xs text-slate-400">审核提速</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">50%+</div>
                      <div className="text-xs text-slate-400">扫码效率</div>
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
        source="industry-medical-device"
      />
    </>
  )
}
