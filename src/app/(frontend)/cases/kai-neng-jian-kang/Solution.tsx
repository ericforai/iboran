import { Layers, Activity, ShieldCheck } from 'lucide-react'

const solutions = [
  {
    icon: Layers,
    title: '一站式业财一体化平台',
    description: '构建统一的数据中台，集成 ERP、MES、SRM 及财务模块，实现业务单据自动转化为财务凭证，以保障账实相符，打破信息孤岛。'
  },
  {
    icon: Activity,
    title: '透明化供应链协同',
    description: '建立供应商门户与交期监控看板，实现订单、发货、对账的全流程在线化，提升外部响应效率与计划准确率，降低牛鞭效应。'
  },
  {
    icon: ShieldCheck,
    title: '智能化车间管理',
    description: '通过条码化与物联网手段，实时采集生产实绩与工艺数据，实现精细化成本核算与质量追溯闭环，以保障生产过程可控。'
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">泊冉数智化解决方案</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            基于用友 BIP 强大的平台能力，结合开能健康的业务特性，打造&quot;研产供销财&quot;一体化的敏捷运营体系。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}