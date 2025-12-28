'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveRight, PhoneCall } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-xl">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full uppercase tracking-widest">
                致远费控管理解决方案
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
                数智化强劲赋能 <br />
                <span className="text-blue-600">打破业财管理壁垒</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                融合协同、费控、财务系统，实现从预算、报销、票据到商旅、支付、档案的全链条闭环管理，提升财务效率 [30]% 以上。
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md group">
                  预约专家演示
                  <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-md">
                  获取报价清单
                  <PhoneCall className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>1400+ 银行直联</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>自动化凭证生成</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>电子档案合规</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/banner-hero-v2.png"
                  alt="费控管理系统架构"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* 装饰元素 */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
