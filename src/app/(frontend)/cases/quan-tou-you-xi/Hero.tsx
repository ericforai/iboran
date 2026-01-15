import { BarChart3, ChevronRight, Globe, Network, ShieldCheck, Wallet } from 'lucide-react'

const highlightTags = ['全球发行', '多币种结算', 'IP 生态运营', '在线服务']

const focusItems = [
  {
    icon: Network,
    title: '跨系统数据贯通',
    description: '游戏运营、支付网关与分成平台的数据统一归集。',
  },
  {
    icon: ShieldCheck,
    title: '多会计准则并行',
    description: '支持 IFRS 与本地准则的合规披露与报表输出。',
  },
  {
    icon: Wallet,
    title: '司库与资金管理',
    description: '跨境资金可视化与外汇风险管理能力增强。',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F1E] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-cyan-300 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / IP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              拳头游戏
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-300 text-3xl md:text-5xl mt-2">
                数字化转型实践
              </span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              拳头游戏提供电子游戏开发与发行服务，主要产品为《英雄联盟》《云顶之弈》
              《英雄联盟手游》及《VALORANT》等在线多人竞技游戏。
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
              <Globe className="w-4 h-4 text-cyan-200" />
              <span>全球发行与多币种结算需要统一财务中台支撑</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
                <span>运营聚焦</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">全球化</span>
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
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-200">
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
                  <BarChart3 className="h-4 w-4 text-cyan-200" />
                  <span>合并报表与现金流预测能力同步提升</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
