import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const points = ['司库与资金现状评估', '合并报表与对账方案', '合同费用闭环优化建议']

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-700 via-slate-900 to-amber-900">
      <div className="absolute inset-0">
        <div className="absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur p-10 text-white">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold mb-4">开启您的数字化转型</h2>
              <p className="text-amber-100 leading-relaxed">
                构建面向泛金融业务的财务管控平台，让资金更集中、合规更清晰、决策更及时。
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-amber-50">
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
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold transition-colors hover:bg-amber-50"
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
