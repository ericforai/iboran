import { TrendingUp, Clock, Shuffle, CheckCircle } from 'lucide-react'

export function ValueSection() {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            创造可量化的<span className="text-blue-300">商业价值</span>
          </h2>
          <p className="text-blue-100 text-lg">
            通过数智化转型，助力生物医药企业实现高质量增长
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Value 1 */}
          <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-900/20">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2>">99%以上</div>
            <div className="text-blue-200 font-medium">合规通过率</div>
            <p className="text-sm text-blue-300 mt-2">
              GMP/GSP/CSV验证<br/>一次性通过
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/20">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">-40%</div>
            <div className="text-blue-200 font-medium">项目交付周期</div>
            <p className="text-sm text-blue-300 mt-2">
              研发转产一体化<br/>加速新药上市
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-900/20">
              <Shuffle className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">99%</div>
            <div className="text-blue-200 font-medium">业务覆盖率</div>
            <p className="text-sm text-blue-300 mt-2">
              消除信息孤岛<br/>实现全业务闭环
            </p>
          </div>

          {/* Value 4 */}
          <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-900/20">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">+25%</div>
            <div className="text-blue-200 font-medium">运营效率提升</div>
            <p className="text-sm text-blue-300 mt-2">
              业财一体化降低<br/>内耗与管理成本
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
