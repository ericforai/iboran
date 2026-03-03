import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react'
import { GeoSection } from '@/components/GeoSection'
import { SeoH1 } from '@/components/SeoH1'

const pillars = [
  {
    title: '云上经营（BIP/YonSuite）',
    desc: '把销售、采购、合同、项目、财务等核心流程放到统一云上，经营动作实时在线协同。',
    icon: Cloud,
    color: 'text-blue-600',
    bg: 'bg-blue-50/50',
    borderColor: 'border-blue-100',
    hoverBg: 'hover:bg-blue-50/80',
  },
  {
    title: '本地存证（证据链平台）',
    desc: '关键业务节点自动留痕与归档，形成可核验、可追溯、可审计的经营证据链。',
    icon: FileCheck2,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50/50',
    borderColor: 'border-emerald-100',
    hoverBg: 'hover:bg-emerald-50/80',
  },
  {
    title: 'AI全程护航（智能助手）',
    desc: '用 AI 在全链路做提醒、分析、预警与建议，帮助团队更快执行、更稳决策。',
    icon: Bot,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50/50',
    borderColor: 'border-indigo-100',
    hoverBg: 'hover:bg-indigo-50/80',
  },
]

const scenarios = [
  '合同到回款：合同履约、开票、收款全程可追踪',
  '项目到核算：项目过程留痕，收入成本自动归集',
  '采购到付款：比价、审批、收货、付款全链路留证',
  '费用到归档：报销、票据、凭证、档案自动关联',
  '风险到预警：AI 识别异常节点并提前提醒',
  '复盘到改进：沉淀证据与数据，形成经营优化闭环',
]

const steps = [
  {
    title: '经营在线',
    desc: '先把关键业务流程上线，统一数据口径和流程动作。',
  },
  {
    title: '证据固化',
    desc: '对关键节点自动归档留证，满足审计、内控与追责要求。',
  },
  {
    title: '智能决策',
    desc: '引入 AI 预警与分析，推动从“事后看报表”到“过程可干预”。',
  },
]

export const metadata: Metadata = {
  title: '经营-存证-AI 三位一体方案 | 泊冉软件',
  description:
    '经营在云上，证据在本地，智能贯穿全流程。打造“经营-存证-AI”一体闭环，帮助企业实现可执行、可追溯、可决策的业务管控体系。',
  keywords: [
    '经营存证AI',
    '三位一体方案',
    '业务管控',
    '证据链平台',
    'YonSuite',
    'YonBIP',
    '泊冉软件',
  ],
  openGraph: {
    title: '经营-存证-AI 三位一体方案',
    description: '不做系统拼盘，构建可执行、可追溯、可决策的一体化闭环。',
  },
}

export default function OperationEvidenceAIPage() {
  return (
    <>
      <SeoH1 title={metadata.title as string} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 md:py-28">
        {/* Abstract Background Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM24 34v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM2 34v-2H0v2h2zm0 4v-2H0v2h2zm0-8v-2H0v2h2zm0-4v-2H0v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM6 34v-2H4v2h2zm0 4v-2H4v2h2zm0-8v-2H4v2h2zm0-4v-2H4v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm6 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm-4 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM32 34v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM12 34v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM16 34v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM8 54v-2H6v2h2zm0 4v-2H6v2h2zm0-8v-2H6v2h2zm0-4v-2H6v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM4 54v-2H2v2h2zm0 4v-2H2v2h2zm0-8v-2H2v2h2zm0-4v-2H2v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM2 54v-2H0v2h2zm0 4v-2H0v2h2zm0-8v-2H0v2h2zm0-4v-2H0v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM60 54v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm-20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM12 54v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm-6 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm30 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm-4 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM32 54v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM12 54v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM16 54v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM10 54v-2H8v2h2zm0 4v-2H8v2h2zm0-8v-2H8v2h2zm0-4v-2H8v2h2zm20 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm-6 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm30 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zm-4 4v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2zM32 54v-2h-2v2h2zm0 4v-2h-2v2h2zm0-8v-2h-2v2h2zm0-4v-2h-2v2h2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
            }} 
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-blue-300 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              业务管控新范式
            </span>
            <h1 className="mt-8 text-4xl font-black leading-[1.15] text-white sm:text-5xl lg:text-6xl tracking-tight">
              经营在云上，<span className="text-blue-400">证据在本地</span>
              <br className="hidden md:block" />
              智能贯穿全流程
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-slate-300 md:text-xl max-w-2xl mx-auto font-medium">
              实现“经营-存证-AI”一体化闭环，打造可执行、可追溯、可决策的数字化转型新基石。
            </p>
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-[0.98]"
              >
                预约专家演示
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solution"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-slate-800 hover:border-slate-600 active:scale-[0.98]"
              >
                探索更多方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-20">
            {pillars.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group relative">
                  {/* Visual Connection (Plus sign) */}
                  {idx < pillars.length - 1 && (
                    <div className="absolute left-full top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block md:ml-10">
                      {/* Bridge line: tightly connects the two cards */}
                      <div className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-300/30 via-blue-500/40 to-blue-300/30" />

                      {/* Moving energy pulse */}
                      <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 animate-[pulse_1.8s_ease-in-out_infinite] rounded-full bg-blue-400/80 shadow-[0_0_10px_rgba(59,130,246,0.55)]" />
                      <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 animate-[pulse_1.8s_ease-in-out_infinite] rounded-full bg-blue-400/80 shadow-[0_0_10px_rgba(59,130,246,0.55)]" />

                      {/* Center nexus: SVG triad signal */}
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-200/80 bg-white shadow-[0_4px_14px_rgba(59,130,246,0.15)]">
                        <div className="absolute inset-0 rounded-full bg-blue-400/10 animate-pulse" />
                        <svg
                          viewBox="0 0 48 48"
                          className="relative h-7 w-7"
                          aria-hidden
                        >
                          <defs>
                            <linearGradient id={`triad-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#2563EB" />
                              <stop offset="100%" stopColor="#06B6D4" />
                            </linearGradient>
                          </defs>

                          <circle
                            cx="24"
                            cy="24"
                            r="19"
                            fill="none"
                            stroke="#BFDBFE"
                            strokeWidth="1.5"
                            strokeDasharray="8 6"
                            className="animate-[spin_8s_linear_infinite]"
                          />

                          <path
                            d="M13 31 L24 14 L35 31 Z"
                            fill="none"
                            stroke={`url(#triad-grad-${idx})`}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <circle cx="24" cy="14" r="2.4" fill="#2563EB" className="animate-pulse" />
                          <circle
                            cx="13"
                            cy="31"
                            r="2.4"
                            fill="#06B6D4"
                            className="animate-pulse"
                            style={{ animationDelay: '0.4s' }}
                          />
                          <circle
                            cx="35"
                            cy="31"
                            r="2.4"
                            fill="#3B82F6"
                            className="animate-pulse"
                            style={{ animationDelay: '0.8s' }}
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                  <article 
                    className={`h-full cursor-pointer rounded-3xl border ${item.borderColor} ${item.bg} ${item.hoverBg} p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50`}
                  >
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-110`}>
                      <Icon className={`h-7 w-7 ${item.color}`} />
                    </div>
                    <h2 className={`mt-6 text-2xl font-black tracking-tight text-slate-900 group-hover:${item.color}`}>{item.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 font-medium">{item.desc}</p>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Flow section */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <div className="mb-12 flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-2">
                <Workflow className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">三步落地，构建闭环</h2>
              <p className="text-slate-500 font-medium max-w-xl">从系统上线到持续增效的清晰演进路径</p>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
                {/* Visual Line for steps */}
                <div className="absolute top-[3.5rem] left-[15%] right-[15%] hidden h-[2px] bg-slate-100 md:block" />
                
                {steps.map((step, idx) => (
                  <div key={step.title} className="relative z-10 flex flex-col items-center">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-200">
                      {idx + 1}
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-100">
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* Scenarios Section */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex flex-col items-center text-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-2">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">全场景实证与价值</h2>
              <p className="text-slate-500 font-medium max-w-xl">覆盖核心业务环节，为企业构筑坚实的证据底座</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {scenarios.map((item) => (
                <div 
                  key={item} 
                  className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-emerald-200 hover:shadow-md"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-[15px] font-medium leading-relaxed text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-16 text-center shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute bottom-0 left-[-10%] h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />
            
            <div className="relative z-10">
              <div className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                把“能用”升级为“能增长”
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
                不是“系统上线即结束”，而是持续沉淀可复用的经营能力。
                让经营跑得快、证据立得住、决策看得准。
              </p>
              <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-bold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
                >
                  获取实施路线图
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/cases"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 px-10 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-slate-800 active:scale-[0.98]"
                >
                  查看方案案例
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeoSection
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/business/operation-evidence-ai"
        variant="solution"
        showDecisionFramework
      />
    </>
  )
}
