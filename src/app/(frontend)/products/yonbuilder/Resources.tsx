'use client'

import Link from 'next/link'
import { FileText, Download } from 'lucide-react'

export default function Resources() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="flex-1 relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              深入了解 YonBuilder 技术内幕
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl">
              下载官方技术白皮书，获取更多关于低代码开发的深度洞察。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/whitepapers/business-finance-strategic-restructuring"
                className="flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium"
              >
                <FileText className="w-5 h-5 text-[#E60012]" />
                <span>下载技术白皮书</span>
                <Download className="w-4 h-4 text-slate-400 ml-2" />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3 relative z-10 flex justify-center">
             {/* Abstract document visual */}
             <div className="w-48 h-60 bg-white shadow-2xl rounded-lg rotate-6 transform hover:rotate-0 transition-all duration-500 p-6 flex flex-col justify-between cursor-pointer">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#E60012] rounded flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-slate-100 rounded"></div>
                    <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                    <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-800">
                  YonBuilder<br />
                  Product Whitepaper
                  <div className="text-[10px] font-normal text-slate-400 mt-1">Version 3.0</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
