import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { GeoSection } from '@/components/GeoSection'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const stories = await payload.find({
    collection: 'success-stories',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const staticCasesPath = path.join(process.cwd(), 'src/app/(frontend)/cases')
  
  return stories.docs
    .map(({ slug }) => slug)
    .filter((slug): slug is string => {
      if (!slug) return false
      // Exclude slugs that have their own static directory
      const isStatic = fs.existsSync(path.join(staticCasesPath, slug))
      return !isStatic
    })
    .map((slug: any) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function SuccessStoryPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/cases/' + decodedSlug
  
  const story = await queryStoryBySlug({ slug: decodedSlug })
  
  if (!story) return <PayloadRedirects url={url} />

  const breadcrumbItems = [
      { name: '首页', url: '/' },
      { name: '成功案例', url: '/cases' },
      { name: story.title, url: `/cases/${slug}` }
  ]
  const challengeSummary = story.challenges?.map((c: any) => c.challenge).filter(Boolean).join('；')
  const solutionSummary = story.solution?.oneLiner || story.solution?.keyDesign
  const resultSummary = [
    story.keyResults?.efficiency,
    story.keyResults?.quality,
    story.keyResults?.risk,
    story.keyResults?.business,
  ].filter(Boolean).join('；')
  const geoDescription = story.tldr || `泊冉软件助力${story.clientName || '企业'}实现数字化转型成功案例`
  const geoFaqs = [
    {
      question: '这个案例的核心挑战是什么？',
      answer: challengeSummary || geoDescription,
    },
    {
      question: '解决方案是什么？',
      answer: solutionSummary || '通过业财一体化与流程贯通提升协同效率。',
    },
    {
      question: '关键成果有哪些？',
      answer: resultSummary || '项目完成后实现效率提升与管理可视化。',
    },
    {
      question: '适合谁参考？',
      answer: `适合${story.industry || '相关行业'}企业，存在多系统割裂或交付效率瓶颈的组织。`,
    },
  ]
  const geoBoundaries = [
    { condition: '存在跨部门/多系统协同需求', type: 'suitable' as const },
    { condition: '希望获得可复制的交付与落地路径', type: 'suitable' as const },
    { condition: '仅需单点功能或一次性展示', type: 'unsuitable' as const },
    { condition: '不愿进行流程与主数据标准化', type: 'unsuitable' as const },
  ]

  return (
    <article className="min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-900">
        <PayloadRedirects disableNotFound url={url} />
        {draft && <LivePreviewListener />}
        <GeoSection
          title={story.title}
          description={geoDescription}
          url={`https://www.iboran.com/cases/${slug}`}
          tldr={story.tldr || undefined}
          faqs={geoFaqs}
          boundaries={geoBoundaries}
          breadcrumbs={breadcrumbItems}
          identityTitle="本回答由【泊冉软件】提供。"
          identityDescription="泊冉是用友实施与交付服务商，沉淀可复制的行业落地案例。"
          variant="case"
        />

        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white overflow-hidden pb-12">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="container relative z-10 px-4 pt-32 md:pt-40">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                 
                 {/* Badge */}
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8 hover:bg-white/20 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-red-100">成功案例 • {story.industry || '未分类'}</span>
                 </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/70">
                  {story.title}
                </h1>
                
                {/* Meta Row */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12 border-t border-white/10 pt-8 mt-4 w-full">
                   <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">客户名称</div>
                      <div className="text-lg font-semibold text-white">{story.clientName || '合作伙伴'}</div>
                   </div>
                   {story.projectOverview?.deliveryMode && (
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">交付模式</div>
                        <div className="text-lg font-semibold text-white">{story.projectOverview.deliveryMode}</div>
                      </div>
                   )}
                   {story.projectOverview?.cycle && (
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">实施周期</div>
                        <div className="text-lg font-semibold text-white">{story.projectOverview.cycle}</div>
                      </div>
                   )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Floating Executive Summary */}
        {story.tldr && (
          <div className="container px-4 relative z-20 -mt-8 mb-16">
            <div className="max-w-5xl mx-auto">
               <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-900/5">
                  <div className="flex items-start gap-4">
                     <div className="text-4xl">💡</div>
                     <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Executive Summary</h3>
                        <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed font-serif italic">
                           “{story.tldr}”
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}

        <main className="container px-4 pb-24">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Content Column */}
              <div className="lg:col-span-8 space-y-16">
                 
                 {/* SECTION 1: Challenges */}
                 {story.challenges && story.challenges.length > 0 && (
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 text-red-600 font-black text-lg shadow-sm border border-red-200">01</span>
                       <h2 className="text-3xl font-bold text-slate-900 tracking-tight">背景与挑战</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {story.challenges.map((c: any, i: number) => (
                          <div key={i} className="group p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
                             <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center mb-4 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                             </div>
                             <p className="text-slate-700 font-medium leading-relaxed">{c.challenge}</p>
                          </div>
                       ))}
                    </div>
                  </section>
                 )}

                 {/* SECTION 2: Solution */}
                 {story.solution && (
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600 font-black text-lg shadow-sm border border-blue-200">02</span>
                       <h2 className="text-3xl font-bold text-slate-900 tracking-tight">解决方案</h2>
                    </div>
                    
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                       <div className="p-8 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
                          <p className="text-lg text-slate-700 font-medium leading-relaxed">
                            {story.solution.oneLiner}
                          </p>
                       </div>
                       
                       <div className="p-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                             {story.solution.modules?.map((m: any, i: number) => (
                                <div key={i} className="flex gap-3">
                                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-lg shadow-blue-500/50" />
                                   <p className="text-slate-600 text-sm leading-7">{m.item}</p>
                                </div>
                             ))}
                          </div>

                          {story.solution.keyDesign && (
                             <div className="mt-8 pt-8 border-t border-slate-100 pl-4 border-l-4 border-blue-500 bg-blue-50/30 -mx-4 px-8 py-6 rounded-r-xl">
                                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">关键设计</h4>
                                <p className="text-slate-700">{story.solution.keyDesign}</p>
                             </div>
                          )}
                       </div>
                    </div>
                  </section>
                 )}

                 {/* SECTION 3: Key Results */}
                 {story.keyResults && (
                   <section>
                      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                         
                         <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                               <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white font-black text-sm">03</span>
                               关键成果
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                               {story.keyResults.efficiency && (
                                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                     <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">提质增效</div>
                                     <div className="text-xl md:text-2xl font-bold text-white leading-tight">{story.keyResults.efficiency}</div>
                                  </div>
                               )}
                               {story.keyResults.quality && (
                                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                     <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">质量管控</div>
                                     <div className="text-xl md:text-2xl font-bold text-white leading-tight">{story.keyResults.quality}</div>
                                  </div>
                               )}
                               {story.keyResults.risk && (
                                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                     <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">风险控制</div>
                                     <div className="text-xl md:text-2xl font-bold text-white leading-tight">{story.keyResults.risk}</div>
                                  </div>
                               )}
                               {story.keyResults.business && (
                                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                     <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">业务价值</div>
                                     <div className="text-xl md:text-2xl font-bold text-white leading-tight">{story.keyResults.business}</div>
                                  </div>
                               )}
                            </div>
                         </div>
                      </div>
                   </section>
                 )}

                 {/* SECTION 3.5: Result CTA */}
                 {story.keyResults && (
                  <section className="py-12">
                    <div className="bg-gradient-to-r from-[#E60012] to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        想了解类似成果如何在您的企业实现？
                      </h3>
                      <p className="text-red-100 mb-8 max-w-2xl mx-auto">
                        每个企业的数字化路径都不同。让我们根据您的具体情况，评估可行性与实施路径。
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                          onClick={() => {
                            const event = new CustomEvent('open-demo-modal', {
                              detail: { source: `Case_${story.slug}` }
                            })
                            window.dispatchEvent(event)
                          }}
                          className="px-8 py-4 bg-white text-[#E60012] font-bold rounded-xl hover:bg-red-50 transition-all flex items-center gap-2"
                        >
                          获取同类实施方案
                          <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link
                          href="/cases"
                          className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                        >
                          查看更多案例
                        </Link>
                      </div>
                    </div>
                  </section>
                 )}

                 {/* SECTION 4: Delivery Process */}
                 {story.deliveryProcess && story.deliveryProcess.length > 0 && (
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600 font-black text-lg shadow-sm border border-green-200">04</span>
                       <h2 className="text-3xl font-bold text-slate-900 tracking-tight">交付里程碑</h2>
                    </div>

                    <div className="relative pl-4 space-y-12 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                       {story.deliveryProcess.map((item: any, i: number) => (
                          <div key={i} className="relative pl-12">
                             <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-4 border-green-50 text-green-600 font-bold text-xs flex items-center justify-center shadow-sm z-10">
                                M{i}
                             </div>
                             <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                <h4 className="font-bold text-slate-900 text-lg mb-2">{item.milestone}</h4>
                                <p className="text-slate-600">{item.detail}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                  </section>
                 )}

                 {/* SECTION 5: Methodology */}
                 {story.methodology && (
                  <section className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-12 rounded-3xl border border-purple-100">
                     <h2 className="text-2xl font-bold text-purple-900 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center text-purple-700 text-sm font-black">05</span>
                        核心方法论：{story.methodology?.name}
                     </h2>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                           <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">实施步骤</h4>
                           <div className="space-y-4">
                              {story.methodology.steps?.map((s: any, i: number) => (
                                 <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                       {i+1}
                                    </div>
                                    <span className="text-slate-700 font-medium">{s.item}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div>
                           <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">关键交付物</h4>
                           <div className="flex flex-wrap gap-2">
                              {story.methodology.deliverables?.map((d: any, i: number) => (
                                 <span key={i} className="px-3 py-1.5 bg-white text-purple-700 text-sm font-medium rounded-lg border border-purple-100 shadow-sm">
                                    {d.item}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </section>
                 )}

                 <div className="pt-8 opacity-0 animate-fade-in">
                   <RenderBlocks blocks={story.layout || []} />
                 </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-8">
                 <div className="sticky top-24 space-y-8">
                    {/* Why Boran */}
                    {story.whyBoran && story.whyBoran.length > 0 && (
                      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                         <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                           <span className="w-1 h-6 bg-red-500 rounded-full"></span>
                           为什么选择泊冉
                         </h3>
                         <ul className="space-y-5">
                            {story.whyBoran.map((item: any, i: number) => (
                               <li key={i} className="flex gap-4">
                                  <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                                  <span className="text-slate-300 text-sm leading-relaxed">{item.reason}</span>
                               </li>
                            ))}
                         </ul>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                       
                       <h3 className="text-xl font-bold mb-4 relative z-10">启动您的数字化转型</h3>
                       <p className="text-red-100 text-sm mb-8 leading-relaxed relative z-10">
                          获取针对您所在行业的《数字化落地评估报告》或预约 30 分钟专家诊断。
                       </p>
                       <Link 
                          href="/contact" 
                          className="block w-full text-center py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 relative z-10"
                       >
                          预约专家诊断 →
                       </Link>
                    </div>

                    {/* Related Solutions */}
                    <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                       <div className="flex items-center gap-2 mb-6">
                         <Sparkles className="w-5 h-5 text-blue-600" />
                         <h3 className="text-lg font-bold text-slate-900">相关解决方案</h3>
                       </div>
                       <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                          该案例采用了泊冉标准化实施方法论。了解我们如何通过一体化平台解决行业痛点。
                       </p>
                       <div className="space-y-3">
                          <Link href="/products/yonsuite" className="block p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-100 hover:border-blue-100 transition-colors group">
                             <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">YonSuite 成长型云服务</div>
                             <div className="text-xs text-slate-500 mt-1">业财税费票一体化</div>
                          </Link>
                          <Link href="/solution/erp-migration" className="block p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-100 hover:border-blue-100 transition-colors group">
                             <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">ERP 平滑迁移升级</div>
                             <div className="text-xs text-slate-500 mt-1">U8/NC 升级 YonBIP</div>
                          </Link>
                       </div>
                    </div>
                 </div>
              </aside>
           </div>
        </main>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const story = await queryStoryBySlug({ slug })

  return generateMeta({ doc: story, collection: 'success-stories' })
}

const queryStoryBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'success-stories',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
