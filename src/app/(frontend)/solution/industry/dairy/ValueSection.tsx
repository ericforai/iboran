import { TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react'

const metrics = [
  { title: '部署效能', value: '4小时内', label: '专属云部署完成', icon: Zap },
  { title: '全生命周期成本', value: '显著降低', label: 'TCO 优于传统本地模式', icon: TrendingUp },
  { title: '上线周期', value: '1-3个月', label: '快速实施与见效', icon: Clock },
  { title: '质量合规水平', value: '全流程', label: '质量过程穿透与感知', icon: ShieldCheck }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#1F2329] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-sm text-blue-400 font-semibold tracking-wider uppercase">
            Business Value
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            数智转型，驱动全产业链价值增值
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <metric.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">
                {metric.title}
              </h3>
              <div className="text-4xl font-black text-white mb-2">
                {metric.value}
              </div>
              <p className="text-slate-400 text-xs">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
