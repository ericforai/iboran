import { Contact, HardDrive, Cpu } from 'lucide-react'

const solutions = [
  {
    icon: Contact,
    title: '全渠道 CRM 平台',
    description: '构建集销售自动化 (SFA)、市场营销、客户服务于一体的 CRM 平台，打通售前售中售后数据，沉淀客户资产。'
  },
  {
    icon: HardDrive,
    title: '智能现场服务 (FSM)',
    description: '部署移动化现场服务系统，实现工单自动分配、备件移动领用、服务报告电子签名及维修知识库的实时调用。'
  },
  {
    icon: Cpu,
    title: 'IoT 远程诊断',
    description: '通过设备联网实时监控机床运行状态，实现故障的主动预警与远程诊断，将"事后维修"转变为"预测性维护"。'
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
            以客户体验为中心，利用 IoT 与移动互联技术，重构天田中国的服务价值链。
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