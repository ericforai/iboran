import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              开启生物医药企业的数智化转型之旅
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              预约行业专家为您量身定制合规、高效的数智化解决方案，
              <br className="hidden sm:block" />
              或下载最新行业白皮书，了解更多标杆实践。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-600 bg-white hover:bg-blue-50 rounded-xl transition-all duration-200 shadow-lg"
              >
                预约专家演示
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/resources/whitepaper/biopharma-2025"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                <Download className="mr-2 w-5 h-5" />
                下载行业白皮书
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-blue-200 opacity-80">
              已为 500+ 生物医药企业提供合规验证与数字化服务
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
