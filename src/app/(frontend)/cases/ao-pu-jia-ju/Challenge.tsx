import { AlertCircle, Database, Package, TrendingDown } from 'lucide-react'

const challenges = [
  {
    icon: Database,
    title: "系统割裂数据不同步",
    description: "ERP 与 WMS 系统间集成不足，导致库存信息无法实时同步，生产计划与仓储执行严重脱节，订单履约效率低下。"
  },
  {
    icon: Package,
    title: "多品类柔性交付难",
    description: "集成吊顶、浴霸、照明、智能家居等多品类产品线扩展，项目型生产增多，产品配置复杂度提升，现有系统难以支撑。"
  },
  {
    icon: TrendingDown,
    title: "供应链响应速度慢",
    description: "物料追溯困难，端到端流程可视性不足，售后服务一体化管理缺失，难以满足大家居场景下的高效协同需求。"
  }
]

// Challenge Visualization SVG
function ChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="amberGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="alertGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="tealGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <circle cx="200" cy="200" r="150" fill="rgba(245, 158, 11, 0.05)" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub - Broken Connection */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="40" fill="rgba(239, 68, 68, 0.1)" stroke="url(#alertGradient2)" strokeWidth="2" />
        {/* Broken Link Icon */}
        <circle cx="-10" cy="0" r="8" fill="none" stroke="url(#amberGradient2)" strokeWidth="2.5" />
        <circle cx="10" cy="0" r="8" fill="none" stroke="url(#tealGradient2)" strokeWidth="2.5" />
        {/* X mark */}
        <path d="M-3 -3 L3 3 M3 -3 L-3 3" stroke="url(#alertGradient2)" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Challenge Nodes */}
      {/* Top - System Disconnect */}
      <g transform="translate(200, 70)">
        <circle cx="0" cy="0" r="30" fill="rgba(245, 158, 11, 0.15)" stroke="url(#amberGradient2)" strokeWidth="2" />
        {/* Split Icon */}
        <path d="M-10 -5 L-3 0 L-10 5 M10 -5 L3 0 L10 5" fill="none" stroke="url(#amberGradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="45" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">系统割裂</text>
      </g>

      {/* Left - Product Complexity */}
      <g transform="translate(70, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(245, 158, 11, 0.15)" stroke="url(#amberGradient2)" strokeWidth="2" />
        {/* Multiple Boxes */}
        <rect x="-10" y="-10" width="8" height="8" fill="none" stroke="url(#amberGradient2)" strokeWidth="2" rx="1" />
        <rect x="2" y="-10" width="8" height="8" fill="none" stroke="url(#tealGradient2)" strokeWidth="2" rx="1" />
        <rect x="-4" y="2" width="8" height="8" fill="none" stroke="url(#amberGradient2)" strokeWidth="2" rx="1" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">产品复杂</text>
      </g>

      {/* Right - Supply Chain */}
      <g transform="translate(330, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(245, 158, 11, 0.15)" stroke="url(#amberGradient2)" strokeWidth="2" />
        {/* Clock Icon */}
        <circle cx="0" cy="0" r="10" fill="none" stroke="url(#amberGradient2)" strokeWidth="2" />
        <path d="M0 -6 L0 0 L4 4" stroke="url(#amberGradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="45" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">响应迟缓</text>
      </g>

      {/* Connection Lines - Broken */}
      <g stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.5" strokeDasharray="4 4">
        <line x1="200" y1="110" x2="200" y2="160" />
        <line x1="110" y1="200" x2="160" y2="200" />
        <line x1="290" y1="200" x2="240" y2="200" />
      </g>

      {/* Alert Indicators */}
      <g>
        <circle cx="200" cy="40" r="5" fill="url(#alertGradient2)">
          <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="40" cy="200" r="5" fill="url(#alertGradient2)">
          <animate attributeName="r" values="5;7;5" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="360" cy="200" r="5" fill="url(#alertGradient2)">
          <animate attributeName="r" values="5;7;5" dur="1.5s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ERP and WMS Labels */}
      <text x="120" y="280" textAnchor="middle" fill="rgba(245, 158, 11, 0.6)" fontSize="12" fontWeight="600">ERP</text>
      <text x="280" y="280" textAnchor="middle" fill="rgba(20, 184, 166, 0.6)" fontSize="12" fontWeight="600">WMS</text>
      <path d="M140 270 Q 200 290 260 270" fill="none" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  )
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-amber-50" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            家居企业在 ERP 与 WMS 系统集成中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-amber-500/10 border border-amber-100">
              <ChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full text-white text-sm font-semibold shadow-lg">
              ERP&WMS割裂
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-amber-100 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-4xl font-bold text-amber-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl text-white text-center">
          <p className="text-lg">
            这些挑战直接影响了奥普家居的<span className="font-semibold">订单履约效率</span>、
            <span className="font-semibold">供应链响应速度</span>和<span className="font-semibold">端到端流程可视性</span>，
            制约了企业在智能家居时代的竞争力。
          </p>
        </div>
      </div>
    </section>
  )
}
