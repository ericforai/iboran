import { ArrowRight, CheckCircle2, Pill, Activity, ShieldCheck, Microscope } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content (60%) */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <Pill className="w-4 h-4" />
              <span>生物医药行业解决方案</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              AI驱动药企研产销
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                全流程质量合规
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              基于事项会计与YonGPT智能体，构建符合GMP/GSP/CSV合规要求的全产业链数智平台，助力生物医药企业IPO上市与全球化运营。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20"
              >
                预约专家咨询
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/resources/whitepaper"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-700 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-lg transition-all duration-200"
              >
                下载行业白皮书
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>GMP/GSP合规</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>CDMO项目管控</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>IPO审计支持</span>
              </div>
            </div>
          </div>

          {/* Right Visuals (40%) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            {/* Main Visual Card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
              <div className="grid grid-cols-2 gap-4 mb-6">
                 {/* Top Left: Compliance */}
                 <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="font-semibold text-slate-900">质量合规</div>
                  <div className="text-sm text-slate-600">CSV/GMP认证</div>
                 </div>
                 {/* Top Right: R&D */}
                 <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-100">
                  <Microscope className="w-8 h-8 text-cyan-600 mb-3" />
                  <div className="font-semibold text-slate-900">研发创新</div>
                  <div className="text-sm text-slate-600">项目全周期管理</div>
                 </div>
                 {/* Bottom Left: Production */}
                 <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                  <Activity className="w-8 h-8 text-indigo-600 mb-3" />
                  <div className="font-semibold text-slate-900">生产制造</div>
                  <div className="text-sm text-slate-600">精益生产管控</div>
                 </div>
                 {/* Bottom Right: Global */}
                 <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <Pill className="w-8 h-8 text-emerald-600 mb-3" />
                  <div className="font-semibold text-slate-900">全球运营</div>
                  <div className="text-sm text-slate-600">多组织多准则</div>
                 </div>
              </div>

              {/* Data Metrics Overlay */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <span className="text-sm font-medium text-slate-600">合规通过率</span>
                  <span className="text-lg font-bold text-green-600">99%以上</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <span className="text-sm font-medium text-slate-600">研发效率提升</span>
                  <span className="text-lg font-bold text-blue-600">+30%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
