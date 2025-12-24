import { CheckCircle2, Factory, Truck, Store, Users } from 'lucide-react'

const coreProducts = [
  { name: '云平台 iuap', role: '统一数智底座，支持专属化部署' },
  { name: '研发云 PLM', role: '实现配方数据协同与研发过程驱动' },
  { name: '制造云 MES', role: '生产全过程管理，异常预警与精益控制' },
  { name: '供应链云 S2P/P2M', role: '打通从寻源到付款、从计划到成本的闭环' },
  { name: '营销云 全渠道', role: '连接经销商、门店、用户，实现经营可视' }
]

const categories = [
  { icon: Users, label: '奶源管理', desc: '数智化牧场与奶源监测' },
  { icon: Factory, label: '生产制造', desc: '精益工厂与协同制造' },
  { icon: Truck, label: '敏捷供应', desc: '全渠道供应与冷链物流' },
  { icon: Store, label: '数智营销', desc: '全渠道经营与消费者链接' }
]

export default function SolutionOverview() {
  const description = "用友 BIP 融合端到端价值链，打破业务与管理闭环，助力乳企从单点数智化向系统级、全产业链数智化演进。"
  
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* 左侧文字描述 */}
          <div className="lg:w-1/2">
            <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
              Solution Overview
            </span>
            <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-6">
              端到端价值链融合，开启全流程数智化
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {coreProducts.map((product, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-50">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1F2329] text-sm">{product.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{product.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 右侧视觉展示 */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {categories.map((cat, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-100 group hover:border-[#0052D9]/30 hover:bg-white transition-all">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <cat.icon className="w-6 h-6 text-[#0052D9]" />
                    </div>
                    <h4 className="font-bold text-[#1F2329] mb-1">{cat.label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
