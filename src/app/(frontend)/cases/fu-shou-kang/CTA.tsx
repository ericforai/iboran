import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const points = [
  '服务过程与质控现状评估',
  '辅具流转与费用透明路径',
  '项目里程碑与交付节奏建议',
]

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur p-10 text-white">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold mb-4">开启您的数字化转型</h2>
              <p className="text-blue-100 leading-relaxed">
                获取适配养老服务与辅具租赁业务的数字化落地路线，构建可追踪、可协同、可分析的运营闭环。
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-blue-50">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white/80" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold transition-colors hover:bg-blue-50"
              >
                立即咨询
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/30 text-white/90 font-semibold transition-colors hover:bg-white/10"
              >
                查看更多案例
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
