import { ChevronRight } from 'lucide-react'

// Medical/Healthcare themed SVG illustration
function MedicalHealthcareSVG() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="medicalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background Elements */}
      <circle cx="250" cy="200" r="180" fill="url(#cardGradient)" opacity="0.3">
        <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="200" r="140" fill="none" stroke="rgba(251,113,133,0.2)" strokeWidth="2" strokeDasharray="8 4">
        <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite" />
      </circle>

      {/* Medical Cross Symbol */}
      <g transform="translate(250, 100)">
        <rect x="-12" y="-35" width="24" height="70" rx="3" fill="url(#medicalGradient)" filter="url(#glow)">
          <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="-35" y="-12" width="70" height="24" rx="3" fill="url(#medicalGradient)" filter="url(#glow)">
          <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Central Hub - Digital Platform */}
      <g transform="translate(250, 200)">
        <circle cx="0" cy="0" r="45" fill="url(#medicalGradient)" opacity="0.9" />
        <circle cx="0" cy="0" r="38" fill="#1a1a2e" />
        {/* ECG Line */}
        <path d="M-20 0 L-10 0 L-5 -8 L0 8 L5 0 L20 0" fill="none" stroke="url(#medicalGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Data Flow Lines - Curved connections */}
      <g fill="none" stroke="rgba(251,113,133,0.4)" strokeWidth="2">
        <path d="M250 155 Q 180 155 130 200">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M250 155 Q 320 155 370 200">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M250 245 Q 180 245 130 200">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
        <path d="M250 245 Q 320 245 370 200">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Solution Cards - Corner Positions */}
      {/* Top Left - Compliance Management */}
      <g transform="translate(80, 150)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(251,113,133,0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="150;145;150" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">合规管理</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">GSP/GMP</text>
        {/* Shield Icon */}
        <path d="M50 52 L45 56 L50 64 L55 56 Z" fill="#fb7185" opacity="0.8" />
      </g>

      {/* Top Right - Supply Chain */}
      <g transform="translate(320, 150)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(251,113,133,0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="150;145;150" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">供应链追溯</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">批次管理</text>
        {/* Box Icon */}
        <rect x="45" y="54" width="10" height="8" rx="1" fill="#fb7185" opacity="0.8" />
      </g>

      {/* Bottom Left - Data Analytics */}
      <g transform="translate(80, 260)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(251,113,133,0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="260;265;260" dur="3s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">效期管理</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">FEFO预警</text>
        {/* Clock Icon */}
        <circle cx="50" cy="59" r="5" fill="none" stroke="#fb7185" strokeWidth="1.5" opacity="0.8" />
        <path d="M50 56 L50 59 L52 59" stroke="#fb7185" strokeWidth="1.2" opacity="0.8" />
      </g>

      {/* Bottom Right - Marketing Cloud */}
      <g transform="translate(320, 260)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(251,113,133,0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="260;265;260" dur="3s" begin="0.9s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">营销云</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">渠道透明化</text>
        {/* Cloud Icon */}
        <ellipse cx="50" cy="60" rx="8" ry="5" fill="#fb7185" opacity="0.8" />
      </g>

      {/* Floating Particles */}
      <g fill="#fb7185" opacity="0.4">
        <circle cx="150" cy="100" r="3">
          <animate attributeName="cy" values="100;90;100" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="320" r="2.5">
          <animate attributeName="cy" values="320;310;320" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="220" r="2">
          <animate attributeName="cy" values="220;210;220" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="180" r="2">
          <animate attributeName="cy" values="180;170;180" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Bottom Tech Accents */}
      <g opacity="0.6">
        <rect x="180" y="360" width="40" height="3" rx="1.5" fill="url(#medicalGradient)">
          <animate attributeName="width" values="40;50;40" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="230" y="360" width="25" height="3" rx="1.5" fill="url(#medicalGradient)" opacity="0.5">
          <animate attributeName="width" values="25;35;25" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="265" y="360" width="35" height="3" rx="1.5" fill="url(#medicalGradient)" opacity="0.4">
          <animate attributeName="width" values="35;45;35" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 113, 133, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-rose-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>医药与医疗 / 专业医疗服务</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              健嘉医疗
              <span className="block mt-2 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              医药与医疗健康行业正处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，
              企业亟需构建一套符合 GXP 标准的一体化管理体系。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-rose-500/20 backdrop-blur-sm rounded-full text-rose-300 text-sm font-medium border border-rose-500/30">
                GSP/GMP 合规
              </span>
              <span className="px-4 py-2 bg-rose-500/20 backdrop-blur-sm rounded-full text-rose-300 text-sm font-medium border border-rose-500/30">
                供应链追溯
              </span>
              <span className="px-4 py-2 bg-rose-500/20 backdrop-blur-sm rounded-full text-rose-300 text-sm font-medium border border-rose-500/30">
                效期管理
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-rose-500/20">
              <MedicalHealthcareSVG />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
