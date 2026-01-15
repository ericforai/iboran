import { AlertTriangle, FileText, Users, Workflow } from 'lucide-react'

const challenges = [
  {
    icon: FileText,
    title: '业务流程不规范',
    description: '缺乏标准化流程，各业务环节依赖人工操作，效率低下且易出错。'
  },
  {
    icon: Users,
    title: '服务质量难把控',
    description: '服务标准不统一，客户满意度参差不齐，难以进行有效质量管理。'
  },
  {
    icon: Workflow,
    title: '人才管理效率低',
    description: '人才信息分散，缺乏统一管理平台，数据孤岛问题严重。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-[#E60012] rounded-full text-sm font-medium mb-4">
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#0052D9] hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-[#E60012]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
