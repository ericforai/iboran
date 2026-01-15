import { AlertTriangle, Link2Off, DollarSign, FileCheck } from 'lucide-react'

const challenges = [
  {
    icon: Link2Off,
    title: "研产供销脱节",
    description: "各职能部门系统割裂，导致需求预测、排产计划与物料供应无法实时联动，库存周转缓慢且异常响应迟。",
    color: "red"
  },
  {
    icon: DollarSign,
    title: "成本管控不精细",
    description: "缺乏工序级、材料级的实时成本采集，导致单笔订单毛利分析滞后，难以支持精准的价格决策与降本增效指标。",
    color: "amber"
  },
  {
    icon: FileCheck,
    title: "质量管理断层",
    description: "质量数据散落在纸质单据或离散系统中，无法实现从原材料采购、生产加工到成品出库的全链路正反向追溯。",
    color: "purple"
  }
]

const colorMap = {
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
    border: "border-red-200"
  },
  amber: {
    bg: "bg-amber-100",
    text: "text-amber-600",
    border: "border-amber-200"
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200"
  }
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            原能生物在数字化转型前面临的业务瓶颈与系统孤岛问题
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual Illustration */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-amber-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              {/* Problem Visualization */}
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">销售</span>
                    </div>
                  </div>
                  <div className="text-red-500 text-2xl">✕</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-green-600">生产</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-amber-600">采购</span>
                    </div>
                  </div>
                  <div className="text-red-500 text-2xl">✕</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600">财务</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-sm text-red-700 text-center font-medium">
                    数据孤岛导致效率低下，决策滞后
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Challenge Cards */}
          <div className="space-y-5">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              const colors = colorMap[challenge.color as keyof typeof colorMap]
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-xl border-2 border-transparent hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
