import { BarChart3, ChevronRight, Landmark, Network, ShieldCheck, Signal } from 'lucide-react'

const highlightTags = ['通信设备', '邮电技术', '系统集成', '央企国资']

const focusItems = [
  {
    icon: Network,
    title: '多系统集成',
    description: 'ERP 与业务系统贯通，提升跨组织协同效率。',
  },
  {
    icon: BarChart3,
    title: '合并报表提效',
    description: '多会计准则并行处理，降低报表周期。',
  },
  {
    icon: ShieldCheck,
    title: '合规与内控',
    description: '满足国资监管要求，强化审计留痕与风控。',
  },
  {
    icon: Signal,
    title: '项目与费用闭环',
    description: '项目执行与费用管理联动，成本可追溯。',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-blue-200 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>国资 / 央企国资</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              中国华信邮电
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-cyan-300 text-3xl md:text-5xl mt-2">
                数字化转型实践
              </span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              通信设备、邮电技术、信息网络系统集成及相关技术服务。
              需要统一的集团财务与项目管理平台支撑跨组织协同。
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
              <Landmark className="w-4 h-4 text-blue-200" />
              <span>聚焦业财融合、合规治理与报表效率提升</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-blue-200">
                <span>运营聚焦</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">央企治理</span>
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
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-200">
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
