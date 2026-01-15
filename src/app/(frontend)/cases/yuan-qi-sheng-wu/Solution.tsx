import { DatabaseZap, FileText, ShieldAlert } from 'lucide-react'

const solutions = [
  {
    icon: DatabaseZap,
    title: '实验室信息管理 (LIMS)',
    description: '构建全流程 LIMS 系统，实现从样本接收、任务分配、实验执行到报告生成的全链路数字化管理，确保数据可追溯。'
  },
  {
    icon: FileText,
    title: '电子实验记录 (ELN)',
    description: '部署符合合规要求的 ELN 系统，替代纸质记录本，支持结构化数据录入、电子签名与审计追踪，保障数据真实完整。'
  },
  {
    icon: ShieldAlert,
    title: '研发质量体系 (QMS)',
    description: '建立研发质量管理平台，对偏差、变更、CAPA 等质量事件进行闭环管理，确保研发过程始终处于受控状态。'
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold tracking-wider text-sm uppercase">Our Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">泊冉数智化解决方案</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            打造符合国际标准的生物医药研发数字化底座，赋能从靶点发现到 IND 申报的全过程。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
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