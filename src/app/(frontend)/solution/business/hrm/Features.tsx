import { UserCheck, Award, Calculator } from 'lucide-react'

const featureGroups = [
  {
    title: "人才招聘与发展",
    subtitle: "精准选才，加速成长",
    icon: UserCheck,
    features: [
      { title: "智能招聘管理", desc: "AI 简历智能筛选，多渠道招聘统一管理。全程候选人体验优化，招聘周期缩短 40%。" },
      { title: "入职一体化", desc: "电子签约、自助入职、智能引导，新员工体验极致便捷，HR 事务减负 60%。" },
      { title: "学习发展平台", desc: "个性化学习路径、在线培训、认证考核，构建学习型组织，加速人才成长。" }
    ]
  },
  {
    title: "薪酬与绩效管理",
    subtitle: "科学激励，持续驱动",
    icon: Award,
    features: [
      { title: "灵活薪酬核算", desc: "多套薪资规则并行，多地社保公积金自动计算。智能核薪，错误率趋近于零。" },
      { title: "OKR/KPI 绩效", desc: "目标对齐战略，过程实时跟踪，360 度评估。让绩效管理真正驱动业务成果。" },
      { title: "激励与认可", desc: "即时激励、积分体系、荣誉墙，打造正向激励文化，提升员工敬业度。" }
    ]
  },
  {
    title: "组织与人事管理",
    subtitle: "规范高效，合规可控",
    icon: Calculator,
    features: [
      { title: "组织架构管理", desc: "多组织、多法人架构可视化管理，岗位体系标准化，支持组织快速调整。" },
      { title: "员工自助服务", desc: "请假、报销、证明开具，员工移动自助办理。AI 智能问答，7×24 小时服务。" },
      { title: "人力数据分析", desc: "人效仪表盘、离职预警、人才盘点，数据驱动人才决策，HRBP 洞察力提升。" }
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">HRM 核心管理能力</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            构建人力资源全生命周期数智化管理体系，激活组织活力，赋能业务增长。
          </p>
        </div>

        <div className="space-y-16">
          {featureGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0052D9]">
                  <group.icon size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2329]">{group.title}</h3>
                  <p className="text-[#0052D9] font-medium">{group.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {group.features.map((feature, featureIdx) => (
                  <div 
                    key={featureIdx}
                    className="p-8 bg-[#F7F8FA] rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-[#1F2329] mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#E60012] rounded-full" />
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
              
              {groupIdx < featureGroups.length - 1 && (
                <div className="absolute left-6 -bottom-10 w-0.5 h-8 bg-slate-100 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
