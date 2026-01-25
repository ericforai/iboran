'use client'

import React from 'react'
import { Quote, ArrowRight } from 'lucide-react'
import { SlideUp, FadeIn } from '@/components/animations'
import { Badge } from '@/components/ui/badge'

export interface CaseLogosSectionProps {
  title?: string
  subtitle?: string
}

const industries = [
  { 
    name: '新零售', 
    icon: '🛍️',
    desc: '解决门店对账延迟与多平台核算孤岛',
  },
  { 
    name: '智能制造', 
    icon: '⚙️',
    desc: '实现 ERP 与 WMS/MES 生产全链路闭环',
  },
  { 
    name: '服务/互联网', 
    icon: '🌐',
    desc: '解决多组织精细化成本与全球财税合规',
  },
  { 
    name: '物流交通', 
    icon: '🚛',
    desc: '打通运输轨迹、汇率结算与自动账期管控',
  }
]

export const CaseLogosSection: React.FC<CaseLogosSectionProps> = React.memo(({
  title = '深耕行业场景 驱动数智增长',
  subtitle = '泊冉软件助力各行业领军企业实现业财合一，提升全球化经营竞争力',
}) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="blue" className="mb-4">SUCCESS STORIES</Badge>
          <SlideUp>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2329] mb-6 tracking-tight">
              {title}
            </h2>
          </SlideUp>
          <FadeIn delay={200}>
            <p className="text-lg text-slate-500">
              {subtitle}
            </p>
          </FadeIn>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((item, index) => (
            <SlideUp key={item.name} delay={index * 50}>
              <div className="group bg-slate-50 p-8 rounded-2xl border border-transparent hover:border-blue-500/20 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 cursor-pointer h-full flex flex-col">
                <div className="mb-6 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-3 group-hover:text-blue-600 transition-colors uppercase">{item.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-[#1F2329] group-hover:text-blue-600 transition-all mt-auto">
                  查看行业案例
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Global Testimonial Bar */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#001529] rounded-[2rem] transform -rotate-1 hidden lg:block"></div>
          <div className="relative bg-[#001529] rounded-[2rem] p-8 md:p-16 overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')]" />
             
             <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="lg:w-1/2">
                   <Quote className="text-blue-500/30 w-16 h-16 mb-6" />
                   <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-8">
                     &ldquo;泊冉软件的全球司库与业财合一方案，帮助我们实现了全球 15 个国家的实时资金调配，月度对账效率提升了 80% 以上。&rdquo;
                   </h3>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                        张
                      </div>
                      <div>
                        <div className="text-white font-bold">张强</div>
                        <div className="text-slate-500 text-sm">某全球领军科技企业 · CFO</div>
                      </div>
                   </div>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="h-12 flex items-center justify-center border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm">
                            <div className="w-24 h-4 bg-white/10 rounded-full animate-pulse"></div>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
})

CaseLogosSection.displayName = 'CaseLogosSection'
