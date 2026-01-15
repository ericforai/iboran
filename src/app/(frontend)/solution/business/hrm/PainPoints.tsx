import { UserSearch, GraduationCap, Calculator, BarChart3, Users, FileSpreadsheet } from 'lucide-react'

const painPoints = [
  {
    icon: UserSearch,
    title: "人才供需结构性矛盾",
    desc: "高技能人才短缺（如AI、新能源领域），2025年缺口预计达2200万。传统招聘模式难以精准识别关键人才。"
  },
  {
    icon: Calculator,
    title: "成本与效益平衡困境",
    desc: "人力成本占企业总成本56%，但人均产出增长缓慢。系统投入高但战略支撑不足，ROI量化率不足45%。"
  },
  {
    icon: Users,
    title: "全球化扩张管理复杂",
    desc: "跨境合规、个人信息保护法限制及文化差异，导致跨国团队决策效率平均降低 40%。"
  },
  {
    icon: BarChart3,
    title: "员工代际管理冲突",
    desc: "00后占比提升，追求个性化反馈。传统绩效考核模式死板，员工满意度仅 28%，人才流失率高。"
  },
  {
    icon: FileSpreadsheet,
    title: "数据资产利用效率低",
    desc: "20.5% 企业未开展人力分析，行为数据利用率不足 30%。缺乏先知先觉的预测能力，决策依赖经验。"
  },
  {
    icon: GraduationCap,
    title: "培养体系与业务脱节",
    desc: "人才发展通道不畅，任职资格标准模糊。培训资源无法针对性赋能，难以支撑高质量发展需求。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">人力资源管理的典型挑战</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「人才是企业最重要的资产，但多数企业的人力资源管理仍停留在事务性工作层面。」
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
