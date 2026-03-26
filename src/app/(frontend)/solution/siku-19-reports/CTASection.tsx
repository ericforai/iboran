'use client'

import { useState } from 'react'
import { ArrowRight, DownloadCloud } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [modalType, setModalType] = useState<'diagnose' | 'whitepaper'>('diagnose')

  const openDiagnose = () => {
    setModalType('diagnose')
    setIsDemoOpen(true)
  }

  const openWhitepaper = () => {
    setModalType('whitepaper')
    setIsDemoOpen(true)
  }

  return (
    <>
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 px-8 py-16 text-center shadow-xl">
            <div className="absolute top-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-blue-50/50 blur-[100px]" />
            <div className="absolute bottom-0 left-[-10%] h-[300px] w-[300px] rounded-full bg-red-50/50 blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl break-keep">
                加速司库架构演进，从今天开始
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 font-medium text-balance">
                不要等所有报表乱作一团再着手清理。基于现成总账模块快速提取，利用我们的专家经验立即形成合规台账体系。
              </p>
              <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  onClick={openDiagnose}
                  className="group inline-flex items-center justify-center gap-4 rounded-xl bg-[#E60012] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-red-700 active:scale-[0.98] shadow-lg shadow-red-500/20"
                >
                  免费获取诊断规划
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={openWhitepaper}
                  className="inline-flex items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white px-10 py-5 text-lg font-bold text-slate-600 transition-all hover:bg-slate-50 active:scale-[0.98] shadow-sm"
                >
                  <DownloadCloud className="h-5 w-5" />
                  下载行业白皮书
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        title={modalType === 'whitepaper' ? '下载司库建设白皮书' : '免费获取诊断规划'}
        subtitle="请留下您的联系方式，我们的顾问将竭诚为您服务"
        submitLabel={modalType === 'whitepaper' ? '立即下载' : '预约诊断'}
        source={modalType === 'whitepaper' ? 'cta-whitepaper' : 'cta-diagnose'}
      />
    </>
  )
}
