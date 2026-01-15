import { ShieldCheck, Barcode, ShoppingBag } from 'lucide-react'

const solutions = [
  {
    icon: ShieldCheck,
    title: 'GSP 合规引擎',
    description: '内建 GSP 合规逻辑，实现对首营审核、收货验收、在库养护、出库复核等全流程的自动化管控，一键生成合规报表。'
  },
  {
    icon: Barcode,
    title: '精细化 WMS',
    description: '构建基于条码与 RFID 技术的智能仓储系统，支持批号管理、效期预警与先进先出（FEFO）策略，确保药品流转安全。'
  },
  {
    icon: ShoppingBag,
    title: '医药新零售中台',
    description: '打通线下 POS 与线上电商平台，实现全渠道&quot;通兑通换&quot;，构建统一的会员中心与营销引擎，赋能私域增长。'
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">泊冉数智化解决方案</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            融合百年匠心与现代科技，打造&quot;合规+高效+体验&quot;的医药健康产业互联网平台。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
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