import { ChevronRight } from 'lucide-react'

// Financial Clearing themed SVG illustration
function FinancialClearingSVG() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradFin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="purpleGradFin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="indigoGradFin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="cyanGradFin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>

      {/* Background Elements */}
      <circle cx="250" cy="200" r="160" fill="rgba(99, 102, 241, 0.05)">
        <animate attributeName="r" values="160;170;160" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="200" r="130" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" strokeDasharray="8 4">
        <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite" />
      </circle>

      {/* Central Hub - Financial Clearing Platform */}
      <g transform="translate(250, 200)">
        {/* Platform Base */}
        <rect x="-70" y="-70" width="140" height="140" rx="16" fill="url(#indigoGradFin)" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.8;0.9" dur="3s" repeatCount="indefinite" />
        </rect>
        {/* Inner Platform */}
        <rect x="-55" y="-55" width="110" height="110" rx="12" fill="#0f172a" />
        {/* Data Grid */}
        <g fill="url(#cyanGradFin)" opacity="0.6">
          <rect x="-45" y="-45" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="-12" y="-45" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </rect>
          <rect x="21" y="-45" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="-45" y="-12" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.9s" repeatCount="indefinite" />
          </rect>
          <rect x="-12" y="-12" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.2s" repeatCount="indefinite" />
          </rect>
          <rect x="21" y="-12" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.5s" repeatCount="indefinite" />
          </rect>
          <rect x="-45" y="21" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.8s" repeatCount="indefinite" />
          </rect>
          <rect x="-12" y="21" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="2.1s" repeatCount="indefinite" />
          </rect>
          <rect x="21" y="21" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="2.4s" repeatCount="indefinite" />
          </rect>
        </g>
        {/* Center Icon - Financial Symbol */}
        <circle cx="0" cy="0" r="18" fill="url(#blueGradFin)">
          <animate attributeName="r" values="18;21;18" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Currency/Yen Symbol */}
        <text x="0" y="8" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">¥</text>
      </g>

      {/* Solution Cards - Corner Positions */}
      {/* Top Left - Registration & Custody */}
      <g transform="translate(60, 80)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="rgba(99, 102, 241, 0.15)" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="80;75;80" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">登记托管</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">资产统一管理</text>
        {/* Document Icon */}
        <rect x="8" y="8" width="10" height="14" fill="#6366f1" opacity="0.8" rx="1" />
      </g>

      {/* Top Right - Settlement */}
      <g transform="translate(330, 80)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="rgba(139, 92, 246, 0.15)" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="80;75;80" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">资金结算</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">高效清算服务</text>
        {/* Exchange Icon */}
        <path d="M8 16 L15 8 M22 16 L15 24" stroke="#8b5cf6" strokeWidth="2" opacity="0.8" fill="none" />
      </g>

      {/* Bottom Left - Margin Management */}
      <g transform="translate(60, 255)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="255;260;255" dur="3s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">保证金管理</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">风险动态监控</text>
        {/* Shield Icon */}
        <path d="M15 8 L15 18 C15 22 8 24 8 24 C8 24 1 22 1 18 L1 8 Z" fill="#06b6d4" opacity="0.8" transform="translate(7, 0)" />
      </g>

      {/* Bottom Right - Domestic Innovation */}
      <g transform="translate(330, 255)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="255;260;255" dur="3s" begin="0.9s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">国产信创</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">自主可控合规</text>
        {/* Chip/Security Icon */}
        <rect x="8" y="10" width="14" height="12" fill="none" stroke="#3b82f6" strokeWidth="1.5" rx="1" opacity="0.8" />
        <rect x="11" y="13" width="8" height="6" fill="#3b82f6" opacity="0.5" rx="0.5" />
      </g>

      {/* Transaction Flow Lines */}
      <g fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2">
        {/* Circular flow around center */}
        <path d="M180 200 A 70 70 0 0 1 320 200">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M180 200 A 70 70 0 0 0 320 200">
          <animate attributeName="stroke-dashoffset" from="0" to="100" dur="3s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Data Flow Lines */}
      <g fill="none" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="6 4">
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

      {/* Floating Transaction Particles */}
      <g fill="#6366f1" opacity="0.4">
        <circle cx="130" cy="150" r="3">
          <animate attributeName="cy" values="150;140;150" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="250" r="2">
          <animate attributeName="cy" values="250;240;250" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="290" r="2.5">
          <animate attributeName="cy" values="290;280;290" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="120" r="3">
          <animate attributeName="cy" values="120;110;120" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Bottom Financial Data Stream */}
      <g opacity="0.3">
        <rect x="180" y="375" width="140" height="3" rx="1.5" fill="url(#indigoGradFin)">
          <animate attributeName="width" values="140;160;140" dur="2s" repeatCount="indefinite" />
        </rect>
        <circle cx="200" cy="376.5" r="3" fill="#6366f1">
          <animate attributeName="cx" values="200;220;200" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="376.5" r="3" fill="#8b5cf6">
          <animate attributeName="cx" values="250;270;250" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="376.5" r="3" fill="#3b82f6">
          <animate attributeName="cx" values="300;320;300" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>金融 / 泛金融</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              上海清算所
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              提供金融交易清算服务，包括登记、托管、结算、保证金管理，
              国有金融背景下的专业化清算机构。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full text-indigo-300 text-sm font-medium border border-indigo-500/30">
                国产信创合规
              </span>
              <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium border border-purple-500/30">
                多系统集成
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium border border-cyan-500/30">
                业财深度融合
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20">
              <FinancialClearingSVG />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
