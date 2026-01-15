import { Database, FileSpreadsheet, ShieldX } from 'lucide-react'

const challenges = [
  {
    icon: Database,
    title: '系统集成孤岛',
    description: 'ERP、WMS、集团财务及司库系统间缺乏有效集成，主数据标准不一，跨系统流程断点多，严重影响业务协同效率。'
  },
  {
    icon: FileSpreadsheet,
    title: '合并报表低效',
    description: '随着子公司数量增加，月末合并报表编制周期长、人工调整工作量大，数据准确性难以保障，无法满足上市合规要求。'
  },
  {
    icon: ShieldX,
    title: '数据安全隐忧',
    description: '内部核心经营数据的备份与恢复机制存在性能瓶颈，缺乏统一的数据分级分类与权限管控，面临数据泄露风险。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold tracking-wider text-sm uppercase">Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">转型前的核心痛点</h2>
          <div className="w-16 h-1 bg-cyan-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-cyan-600" />
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