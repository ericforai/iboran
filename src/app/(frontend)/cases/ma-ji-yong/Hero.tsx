import { BarChart3, ChevronRight, FileText, Receipt, Store, Wallet } from 'lucide-react'

const focusItems = [
  {
    icon: Store,
    title: '多门店统一管控',
    description: '门店经营数据实时汇总，支撑总部快速决策。',
  },
  {
    icon: Receipt,
    title: '费用全流程闭环',
    description: '报销、采购、结算线上化，降低管理波动。',
  },
  {
    icon: Wallet,
    title: '资金集中化运营',
    description: '资金归集与调度可视化，提升现金流效率。',
  },
  {
    icon: FileText,
    title: '合同生命周期管理',
    description: '条款可追溯、续签可预警，风险更可控。',
  },
]

const tags = ['连锁餐饮', '合并报表', '费用管控', '资金归集']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1A0B0B] via-[#1B0F0A] to-[#0A0F1C] text-white">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.25) 1px, transparent 0)',
            backgroundSize: '42px 42px',
          }}
        />
      </div>
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-red-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-[140px]" />

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-red-300 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 连锁餐饮</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              马记永
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-orange-200 to-amber-300 text-3xl md:text-5xl mt-2">
                数字化转型实践
              </span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              马记永提供拉面、凉菜、小吃等餐饮服务，主打兰州牛肉面及相关面食产品。
              随着门店规模化扩张，集团财务与运营协同成为数字化升级的核心。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/10 text-sm text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-200">
              <BarChart3 className="w-4 h-4 text-amber-300" />
              <span>聚焦集团财务管控、费用闭环与资金归集</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-amber-200">
                <span>运营聚焦</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">连锁门店</span>
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
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-200">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
