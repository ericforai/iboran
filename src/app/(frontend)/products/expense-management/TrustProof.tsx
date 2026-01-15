'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export const TrustProof = () => {
  const cases = [
    {
      company: '某知名制造集团',
      industry: '离散制造',
      results: '上线后月度报销周期减少 [65]%，财务人均处理单据提升 [2.5] 倍。',
      quote: '费控解决了我们几千名异地员工的报销难题，真正实现了预算的先行控制。',
    },
    {
      company: '某省属国有企业',
      industry: '能源化工',
      results: '实现全量票据验真与电子归集，合规风险降低至 [0.1]% 以下。',
      quote: '与 NC 财务系统的无缝对接及银企直联，极大缩短了支付确认时间。',
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">值得信赖的交付证据</h2>
          <p className="text-gray-600">全国累计超过 50,000 家组织选择协同驱动的费控方案</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {cases.map((item, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all overflow-hidden bg-white">
              <CardContent className="p-0 flex flex-col md:flex-row">
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wider">
                      {item.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.company}</h3>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-600/10" />
                    <p className="text-slate-600 italic text-sm mb-6 leading-relaxed relative z-10">
                      “{item.quote}”
                    </p>
                  </div>
                  <div className="bg-blue-600 text-white p-4 rounded-xl">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">量化交付价值</p>
                    <p className="text-sm font-medium">{item.results}</p>
                  </div>
                </div>
                <div className="bg-slate-100 md:w-1/3 flex items-center justify-center p-8">
                  {/* 这里可以使用占位图或者公司LOGO */}
                  <div className="text-slate-400 font-bold text-center">
                    Case Study 0{index + 1}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all">
          <span className="text-2xl font-black">YONYOU</span>
          <span className="text-2xl font-black">CERTIFIED</span>
          <span className="text-2xl font-black">1400+ BANKS</span>
          <span className="text-2xl font-black">50,000+ USERS</span>
        </div>
      </div>
    </section>
  )
}
