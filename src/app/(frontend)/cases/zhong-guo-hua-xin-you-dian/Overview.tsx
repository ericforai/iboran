import { CheckCircle2, Landmark, Layers, Network, ShieldCheck } from 'lucide-react'

const goals = [
  '多系统集成与跨组织协同',
  '合并报表自动化与口径统一',
  '项目与合同管理闭环',
  '费用合规与支付联动',
]

const scopes = ['业财融合', '合并报表', '项目合同', '支付分析']
const traits = ['央企监管', '多组织协同', '通信系统集成', '多会计准则']

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
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">客户</div>
                    <div className="font-semibold text-slate-900">中国华信邮电</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">行业</div>
                    <div className="font-semibold text-slate-900">国资 · 央企国资</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600">
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
                中国华信邮电覆盖通信设备、邮电技术与信息网络系统集成等业务，组织架构复杂，
                跨组织协同与合规监管要求对财务与项目管理提出更高标准。
              </p>
              <p>
                项目目标是构建以 ERP 为核心的数字化平台，打通多系统集成与业财链路，
                提升合并报表效率与项目、合同全生命周期管理能力。
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">转型目标</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold text-slate-900">交付范围</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  以集团财务为主线，覆盖项目与合同管理、费用合规与企业支付，实现跨组织协同闭环。
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

            <div className="mt-6 inline-flex items-center gap-2 text-xs text-blue-700 bg-blue-50 px-3 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>强化央企合规与审计留痕能力</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
