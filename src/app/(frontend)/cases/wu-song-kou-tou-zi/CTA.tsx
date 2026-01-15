import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-amber-500/30">
            <span>开启数字化转型之旅</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            同样的成功，可以在您的企业实现
          </h2>

          {/* Description */}
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            了解泊冉软件如何帮助您的国资投资企业实现数字化转型，获取专属解决方案与报价。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-bold text-lg hover:from-amber-600 hover:to-amber-700 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <span>预约专家演示</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <a
              href="tel:400-9955-161"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-amber-500/30 rounded-full font-bold text-lg hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>400-9955-161</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span>铂金级合作伙伴</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span>500+ 成功案例</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span>12+ 年行业经验</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
