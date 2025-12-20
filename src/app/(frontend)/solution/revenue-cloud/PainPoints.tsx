import { Search, Clock, FileWarning } from 'lucide-react'

const painPoints = [
  {
    icon: Search,
    title: "逐笔匹配难",
    desc: "面对海量交易数据，人工逐一核对效率极低，如同在数据海洋中寻找一根针。"
  },
  {
    icon: Clock,
    title: "耗时费力",
    desc: "跨部门沟通成本高，月末结账压力大，大量时间浪费在重复性机械劳动上。"
  },
  {
    icon: FileWarning,
    title: "错账漏账率高",
    desc: "人工操作易受疲劳影响，主观判断失误导致资金流向不明，合规风险剧增。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">传统对账：如同「大海捞针」</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            财务人员需在成百上千的订单、发票、银行流水中逐笔匹配，不仅耗时费力，更因人工操作的主观性导致错账频发。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-100 hover:shadow-lg hover:border-[#E60012]/30 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-[#E60012]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
