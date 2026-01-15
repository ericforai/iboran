import { Cpu, Layers, GitBranch } from 'lucide-react'

const challenges = [
  {
    icon: Cpu,
    title: '研发成本归集难',
    description: '芯片研发周期长、流片费用极高，传统方式难以实现人力、IP授权、EDA工具及测试费用的多维度自动归集与核算。'
  },
  {
    icon: Layers,
    title: '复杂 BOM 与版本管控',
    description: '从 Die、Wafer 到成品，半导体产品涉及复杂的层次结构与频繁的设计变更，手动维护极易导致采购与生产指令错误。'
  },
  {
    icon: GitBranch,
    title: '委外加工协同滞后',
    description: '与晶圆厂、封装测试厂（OSAT）间的信息传递依赖线下，无法实时掌握生产进度、良率及委外库存流转。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">转型前的核心痛点</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-indigo-600" />
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