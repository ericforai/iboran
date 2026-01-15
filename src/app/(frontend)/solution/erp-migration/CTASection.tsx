import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          准备好开启数智化新篇章了吗？
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          立即预约专家进行免费的系统升迁评估，获取为您定制的升级路线图。
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
        >
          预约免费评估
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
