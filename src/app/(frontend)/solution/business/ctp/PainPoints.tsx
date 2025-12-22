import { Layers, Clock, ShieldAlert, Puzzle, Gauge, Settings } from 'lucide-react'

const painPoints = [
  {
    icon: Layers,
    title: "系统烟囱林立",
    desc: "多系统各自独立，技术栈异构，无法快速整合。数据孤岛严重，跨系统协作困难，IT运维成本居高不下。"
  },
  {
    icon: Clock,
    title: "开发周期过长",
    desc: "传统开发模式效率低下，业务需求响应慢。从需求到上线周期以月计，难以适应快速变化的市场竞争。"
  },
  {
    icon: ShieldAlert,
    title: "安全合规压力",
    desc: "网络安全威胁日益复杂，等保合规要求严格。缺乏统一的安全防护体系，风险难以全面管控。"
  },
  {
    icon: Puzzle,
    title: "集成对接困难",
    desc: "新老系统共存，API接口混乱。第三方应用对接复杂，每次集成都是重复造轮子，耗时耗力。"
  },
  {
    icon: Gauge,
    title: "弹性扩展受限",
    desc: "传统架构无法应对业务峰值，资源利用率低。面对突发流量缺乏弹性，系统稳定性难以保障。"
  },
  {
    icon: Settings,
    title: "技术人才短缺",
    desc: "新技术学习曲线陡峭，企业难以快速构建技术团队。外包依赖严重，核心能力难以沉淀。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">企业 IT 技术平台的典型挑战</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「传统IT架构已难以支撑企业数智化转型的敏捷需求，亟需构建现代化的技术底座。」
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
