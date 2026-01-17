'use client'

import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'

const scenarios = [
  {
    stage: '商机沟通',
    traditional: '问销售：能不能签这个品类？销售去翻 Excel',
    digital: '移动端余量查询：手机一键查看全球授权地图',
    value: '抢占商机：响应速度从天缩短至秒'
  },
  {
    stage: '设计审核',
    traditional: '微信、邮件传图，反馈周期 1-2 周，版本混乱',
    digital: '在线 SOP 审批：在线标注修改意见，历史版本可追溯',
    value: '加速上市：SKU 孵化周期缩短 40%'
  },
  {
    stage: '分成核算',
    traditional: '财务根据 Excel 对表，算错、漏算、欠款难查',
    digital: '自动核算引擎：数据录入即生成凭证，自动催款预警',
    value: '财务稳健：资金回笼率提升 30%'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">核心业务场景：从创意到现金流</h2>
          <div className="w-16 h-1 bg-[#0052D9] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            传统模式 vs 泊冉数智模式，效率差异一目了然
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 mb-6 px-6 text-sm font-bold text-slate-500 uppercase tracking-wider">
            <div>场景阶段</div>
            <div className="text-red-500">传统模式</div>
            <div className="text-[#0052D9]">泊冉数智模式</div>
            <div className="text-green-600">关键价值</div>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {scenarios.map((scenario, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F7F8FA] rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  {/* Stage */}
                  <div>
                    <span className="inline-block px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-bold">
                      {scenario.stage}
                    </span>
                  </div>

                  {/* Traditional */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X size={14} className="text-red-500" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{scenario.traditional}</p>
                  </div>

                  {/* Digital */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-[#0052D9]" />
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{scenario.digital}</p>
                  </div>

                  {/* Value */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={14} className="text-green-600" />
                    </div>
                    <p className="text-green-700 text-sm leading-relaxed font-semibold">{scenario.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
