'use client'

import { motion } from 'framer-motion'
import { Award, Star, Quote } from 'lucide-react'

const honors = [
  {
    title: 'Gartner',
    desc: '全球 ERP SaaS 市场亚太区厂商排名靠前',
    icon: <Award className="w-8 h-8 text-[#E60012]" />
  },
  {
    title: 'IDC',
    desc: '中国应用平台化云服务 (APaaS) 市场份额位居前列',
    icon: <Star className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: 'CCID',
    desc: '全球企业级应用软件 TOP10 中少数上榜中国厂商',
    icon: <Award className="w-8 h-8 text-[#E60012]" />
  }
]

const cases = [
  {
    company: '闺蜜时代',
    industry: '电商行业',
    result: '通过 YonSuite 实现了业财一体化集成，管理标准化程度提升 [50]%，数据可视化助力高效决策。',
    tag: '成长型标杆'
  },
  {
    company: '陆兴号',
    industry: '酒饮行业',
    result: '构建数智化供应链，支撑全球化经营战略，跨境业务协同速度提升 [40]%。',
    tag: '跨境创新'
  }
]

export default function TrustProof() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Industry Honors */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {honors.map((honor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="inline-flex items-center justify-center mb-4">
                {honor.icon}
              </div>
              <h4 className="text-xl font-bold text-[#1F2329] mb-2">{honor.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{honor.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Cards */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#1F2329]">客户信赖与成功案例</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-2 py-1 bg-red-50 text-[#E60012] text-xs font-bold rounded mb-2 inline-block">
                      {cs.industry}
                    </span>
                    <h4 className="text-xl font-bold text-[#1F2329]">{cs.company}</h4>
                  </div>
                  <Quote className="w-8 h-8 text-slate-100" />
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">“{cs.result}”</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-8 bg-[#0052D9]"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cs.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
