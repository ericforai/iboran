import { Link2, Warehouse, Cog, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Link2,
    title: "ERP与WMS深度集成",
    description: "打通企业资源计划与仓储管理系统，实现库存信息实时同步、生产计划与仓储执行精准联动，消除数据孤岛。",
    features: ["库存实时同步", "生产仓储联动", "消除数据孤岛"]
  },
  {
    icon: Warehouse,
    title: "柔性化仓储管理",
    description: "构建适配多品类、小批量生产模式的智能仓储体系，支持项目型生产与复杂产品配置的精准物料管理。",
    features: ["多品类管理", "小批量支持", "项目型生产"]
  },
  {
    icon: Cog,
    title: "供应链全链路协同",
    description: "实现从原料采购到成品交付的端到端可视化管理，提升物料追溯能力与供应链响应速度。",
    features: ["端到端可视", "物料全程追溯", "快速响应"]
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white" id="solution">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">解决方案</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">基于泊冉数智化底座的一体化架构</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            针对奥普家居的多品类柔性交付需求，量身定制的家居行业数字化转型解决方案
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-slate-900 mb-3">{solution.title}</h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-amber-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full font-semibold hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
