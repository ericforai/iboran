'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    Stethoscope,
    GitBranch,
    Settings2,
    ListChecks,
    ShieldCheck,
    CheckCircle2,
    ChevronDown
} from 'lucide-react'

const practices = [
    {
        id: 1,
        icon: Stethoscope,
        title: "止血",
        subtitle: "识别不可交付的风险点",
        color: "#DC2626",
        customerState: "项目会上每个人都在做事，但没有人能回答：现在这个项目，到底算不算「可交付」？",
        approach: [
            "不直接接手实施",
            "先做项目现状与风险梳理",
            "明确：哪些必须交付、哪些可延期、哪些必须停掉"
        ],
        insight: "很多项目不是技术失败，而是在错误方向上被「勤奋」拖死的"
    },
    {
        id: 2,
        icon: GitBranch,
        title: "兜底",
        subtitle: "前置设计责任与架构",
        color: "#1E40AF",
        customerState: "ERP 是 A 家做的、二开是 B 家写的、接口是 C 家对的——出问题时，没人负责整体结果",
        approach: [
            "明确整体技术架构与主交付责任",
            "划清系统边界（谁管哪一层）",
            "划清数据边界（谁对数据负责）",
            "划清验收边界（什么叫「交付完成」）"
        ],
        insight: "复杂项目一定要有「总交付方」，否则客户永远在替乙方做项目管理"
    },
    {
        id: 3,
        icon: Settings2,
        title: "可控",
        subtitle: "设计可演进的定制机制",
        color: "#F59E0B",
        customerState: "系统越来越贴合业务，但也越来越没人敢动——新需求一上，老功能就出问题",
        approach: [
            "统一开发规范",
            "统一版本节奏",
            "统一测试与回滚机制",
            "把「个人经验」变成「可交接、可维护的系统能力」"
        ],
        insight: "二次开发不可怕，不可控的二次开发才可怕"
    },
    {
        id: 4,
        icon: ListChecks,
        title: "验证",
        subtitle: "阶段性交付与验证",
        color: "#10B981",
        customerState: "项目拖了很久，最后只能指望一次「大上线」——成功靠运气，失败没人敢担责",
        approach: [
            "拆分为可验证的交付阶段",
            "每一阶段明确：能交付什么",
            "每一阶段明确：怎么验收",
            "每一阶段明确：不通过怎么办"
        ],
        insight: "真正成熟的交付，从来不是「一次成功」，而是每一步都可回退"
    },
    {
        id: 5,
        icon: ShieldCheck,
        title: "运行",
        subtitle: "长期运行与持续保障",
        color: "#8B5CF6",
        customerState: "项目验收通过，实际问题才刚刚开始",
        approach: [
            "把运维与优化纳入交付范围",
            "明确谁负责问题响应",
            "明确谁负责持续优化",
            "明确谁对最终运行效果负责"
        ],
        insight: "客户要的不是「项目完成」，而是系统真的能长期跑"
    }
]

export function UnifiedPracticesSection() {
    const [activeId, setActiveId] = useState<number>(1)
    const [visibleSteps, setVisibleSteps] = useState<number[]>([])

    // Animate steps appearing one by one
    useEffect(() => {
        practices.forEach((_, idx) => {
            setTimeout(() => {
                setVisibleSteps(prev => [...prev, idx + 1])
            }, 150 * (idx + 1))
        })
    }, [])

    const activePractice = practices.find(p => p.id === activeId)

    return (
        <section className="py-8 lg:py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2329] leading-tight mb-2">
                        泊冉如何在项目开始前，关掉失败路径
                    </h2>
                    <p className="text-base text-slate-500">
                        从「高风险项目」到「可不失败的交付」
                    </p>
                </div>

                {/* Trust Badge */}
                <div className="text-center mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E40AF]" />
                        总结自 <strong className="text-[#1F2329]">10+ 年、500+ 企业</strong> 复杂项目实施经验
                    </span>
                </div>

                {/* Clickable Process Flow */}
                <div className="max-w-5xl mx-auto mb-4">
                    {/* Desktop Flow */}
                    <div className="hidden lg:block">
                        <div className="relative flex items-start justify-between">
                            {/* Simple dashed lines with subtle arrows between icons */}
                            <svg 
                                className="absolute top-7 left-0 right-0 h-6 w-full pointer-events-none select-none"
                                style={{ zIndex: 1 }}
                            >
                                <defs>
                                    <marker id="subtleArrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                                        <path d="M0,0 L0,5 L5,2.5 z" fill="#D1D5DB" />
                                    </marker>
                                </defs>
                                
                                {/* Dashed lines between steps - not touching icons */}
                                <line x1="14%" y1="12" x2="26%" y2="12" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#subtleArrow)" />
                                <line x1="34%" y1="12" x2="46%" y2="12" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#subtleArrow)" />
                                <line x1="54%" y1="12" x2="66%" y2="12" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#subtleArrow)" />
                                <line x1="74%" y1="12" x2="86%" y2="12" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#subtleArrow)" />
                            </svg>
                            
                            {practices.map((practice) => (
                                <button
                                    key={practice.id}
                                    onClick={() => setActiveId(practice.id)}
                                    className={`relative flex flex-col items-center w-1/5 transition-all duration-300 group ${
                                        visibleSteps.includes(practice.id) 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-4'
                                    } ${
                                        activeId !== practice.id ? 'opacity-50' : ''
                                    }`}
                                >
                                    {/* Step Circle with Title Inside */}
                                    <div 
                                        className={`relative z-10 w-14 h-14 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                                            activeId === practice.id 
                                                ? 'scale-110 shadow-lg' 
                                                : 'shadow-sm hover:shadow-md hover:scale-105'
                                        }`}
                                        style={{ 
                                            backgroundColor: activeId === practice.id ? practice.color : `${practice.color}10`,
                                            boxShadow: activeId === practice.id ? `0 0 0 2px ${practice.color}25` : undefined
                                        }}
                                    >
                                        <practice.icon 
                                            className={`w-5 h-5 transition-all duration-300 ${
                                                activeId !== practice.id ? 'opacity-60' : ''
                                            }`}
                                            style={{ color: activeId === practice.id ? 'white' : practice.color }}
                                        />
                                        <span 
                                            className={`text-xs font-bold mt-0.5 transition-colors ${
                                                activeId !== practice.id ? 'opacity-70' : ''
                                            }`}
                                            style={{ color: activeId === practice.id ? 'white' : practice.color }}
                                        >
                                            {practice.title}
                                        </span>
                                    </div>

                                    {/* Subtitle below */}
                                    <div className={`mt-1.5 text-center text-xs transition-colors ${
                                        activeId === practice.id ? 'text-[#1F2329] font-medium' : 'text-slate-400'
                                    }`}>
                                        {practice.subtitle}
                                    </div>

                                    {/* Active Indicator */}
                                    {activeId === practice.id && (
                                        <ChevronDown 
                                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 animate-bounce"
                                            style={{ color: practice.color }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Flow - Horizontal Scroll */}
                    <div className="lg:hidden">
                        <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                            {practices.map((practice) => (
                                <button
                                    key={practice.id}
                                    onClick={() => setActiveId(practice.id)}
                                    className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                        activeId === practice.id 
                                            ? 'bg-slate-900 text-white shadow-lg' 
                                            : 'bg-slate-100 text-slate-600'
                                    }`}
                                >
                                    <practice.icon className="w-5 h-5" />
                                    <span className="font-medium whitespace-nowrap">{practice.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Expanded Practice Content */}
                {activePractice && (
                    <div className="max-w-4xl mx-auto mb-12">
                        <div 
                            className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200 transition-all duration-300"
                            style={{ borderTopColor: activePractice.color, borderTopWidth: '3px' }}
                        >
                            {/* Practice Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div 
                                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: `${activePractice.color}15` }}
                                >
                                    <activePractice.icon className="w-7 h-7" style={{ color: activePractice.color }} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 mb-1">实践 {activePractice.id}</div>
                                    <h3 className="text-xl font-bold text-[#1F2329]">
                                        {activePractice.title}——{activePractice.subtitle}
                                    </h3>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-4">
                                {/* Left: Customer State + Insight */}
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                            客户的真实状态
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-slate-600 text-sm leading-snug italic border border-slate-100">
                                            「{activePractice.customerState}」
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                            行业洞察
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            {activePractice.insight}
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Approach */}
                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                        泊冉的做法
                                    </div>
                                    <ul className="space-y-1.5">
                                        {activePractice.approach.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-[#1F2329]">
                                                <CheckCircle2 
                                                    className="w-4 h-4 mt-0.5 flex-shrink-0" 
                                                    style={{ color: activePractice.color }} 
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Summary + CTA */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-slate-500 mb-2">
                        泊冉不是用一套「方法论」交付项目，而是通过
                    </p>
                    <p className="text-xl font-bold text-[#1F2329] mb-4">
                        <span className="text-[#0052D9]">接管责任</span>
                        <span className="mx-3 text-slate-300">·</span>
                        <span className="text-[#F59E0B]">控制复杂度</span>
                        <span className="mx-3 text-slate-300">·</span>
                        <span className="text-[#10B981]">分阶段验证</span>
                    </p>
                    <p className="text-slate-500 mb-8">
                        把复杂项目一步步交付清楚
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#0052D9] hover:bg-[#0040A8] rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        评估：我的项目是否存在失败风险
                    </Link>
                    <p className="text-sm text-slate-400 mt-3">
                        基于真实交付经验，仅做风险判断，不卖系统
                    </p>
                </div>
            </div>
        </section>
    )
}
