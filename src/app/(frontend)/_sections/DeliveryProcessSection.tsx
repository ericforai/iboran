'use client'

import React, { useState, useEffect } from 'react'
import {
    Stethoscope,
    GitBranch,
    Settings2,
    ListChecks,
    ShieldCheck,
    ArrowRight,
    CheckCircle2
} from 'lucide-react'

const steps = [
    {
        id: 1,
        icon: Stethoscope,
        title: "止血",
        subtitle: "识别不可交付的风险点",
        description: "项目启动前风险识别 · 不可交付项梳理 · 锁定失败路径",
        color: "#EF4444",
        customerThought: "终于有人先说清楚：哪些地方可能会失败"
    },
    {
        id: 2,
        icon: GitBranch,
        title: "兜底",
        subtitle: "前置设计责任与架构",
        description: "明确总交付责任 · 划清边界 · 责任前置不后补",
        color: "#0052D9",
        customerThought: "终于有人在项目开始前就站出来负责"
    },
    {
        id: 3,
        icon: Settings2,
        title: "可控",
        subtitle: "设计可演进的定制机制",
        description: "二开规范统一 · 版本节奏可管理 · 系统可维护",
        color: "#F59E0B",
        customerThought: "二开从一开始就是可控的"
    },
    {
        id: 4,
        icon: ListChecks,
        title: "验证",
        subtitle: "阶段性交付与验证",
        description: "分阶段交付 · 每阶段可验证 · 每一步都可回退",
        color: "#10B981",
        customerThought: "不用等到最后才知道能不能成功"
    },
    {
        id: 5,
        icon: ShieldCheck,
        title: "运行",
        subtitle: "长期运行与持续保障",
        description: "运维与优化纳入交付 · 长期运行负责",
        color: "#8B5CF6",
        customerThought: "他们不是交完就走的人"
    }
]

export function DeliveryProcessSection() {
    const [activeStep, setActiveStep] = useState<number | null>(null)
    const [visibleSteps, setVisibleSteps] = useState<number[]>([])

    // Animate steps appearing one by one
    useEffect(() => {
        steps.forEach((_, idx) => {
            setTimeout(() => {
                setVisibleSteps(prev => [...prev, idx + 1])
            }, 200 * (idx + 1))
        })
    }, [])

    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2329] leading-tight mb-3">
                        泊冉复杂项目交付实践路径
                    </h2>
                    <p className="text-lg text-slate-500">
                        从「高风险项目」到「可不失败的交付」
                    </p>
                </div>

                {/* Trust Badge */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-[#0052D9]" />
                        总结自 <strong className="text-[#1F2329]">10+ 年、500+ 企业</strong> 复杂项目实施经验
                    </span>
                </div>

                {/* Process Flow - Desktop */}
                <div className="hidden lg:block max-w-6xl mx-auto mb-12">
                    <div className="relative flex items-start justify-between">
                        {/* Connection Line */}
                        <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-[#EF4444] via-[#F59E0B] to-[#8B5CF6] opacity-30"></div>
                        
                        {steps.map((step, idx) => (
                            <div
                                key={step.id}
                                className={`relative flex flex-col items-center w-1/5 transition-all duration-500 ${
                                    visibleSteps.includes(step.id) 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-4'
                                }`}
                                onMouseEnter={() => setActiveStep(step.id)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                {/* Step Circle */}
                                <div 
                                    className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                                        activeStep === step.id 
                                            ? 'scale-110 shadow-xl' 
                                            : 'shadow-lg'
                                    }`}
                                    style={{ 
                                        backgroundColor: activeStep === step.id ? step.color : `${step.color}15`,
                                    }}
                                >
                                    <step.icon 
                                        className={`w-9 h-9 transition-colors duration-300`}
                                        style={{ color: activeStep === step.id ? 'white' : step.color }}
                                    />
                                </div>

                                {/* Arrow (except last) */}
                                {idx < steps.length - 1 && (
                                    <ArrowRight 
                                        className="absolute top-7 -right-2 w-5 h-5 text-slate-300 z-20"
                                    />
                                )}

                                {/* Step Content */}
                                <div className="mt-4 text-center px-2">
                                    <div 
                                        className="font-bold text-lg mb-1"
                                        style={{ color: step.color }}
                                    >
                                        {step.title}
                                    </div>
                                    <div className="text-sm font-medium text-[#1F2329] mb-2">
                                        {step.subtitle}
                                    </div>
                                    <div className="text-xs text-slate-500 leading-relaxed">
                                        {step.description}
                                    </div>
                                </div>

                                {/* Hover Tooltip */}
                                {activeStep === step.id && (
                                    <div className="absolute top-24 left-1/2 -translate-x-1/2 mt-16 w-64 p-4 bg-slate-900 text-white text-sm rounded-xl shadow-2xl z-30 animate-fade-in">
                                        <div className="text-xs text-slate-400 mb-1">客户的心声</div>
                                        <p className="italic">「{step.customerThought}」</p>
                                        <div 
                                            className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45"
                                        ></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Flow - Mobile */}
                <div className="lg:hidden space-y-4 mb-12">
                    {steps.map((step, idx) => (
                        <div 
                            key={step.id}
                            className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 ${
                                visibleSteps.includes(step.id) 
                                    ? 'opacity-100 translate-x-0' 
                                    : 'opacity-0 -translate-x-4'
                            }`}
                            style={{ backgroundColor: `${step.color}08` }}
                        >
                            {/* Left: Icon and Line */}
                            <div className="flex flex-col items-center">
                                <div 
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: `${step.color}20` }}
                                >
                                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                                </div>
                                {idx < steps.length - 1 && (
                                    <div 
                                        className="w-0.5 h-8 mt-2"
                                        style={{ backgroundColor: `${step.color}30` }}
                                    ></div>
                                )}
                            </div>

                            {/* Right: Content */}
                            <div className="flex-1 pt-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold" style={{ color: step.color }}>
                                        {step.title}
                                    </span>
                                    <span className="text-[#1F2329] font-medium text-sm">
                                        {step.subtitle}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-slate-500 mb-2">
                        泊冉不是用一套「方法论」交付项目，而是通过
                    </p>
                    <p className="text-xl font-bold text-[#1F2329]">
                        <span className="text-[#0052D9]">接管责任</span>
                        <span className="mx-3 text-slate-300">·</span>
                        <span className="text-[#F59E0B]">控制复杂度</span>
                        <span className="mx-3 text-slate-300">·</span>
                        <span className="text-[#10B981]">分阶段验证</span>
                    </p>
                    <p className="text-slate-500 mt-2">
                        把复杂项目一步步交付清楚
                    </p>
                </div>
            </div>
        </section>
    )
}
