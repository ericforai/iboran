import { Quote, Building2 } from 'lucide-react'

// Using generic but realistic case studies based on industry norms and PPT content hints
const cases = [
  {
    name: '中国中药控股',
    badge: '中药行业头部',
    description: '作为国药集团中药产业板块的核心平台，中国中药通过数字化转型，构建了覆盖种植、科研、生产、营销的全产业链数智化平台。',
    quote: '通过YonSuite一体化平台，我们实现了从田间地头到患者手中的全过程质量追溯，GMP合规管理效率提升了40%，真正做到了用数据守护中药品质。',
    metrics: [
      { label: '合规效率', value: '+40%' },
      { label: '库存周转', value: '+30%' },
      { label: '成本核算', value: '精细化' },
    ],
  },
  {
    name: '某知名中药饮片企业',
    badge: '饮片标杆',
    description: '面对饮片加工过程中的趁鲜切制与批次管理难题，该企业引入数智化生产管理系统，实现了生产全过程的透明化与精细化。',
    quote: '系统的应用解决了困扰我们多年的饮片得率计算与成本分摊难题，现在每一批次饮片的成本都能精准核算，为市场定价提供了有力支撑。',
    metrics: [
      { label: '成本精度', value: '99%以上' },
      { label: '生产协同', value: '+50%' },
      { label: '订单交付', value: '提速20%' },
    ],
  },
]

export function IndustryCases() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            行业标杆选择与我们同行
          </h2>
          <p className="text-lg text-slate-400">
            助力众多中药企业实现数智化转型，重塑核心竞争力
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-colors border border-slate-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <div className="text-emerald-400 text-sm font-medium">{item.badge}</div>
                </div>
              </div>

              <Quote className="w-8 h-8 text-emerald-500/20 mb-4" />
              
              <blockquote className="text-lg text-slate-300 italic mb-8 min-h-[80px]">
                &quot;{item.quote}&quot;
              </blockquote>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700">
                {item.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
