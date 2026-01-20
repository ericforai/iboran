'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Briefcase, Building2 } from 'lucide-react'
import { solutionByBusiness, solutionByIndustryCategory } from '@/data/solutions'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export function SolutionPageContent() {
  const [activeTab, setActiveTab] = useState<'business' | 'industry'>('business')
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenDemo = () => setIsDemoOpen(true)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0052D9] via-[#0066FF] to-[#00A1FF] py-20 lg:py-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M50 0 L100 0 L100 100 L0 100 Z" fill="white" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              解决方案中心
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              基于用友 YonBIP 产品能力，结合泊冉 14 年行业经验
              <br className="hidden md:block" />
              为企业提供端到端数智化转型方案
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0052D9] font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                预约专家演示
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/cases"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                查看成功案例
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="bg-white border-b border-slate-100 sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-6">
            <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl">
              <button
                onClick={() => setActiveTab('business')}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl text-base font-bold transition-all duration-300 ${
                  activeTab === 'business'
                    ? 'bg-[#0052D9] text-white shadow-md'
                    : 'text-slate-600 hover:bg-white/50'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                按业务能力
              </button>
              <button
                onClick={() => setActiveTab('industry')}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl text-base font-bold transition-all duration-300 ${
                  activeTab === 'industry'
                    ? 'bg-[#0052D9] text-white shadow-md'
                    : 'text-slate-600 hover:bg-white/50'
                }`}
              >
                <Building2 className="w-5 h-5" />
                按行业场景
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Grid */}
      {activeTab === 'business' && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {solutionByBusiness.map((category) => (
                <div key={category.name}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-[#1F2329]">{category.name}</h2>
                    <div className="flex-1 h-px bg-slate-200"></div>
                  </div>
                  
                  {/* Solutions Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((solution) => {
                      const IconComponent = solution.icon
                      return (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0052D9]/30 transition-all duration-300"
                        >
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 flex items-center justify-center mb-4 transition-all">
                            <IconComponent className="w-7 h-7 text-[#0052D9]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#1F2329] mb-2 group-hover:text-[#0052D9] transition-colors">
                            {solution.label}
                          </h3>
                          <p className="text-slate-600 mb-4">{solution.desc}</p>
                          <div className="flex items-center gap-2 text-[#0052D9] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            了解更多
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
      )}

      {/* Industry Solutions Grid */}
      {activeTab === 'industry' && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {solutionByIndustryCategory.map((category) => (
                <div key={category.name}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-[#1F2329]">{category.name}</h2>
                    <div className="flex-1 h-px bg-slate-200"></div>
                  </div>
                  
                  {/* Solutions Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((solution) => {
                      const IconComponent = solution.icon
                      return (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0052D9]/30 transition-all duration-300"
                        >
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 flex items-center justify-center mb-4 transition-all">
                            <IconComponent className="w-7 h-7 text-[#0052D9]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#1F2329] mb-2 group-hover:text-[#0052D9] transition-colors">
                            {solution.label}
                          </h3>
                          <p className="text-slate-600 mb-4">{solution.desc}</p>
                          <div className="flex items-center gap-2 text-[#0052D9] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            了解更多
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0052D9] via-[#0066FF] to-[#00A1FF]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              找不到适合的方案？
            </h2>
            <p className="text-lg text-blue-100 mb-10">
              让我们的资深顾问根据您的业务场景，为您量身定制数智化转型方案
            </p>
            <button
              onClick={handleOpenDemo}
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#0052D9] font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              预约专家演示
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Demo Modal */}
      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  )
}
