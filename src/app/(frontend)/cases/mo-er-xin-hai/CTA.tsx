import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            准备好驱动您的<br/>“半导体芯”动力了吗？
          </h2>
          <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            立即预约专家顾问，探索适合半导体/芯片设计行业的业财一体化与委外协同方案。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 hover:bg-indigo-50 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
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