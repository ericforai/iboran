import { AlertTriangle, Network, PackageSearch } from 'lucide-react'

const challenges = [
  {
    title: '服务过程标准化难',
    description:
      '服务评估、派单、上门执行、回访环节分散在不同系统，人工衔接易产生执行偏差与质控盲区。',
  },
  {
    title: '辅具流转追踪难',
    description:
      '辅具涉及入库、租赁、调拨、回收、消杀等多节点，现有系统难以实现端到端可视追踪。',
  },
  {
    title: '多网点经营管控难',
    description:
      '网点服务量、辅具利用率、费用结算与财务数据难以实时对齐，影响经营决策效率。',
  },
]

const challengeIcons = [AlertTriangle, PackageSearch, Network]

const riskItems = [
  { label: '服务过程留痕', level: '高', bar: 'w-4/5' },
  { label: '辅具流转追踪', level: '高', bar: 'w-3/4' },
  { label: '跨网点费用核算', level: '中高', bar: 'w-2/3' },
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
                <h3 className="text-lg font-semibold text-slate-900">运营风险面板</h3>
                <span className="text-xs uppercase tracking-widest text-slate-400">养老服务 / 辅具租赁</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                服务质量、辅具流转与经营结算贯穿全链路，任何节点的数据缺失都会放大运营风险。
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
                  派单执行留痕
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  辅具回收消杀
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  服务费用结算
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  网点运营可视
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
