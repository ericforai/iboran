import { Globe, ShoppingCart, RefreshCw, Truck, Tag, Receipt, Wallet, PieChart } from 'lucide-react'

const features = [
  {
    title: "全球开店",
    description: "全球平台一键开店，全量商品自动上架。",
    icon: Globe,
  },
  {
    title: "订单在线",
    description: "全平台订单同步，实时在线，售后便捷处理。",
    icon: ShoppingCart,
  },
  {
    title: "智能对账",
    description: "订单资金智能对账，业务营收全量稽核。",
    icon: RefreshCw,
  },
  {
    title: "履约跟踪",
    description: "头程尾程全链跟踪，物流成本智能计算。",
    icon: Truck,
  },
  {
    title: "营销费用",
    description: "平台费用智能分析，促销优惠自动分摊。",
    icon: Tag,
  },
  {
    title: "税务管控",
    description: "价税自动分离，税务直连开票，自动上传。",
    icon: Receipt,
  },
  {
    title: "全球收款",
    description: "境内外收款直连，外汇风险管控。",
    icon: Wallet,
  },
  {
    title: "智能入账",
    description: "收入成本自动核算，资金回款自动入账。",
    icon: PieChart,
  }
]

const stats = [
  { value: '50+', label: '跨境电商' },
  { value: '60+', label: '本地生活' },
  { value: '80+', label: '线下商超' },
  { value: '300+', label: '境内电商' },
]

export default function FeatureHub() {
  return (
    <section className="py-24 bg-[#1F2329] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">一点连全，全球做生意</h2>
            <p className="text-slate-400 max-w-xl">
              支撑跨境电商、即时零售、线下商超、境内电商等多业态。全流程、全场景的数字化收入管理。
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="text-2xl font-bold text-[#E60012]">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-[#E60012]/50 hover:bg-slate-800/80 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-[#E60012] group-hover:bg-[#E60012] group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
