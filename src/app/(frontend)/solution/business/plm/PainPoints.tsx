import { Share2, FileWarning, ClipboardList, TrendingDown } from 'lucide-react'

const painPoints = [
  {
    icon: Share2,
    title: "协作孤岛",
    desc: "机电软多学科协同不足，数据传递滞后，导致设计变更频繁且易出错。"
  },
  {
    icon: FileWarning,
    title: "设计与制造脱节",
    desc: "研发BOM与制造BOM无法有效关联，替代料、多配置管理混乱，导致停工待料。"
  },
  {
    icon: ClipboardList,
    title: "需求管理失控",
    desc: "市场需求到产品开发缺乏全过程跟踪，导致产品上市后与客户期望不符。"
  },
  {
    icon: TrendingDown,
    title: "研发黑盒化",
    desc: "缺乏透明的研发进度监控和投入产出比分析，管理层决策依赖经验而非数据。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            传统研发管理的重重挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            随着市场竞争加剧，传统的经验驱动型研发管理已难以支撑企业的高速增长和快速响应需求。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-xl border border-slate-100 hover:shadow-lg hover:border-[#0052D9]/30 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-[#0052D9]" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">{item.title}</h3>
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
