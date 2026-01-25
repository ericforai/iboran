import { AlertCircle, FileText, Server, Wallet } from 'lucide-react'

const challenges = [
  {
    icon: FileText,
    title: "多组织合并报表难",
    description: "多法人架构下合并报表编制依赖手工归集，对账困难、周期长、合规风险高，难以满足集团化财务管理的精准性与时效性要求。"
  },
  {
    icon: Server,
    title: "缺乏统一ERP平台",
    description: "各子公司科目体系不一致、资金管理分散、成本核算粗放，严重影响财务数据可比性与决策支持能力。"
  },
  {
    icon: Wallet,
    title: "费用管控缺乏透明度",
    description: "研发、生产、销售等环节支出复杂，现有流程以手工报销为主，审批效率低、预算控制薄弱，无法有效追溯费用动因。"
  }
]

// Challenge Visualization SVG for Chip Design Company
function ChipDesignChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cyanGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="blueGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="alertGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Background Circles */}
      <circle cx="200" cy="200" r="160" fill="rgba(6, 182, 212, 0.03)" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub - Fragmented Systems */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="45" fill="rgba(239, 68, 68, 0.1)" stroke="url(#alertGradChal)" strokeWidth="2">
          <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Fragmented chips */}
        <rect x="-18" y="-25" width="12" height="12" fill="url(#cyanGradChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-25;-28;-25" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="2" y="-22" width="12" height="12" fill="url(#blueGradChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-22;-25;-22" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="-10" y="10" width="12" height="12" fill="url(#cyanGradChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="10;7;10" dur="2.5s" repeatCount="indefinite" />
        </rect>
        {/* X mark */}
        <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="url(#alertGradChal)" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Challenge Nodes */}
      {/* Top - Consolidated Reports */}
      <g transform="translate(200, 60)">
        <circle cx="0" cy="0" r="30" fill="rgba(6, 182, 212, 0.15)" stroke="url(#cyanGradChal)" strokeWidth="2" />
        {/* Document Stack */}
        <rect x="-10" y="-10" width="20" height="8" fill="none" stroke="url(#cyanGradChal)" strokeWidth="2" rx="1" />
        <rect x="-10" y="-4" width="20" height="8" fill="none" stroke="url(#cyanGradChal)" strokeWidth="2" rx="1" opacity="0.7" />
        <rect x="-10" y="2" width="20" height="8" fill="none" stroke="url(#cyanGradChal)" strokeWidth="2" rx="1" opacity="0.4" />
        <text x="0" y="45" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">合并报表</text>
      </g>

      {/* Left - ERP Platform */}
      <g transform="translate(60, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(6, 182, 212, 0.15)" stroke="url(#cyanGradChal)" strokeWidth="2" />
        {/* Server Icon */}
        <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="url(#cyanGradChal)" strokeWidth="2" rx="2" />
        <circle cx="-3" cy="-3" r="2" fill="url(#cyanGradChal)" opacity="0.5" />
        <circle cx="3" cy="-3" r="2" fill="url(#cyanGradChal)" opacity="0.5" />
        <circle cx="-3" cy="3" r="2" fill="url(#cyanGradChal)" opacity="0.5" />
        <circle cx="3" cy="3" r="2" fill="url(#cyanGradChal)" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">ERP平台</text>
      </g>

      {/* Right - Expense Control */}
      <g transform="translate(340, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(59, 130, 246, 0.15)" stroke="url(#blueGradChal)" strokeWidth="2" />
        {/* Budget Chart */}
        <rect x="-10" y="-8" width="6" height="16" fill="url(#cyanGradChal)" opacity="0.5" />
        <rect x="-2" y="-12" width="6" height="20" fill="url(#blueGradChal)" opacity="0.7" />
        <rect x="6" y="-4" width="6" height="12" fill="url(#cyanGradChal)" opacity="0.3" />
        <text x="0" y="45" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600">费用管控</text>
      </g>

      {/* Bottom - R&D Management */}
      <g transform="translate(200, 340)">
        <circle cx="0" cy="0" r="30" fill="rgba(59, 130, 246, 0.15)" stroke="url(#blueGradChal)" strokeWidth="2" />
        {/* Chip Icon */}
        <rect x="-10" y="-8" width="20" height="16" fill="none" stroke="url(#blueGradChal)" strokeWidth="2" rx="2" />
        <rect x="-6" y="-5" width="4" height="4" fill="url(#blueGradChal)" opacity="0.5" />
        <rect x="2" y="-5" width="4" height="4" fill="url(#blueGradChal)" opacity="0.5" />
        <rect x="-6" y="1" width="4" height="4" fill="url(#blueGradChal)" opacity="0.5" />
        <rect x="2" y="1" width="4" height="4" fill="url(#blueGradChal)" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600">研发管理</text>
      </g>

      {/* Broken Connection Lines */}
      <g stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.5" strokeDasharray="3 3">
        <line x1="200" y1="100" x2="200" y2="155">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="200" x2="155" y2="200">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </line>
        <line x1="300" y1="200" x2="245" y2="200">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </line>
        <line x1="200" y1="300" x2="200" y2="245">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" begin="0.9s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Alert Indicators */}
      <g>
        <circle cx="200" cy="30" r="4" fill="url(#alertGradChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="200" r="4" fill="url(#alertGradChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="200" r="4" fill="url(#alertGradChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="370" r="4" fill="url(#alertGradChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* System Labels */}
      <text x="110" y="195" textAnchor="middle" fill="rgba(6, 182, 212, 0.5)" fontSize="10" fontWeight="600">各子公司</text>
      <text x="290" y="195" textAnchor="middle" fill="rgba(59, 130, 246, 0.5)" fontSize="10" fontWeight="600">集团总部</text>
    </svg>
  )
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-semibold text-cyan-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            芯片设计企业在集团化财务管理中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-cyan-500/10 border border-cyan-100">
              <ChipDesignChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full text-white text-sm font-semibold shadow-lg">
              系统割裂
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-5">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-5 bg-white rounded-2xl border border-cyan-100 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-3xl font-bold text-cyan-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl text-white text-center">
          <p className="text-base">
            这些挑战直接影响了中晶新源的<span className="font-semibold">财务管控能力</span>、
            <span className="font-semibold">数据集成效率</span>和<span className="font-semibold">研发项目核算精度</span>，
            制约了企业在芯片设计市场的竞争力。
          </p>
        </div>
      </div>
    </section>
  )
}
