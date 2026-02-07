import { TrendingUp, Clock, CheckCircle } from 'lucide-react'

export default function Results() {
    const results = [
        {
            icon: Clock,
            metric: "3",
            unit: "天",
            label: "月度关账周期",
            desc: "财务关账时间由原来的 10 天以上缩短至 3 天内，实现结账透明化",
            highlight: "效率提升 70%+"
        },
        {
            icon: TrendingUp,
            metric: "40",
            unit: "%",
            label: "库存调拨效率",
            desc: "通过精准的供需匹配，原材料调拨效率提升 40%，有效降低呆滞库存",
            highlight: "运营成本显著降低"
        },
        {
            icon: CheckCircle,
            metric: "100",
            unit: "%",
            label: "品质追溯达标率",
            desc: "实现了全生命周期追溯，顺利通过全球头部客户的供应商体系审核",
            highlight: "合规性高效达成"
        }
    ]

  return (
    <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-3 block">OUTCOMES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">项目价值</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            数字化转型带来的不仅仅是系统的升级，更是业务效率与竞争力的质变
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {results.map((item, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-all duration-300">
                    <div className="flex items-center justify-between mb-8">
                         <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
                            {item.highlight}
                        </div>
                    </div>
                   
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-5xl font-bold text-white tracking-tight">{item.metric}</span>
                        <span className="text-xl text-slate-400 font-medium">{item.unit}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3">{item.label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}
