'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
    Stethoscope,
    GitBranch,
    Settings2,
    ListChecks,
    ShieldCheck,
    ChevronDown,
    ChevronUp,
    CheckCircle2
} from 'lucide-react'

interface Practice {
    id: number
    icon: React.ElementType
    title: string
    color: string
    customerState: string
    approach: string[]
    insight: string
}

const practices: Practice[] = [
    {
        id: 1,
        icon: Stethoscope,
        title: "止血——在项目推进前，先识别不可交付风险",
        color: "#EF4444",
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
        title: "统一架构，明确责任边界",
        color: "#0052D9",
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
        title: "二开可控化——从「不可控」变成「可演进」",
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
        title: "分阶段交付与验证，而不是一次性「赌上线」",
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
        title: "上线不是结束，而是责任的延续",
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

export function BestPracticesSection() {
    const [activeId, setActiveId] = useState<number>(1)

    return (
        <section className="py-20 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Trust Badge */}
                <div className="text-center mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-[#0052D9]" />
                        总结自泊冉 <strong className="text-[#1F2329]">10+ 年、500+ 企业</strong> 复杂项目交付经验
                    </span>
                </div>

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2329] leading-tight mb-4">
                        泊冉如何在项目开始前，关掉失败路径
                    </h2>
                    <p className="text-slate-500">
                        适用于：多系统、多定制、多参与方的用友生态项目
                    </p>
                </div>

                {/* Practices Accordion/Tabs */}
                <div className="max-w-4xl mx-auto mb-12">
                    {/* Desktop: Tab Navigation */}
                    <div className="hidden lg:flex gap-2 mb-6 p-1 bg-white rounded-xl border border-slate-200">
                        {practices.map((practice) => (
                            <button
                                key={practice.id}
                                onClick={() => setActiveId(practice.id)}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                    activeId === practice.id
                                        ? 'bg-[#1F2329] text-white shadow-lg'
                                        : 'text-slate-600 hover:bg-slate-100'
                                }`}
                            >
                                <practice.icon className="w-4 h-4" />
                                <span className="hidden xl:inline">实践 {practice.id}</span>
                                <span className="xl:hidden">{practice.id}</span>
                            </button>
                        ))}
                    </div>

                    {/* Desktop: Active Practice Content */}
                    <div className="hidden lg:block">
                        {practices.filter(p => p.id === activeId).map((practice) => (
                            <PracticeCard key={practice.id} practice={practice} />
                        ))}
                    </div>

                    {/* Mobile: Accordion */}
                    <div className="lg:hidden space-y-3">
                        {practices.map((practice) => (
                            <div key={practice.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <button
                                    onClick={() => setActiveId(activeId === practice.id ? 0 : practice.id)}
                                    className="w-full flex items-center gap-4 p-4 text-left"
                                >
                                    <div 
                                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${practice.color}15` }}
                                    >
                                        <practice.icon className="w-5 h-5" style={{ color: practice.color }} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs text-slate-400 mb-1">实践 {practice.id}</div>
                                        <div className="font-semibold text-[#1F2329] text-sm truncate">{practice.title}</div>
                                    </div>
                                    {activeId === practice.id ? (
                                        <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                    )}
                                </button>
                                {activeId === practice.id && (
                                    <div className="px-4 pb-4">
                                        <PracticeContent practice={practice} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <p className="text-lg text-slate-600">
                        泊冉不是靠一套「方法论」交付项目，而是通过
                    </p>
                    <p className="text-xl font-bold text-[#1F2329] mt-2">
                        <span className="text-[#0052D9]">接管责任</span>
                        <span className="mx-2 text-slate-300">·</span>
                        <span className="text-[#F59E0B]">控制复杂度</span>
                        <span className="mx-2 text-slate-300">·</span>
                        <span className="text-[#10B981]">分阶段验证</span>
                    </p>
                    <p className="text-lg text-slate-600 mt-2">
                        把复杂项目一步步交付清楚
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#0052D9] hover:bg-[#0040A8] rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        评估：我的项目是否存在失败风险
                    </Link>
                    <p className="text-sm text-slate-400 mt-3">
                        基于真实交付经验，不卖系统，只给判断
                    </p>
                </div>
            </div>
        </section>
    )
}

// Desktop Practice Card
function PracticeCard({ practice }: { practice: Practice }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-start gap-6">
                <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${practice.color}15` }}
                >
                    <practice.icon className="w-8 h-8" style={{ color: practice.color }} />
                </div>
                <div className="flex-1">
                    <div className="text-sm text-slate-400 mb-1">实践 {practice.id}</div>
                    <h3 className="text-xl font-bold text-[#1F2329] mb-4">{practice.title}</h3>
                    <PracticeContent practice={practice} />
                </div>
            </div>
        </div>
    )
}

// Practice Content (shared between desktop and mobile)
function PracticeContent({ practice }: { practice: Practice }) {
    return (
        <div className="space-y-5">
            {/* Customer State */}
            <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    客户的真实状态
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-slate-600 text-sm leading-relaxed italic">
                    「{practice.customerState}」
                </div>
            </div>

            {/* Approach */}
            <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    泊冉的做法
                </div>
                <ul className="space-y-2">
                    {practice.approach.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#1F2329]">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: practice.color }} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Insight */}
            <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    行业洞察
                </div>
                <p className="text-sm font-medium leading-relaxed" style={{ color: practice.color }}>
                    {practice.insight}
                </p>
            </div>
        </div>
    )
}
