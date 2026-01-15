'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export const TrustProof = () => {
  const cases = [
    {
      company: '某知名制造企业',
      industry: '智能制造',
      results: 'HR 全月算薪周期从 [5] 天缩短至 [0.5] 天，实现全员电子工资条秒发。',
      quote: '薪事力与 OA 的深度集成极大地解放了我们的 HR，数据的实时同步避免了手工录入的低级错误。',
    },
    {
      company: '某全国性连锁餐饮',
      industry: '生活服务',
      results: '覆盖全国 [30+] 城市用工，社保基数、政策同步率提升至 [100]%。',
      quote: '面对复杂的异地用工政策，薪事力提供的实时政策库让我们再也不用担心社保合规风险。',
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">值得信赖的交付证据</h2>
          <p className="text-gray-600">薪事力：连接协同生态，赋能数智化人力资源管理</p>
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
                  <div className="text-slate-400 font-bold text-center">
                    Case Study 0{index + 1}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all">
          <span className="text-2xl font-black">HR CLOUD</span>
          <span className="text-2xl font-black">XINSHILI</span>
          <span className="text-2xl font-black">438+ CITIES</span>
          <span className="text-2xl font-black">50,000+ ORGS</span>
        </div>
      </div>
    </section>
  )
}
