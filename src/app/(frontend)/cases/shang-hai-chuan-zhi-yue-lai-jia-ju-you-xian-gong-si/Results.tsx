import { TrendingUp, Award, Users } from 'lucide-react'

const results = [
  {
    icon: TrendingUp,
    value: '全渠道',
    label: '库存实时共享',
    description: '打通零售门店与 B2C 商城线上线下渠道，构建全渠道库存共享与一体化运营体系。'
  },
  {
    icon: Award,
    value: '一体化',
    label: '订单高效协同',
    description: '依托 ERP 与 OMS 系统集成实现订单高效协同与数据实时互通，消除信息孤岛。'
  },
  {
    icon: Users,
    value: '定制化',
    label: '业务快速响应',
    description: '打造支持个性化定制业务的数字化平台，全面提升从销售、履约到交付的全流程管理效率。'
  }
]

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-[#2A1F1A] to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <span className="text-orange-400">●</span>
            <span>项目成果</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">项目价值</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">推动企业规模化、精细化发展</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <div
                key={index}
                className="group text-center p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {result.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{result.label}</h3>
                <p className="text-slate-400 text-sm">{result.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
