import { TrendingUp, Clock, Wrench, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const metrics = [
  {
    title: "维保效率提速",
    icon: Wrench,
    color: "blue",
    description: "通过闭环工单体系与移动化作业，显著提升现场响应速度与作业标准化水平。",
    stats: [
      { label: "运维效率", value: "+35%" },
      { label: "全员移动化", value: "99%以上" },
      { label: "计划完成率", value: "98%" }
    ]
  },
  {
    title: "降本增效成果",
    icon: TrendingUp,
    color: "green",
    description: "从被动维修转向预防性维护，延长设备寿命，优化备件周转，实现财务价值最大化。",
    stats: [
      { label: "维保成本", value: "-12%" },
      { label: "资产利用率", value: "+20%" },
      { label: "资产 ROI", value: "+18%" }
    ]
  },
  {
    title: "安全合规保障",
    icon: ShieldCheck,
    color: "red",
    description: "全方位的特种设备与基础设施监控，实现非计划停机风险可控，以保障生产连续性。",
    stats: [
      { label: "故障频次", value: "-45%" },
      { label: "由于故障停机", value: "-60%" },
      { label: "安全达标率", value: "99%以上" }
    ]
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">资产管理的数智化成果</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            让每一项资产投资都能产生可衡量的业务回报，助力企业从成本中心向价值中心转型。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl transition-colors duration-500 ${
                  item.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-[#0052D9] group-hover:text-white' :
                  item.color === 'green' ? 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white' : 
                  'bg-red-50 text-red-600 group-hover:bg-[#E60012] group-hover:text-white'
                }`}>
                  <item.icon size={32} />
                </div>
                <h3 className="font-bold text-2xl text-[#1F2329]">{item.title}</h3>
              </div>
              
              <p className="text-slate-500 mb-10 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-auto grid grid-cols-3 gap-4">
                {item.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-50 group-hover:border-slate-100 transition-all duration-500">
                    <div className={`${
                      item.color === 'blue' ? 'text-blue-600' :
                      item.color === 'green' ? 'text-green-600' : 'text-red-600'
                    } font-black text-2xl mb-1`}>{stat.value}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-3xl">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Clock className="text-blue-400" size={28} />
              </div>
              数智决策，精益运营
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              依托 YonBIP 大数据平台，构建从资产全景分析到单台设备效益评估的数智大脑，驱动企业管理从“被动响应”升级为“主动运营”。
            </p>
          </div>
          <div className="flex-shrink-0">
             <Link href="/resources" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-white/5">
                下载 EAM 业务全景图
             </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
