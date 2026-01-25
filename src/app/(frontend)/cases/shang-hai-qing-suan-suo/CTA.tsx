import Link from 'next/link'
import { ArrowRight, Sparkles, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Main Content */}
        <div className="text-center text-white">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
            <Sparkles className="w-8 h-8" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            开启您的
            <span className="relative">
              数字化转型
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 0 150 8 200 4" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            泊冉软件拥有 12+ 年企业数字化服务经验，已助力 500+ 家企业实现精细化转型，
            专注金融与国产信创行业的数字化升级实践。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-indigo-700 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              立即咨询
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              查看更多案例
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-indigo-100">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>400-9955-161</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>wyz@iboran.com</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center text-white">
          <div>
            <div className="text-3xl font-bold mb-1">12+</div>
            <div className="text-sm text-indigo-200">年服务经验</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-sm text-indigo-200">家服务企业</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">98%</div>
            <div className="text-sm text-indigo-200">交付成功率</div>
          </div>
        </div>
      </div>
    </section>
  )
}
