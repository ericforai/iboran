'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArchitectureDiagram } from './ArchitectureDiagram'

export const Architecture = () => {
  return (
    <section id="architecture" className="py-16 md:py-32 bg-white px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight"
            >
              端到端投标全链路<br />数字化管控架构
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed font-medium"
            >
              智投 Pro 打通了
              <span className="text-blue-600 font-extrabold px-1">数据采集</span>、
              <span className="text-teal-600 font-extrabold px-1">智能评分</span>、
              <span className="text-indigo-600 font-extrabold px-1">标准投制作</span>与
              <span className="text-emerald-600 font-extrabold px-1">经营沉淀</span>
              的完整治理闭环。
            </motion.p>

            <ul className="space-y-6">
              {[
                { label: '多端自动化采集', desc: '全天候聚合 3,000+ 招采平台与行业公告' },
                { label: 'BAR 智能初评模型', desc: '核心围绕“能不能投、赢面多大”提供量化依据' },
                { label: 'AI 合规质量管控', desc: '自动扫描标书红线项与废标高风险点' }
              ].map((item: any, i: number) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2.5 group-hover:scale-150 transition-transform shadow-sm" />
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-bold text-xl">{item.label}</span>
                    <span className="text-slate-500 text-lg font-medium">{item.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full scale-100 origin-center lg:origin-right bg-slate-50/50 rounded-[40px] p-6 md:p-8 border border-slate-100 shadow-inner">
            <ArchitectureDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
