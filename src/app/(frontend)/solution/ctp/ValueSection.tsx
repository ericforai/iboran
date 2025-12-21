import { Zap, TrendingDown, ShieldCheck, RefreshCcw } from 'lucide-react'

const metrics = [
  {
    title: "开发效率飞跃",
    icon: Zap,
    color: "blue",
    description: "低代码开发模式大幅缩短开发周期，业务人员可直接参与应用搭建，IT 团队专注核心创新。",
    stats: [
      { label: "开发效率提升", value: "5x" },
      { label: "需求响应周期", value: "-70%" },
      { label: "上线时间缩短", value: "-60%" }
    ]
  },
  {
    title: "成本大幅优化",
    icon: TrendingDown,
    color: "green",
    description: "统一技术架构减少重复建设，资源弹性伸缩降低 IT 成本，人力复用提升投入产出比。",
    stats: [
      { label: "IT 成本节约", value: "-40%" },
      { label: "资源利用率", value: "+50%" },
      { label: "运维人力减少", value: "-30%" }
    ]
  },
  {
    title: "业务敏捷创新",
    icon: RefreshCcw,
    color: "red",
    description: "微服务架构支持快速迭代，独立部署互不干扰，助力企业快速验证新业务假设。",
    stats: [
      { label: "迭代频率提升", value: "10x" },
      { label: "故障恢复时间", value: "-80%" },
      { label: "系统可用性", value: "99.99%" }
    ]
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">驱动企业技术价值重构</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            统一技术底座，释放创新动能，让技术真正成为业务发展的加速器。
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
              <ShieldCheck className="text-[#0052D9]" size={28} />
              全方位安全可信
            </h3>
            <p className="text-slate-600 leading-relaxed">
              通过等保三级认证，支持国密算法，多租户数据隔离，细粒度权限管控。从网络、应用到数据的全栈安全防护，让企业安心上云。
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
