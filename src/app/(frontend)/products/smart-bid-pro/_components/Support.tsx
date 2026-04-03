'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Minus, 
  ChevronRight, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Lock, 
  Globe,
  FileDown
} from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: '智投 Pro 如何实现 AI 自动生成标书？',
    answer: '系统集成深度学习模型与企业知识库，支持一键识别招标文件关键需求，并自动生成适配的投标大纲、业务方案初稿及资质材料拼装方案，显著提升编制效率。'
  },
  {
    question: '智投 Pro 的标讯覆盖范围有哪些？',
    answer: '我们实时聚合全国各省、市、区（县）级公共资源交易中心、民政采购平台及上千个大型国央企招采信息，支持行业分类过滤与竞争对手标的关联分析。目前已覆盖 3,000+ 核心数据源。'
  },
  {
    question: '如何保证我们投标文件的安全性与合规性？',
    answer: '系统支持私有化部署方案，确保核心数据不出企业局域网。同时内置多级权限管理、文件动态加密及全文操作审计日志，符合金融与军工级安全合规标准。'
  },
  {
    question: '对于跨部门协作，系统有哪些针对性优化？',
    answer: '内置标准 PDCA 投标项目流，集成任务看板与“谁在做什么、截止时间、潜在风险”的可视化追踪。支持商务、技术、财务的异步协作分发与自动化催办。'
  },
  {
    question: '可以集成现有的 ERP 或 OA 系统吗？',
    answer: '支持！我们提供标准的 RESTful API 与 SSO 统一身份对接，支持钉钉、企业微信、飞书等主流协同平台的深度消息集成与流程打通。'
  },
  {
    question: 'AI 合规性检查具体如何降低废标风险？',
    answer: '系统利用 LLM 与行业知识库模型，自动扫描标书文本，发现资质过期、硬性废标点缺失、内容逻辑冲突等细节风险。质量评分机制让经验积累变为可度量的组织能力。'
  }
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 px-6 bg-white border-t border-slate-100">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">常见问题 (FAQ)</h2>
          <p className="text-slate-600 text-xl font-medium">解答您在选择与使用过程中最关心的技术与业务细节。</p>
        </div>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} id={`faq-item-${i}`} className={`border rounded-[32px] overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-blue-200 bg-blue-50/30 shadow-md' : 'border-slate-100 bg-white shadow-sm'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <span className={`font-extrabold text-xl tracking-tight transition-colors ${openIndex === i ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>{f.question}</span>
                <div className={`p-2 rounded-xl transition-all duration-300 ${openIndex === i ? 'bg-blue-600 rotate-180 shadow-lg shadow-blue-600/20' : 'bg-slate-100 rotate-0'}`}>
                   {openIndex === i ? <Minus size={20} className="text-white" /> : <Plus size={20} className="text-slate-400" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-600 text-lg font-medium leading-relaxed border-t border-blue-100/50 pt-6">
                      {f.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Resources = () => {
    return (
        <section id="resources" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
             {/* Decor */}
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
             
            <div className="container max-w-7xl mx-auto">
                <div className="p-12 md:p-20 bg-white border border-slate-100 shadow-2xl rounded-[64px] flex flex-col items-center text-center relative z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_50%_0%,rgba(59,130,246,0.05)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl flex flex-col items-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">开启您的业务增长引擎</h2>
                        <p className="text-slate-600 text-xl md:text-2xl font-medium mb-16 leading-relaxed max-w-3xl">
                            立即下载详细产品白皮书，或预约 1 对 1 的专业业务诊断与 PoC 演示。
                        </p>
                        
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                              <button className="h-16 px-10 rounded-2xl bg-red-600 text-white font-bold text-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-600/20 group">
                               立即下载产品简介
                                <FileDown size={22} className="group-hover:translate-y-1 transition-transform" />
                              </button>
                             <Link 
                                href="/contact"
                                className="h-16 px-10 rounded-2xl bg-blue-600 text-white font-bold text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 group"
                             >
                               预约业务诊断演示
                               <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                             </Link>
                        </div>
                        
                        <p className="mt-12 text-slate-400 font-bold text-sm uppercase tracking-[0.3em] opacity-40"> Enterprise Ready & Trusted </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export const CTASection = () => {
    return (
        <section id="cta" className="py-32 px-6 bg-blue-600 relative overflow-hidden">
            {/* Visual background decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,100,0,0.1),transparent)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(0,255,255,0.1),transparent)]" />
            
            <div className="container max-w-7xl mx-auto text-center relative z-10 font-sans">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight leading-[1.1]">把投标能力产品化，<br />而不仅仅“多做几个项目”</h2>
                    <p className="text-blue-50 text-xl md:text-2xl font-bold max-w-4xl mx-auto mb-16 leading-relaxed opacity-90">
                        用一套平台把机会、执行、知识与经营数据连接起来，<br className="hidden md:block" />
                        让赢标变成组织内部可持续迭代的可复制方法论。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                        <Link 
                            href="/contact"
                            className="h-20 px-16 rounded-full bg-white text-blue-700 font-black text-2xl hover:bg-blue-50 transition-all shadow-2xl shadow-black/20 flex items-center justify-center group"
                        >
                            立即联系销售
                            <ArrowRight size={28} className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link 
                            href="/contact"
                            className="h-20 px-16 rounded-full border-2 border-white/30 bg-white/5 text-white font-black text-2xl hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center shadow-xl"
                        >
                            获取行业方案
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
