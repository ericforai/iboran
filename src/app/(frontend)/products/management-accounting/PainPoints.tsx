'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, Clock, ShieldAlert } from 'lucide-react'

const painPoints = [
  {
    icon: <AlertCircle className="w-8 h-8 text-red-500" />,
    title: '业财数据脱节',
    symptom: '业务系统与财务核算不同源，需大量人工对账。',
    consequence: '对账周期长，财务报表严重滞后，管理决策缺乏数据支撑。',
    color: 'bg-red-50'
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-orange-500" />,
    title: '成本核算粗放',
    symptom: '无法实现分层成本计算，难以穿透到底层明细。',
    consequence: '无法准确评估各产品、各订单的真实获利能力，导致错失降本机会。',
    color: 'bg-orange-50'
  },
  {
    icon: <Clock className="w-8 h-8 text-yellow-600" />,
    title: '月结周期漫长',
    symptom: '依赖结转自动化程度低，跨组织协同高度依赖邮件。',
    consequence: '月初 10 号才出数，错失市场反应先机，运营响应龟速。',
    color: 'bg-yellow-50'
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-purple-600" />,
    title: '复杂规则执行难',
    symptom: '外报合规与内部考核双目标难以平衡。',
    consequence: '为了合规牺牲管理精细度，或者为了管理导致合规风险。',
    color: 'bg-purple-50'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
             为什么传统财务体系难以支撑您的全球扩张？
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            在快速多变的市场环境中，落后的成本核算方法正成为企业降本增效的“隐形杀手”。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl border border-slate-100 ${item.color} group hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">现状描述</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.symptom}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/50">
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">负面影响</p>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{item.consequence}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
