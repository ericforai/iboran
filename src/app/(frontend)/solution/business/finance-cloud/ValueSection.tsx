'use client'

import { Target, Zap, TrendingUp, HandCoins } from 'lucide-react'

const values = [
  {
    icon: Zap,
    value: "500h",
    label: "每万张票据节约工时",
    desc: "电子发票100%覆盖，销项一键开票，开票效率提升 70% 以上。"
  },
  {
    icon: Target,
    value: "96%+",
    label: "发票认证效率提升",
    desc: "直接从认证平台提取发票电子数据，批量扫码、自动匹配、勾选确认。"
  },
  {
    icon: TrendingUp,
    value: "90%+",
    label: "税务管理水平提升",
    desc: "自动预警发票作废/冲红风险，税务申报表自动生成、自动核对。"
  },
  {
    icon: HandCoins,
    value: "120万/年",
    label: "某巨头节省纸张费",
    desc: "全面实施电子会计档案归档后，仅纸张与仓储管理成本即大幅降低。"
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">创造可衡量的商业价值</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            数据来源于 B2B 财务云标杆客户实际应用效果
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center group cursor-default">
              <div className="w-12 h-12 bg-[#2563EB]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2563EB] transition-all duration-300">
                <item.icon size={24} className="text-[#3B82F6] group-hover:text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2 leading-none">{item.value}</div>
              <div className="text-[#3B82F6] font-bold mb-3 text-sm tracking-wide group-hover:text-white transition-colors">{item.label}</div>
              <p className="text-slate-400 text-xs leading-relaxed font-normal opacity-80 group-hover:opacity-100">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
