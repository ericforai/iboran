import { 
  Target, 
  ShoppingCart, 
  Truck, 
  Megaphone, 
  Store, 
  Package,
  Network
} from 'lucide-react'

const features = [
  {
    icon: Target,
    title: "CRM 销售闭环管理",
    desc: "从线索、商机、报价到合同、项目的全生命周期管理，实现销售过程可视化。",
    highlight: "全流程追踪"
  },
  {
    icon: ShoppingCart,
    title: "B2B 在线交易",
    desc: "为分销商/代理商打造数字化商城，订单、价格、资金一体化管理。",
    highlight: "数字化商城"
  },
  {
    icon: Truck,
    title: "销售与供应链履约一体化",
    desc: "标准/定制订单统一处理，采购、发货、开票、跨组织交易协同运作。",
    highlight: "产销协同"
  },
  {
    icon: Megaphone,
    title: "营销活动与费用管理",
    desc: "预算编制、活动执行、费用结算、返利核算端到端管控。",
    highlight: "费控一体化"
  },
  {
    icon: Store,
    title: "全渠道零售 (OMO)",
    desc: "线下门店与线上渠道融合，实时补货、仓储管理，打造无缝消费体验。",
    highlight: "线上线下融合"
  },
  {
    icon: Package,
    title: "电商订单中心",
    desc: "集中处理天猫、京东等多平台 B2C 订单，对接 WMS 与售后系统。",
    highlight: "多平台整合"
  },
  {
    icon: Network,
    title: "全链路 B2B2b2C 营销",
    desc: "从品牌商到各级经销商再到终端会员，营销政策统一、交易协同一体。",
    highlight: "多级分销"
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">七大核心能力模块</h2>
          <div className="w-16 h-1 bg-[#0052D9] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            L2C 解决方案提供覆盖销售全场景的功能模块，满足不同行业、不同规模企业的个性化需求。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-xl hover:border-[#0052D9]/30 transition-all group relative overflow-hidden"
            >
              {/* Highlight badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-semibold text-[#0052D9] bg-blue-50 px-2 py-1 rounded">
                  {item.highlight}
                </span>
              </div>
              
              <div className="w-14 h-14 bg-gradient-to-br from-[#0052D9] to-blue-400 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-200">
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-2 pr-16">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
