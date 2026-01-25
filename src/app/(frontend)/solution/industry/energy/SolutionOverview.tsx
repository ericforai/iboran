import { Users, Settings, FolderKanban, BrainCircuit, ArrowRight, CheckCircle } from 'lucide-react'

const coreProducts = [
  {
    icon: Users,
    name: '人力共享服务',
    role: '五位一体实现分层分级、全员感知，业务管理、共享运营、自助服务、数据分析、角色门户一体化',
  },
  {
    icon: Settings,
    name: '设备资产管理',
    role: 'IOT+点检定修，设备五码合一，实现设备全生命周期管理与智能运维',
  },
  {
    icon: FolderKanban,
    name: '项目物资一体化',
    role: '项目计划、物资、资产、财务全生命周期管控，实现一图一表可视化',
  },
  {
    icon: BrainCircuit,
    name: '智能生产运营',
    role: '智能计划、智能调度、预测性维护、数字孪生，实现生产智能化',
  },
]

const deliverables = [
  {
    title: '业务蓝图与流程梳理',
    desc: '能源生产、运维、项目与财务流程统一梳理，输出可执行蓝图。',
  },
  {
    title: '设备与资产编码标准',
    desc: '五码合一编码规范与主数据治理清单，确保全生命周期一致。',
  },
  {
    title: 'IOT 运维规则与告警策略',
    desc: '设备点检、工单、告警与维保规则落地，形成可运维闭环。',
  },
  {
    title: '项目物资一体化模型',
    desc: '计划、物资、成本、结算联动模型与可视化指标体系。',
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
            用友BIP超级版 能源行业解决方案
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-3xl mx-auto">
            通过数字化转型，支撑企业智能生产、精益管理、业务创新，
            提升企业应对能力，实现高质量、可持续发展
          </p>
        </div>

        {/* Architecture Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1F2329] mb-4">
                世界一流八大能力数字化支撑
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                用友BIP超级版帮助能源企业实现战略引领、价值创造、精益运营、科技创新、
                公司治理、风险管控、人才保障、品牌建设八大能力的数字化转型。
              </p>
              <ul className="space-y-3">
                {[
                  '决策科学化：数据驱动的科学决策与前瞻性分析',
                  '生产智能化：柔性自主生产、AI驱动过程控制',
                  '业务协同化：采购、生产、输送、营销无缝衔接',
                  '资源共享化：设备、物资、人力、资金充分共享',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="text-sm text-slate-500 mb-2">解决方案核心价值</div>
                <div className="text-3xl font-bold text-[#1F2329]">智能生产 · 精细管控 · 业务创新</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#E60012]">37次</div>
                  <div className="text-xs text-slate-500 mt-1">减少非计划停产</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#0052D9]">5码</div>
                  <div className="text-xs text-slate-500 mt-1">设备编码标准化</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">IOT+</div>
                  <div className="text-xs text-slate-500 mt-1">智能运维平台</div>
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
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-100 transition">
                <product.icon className="w-6 h-6 text-amber-600" />
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
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-600 text-sm font-bold">
              交付
            </span>
            <h3 className="text-xl font-bold text-[#1F2329]">交付物清单</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
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
