import { TrendingUp, Clock, Shield, Users } from 'lucide-react'

const valueMetrics = [
  {
    icon: TrendingUp,
    value: '30%+',
    label: '项目交付效率提升',
    description: '端到端项目管理，缩短交付周期',
    color: 'green',
  },
  {
    icon: Clock,
    value: '95%+',
    label: '成本核算准确率',
    description: '批次级成本追溯，精准利润分析',
    color: 'blue',
  },
  {
    icon: Shield,
    value: '100%',
    label: '质量合规达标',
    description: 'GMP/GCP/GLP 全覆盖合规保障',
    color: 'emerald',
  },
  {
    icon: Users,
    value: '40%+',
    label: '跨组织协同效率',
    description: '多工厂协同生产，资源高效配置',
    color: 'purple',
  },
]

const colorClasses = {
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    valueBg: 'bg-green-50',
    valueText: 'text-green-700',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-[#0052D9]',
    valueBg: 'bg-blue-50',
    valueText: 'text-[#0052D9]',
  },
  emerald: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    valueBg: 'bg-emerald-50',
    valueText: 'text-emerald-700',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    valueBg: 'bg-purple-50',
    valueText: 'text-purple-700',
  },
}

export default function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Business Value
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            可量化的行业价值
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            通过数智化转型，实现项目交付效率、成本控制、质量合规与协同效率的全面提升
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueMetrics.map((metric, idx) => {
            const colors = colorClasses[metric.color as keyof typeof colorClasses]
            return (
              <div
                key={idx}
                className="bg-[#F7F8FA] p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={colors.text} size={28} />
                </div>
                <div className={`text-4xl font-bold ${colors.valueText} mb-2`}>
                  {metric.value}
                </div>
                <h3 className="font-bold text-[#1F2329] mb-2">{metric.label}</h3>
                <p className="text-sm text-slate-500">{metric.description}</p>
              </div>
            )
          })}
        </div>

        {/* Applicable Industries */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-slate-500 mb-6">适用细分领域</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['CDMO', 'CMO', 'CRO', '创新药', '生物制药', '化学制药', '中药', '医疗器械'].map((industry, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-emerald-500 hover:text-white transition-colors cursor-default"
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
