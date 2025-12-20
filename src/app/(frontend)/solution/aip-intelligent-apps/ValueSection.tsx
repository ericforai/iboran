'use client'

import { motion } from 'framer-motion'

export default function ValueSection() {
  const values = [
    { label: '业务处理效率', value: '30%', suffix: '+', desc: '全组织范围内的智能化协同效率显著提升' },
    { label: '典型审批周期', value: '50%', suffix: '↓', desc: 'AI 自动预审与流程优化，大幅缩短流转时间' },
    { label: '知识检索准确度', value: '95', suffix: '%', desc: '基于 RAG 的专业知识回答，助力快速决策' },
    { label: '场景上线周期', value: '5', suffix: '天内', desc: '标准化组件与低代码工具实现快速部署' },
  ]

  return (
    <section className="py-24 bg-[#1F2329] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E60012]/10 blur-[120px] -z-0 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              释放智能潜力，驱动业务跃迁
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              AIP 通过全栈智能化能力，重构企业核心生产力，让技术价值转化为业务红利
            </motion.p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#E60012] mb-3 flex items-baseline justify-center">
                  {item.value}
                  <span className="text-xl font-medium ml-1">{item.suffix}</span>
                </div>
                <div className="text-lg font-semibold mb-2">{item.label}</div>
                <div className="text-sm text-slate-500">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 lg:p-10 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-[#E60012]/50 transition-colors group">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block px-3 py-1 rounded bg-[#E60012]/20 text-[#E60012] text-xs font-bold mb-4">典型案例：鞍山钢铁</div>
                <h3 className="text-2xl font-bold mb-4 text-white">鞍云智鼎：全组织数智化知识管理</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  鞍钢集团通过 AIP 构建了涵盖集团、分厂、车间、班组的多维知识库。实现了设备故障的 AI 智能诊断、班报内容的自动生成，将沉淀了几十年的专家经验转化为可被 AI 实时调用的“活资产”。
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-xs">AI+ 场景识别 17 个</div>
                  <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-xs">诊断准确率显著提升</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
