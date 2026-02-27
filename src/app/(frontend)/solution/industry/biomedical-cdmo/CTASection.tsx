'use client'

import React, { useState } from 'react'
import { Microscope, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[40px] bg-slate-900 overflow-hidden">
            {/* Decorative backgrounds */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-cyan-600/10 -skew-x-12 -translate-x-1/4" />
            
            <div className="relative z-10 p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                  <Microscope className="w-4 h-4" />
                  <span>立即开启 CDMO 数智化转型</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  打造新质生产力，成为基因治疗领域领航者
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  获取专为 CDMO 企业定制的行业方案，解决研产协同与合规难题。
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Button 
                    onClick={() => setIsDemoOpen(true)}
                    size="lg" 
                    className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all text-lg group"
                  >
                    立即预约演示
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button onClick={() => setIsDemoOpen(true)} size="lg" variant="outline" className="h-14 px-10 border-slate-700 text-white hover:bg-slate-800 rounded-full text-lg">
                    咨询行业专家
                  </Button>
                </div>
              </div>
              
              {/* Visual element */}
              <div className="hidden lg:block relative group">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all" />
                <div className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-48 bg-slate-700 rounded-full" />
                    <div className="h-2 w-32 bg-slate-700 rounded-full" />
                    <div className="h-2 w-40 bg-blue-500 rounded-full" />
                    <div className="h-2 w-24 bg-slate-700 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="biomedical-cdmo-cta"
      />
    </>
  )
}
