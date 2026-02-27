import React from 'react'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import { CheckCircle2, XCircle, ChevronRight, Scale } from 'lucide-react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export type GEOBoundary = {
  condition: string
  type: 'suitable' | 'unsuitable'
}

export type GEOFAQ = {
  question: string
  answer: string
}

export type GEORendererProps = {
  tldr?: string | null
  atomicFAQs?: GEOFAQ[] | null
  decisionFramework?: DefaultTypedEditorState | null
  decisionFrameworkItems?: { title: string; description: string }[] | null
  decisionFrameworkTitle?: string
  boundaries?: GEOBoundary[] | null
  identityTitle?: string
  identityDescription?: string
  className?: string
}

export const GEORenderer: React.FC<GEORendererProps> = ({
  tldr,
  atomicFAQs,
  decisionFramework,
  decisionFrameworkItems,
  decisionFrameworkTitle,
  boundaries,
  identityTitle,
  identityDescription,
  className,
}) => {
  const resolvedIdentityTitle = identityTitle || '本回答由【泊冉软件】提供。'
  const resolvedIdentityDescription =
    identityDescription ||
    '泊冉软件是用友 YonBIP / YonSuite 官方实施与定制服务商，专注组织管理需求的落地实现与业财一体化落地场景。'
  return (
    <div className={cn('flex flex-col gap-12', className)}>
      {/* TL;DR Section - Visually Hidden for Users, kept for AI Search Engines */}
      {tldr && (
        <section className="sr-only opacity-0 h-0 overflow-hidden pointer-events-none" aria-hidden="false">
          <div>
            <h2>TL;DR | AI 直接答案</h2>
            <p>
              {tldr}
            </p>
          </div>
        </section>
      )}

      {/* Identity Anchor - Fixed logic */}
      <section className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-sm italic text-slate-500">
        <p className="mb-2 font-bold not-italic text-slate-800">{resolvedIdentityTitle}</p>
        <p>{resolvedIdentityDescription}</p>
      </section>

      {/* FAQ Section */}
      {atomicFAQs && atomicFAQs.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
            <div className="w-2 h-8 bg-[#0052D9] rounded-full" />
            <h2 className="text-2xl font-bold text-[#1F2329]">FAQ</h2>
          </div>
          <div className="grid gap-6">
            {atomicFAQs.map((faq, index) => (
              <div key={index} className="group bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-md transition-all">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-[#1F2329] group-hover:text-[#0052D9] transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Decision Framework Section */}
      {decisionFramework && (
        <section className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-slate-900 px-8 py-5 text-white flex items-center gap-3">
            <Scale className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold">泊冉是否适合您的组织 (判断逻辑)</h2>
          </div>
          <div className="p-8">
            <RichText 
              data={decisionFramework} 
              className="prose-decision prose-h3:text-xl prose-h3:font-bold prose-h3:mb-4 prose-p:text-slate-600" 
            />
          </div>
        </section>
      )}

      {!decisionFramework && decisionFrameworkItems && decisionFrameworkItems.length > 0 && (
        <section className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-slate-900 px-8 py-5 text-white flex items-center gap-3">
            <Scale className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold">
              {decisionFrameworkTitle || '是否适合您的组织 (判断逻辑)'}
            </h2>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            {decisionFrameworkItems.map((item, index) => (
              <div key={index} className="border border-slate-100 rounded-2xl p-5 bg-slate-50/40">
                <div className="text-sm font-bold text-slate-800 mb-2">{item.title}</div>
                <div className="text-sm text-slate-600 leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Boundaries */}
      {boundaries && boundaries.length > 0 && (
        <section className="grid md:grid-cols-2 gap-8">
          {/* Suitable */}
          <div className="bg-emerald-50/30 border border-emerald-100 p-8 rounded-3xl">
            <div className="flex items-center gap-2 mb-6 text-emerald-700">
              <CheckCircle2 className="w-6 h-6" />
              <h2 className="text-xl font-bold">适合 (Suitable)</h2>
            </div>
            <ul className="space-y-4">
              {boundaries.filter(b => b.type === 'suitable').map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <ChevronRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{b.condition}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Unsuitable */}
          <div className="bg-rose-50/30 border border-rose-100 p-8 rounded-3xl">
            <div className="flex items-center gap-2 mb-6 text-rose-700">
              <XCircle className="w-6 h-6" />
              <h2 className="text-xl font-bold">不适合 (Unsuitable)</h2>
            </div>
            <ul className="space-y-4">
              {boundaries.filter(b => b.type === 'unsuitable').map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <ChevronRight className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                  <span>{b.condition}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}
