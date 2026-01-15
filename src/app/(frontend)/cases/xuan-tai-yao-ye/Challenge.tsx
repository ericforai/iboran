import { AlertTriangle, ShieldX, Package, Users } from 'lucide-react'

const challenges = [
  {
    icon: ShieldX,
    title: "强合规压力",
    description: "需满足 GSP/GMP 等严苛的行业规范，人工管理批次与有效期极易出错，合规审计风险较高。",
    color: "red"
  },
  {
    icon: Package,
    title: "供应链全程追溯难",
    description: "医药产品涉及复杂的批次合并、效期预警与温度追溯，现有系统难以实现从原料端到患者端的端到端追溯。",
    color: "amber"
  },
  {
    icon: Users,
    title: "多渠道营销管控难",
    description: "销售网络覆盖广、层级多，返利核算、渠道库存与销售实绩难以实时对齐，影响市场策略的快速调整。",
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">医药行业数字化转型痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            宣泰药业在高合规要求下面临的业务瓶颈与系统挑战
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Compliance Visualization */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-amber-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              {/* Compliance Requirements */}
              <div className="space-y-6">
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-2 bg-emerald-50 rounded-full text-sm font-semibold text-emerald-700">
                    医药行业合规要求
                  </span>
                </div>

                {/* Compliance Flow */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border-2 border-red-200">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">
                      GMP
                    </div>
                    <span className="text-sm text-red-700">生产质量管理规范</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border-2 border-amber-200">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">
                      GSP
                    </div>
                    <span className="text-sm text-amber-700">药品经营质量管理规范</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border-2 border-purple-200">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">
                      追溯
                    </div>
                    <span className="text-sm text-purple-700">全流程追溯要求</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-100 rounded-xl border border-slate-200">
                  <p className="text-sm text-slate-700 text-center font-medium">
                    人工管理易出错，审计风险高
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
