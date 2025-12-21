import { Code2, Clock, Users, Package, Workflow, ShieldAlert } from 'lucide-react'

const painPoints = [
  {
    icon: Code2,
    title: "开发资源紧张",
    desc: "IT 开发人员供不应求，业务需求排队等待。核心开发资源被事务性开发占用，无法聚焦战略创新。"
  },
  {
    icon: Clock,
    title: "交付周期过长",
    desc: "传统开发模式从需求到上线以季度计，业务机会窗口稍纵即逝，企业创新受到严重制约。"
  },
  {
    icon: Users,
    title: "业技融合困难",
    desc: "业务人员无法直接参与开发，需求沟通存在巨大鸿沟。需求理解偏差导致反复修改返工。"
  },
  {
    icon: Package,
    title: "系统碎片化",
    desc: "业务部门各自采购 SaaS 工具，形成新的数据孤岛。缺乏统一平台难以整合管理。"
  },
  {
    icon: Workflow,
    title: "流程自动化弱",
    desc: "大量业务流程依赖手工处理，审批、通知、数据流转效率低下，人为差错频发。"
  },
  {
    icon: ShieldAlert,
    title: "维护成本攀升",
    desc: "定制开发的系统难以升级迭代，技术债务累积。核心人员离职后系统无人能改。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">企业应用开发的典型困境</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「传统开发模式已难以满足业务快速创新的需求，亟需更敏捷高效的开发方式。」
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
