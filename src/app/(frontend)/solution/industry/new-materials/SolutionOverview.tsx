import { Calculator, Package, Factory, FileSpreadsheet, ArrowRight, CheckCircle } from 'lucide-react'

const coreProducts = [
  {
    icon: Calculator,
    name: '财务管理',
    role: '总账、应收、应付、固资、票据一体化管理，支撑IPO合规审计',
  },
  {
    icon: Package,
    name: '供应链管理',
    role: '采购、销售、库存全流程管控，多组织内部往来自动对账',
  },
  {
    icon: Factory,
    name: '生产制造',
    role: '生产任务、委外加工、工序报工精细化管理，实现成本可追溯',
  },
  {
    icon: FileSpreadsheet,
    name: '成本核算',
    role: '符合审计要求的成本归集与分摊方案，支持IPO数据补录',
  },
]

const deliverables = [
  {
    title: 'IPO 合规数据口径',
    desc: '成本核算、存货计价与审计口径统一，形成可复用模板。',
  },
  {
    title: '多组织对账规则',
    desc: '内部往来自动对账与合并规则，支撑集团化管理。',
  },
  {
    title: '生产与委外管理规范',
    desc: '工序、委外、报工与质量追溯标准化落地。',
  },
  {
    title: '上线节奏与 SOP',
    desc: '阶段里程碑、培训与移交流程，保障快速上线。',
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
            U9 cloud 新材料行业解决方案
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-3xl mx-auto">
            依托用友U9 cloud强大的多组织、多工厂能力，结合负极材料行业特性，
            为企业提供从财务核算到生产制造的全流程数字化解决方案，助力IPO合规进程
          </p>
        </div>

        {/* Architecture Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1F2329] mb-4">
                业财一体化架构
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                U9 cloud采用业财一体化设计，从销售订单到生产执行，从成本归集到财务核算，
                全流程数据自动流转，确保业务数据与财务数据实时一致，满足IPO审计对数据准确性的严格要求。
              </p>
              <ul className="space-y-3">
                {[
                  '多组织架构支持集团化运营与多工厂管控',
                  '内部往来自动对账，支持合并报表',
                  '完整的审批流程与业务过程控制',
                  '复用东岛新能源得到审计师认可的成本核算方案',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="text-sm text-slate-500 mb-2">解决方案核心价值</div>
                <div className="text-3xl font-bold text-[#1F2329]">IPO合规 · 成本可控 · 快速上线</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#E60012]">2个月</div>
                  <div className="text-xs text-slate-500 mt-1">项目上线周期</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#0052D9]">78份</div>
                  <div className="text-xs text-slate-500 mt-1">SOP文档建立</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600">~百万</div>
                  <div className="text-xs text-slate-500 mt-1">节省辅导费</div>
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
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition">
                <product.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-[#1F2329] mb-2">{product.name}</h4>
              <p className="text-sm text-slate-600">{product.role}</p>
              <div className="mt-4 flex items-center text-[#0052D9] text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                了解更多 <ArrowRight size={14} className="ml-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 text-sm font-bold">
              交付
            </span>
            <h3 className="text-xl font-bold text-[#1F2329]">交付物清单</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1F2329]">{item.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
