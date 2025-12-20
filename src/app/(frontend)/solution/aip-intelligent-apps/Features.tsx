import { Brain, FileText, UserCog, Workflow } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI 中心 (AI Center)',
    description: '提供模型管理、提示词工程、微调训练与性能评估一站式平台，降低企业大模型应用门槛。'
  },
  {
    icon: FileText,
    title: '知识库 (RAG)',
    description: '全生命周期管理企业知识，支持向量化检索、多模态解析，让 AI 深入理解企业私有经验。'
  },
  {
    icon: UserCog,
    title: '智能助手 (Agent)',
    description: '构建具备规划、记忆与执行能力的“数字员工”，自动调用业务 API，实现复杂场景闭环。'
  },
  {
    icon: Workflow,
    title: '智能化场景实训',
    description: '支持端到端智能化应用构建，结合 RPA 自动化能力，实现业务流程的深度智能化重构。'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            核心功能特性
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            从模型底座到端到端应用，AIP 提供全栈式智能化支撑
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#0052D9] transition-colors">
                <feature.icon className="w-8 h-8 text-[#0052D9] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed italic border-l-4 border-slate-100 pl-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
