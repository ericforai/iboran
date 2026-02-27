import { Activity, Building2, CheckCircle2, ClipboardList, ShieldCheck } from 'lucide-react'

const goals = [
  '建立覆盖评估、派单、执行、回访的服务闭环',
  '打通辅具入库、租赁、回收与消杀的全程追踪',
  '实现多网点服务与财务模块的透明对账',
]

const scopes = ['服务评估', '辅具租赁', '上门照护', '网点经营']

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                项目概览
              </h3>
              <div className="space-y-5 text-sm text-slate-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-cyan-600">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">客户</div>
                    <div className="font-semibold text-slate-900">福寿康</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-cyan-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">行业</div>
                    <div className="font-semibold text-slate-900">养老服务 · 辅具租赁</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-cyan-600">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">业务特征</div>
                    <div className="font-semibold text-slate-900">多网点服务 + 辅具租赁</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-cyan-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">方案</div>
                    <div className="font-semibold text-slate-900">养老服务一体化运营升级</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">交付范围</div>
                <div className="flex flex-wrap gap-2">
                  {scopes.map((scope) => (
                    <span
                      key={scope}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">项目背景</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                福寿康的业务覆盖养老照护、上门服务与辅具租赁，多网点、多角色协同对服务标准化提出了更高要求。
                传统分散系统难以支撑全过程追踪与跨网点统一运营。
              </p>
              <p>
                泊冉软件通过数智化平台，帮助其实现“服务执行可视、辅具流转可追、经营数据可算”，
                支撑养老服务从经验驱动向数据驱动升级。
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">转型目标</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold text-slate-900">交付重点</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  以服务过程为底座，贯通服务派单、执行回访、辅具租赁与费用结算，实现运营全链路统一管理。
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600">
                    服务质控
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600">
                    辅具追踪
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600">
                    费用对账
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
