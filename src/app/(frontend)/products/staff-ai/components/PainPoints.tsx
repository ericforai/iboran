'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, EyeOff, BookX, Users, TrendingDown } from 'lucide-react'

const points = [
  {
    icon: ShieldAlert,
    title: '权限不清',
    desc: '无法界定谁能访问哪类核心业务数据，谁能调用昂贵的大模型算力算力资源调度。',
    color: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    icon: EyeOff,
    title: '过程不可见',
    desc: '模型推理过程如同黑匣子，员工如何使用 AI、逻辑是否合规，管理层处于完全盲区。',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    icon: BookX,
    title: '知识不沉淀',
    desc: '员工离职或更换账号，长期调优出的优质 Prompt 和行业经验随之归零。',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: Users,
    title: '协同能力混乱',
    desc: '跨部门使用缺乏统一标准，各自为战，形成新的能力孤岛。',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    icon: TrendingDown,
    title: '成本不可控',
    desc: 'Token 消耗如同流水，缺乏预算熔断机制与精准的 ROI 核算体系。',
    color: 'bg-slate-50 text-slate-600 border-slate-100',
  },
]

export const PainPoints = () => {
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
            AI 试点中常见的 <span className="text-[#E60012]">5 个失控点</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-500"
          >
            在员工认为“偶尔好用”和企业要求的“稳定规模化产出”之间，隔着极其复杂的系统性断层。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-col rounded-2xl border-2 p-8 transition-all hover:shadow-xl ${point.color}`}
            >
              <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                <point.icon size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">{point.title}</h3>
              <p className="leading-relaxed text-slate-600 flex-grow">{point.desc}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center rounded-2xl bg-slate-900 p-8 text-center text-white shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-50" />
            <div className="relative z-10">
              <div className="mb-4 text-5xl font-black text-blue-400 group-hover:scale-110 transition-transform">90%</div>
              <p className="text-slate-300 font-bold text-lg mb-2">个人级工具的断层率</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                只有跨越从“工具”到“系统”的鸿沟，才能真正将 AI 转化为企业的组织能力。
              </p>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
