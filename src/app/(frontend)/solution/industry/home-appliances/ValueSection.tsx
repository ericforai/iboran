'use client'

import { TrendingUp, Zap, ShieldCheck } from 'lucide-react'

interface Metric {
  value: string
  label: string
  description: string
}

const metrics: Metric[] = [
  {
    value: '25%+',
    label: '库存周转率提升',
    description: '通过「多仓一盘货」与外仓联动，实现库存动态平衡，大幅降低呆滞积压成本。'
  },
  {
    value: '80%+',
    label: '订单处理提效',
    description: '全渠道订单由系统自动化流转，在大促期间依然能保持秒级响应与精准审单。'
  },
  {
    value: '近100%',
    label: 'SN 码追溯覆盖',
    description: '实现 3C 电子产品序列号从出厂、流转到消费者的全程锁定，售后异常一键溯源。'
  }
]

const icons = [TrendingUp, Zap, ShieldCheck]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-600 font-semibold tracking-wider uppercase">
            Industry Value
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            数智激发，赋能家电行业高质量增长
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, idx) => {
            const Icon = icons[idx]
            return (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 transition-all duration-500">
                  <Icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-black text-[#1F2329] mb-4">
                  {metric.value}
                </div>
                <h4 className="text-lg font-bold text-[#1F2329] mb-3">
                  {metric.label}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {metric.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
