import Image from 'next/image'
import { ChevronRight, Award, Users, Pill } from 'lucide-react'

// 医药制造合规管理 SVG 插图
function PharmaComplianceSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* 背景圆 */}
      <circle cx="200" cy="200" r="180" fill="url(#pharmaGradient1)" opacity="0.08"/>
      <circle cx="200" cy="200" r="140" fill="url(#pharmaGradient2)" opacity="0.08"/>

      {/* 顶部合规管理系统 */}
      <g transform="translate(80, 20)">
        <rect x="0" y="0" width="240" height="60" rx="12" fill="url(#pharmaGradient3)" opacity="0.95"/>
        <text x="120" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">GXP 合规管理平台</text>
        <rect x="20" y="38" width="45" height="12" rx="3" fill="#10b981" opacity="0.7"/>
        <rect x="75" y="38" width="45" height="12" rx="3" fill="#10b981" opacity="0.5"/>
        <rect x="130" y="38" width="45" height="12" rx="3" fill="#10b981" opacity="0.6"/>
        <rect x="185" y="38" width="35" height="12" rx="3" fill="#34d399" opacity="0.9"/>
      </g>

      {/* 连接线 */}
      <g stroke="url(#pharmaGradient4)" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M200 80 L200 110 L120 110 L120 140">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M200 80 L200 110 L280 110 L280 140">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </path>
      </g>

      {/* 左侧生产管理模块 */}
      <g transform="translate(40, 140)">
        <rect x="0" y="0" width="150" height="100" rx="12" fill="url(#pharmaGradient5)" opacity="0.95"/>
        <text x="75" y="28" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">生产质量管理</text>
        {/* 药片图标 */}
        <g transform="translate(55, 40)">
          <ellipse cx="20" cy="20" rx="18" ry="12" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.8"/>
          <ellipse cx="20" cy="28" rx="18" ry="12" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.6"/>
          <rect x="18" y="15" width="4" height="18" fill="#34d399" opacity="0.4"/>
        </g>
        <text x="75" y="88" textAnchor="middle" fill="#34d399" fontSize="10" opacity="0.9">GMP合规</text>
      </g>

      {/* 右侧仓储管理模块 */}
      <g transform="translate(210, 140)">
        <rect x="0" y="0" width="150" height="100" rx="12" fill="url(#pharmaGradient6)" opacity="0.95"/>
        <text x="75" y="28" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">仓储效期管理</text>
        {/* 温度计图标 */}
        <g transform="translate(55, 40)">
          <rect x="15" y="5" width="10" height="35" rx="5" stroke="#22d3ee" strokeWidth="1.5" fill="none" opacity="0.8"/>
          <circle cx="20" cy="40" r="6" fill="#22d3ee" opacity="0.6"/>
          <rect x="17" y="10" width="6" height="20" rx="3" fill="#22d3ee" opacity="0.7">
            <animate attributeName="y" values="10;5;10" dur="2s" repeatCount="indefinite"/>
          </rect>
        </g>
        <text x="75" y="88" textAnchor="middle" fill="#22d3ee" fontSize="10" opacity="0.9">FEFO/温控</text>
      </g>

      {/* 向下连接 */}
      <g stroke="url(#pharmaGradient4)" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M115 240 L115 270">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" repeatCount="indefinite" begin="1s"/>
        </path>
        <path d="M285 240 L285 270">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" repeatCount="indefinite" begin="1.2s"/>
        </path>
      </g>

      {/* 底部全流程追溯模块 */}
      <g transform="translate(50, 270)">
        <rect x="0" y="0" width="300" height="60" rx="12" fill="url(#pharmaGradient7)" opacity="0.95"/>
        <text x="150" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">全流程追溯体系</text>
        <rect x="20" y="40" width="60" height="10" rx="3" fill="#10b981" opacity="0.6"/>
        <rect x="90" y="40" width="60" height="10" rx="3" fill="#10b981" opacity="0.5"/>
        <rect x="160" y="40" width="60" height="10" rx="3" fill="#10b981" opacity="0.7"/>
        <rect x="230" y="40" width="50" height="10" rx="3" fill="#34d399" opacity="0.9"/>
      </g>

      {/* 数据流动点 */}
      <g>
        <circle cx="115" cy="190" r="4" fill="#10b981">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="285" cy="190" r="4" fill="#22d3ee">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="200" cy="300" r="4" fill="#10b981">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </g>

      {/* 医药十字标志 */}
      <g transform="translate(320, 40)">
        <circle cx="25" cy="25" r="20" fill="url(#pharmaGradient1)" opacity="0.3"/>
        <rect x="22" y="12" width="6" height="26" rx="2" fill="#34d399" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite"/>
        </rect>
        <rect x="12" y="22" width="26" height="6" rx="2" fill="#34d399" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite"/>
        </rect>
      </g>

      {/* 渐变定义 */}
      <defs>
        <linearGradient id="pharmaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#059669"/>
        </linearGradient>
        <linearGradient id="pharmaGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399"/>
          <stop offset="100%" stopColor="#10b981"/>
        </linearGradient>
        <linearGradient id="pharmaGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669"/>
          <stop offset="100%" stopColor="#10b981"/>
        </linearGradient>
        <linearGradient id="pharmaGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#34d399"/>
        </linearGradient>
        <linearGradient id="pharmaGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669"/>
          <stop offset="100%" stopColor="#047857"/>
        </linearGradient>
        <linearGradient id="pharmaGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2"/>
          <stop offset="100%" stopColor="#0e7490"/>
        </linearGradient>
        <linearGradient id="pharmaGradient7" x1="0%" y1="0%" x2="100%" y2="0%">
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
          alt="宣泰药业数字化转型"
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
              <span>医药制造</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              宣泰药业
              <span className="block text-3xl md:text-5xl mt-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              泊冉软件助力宣泰药业构建<span className="text-white font-semibold">符合 GXP 标准的一体化管理体系</span>，
              以保障企业在严苛监管下实现效率与安全的双重跨越。
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Pill className="w-4 h-4 text-emerald-400" />
                <span className="text-white text-sm font-medium">仿制药制造</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="w-4 h-4 text-teal-400" />
                <span className="text-white text-sm font-medium">GXP合规管理</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">数字化转型标杆</span>
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
                <PharmaComplianceSVG />
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
