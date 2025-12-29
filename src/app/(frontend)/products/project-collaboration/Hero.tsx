import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 overflow-hidden bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                项目协同管理系统：<br />
                <span className="text-brand-blue">让项目执行从“黑盒”走向透明</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                解决渐进明细管理差、跨部门协作难、进度不可控等核心痛点，实现项目从立项到交付的全过程数智化监管。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full">
                  预约专家演示
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50 px-8 py-6 text-lg rounded-full">
                  获取交付清单
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-brand-red font-bold">30s</span>
                  快速对位
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-blue font-bold">[25]%</span>
                  提升协作效率
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-blue font-bold">[15]%</span>
                  降低管理成本
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/5 rounded-3xl transform rotate-2"></div>
              <img
                src="/images/solutions/project-management-hero.png"
                alt="项目协同管理架构图"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
