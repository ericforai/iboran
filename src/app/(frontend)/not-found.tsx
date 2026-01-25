import Link from 'next/link'
import React from 'react'
import { Search, ArrowRight, BookOpen, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white font-sans">
      <div className="container px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 mb-8">
            <Search className="w-10 h-10 text-slate-300" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">抱歉，您访问的页面已迁往“数智化”深处</h2>
          
          <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto">
            我们可能调整了页面布局或更新了解决方案。您可以尝试搜索，或者访问以下核心板块：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Link href="/products/yonsuite" className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ChevronRight className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">产品中心</h3>
              <p className="text-xs text-slate-500">了解 YonSuite 与 YonBIP 核心能力</p>
            </Link>

            <Link href="/cases" className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-white transition-all text-left">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <ChevronRight className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">成功案例</h3>
              <p className="text-xs text-slate-500">查看 500+ 企业的数智化实践</p>
            </Link>

            <Link href="/whitepapers/business-finance-strategic-restructuring" className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all text-left">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">避坑指南</h3>
              <p className="text-xs text-slate-500">免费获取 14 年交付经验总结</p>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-xl px-8 py-6 font-bold">
              <Link href="/">回到首页</Link>
            </Button>
            <Link href="/contact" className="text-slate-600 font-bold hover:text-blue-600 transition-colors flex items-center gap-2">
              咨询在线专家 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
