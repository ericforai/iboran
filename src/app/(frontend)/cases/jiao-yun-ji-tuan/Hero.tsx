import { BarChart3, ChevronRight, Landmark, Map, ShieldCheck, Truck, Wallet } from 'lucide-react'

const highlightTags = ['交通运输', '物流配送', '设备租赁', '国资监管']

const focusItems = [
  {
    icon: Map,
    title: '多业务协同',
    description: '客运、货运与租赁业务统一调度与核算。',
  },
  {
    icon: BarChart3,
    title: '业财融合穿透',
    description: '业务数据与财务口径一致，报表可追溯。',
  },
  {
    icon: Wallet,
    title: '资金监管升级',
    description: '司库与支付联动，提升资金监管实时性。',
  },
  {
    icon: ShieldCheck,
    title: '合规与风控',
    description: '强化国资监管要求下的合规与风险控制。',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-amber-500/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-amber-200 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>国资 / 市级国资</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              交运集团
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-blue-300 text-3xl md:text-5xl mt-2">
                数字化转型实践
              </span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              交运集团提供交通运输、物流配送、客运服务、货运服务及相关的运输设备租赁与维护。
              多业务板块协同需要统一的业财与资金监管平台支撑。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlightTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/10 text-sm text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-200">
              <Landmark className="w-4 h-4 text-amber-200" />
              <span>聚焦集团财务、业财融合与合规监管能力提升</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-amber-200">
                <span>运营聚焦</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">国资运营</span>
              </div>
              <div className="mt-6 grid gap-4">
                {focusItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{item.title}</div>
                          <div className="mt-1 text-xs text-slate-300">{item.description}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-amber-200" />
                  <span>交通运输与物流场景统一核算与监管</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
