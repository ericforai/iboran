import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '解决方案 | 泊冉软件',
  description: '泊冉软件提供智能财务、智能制造、人力资源等全方位企业数字化解决方案',
}

const solutions = [
  {
    slug: 'lead-to-cash',
    title: 'L2C 销售到收款',
    description: '从线索到收款闭环，打通销售全流程',
    icon: '🔄',
  },
  {
    slug: 'revenue-cloud',
    title: '营收云',
    description: '用友 BIP 营收云，AI 智能对账，全球业务管理',
    icon: '💰',
  },
  {
    slug: 'finance-cloud',
    title: '财务云',
    description: '多组织报表合并与业财一体化解决方案',
    icon: '📊',
  },
  {
    slug: 'mes',
    title: 'MES 生产管理',
    description: '从设计到生产的 C2M 全链路数字化',
    icon: '🏭',
  },
  {
    slug: 'hr-cloud',
    title: '人力资源云',
    description: '入转调离全生命周期管理',
    icon: '👥',
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-[#F7F8FA] py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-slate-500 hover:text-[#0052D9] mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            返回首页
          </Link>
          <h1 className="text-4xl font-bold text-[#1F2329] mb-4">解决方案</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            基于用友产品能力，结合泊冉 12 年行业经验，为企业提供场景化数字化转型方案
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solution/${solution.slug}`}
                className="group block bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0052D9]/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h2 className="text-xl font-bold text-[#1F2329] mb-2 group-hover:text-[#0052D9] transition-colors">
                  {solution.title}
                </h2>
                <p className="text-slate-600">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
