import { ShieldCheck, Database, Zap, Cpu } from 'lucide-react'

const painPoints = [
  {
    icon: Cpu,
    title: '模型选产用管难题',
    description: '企业面临多种大模型，难以有效评估、选型及统一管理，导致技术选型困惑。'
  },
  {
    icon: Database,
    title: '海量知识利用率低',
    description: '企业内部文档、经验等知识碎片化严重，无法有效被 AI 提取利用，数智化落地难。'
  },
  {
    icon: Zap,
    title: '应用构建周期长',
    description: '端到端智能化应用构建门槛高，开发周期长，难以快速响应业务场景的即时需求。'
  },
  {
    icon: ShieldCheck,
    title: '数据安全与合规风险',
    description: '在利用公有大模型时，如何保障企业核心资产安全与业务合规是首要屏障。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            企业智能化的痛点挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-[#E60012]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-2">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
