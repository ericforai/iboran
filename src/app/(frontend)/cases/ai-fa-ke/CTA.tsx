import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">
          准备好开启您的 <span className="text-blue-600">数字化转型</span> 了吗？
        </h2>
        <p className="text-xl text-slate-600 font-light mb-12 max-w-2xl mx-auto">
          与爱发科等行业领先者一起，携手泊冉实现运营变革。
        </p>
        
        <Link 
          href="/contact" 
          className="group inline-flex items-center px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 hover:shadow-blue-600/40 transition-all duration-300"
        >
          立即开启转型 
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
