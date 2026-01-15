import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#0A0F1C] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/case-study/sumitomo-hero.jpg" 
          alt="泰富医疗数字化转型实践案例展示" 
          fill 
          className="object-cover opacity-20" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
        <div className="max-w-4xl">
          <nav className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-6" aria-label="面包屑导航">
            <span>客户案例</span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span>医药与医疗 / 专业医疗服务</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            泰富医疗<br />
            <span className="text-blue-400 text-2xl sm:text-3xl md:text-5xl">数字化转型实践</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
            医药与医疗健康行业正处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，企业亟需构建一套符合 GXP 标准的一体化管理体系。泊冉软件通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。项目背景：提供医疗器械研发、生产及医疗信息化解决方案。
          </p>
        </div>
      </div>
    </section>
  )
}
