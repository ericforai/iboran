import { Users, Briefcase, TrendingUp, Shield } from 'lucide-react'

const valueMetrics = [
  {
    icon: Users,
    value: '自助体验',
    label: '客户体验提升',
    description: '客户自助式网购体验，24小时线上交易透明化，提升客户粘性和满意度',
  },
  {
    icon: Briefcase,
    value: '便捷高效',
    label: '业务效率提升',
    description: '业务员移动端实时处理，库存、信用、业绩一目了然，销售效率大幅提升',
  },
  {
    icon: TrendingUp,
    value: '产销协同',
    label: '供应链优化',
    description: 'VMI库存管理，自动货源分配，供应链快速响应，敏捷供应有保障',
  },
  {
    icon: Shield,
    value: '精细管控',
    label: '管理水平提升',
    description: '库存峰值预警、授信风控、价格管控、批次追溯，降低企业经营风险',
  },
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Business Value
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            行业价值
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            从客户、业务、供应链、管理四个维度全面提升企业价值
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueMetrics.map((metric, idx) => (
            <div 
              key={idx}
              className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-[#0052D9]" />
              </div>
              <div className="text-3xl font-bold text-[#E60012] mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-[#1F2329] mb-3">
                {metric.label}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
