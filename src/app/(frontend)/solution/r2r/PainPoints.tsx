import { FileStack, Database, GitMerge, Clock } from 'lucide-react'

const painPoints = [
  {
    icon: FileStack,
    title: "流程效率低下",
    desc: "大量手工凭证录入、审核、对账，尤其在高交易量场景下效率低，财务人员疲于应付日常事务性工作。"
  },
  {
    icon: Database,
    title: "数据孤岛",
    desc: "业务数据与财务数据割裂，标准不统一，报表编制时数据'折磨'，财务分析依赖大量手工调整。"
  },
  {
    icon: GitMerge,
    title: "合并复杂",
    desc: "多币种、多准则、复杂股权结构的手工合并抵消难以处理，内部交易消除耗时耗力且容易出错。"
  },
  {
    icon: Clock,
    title: "缺乏实时洞察",
    desc: "传统系统数据滞后，无法支持多维度敏捷管理决策，管理者难以获得及时准确的经营分析数据。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">财务管理的 4 大核心挑战</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「在数智化转型与精细化管理的要求面前，传统财务模式已成为企业发展的瓶颈。」
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors duration-300">
                <item.icon className="text-[#E60012] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
