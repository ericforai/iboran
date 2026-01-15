import { CheckCircle2, Landmark, Layers, Map, ShieldCheck } from 'lucide-react'

const goals = [
  '多系统集成与业财协同贯通',
  '合并报表自动化与口径统一',
  '资金监管与司库管理集中化',
  '财务共享与数据分析能力提升',
]

const scopes = ['业财融合', '合并报表', '司库管理', '合同税务']
const traits = ['多业务板块', '公共服务属性', '国资监管', 'SAP 依赖']

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
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-amber-600">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">客户</div>
                    <div className="font-semibold text-slate-900">交运集团</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-amber-600">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">行业</div>
                    <div className="font-semibold text-slate-900">国资 · 市级国资</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-amber-600">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">方案</div>
                    <div className="font-semibold text-slate-900">系统化解决方案部署</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">业务特征</div>
                <div className="flex flex-wrap gap-2">
                  {traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600"
                    >
                      {trait}
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
                交运集团承担公共交通、客运货运一体化与应急保障等多重职能，
                多业务板块对业财融合、资金监管与合规要求提出更高挑战。
              </p>
              <p>
                项目目标是构建统一的多系统集成架构，打通业务与财务链路，
                支撑合并报表自动化、财务共享建设与国资监管合规。
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">转型目标</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold text-slate-900">交付范围</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  以集团财务为主线，覆盖费用、资金、税务与合同管理，实现业务与财务的统一协同。
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
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

            <div className="mt-6 inline-flex items-center gap-2 text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>强化国资监管合规与资金穿透管理</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
