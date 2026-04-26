'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bot, Cloud, FileCheck2, ArrowRight, CheckCircle2 } from 'lucide-react'
import { NeuCard } from '@/components/ui/neu-card'

const trinityItems = [
  {
    title: '云上经营（BIP/YonSuite）',
    desc: '销售、采购、合同、财务在线协同，经营数据实时流转。',
    icon: Cloud,
    href: '/products/yonsuite',
    accent: 'text-blue-700',
    dot: 'bg-blue-500',
  },
  {
    title: '本地存证（证据链平台）',
    desc: '关键业务自动留痕、可核验可追溯，审计与合规有据可依。',
    icon: FileCheck2,
    href: '/solution/electronic-archives',
    accent: 'text-emerald-700',
    dot: 'bg-emerald-500',
  },
  {
    title: 'AI全程护航（智能助手）',
    desc: '从线索到回款全链路提醒、分析与建议，提升执行效率。',
    icon: Bot,
    href: '/solution/business/aip-intelligent-apps',
    accent: 'text-indigo-700',
    dot: 'bg-indigo-500',
  },
]

const outcomes = [
  '业务在线流转，管理动作更快',
  '关键证据自动沉淀，审计可追溯',
  'AI 持续提醒与分析，执行更稳',
]

export const TrinityBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FC] py-14 md:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative inline-flex items-center overflow-hidden rounded-full border border-blue-200/80 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.18em]"
          >
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-[-35%] w-[35%] bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent"
              animate={{ x: ['0%', '420%'] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
            />
            <motion.span
              aria-hidden
              className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="relative z-10 bg-gradient-to-r from-slate-700 via-blue-700 to-cyan-700 bg-clip-text text-transparent">
              经营 · 存证 · AI 三位一体
            </span>
          </motion.span>
          <h2 className="mt-5 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl lg:whitespace-nowrap break-keep">
            经营在云上，证据在本地，智能贯穿全流程
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
            不做三套孤立系统，而是打通“经营-存证-AI”一体闭环：前端经营提效、中台证据固化、后端智能决策。
            <br />
            从“能用”走向“能增长”，让经营跑得快、证据立得住、决策看得准，一套体系即可快速落地见效。
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
          {trinityItems.map((item: any, index: number) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              >
                <NeuCard
                  variant="raised"
                  className="h-full border-slate-200 bg-white p-5 md:p-6"
                  interactive={false}
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white">
                        {index + 1}
                      </span>
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                        <Icon size={22} />
                      </div>
                    </div>
                    <h3 className={`text-xl font-black leading-snug ${item.accent}`}>{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    <Link
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition-colors hover:text-slate-950"
                    >
                      <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                      了解更多
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </NeuCard>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mt-7 rounded-2xl border border-slate-200 bg-white/95 p-5 backdrop-blur md:mt-9 md:p-6"
        >
          <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-base font-bold text-slate-900 md:text-lg">
                让每一笔经营都有结果，每一个结果都有证据，每一份证据都能转化为下一步增长。
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
                {outcomes.map((outcome: any) => (
                  <div
                    key={outcome}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#F97316] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#EA580C]"
              >
                预约演示
              </Link>
              <Link
                href="/solution/business/operation-evidence-ai"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                了解三位一体方案
              </Link>
            </div>
          </div>
          <div className="mt-4 border-t border-slate-200 pt-4 text-center text-xs font-medium text-slate-500">
            适用于希望同时提升经营效率、合规能力与管理决策质量的成长型企业
          </div>
        </motion.div>
      </div>
    </section>
  )
}
