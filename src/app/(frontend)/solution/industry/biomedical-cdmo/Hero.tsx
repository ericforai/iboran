'use client'

import React, { useState } from 'react'
import { Microscope, CheckCircle2, Zap, Clock, Pill, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-50/50 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content (60%) */}
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                <Microscope className="w-4 h-4" />
                <span>生物医药 CDMO 研产一体化</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                AI助力CDMO企业
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  提效、高质、合规
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                聚焦 CDMO 企业项目管理、精细成本核算与 GMP/CSV 质量合规，打通研发创新到商业化生产的全链路，培育医药新质生产力。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button 
                  onClick={() => setIsDemoOpen(true)}
                  size="lg" 
                  className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg shadow-blue-200"
                >
                  获取 CDMO 行业方案
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-slate-200 hover:bg-slate-50 text-slate-600">
                  预约专家演示
                </Button>
              </div>
              
              {/* Trust Metrics */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-slate-500">符合 GMP/GSP 规范</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-slate-500">支持 CSV 系统验证</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-slate-500">全生命周期项目管控</span>
                </div>
              </div>
            </div>

            {/* Right Visuals (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              {/* Main Visual Card */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">CDMO 研产看板</h4>
                      <p className="text-[10px] text-slate-400">REAL-TIME INSIGHTS</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full border border-green-100">
                    合规状态: 正常
                  </div>
                </div>

                {/* Module Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, label: '项目进度', val: '98%', color: 'blue' },
                    { icon: Clock, label: '交付周期', val: '-35%', color: 'cyan' },
                    { icon: Pill, label: '批次成本', val: '精细核算', color: 'indigo' },
                    { icon: CheckCircle2, label: '合规验证', val: 'GAMP5', color: 'emerald' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <item.icon className="w-5 h-5 text-blue-600 mb-3" />
                      <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                      <div className="text-lg font-bold text-slate-900">{item.val}</div>
                    </div>
                  ))}
                </div>

                {/* Mini Case Quote */}
                <div className="mt-8 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Quote className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-blue-900">行诚生物案例</span>
                  </div>
                  <p className="text-[11px] text-blue-800 leading-relaxed italic">
                    &ldquo;YonSuite帮助我们打破了信息孤岛，实现了研产一体化的高度融合与CSV合规验证。&rdquo;
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-100/50 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="biomedical-cdmo-hero"
      />
    </>
  )
}
