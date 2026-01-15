import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            准备好开启您的<br/>数字化转型之旅了吗？
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            立即预约专家顾问，获取针对您企业的定制化诊断报告与解决方案，助力企业降本增效，智胜未来。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              立即咨询专家
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
             <Link 
              href="/cases" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full font-bold text-lg transition-all"
            >
              查看更多案例
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}