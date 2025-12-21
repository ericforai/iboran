import { TrendingUp, ShieldCheck, Zap } from 'lucide-react'

const metrics = [
  {
    title: "敏捷市场响应",
    icon: TrendingUp,
    color: "blue",
    description: "构建敏捷供应链，实现对市场需求的快速捕捉与精准交付，缩短从需求到交付的整体周期。",
    stats: [
      { label: "计划响应时间", value: "-80%" },
      { label: "准时交付率", value: "+15%" },
      { label: "资源利用率", value: "+20%" }
    ]
  },
  {
    title: "卓越生产效率",
    icon: Zap,
    color: "green",
    description: "通过智造升级与精益管理，优化生产流程，提升柔性制造能力，释放人均产能价值。",
    stats: [
      { label: "人均产值提升", value: "+15%" },
      { label: "在制品周转", value: "+25%" },
      { label: "异常响应速度", value: "-50%" }
    ]
  },
  {
    title: "严苛品质与成本",
    icon: ShieldCheck,
    color: "red",
    description: "内嵌全过程质量溯源与工序级成本核算模型，实现精准归集，让每一分成本都清晰可见。",
    stats: [
      { label: "产品不良率", value: "-30%" },
      { label: "质量追溯时间", value: "-80%" },
      { label: "单位能耗降低", value: "-10%" }
    ]
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">驱动企业业务价值重构</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            不仅是系统的上线，更是全要素生产率的全面提升，助力企业赢在数字时代。
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
              全面的质量与成本管控
            </h3>
            <p className="text-slate-600 leading-relaxed">
              内嵌全过程质量溯源与精细化成本核算模型，实现“料、工、费”的精准归集与分摊，让每一分成本都清晰可见，每一件产品都品质可控。
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="inline-flex items-center gap-2 group cursor-pointer">
                <span className="text-lg font-bold text-[#0052D9] border-b-2 border-transparent group-hover:border-[#0052D9] transition-all">查看成本核算详情</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center group-hover:bg-[#0052D9] group-hover:text-white transition-all">→</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
