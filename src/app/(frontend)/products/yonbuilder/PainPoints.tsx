'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Clock, Coins, Network } from 'lucide-react'

const painPoints = [
  {
    icon: Network,
    title: '信息孤岛与系统割裂',
    symptom: '企业内部存在大量零散的烟囱式应用',
    impact: '数据无法互通，业务流程断点多，难以支撑跨部门协同，IT 架构日益复杂且僵化。',
    color: 'blue'
  },
  {
    icon: Clock,
    title: '开发周期长，响应滞后',
    symptom: '传统代码开发模式效率低下',
    impact: '动辄数月的交付周期，导致业务需求上线即过时，错失市场机遇，无法适应敏捷变化的商业环境。',
    color: 'red'
  },
  {
    icon: Coins,
    title: 'IT 成本居高不下',
    symptom: '专业开发人才稀缺且昂贵',
    impact: '大量预算消耗在基础维护和重复造轮子上，缺乏资源投入到真正的业务创新中，ROI 难以提升。',
    color: 'orange'
  },
  {
    icon: AlertCircle,
    title: '影子 IT 带来的隐患',
    symptom: '业务部门自行通过非正规渠道构建工具',
    impact: '缺乏统一管控，带来数据安全风险和合规隐患，同时增加了企业 IT 治理的难度。',
    color: 'purple'
  }
]

export default function PainPoints() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            传统开发模式已无法满足<br/>
            <span className="text-[#E60012]">数智化时代的敏捷创新需求</span>
          </h2>
          <p className="text-lg text-slate-600">
            面对瞬息万变的商业环境，企业需要更高效、更灵活的应用构建能力
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors
                ${point.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : ''}
                ${point.color === 'red' ? 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white' : ''}
                ${point.color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' : ''}
                ${point.color === 'purple' ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' : ''}
              `}>
                <point.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-[#E60012] transition-colors">
                {point.title}
              </h3>
              
              <div className="mb-4">
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  症状
                </span>
                <p className="text-sm text-slate-600 mt-2">
                  {point.symptom}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded">
                  后果
                </span>
                <p className="text-sm text-slate-600 mt-2">
                  {point.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
