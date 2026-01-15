import { Activity, Building2, CheckCircle2, ClipboardList, ShieldCheck } from 'lucide-react'

const goals = [
  '建立符合 GXP 标准的合规闭环',
  '打通批次、效期与温控的全程追溯',
  '实现营销与财务模块的透明对账',
]

const scopes = ['研发创新', '合规生产', '精准流通', '渠道治理']

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
                    <div className="font-semibold text-slate-900">医药与医疗 · 养老服务</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-cyan-600">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">合规要求</div>
                    <div className="font-semibold text-slate-900">GSP / GMP / GXP</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-cyan-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">方案</div>
                    <div className="font-semibold text-slate-900">医药与医疗数字化升级</div>
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
                医药与医疗健康行业正处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，
                企业亟需构建符合 GXP 标准的一体化管理体系。
              </p>
              <p>
                泊冉软件通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。项目背景为提供医疗护理、
                养老照护及相关健康管理服务。
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
                  以合规为底座，贯通生产与流通，实现对批次、效期、温控、渠道库存及费用流的统一管理。
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600">
                    合规审计
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600">
                    批次追溯
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600">
                    渠道对账
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
