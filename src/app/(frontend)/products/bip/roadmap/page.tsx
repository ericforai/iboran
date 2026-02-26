'use client'

import React from 'react'
import Link from 'next/link'
import { 
  ClipboardList, 
  Map, 
  Settings, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react'
import { SlideUp, FadeIn, StaggerContainer } from '@/components/animations'

const phases = [
  {
    id: "01",
    title: "筹建准备",
    subtitle: "扎实起步，奠定成功基石",
    description: "通过科学的售前评估与资源筹备，以保障项目在正确的轨道上启动。",
    icon: ClipboardList,
    color: "blue",
    details: [
      { label: "售前评估", desc: "基于成熟实践进行差距分析与价值评估" },
      { label: "团队组建", desc: "确定项目组织架构，任命核心顾问与关键用户" },
      { label: "环境准备", desc: "部署敏捷交付工作台 (AW)，初始化各阶段运行环境" }
    ],
    outputs: ["项目任务书", "实施主计划", "项目管理规范"]
  },
  {
    id: "02",
    title: "蓝图设计",
    subtitle: "价值导向，定义转型路径",
    description: "通过 POC 验证与流程梳理，将业务目标转化为可实施的技术蓝图。",
    icon: Map,
    color: "indigo",
    details: [
      { label: "成熟实践 POC", desc: "展示标准流程，引导客户识别差异化需求" },
      { label: "流程治理", desc: "梳理 L1-L4 流程，定义业财一体化核心红线" },
      { label: "方案评审", desc: "多级专家评审，以保障方案质量与可落地性" }
    ],
    outputs: ["业财一体化蓝图", "系统详细设计方案", "数据治理方案"]
  },
  {
    id: "03",
    title: "系统建设",
    subtitle: "敏捷构建, 高质高效交付",
    description: "利用 A/B 类工具实现资产复用与快速配置，以保障功能优质集成。",
    icon: Settings,
    color: "purple",
    details: [
      { label: "敏捷配置", desc: "基于资产包一键迁移配置，减少重复劳动" },
      { label: "客开并行", desc: "云原生开发平台支撑，实现复杂需求敏捷闭环" },
      { label: "集成对接", desc: "标准化 IPaaS 平台，打通异构系统数据孤岛" }
    ],
    outputs: ["UAT 环境", "用户操作手册 (SOP)", "集成测试报告"]
  },
  {
    id: "04",
    title: "上线切换",
    subtitle: "稳健迭代, 赋能业务成功",
    description: "平稳完成数据迁移与上线切换，进入持续运营与价值实现阶段。",
    icon: Rocket,
    color: "red",
    details: [
      { label: "压力测试", desc: "以保障系统在高并发场景下的稳定表现" },
      { label: "赋能培训", desc: "针对不同角色提供差异化培训，以保障人人会用" },
      { label: "持续运营", desc: "上线不代表结束，持续跟踪价值实现情况" }
    ],
    outputs: ["生产执行环境", "项目验收单", "运维交接文档"]
  }
]

const stats = [
  { label: "交付周期缩短", value: "30%", icon: Zap },
  { label: "流程标准化率", value: "85%+", icon: ShieldCheck },
  { label: "用户参与度", value: "99%以上", icon: Users }
]

export default function RoadmapPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-14 lg:pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link 
            href="/products/bip" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 lg:mb-8 group"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            返回 BIP 产品页
          </Link>
          <SlideUp>
            <h1 className="text-3xl lg:text-6xl font-heading font-black text-white mb-4 lg:mb-6 tracking-tighter">
              YonBIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">敏捷交付</span>方法论
            </h1>
            <p className="text-slate-400 text-base lg:text-xl max-w-2xl mx-auto leading-relaxed">
              基于 14 年行业沉淀，融合 A/B 类工具与成熟实践资产，为您提供“高质量、高效率、高效益”的数智化交付体验。
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="container mx-auto px-4 -mt-6 lg:-mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl flex flex-wrap divide-y md:divide-y-0 md:divide-x divide-slate-100 p-4 lg:p-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 min-w-[160px] lg:min-w-[200px] flex items-center justify-center gap-3 lg:gap-4 py-3 lg:py-4 md:py-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <stat.icon className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-black text-slate-900">{stat.value}</div>
                <div className="text-xs lg:text-sm font-bold text-slate-500 uppercase tracking-wide lg:tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology Description */}
      <section className="py-14 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-14 lg:mb-24">
            <SlideUp>
              <h2 className="text-2xl lg:text-4xl font-heading font-black text-slate-900 mb-5 lg:mb-8 tracking-tight">
                全生命周期敏捷路线图
              </h2>
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-5 lg:mb-6">
                YonBIP 敏捷交付以项目经理为主导，由方案、技术、数据顾问引领客户需求。基于 BIP 产品的强大特性，我们不再是从零开始的实施，而是基于<strong>成熟实践资产包</strong>的选配与迁移。
              </p>
              <div className="space-y-3 lg:space-y-4">
                {[
                  "以客户价值为中心，快速实现业务闭环",
                  "深度利用 AW (Agile Workstation) 支撑平台",
                  "A 类迁移工具 + B 类实施工具沉淀提效"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </SlideUp>
            <div className="relative group">
               <div className="absolute -inset-4 bg-blue-600/10 rounded-[2rem] blur-2xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
               <div className="relative bg-white p-5 lg:p-8 rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                  <div className="text-sm font-mono font-black text-blue-600 mb-4 tracking-widest uppercase">底层支撑体系</div>
                  <div className="space-y-4 lg:space-y-6">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="font-black text-slate-900 mb-1">AW 敏捷交付工作台</div>
                      <div className="text-xs text-slate-500">融入 AI & RPA 新技术，支撑项目全流程数字化管理</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="font-black text-slate-900 mb-1">A 类：迁移与配置工具</div>
                      <div className="text-xs text-slate-500">实现环境、开发、配置件一键打包，快速交付资产</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="font-black text-slate-900 mb-1">B 类：业务实测工具</div>
                      <div className="text-xs text-slate-500">助力业务流程验证，保障方案的高质量落地</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Timeline Phases */}
          <StaggerContainer className="grid lg:grid-cols-2 gap-4 lg:gap-8">
            {phases.map((phase) => (
              <SlideUp key={phase.id} className="group relative">
                <div className="h-full bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-12 border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-blue-200 relative overflow-hidden">
                  {/* Phase ID Background */}
                  <div className="hidden lg:block absolute -right-4 -top-8 text-[12rem] font-black text-slate-50 group-hover:text-blue-50/50 transition-colors pointer-events-none select-none">
                    {phase.id}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3 lg:block lg:mb-0">
                      <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-${phase.color}-600 text-white flex items-center justify-center lg:mb-8 shadow-lg shadow-${phase.color}-200 flex-shrink-0`}>
                        <phase.icon className="w-5 h-5 lg:w-7 lg:h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl leading-tight lg:text-2xl font-black text-slate-900 mb-1 lg:mb-2">{phase.title}</h3>
                        <div className="text-xs lg:text-sm font-bold text-blue-600 uppercase tracking-wide lg:tracking-widest">{phase.subtitle}</div>
                      </div>
                    </div>
                    
                    <p className="text-slate-500 mb-5 lg:mb-10 leading-relaxed font-medium text-sm lg:text-base">{phase.description}</p>

                    <div className="space-y-3 lg:space-y-6 mb-5 lg:mb-10">
                      {phase.details.map((detail, idx) => (
                        <div key={idx} className="flex gap-3 lg:gap-4 group/item">
                          <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-${phase.color}-600 shrink-0`}></div>
                          <div>
                            <div className="font-black text-slate-900 text-base lg:text-sm mb-0.5 lg:mb-1">{detail.label}</div>
                            <div className="text-sm lg:text-xs text-slate-500 leading-relaxed">{detail.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 lg:pt-8 border-t border-slate-100">
                      <div className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest mb-3 lg:mb-4">核心阶段成果 (Outputs)</div>
                      <div className="flex flex-wrap gap-1.5 lg:gap-2">
                        {phase.outputs.map((out, i) => (
                          <span key={i} className="px-2.5 lg:px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-100">
                            {out}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUp>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 lg:py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-2xl lg:text-5xl font-heading font-black text-slate-900 mb-6 lg:mb-8 tracking-tight">
                准备好开启您的<br />数智化敏捷之旅了吗？
              </h2>
              <div className="flex justify-center">
                 <Link 
                    href="/contact" 
                    className="px-8 lg:px-12 py-4 lg:py-5 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-200"
                 >
                    立即咨询交付方案
                    <ArrowRight className="w-5 h-5" />
                 </Link>
              </div>
            </FadeIn>
        </div>
      </section>
    </main>
  )
}
