'use client'

import { motion } from 'framer-motion'
import { Building2, Quote, CheckCircle2 } from 'lucide-react'

interface Case {
  company: string
  industry: string
  scale: string
  challenge: string
  solution: string
  result: string
  quote?: string
}

interface IndustryCasesProps {
  cases: Case[]
}

export default function IndustryCases({ cases }: IndustryCasesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1F2329] mb-4">
            客户<span className="text-[#E60012]">成功案例</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            助力众多专业服务机构实现数字化转型
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0052D9] to-[#0052D9]/80 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2329]">{caseItem.company}</h3>
                  <div className="flex gap-3 mt-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                      {caseItem.industry}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                      {caseItem.scale}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-red-50/50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-red-600 mb-2">业务挑战</h4>
                  <p className="text-slate-600 text-sm">{caseItem.challenge}</p>
                </div>
                <div className="bg-blue-50/50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-blue-600 mb-2">解决方案</h4>
                  <p className="text-slate-600 text-sm">{caseItem.solution}</p>
                </div>
                <div className="bg-green-50/50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-green-600 mb-2">实施成果</h4>
                  <p className="text-slate-600 text-sm">{caseItem.result}</p>
                </div>
              </div>

              {/* Quote */}
              {caseItem.quote && (
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                  <Quote className="w-6 h-6 text-[#0052D9] flex-shrink-0 mt-1" />
                  <p className="text-slate-700 italic">&quot;{caseItem.quote}&quot;</p>
                </div>
              )}

              {/* Success Indicator */}
              <div className="flex items-center gap-2 mt-6 pt-6 border-t border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-slate-600">项目已成功上线运行</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
