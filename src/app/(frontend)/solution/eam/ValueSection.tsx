import { TrendingUp, Clock, Wrench, Leaf } from 'lucide-react'

const metrics = [
  {
    title: "资产效率提升",
    icon: TrendingUp,
    color: "blue",
    description: "精细化管理提升资产利用率，闲置资产盘活，投资回报率显著提高。",
    stats: [
      { label: "资产利用率", value: "+25%" },
      { label: "OEE 提升", value: "+15%" },
      { label: "闲置资产减少", value: "-40%" }
    ]
  },
  {
    title: "维护成本优化",
    icon: Wrench,
    color: "green",
    description: "预防性与预测性维护减少故障频次，维修响应更快，维护成本显著下降。",
    stats: [
      { label: "维护成本降低", value: "-30%" },
      { label: "故障频次减少", value: "-50%" },
      { label: "MTTR 缩短", value: "-45%" }
    ]
  },
  {
    title: "运营效能提升",
    icon: Clock,
    color: "red",
    description: "设备可靠性提高保障生产连续性，减少非计划停机，产能释放明显。",
    stats: [
      { label: "停机时间减少", value: "-60%" },
      { label: "产能利用率", value: "+20%" },
      { label: "交付准时率", value: "+15%" }
    ]
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">释放资产核心价值</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            让每一项资产投资都能发挥最大价值，降低运营成本，提升资产回报率。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${
                  item.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  item.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                  <item.icon size={26} />
                </div>
                <h3 className="font-bold text-xl text-[#1F2329]">{item.title}</h3>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                {item.description}
              </p>

              <div className="mt-auto grid grid-cols-3 gap-3">
                {item.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="bg-slate-50 p-3 rounded-xl text-center">
                    <div className={`${
                      item.color === 'blue' ? 'text-blue-600' :
                      item.color === 'green' ? 'text-green-600' : 'text-red-600'
                    } font-bold text-xl mb-1`}>{stat.value}</div>
                    <div className="text-[10px] text-slate-500 font-medium leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-[#1F2329] mb-4 flex items-center gap-3">
              <Leaf className="text-[#0052D9]" size={28} />
              支撑双碳目标
            </h3>
            <p className="text-slate-600 leading-relaxed">
              设备能耗精细化管理与分析，识别节能潜力，优化用能结构。碳排放核算与追踪，助力企业实现绿色低碳转型。
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="inline-flex items-center gap-2 group cursor-pointer">
                <span className="text-lg font-bold text-[#0052D9] border-b-2 border-transparent group-hover:border-[#0052D9] transition-all">查看双碳方案</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center group-hover:bg-[#0052D9] group-hover:text-white transition-all">→</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
