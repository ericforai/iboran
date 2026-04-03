'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Download } from 'lucide-react'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-14 sm:pt-32 sm:pb-20 overflow-hidden bg-white">
      {/* Background Decor (Light Theme) */}
      <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(59,130,246,0.05)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-bold shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          智投 Pro 2.0 全新发布
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 sm:mb-8 tracking-tight leading-[1.12] md:leading-[1.1] px-1"
        >
          智投 Pro｜企业级投标管理<br />与增长平台
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed font-medium px-1"
        >
          从全网标讯追踪到 <span className="text-blue-600 font-bold">AI 标书自动生成</span>，
          智投 Pro 驱动投标全链路数字化治理，<br className="hidden md:block" />
          让赢标从个人经验转变为可复制的企业组织能力。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto mb-12 sm:mb-20 px-1"
        >
          <Link 
            href="/contact"
            className="min-h-14 h-14 w-full sm:w-auto justify-center px-8 sm:px-10 rounded-full bg-blue-600 text-white font-bold text-base sm:text-lg hover:bg-blue-700 active:bg-blue-800 transition-all shadow-xl shadow-blue-600/20 inline-flex items-center gap-2 group touch-manipulation"
          >
            预约产品演示
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
          <button
            type="button"
            className="min-h-14 h-14 w-full sm:w-auto justify-center px-8 sm:px-10 rounded-full border border-slate-200 bg-white text-slate-700 font-bold text-base sm:text-lg hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100 transition-all inline-flex items-center gap-2 shadow-sm touch-manipulation"
          >
            <Download size={20} className="shrink-0" />
            立即下载产品简介
          </button>
        </motion.div>

        {/* Feature Highlights Bar (Light) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-8 px-5 sm:py-10 sm:px-8 bg-slate-50/80 border border-slate-100 rounded-2xl sm:rounded-3xl backdrop-blur-sm max-w-5xl mx-auto shadow-sm"
        >
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <span className="text-slate-900 font-extrabold text-xl">AI 标书自动生成</span>
            <span className="text-slate-500 text-[15px] font-medium leading-normal">基于大模型与企业知识库，一键生成高质量投标大纲与初稿</span>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left border-y md:border-y-0 md:border-x border-slate-200 py-6 md:py-0 md:px-8">
            <span className="text-slate-900 font-extrabold text-xl">过程可度量</span>
            <span className="text-slate-500 text-[15px] font-medium leading-normal">任务监控、合规检查与评分机制全面内置，质量可视</span>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <span className="text-slate-900 font-extrabold text-xl">企业可治理</span>
            <span className="text-slate-500 text-[15px] font-medium leading-normal">权限体系、安全审计与配置化适配大中型组织规则</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
