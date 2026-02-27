'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F7F8FA]">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50/50 skew-x-12 translate-x-20 z-0"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#E60012] text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E60012] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60012]"></span>
                </span>
                收入云 8.0 全新发布
              </div>
              
              {/* 静态标题 - SEO 友好 */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                从<span className="text-[#E60012]">大海捞针</span>到<br/>
                <span className="text-[#0052D9]">精准穿透</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                消灭人工对账的繁琐与误差。用友BIP收入云，通过「明细级对账模型+滚动式差异处理」双重引擎，让企业资金流向清晰可查，每一笔收入精准入账。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 flex items-center gap-2 group"
                >
                  预约专家演示
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button onClick={handleOpenConsult} className="px-8 py-3.5 bg-white text-[#0052D9] border-2 border-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                  下载解决方案白皮书
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 99.9% 准确率</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 自动化核销</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 全球业务支持</span>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                {/* Abstract Representation of Reconciliation */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-[#1F2329]">智能对账监控中心</h3>
                    <span className="text-xs font-mono bg-green-100 text-green-700 px-2 py-1 rounded">LIVE</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🛍️</div>
                        <div>
                          <div className="text-sm font-medium text-[#1F2329]">天猫旗舰店</div>
                          <div className="text-xs text-slate-500">订单同步完成</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-[#1F2329]">¥1,240,000</div>
                        <div className="text-xs text-green-600 flex items-center justify-end gap-1">
                          <CheckCircle size={10} /> 已核对
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">💳</div>
                        <div>
                          <div className="text-sm font-medium text-[#1F2329]">支付宝流水</div>
                          <div className="text-xs text-slate-500">实时获取中</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-[#1F2329]">¥1,239,850</div>
                        <div className="text-xs text-orange-500 flex items-center justify-end gap-1">
                          处理差异中...
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="pt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-500">今日自动对账进度</span>
                        <span className="font-bold text-[#E60012]">98%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-[#E60012] h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative behind elements */}
                <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-slate-200 rounded-2xl"></div>
                <div className="absolute -z-20 top-12 -right-12 w-full h-full bg-slate-100 rounded-2xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
