import { AlertTriangle, Network, PackageSearch } from 'lucide-react'

const challenges = [
  {
    title: '强合规压力',
    description:
      '需满足 GSP/GMP 等严苛的行业规范，人工管理批次与有效期易出错，合规审计风险高。',
  },
  {
    title: '供应链全程追溯难',
    description:
      '医药产品涉及复杂的批次合并、效期预警与温度追溯，现有系统难以实现端到端追溯。',
  },
  {
    title: '多渠道营销管控难',
    description:
      '销售网络覆盖广、层级多，返利核算、渠道库存与销售实绩难以实时对齐。',
  },
]

const challengeIcons = [AlertTriangle, PackageSearch, Network]

const riskItems = [
  { label: '批次与效期管理', level: '高', bar: 'w-4/5' },
  { label: '温控与物流追溯', level: '高', bar: 'w-3/4' },
  { label: '渠道返利核算', level: '中高', bar: 'w-2/3' },
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">面临挑战</h2>
          <p className="text-slate-600">转型前的核心痛点与业务瓶颈</p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-7">
            <div className="grid gap-6">
              {challenges.map((item, index) => {
                const Icon = challengeIcons[index]
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">风险与合规面板</h3>
                <span className="text-xs uppercase tracking-widest text-slate-400">GSP / GMP / GXP</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                合规审计与追溯要求贯穿全链路，任何节点的缺失都会放大风险。
              </p>

              <div className="mt-6 space-y-4">
                {riskItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-sm text-slate-700">
                      <span>{item.label}</span>
                      <span className="font-semibold text-cyan-600">{item.level}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className={`h-2 rounded-full bg-cyan-500 ${item.bar}`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  批次合并 / 分拆
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  温控留痕
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  返利结算对账
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  渠道库存可视
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
