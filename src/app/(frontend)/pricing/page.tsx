import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Check, Minus, HelpCircle, ArrowRight, MessageSquare, Phone, Layers, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: '价格体系 | 泊冉软件',
  description: '透明、灵活的企业软件定价体系。提供多种版本选择，从SaaS订阅到私有云部署，满足不同阶段企业的预算需求。',
}

const tiers = [
  {
    name: '标准版',
    description: '适用于初创及小型企业',
    price: '订阅制',
    features: [
      { name: '财务会计', included: true },
      { name: '进销存管理', included: true },
      { name: '税务管理', included: true },
      { name: '移动报销', included: true },
      { name: '多组织协同', included: false },
      { name: '供应链协同', included: false },
      { name: '生产制造', included: false },
      { name: 'OpenAPI 集成', included: false },
    ],
    cta: '联系顾问 获取报价',
    href: '/contact', // Typically leads to a trial signup form
    popular: false,
  },
  {
    name: '专业版',
    description: '适用于快速成长期企业',
    price: '咨询报价',
    features: [
      { name: '财务会计', included: true },
      { name: '进销存管理', included: true },
      { name: '税务管理', included: true },
      { name: '移动报销', included: true },
      { name: '多组织协同', included: true },
      { name: '供应链协同', included: true },
      { name: '生产制造', included: 'Lite' },
      { name: 'OpenAPI 集成', included: true },
    ],
    cta: '联系顾问 获取报价',
    href: '/contact',
    popular: true,
  },
  {
    name: '旗舰版',
    description: '适用于中大型集团企业',
    price: '定制方案',
    features: [
      { name: '财务会计', included: true },
      { name: '进销存管理', included: true },
      { name: '税务管理', included: true },
      { name: '移动报销', included: true },
      { name: '多组织协同', included: true },
      { name: '供应链协同', included: true },
      { name: '生产制造', included: 'Pro' },
      { name: 'OpenAPI 集成', included: true },
    ],
    cta: '联系顾问 获取报价',
    href: '/contact',
    popular: false,
  },
]

const faqs = [
  {
    q: 'SaaS 订阅和私有化部署有什么区别？',
    a: 'SaaS 订阅按年付费，无需购买服务器，开箱即用，由用友负责运维；私有化部署需一次性购买许可（License），部署在您自己的服务器或私有云上，数据掌控度更高。'
  },
  {
    q: '价格包含实施服务费吗？',
    a: '标准版通常支持自助上线，不包含实施费。专业版和旗舰版由于业务场景复杂，通常需要专业的实施顾问进行配置和培训，实施费用根据人天报价另行计算。'
  },
  {
    q: '可以后续升级版本吗？',
    a: '完全支持。随着您企业的发展，您可以随时从标准版平滑升级到专业版或旗舰版，历史数据可以无缝迁移。'
  },
  {
    q: '是否支持按模块购买？',
    a: '支持。您可以根据当前的业务需求（如只要财务+供应链），选择相应的模块组合。未来有新需求时再加购其他模块（如人力、制造）。'
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
           <h1 className="text-4xl md:text-5xl font-black mb-6">透明投入，清晰回报</h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
             灵活的定价模式，陪伴企业从起步到上市的每一个阶段
           </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-20 relative z-20">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {tiers.map((tier) => (
                  <div key={tier.name} className={`bg-white rounded-2xl p-8 shadow-xl flex flex-col ${tier.popular ? 'ring-4 ring-[#0052D9]/20 relative' : 'border border-slate-100'}`}>
                     {tier.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0052D9] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                           最受欢迎
                        </div>
                     )}
                     <div className="mb-8 text-center">
                        <h3 className="text-2xl font-bold text-[#1F2329] mb-2">{tier.name}</h3>
                        <p className="text-sm text-slate-500 mb-6">{tier.description}</p>
                        <div className="text-3xl font-black text-[#0052D9]">{tier.price}</div>
                     </div>
                     
                     <ul className="space-y-4 mb-8 flex-1">
                        {tier.features.map((feature) => (
                           <li key={feature.name} className="flex items-center justify-between text-sm">
                              <span className="text-slate-600">{feature.name}</span>
                              {feature.included === true ? (
                                <Check className="w-5 h-5 text-emerald-500" />
                              ) : feature.included === false ? (
                                 <Minus className="w-4 h-4 text-slate-300" />
                              ) : (
                                 <span className="bg-blue-50 text-[#0052D9] text-xs font-bold px-2 py-0.5 rounded">{feature.included}</span>
                              )}
                           </li>
                        ))}
                     </ul>

                     <Link 
                        href={tier.href}
                        className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                           tier.popular 
                              ? 'bg-[#0052D9] text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                              : 'bg-slate-100 text-[#1F2329] hover:bg-slate-200'
                        }`}
                     >
                        {tier.cta}
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Deployment Models */}
      <section className="py-20 bg-slate-50">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#1F2329] mb-12">灵活的部署方式</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0052D9] mb-6">
                     <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2329] mb-4">公有云订阅 (SaaS)</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                     按年付费，无需购买服务器硬件，由用友提供专业的运维与安全保障。适合追求轻资产运营、快速上线的成长型企业。
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
                     <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500"/> 自动升级，时刻保持最新</li>
                     <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500"/> 弹性扩容，随业务增长</li>
                  </ul>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6">
                     <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2329] mb-4">私有化部署 (On-Premise)</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                     购买永久许可，部署在企业自有的数据中心或私有云上。适合对数据合规性有极高要求、需要深度定制的大型集团。
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
                     <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500"/> 数据完全自主掌控</li>
                     <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500"/> 支持内网隔离环境</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
         <div className="container mx-auto px-4 max-w-3xl">
             <h2 className="text-3xl font-bold text-[#1F2329] mb-12 text-center">常见问题</h2>
             <div className="space-y-6">
                {faqs.map((faq, i) => (
                   <div key={i} className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                      <h4 className="font-bold text-[#1F2329] mb-3 flex items-start gap-3">
                         <HelpCircle className="w-5 h-5 text-[#0052D9] shrink-0 mt-0.5" />
                         {faq.q}
                      </h4>
                      <p className="text-slate-600 parsing-relaxed pl-8">{faq.a}</p>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 border-t border-slate-100">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#1F2329] mb-6">想获得精准报价？</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link href="tel:400-9955-161" className="flex items-center gap-3 text-lg font-bold text-[#1F2329] hover:text-[#0052D9] transition-colors">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                     <Phone className="w-5 h-5" />
                  </div>
                  400-9955-161
               </Link>
               <div className="hidden sm:block w-px h-8 bg-slate-200"></div>
               <Link href="/contact" className="flex items-center gap-3 text-lg font-bold text-[#1F2329] hover:text-[#0052D9] transition-colors">
                   <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                     <MessageSquare className="w-5 h-5" />
                  </div>
                  在线咨询售前顾问
               </Link>
            </div>
         </div>
      </section>

    </div>
  )
}
