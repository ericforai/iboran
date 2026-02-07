import Link from 'next/link'
import { ArrowRight, BarChart3, ChevronRight, PackageSearch, ShieldCheck } from 'lucide-react'

const highlights = [
  {
    label: '审计准备效率',
    value: '+200%',
    detail: '资料准备时间显著缩短',
  },
  {
    label: '仓储拣货效率',
    value: '+50%',
    detail: '平均库龄降低 25%',
  },
  {
    label: '核算准确率',
    value: '99.5%',
    detail: '销售数据提至天级',
  },
]

const focusItems = [
  {
    icon: ShieldCheck,
    title: 'GXP 合规闭环',
    desc: '批次、效期与温控记录自动校验',
  },
  {
    icon: PackageSearch,
    title: '端到端追溯',
    desc: '从原料到患者端的全流程可视',
  },
  {
    icon: BarChart3,
    title: '渠道精细化治理',
    desc: '返利结算与费用透明对账',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1C] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="container relative z-10 px-4 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100">
              <span>客户案例</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>医药与医疗 · 养老服务</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-tight">
              福寿康
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400">
                数字化转型实践
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              医药与医疗健康行业处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，
              企业亟需构建符合 GXP 标准的一体化管理体系。泊冉软件通过数智化平台，以保障效率与安全同步提升。
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <div className="text-xs uppercase tracking-widest text-cyan-200">{item.label}</div>
                  <div className="mt-2 text-2xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 text-xs text-slate-300">{item.detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-50"
              >
                预约专家诊断
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
              >
                浏览更多案例
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-cyan-100">
                  <span>项目概览</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">医疗护理</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">
                  合规与追溯驱动的医疗服务数字化
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  以合规为核心，贯通研发、生产、流通与营销，构建可信的数据闭环。
                </p>

                <div className="mt-6 space-y-4">
                  {focusItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.title}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                      >
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{item.title}</div>
                          <div className="mt-1 text-xs text-slate-300">{item.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-200">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    GSP / GMP / GXP
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    端到端追溯
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    渠道费用治理
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
