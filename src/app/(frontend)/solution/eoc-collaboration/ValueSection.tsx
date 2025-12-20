'use client'

import { motion } from 'framer-motion'

export default function ValueSection() {
  const values = [
    { label: '协同效率提升', value: '30%', suffix: '+', desc: '全组织范围内的业务处理效率显著增强' },
    { label: '审批周期缩短', value: '50%', suffix: '', desc: '基于 AI 的流程优化，大幅减少等待时间' },
    { label: '知识获取速度', value: '40%', suffix: '↑', desc: '统一门户与智能检索，让经验随手可得' },
    { label: '应用上线周期', value: '7', suffix: '天内', desc: '低代码平台赋能，快速响应业务变动' },
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
              协同无界，数智有方
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              EOC 通过 AI 助手与一体化门户，重构企业协作底座，释放组织创造力
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

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-[#E60012]/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E60012]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 rounded-full bg-[#E60012]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">全方位的 AI 伴随式服务</h3>
              <p className="text-slate-400 leading-relaxed">
                “智友” AI 助手深度嵌入 IM、邮件、会议等办公场景。它不仅能提供智能回复，更能理解业务上下文，自动发起流程审批、总结会议纪要并智能生成待办事项，让每位员工都拥有一个贴身助理。
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-[#0052D9]/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0052D9]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 rounded-full bg-[#0052D9]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">低代码构建敏捷组织</h3>
              <p className="text-slate-400 leading-relaxed">
                面对复杂多变的业务需求，EOC 协同应用构建平台提供丰富的模板与拖拽式工具。无需专业编码，业务管理者即可快速搭建行政办公、费控报销、资产管理等协同应用，极大缩短数字化建设半径。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
