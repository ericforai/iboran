import { Users, Wrench, PackageX } from 'lucide-react'

const challenges = [
  {
    icon: Users,
    title: '客户画像模糊',
    description: '客户数据分散在销售、售后、财务等多个孤立系统中，缺乏统一的 360 度客户视图，难以进行精准的二次营销与关怀。'
  },
  {
    icon: Wrench,
    title: '服务响应被动',
    description: '售后服务高度依赖人工派单，维修进度不透明，工程师技能与工单匹配度低，一次修复率（FTFR）有待提升。'
  },
  {
    icon: PackageX,
    title: '备件库存黑洞',
    description: '备件需求预测主要靠经验，导致部分常用备件缺货严重，而长尾备件却大量积压，库存周转率低。'
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