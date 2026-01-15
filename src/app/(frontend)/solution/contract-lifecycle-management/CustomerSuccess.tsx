'use client'

import { Quote } from 'lucide-react'


const testimonials = [
  {
    quote: "使用 YonBIP 数智合同后，我们要管理的不仅是每年几万份的合同文件，更是背后数千亿的采购资金安全。系统帮助我们实现了 100% 的合同履约自动监控，大大降低了经营风险。",
    author: "法务总监",
    company: "某大型能源集团",
    industry: "能源化工",
  },
  {
    quote: "以前合同盖章要跑断腿，现在通过电子签章几分钟就能搞定。更重要的是，合同里的付款计划能直接生成财务系统的付款申请，财务再也不用对着合同手工录入数据了，效率提升非常明显。",
    author: "财务共享中心经理",
    company: "某知名汽车制造企业",
    industry: "汽车制造",
  }
]

const stats = [
    { label: "平均签约周期", value: "3天", desc: "从 15 天缩短至 3 天" },
    { label: "人工审核成本", value: "-60%", desc: "AI 辅助降低重复劳动" },
    { label: "履约风控覆盖", value: "100%", desc: "杜绝超付、漏付风险" }
]

const logos = [
    "中国建筑", "国家电网", "华润置地", "中粮集团", 
    "五粮液", "双良集团", "三一重工", "海尔智家"
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            行业领军企业的共同选择
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            从央国企到行业龙头，已有 2000+ 大型企业使用我们的 CLM 平台实现业财法一体化管理
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto divide-x divide-slate-200">
             {stats.map((stat, i) => (
                 <div key={i} className="text-center px-4">
                     <div className="text-4xl font-extrabold text-[#0052D9] mb-2">{stat.value}</div>
                     <div className="font-bold text-slate-800 mb-1">{stat.label}</div>
                     <div className="text-xs text-slate-500">{stat.desc}</div>
                 </div>
             ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="w-12 h-12 text-blue-100 absolute top-8 left-8" />
              
              <div className="relative z-10 pt-8">
                <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                  &quot;{item.quote}&quot;
                </p>
                
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold overflow-hidden text-xl">
                    {item.company.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#1F2329]">{item.company}</div>
                    <div className="text-sm text-slate-500">{item.author} · {item.industry}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Wall Placeholder */}
        <div className="border-t border-slate-200 pt-16">
            <p className="text-center text-slate-400 text-sm mb-8 uppercase tracking-widest font-bold">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {logos.map((logo, i) => (
                    <div key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-lg font-bold text-slate-600 shadow-sm text-sm">
                        {logo}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
