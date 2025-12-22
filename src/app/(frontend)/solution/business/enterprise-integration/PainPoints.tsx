import { Share2, Clock, Zap, ShieldAlert } from 'lucide-react'

const painPoints = [
  {
    icon: Share2,
    title: '系统对接多且复杂',
    description: '企业内部系统林立（ERP、CRM、电商等），接口繁多且场景复杂，缺乏统一标准导致连接维护成本极高。',
  },
  {
    icon: Clock,
    title: '开发响应速度慢',
    description: '传统集成方式依赖纯手工代码，技术对接周期长，无法跟上业务快速迭代的节奏。',
  },
  {
    icon: Zap,
    title: '业务变更频繁',
    description: '业务逻辑调整或系统升级常导致现有集成链路失效，缺乏灵活适配能力，损害系统稳定性。',
  },
  {
    icon: ShieldAlert,
    title: '运维排错难度大',
    description: '跨系统链路长，错误日志分散且难以追踪，通常只能被动接受告警，故障排查耗时耗力。',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            为什么企业需要统一集成平台？
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            在数智化转型过程中，系统连接的深度与广度决定了业务运转的效率
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-[2rem] border border-slate-100 bg-white hover:bg-slate-50 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0052D9] transition-colors duration-500">
                <point.icon className="w-8 h-8 text-[#0052D9] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4 group-hover:text-[#0052D9] transition-colors">
                {point.title}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
