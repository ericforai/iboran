import { TrendingUp, Clock, Users, Heart } from 'lucide-react'

const metrics = [
  {
    title: "业务运营提效",
    icon: Clock,
    color: "blue",
    description: "通过标准化与智能化手段，大幅缩短业务处理周期，释放HR战术性工作压力。",
    stats: [
      { label: "发薪周期", value: "4天→4时" },
      { label: "发薪自动化率", value: "90%" },
      { label: "单据处理提效", value: "68%" }
    ]
  },
  {
    title: "协同与管理进化",
    icon: TrendingUp,
    color: "green",
    description: "打通端到端流程壁垒，实现数据高度融合与实时对标，辅助科学决策。",
    stats: [
      { label: "绩效核算周期", value: "10天→3天" },
      { label: "数据统计提效", value: "3天→1时" },
      { label: "关键数据准确率", value: "99%以上" }
    ]
  },
  {
    title: "员工体验重构",
    icon: Heart,
    color: "red",
    description: "以员工为中心，融入数智化服务体验，提升全员敬业度与组织凝聚力。",
    stats: [
      { label: "员工满意度", value: "+30%" },
      { label: "自助服务覆盖", value: "99%以上" },
      { label: "人才发现精准度", value: "95%" }
    ]
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">激活组织核心动能</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            让人才成为企业核心竞争力，打造高绩效、高敬业度的卓越组织。
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
                  <div key={sIdx} className="bg-slate-50 p-2 xl:p-3 rounded-xl text-center min-w-0">
                    <div className={`${
                      item.color === 'blue' ? 'text-blue-600' :
                      item.color === 'green' ? 'text-green-600' : 'text-red-600'
                    } font-bold text-base xl:text-lg mb-1 whitespace-nowrap overflow-hidden text-ellipsis`}>{stat.value}</div>
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
              <Users className="text-[#0052D9]" size={28} />
              多组织全球化管理
            </h3>
            <p className="text-slate-600 leading-relaxed">
              支持多法人、多地区、多语言的全球化人力资源管理。统一政策框架下的本地化灵活配置，满足跨国企业的合规与效率双重要求。
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="inline-flex items-center gap-2 group cursor-pointer">
                <span className="text-lg font-bold text-[#0052D9] border-b-2 border-transparent group-hover:border-[#0052D9] transition-all">查看全球化方案</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center group-hover:bg-[#0052D9] group-hover:text-white transition-all">→</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
