'use client'

import React, { useState } from 'react'
import {
  ArrowRight,
  Award,
  Target,
  ShieldCheck,
  Rocket,
  Code,
  DollarSign,
  Cpu
} from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { motion } from 'framer-motion'
import { LogoWall } from '@/components/LogoWall'
import Link from 'next/link'
import Image from 'next/image'

const milestones = [
  { year: '2012', title: '公司成立', desc: '泊冉软件正式成立，开启一站式企业管理解决方案征程。' },
  { year: '2017', title: '杰出合作伙伴', desc: '凭借卓越的实施交付能力，获评用友 TOP 10 杰出合作伙伴。' },
  { year: '2019', title: '高新技术企业', desc: '正式获评国家级"高新技术企业"认定，迈入技术驱动新阶段。' },
  { year: '2023', title: '专精特新', desc: '获评上海市"专精特新"中小企业及上海市"重合同守信用"企业认证。' },
]

const values = [
  {
    icon: Target,
    title: '使命 Mission',
    desc: '懂变，才安稳。泊冉，14年未雨绸缪。专注于 AI 企业数智化升级，助力企业在变局中实现稳健增长。'
  },
  {
    icon: ShieldCheck,
    title: '核心实力 Strength',
    desc: '80% 以上技术人员占比，专注于 AI 企业数智化，深耕现代服务业与智能制造。'
  },
  {
    icon: Award,
    title: '行业信任 Trust',
    desc: '5500+ 客户的共同选择，包含 500+ 集团企业、世界500强与大型国企。'
  },
]

const productEcosystem = {
  agency: [
    { name: '用友 ERP', level: '合作伙伴', icon: Award },
  ],
  selfDeveloped: [
    { name: '泊冉动态建模平台', desc: '自主知识产权的低代码开发引擎', icon: Code },
    { name: '会计档案平台', desc: '业财电子档案合规化管理', icon: ShieldCheck },
    { name: '集成/连接器', desc: '打通异构系统数据孤岛', icon: Rocket },
    { name: '税务系统', desc: '智能税务管理与合规申报', icon: DollarSign },
    { name: 'AI 场景落地', desc: '业务驱动的 AI 智能插件', icon: Cpu },
  ]
}

const certificates = [
  { name: '国家级高新技术企业', year: '2019', category: 'gov', image: '/certificates/高新技术企业.jpg' },
  { name: '软件企业证书', year: '2020', category: 'gov', image: '/certificates/软件企业证书.jpg' },
]



export function AboutPageContent() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const handleOpenDemo = () => setIsDemoOpen(true)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 min-h-[56vh] md:min-h-[70vh] flex items-center py-14 md:py-20 overflow-hidden">
        {/* Snowy Mountain Background Placeholder */}
        <div className="absolute inset-0 z-0">
            {/* Suggested image path: /Users/user/.gemini/antigravity/brain/fa9f57d1-bc2a-4ee7-89ff-71e535036113/boran_hero_mountain.png */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-slate-900/60 to-slate-900"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs md:text-sm font-bold mb-5 md:mb-8 backdrop-blur-md shadow-lg shadow-blue-900/20">
                安 以 应 变 · 未 雨 会 泊 冉
              </div>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-5 md:mb-8 tracking-tight md:tracking-tighter leading-tight">
                专注企业全面上云与<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  AI 数智化升级
                </span>
              </h1>
              <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-7 md:mb-12">
                总部位于上海，于南京设立研发中心。泊冉专注于为华东地区及全国企业提供个性化整体解决方案。
                我们以 80% 的技术人员占比，筑牢您的数智化转型护城河。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
                <button
                  onClick={handleOpenDemo}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-[#E60012] text-white font-bold rounded-2xl hover:bg-red-700 transition-all duration-300 shadow-2xl shadow-red-500/20"
                >
                  预约专家咨询
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  href="#trust"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all"
                >
                  查看核心实力
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (Data-Driven) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: '服务经验', value: '14+', unit: '年', sub: '始于 2012' },
              { label: '技术人员占比', value: '80', unit: '%+', sub: '研发驱动 DNA' },
              { label: '累计服务客户', value: '5500', unit: '+', sub: '其中包含 500+ 集团企业' },
              { label: '自主技术专利', value: '60', unit: '+', sub: '坚持技术自研' },
            ].map((stat: any) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center group p-3 md:p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                <div className="flex flex-row flex-nowrap items-baseline mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                  <span className="text-3xl md:text-5xl font-black tracking-tight">{stat.value}</span>
                  <span className="ml-1 text-base md:text-lg font-bold text-slate-500 group-hover:text-blue-500">{stat.unit}</span>
                </div>
                <div className="text-sm md:text-base font-bold text-slate-800 mb-1">{stat.label}</div>
                <div className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Branding Dimensions */}
      <section id="trust" className="py-14 md:py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {values.map((v: any, i: number) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-4 md:mb-8 md:block">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center md:mb-4 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500">
                    <v.icon className="w-6 h-6 md:w-8 md:h-8 text-[#0052D9] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">{v.title}</h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 md:mb-8 flex items-center gap-3 md:gap-4">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              优势生态：集成与自研并重
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              我们不仅提供行业实践成熟的软件平台，更具备深度的自主研发能力，为现代服务业与智能制造提供定制化行业护城河。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-7 lg:gap-20">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">代理体系</h3>
              {productEcosystem.agency.map((p: any) => (
                <div key={p.name} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{p.name}</div>
                    <div className="text-xs text-slate-500">{p.level}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-sm font-bold text-red-600 uppercase tracking-widest">自主知识产权产品</h3>
              {productEcosystem.selfDeveloped.map((p: any) => (
                <div key={p.name} className="flex items-center gap-4 p-4 rounded-2xl bg-red-50/50 border border-red-100">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{p.name}</div>
                    <div className="text-xs text-slate-500">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-14 md:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-4">进阶历程与荣誉</h2>
              <p className="text-slate-400">从深耕华东到服务全国，泊冉始终坚持技术精进</p>
           </div>

           <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Horizontal Line (Hidden on mobile) */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800 hidden lg:block"></div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 md:gap-12 relative z-10">
                  {milestones.map((m: any, i: number) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pt-12 lg:pt-0"
                    >
                      {/* Vertical line for mobile */}
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 lg:hidden"></div>

                      <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-950 transition-all duration-500 bg-blue-600 group-hover:scale-150 top-1/2 -translate-y-1/2`}></div>
                      <div className="pl-8 lg:pl-0 lg:text-center lg:mt-12">
                        <div className="text-4xl font-black text-blue-500 mb-2">{m.year}</div>
                        <div className="text-xl font-bold mb-3">{m.title}</div>
                        <div className="text-sm text-slate-400 leading-relaxed">{m.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-14 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-9 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3 md:mb-4">资质认证</h2>
            <p className="text-slate-600">合规认证，品质保障</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {certificates.map((cert: any) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] bg-slate-50 rounded-xl mb-4 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1 text-center">{cert.name}</h3>
                <p className="text-sm text-slate-500 text-center">获证于 {cert.year} 年</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Trust - Client Logo Wall */}
      <LogoWall className="pt-0" />

      <section className="pb-14 md:pb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mt-10 md:mt-20 pt-8 md:pt-16 border-t border-slate-100 flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-3 md:gap-y-6">
            <Link href="/solution/industry/new-retail" className="text-sm text-slate-400 hover:text-blue-600 transition-colors"># 新零售解决方案</Link>
            <Link href="/solution/business/business-finance-integration" className="text-sm text-slate-400 hover:text-blue-600 transition-colors"># 业财一体化</Link>
            <Link href="/solution/industry/smart-manufacturing" className="text-sm text-slate-400 hover:text-blue-600 transition-colors"># 智慧工厂 4.0</Link>
          </div>
        </div>
      </section>


      {/* Bottom CTA */}
      <section className="py-14 md:py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-5xl font-black text-white mb-5 md:mb-8">
              开启数字化演进的下一程
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-7 md:mb-12">
              我们的咨询专家已准备好为您诊断业务痛点，提供落地可控的数智转型蓝图。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <button
                onClick={handleOpenDemo}
                className="px-10 py-3.5 md:px-12 md:py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/20"
              >
                立即免费咨询
              </button>
              <div className="flex items-center gap-4 text-white pl-4 border-l border-slate-700">
                <div className="text-left">
                  <div className="text-xs text-slate-500">咨询热线</div>
                  <div className="text-2xl font-black tracking-tighter">400-9955-161</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  )
}
