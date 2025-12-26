'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, TrendingUp } from 'lucide-react'

const stats = [
  { label: '服务组织', value: '50,000+', desc: '中大型组织共同选择', icon: <Briefcase className="w-6 h-6" /> },
  { label: '行业覆盖', value: '100+', desc: '深耕政务、金融、制造等行业', icon: <TrendingUp className="w-6 h-6" /> },
  { label: '信创认证', value: '300+', desc: '国产基础软硬件适配认证', icon: <Award className="w-6 h-6" /> }
]

const cases = [
  {
    company: '中国石油',
    industry: '能源集团',
    challenge: '超大型组织沟通壁垒，跨部门协作效率受限。',
    result: '审批效率提升 [50]%+，跨部会协作效率提升 [40]%。',
    tags: ['流程再造', '集团管控']
  },
  {
    company: '光大银行',
    industry: '金融机构',
    challenge: '全国分支机构管理不一，资源调用不透明。',
    result: '实现 36 个网点异构系统考勤集成，资源 100% 透明化运行。',
    tags: ['系统集成', '实时报表']
  },
  {
    company: '滴滴出行',
    industry: '互联网企业',
    challenge: '组织架构变动频繁，流程引擎需高弹性支撑。',
    result: '基于 A8 灵活架构，支撑了滴滴多次大规模组织变革的平稳过渡。',
    tags: ['灵活定制', '高并发']
  }
]

export default function TrustProof() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-[#E60012] mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-[#1F2329] mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-slate-800 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Case Cards */}
        <h2 className="text-3xl font-bold text-[#1F2329] mb-12 text-center">行业先锋的实战见证</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1F2329]">{item.company}</h3>
                  <span className="text-xs text-[#0052D9] font-bold bg-blue-50 px-2 py-0.5 rounded italic">{item.industry}</span>
                </div>
                <div className="flex-grow text-right">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded ml-1 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">面临挑战</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">交付价值</div>
                  <p className="text-sm text-[#E60012] font-medium leading-relaxed">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
