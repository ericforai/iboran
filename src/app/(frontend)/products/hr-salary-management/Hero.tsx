'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveRight, PhoneCall } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative bg-[#F8FAFC] py-16 lg:py-24 overflow-hidden border-b border-slate-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-3/5 px-4 mb-12 lg:mb-0">
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-4 mb-6 text-[10px] font-bold text-blue-600 bg-blue-50 rounded-full uppercase tracking-[0.2em]">
                薪事力 · HR & 薪税云平台
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-8 leading-[1.15] text-slate-900 font-display">
                随需应变 <br />
                <span className="text-blue-600">全模块人力资源管理</span>
              </h1>
              <p className="text-lg text-slate-500 mb-12 leading-loose max-w-xl">
                打造从组织人事、薪酬考勤到招聘绩效的全流程闭环。AI 算薪赋能，深度集成协同 OA，提升算薪效率 [50]% 以上，助力企业数智化转型。
              </p>
              <div className="flex flex-wrap items-center gap-5 mb-12">
                <Button className="bg-[#E62E2D] hover:bg-[#CC2928] text-white h-14 px-10 text-base font-bold rounded-lg group shadow-xl shadow-red-600/20 transition-all duration-300 hover:-translate-y-1">
                  预约专家演示
                  <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="bg-white/50 backdrop-blur-sm border-blue-600 text-blue-600 hover:bg-blue-50 h-14 px-10 text-base font-bold rounded-lg border-2 transition-all duration-300 hover:-translate-y-1">
                  获取报价清单
                  <PhoneCall className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-10 text-[13px] font-medium text-slate-400">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  AI 自动算薪机器人
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  438+ 城市政策同步
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  OA 深度高度集成
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 px-4">
            <div className="relative group">
              <div className="relative z-10 flex justify-center items-center animate-float">
                {/* 
                  Note: Using an existing image or a placeholder that represents HR/SaaS architecture.
                  For consistent delivery, we'd ideally have a specific image like /hr-salary-hero.png
                */}
                <img
                  src="/products/hr-salary-hero.png"
                  alt="薪事力系统架构"
                  className="w-full h-auto max-w-md lg:max-w-none mix-blend-multiply transition-all duration-700 group-hover:scale-105 drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                  onError={(e) => {
                    e.currentTarget.src = 'https://www.iboran.com/static/home/Zhuanq/images/xinshili/banner_img.png'
                  }}
                />
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] -z-10 bg-radial-gradient">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-red-400/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
