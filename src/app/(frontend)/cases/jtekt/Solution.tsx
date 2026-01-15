import { Share2, BarChart4, Cpu } from 'lucide-react'

const solutions = [
  {
    icon: Share2,
    title: '业财一体化平台',
    description: '统一集团数据标准，集成 SAP 与用友 NC 系统，打通采购、销售、库存与财务核算流程，实现经营数据的实时可视与穿透分析。'
  },
  {
    icon: BarChart4,
    title: '供应链控制塔',
    description: '构建 SRM 供应商协同平台，将采购预测、订单发布、发货预约及标签打印延伸至供应商端，实现供应链信息的实时同步。'
  },
  {
    icon: Cpu,
    title: '智能制造执行',
    description: '部署轻量化 MES 系统，通过 PLC 集成与 PDA 扫码，实时采集关键工序参数与物料流转信息，建立单件级质量档案。'
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
            针对捷太格特的全球化运营特点，我们提供了以数据为驱动、以协同为核心的一站式数字化转型方案。
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