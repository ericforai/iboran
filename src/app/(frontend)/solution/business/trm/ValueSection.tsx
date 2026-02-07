import { TrendingUp, TrendingDown, ShieldCheck, Eye } from 'lucide-react'

const metrics = [
  {
    title: "资金效率提升",
    icon: TrendingUp,
    color: "blue",
    description: "统一支付与智能归集大幅提升资金周转效率，沉淀资金盘活利用。",
    stats: [
      { label: "资金周转率", value: "+30%" },
      { label: "支付效率", value: "+80%" },
      { label: "沉淀资金减少", value: "-50%" }
    ]
  },
  {
    title: "融资成本降低",
    icon: TrendingDown,
    color: "green",
    description: "资金集中管理减少外部融资需求，优化融资结构，降低综合融资成本。",
    stats: [
      { label: "融资成本降低", value: "-20%" },
      { label: "外部融资减少", value: "-40%" },
      { label: "利息支出节约", value: "千万级" }
    ]
  },
  {
    title: "风险管控强化",
    icon: ShieldCheck,
    color: "red",
    description: "统一管控与实时监控有效防范资金风险，合规性与安全性显著提升。",
    stats: [
      { label: "违规支付", value: "零容忍" },
      { label: "风险识别", value: "实时" },
      { label: "合规覆盖率", value: "99%以上" }
    ]
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">释放资金核心价值</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            让资金成为企业发展的强力引擎，提升效率、降低成本、管控风险。
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
              <Eye className="text-[#0052D9]" size={28} />
              全球资金可视化
            </h3>
            <p className="text-slate-600 leading-relaxed">
              支持全球多时区、多币种、多银行的统一资金管理。跨境资金调度、外汇风险管理，助力企业全球化经营。
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="inline-flex items-center gap-2 group cursor-pointer">
                <span className="text-lg font-bold text-[#0052D9] border-b-2 border-transparent group-hover:border-[#0052D9] transition-all">查看全球司库方案</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center group-hover:bg-[#0052D9] group-hover:text-white transition-all">→</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
