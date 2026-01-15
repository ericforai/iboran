'use client'

import { motion } from 'framer-motion'

interface Metric {
  value: string
  label: string
}

interface ValueSectionProps {
  metrics: Metric[]
}

export default function ValueSection({ metrics }: ValueSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0052D9] to-[#003da8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            方案<span className="text-yellow-300">价值</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            助力专业服务机构实现数字化转型的核心价值
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-5xl font-bold text-white mb-3">
                {metric.value}
              </div>
              <div className="text-blue-100 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-lg font-semibold text-white mb-2">财务集中管控</div>
            <p className="text-blue-200 text-sm">
              多组织统一科目体系，保障全集团财务数据高效管理
            </p>
          </div>
          <div>
            <div className="text-lg font-semibold text-white mb-2">公有云部署</div>
            <p className="text-blue-200 text-sm">
              无需购买硬件软件，投入产出比高，适合成长型企业
            </p>
          </div>
          <div>
            <div className="text-lg font-semibold text-white mb-2">项目精准核算</div>
            <p className="text-blue-200 text-sm">
              项目业务与财务核算融合，实现实时精准的项目盈亏分析
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
