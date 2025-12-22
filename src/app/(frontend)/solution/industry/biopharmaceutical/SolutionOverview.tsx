import { FolderKanban, Factory, Calculator, Shield, Database, FileCheck } from 'lucide-react'

const coreModules = [
  {
    icon: FolderKanban,
    name: '项目管理',
    role: '项目全生命周期管控',
    description: '从立项、计划、执行到结项的全流程管理，支持多项目并行、WBS分解、里程碑跟踪',
  },
  {
    icon: Factory,
    name: '生产制造',
    role: '多组织协同生产',
    description: '跨组织生产订单协同、排产管理、物料配套、完工入库、批次追溯',
  },
  {
    icon: Calculator,
    name: '成本核算',
    role: '精细化批次成本',
    description: '项目成本归集、批次成本核算、跨组织成本分摊、预实对比分析',
  },
  {
    icon: Shield,
    name: '质量管理',
    role: 'GMP/GCP/GLP合规',
    description: '来料检验、过程质检、成品放行、批次追溯、稳定性考察、偏差管理',
  },
  {
    icon: Database,
    name: '采购供应',
    role: '集团化采购管控',
    description: '供应商准入审核、资质管理、集中采购、分散收货、预算控制',
  },
  {
    icon: FileCheck,
    name: 'CSV验证',
    role: '计算机系统验证',
    description: '系统验证文档管理、21 CFR Part 11合规、电子签名、审计追踪',
  },
]

export default function SolutionOverview() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Solution Overview
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            YonSuite 生物医药行业解决方案
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-3xl mx-auto">
            基于用友YonSuite云原生架构，为CDMO企业打造集项目管理、生产制造、质量管控、财务成本于一体的数智化平台，
            实现研发-生产-交付的全流程协同。
          </p>
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#1F2329]">CDMO 数智化平台架构</h3>
            <p className="text-slate-500 text-sm mt-2">全业务一体化 · 全流程可追溯 · 全场景可验证</p>
          </div>
          
          {/* Visual Architecture */}
          <div className="flex flex-col gap-4">
            {/* Top Layer */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100">
              <div className="text-center text-sm font-semibold text-emerald-700 mb-3">决策分析层</div>
              <div className="flex flex-wrap justify-center gap-3">
                {['项目仪表盘', '成本分析', '质量报表', '绩效考核'].map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-slate-600 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Middle Layer */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <div className="text-center text-sm font-semibold text-blue-700 mb-3">业务应用层</div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {coreModules.map((module, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <module.icon className="w-6 h-6 mx-auto text-[#0052D9] mb-2" />
                    <div className="text-xs font-bold text-[#1F2329]">{module.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{module.role}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom Layer */}
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="text-center text-sm font-semibold text-slate-700 mb-3">基础平台层</div>
              <div className="flex flex-wrap justify-center gap-3">
                {['统一主数据', '工作流引擎', '移动应用', '开放集成', '安全合规'].map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-slate-600 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Modules Detail */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreModules.map((module, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0052D9]/10 rounded-lg shrink-0">
                  <module.icon className="w-6 h-6 text-[#0052D9]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2329] mb-1">{module.name}</h4>
                  <p className="text-xs text-[#0052D9] font-medium mb-2">{module.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{module.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
