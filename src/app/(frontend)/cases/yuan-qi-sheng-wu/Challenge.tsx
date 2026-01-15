import { FileDigit, TestTube2, Network } from 'lucide-react'

const challenges = [
  {
    icon: FileDigit,
    title: '研发数据孤岛',
    description: '实验记录散落在纸质记录本或离线文档中，数据难以检索、共享和二次分析，严重影响了研发知识的沉淀与复用。'
  },
  {
    icon: TestTube2,
    title: '合规监管严苛',
    description: '作为创新药企，必须满足 NMPA/FDA 对数据完整性（ALCOA+）的严苛要求，人工记录方式面临极高的合规审计风险。'
  },
  {
    icon: Network,
    title: '项目协作复杂',
    description: '研发项目涉及多部门、多学科交叉协作，样本流转、任务分配与进度追踪缺乏统一平台，导致沟通成本高、效率低。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold tracking-wider text-sm uppercase">Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">转型前的核心痛点</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
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