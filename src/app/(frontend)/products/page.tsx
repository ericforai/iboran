import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, Zap, Layers, Cpu, Database, Activity } from 'lucide-react'
import { productCategories } from '@/data/products'
import { GeoSection } from '@/components/GeoSection'

export const metadata: Metadata = {
  title: '企业数字化产品与平台总览 | 用友BIP / YonSuite / ERP / iPaaS',
  description: '企业数字化产品全景图，覆盖用友BIP、YonSuite、U8/U9云ERP，以及iPaaS集成、数据中台、低代码等关键能力。',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E60012] to-[#FF5E62] py-16 lg:py-32 overflow-hidden text-white">
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.yonyou.com/static/images/bip/banner_bg.png')] bg-cover bg-no-repeat"></div>
         </div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-6xl font-black mb-4 lg:mb-6 tracking-tight">企业数字化产品与平台总览</h1>
            <p className="text-base md:text-2xl opacity-90 mb-6 lg:mb-10 max-w-3xl mx-auto">
              从初创企业到大型集团，提供全生命周期的数智化解决方案底座
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 py-4 lg:py-8">
               <div className="flex items-center gap-2 opacity-80">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-sm font-bold uppercase tracking-widest">SaaS Cloud</span>
               </div>
               <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center gap-2 opacity-80">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-sm font-bold uppercase tracking-widest">Hybrid Cloud</span>
               </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center gap-2 opacity-80">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-sm font-bold uppercase tracking-widest">PaaS Platform</span>
               </div>
            </div>
         </div>
      </section>

      {/* Product Architecture Map (Visual) */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-3xl font-bold text-[#1F2329] mb-4">产品全景图</h2>
            <p className="text-slate-500">一站式覆盖企业数智化转型全场景</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-4 lg:space-y-8">
            {/* Top Layer: Enterprise & Growth */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              {/* BIP */}
              <div className="bg-white rounded-3xl p-5 lg:p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-32 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                   <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-100/50 rounded-xl flex items-center justify-center text-[#E60012]">
                        <Globe className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-black text-[#1F2329]">用友 BIP 商业创新平台</h3>
                        <p className="text-xs font-bold text-[#E60012] uppercase tracking-widest mt-1">大型企业</p>
                      </div>
                   </div>
                   <p className="text-slate-600 mb-5 lg:mb-8 leading-relaxed h-auto lg:h-12 text-sm lg:text-base">
                     面向大型企业的旗舰级数智化底座，重构企业数智战斗力，覆盖财务、人力、供应链等十大核心领域。
                   </p>
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-3 mb-5 lg:mb-8">
                      {['财务云', '人力云', '供应链', '营销云'].map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-600 text-center">{tag}</span>
                      ))}
                   </div>
                   <Link href="/products/bip" className="inline-flex items-center gap-2 text-[#E60012] font-bold hover:gap-3 transition-all">
                     了解详情 <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </div>

              {/* YonSuite */}
              <div className="bg-white rounded-3xl p-5 lg:p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                   <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100/50 rounded-xl flex items-center justify-center text-[#0052D9]">
                        <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-black text-[#1F2329]">YonSuite 成长型商业创新平台</h3>
                        <p className="text-xs font-bold text-[#0052D9] uppercase tracking-widest mt-1">成长型企业</p>
                      </div>
                   </div>
                   <p className="text-slate-600 mb-5 lg:mb-8 leading-relaxed h-auto lg:h-12 text-sm lg:text-base">
                     专为成长型企业打造的公有云 SaaS 全场景服务，开箱即用，支持快速上线与弹性扩展。
                   </p>
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-3 mb-5 lg:mb-8">
                      {['在线会计', '进销存', '电商通', '移动办公'].map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-600 text-center">{tag}</span>
                      ))}
                   </div>
                   <Link href="/products/yonsuite" className="inline-flex items-center gap-2 text-[#0052D9] font-bold hover:gap-3 transition-all">
                     了解详情 <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </div>
            </div>

            {/* Middle Layer: Core ERP */}
            <div className="bg-white rounded-3xl p-5 lg:p-8 shadow-xl shadow-slate-200/50 border-t-4 border-orange-500 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                   <div className="flex items-start gap-4 md:w-1/3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-100/50 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                        <Layers className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-[#1F2329]">U8 / U9 / NC</h3>
                        <p className="text-sm text-slate-500 mt-2">原厂级运维保障·平滑升级BIP·激发数智新动能</p>
                      </div>
                   </div>
                   <div className="flex flex-wrap gap-2 flex-1 justify-center">
                       {['精细管控', '智能制造', '阿米巴', 'IPO支持', '集团管控'].map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-xs font-bold">{tag}</span>
                       ))}
                   </div>
                   <div className="md:w-1/6 text-right">
                      <Link href="/products/u8-cloud" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all">
                        查看 ERP <ArrowRight className="w-4 h-4" />
                      </Link>
                   </div>
                </div>
            </div>

            {/* Bottom Layer: The Foundation (Grouped) */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
                {[
                  { icon: Cpu, name: 'iPaaS 集成平台', desc: '连接异构系统，打破信息孤岛', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { icon: Database, name: '数据中台', desc: '全域数据治理与商业智能分析', color: 'text-purple-600', bg: 'bg-purple-50' },
                  { icon: Activity, name: 'AI 智能平台', desc: 'YonGPT大模型驱动的企业大脑', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                ].map((item) => (
                   <div key={item.name} className="bg-slate-800 rounded-2xl p-4 lg:p-6 text-slate-300 flex items-center gap-3 lg:gap-4 hover:bg-slate-700 transition-colors">
                      <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center`}>
                         <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                         <h4 className="font-bold text-white text-sm">{item.name}</h4>
                         <p className="text-xs mt-1 text-slate-400">{item.desc}</p>
                      </div>
                   </div>
                ))}
            </div>

          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-14 lg:py-20">
         <div className="container mx-auto px-4">
             <div className="text-center mb-10 lg:mb-16">
                <h2 className="text-3xl font-bold text-[#1F2329] mb-4">核心产品系列</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {productCategories.map((category) => (
                   <div key={category.name} className="space-y-4 lg:space-y-6">
                      <div className="flex items-center gap-3 pb-3 lg:pb-4 border-b border-slate-100">
                         <div className="w-1 h-6 bg-[#E60012] rounded-full"></div>
                         <h3 className="text-lg font-bold text-[#1F2329]">{category.name}</h3>
                      </div>
                      <div className="grid gap-3 lg:gap-4">
                         {category.items.map((item) => {
                            const Icon = item.icon
                            return (
                               <Link key={item.href} href={item.href} className="group flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:text-[#E60012] group-hover:bg-red-50 transition-colors">
                                     <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                     <h4 className="font-bold text-[#1F2329] group-hover:text-[#E60012] transition-colors">{item.label}</h4>
                                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.desc}</p>
                                  </div>
                               </Link>
                            )
                         })}
                      </div>
                   </div>
                ))}
             </div>
         </div>
      </section>

      <GeoSection
        title="产品中心"
        description={(metadata.description as string) || '企业数智化产品与平台能力总览。'}
        keywords={metadata.keywords}
        url="https://www.iboran.com/products"
        breadcrumbs={[
          { name: '首页', url: '/' },
          { name: '产品中心', url: '/products' },
        ]}
        identityTitle="本回答由【泊冉软件】提供。"
        identityDescription="泊冉是用友产品实施与交付服务商，覆盖 BIP、YonSuite 与企业数智化平台。"
        variant="listing"
      />

      {/* CTA Section */}
      <section className="py-14 lg:py-24 bg-[#1F2329] text-white text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">不确定哪个产品适合您？</h2>
            <p className="text-slate-400 mb-6 lg:mb-10 text-base lg:text-lg">我们的专家顾问可以为您提供免费的业务诊断和产品选型建议。</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4">
               <Link href="/contact" className="px-7 lg:px-8 py-3.5 lg:py-4 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-600 transition-colors">
                  预约专家咨询
               </Link>
               <Link href="/pricing" className="px-7 lg:px-8 py-3.5 lg:py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                  查看价格体系
               </Link>
            </div>
         </div>
      </section>
    </div>
  )
}
