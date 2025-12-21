import { Database, Sparkles, BarChart3 } from 'lucide-react'

const featureGroups = [
  {
    title: "数据采集与集成",
    subtitle: "多源汇聚，统一管理",
    icon: Database,
    features: [
      { title: "多源数据采集", desc: "支持数据库、API、文件等多种数据源接入，实时或批量采集，自动增量同步。" },
      { title: "ETL 数据处理", desc: "可视化数据清洗、转换、加载流程，拖拽式构建数据管道，降低技术门槛。" },
      { title: "主数据管理", desc: "统一客户、供应商、物料等核心主数据，建立黄金数据标准，消除数据冗余。" }
    ]
  },
  {
    title: "数据治理与安全",
    subtitle: "质量保障，合规可控",
    icon: Sparkles,
    features: [
      { title: "数据标准化", desc: "建立企业数据字典与标准规范，统一业务术语与编码规则，确保数据一致性。" },
      { title: "数据质量管理", desc: "多维度数据质量检核规则，自动发现数据问题，持续改进数据质量。" },
      { title: "数据安全管控", desc: "细粒度权限控制、数据脱敏、访问审计，满足等保与合规要求。" }
    ]
  },
  {
    title: "数据分析与应用",
    subtitle: "自助分析，智能洞察",
    icon: BarChart3,
    features: [
      { title: "自助式 BI 分析", desc: "业务人员拖拽式构建报表与可视化图表，无需依赖 IT 即可快速获取洞察。" },
      { title: "智能数据大屏", desc: "构建业务实时监控大屏，关键指标一目了然，支持多屏联动与移动查看。" },
      { title: "AI 智能分析", desc: "内置 AI 算法库，支持预测分析、异常检测、智能推荐等高级分析场景。" }
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">DMP 核心数据能力</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            构建企业数据中台，实现数据采集、治理、分析一体化，让数据真正驱动业务决策。
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
