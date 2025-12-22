import { TrendingUp, Clock, ShieldCheck, Lightbulb } from 'lucide-react'

const metrics = [
  {
    title: "决策效率提升",
    icon: Clock,
    color: "blue",
    description: "实时数据分析替代手工报表，业务人员自助获取洞察，决策时效性大幅提升。",
    stats: [
      { label: "报表产出加速", value: "10x" },
      { label: "取数等待减少", value: "-90%" },
      { label: "数据时效性", value: "实时" }
    ]
  },
  {
    title: "数据质量改善",
    icon: TrendingUp,
    color: "green",
    description: "统一数据标准与治理规范，持续监控与改进数据质量，确保分析结果可信。",
    stats: [
      { label: "数据一致性", value: "+85%" },
      { label: "重复数据减少", value: "-70%" },
      { label: "数据准确率", value: "99%+" }
    ]
  },
  {
    title: "业务价值释放",
    icon: Lightbulb,
    color: "red",
    description: "数据驱动的精细化运营，挖掘数据中的商业机会，推动业务增长与创新。",
    stats: [
      { label: "运营成本降低", value: "-15%" },
      { label: "客户洞察提升", value: "+200%" },
      { label: "决策准确率", value: "+40%" }
    ]
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">释放数据核心价值</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            让数据成为企业最有价值的资产，驱动业务增长与数智化转型。
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
              <ShieldCheck className="text-[#0052D9]" size={28} />
              合规与安全保障
            </h3>
            <p className="text-slate-600 leading-relaxed">
              全面满足等保三级、GDPR 等数据合规要求。数据脱敏、加密存储、访问控制、操作审计，为企业数据安全保驾护航。
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="inline-flex items-center gap-2 group cursor-pointer">
                <span className="text-lg font-bold text-[#0052D9] border-b-2 border-transparent group-hover:border-[#0052D9] transition-all">查看合规白皮书</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center group-hover:bg-[#0052D9] group-hover:text-white transition-all">→</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
