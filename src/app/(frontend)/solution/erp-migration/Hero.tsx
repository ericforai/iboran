import { ShieldCheck, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            传统 ERP 升级首选伙伴
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
              用友 U8/U9/NC/U8 Cloud
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-slate-300 mt-2 block">
              专属服务与升迁方案
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            泊冉软件为您提供原厂级专属运维保障，以保障现有系统稳定运行。同时提供平滑升级用友 BIP 的专业方案，助力企业无感迁移，激发数智新动能。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-900/20 group"
            >
              <ShieldCheck className="w-5 h-5 mr-2" />
              了解专属运维
            </Link>
            <Link 
              href="#upgrade" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600 group"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              探索升迁方案
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
