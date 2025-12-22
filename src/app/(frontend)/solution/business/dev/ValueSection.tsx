import { Zap, TrendingDown, Users, Lock } from 'lucide-react'

const metrics = [
  {
    title: "开发效率飞跃",
    icon: Zap,
    color: "blue",
    description: "低代码模式将传统数月的开发周期缩短至数周甚至数天，让业务想法快速变成可用应用。",
    stats: [
      { label: "开发效率提升", value: "5-10x" },
      { label: "交付周期缩短", value: "-80%" },
      { label: "需求变更响应", value: "小时级" }
    ]
  },
  {
    title: "人力成本优化",
    icon: TrendingDown,
    color: "green",
    description: "业务人员可直接开发简单应用，IT 团队专注核心系统，整体开发成本大幅下降。",
    stats: [
      { label: "开发成本降低", value: "-60%" },
      { label: "IT资源释放", value: "+40%" },
      { label: "外包依赖减少", value: "-50%" }
    ]
  },
  {
    title: "全员参与创新",
    icon: Users,
    color: "red",
    description: "业务人员参与开发，需求理解准确，沟通成本降低，真正实现业技融合创新。",
    stats: [
      { label: "业务参与度", value: "+200%" },
      { label: "需求偏差减少", value: "-70%" },
      { label: "创新应用数量", value: "+300%" }
    ]
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">释放业务创新潜能</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            让开发不再是瓶颈，让创新触手可及，赋能每一位业务人员。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${
                  item.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  item.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                  <item.icon size={26} />
                </div>
                <h3 className="font-bold text-xl text-[#1F2329]">{item.title}</h3>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                {item.description}
              </p>

              <div className="mt-auto grid grid-cols-3 gap-3">
                {item.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="bg-slate-50 p-3 rounded-xl text-center">
                    <div className={`${
                      item.color === 'blue' ? 'text-blue-600' :
                      item.color === 'green' ? 'text-green-600' : 'text-red-600'
                    } font-bold text-xl mb-1`}>{stat.value}</div>
                    <div className="text-[10px] text-slate-500 font-medium leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-[#1F2329] mb-4 flex items-center gap-3">
              <Lock className="text-[#0052D9]" size={28} />
              企业级安全管控
            </h3>
            <p className="text-slate-600 leading-relaxed">
              低代码不等于低安全。DEV 平台提供细粒度权限控制、数据加密、操作审计等企业级安全能力，确保应用开发便捷与安全兼得。
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="inline-flex items-center gap-2 group cursor-pointer">
                <span className="text-lg font-bold text-[#0052D9] border-b-2 border-transparent group-hover:border-[#0052D9] transition-all">查看安全白皮书</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center group-hover:bg-[#0052D9] group-hover:text-white transition-all">→</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
