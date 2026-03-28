'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, HardDrive, Cpu, RefreshCw, Layers, Terminal } from 'lucide-react'

const specs = [
  {
    icon: Terminal,
    title: '独立 Docker 沙箱',
    desc: '每一次复杂的 AI 任务代码执行与敏感数据处理，都被严格封装在独立沙箱中，物理级别隔离。',
    tag: '内核层',
  },
  {
    icon: RefreshCw,
    title: 'Checkpoint 持久化',
    desc: '支持任务状态备份，即使遭遇网络异常或服务意外中断，任务也能从断点无损恢复。',
    tag: '执行层',
  },
  {
    icon: ShieldCheck,
    title: '统一工具网关',
    desc: '智能捕捉底层大模型的幻觉与格式错乱，实现优雅降级与错误治理，应对高并发。',
    tag: '网关层',
  },
  {
    icon: Layers,
    title: 'UAD 统一协议',
    desc: '打通不同 Agent 之间的数据与能力壁垒，实现“人才即 App”，实现低成本横向扩展。',
    tag: '协议层',
  },
]

export const TechSpecs = () => {
  return (
    <section className="bg-slate-50 py-24 px-4 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl"
          >
            从架构设计就是 <span className="text-[#0052D9]">生产环境思维</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-500"
          >
            摒弃脆弱的 Demo 级架构。StaffAI 为企业提供高并发、高可用、高安全的工业级 Agent 执行环境。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="mb-6 flex justify-between items-start">
                 <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#0052D9] flex items-center justify-center group-hover:bg-[#0052D9] group-hover:text-white transition-all">
                    <spec.icon size={24} />
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100 px-2 py-1 rounded-md">{spec.tag}</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">{spec.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                 {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: '并发支撑', val: '10,000+' },
             { label: '任务恢复率', val: '100%' },
             { label: '安全审计精度', val: '毫秒级' },
             { label: '专家包覆盖', val: '144+' },
           ].map((item, i) => (
             <div key={i} className="text-center group p-4 border-r border-slate-200 last:border-0">
                <div className="text-3xl font-black text-[#0052D9] mb-2 group-hover:scale-110 transition-transform">{item.val}</div>
                <div className="text-xs font-bold text-slate-400 uppercase">{item.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
