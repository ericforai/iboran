import { Link, Wallet, TrendingUp } from 'lucide-react'

const solutions = [
  {
    icon: Link,
    title: 'ERP + 旺店通深度集成',
    description: '打通 ERP 与电商 OMS（旺店通），实现多平台订单自动下载、库存实时同步与物流状态回传，构建全渠道履约中枢。'
  },
  {
    icon: Wallet,
    title: '营销费控闭环体系',
    description: '建立从费用预算、申请、投放到核销的全流程在线管控平台，支持按渠道、按品类进行多维度的 ROI 实时分析。'
  },
  {
    icon: TrendingUp,
    title: '产销协同计划 (S&OP)',
    description: '基于大数据的销量预测模型，拉通销售计划与生产排程，实现“以销定产”与“快速补货”，提升供应链柔性。'
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold tracking-wider text-sm uppercase">Our Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">泊冉数智化解决方案</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            以“连接”与“数据”为核心，为光合植造打造适配新消费快节奏的数字化运营底座。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-yellow-100 transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
