'use client'

import { motion } from 'framer-motion'
import { FileText, Cpu, Link, Smartphone, CpuIcon, ShieldCheck } from 'lucide-react'

const capabilities = [
  {
    title: '无纸化办公',
    desc: '覆盖公文、审批、会议、门户等全场景，提升组织协作效能。',
    icon: <FileText className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: 'CAP 低代码平台',
    desc: '业务人员可通过拖拽快速搭建人事、财务、项目等业务应用。',
    icon: <Cpu className="w-8 h-8 text-[#E60012]" />
  },
  {
    title: '异构系统集成',
    desc: '提供成熟插件，快速连接 ERP、HR、CRM 系统，消除信息孤岛。',
    icon: <Link className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '移动协同 M3',
    desc: '自有 App M3 深度集成微信、钉钉、飞书，实现随时随地办公。',
    icon: <Smartphone className="w-8 h-8 text-[#E60012]" />
  },
  {
    title: 'AI 智能助手“小致”',
    desc: '结合 AI 能力实现人机对话、智能检索，主动安排协同任务。',
    icon: <CpuIcon className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '全栈信创适配',
    desc: '从 OS、数据库到中间件、芯片全链路国产化适配，保障底座安全。',
    icon: <ShieldCheck className="w-8 h-8 text-[#E60012]" />
  }
]

export default function Capabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">核心能力清单</h2>
          <p className="text-slate-600 italic">“不只是 OA，更是支撑组织数智化转型的协同运营平台。”</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">{cap.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
