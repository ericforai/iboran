import { ClipboardList, GitMerge, Radio } from 'lucide-react'

const solutions = [
  {
    icon: ClipboardList,
    title: '项目制造一体化',
    description: '构建以项目为核心的运营体系，拉通 WBS（工作分解结构）与生产计划，实现设计、采购、生产与发运的协同管理。'
  },
  {
    icon: GitMerge,
    title: '设计生产一体化 (PLM)',
    description: '集成 PLM 与 ERP 系统，实现 BOM 数据的自动同步与变更闭环管理，以保障设计数据与生产数据的一致性。'
  },
  {
    icon: Radio,
    title: '物联网远程运维 (IoT)',
    description: '利用 IoT 技术采集设备运行数据，构建远程监控与预警平台，实现从被动维修向主动预防性服务的转型。'
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
            针对中荷环保的非标定制特性，我们打造了&quot;项目+制造+服务&quot;三位一体的数字化管理平台。
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