import { ClipboardCheck, FileSpreadsheet, HardHat, Scale, ArrowRight, CheckCircle } from 'lucide-react'

const coreProducts = [
  {
    icon: ClipboardCheck,
    name: '规划与招标',
    role: '立项申报、投资估算监控、采购招标全数字化流转，实现源头规范管控。',
  },
  {
    icon: FileSpreadsheet,
    name: '合同与协同',
    role: '合同范本库、全维度变更追踪、分包结算、业财一体对账，规避法律与经济风险。',
  },
  {
    icon: HardHat,
    name: '现场质安监控',
    role: '现场物联感知、质量巡检影像、安全隐患红黄牌、移动端实时汇报，管理直达施工一线。',
  },
  {
    icon: Scale,
    name: '成本与结算',
    role: '动态成本预警、料工费自动归集、竣工转固自动化，实现项目收益闭环化管理。',
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
            用友BIP超级版 业主方工程项目管理解决方案
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-3xl mx-auto">
            从制度驱动到数据驱动，为投资业主方打造贯穿“规划、招标、合同、进度、质安、结算”的全流程数字化管理平台。
          </p>
        </div>

        {/* Architecture Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1F2329] mb-4">
                全生命周期业财一体化协同
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                方案旨在解决工程建设过程中“看不清、管不住、审不准”的难题，通过深度业财融合，实现投资可控、进度可视化、风险可预警。
              </p>
              <ul className="space-y-3">
                {[
                  '全流程在线化：从前期规划到验收转固，所有业务单据全数字化流转',
                  '实时动态成本：预警控制合同执行，成本实时进账，规避发票丢失与风险',
                  '施工精细协同：甲方、监理、施工单位多方信息共享，现场隐患整改有理有据',
                  '自动化转固：竣工验收完成即启动资产化流程，打通项目与财务管理的最后一公里',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="text-sm text-slate-500 mb-2">数字化管控核心价值</div>
                <div className="text-3xl font-bold text-[#1F2329]">投资可控 · 进度可视 · 风险可追</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#E60012]">50%</div>
                  <div className="text-xs text-slate-500 mt-1">结算效率提升</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#0052D9]">99%以上</div>
                  <div className="text-xs text-slate-500 mt-1">业务流程合规</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">Zero</div>
                  <div className="text-xs text-slate-500 mt-1">重复立项支出</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreProducts.map((product, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition">
                <product.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-[#1F2329] mb-2">{product.name}</h4>
              <p className="text-sm text-slate-600">{product.role}</p>
              <div className="mt-4 flex items-center text-[#0052D9] text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                了解方案细节 <ArrowRight size={14} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
