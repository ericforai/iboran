import React from 'react'
import Link from 'next/link'
import {
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Layers,
  Layout,
  Link2Off,
  Infinity,
  TrendingDown,
  AlertTriangle
} from 'lucide-react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'

// Components
import { IndustrySolutionsSection } from './_sections/IndustrySolutionsSection'
import { SuccessStoriesSection } from './_sections/SuccessStoriesSection'
import { RecentPostsSection } from './_sections/RecentPostsSection'
import { UnifiedPracticesSection } from './_sections/UnifiedPracticesSection'
import { PageClientWrapper } from './page.client.wrapper'
import { NeuStatCard } from '@/components/NeuStatCard'
import { NeuFeatureCard } from '@/components/NeuFeatureCard'

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-white via-slate-50 to-blue-50 pt-20 lg:pt-32 pb-24 lg:pb-40 overflow-hidden">
            {/* Animated Tech Background - Light Theme */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(#0052D9 1px, transparent 1px), linear-gradient(90deg, #0052D9 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                
                {/* Flowing Lines Animation - Light Theme */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="lineGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0052D9" stopOpacity="0" />
                            <stop offset="50%" stopColor="#0052D9" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#0052D9" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {/* Horizontal flowing lines */}
                    <g className="animate-pulse">
                        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="url(#lineGradientLight)" strokeWidth="1" />
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGradientLight)" strokeWidth="1" />
                        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#lineGradientLight)" strokeWidth="1" />
                    </g>
                    {/* Glowing dots */}
                    <circle cx="15%" cy="25%" r="3" fill="#0052D9" className="animate-ping opacity-20" />
                    <circle cx="50%" cy="50%" r="2" fill="#0052D9" className="animate-ping opacity-15" style={{ animationDelay: '0.5s' }} />
                    <circle cx="85%" cy="75%" r="3" fill="#0052D9" className="animate-ping opacity-20" style={{ animationDelay: '1s' }} />
                </svg>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Main Content - Centered */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    {/* Brand + Tagline with shimmer effect */}
                    <div className="mb-6">
                        <span className="inline-block text-lg sm:text-xl font-bold bg-gradient-to-r from-[#0052D9] via-[#00A3FF] to-[#0052D9] bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] bg-clip-text text-transparent">
                            泊冉
                        </span>
                        <span className="text-slate-300 mx-2">——</span>
                        <span className="text-slate-500 text-lg sm:text-xl">
                            复杂项目交付专家
                        </span>
                    </div>
                    
                    {/* H1 - Main Headline - One line on desktop, two lines on mobile */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F2329] leading-[1.1] mb-6">
                        复杂不是问题，<br className="sm:hidden" /><span className="text-[#E60012]">失控才是！</span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-base sm:text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                        ERP / 协同 / 二次开发 / 系统集成，一次性交付到位
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#0052D9] hover:bg-[#0040A8] rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            评估我的项目是否会失控
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link
                            href="/cases"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0052D9] border-2 border-[#0052D9] hover:bg-[#0052D9] hover:text-white rounded-lg transition-all"
                        >
                            查看成功案例
                        </Link>
                    </div>
                </div>
                
                {/* Neumorphism Data Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                    {[
                        { number: "2012", label: "年成立", sublabel: "12年深耕" },
                        { number: "500+", label: "中大型客户", sublabel: "交付经验" },
                        { number: "80%", label: "技术人员", sublabel: "团队构成" },
                    ].map((stat, idx) => (
                        <NeuStatCard 
                            key={idx} 
                            number={stat.number}
                            label={stat.label}
                            sublabel={stat.sublabel}
                        />
                    ))}
                </div>
                
                {/* Trust Anchors */}
                <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-slate-500 text-sm mb-12">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#0052D9] rounded-full"></span>
                        <span>用友生态深度伙伴</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#0052D9] rounded-full"></span>
                        <span>致远互联全国十大定制工厂</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#0052D9] rounded-full"></span>
                        <span>钉钉生态合作伙伴</span>
                    </div>
                </div>
                
                {/* Certifications */}
                <div className="pt-8 border-t border-slate-200 flex flex-wrap justify-center gap-6 lg:gap-10">
                    {[
                        { icon: ShieldCheck, text: "国家高新技术企业" },
                        { icon: CheckCircle2, text: "双软认证企业" },
                    ].map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-400 hover:text-[#0052D9] transition-colors">
                            <badge.icon className="w-4 h-4" />
                            <span className="text-xs font-medium">{badge.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// 3类典型失控场景 - 让客户对号入座
const FailureScenarios = () => {
    const scenarios = [
        {
            icon: Link2Off,
            title: "系统一堆，责任没人扛",
            description: "ERP、协同、钉钉、WMS、MES 都在跑，一出问题，每家都说「不是我这边」",
            symptoms: [
                "多厂商、多产品、多实施方",
                "集成靠接口，问题靠扯皮",
                "项目会上永远在「定位问题」",
                "老板只问一句：到底谁负责？"
            ],
            solution: "泊冉作为总交付方，统一架构、统一责任、统一验收——不再让客户充当「项目经理」",
            color: "#0052D9"
        },
        {
            icon: Infinity,
            title: "二开失控，系统变成「定制黑洞」",
            description: "需求不断加，代码不断堆，项目越来越「像你们公司」，却越来越难交付",
            symptoms: [
                "二开需求没有边界",
                "核心逻辑写在个人脑子里",
                "新需求一来，老功能就出问题",
                "系统「能用」，但没人敢动"
            ],
            solution: "用可演进的架构 + 可管理的二开方式，把「一次性交付」变成「长期可控」",
            color: "#F59E0B"
        },
        {
            icon: TrendingDown,
            title: "系统上线了，业务却没跟上",
            description: "项目验收通过了，但业务还是在 Excel、微信群和人工对账里",
            symptoms: [
                "系统是「IT 的」，不是业务的",
                "流程设计脱离真实操作",
                "一到高峰期就靠人工补",
                "管理层看不到真实数据"
            ],
            solution: "从流程和角色出发设计系统，不是「把软件装上」，而是让业务跑起来",
            color: "#EF4444"
        }
    ]

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#1F2329] leading-tight mb-4">
                        大多数管理软件项目，不是失败在技术，<br className="hidden sm:block" />
                        <span className="text-[#E60012]">而是失控在过程</span>
                    </h2>
                    <p className="text-lg text-slate-500">
                        泊冉专注解决用友生态中，最常见、也最棘手的 3 类交付失控问题
                    </p>
                </div>

                {/* Scenario Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {scenarios.map((scenario, idx) => (
                        <div 
                            key={idx}
                            className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Icon + Title in one row */}
                            <div className="flex items-center gap-3 mb-4">
                                <div 
                                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                                    style={{ backgroundColor: `${scenario.color}15` }}
                                >
                                    <scenario.icon className="w-5 h-5" style={{ color: scenario.color }} />
                                </div>
                                <h3 className="text-lg font-bold text-[#1F2329]">
                                    {scenario.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-slate-500 mb-5 text-sm leading-relaxed">
                                {scenario.description}
                            </p>

                            {/* Symptoms */}
                            <div className="mb-6">
                                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">典型特征</div>
                                <ul className="space-y-2">
                                    {scenario.symptoms.map((symptom, sIdx) => (
                                        <li key={sIdx} className="flex items-start gap-2 text-sm text-slate-600">
                                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: scenario.color }}></span>
                                            {symptom}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solution */}
                            <div className="pt-5 border-t border-slate-200">
                                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">泊冉的解决方式</div>
                                <p className="text-sm text-[#1F2329] font-medium leading-relaxed">
                                    {scenario.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 lg:p-8 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span className="text-amber-600 font-semibold text-sm">风险提示</span>
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-[#1F2329] mb-1">
                        如果你遇到的，不止一个场景
                    </p>
                    <p className="text-slate-500 text-sm mb-6">
                        那你的项目，可能存在失败风险
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#1E40AF] hover:bg-[#1E3A8A] rounded-lg shadow-md transition-all"
                    >
                        免费评估：我的项目风险
                    </Link>
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
        <section className="py-24 bg-[#E0E5EC]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-[#3D4852] mb-4">为什么选择泊冉？</h2>
                    <div className="w-16 h-1 bg-[#6C63FF] mx-auto rounded-full"></div>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <NeuFeatureCard
                            key={idx}
                            icon={card.icon}
                            title={card.title}
                            description={card.desc}
                        />
                    ))}
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

                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-70 mb-16 grayscale">
                    <div className="text-xl font-bold font-serif tracking-widest">BURGER KING</div>
                    <div className="text-xl font-bold font-sans tracking-tight">SHELL</div>
                    <div className="text-xl font-bold tracking-widest">bilibili</div>
                    <div className="text-xl font-serif font-black">久事集团</div>
                    <div className="text-xl font-bold">强生出租</div>
                </div>

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

export default async function Page() {
    const payload = await getPayload({ config: configPromise })
    const contactData = await getCachedGlobal('contact', 1)() as Contact

    const [industrySolutions, successStories, latestPosts] = await Promise.all([
      payload.find({
        collection: 'industry-solutions',
        limit: 3,
        sort: '-updatedAt',
      }),
      payload.find({
        collection: 'success-stories',
        limit: 4,
        sort: '-updatedAt',
      }),
      payload.find({
        collection: 'posts',
        limit: 3,
        sort: '-publishedAt',
      }),
    ])

    return (
        <div className="font-sans text-slate-600 bg-white min-h-screen flex flex-col">
            <PageClientWrapper contactData={contactData}>
              <main className="flex-grow">
                  <Hero />
                  <FailureScenarios />
                  <UnifiedPracticesSection />
                  <CoreValueGrid />
                  <IndustrySolutionsSection solutions={industrySolutions.docs as any} />
                  <SuccessStoriesSection stories={successStories.docs as any} />
                  <RecentPostsSection posts={latestPosts.docs as any} />
                  <SocialProof />
              </main>
            </PageClientWrapper>
            <Footer />
        </div>
    )
}


