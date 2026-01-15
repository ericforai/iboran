import { Database, Truck, Search } from 'lucide-react'

const challenges = [
  {
    icon: Database,
    title: '数据孤岛与断点',
    description: '各工厂使用不同的 ERP 版本与 MES 系统，导致集团无法实时获取统一的库存、生产与质量数据，决策严重滞后。'
  },
  {
    icon: Truck,
    title: '供应链响应迟缓',
    description: '上游数百家供应商依然依赖邮件与电话沟通排程，需求变动传导慢，极易造成缺料停线或库存积压的双重风险。'
  },
  {
    icon: Search,
    title: '生产过程不透明',
    description: '车间黑箱作业，设备状态与在制品（WIP）信息无法实时采集，难以满足整车厂对关键零部件的全生命周期追溯要求。'
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