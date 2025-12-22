import { TrendingDown, Users, DollarSign, Clock } from 'lucide-react'

const painPoints = [
  {
    icon: TrendingDown,
    title: "拓展新业务难",
    desc: "供过于求、消费降级环境下，获客成本居高不下，新市场开拓举步维艰。"
  },
  {
    icon: Users,
    title: "团队效率低",
    desc: "竞争激烈、客户需求多变，销售转化率低迷，业务策略难以有效落地执行。"
  },
  {
    icon: DollarSign,
    title: "营销成本高增长低",
    desc: "营销投入产出比失衡，价格战频发侵蚀利润，ROI评估困难、优化无从下手。"
  },
  {
    icon: Clock,
    title: "客户需求响应慢",
    desc: "无法快速感知市场变化，内外部资源协调困难，个性化需求难以低成本满足。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">销售管理四大痛点</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            在当今复杂多变的市场环境中，企业销售管理面临前所未有的挑战。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#F7F8FA] p-6 rounded-xl border border-slate-100 hover:shadow-lg hover:border-[#E60012]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-[#E60012]" size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
