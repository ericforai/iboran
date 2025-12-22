import { Wallet, Building, LineChart } from 'lucide-react'

const featureGroups = [
  {
    title: "资金可视化管理",
    subtitle: "实时掌握，一目了然",
    icon: Wallet,
    features: [
      { title: "银企直联", desc: "对接 100+ 银行，账户余额、流水实时同步，资金状况一屏掌握。" },
      { title: "统一支付平台", desc: "多银行支付统一入口，智能路由选择最优通道，支付效率提升 80%。" },
      { title: "资金监控大屏", desc: "集团资金实时监控，异常交易预警，风险敞口可视化，管理驾驶舱。" }
    ]
  },
  {
    title: "资金集中管理",
    subtitle: "归集调拨，高效运营",
    icon: Building,
    features: [
      { title: "资金池管理", desc: "跨银行、跨区域资金池运作，自动归集、智能调拨，沉淀资金最小化。" },
      { title: "内部银行", desc: "集团内部资金调剂，虚拟账户管理，提升资金使用效率，降低融资成本。" },
      { title: "多币种管理", desc: "外币资金统一管理，汇率风险监控，套期保值工具支持，规避汇兑损失。" }
    ]
  },
  {
    title: "投融资决策支持",
    subtitle: "智能分析，科学决策",
    icon: LineChart,
    features: [
      { title: "现金流预测", desc: "业财融合的现金流预测模型，滚动预测、偏差分析，提升预测准确率。" },
      { title: "融资管理", desc: "融资台账、借贷管理、利息计算，融资成本全程可控，优化融资结构。" },
      { title: "投资理财", desc: "理财产品管理、收益分析，闲置资金增值，资金保值增值两不误。" }
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">TRM 核心管理能力</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            构建集团司库管理体系，实现资金可视化、集中化、智能化，助力企业资金价值最大化。
          </p>
        </div>

        <div className="space-y-16">
          {featureGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0052D9]">
                  <group.icon size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2329]">{group.title}</h3>
                  <p className="text-[#0052D9] font-medium">{group.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {group.features.map((feature, featureIdx) => (
                  <div 
                    key={featureIdx}
                    className="p-8 bg-[#F7F8FA] rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-[#1F2329] mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#E60012] rounded-full" />
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
              
              {groupIdx < featureGroups.length - 1 && (
                <div className="absolute left-6 -bottom-10 w-0.5 h-8 bg-slate-100 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
