'use client'

import { Star, TrendingUp, Users, ShieldCheck } from 'lucide-react'

const stats = [
  { label: '服务客户', value: '500+', desc: '跨行业大型企业实践' },
  { label: '流程实例', value: '1.2亿', desc: '平台安全稳定流转量' },
  { label: '平均提效', value: '35%', desc: '业务审批周期缩短' },
  { label: '合规追溯', value: '100%', desc: '全过程留痕与审计' }
]

const cases = [
  {
    industry: '离散制造',
    title: '某全球领先电子零部件厂商',
    content: '通过 BPM 深度集成 SAP 系统，将原本分散在 3 个国家的 20 余道生产变更流程标准化，审批时间由 5 天缩短至 24 小时以内，极大提升了供应链响应能力。',
    result: '成本降低 15%，效率提升 80%'
  },
  {
    industry: '现代服务',
    title: '国内百强物管集团',
    content: '利用移动 BPM 实现了全国近百个项目的现场品质巡检与工程报修自动化。前端照片采集通过 AI 自动分类，后端形成管理闭环，彻底杜绝了虚假打卡。',
    result: '品质合规率提升至 99%'
  }
]

export default function TrustProof() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">他们正在使用泊冉 BPM 驱动增长</h2>
            <p className="text-slate-600">
              从中国 500 强到细分行业领军者，BPM 平台已在制造、服务、高科技等多个领域完成深度交付。
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#E60012] font-bold">
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <span className="ml-2 text-slate-900 text-sm">4.9/5 客户推荐度</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-xl border-b-4 border-blue-600">
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-blue-600 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((card, idx) => (
            <div key={idx} className="p-8 bg-white border border-slate-200 rounded-2xl flex flex-col hover:border-blue-400 transition shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                <Users size={14} />
                {card.industry}行业案例
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                {card.content}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-600 font-bold">
                  <TrendingUp size={18} />
                  <span className="text-sm">{card.result}</span>
                </div>
                <button className="text-slate-400 hover:text-blue-600 text-xs font-bold transition">
                  查阅案例详情 &gt;
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition duration-500">
          {/* Logo Placeholders */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <ShieldCheck size={32} />
              <div className="font-bold text-xl tracking-tighter">PARTNER_{i}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
