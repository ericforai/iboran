import React from 'react'
import { Quote, CheckCircle2, Trophy, Globe } from 'lucide-react'

export const CaseLogosSection = () => {
  const industries = [
     { 
       name: '新零售', 
       breakthrough: '解决门店对账延迟与多平台核算孤岛',
       clients: ['汉堡王', 'Tims', 'Costa', '林清轩'] 
     },
     { 
       name: '智能制造', 
       breakthrough: '实现 ERP 与 WMS/MES 生产全链路闭环',
       clients: ['正帆科技', '开能健康', '捷太格特', '天田中国'] 
     },
     { 
       name: '服务/互联网', 
       breakthrough: '解决多组织精细化成本与全球财税合规',
       clients: ['南极电商', '西域供应链', '爱数科技', '仕卿人力'] 
     },
     { 
       name: '物流交通', 
       breakthrough: '打通运输轨迹、汇率结算与自动账期管控',
       clients: ['安能物流', '强生交通', '久事公交', '交运集团'] 
     }
  ]

  const testimonials = [
    {
      quote: "泊冉不仅是软件商，更是我们的业务顾问。通过业财一体化方案，我们的月度结账时间缩短了 40%，数据准确率提升至 99.9%。",
      author: "某知名餐饮连锁",
      role: "财务总监",
      metric: "效率提升 +40%"
    },
    {
      quote: "在跨国实施的复杂场景下，泊冉展示了极强的交付能力，解决了中国与亚洲多地数据合规痛点，是值得信赖的伙伴。",
      author: "汉盛科技",
      role: "IT 负责人",
      metric: "全球运营稳健"
    }
  ]

  const logos = [
    'BURGER KING', 'SHELL', 'BILIBILI', 'SCHNEIDER', 'JONGSON', 'SF INTERNATIONAL', 'YTO EXPRESS', 'SHANGHAI BUS'
  ]

  return (
    <>
      {/* Snap Page 1: Industry Cards */}
      <div className="min-h-screen flex flex-col justify-center snap-start snap-always py-24 lg:py-20 relative isolate">
        <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-blue-600"></div>
            <div className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-[0.4em]">价值交付记录 V3</div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-black text-slate-950 tracking-tight leading-[1.1] mb-8">
            赋能全球标杆<br />
            见证数智进化
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            从初创先锋到世界500强，2500+ 企业在泊冉的陪伴下，攻克业财孤岛，建立实时响应的数字底座。
          </p>
        </div>

        {/* Industry Card Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-[32px] overflow-hidden shadow-xl">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white p-10 hover:bg-slate-50 transition-all duration-500 group flex flex-col justify-between relative">

              <div>
                 <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-6 bg-slate-200 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                    <h3 className="text-xl font-heading font-bold text-slate-950 tracking-tight">{industry.name}</h3>
                 </div>
                 <div className="text-[10px] font-mono font-black text-blue-600 uppercase tracking-widest mb-4">核心突破节点</div>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10">
                   {industry.breakthrough}
                 </p>
              </div>
              
              <div className="space-y-3 pt-6 border-t border-slate-100">
                {industry.clients.map((client, cIdx) => (
                  <div key={cIdx} className="text-slate-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-blue-600/30" />
                    {client}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>

      {/* Page 2: Testimonials */}
      <div className="py-32 bg-slate-50 overflow-hidden relative isolate border-b border-slate-100">
        <div className="container mx-auto px-4">

        {/* Precision Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-[48px] overflow-hidden mb-24 shadow-2xl">
           {testimonials.map((t, i) => (
             <div key={i} className="group relative bg-slate-950 p-12 lg:p-16 text-white overflow-hidden">
                <div className="absolute top-0 right-0 p-12 font-mono text-white/5 text-[120px] font-black leading-none select-none">
                   {i === 0 ? '“' : '”'}
                </div>
                
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-10">
                   <Quote size={20} fill="currentColor" />
                </div>
                
                <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-12 relative z-10 tracking-tight text-slate-300">
                   {t.quote}
                </p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-10 mt-auto">
                   <div className="flex items-center gap-6">
                      <div className="hidden sm:block w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10">
                         <Globe size={20} />
                      </div>
                      <div>
                         <div className="font-heading font-black text-lg tracking-tight">{t.author}</div>
                         <div className="text-[10px] font-mono text-white/40 font-bold uppercase tracking-widest">{t.role}</div>
                      </div>
                   </div>
                   <div className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-md text-[10px] font-mono font-black text-blue-400 uppercase">
                      {t.metric}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
    </>
  )
}
