import { ChevronRight } from 'lucide-react'

// Semiconductor/Chip themed SVG illustration
function SemiconductorTechSVG() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="chipGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
      </defs>

      {/* Background Elements */}
      <circle cx="250" cy="200" r="180" fill="url(#chipGradient)" opacity="0.3">
        <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="200" r="140" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="2" strokeDasharray="8 4">
        <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite" />
      </circle>

      {/* Central Chip/IC */}
      <g transform="translate(250, 200)">
        {/* Chip Base */}
        <rect x="-70" y="-70" width="140" height="140" rx="8" fill="url(#cyanGradient)" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.8;0.9" dur="3s" repeatCount="indefinite" />
        </rect>
        {/* Chip Inner */}
        <rect x="-55" y="-55" width="110" height="110" rx="6" fill="#1a1a2e" />
        {/* Circuit Pattern */}
        <g stroke="url(#cyanGradient)" strokeWidth="1.5" fill="none" opacity="0.6">
          <rect x="-45" y="-45" width="30" height="30" rx="2" />
          <rect x="-10" y="-45" width="20" height="30" rx="2" />
          <rect x="15" y="-45" width="30" height="30" rx="2" />
          <rect x="-45" y="-10" width="30" height="20" rx="2" />
          <rect x="-10" y="-10" width="20" height="20" rx="2" />
          <rect x="15" y="-10" width="30" height="20" rx="2" />
          <rect x="-45" y="15" width="30" height="30" rx="2" />
          <rect x="-10" y="15" width="20" height="30" rx="2" />
          <rect x="15" y="15" width="30" height="30" rx="2" />
        </g>
        {/* Center Node */}
        <circle cx="0" cy="0" r="12" fill="url(#blueGradient)">
          <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Chip Pins */}
        <g fill="url(#cyanGradient)">
          {/* Top Pins */}
          <rect x="-50" y="-75" width="8" height="8" rx="1" />
          <rect x="-25" y="-75" width="8" height="8" rx="1" />
          <rect x="0" y="-75" width="8" height="8" rx="1" />
          <rect x="25" y="-75" width="8" height="8" rx="1" />
          <rect x="50" y="-75" width="8" height="8" rx="1" />
          {/* Bottom Pins */}
          <rect x="-50" y="67" width="8" height="8" rx="1" />
          <rect x="-25" y="67" width="8" height="8" rx="1" />
          <rect x="0" y="67" width="8" height="8" rx="1" />
          <rect x="25" y="67" width="8" height="8" rx="1" />
          <rect x="50" y="67" width="8" height="8" rx="1" />
          {/* Left Pins */}
          <rect x="-75" y="-50" width="8" height="8" rx="1" />
          <rect x="-75" y="-25" width="8" height="8" rx="1" />
          <rect x="-75" y="0" width="8" height="8" rx="1" />
          <rect x="-75" y="25" width="8" height="8" rx="1" />
          <rect x="-75" y="50" width="8" height="8" rx="1" />
          {/* Right Pins */}
          <rect x="67" y="-50" width="8" height="8" rx="1" />
          <rect x="67" y="-25" width="8" height="8" rx="1" />
          <rect x="67" y="0" width="8" height="8" rx="1" />
          <rect x="67" y="25" width="8" height="8" rx="1" />
          <rect x="67" y="50" width="8" height="8" rx="1" />
        </g>
      </g>

      {/* Solution Cards - Corner Positions */}
      {/* Top Left - Consolidated Reports */}
      <g transform="translate(60, 80)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="url(#chipGradient)" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="80;75;80" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">合并报表</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">多组织自动编制</text>
        {/* Document Icon */}
        <rect x="8" y="8" width="10" height="14" fill="#06b6d4" opacity="0.8" rx="1" />
      </g>

      {/* Top Right - ERP Platform */}
      <g transform="translate(330, 80)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="url(#chipGradient)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="80;75;80" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">统一ERP</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">集团财务标准化</text>
        {/* Server Icon */}
        <rect x="8" y="8" width="14" height="10" fill="#3b82f6" opacity="0.8" rx="1" />
        <circle cx="15" cy="13" r="2" fill="#1a1a2e" opacity="0.5" />
      </g>

      {/* Bottom Left - Expense Management */}
      <g transform="translate(60, 255)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="url(#chipGradient)" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="255;260;255" dur="3s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">费用管控</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">预算+项目核算</text>
        {/* Chart Icon */}
        <rect x="8" y="35" width="6" height="18" fill="#06b6d4" opacity="0.8" />
        <rect x="16" y="28" width="6" height="25" fill="#06b6d4" opacity="0.8" />
        <rect x="24" y="32" width="6" height="21" fill="#06b6d4" opacity="0.8" />
      </g>

      {/* Bottom Right - R&D Management */}
      <g transform="translate(330, 255)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="url(#chipGradient)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="255;260;255" dur="3s" begin="0.9s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">研发管理</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">IPD+资本化归集</text>
        {/* Circuit Icon */}
        <circle cx="15" cy="16" r="4" fill="#3b82f6" opacity="0.8" />
        <circle cx="25" cy="16" r="4" fill="#3b82f6" opacity="0.5" />
        <line x1="19" y1="16" x2="21" y2="16" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
      </g>

      {/* Floating Particles - Data Bits */}
      <g fill="#06b6d4" opacity="0.5">
        <rect x="120" y="140" width="4" height="4" transform="rotate(45 120 140)">
          <animate attributeName="y" values="140;130;140" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="380" y="280" width="3" height="3" transform="rotate(30 380 280)">
          <animate attributeName="y" values="280;270;280" dur="5s" repeatCount="indefinite" />
        </rect>
        <rect x="150" y="300" width="3" height="3" transform="rotate(60 150 300)">
          <animate attributeName="y" values="300;290;300" dur="3.5s" repeatCount="indefinite" />
        </rect>
        <rect x="350" y="110" width="4" height="4" transform="rotate(20 350 110)">
          <animate attributeName="y" values="110;100;110" dur="4.5s" repeatCount="indefinite" />
        </rect>
        <rect x="180" y="170" width="3" height="3" fill="#3b82f6">
          <animate attributeName="y" values="170;162;170" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="320" y="230" width="3" height="3" fill="#3b82f6">
          <animate attributeName="y" values="230;222;230" dur="3.5s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Connection Lines - Data Flow */}
      <g fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2">
        <path d="M115 112 Q 170 112 180 145">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M385 112 Q 330 112 320 145">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M115 287 Q 170 287 180 255">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
        <path d="M385 287 Q 330 287 320 255">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Bottom Tech Accents */}
      <g opacity="0.6">
        <rect x="180" y="375" width="40" height="3" rx="1.5" fill="url(#cyanGradient)">
          <animate attributeName="width" values="40;50;40" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="230" y="375" width="25" height="3" rx="1.5" fill="url(#blueGradient)" opacity="0.5">
          <animate attributeName="width" values="25;35;25" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="265" y="375" width="35" height="3" rx="1.5" fill="url(#cyanGradient)" opacity="0.4">
          <animate attributeName="width" values="35;45;35" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(8, 145, 178, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>芯片 / 芯片设计</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              中晶新源
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              专注于硅基电子材料和功率器件的研发、生产与销售，
              具备轻资产、高研发投入、多项目并行的典型特征。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium border border-cyan-500/30">
                多组织合并报表
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium border border-cyan-500/30">
                统一ERP平台
              </span>
              <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium border border-blue-500/30">
                研发项目核算
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              <SemiconductorTechSVG />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
