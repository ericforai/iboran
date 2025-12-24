import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-emerald-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            开启中药企业数智化转型之旅
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            立即预约专家演示，获取针对您企业的定制化解决方案与行业白皮书。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
            >
              预约专家咨询
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/resources" // Or specific resource link
              className="bg-transparent border-2 border-emerald-400/30 text-emerald-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-800/50 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              下载行业白皮书
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-emerald-400/60">
            已有 500+ 中药企业选择用友BIP
          </p>
        </div>
      </div>
    </section>
  )
}
