import { UserSearch, GraduationCap, Calculator, BarChart3, Users, FileSpreadsheet } from 'lucide-react'

const painPoints = [
  {
    icon: UserSearch,
    title: "招聘效率低下",
    desc: "简历筛选耗时费力，招聘周期长。优质人才争夺激烈，候选人体验差导致高流失。"
  },
  {
    icon: GraduationCap,
    title: "培训体系缺失",
    desc: "培训资源分散，学习计划难以个性化。培训效果难以评估，人才发展缺乏系统规划。"
  },
  {
    icon: Calculator,
    title: "薪酬核算繁琐",
    desc: "多套薪资规则、多地社保政策，手工核算易错。月底核薪加班严重，员工满意度低。"
  },
  {
    icon: BarChart3,
    title: "绩效管理流于形式",
    desc: "目标设定与业务脱节，过程跟踪缺失。年终评价主观随意，激励效果难以达成。"
  },
  {
    icon: Users,
    title: "组织协同困难",
    desc: "多组织、多层级人事管理复杂。跨区域合规要求不同，统一管控与灵活授权难平衡。"
  },
  {
    icon: FileSpreadsheet,
    title: "数据分析缺位",
    desc: "人力数据分散在多个系统，人效分析缺乏支撑。人才决策依赖经验，缺乏数据洞察。"
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
