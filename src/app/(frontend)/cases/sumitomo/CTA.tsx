import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700" />
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Ready to transform?</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          开启您的数字化转型之旅
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          携手泊冉，打造数智化核心竞争力，让数据成为企业增长的新引擎。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl shadow-blue-900/20"
            >
            立即咨询
            <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
             <Link 
                href="/cases" 
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
            查看更多案例
            </Link>
        </div>
      </div>
    </section>
  )
}
