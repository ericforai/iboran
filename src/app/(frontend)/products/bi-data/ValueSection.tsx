
'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    value: '80%',
    label: '报表开发效率提升',
    desc: '从IT开发转变为业务自助构建'
  },
  {
    value: '99%以上',
    label: '移动端充分适配',
    desc: '一次设计，PC、App、H5多端自动发布'
  },
  {
    value: '10+',
    label: '预置行业大屏模板',
    desc: '开箱即用，分钟级搭建专业指挥中心'
  },
  {
    value: '12+',
    label: '财务业务函数',
    desc: '专为财务分析打造，精确还原核算口径'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            不仅仅是工具，更是经营管理的新范式
          </h2>
          <p className="text-lg text-slate-300">
            用友 BIP 智能分析平台帮助企业构建数据驱动的决策闭环，实现从经验管理到科学决策的跨越
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 border border-slate-800 rounded-2xl bg-slate-900/50 hover:bg-slate-800 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {item.value}
              </div>
              <div className="text-xl font-bold text-white mb-2">
                {item.label}
              </div>
              <div className="text-sm text-slate-400">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
