import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#0A0F1C] overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/case-study/ai-fa-ke-hero.png" 
          alt="Ai Fa Ke Digital Transformation" 
          fill 
          className="object-cover opacity-30 scale-105" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            {/* Meta Tags */}
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-medium text-white/80 uppercase tracking-wider backdrop-blur-sm">
                客户案例
              </span>
              <span className="px-3 py-1 border border-blue-500/30 bg-blue-500/10 rounded-full text-xs font-medium text-blue-400 uppercase tracking-wider backdrop-blur-sm">
                制造行业
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              爱发科
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                数字化转型
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light border-l-2 border-blue-500 pl-6 mb-12">
              以数据为核心，打通生产、物流与财务脉络，推动从“规模驱动”向“效率与创新驱动”的制造转型。
            </p>

            {/* Stats / Highlights - Swiss Grid Style */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">3 天</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">月度结账周期</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">40%</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">效率提升</div>
              </div>
              <div>
                 <div className="text-3xl font-bold text-white mb-1">99%以上</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">全流程追溯</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
             <div className="bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-2xl">
                <div className="flex justify-between items-start mb-8">
                    <ArrowUpRight className="w-8 h-8 text-blue-400" />
                    <div className="text-right">
                        <div className="text-sm text-slate-400">所属行业</div>
                        <div className="text-white font-medium">专用设备制造</div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="text-sm text-slate-400">关键技术</div>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">数据中台</span>
                        <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">IoT 物联网</span>
                        <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">SRM 供应链</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
