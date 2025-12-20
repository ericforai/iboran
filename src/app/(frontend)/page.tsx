'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight, BarChart3, Layout, Globe2, ShieldCheck, Layers } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { Navbar } from '@/components/Navbar'

// --- Visual Constants ---
const _Colors = {
    Base: {
        White: '#FFFFFF',
        Bg: '#F7F8FA',
        Heading: '#1F2329',
        Text: '#4B5563', // Slate-600
    },
    Blue: '#0052D9',
    Red: '#E60012',
}

// --- Components ---

const Hero = () => {
    return (
        <section className="bg-white pt-12 lg:pt-20 pb-20 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-[#1F2329] leading-[1.2] lg:leading-[1.15] mb-4 lg:mb-6">
                            懂软件，<br className="hidden lg:block" />
                            更懂落地。
                        </h1>
                        <p className="text-lg lg:text-2xl text-[#1F2329] font-medium mb-6 lg:mb-8">
                            用友生态中的<span className="text-[#0052D9]">数字化交付特种部队</span>
                        </p>
                        
                        {/* Mobile-only Trust Markers - Immediate Social Proof */}
                        <div className="lg:hidden flex flex-wrap gap-3 mb-8">
                            <div className="flex items-center gap-1.5 bg-blue-50/50 px-2.5 py-1 rounded-full border border-blue-100/50">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#0052D9]" />
                                <span className="text-[11px] font-bold text-[#0052D9]">国家高新技术企业</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-blue-50/50 px-2.5 py-1 rounded-full border border-blue-100/50">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0052D9]" />
                                <span className="text-[11px] font-bold text-[#0052D9]">双软认证企业</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 lg:gap-4 text-xs lg:text-sm text-slate-500 mb-8 lg:mb-10">
                            <span className="bg-slate-100 px-3 py-1 rounded">始于 2012 年</span>
                            <span className="hidden sm:inline w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="bg-slate-100 px-3 py-1 rounded whitespace-nowrap">80% 技术人员</span>
                            <span className="hidden sm:inline w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="bg-slate-100 px-3 py-1 rounded">500+ 客户信赖</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/solutions"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-lg transition-all text-center"
                            >
                                免费获取行业方案
                            </Link>
                            <button
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0052D9] border-2 border-[#0052D9] hover:bg-blue-50 rounded-md transition-all sm:w-auto"
                            >
                                <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center mr-2">
                                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[#0052D9] border-b-[4px] border-b-transparent ml-0.5"></div>
                                </div>
                                观看介绍视频
                            </button>
                        </div>

                        {/* Desktop Trust Strip */}
                        <div className="hidden lg:flex mt-16 pt-8 border-t border-slate-100 flex-wrap gap-8">
                            {[
                                { icon: ShieldCheck, text: "国家高新技术企业" },
                                { icon: CheckCircle2, text: "双软认证企业" },
                                { icon: Globe2, text: "致远互联全国十大定制工厂" },
                            ].map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-2 group cursor-default">
                                    <badge.icon className="w-5 h-5 text-[#0052D9] group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium text-slate-600 group-hover:text-[#0052D9] transition-colors">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:block lg:w-1/2 relative"
                    >
                        <div className="relative z-10 w-full aspect-video max-w-2xl mx-auto">
                            <Image
                                src="/boran_homepage_banner.png"
                                alt="Enterprise Software Integration Hub"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute -top-12 -right-12 w-24 h-24 bg-white rounded-xl shadow-xl border border-slate-100 flex items-center justify-center z-20"
                            >
                                <Layers className="w-10 h-10 text-[#E60012]" />
                            </motion.div>
                            <div className="absolute -bottom-8 -left-8 w-64 h-24 bg-white/80 backdrop-blur rounded-lg shadow-lg border border-slate-100 flex items-center px-6 gap-4 z-20">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-[#1F2329]">系统运行正常</div>
                                    <div className="text-xs text-slate-500">实时监控中...</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const CoreValueGrid = () => {
    const cards = [
        {
            title: "自主产权动态建模平台",
            desc: "拥有泊冉经销商管理、MES生产管理等自主知识产权软件，解决标准产品无法覆盖的 10% 关键需求。",
            icon: Layout
        },
        {
            title: "跨厂商乐高式集成",
            desc: "打通 用友YonSuite + 钉钉 + 致远COP + 达索SOLIDWORKS，消除企业数据孤岛。",
            icon: Layers
        },
        {
            title: "全球化与高难场景专家",
            desc: "曾助力【汉盛科技】实现中国、泰国、新加坡多地系统同步上线，解决海外风控难题。",
            icon: Globe2
        }
    ]

    return (
        <section className="py-24 bg-[#F7F8FA]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-[#1F2329] mb-4">为什么选择泊冉？</h2>
                    <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full"></div>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0052D9]/30 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0052D9] transition-colors duration-300">
                                <card.icon className="w-7 h-7 text-[#0052D9] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2329] mb-4">{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm lg:text-base">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const SolutionTabs = () => {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            id: "finance",
            label: "智能财务 (U8 Cloud / 财务云)",
            title: "智能财务解决方案",
            desc: "解决多组织报表合并与业财一体化。",
            features: ["多准则核算体系", "实时合并报表", "银企直联支付", "全面预算管理"],
            color: "from-blue-500 to-indigo-600",
            icon: BarChart3
        },
        {
            id: "manufacturing",
            label: "智能制造 (MES + AIoT)",
            title: "智能制造解决方案",
            desc: "实现从设计到生产的 C2M 全链路数字化。",
            features: ["LRP 计划运算", "车间工序派工", "PDA 扫码报工", "质量追溯体系"],
            color: "from-red-500 to-orange-600",
            icon: SettingsIcon
        },
        {
            id: "hr",
            label: "人力资源 (致远薪税云)",
            title: "人力资源解决方案",
            desc: "打造入转调离全生命周期管理。",
            features: ["组织架构管理", "复杂薪资计算", "个税一键申报", "员工自助服务"],
            color: "from-emerald-500 to-teal-600",
            icon: UsersIcon
        }
    ]

    // Helper icons for specific tabs
    function SettingsIcon(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg> }
    function UsersIcon(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> }

    return (
        <section className="py-12 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Sidebar Tabs - Horizontal scroll on mobile, vertical on desktop */}
                    <div className="lg:w-1/3 flex overflow-x-auto lg:flex-col gap-3 pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide no-scrollbar">
                        {tabs.map((tab, idx) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(idx)}
                                className={`flex-shrink-0 text-left px-6 lg:px-8 py-4 lg:py-6 rounded-xl border transition-all duration-300 min-w-[240px] lg:min-w-0 ${activeTab === idx
                                    ? 'bg-[#F7F8FA] border-[#0052D9] shadow-sm ring-1 ring-[#0052D9]/10'
                                    : 'bg-white border-slate-100 hover:bg-slate-50'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`font-bold text-base lg:text-lg ${activeTab === idx ? 'text-[#0052D9]' : 'text-slate-600'}`}>
                                        {tab.label}
                                    </span>
                                    <ChevronRight className={`hidden lg:block w-5 h-5 ${activeTab === idx ? 'text-[#0052D9]' : 'text-slate-300'}`} />
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="bg-[#F7F8FA] rounded-3xl p-6 lg:p-10 h-full border border-slate-100"
                            >
                                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${tabs[activeTab].color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                    {React.createElement(tabs[activeTab].icon, { className: 'w-6 h-6 lg:w-7 lg:h-7' })}
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-[#1F2329] mb-3 lg:mb-4">{tabs[activeTab].title}</h3>
                                <p className="text-base lg:text-lg text-slate-600 mb-6 lg:mb-8">{tabs[activeTab].desc}</p>

                                <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                                    {tabs[activeTab].features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-3 lg:p-4 rounded-xl border border-slate-100 shadow-sm">
                                            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0052D9]" />
                                            </div>
                                            <span className="font-semibold text-slate-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-slate-200">
                                    <Link href={`/solution/${tabs[activeTab].id}`} className="inline-flex items-center text-[#E60012] font-bold hover:underline gap-1">
                                        了解详情 <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SocialProof = () => {
    return (
        <section className="py-20 bg-[#1F2329] text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">500+ 行业领军企业的共同选择</h2>

                {/* Logo Wall */}
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-70 mb-16 grayscale">
                    <div className="text-xl font-bold font-serif tracking-widest">BURGER KING</div>
                    <div className="text-xl font-bold font-sans tracking-tight">SHELL</div>
                    <div className="text-xl font-bold tracking-widest">bilibili</div>
                    <div className="text-xl font-serif font-black">久事集团</div>
                    <div className="text-xl font-bold">强生出租</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                        <div className="text-4xl font-bold text-[#E60012] mb-2">12年+</div>
                        <div className="text-slate-400 font-medium">行业经验</div>
                    </div>
                    <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                        <div className="text-4xl font-bold text-[#E60012] mb-2">100+</div>
                        <div className="text-slate-400 font-medium">软件著作权</div>
                    </div>
                    <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                        <div className="text-4xl font-bold text-[#E60012] mb-2">98%</div>
                        <div className="text-slate-400 font-medium">交付成功率</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="bg-[#F7F8FA] border-t border-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="text-2xl font-bold text-[#1F2329]">泊冉软件</div>
                            <span className="text-xs bg-[#E60012] text-white px-1.5 py-0.5 rounded">铂金伙伴</span>
                        </div>
                        <div className="space-y-3 text-slate-500 text-sm">
                            <p>上海泊冉软件有限公司</p>
                            <p>上海市普陀区曹杨路1888号星光耀广场1号楼1005室</p>
                            <p className="font-semibold text-[#1F2329] pt-2 text-lg">售前热线 400-9955-161</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Placeholder links to flesh out footer */}
                        {[
                            { title: '产品', links: ['U8 Cloud', 'YonSuite', '人力云', '供应链云'] },
                            { title: '解决方案', links: ['智能财务', '智能制造', '新零售', '项目管理'] },
                            { title: '服务', links: ['实施交付', '二次开发', '运维支持', '客户培训'] },
                            { title: '关于', links: ['公司简介', '新闻动态', '加入我们', '联系我们'] },
                        ].map((col, i) => (
                            <div key={i}>
                                <h4 className="font-bold text-[#1F2329] mb-4">{col.title}</h4>
                                <ul className="space-y-2">
                                    {col.links.map(l => (
                                        <li key={l}>
                                            <Link href="#" className="text-sm text-slate-500 hover:text-[#0052D9] transition-colors">{l}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
                    © 2024 Boran Software. 沪ICP备13039056号.
                </div>
            </div>
        </footer>
    )
}

export default function Page() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

    return (
        <div className="font-sans text-slate-600 bg-white min-h-screen flex flex-col">
            <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />
            <main className="flex-grow">
                <Hero />
                <CoreValueGrid />
                <SolutionTabs />
                <SocialProof />
            </main>
            <Footer />
            <DemoRequestModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />
        </div>
    )
}

