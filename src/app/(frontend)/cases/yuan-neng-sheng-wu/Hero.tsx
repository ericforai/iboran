import Image from 'next/image'
import { ChevronRight, Award, Users, TrendingUp } from 'lucide-react'

// 数字化转型 SVG 插图组件
function DigitalTransformationSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* 背景圆 */}
      <circle cx="200" cy="200" r="180" fill="url(#gradient1)" opacity="0.1"/>
      <circle cx="200" cy="200" r="140" fill="url(#gradient2)" opacity="0.1"/>

      {/* 数据中心/服务器图标 */}
      <g transform="translate(100, 80)">
        {/* 主机架 */}
        <rect x="0" y="0" width="200" height="60" rx="8" fill="url(#gradient3)" opacity="0.9"/>
        <rect x="10" y="10" width="30" height="40" rx="4" fill="#1e40af" opacity="0.6"/>
        <rect x="50" y="10" width="30" height="40" rx="4" fill="#1e40af" opacity="0.6"/>
        <rect x="90" y="10" width="30" height="40" rx="4" fill="#1e40af" opacity="0.6"/>
        <rect x="130" y="10" width="30" height="40" rx="4" fill="#1e40af" opacity="0.6"/>
        <rect x="170" y="10" width="20" height="40" rx="4" fill="#22c55e" opacity="0.8"/>

        {/* 第二层 */}
        <rect x="0" y="70" width="200" height="60" rx="8" fill="url(#gradient3)" opacity="0.9"/>
        <rect x="10" y="80" width="30" height="40" rx="4" fill="#1e40af" opacity="0.6"/>
        <rect x="50" y="80" width="30" height="40" rx="4" fill="#1e40af" opacity="0.6"/>
        <rect x="90" y="80" width="30" height="40" rx="4" fill="#1e40af" opacity="0.6"/>
        <rect x="130" y="80" width="30" height="40" rx="4" fill="#1e40af" opacity="0.6"/>
        <rect x="170" y="80" width="20" height="40" rx="4" fill="#22c55e" opacity="0.8"/>
      </g>

      {/* 连接线 */}
      <g stroke="url(#gradient4)" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M200 140 L200 170 L120 170 L120 200">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M200 140 L200 170 L280 170 L280 200">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </path>
      </g>

      {/* 左侧模块 - 生产管理 */}
      <g transform="translate(60, 200)">
        <rect x="0" y="0" width="120" height="80" rx="12" fill="url(#gradient5)" opacity="0.9"/>
        <text x="60" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">生产管理</text>
        <rect x="15" y="45" width="90" height="8" rx="4" fill="#3b82f6" opacity="0.7"/>
        <rect x="15" y="58" width="60" height="8" rx="4" fill="#3b82f6" opacity="0.5"/>
      </g>

      {/* 右侧模块 - 财务管理 */}
      <g transform="translate(220, 200)">
        <rect x="0" y="0" width="120" height="80" rx="12" fill="url(#gradient6)" opacity="0.9"/>
        <text x="60" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">财务管理</text>
        <rect x="15" y="45" width="90" height="8" rx="4" fill="#8b5cf6" opacity="0.7"/>
        <rect x="15" y="58" width="75" height="8" rx="4" fill="#8b5cf6" opacity="0.5"/>
      </g>

      {/* 底部供应链模块 */}
      <g transform="translate(100, 300)">
        <rect x="0" y="0" width="200" height="50" rx="12" fill="url(#gradient7)" opacity="0.9"/>
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">供应链协同</text>
      </g>

      {/* 垂直连接线 */}
      <g stroke="url(#gradient4)" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M120 280 L120 300">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" repeatCount="indefinite" begin="1s"/>
        </path>
        <path d="M280 280 L280 300">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" repeatCount="indefinite" begin="1.2s"/>
        </path>
      </g>

      {/* 数据流动点 */}
      <g>
        <circle cx="120" cy="200" r="4" fill="#3b82f6">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="280" cy="200" r="4" fill="#8b5cf6">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="200" cy="325" r="4" fill="#06b6d4">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </g>

      {/* 渐变定义 */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e40af"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
        <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
        <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#7c3aed"/>
        </linearGradient>
        <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#0891b2"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 50%, rgba(37, 99, 235, 0.2) 0%, transparent 50%)`
        }} />
      </div>

      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/case-study/original-bio-hero.png"
          alt="原能生物数字化转型"
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
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-6 animate-fade-in">
              <span className="hover:text-blue-300 transition-colors cursor-pointer">客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>制造 / 装备制造</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              原能生物
              <span className="block text-3xl md:text-5xl mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              泊冉软件助力原能生物打通生产、物流与财务的脉络，
              <span className="text-white font-semibold">实现以数据为核心的敏捷制造与精准交付</span>
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm font-medium">生命科学领域</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm font-medium">深低温设备制造</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">数字化转型标杆</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#results" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              {/* SVG Container */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <DigitalTransformationSVG />
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
