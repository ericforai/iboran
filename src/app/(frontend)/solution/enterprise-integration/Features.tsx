import { Layers, Database, Globe } from 'lucide-react'

const features = [
  {
    title: 'API 管理 (APIM)',
    description: '提供全生命周期 API 治理，包括定义、发布、安全脱敏及流量监控。支持多租户与高并发环境，保障企业接口资产安全可控。',
    icon: Globe,
    color: 'bg-blue-50 text-blue-600',
    tags: ['RBAC 管理', '流量控制', '日志溯源'],
  },
  {
    title: '应用系统集成 (IPaaS)',
    description: '内置 100+ 预置连接器与集成方案，涵盖 ERP、CRM、协同办公等。通过零代码/低代码方式，快速打通异构系统数据流。',
    icon: Layers,
    color: 'bg-[#E60012]/10 text-[#E60012]',
    tags: ['异构系统', '预置适配', '弹性伸缩'],
  },
  {
    title: '主数据管理 (MDM)',
    description: '跨业务领域建立统一数据标准，包括人员、物料、组织等核心模型。通过数据分发与映射，解决多系统间的基础数据一致性难题。',
    icon: Database,
    color: 'bg-indigo-50 text-indigo-600',
    tags: ['数据标准化', '全局一致性', '映射转换'],
  },
  {
    title: '企业服务总线 (ESB) 适配',
    description: '支持多种协议（Restful, Webservice, FTP, DB 等）适配及传统中间件集成，在混合云环境下实现高效、稳定的数据流转。',
    icon: Database,
    color: 'bg-orange-50 text-orange-600',
    tags: ['协议透传', '异步排队', '熔断限流'],
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
              LINK 4 大核心功能，构建企业数智化底座
            </h2>
            <p className="text-slate-500">
              通过全场景覆盖的集成能力，支持企业从轻量连接到复杂治理的平滑演进
            </p>
          </div>
          <div className="hidden lg:block pb-1">
            <div className="flex gap-4">
              <span className="text-sm font-medium text-[#1F2329]">
                连接一切业务场景
              </span>
              <div className="w-12 h-px bg-slate-300 self-center" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full font-medium border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
