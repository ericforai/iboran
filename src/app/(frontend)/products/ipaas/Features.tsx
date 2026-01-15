import { Layers, Database, Globe, Package } from 'lucide-react'

const features = [
  {
    title: '集成资产中心 (Integration Assets)',
    description: '提供开箱即用的集成资产包，包含预置连接器、集成模板与行业方案。支持资产的打包、发布、实施与升级，让集成经验可复用、可传承。',
    icon: Package,
    color: 'bg-indigo-50 text-indigo-600',
    tags: ['开箱即用', '资产复用', '快速交付'],
  },
  {
    title: '企业服务总线 (ESB) 流量服务',
    description: '处理高并发、跨系统的复杂集成业务。支持多种协议适配（Restful/WebService/FTP/DB），提供削峰填谷、熔断限流等企业级稳定性保障。',
    icon: Layers,
    color: 'bg-[#E60012]/10 text-[#E60012]',
    tags: ['高并发', '削峰填谷', '协议转换'],
  },
  {
    title: '主数据管理 (MDM)',
    description: '建立企业统一的数据标准（人员/客商/物料等）。提供数据清洗、质量质检、去重合并及分发订阅能力，彻底解决"数据孤岛"与一数多源问题。',
    icon: Database,
    color: 'bg-emerald-50 text-emerald-600',
    tags: ['数据清洗', 'OneData', '一致性'],
  },
  {
    title: 'API 网关与治理',
    description: '统一管理企业所有 API 资产。提供全生命周期的设计、发布、监控与安全管控，支持精细化的访问授权与流量计费。',
    icon: Globe,
    color: 'bg-blue-50 text-blue-600',
    tags: ['全生命周期', '安全鉴权', 'Mock调试'],
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
              LINK 4 大核心模块，构建全域集成体系
            </h2>
            <p className="text-slate-500">
              从数据治理到资产复用，覆盖企业集成的每一个关键环节
            </p>
          </div>
          <div className="hidden lg:block pb-1">
            <div className="flex gap-4">
              <span className="text-sm font-medium text-[#1F2329]">
                连接 · 融合 · 共享
              </span>
              <div className="w-12 h-px bg-slate-300 self-center" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-10 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-8 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white text-slate-500 text-xs rounded-full font-medium border border-slate-200"
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
