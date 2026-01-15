import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 z-0">
         <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800" />
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 text-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-8 animate-pulse">
           <Sparkles className="w-4 h-4 text-yellow-300" />
           <span className="text-sm font-medium">立即开启数智化转型之旅</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
          准备好升级您的<br />供应链管理体系了吗？
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          携手泊冉软件，打造数据驱动、智能高效的现代化供应链平台
        </p>

        <Link 
          href="/contact" 
          className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
        >
          立即咨询 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
