import { TrendingUp, TrendingDown, ThumbsUp } from 'lucide-react'

const valueCategories = [
  {
    icon: TrendingUp,
    title: "销售增长",
    color: "green",
    metrics: [
      { value: "20%+", label: "销售效率提升" },
      { value: "30%+", label: "合同周期缩短" }
    ]
  },
  {
    icon: TrendingDown,
    title: "成本控制",
    color: "blue",
    metrics: [
      { value: "15%+", label: "营销费用降低" },
      { value: "20%+", label: "库存周转提升" }
    ]
  },
  {
    icon: ThumbsUp,
    title: "体验提升",
    color: "purple",
    metrics: [
      { value: "99%+", label: "订单准确率" },
      { value: "25%+", label: "客户满意度" }
    ]
  }
]

const colorClasses = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    valueBg: "bg-green-50",
    valueText: "text-green-700"
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-[#0052D9]",
    valueBg: "bg-blue-50",
    valueText: "text-[#0052D9]"
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    valueBg: "bg-purple-50",
    valueText: "text-purple-700"
  }
}

export default function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">可量化的业务价值</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            通过数字化转型，实现销售增长、成本降低与客户体验的全面提升。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {valueCategories.map((category, idx) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses]
            return (
              <div 
                key={idx} 
                className="bg-[#F7F8FA] p-8 rounded-2xl border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${colors.bg} rounded-lg ${colors.text}`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-[#1F2329]">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.metrics.map((metric, mIdx) => (
                    <div 
                      key={mIdx} 
                      className={`${colors.valueBg} p-4 rounded-xl flex items-center justify-between`}
                    >
                      <span className="text-slate-600 font-medium">{metric.label}</span>
                      <span className={`text-2xl font-bold ${colors.valueText}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Target Industries */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-slate-500 mb-6">适用行业</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['消费品', '农牧业', '化工', '流程制造', '装备制造', '离散制造', 'IT服务'].map((industry, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-[#0052D9] hover:text-white transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
