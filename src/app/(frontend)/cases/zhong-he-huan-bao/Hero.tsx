import Image from 'next/image'
import { ChevronRight, Award, Users, Factory } from 'lucide-react'

// 环保工程制造一体化 SVG 插图
function EcoManufacturingSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* 背景圆 */}
      <circle cx="200" cy="200" r="180" fill="url(#ecoGradient1)" opacity="0.08"/>
      <circle cx="200" cy="200" r="140" fill="url(#ecoGradient2)" opacity="0.08"/>

      {/* 顶部项目管理模块 */}
      <g transform="translate(80, 30)">
        <rect x="0" y="0" width="240" height="70" rx="12" fill="url(#ecoGradient3)" opacity="0.95"/>
        <text x="120" y="28" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">项目管理</text>
        <rect x="20" y="40" width="50" height="18" rx="4" fill="#10b981" opacity="0.7"/>
        <rect x="80" y="40" width="50" height="18" rx="4" fill="#10b981" opacity="0.5"/>
        <rect x="140" y="40" width="50" height="18" rx="4" fill="#10b981" opacity="0.6"/>
        <rect x="200" y="40" width="25" height="18" rx="4" fill="#34d399" opacity="0.9"/>
      </g>

      {/* 连接线 */}
      <g stroke="url(#ecoGradient4)" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M200 100 L200 130 L130 130 L130 160">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M200 100 L200 130 L270 130 L270 160">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </path>
      </g>

      {/* 左侧设计模块 */}
      <g transform="translate(50, 160)">
        <rect x="0" y="0" width="130" height="90" rx="12" fill="url(#ecoGradient5)" opacity="0.95"/>
        <text x="65" y="28" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">非标设计</text>
        {/* 设计图标 */}
        <g transform="translate(45, 40)">
          <rect x="0" y="0" width="40" height="30" rx="3" stroke="#34d399" strokeWidth="1.5" fill="none" opacity="0.8"/>
          <line x1="8" y1="8" x2="32" y2="8" stroke="#34d399" strokeWidth="1" opacity="0.6"/>
          <line x1="8" y1="15" x2="32" y2="15" stroke="#34d399" strokeWidth="1" opacity="0.6"/>
          <line x1="8" y1="22" x2="20" y2="22" stroke="#34d399" strokeWidth="1" opacity="0.6"/>
        </g>
        <text x="65" y="82" textAnchor="middle" fill="#34d399" fontSize="10" opacity="0.9">ETO按单设计</text>
      </g>

      {/* 右侧生产模块 */}
      <g transform="translate(220, 160)">
        <rect x="0" y="0" width="130" height="90" rx="12" fill="url(#ecoGradient6)" opacity="0.95"/>
        <text x="65" y="28" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">生产制造</text>
        {/* 齿轮图标 */}
        <g transform="translate(48, 38)">
          <circle cx="17" cy="17" r="12" stroke="#60a5fa" strokeWidth="1.5" fill="none" opacity="0.8"/>
          <circle cx="17" cy="17" r="5" fill="#60a5fa" opacity="0.6"/>
        </g>
        <text x="65" y="82" textAnchor="middle" fill="#60a5fa" fontSize="10" opacity="0.9">ATO按单装配</text>
      </g>

      {/* 向下连接 */}
      <g stroke="url(#ecoGradient4)" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M115 250 L115 280">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" repeatCount="indefinite" begin="1s"/>
        </path>
        <path d="M285 250 L285 280">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" repeatCount="indefinite" begin="1.2s"/>
        </path>
      </g>

      {/* 底部交付运维模块 */}
      <g transform="translate(70, 280)">
        <rect x="0" y="0" width="260" height="60" rx="12" fill="url(#ecoGradient7)" opacity="0.95"/>
        <text x="130" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">交付与运维</text>
        <rect x="30" y="38" width="70" height="12" rx="3" fill="#34d399" opacity="0.6"/>
        <rect x="110" y="38" width="70" height="12" rx="3" fill="#34d399" opacity="0.5"/>
        <rect x="190" y="38" width="40" height="12" rx="3" fill="#34d399" opacity="0.7"/>
      </g>

      {/* 数据流动点 */}
      <g>
        <circle cx="115" cy="205" r="4" fill="#34d399">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="285" cy="205" r="4" fill="#60a5fa">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="200" cy="310" r="4" fill="#34d399">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </g>

      {/* 环保标志 */}
      <g transform="translate(320, 50)">
        <circle cx="25" cy="25" r="20" fill="url(#ecoGradient1)" opacity="0.3"/>
        <path d="M25 10 C20 10 16 14 16 19 C16 26 25 35 25 35 C25 35 34 26 34 19 C34 14 30 10 25 10 Z" fill="#34d399" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite"/>
        </path>
        <path d="M25 15 C22 15 20 17 20 20 C20 24 25 28 25 28 C25 28 30 24 30 20 C30 17 28 15 25 15 Z" fill="#065f46"/>
      </g>

      {/* 渐变定义 */}
      <defs>
        <linearGradient id="ecoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#059669"/>
        </linearGradient>
        <linearGradient id="ecoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399"/>
          <stop offset="100%" stopColor="#10b981"/>
        </linearGradient>
        <linearGradient id="ecoGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669"/>
          <stop offset="100%" stopColor="#10b981"/>
        </linearGradient>
        <linearGradient id="ecoGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#34d399"/>
        </linearGradient>
        <linearGradient id="ecoGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669"/>
          <stop offset="100%" stopColor="#047857"/>
        </linearGradient>
        <linearGradient id="ecoGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
        <linearGradient id="ecoGradient7" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669"/>
          <stop offset="100%" stopColor="#047857"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 50%, rgba(5, 150, 105, 0.2) 0%, transparent 50%)`
        }} />
      </div>

      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/case-study/sumitomo-hero.jpg"
          alt="中荷环保工程制造一体化"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-6">
              <span className="hover:text-emerald-300 transition-colors cursor-pointer">客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>环保工程</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              中荷环保
              <span className="block text-3xl md:text-5xl mt-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                工程制造一体化实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              从<span className="text-white font-semibold">&quot;非标定制&quot;</span>到<span className="text-white font-semibold">&quot;标准化交付&quot;</span>的跨越。
              泊冉软件助力中荷环保打通项目管理与生产制造，实现全生命周期的数字化管控。
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Factory className="w-4 h-4 text-emerald-400" />
                <span className="text-white text-sm font-medium">环保设备制造</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="w-4 h-4 text-teal-400" />
                <span className="text-white text-sm font-medium">ETO+ATO混合模式</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">数字化标杆</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#results" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5">
                查看项目成果
              </a>
              <a href="#solution" className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all">
                了解解决方案
              </a>
            </div>
          </div>

          {/* Right - SVG Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl" />
              {/* SVG Container */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <EcoManufacturingSVG />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs">向下滚动</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}