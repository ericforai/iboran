import { AlertTriangle, Link2, FileText, Database } from 'lucide-react'

const challenges = [
  {
    icon: Link2,
    title: '系统分散数据孤岛',
    description: '多系统集成缺乏统一规划，导致合并报表、财务共享、司库管理、合同管理及费用管理等关键环节存在流程割裂、标准不一、数据孤岛等问题。'
  },
  {
    icon: Database,
    title: '资金管理难度大',
    description: '在国资体系对资金安全、合规透明要求日益严格的背景下，企业支付数字化升级缺乏支撑，司库（资金）管理难以满足高标准监管要求。'
  },
  {
    icon: FileText,
    title: '数据分析能力薄弱',
    description: '缺乏统一的数据分析平台支撑决策，电子会计档案建设滞后，难以实现绩效评价与财务管控的精细化管理，制约管理决策效率提升。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>核心痛点</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">面临挑战</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">转型前的核心痛点与业务瓶颈</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
