'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Store,
  Briefcase,
  Calculator,
  ChevronDown,
  Target,
  Rocket,
  Search,
  PenTool,
  Lightbulb,
  BarChart4,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// Animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function AiCoCreationPageContent() {
  const scrollToForm = () => {
    document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-blue-200">
      
      {/* 01 Hero Section */}
      <section aria-label="AI业务共创计划介绍" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-sm font-medium mb-8 shadow-sm border border-slate-700/50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            面向行业，聚焦真实业务场景
          </motion.div>
          
          <motion.h1 
            className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]"
            {...fadeIn}
          >
            AI业务共创计划
            <span className="block text-3xl lg:text-5xl mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-[1.4]">
              围绕真实业务场景<br />
              共创可落地、可验证、可复制的<br />
              AI 应用方案
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-lg lg:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4">很多企业对 AI 感兴趣，但真正卡住的不是“要不要做”，而是：</p>
            <ul className="text-left inline-block space-y-3 mb-8 text-slate-700">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> 不知道 AI 和自己的业务到底怎么结合</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> 看了很多案例，还是不知道从哪里开始</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> 担心投入之后落不了地，内部难推动</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> 缺少既懂业务又懂系统落地的人来一起推进</li>
            </ul>
            <div className="p-6 bg-slate-50/80 backdrop-blur-md rounded-2xl border border-slate-200">
              <p className="font-medium text-slate-900">
                泊冉希望用“共创”的方式，和企业一起找到适合自身业务的 AI 应用场景，先跑通一个样板，再逐步复制到组织内部。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <button 
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2 group focus:ring-4 focus:ring-blue-600/20 outline-none"
              aria-label="申请加入共创计划"
            >
              申请加入共创计划
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button 
              onClick={() => document.getElementById('industry-scenarios')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2 group focus:ring-4 focus:ring-slate-200 outline-none"
              aria-label="查看行业场景清单"
            >
              查看行业场景清单
              <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 02 Pain Points Section */}
      <section aria-label="企业AI落地常见痛点" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            className="text-center mb-16"
            initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
              很多企业不是不想做 AI，而是不知道怎么把 AI 变成<span className="relative inline-block px-2"><span className="relative z-10 text-white">业务结果</span><span className="absolute inset-0 bg-blue-600 -rotate-1 rounded-sm"></span></span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              今天大多数企业对 AI 的态度，已经不是“要不要关注”，而是“不能不看”。但真正推进时，常见的问题往往不是技术问题，而是业务问题和组织问题：
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "看过很多 AI 工具，却不知道哪个适合自己的业务场景",
              "内部有人提 AI，但缺少清晰的落地路径和优先级判断",
              "希望提高效率、改善流程、辅助决策，却找不到第一批可验证的应用点",
              "担心项目大、周期长、投入高，最后变成一次内部展示",
              "不清楚 AI 应该接在哪个业务环节，系统怎么配合"
            ].map((point, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-start gap-4 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 font-bold border border-slate-200">
                  {i + 1}
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">{point}</p>
              </motion.div>
            ))}
            
            <motion.div 
              className="bg-slate-900 p-8 rounded-2xl text-white flex flex-col justify-center gap-4 lg:col-span-1 border border-slate-800 relative overflow-hidden group hover:bg-slate-800 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, ease: "easeOut" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full transition-transform duration-500 group-hover:bg-blue-500/20 group-hover:scale-110"></div>
              <Lightbulb className="w-8 h-8 text-blue-400 mb-2" />
              <h3 className="text-xl font-bold leading-relaxed z-10">
                企业缺的不是一份 AI 趋势报告，<br className="hidden lg:block"/>而是一个能切实落地的起点。
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 About Co-creation */}
      <section aria-label="什么是AI业务共创计划" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div className="flex-1"
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">什么是 AI业务共创计划</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                AI业务共创计划，不是单纯做培训，也不是先上系统。它更像一个<strong className="text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded">围绕业务场景展开的联合设计与小步验证过程</strong>。
              </p>
              <h4 className="text-lg font-bold text-slate-900 mb-4">我们会和企业一起：</h4>
              <ul className="space-y-4">
                {[
                  "识别最值得优先落地的业务场景",
                  "判断哪些环节适合引入 AI，哪些暂时不适合",
                  "结合现有系统、流程和数据基础设计落地路径",
                  "形成可演示、可试点、可复制的场景方案",
                  "让企业从“知道 AI”走向“用上 AI、看见效果”"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div className="md:w-5/12"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:p-10 rounded-3xl text-white shadow-xl relative">
                <div className="absolute top-4 right-4"><Lightbulb className="w-8 h-8 text-yellow-400 opacity-50" /></div>
                <h3 className="text-2xl font-bold mb-6">核心主张</h3>
                <p className="text-xl leading-relaxed text-slate-200">
                  不是先谈大而全的 AI 转型，而是先围绕一个具体业务场景，共创出第一步。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04 Scenarios */}
      <section id="industry-scenarios" aria-label="行业AI落地场景" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">不同行业，AI落地的切入口不同</h2>
            <p className="text-xl text-slate-600">不是单纯的通用 AI，而是“行业 × 业务场景”的深度融合</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 制造业 */}
            <SceneCard 
              icon={<Factory className="w-8 h-8" />}
              title="制造业"
              color="blue"
              problems={[
                "销售、计划、采购、生产、交付信息分散",
                "报表多、协调多、例外处理多",
                "经验依赖强，新人上手慢"
              ]}
              scenarios={[
                "销售报价与项目资料辅助生成",
                "生产异常与质量问题知识问答",
                "采购、交付、库存数据分析辅助",
                "制度、SOP、工艺知识智能检索",
                "管理报表自动解读与风险提示"
              ]}
              values={[
                "缩短内部信息获取时间",
                "提升跨部门协同效率",
                "让经验更容易沉淀和复用"
              ]}
            />
            
            {/* 连锁零售 */}
            <SceneCard 
              icon={<Store className="w-8 h-8" />}
              title="连锁零售 / 消费服务"
              color="rose"
              problems={[
                "门店运营标准难统一",
                "总部到门店的信息传达效率低",
                "活动、培训、巡检、反馈链路长"
              ]}
              scenarios={[
                "门店运营问答助手",
                "活动方案与物料文案辅助生成",
                "巡店问题归纳与改进建议输出",
                "客诉分类、汇总与高频问题识别",
                "多门店经营数据辅助分析"
              ]}
              values={[
                "提升总部管理效率",
                "降低门店执行偏差",
                "让一线运营反馈更快形成行动"
              ]}
            />

            {/* 专业服务 */}
            <SceneCard 
              icon={<Briefcase className="w-8 h-8" />}
              title="专业服务 / 工程 / 咨询 / 实施型企业"
              color="indigo"
              problems={[
                "项目资料多，复用难",
                "方案、汇报、交付文档高度依赖个人经验",
                "知识沉淀弱，团队复制难"
              ]}
              scenarios={[
                "方案初稿辅助生成",
                "交付文档模板化生成",
                "项目经验库问答",
                "招投标资料辅助整理",
                "客户需求归纳与会议纪要整理"
              ]}
              values={[
                "降低高质量文档产出门槛",
                "缩短方案准备时间",
                "让组织经验变成团队能力"
              ]}
            />

            {/* 财务管理 */}
            <SceneCard 
              icon={<Calculator className="w-8 h-8" />}
              title="财务与经营管理场景"
              color="amber"
              problems={[
                "报表多，分析慢",
                "经营数据看得见，但问题不容易说清楚",
                "制度、流程、归档、合规要求复杂"
              ]}
              scenarios={[
                "财务制度与流程问答",
                "经营报表辅助解读",
                "费用、预算、回款异常提示",
                "会计档案、合同、凭证资料智能检索",
                "管理层经营分析摘要生成"
              ]}
              values={[
                "提升管理分析效率",
                "缩短从数据到结论的路径",
                "让管理动作更及时"
              ]}
            />
          </div>
        </div>
      </section>

      {/* 05 How to Co-create */}
      <section aria-label="四步共创流程" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div className="text-center mb-20" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">共创不是空谈，重点是先把第一步做出来</h2>
            <div className="flex flex-wrap justify-center gap-4 text-emerald-700 font-medium mt-8">
              <span className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">先找场景，再谈工具</span>
              <span className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">先做样板，再谈全面推广</span>
              <span className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">先验证价值，再决定投入规模</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard 
              num="01" 
              title="业务诊断" 
              desc="梳理企业当前业务流程、岗位角色、系统现状与主要卡点，识别适合 AI 介入的候选场景。"
              icon={<Search className="w-8 h-8" />}
            />
            <StepCard 
              num="02" 
              title="场景共创" 
              desc="围绕优先级最高的 1–3 个业务场景，明确目标、输入数据、使用角色、输出结果与边界条件。"
              icon={<Target className="w-8 h-8" />}
            />
            <StepCard 
              num="03" 
              title="方案设计" 
              desc="形成可落地的场景方案，包括流程设计、系统衔接方式、数据要求、试点范围与推进建议。"
              icon={<PenTool className="w-8 h-8" />}
            />
            <StepCard 
              num="04" 
              title="样板验证" 
              desc="优先推动一个小范围试点，让企业先看到真实效果，再决定是否复制推广。"
              icon={<Rocket className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* 06 Why Us */}
      <section aria-label="为什么选择泊冉" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">为什么这个共创计划适合由泊冉来做</h2>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                很多 AI 项目之所以难落地，不是因为模型不够强，而是因为脱离了企业真实流程、系统和组织协作方式。
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                泊冉的优势，不只是理解 AI，更重要的是长期服务企业信息化建设，熟悉各项企业核心数字化工程：
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "企业业务流程与岗位协作",
                  "ERP、协同、流程、档案、数据等系统环境",
                  "从咨询、实施到二次开发的落地链路",
                  "制造、服务、连锁、集团型企业的实际管理场景"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-200 bg-white/5 p-3 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-blue-600/20 border border-blue-500/30 p-6 rounded-xl">
                <p className="text-xl font-semibold text-blue-200 leading-snug">
                  我们更关注：AI 应该接到哪里、怎样和现有业务融合、怎样让组织真正用起来。
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
            >
              {/* Abstract illustration of integration */}
              <div className="aspect-square max-w-md mx-auto relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full border border-white/10 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="absolute inset-16 bg-gradient-to-tl from-slate-800 to-slate-900 rounded-full shadow-2xl flex items-center justify-center border border-slate-700">
                  <div className="text-center">
                    <div className="flex justify-center mb-4 text-blue-400 gap-4">
                      <BarChart4 className="w-8 h-8" />
                      <Factory className="w-8 h-8" />
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">业务场景融合</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 07/08 Event & Form */}
      <section id="enroll-form" aria-label="报名申请表" className="py-24 bg-blue-600 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            <div className="lg:w-5/12 bg-slate-900 text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-blue-500/30 border border-blue-400/30 text-blue-200 rounded-full text-sm font-semibold mb-6">
                  首批限额招募
                </div>
                <h2 className="text-3xl font-bold mb-6">加入 AI业务共创计划</h2>
                <p className="text-slate-300 mb-8 text-lg">
                  优先面向制造、连锁、专业服务、集团企业。提交信息后，我们的业务专家将与您联系，安排一对一场景诊断。
                </p>
                
                <ul className="space-y-6 mb-12">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Search className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">一对一场景诊断</h4>
                      <p className="text-slate-400">专家深入了解您的业务痛点</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">输出专属建议清单</h4>
                      <p className="text-slate-400">获得量身定制的 AI 落地建议</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">开启共创试点</h4>
                      <p className="text-slate-400">优先获得先锋企业专属支持</p>
                    </div>
                  </li>
                </ul>
              </div>
              
            </div>

            <div className="lg:w-7/12 p-10 lg:p-14 bg-white relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">填写信息，预约诊断</h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* 09 FAQ */}
      <section aria-label="常见问题" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">常见问题</h2>
            <p className="text-slate-600 text-lg">了解更多关于共创计划的细节</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              q="我们对 AI 感兴趣，但内部没有技术团队，可以参加吗？"
              a="可以。共创计划的重点不是先做复杂技术建设，而是先识别适合企业的业务场景与落地路径。我们会为您提供实施所需的技术支持。"
            />
            <FAQItem 
              q="我们已经在用 ERP / OA / 协同系统，AI 还能结合吗？"
              a="可以。很多 AI 场景并不是替代原系统，而是在现有业务流程和系统基础上，提升问答、检索、分析、生成和辅助决策效率。"
            />
            <FAQItem 
              q="共创计划适合哪些企业？"
              a="更适合已经有一定业务流程基础、希望探索 AI 与经营管理结合方式的企业，尤其适用于制造、连锁、专业服务、集团型管理等具有一定标准化场景的企业。"
            />
            <FAQItem 
              q="共创计划是做培训还是做项目？"
              a="它介于两者之间。不是单纯培训，也不是一上来就做大重头项目，而是围绕真实场景形成可落地的第一步，类似一个带有强烈业务目标的打板试点。"
            />
            <FAQItem 
              q="参加之后企业会得到什么？"
              a="通常会得到业务场景梳理、优先级建议、场景共创方案、试点方向建议，以及后续推广的可执行路径。我们最终目标是帮您落地一个真实的可用场景。"
            />
          </div>
        </div>
      </section>
      
    </main>
  )
}

// ------------------------------------
// UI Sub-components
// ------------------------------------

function SceneCard({ title, problems, scenarios, values, icon, color }: {
  title: string, problems: string[], scenarios: string[], values: string[], icon: React.ReactNode, color: 'blue' | 'rose' | 'indigo' | 'amber'
}) {
  const colorMap = {
    blue: "bg-blue-50 text-blue-600",
    rose: "bg-rose-50 text-rose-600",
    indigo: "bg-indigo-50 text-indigo-600",
    amber: "bg-amber-50 text-amber-600",
  }
  const borderMap = {
    blue: "hover:border-blue-300 hover:shadow-blue-900/5",
    rose: "hover:border-rose-300 hover:shadow-rose-900/5",
    indigo: "hover:border-indigo-300 hover:shadow-indigo-900/5",
    amber: "hover:border-amber-300 hover:shadow-amber-900/5",
  }

  return (
    <motion.div 
      className={`bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm transition-all duration-300 cursor-pointer group hover:shadow-xl ${borderMap[color]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${colorMap[color]}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">常见问题卡点</h4>
          <ul className="space-y-2">
            {problems.map((p, i) => (
              <li key={i} className="flex gap-2 text-slate-600">
                <span className="text-slate-300 mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-600" /> AI 可优先切入场景
          </h4>
          <ul className="space-y-2">
            {scenarios.map((s, i) => (
              <li key={i} className="flex gap-2 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">预期价值</h4>
           <div className="flex flex-wrap gap-2">
             {values.map((v, i) => (
               <span key={i} className="text-sm bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                 {v}
               </span>
             ))}
           </div>
        </div>
      </div>
    </motion.div>
  )
}

function StepCard({ num, title, desc, icon }: { 
  num: string, title: string, desc: string, icon: React.ReactNode 
}) {
  return (
    <motion.div 
      className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: "easeOut" }}
    >
      <div className="absolute top-0 right-0 p-6 text-8xl font-black text-slate-50 -mt-8 -mr-6 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-50/50">
        {num}
      </div>
      
      <div className="w-16 h-16 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100 group-hover:border-blue-500">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{title}</h3>
      <p className="text-slate-600 leading-relaxed relative z-10 font-medium">{desc}</p>
    </motion.div>
  )
}

function LeadForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    
    const company = formData.get('company') as string
    const industry = formData.get('industry') as string
    const role = formData.get('role') as string
    const phone = formData.get('contact') as string
    const problem = formData.get('problem') as string
    const aiInterest = formData.get('ai-interest') as string
    const format = formData.get('format') as string
    
    // Notes block mapping the extra fields
    const notes = [
      `所属行业: ${industry}`,
      `当前岗位: ${role}`,
      `最想解决的问题: ${problem || '无'}`,
      `最感兴趣的AI环节: ${aiInterest || '无'}`,
      `希望参与形式: ${format}`,
    ].join('\n')
    
    // Check if name was provided, else use role as a fallback name
    const name = role ? `${role}负责人` : '未知姓名'

    const data = {
      name,
      company,
      phone,
      source: 'AI业务共创计划',
      sourcePageUrl: window.location.href,
      notes,
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('网络请求失败，请稍后再试')
      }

      setSuccess(true)
    } catch (err: any) {
      setError(err.message || '提交失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <motion.div 
        className="text-center py-16 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h4 className="text-2xl font-bold text-slate-900 mb-2">提交成功</h4>
        <p className="text-slate-600 text-lg">我们的业务专家将很快与您联系，安排一对一诊断。</p>
        <Button onClick={() => setSuccess(false)} variant="outline" className="mt-8">
          返回重新提交
        </Button>
      </motion.div>
    )
  }

  return (
    <form className="space-y-6 relative" onSubmit={handleSubmit}>
      {error && (
        <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">公司名称 <span className="text-red-500">*</span></Label>
          <Input id="company" name="company" placeholder="请输入公司全称" required className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600 focus-visible:ring-offset-2" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="industry">所属行业 <span className="text-red-500">*</span></Label>
          <select id="industry" name="industry" className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2" required>
            <option value="">请选择所属行业</option>
            <option value="制造">制造及流通</option>
            <option value="消费">连锁与消费服务</option>
            <option value="专业服务">专业服务/工程/项目型</option>
            <option value="其他">其他行业</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">当前岗位 <span className="text-red-500">*</span></Label>
          <Input id="role" name="role" placeholder="例如：IT总监、财务主管、业务负责人" required className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600 focus-visible:ring-offset-2" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact">联系方式 (手机号) <span className="text-red-500">*</span></Label>
          <Input id="contact" name="contact" type="tel" placeholder="请输入手机号" required className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600 focus-visible:ring-offset-2" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="problem">当前最想解决的问题</Label>
        <Textarea id="problem" name="problem" placeholder="例如：报表生成太慢、项目资料难以复用、生产异常处理效率低..." className="bg-slate-50 border-slate-200 min-h-[80px] focus-visible:ring-blue-600 focus-visible:ring-offset-2" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="ai-interest">对 AI 最感兴趣的业务环节</Label>
        <Input id="ai-interest" name="ai-interest" placeholder="例如：财务分析、研发知识库、门店运营管理" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600 focus-visible:ring-offset-2" />
      </div>

      <div className="space-y-2">
        <Label>希望参与形式</Label>
        <div className="flex gap-6 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="format" value="一对一诊断" className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-600" defaultChecked />
            <span className="text-sm">一对一诊断</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="format" value="参加线下共创私享会" className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-600" />
            <span className="text-sm">参加线下共创私享会</span>
          </label>
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 h-auto mt-4 transition-all hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed">
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            提交中...
          </span>
        ) : '申请加入共创计划'}
      </Button>
      <p className="text-center text-sm text-slate-500 mt-4">我们承诺严格保密您的业务信息</p>
    </form>
  )
}

function FAQItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={`border rounded-2xl bg-white overflow-hidden transition-all duration-300 ${open ? 'border-blue-300 shadow-md' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>
      <button 
        className="w-full text-left p-6 lg:p-8 flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/20"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h4 className="text-lg lg:text-xl font-bold text-slate-900 pr-8 leading-snug">{q}</h4>
        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${open ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 lg:p-8 pt-0 text-slate-600 text-lg leading-relaxed border-t border-slate-100">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
