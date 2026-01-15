import { FileCheck, Link as LinkIcon, Store } from 'lucide-react'

const challenges = [
  {
    icon: FileCheck,
    title: '强合规压力 (GSP)',
    description: '药品经营质量管理规范（GSP）对药品的采购、验收、储存、养护、销售等环节提出了严苛要求，人工管理批次与效期极易出错，合规审计成本高。'
  },
  {
    icon: LinkIcon,
    title: '供应链全程追溯难',
    description: '中药材涉及产地、年份、等级等复杂属性，且加工过程涉及多次拆包与分装，现有系统难以实现从"田间"到"舌尖"的全程追溯。'
  },
  {
    icon: Store,
    title: '全渠道融合受阻',
    description: '线下门店与天猫、京东等线上渠道数据割裂，库存无法共享，会员权益不互通，难以构建统一的品牌体验与私域流量池。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">转型前的核心痛点</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
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