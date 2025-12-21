import React from 'react'
import Link from 'next/link'
import {
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Layers,
  Layout
} from 'lucide-react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'

// Components
import { IndustrySolutionsSection } from '../_sections/IndustrySolutionsSection'
import { SuccessStoriesSection } from '../_sections/SuccessStoriesSection'
import { RecentPostsSection } from '../_sections/RecentPostsSection'
import { PageClientWrapper } from '../page.client.wrapper'

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 pt-12 lg:pt-20 pb-20 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left: Text */}
                    <div className="w-full lg:w-1/2">
                        {/* Pain Point Hook */}
                        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#E60012] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <span className="w-2 h-2 bg-[#E60012] rounded-full animate-pulse"></span>
                            专治别家搞不定的项目
                        </div>
                        
                        <h1 className="text-4xl lg:text-[3.5rem] font-extrabold text-[#1F2329] leading-[1.2] lg:leading-[1.15] mb-4 lg:mb-6">
                            <span className="text-[#E60012]">ERP又延期了？</span><br className="hidden lg:block" />
                            <span className="text-[#E60012]">供应商在甩锅？</span>
                        </h1>
                        <p className="text-lg lg:text-2xl text-[#1F2329] font-medium mb-3">
                            用友生态中的<span className="text-[#0052D9] font-bold">复杂项目交付专家</span>
                        </p>
                        <p className="text-base lg:text-lg text-slate-500 mb-6 lg:mb-8">
                            专门接手 ERP延期 / 多系统打通 / 厂商扯皮 的棘手项目
                        </p>
                        
                        {/* Mobile-only Trust Markers - Results Oriented */}
                        <div className="lg:hidden flex flex-wrap gap-3 mb-8">
                            <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-[11px] font-bold text-green-700">98% 按期交付</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#0052D9]" />
                                <span className="text-[11px] font-bold text-[#0052D9]">127+ 烂尾项目救活</span>
                            </div>
                        </div>

                        {/* Results-Oriented Stats */}
                        <div className="flex flex-wrap items-center gap-3 lg:gap-4 text-xs lg:text-sm mb-8 lg:mb-10">
                            <span className="bg-green-50 text-green-700 font-bold px-3 py-1.5 rounded-lg border border-green-100">
                                ✓ 98% 按期交付率
                            </span>
                            <span className="hidden sm:inline w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="bg-blue-50 text-[#0052D9] font-bold px-3 py-1.5 rounded-lg border border-blue-100">
                                ✓ 127+ 烂尾项目救活
                            </span>
                            <span className="hidden sm:inline w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="bg-orange-50 text-orange-600 font-bold px-3 py-1.5 rounded-lg border border-orange-100">
                                ✓ 周期缩短 40%
                            </span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-lg hover:shadow-xl transition-all text-center group"
                            >
                                <span className="mr-2">📞</span>
                                立即诊断项目问题
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <Link
                                href="/cases"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0052D9] border-2 border-[#0052D9] hover:bg-blue-50 rounded-md transition-all sm:w-auto"
                            >
                                <span className="mr-2">📋</span>
                                查看相似案例
                            </Link>
                        </div>

                        {/* Desktop Trust Strip - Certification */}
                        <div className="hidden lg:flex mt-16 pt-8 border-t border-slate-200 flex-wrap gap-8">
                            {[
                                { icon: ShieldCheck, text: "国家高新技术企业" },
                                { icon: CheckCircle2, text: "双软认证企业" },
                                { icon: Globe2, text: "致远互联全国十大定制工厂" },
                            ].map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-2 group cursor-default">
                                    <badge.icon className="w-5 h-5 text-slate-400 group-hover:text-[#0052D9] transition-colors" />
                                    <span className="text-sm font-medium text-slate-500 group-hover:text-[#0052D9] transition-colors">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Illustration */}
                    <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
                        <div className="relative z-10 w-full aspect-[4/3] max-w-2xl mx-auto">
                            <img
                                src="/banner-hero.png"
                                alt="项目从延期到成功上线的转变"
                                className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
                            />

                            {/* Stats Floating Card */}
                            <div className="hidden sm:flex absolute -top-8 -right-8 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-20 flex-col items-center">
                                <div className="text-3xl font-black text-[#E60012]">127+</div>
                                <div className="text-xs text-slate-500 font-medium">烂尾项目救活</div>
                            </div>
                            
                            {/* Customer Testimonial Floating Card */}
                            <div className="hidden sm:flex absolute -bottom-6 -left-6 w-72 bg-white/95 backdrop-blur rounded-xl shadow-xl border border-slate-100 p-5 z-20 flex-col">
                                <div className="flex items-center gap-1 mb-2">
                                    {[1,2,3,4,5].map((star) => (
                                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-sm text-[#1F2329] font-medium leading-relaxed mb-3">
                                    &ldquo;3个月，把之前1年没上线的系统落地了&rdquo;
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                        王
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-[#1F2329]">某制造业 CIO</div>
                                        <div className="text-[10px] text-slate-400">ERP系统集成项目</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0052D9]/30 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0052D9] transition-colors duration-300">
                                <card.icon className="w-7 h-7 text-[#0052D9] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2329] mb-4">{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm lg:text-base">
                                {card.desc}
                            </p>
                        </div>
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


