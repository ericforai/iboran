import Image from 'next/image'
import { ChevronRight, Award, Users, Scale } from 'lucide-react'

// 精密制造称重设备 SVG 插图
function PrecisionScaleSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* 背景圆 */}
      <circle cx="200" cy="200" r="180" fill="url(#scaleGradient1)" opacity="0.08"/>
      <circle cx="200" cy="200" r="140" fill="url(#scaleGradient2)" opacity="0.08"/>

      {/* 顶部数据中心 */}
      <g transform="translate(100, 30)">
        <rect x="0" y="0" width="200" height="60" rx="12" fill="url(#scaleGradient3)" opacity="0.95"/>
        <text x="100" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">智能制造数据中心</text>
        <rect x="20" y="38" width="40" height="12" rx="3" fill="#f59e0b" opacity="0.7"/>
        <rect x="70" y="38" width="40" height="12" rx="3" fill="#f59e0b" opacity="0.5"/>
        <rect x="120" y="38" width="40" height="12" rx="3" fill="#f59e0b" opacity="0.6"/>
        <rect x="170" y="38" width="20" height="12" rx="3" fill="#fbbf24" opacity="0.9"/>
      </g>

      {/* 连接线 */}
      <g stroke="url(#scaleGradient4)" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M200 90 L200 120 L120 120 L120 150">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M200 90 L200 120 L280 120 L280 150">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </path>
      </g>

      {/* 左侧生产模块 */}
      <g transform="translate(50, 150)">
        <rect x="0" y="0" width="140" height="100" rx="12" fill="url(#scaleGradient5)" opacity="0.95"/>
        <text x="70" y="28" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">精密制造</text>
        {/* 称重图标 */}
        <g transform="translate(50, 40)">
          <rect x="0" y="25" width="40" height="6" rx="2" fill="#fbbf24" opacity="0.8"/>
          <rect x="15" y="0" width="10" height="25" fill="#f59e0b" opacity="0.7"/>
          <circle cx="20" cy="35" r="8" stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.9"/>
          <circle cx="20" cy="35" r="3" fill="#fbbf24"/>
        </g>
        <text x="70" y="88" textAnchor="middle" fill="#fbbf24" fontSize="10" opacity="0.9">高精度加工</text>
      </g>

      {/* 右侧质量检测模块 */}
      <g transform="translate(210, 150)">
        <rect x="0" y="0" width="140" height="100" rx="12" fill="url(#scaleGradient6)" opacity="0.95"/>
        <text x="70" y="28" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">质量检测</text>
        {/* 检测图标 */}
        <g transform="translate(50, 40)">
          <rect x="5" y="5" width="30" height="30" rx="4" stroke="#22d3ee" strokeWidth="1.5" fill="none" opacity="0.8"/>
          <path d="M12 20 L18 26 L28 14" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.9"/>
          <circle cx="20" cy="45" r="5" fill="#22d3ee" opacity="0.6">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>
        <text x="70" y="88" textAnchor="middle" fill="#22d3ee" fontSize="10" opacity="0.9">精度追溯</text>
      </g>

      {/* 向下连接 */}
      <g stroke="url(#scaleGradient4)" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M120 250 L120 280">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" repeatCount="indefinite" begin="1s"/>
        </path>
        <path d="M280 250 L280 280">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" repeatCount="indefinite" begin="1.2s"/>
        </path>
      </g>

      {/* 底部业财一体化模块 */}
      <g transform="translate(60, 280)">
        <rect x="0" y="0" width="280" height="60" rx="12" fill="url(#scaleGradient7)" opacity="0.95"/>
        <text x="140" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">业财一体化管理</text>
        <rect x="30" y="40" width="60" height="10" rx="3" fill="#f59e0b" opacity="0.6"/>
        <rect x="100" y="40" width="60" height="10" rx="3" fill="#f59e0b" opacity="0.5"/>
        <rect x="170" y="40" width="60" height="10" rx="3" fill="#f59e0b" opacity="0.7"/>
        <rect x="240" y="40" width="20" height="10" rx="3" fill="#fbbf24" opacity="0.9"/>
      </g>

      {/* 数据流动点 */}
      <g>
        <circle cx="120" cy="200" r="4" fill="#f59e0b">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="280" cy="200" r="4" fill="#22d3ee">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="200" cy="310" r="4" fill="#f59e0b">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </g>

      {/* 精度标志 */}
      <g transform="translate(320, 40)">
        <circle cx="25" cy="25" r="20" fill="url(#scaleGradient1)" opacity="0.3"/>
        <path d="M25 10 L35 20 L28 20 L28 35 L22 35 L22 20 L15 20 Z" fill="#fbbf24" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite"/>
        </path>
      </g>

      {/* 渐变定义 */}
      <defs>
        <linearGradient id="scaleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
        <linearGradient id="scaleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24"/>
          <stop offset="100%" stopColor="#f59e0b"/>
        </linearGradient>
        <linearGradient id="scaleGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#f59e0b"/>
        </linearGradient>
        <linearGradient id="scaleGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#fbbf24"/>
        </linearGradient>
        <linearGradient id="scaleGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#b45309"/>
        </linearGradient>
        <linearGradient id="scaleGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2"/>
          <stop offset="100%" stopColor="#0e7490"/>
        </linearGradient>
        <linearGradient id="scaleGradient7" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#b45309"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, rgba(245, 158, 11, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 50%, rgba(217, 119, 6, 0.2) 0%, transparent 50%)`
        }} />
      </div>

      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/case-study/sumitomo-hero.jpg"
          alt="大和衡器数字化转型"
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
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-6">
              <span className="hover:text-amber-300 transition-colors cursor-pointer">客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>精密制造</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              大和衡器
              <span className="block text-3xl md:text-5xl mt-2 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              泊冉软件助力大和衡器实现<span className="text-white font-semibold">精密制造与业财一体化</span>，
              打通生产、质量与财务的数据脉络，实现以数据为核心的敏捷制造。
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Scale className="w-4 h-4 text-amber-400" />
                <span className="text-white text-sm font-medium">称重设备制造</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">高精度加工</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award className="w-4 h-4 text-orange-400" />
                <span className="text-white text-sm font-medium">数字化转型标杆</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#results" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full font-semibold hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5">
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
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-3xl" />
              {/* SVG Container */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <PrecisionScaleSVG />
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
