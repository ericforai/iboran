'use client'

import { TrendingUp, Zap, ShieldCheck } from 'lucide-react'

interface Metric {
  value: string
  label: string
  description: string
}

// 价值指标数据内置在组件中
const metrics: Metric[] = [
  {
    value: '25%+',
    label: '成本结算效率提升',
    description: '通过智能模拟与自动结算引擎，实现快速准确的良品单位成本核算。'
  },
  {
    value: '40%',
    label: '供应链协同提效',
    description: '打通外部Foundry/封测厂协作节点，缩短订单周期与沟通成本。'
  },
  {
    value: '99%以上',
    label: '合规追溯准确率',
    description: '从晶圆刻号到成品Reel号的全程链路锁定，以保障每一颗芯片可溯源。'
  }
]

// 图标映射
const icons = [TrendingUp, Zap, ShieldCheck]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Industry Value
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            数智转型，驱动高质量增长
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, idx) => {
            const Icon = icons[idx]
            return (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0052D9] transition-all duration-500">
                  <Icon className="w-10 h-10 text-[#0052D9] group-hover:text-white transition-colors" />
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
