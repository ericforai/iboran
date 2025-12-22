const valueMetrics = [
  {
    value: '25%+',
    label: '生产效率提升',
    description: 'APS智能排程优化产能利用',
  },
  {
    value: '30%+',
    label: '库存周转提升',
    description: 'WMS精细化管理降低库存资金占用',
  },
  {
    value: '95%+',
    label: '交付准时率',
    description: '项目型生产全程管控保障交付',
  },
  {
    value: '100%',
    label: '成本透明度',
    description: '项目维度成本归集精准核算',
  },
  {
    value: '60%',
    label: '结算效率提升',
    description: '内部交易结算平台自动化处理',
  },
  {
    value: '99%+',
    label: '库存准确率',
    description: '条码追溯与实时盘点保障数据准确',
  },
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-cyan-400 font-semibold tracking-wider uppercase">
            Value Metrics
          </span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">
            电气装备行业数字化价值
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {valueMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl font-bold text-[#E60012] mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-slate-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
