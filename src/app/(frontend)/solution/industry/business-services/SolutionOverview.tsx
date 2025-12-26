import { Layers, Zap, BarChart, ShieldCheck } from 'lucide-react'

export default function SolutionOverview() {
  const highlights = [
    {
      icon: Layers,
      title: "一体化平台",
      desc: "打破信息孤岛，实现项目、财务、人力、供应链一体化管理。"
    },
    {
      icon: Zap,
      title: "智能化运营",
      desc: "AI 驱动的智能填单、智能审核、智能分析，提升运营效率。"
    },
    {
      icon: BarChart,
      title: "实时数据洞察",
      desc: "多维度的经营分析报表，支持管理层实时决策。"
    },
    {
      icon: ShieldCheck,
      title: "合规与风控",
      desc: "内置行业典型实践，确保业务流程合规，降低经营风险。"
    }
  ]

  return (
    <section className="py-24 bg-[#F0F2F5] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-bold tracking-widest uppercase mb-3 block">
            Solution Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-6">
            YonSuite 商务服务业数智化全景图
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            基于云原生架构，连接企业内部运营与外部商业网络，构建即时响应、数据驱动的数智企业。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Introduction */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#1F2329]">
              赋能服务型企业，<br/>
              <span className="text-[#0052D9]">重塑核心竞争力</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              针对商务服务行业的项目制运营特点，YonSuite 提供从商机获取、项目立项、资源调度、服务交付到财务核算的全生命周期管理能力。通过标准化与个性化相结合的配置能力，满足不同细分服务领域的业务需求。
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F2329] mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Architecture Diagram Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="text-center p-8 relative z-10">
                 <Layers className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                 <p className="text-slate-400 font-medium">解决方案架构图</p>
                 <p className="text-xs text-slate-400 mt-2">（此处展示 YonSuite 业务架构）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
