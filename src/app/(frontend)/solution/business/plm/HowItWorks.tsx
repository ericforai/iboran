'use client'

import { ArrowRight, Lightbulb, FileCode, Truck, Settings } from 'lucide-react'


const steps = [
  {
    icon: Lightbulb,
    title: "1. 需求与规划",
    desc: "捕捉市场机会，定义产品路线图，以保障研发方向与商业目标一致。"
  },
  {
    icon: FileCode,
    title: "2. 产品设计 (CAD/PDM)",
    desc: "多学科协同设计，机电软一体化，自动构建 EBOM 并进行版本管理。"
  },
  {
    icon: Settings,
    title: "3. 工艺规划 (CAPP)",
    desc: "基于设计 BOM 快速转换工艺 BOM，定义加工路线与工序卡片。"
  },
  {
    icon: Truck,
    title: "4. 生产制造 (ERP/MES)",
    desc: "设计数据一键下发至生产，实现无缝流转，制造过程透明可视。"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            全生命周期数据闭环
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            YonBIP PLM 打通从概念到交付的数据链条，消除信息孤岛，实现真正的 design-to-delivery。
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white border-2 border-[#0052D9] text-[#0052D9] rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0 font-bold text-xl relative">
                  <span className="bg-white px-1 z-10">{idx + 1}</span>
                  {/* Active dot for connecting line */}
                  <div className="hidden lg:block absolute top-1/2 -left-1/2 w-full h-0.5 bg-[#0052D9] -z-10 origin-left scale-x-0" />
                </div>
                
                <div className="flex justify-center lg:justify-start mb-4">
                   <div className="p-3 bg-blue-50 rounded-lg text-[#0052D9]">
                     <step.icon size={24} />
                   </div>
                </div>

                <h3 className="text-lg font-bold text-[#1F2329] mb-3 text-center lg:text-left">
                  {step.title.split('. ')[1]}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center lg:text-left">
                  {step.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 text-slate-300">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
