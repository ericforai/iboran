import { AlertCircle, FileText, Shield, BarChart3, Terminal } from 'lucide-react'

const challenges = [
  {
    icon: FileText,
    title: "多系统集成困难",
    description: "业务系统复杂度高、数据交互频繁，各系统间数据协同效率低下，严重影响整体业务处理能力。"
  },
  {
    icon: Shield,
    title: "国产信创合规要求",
    description: "作为国有金融机构，必须满足国产信创合规要求，现有系统在自主可控技术架构适配方面存在短板。"
  },
  {
    icon: BarChart3,
    title: "合并报表编制困难",
    description: "在集团化财务管理框架下，合并报表编制周期长、准确性难以保障，财务管控能力受限。"
  },
  {
    icon: Terminal,
    title: "业财融合深度不足",
    description: "业务与财务系统深度整合不足，财务数据对业务支撑滞后，无法有效支撑决策分析。"
  }
]

// Financial SOE Challenge Visualization
function FinancialSOEChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="indigoGradFinChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="purpleGradFinChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="alertGradFinChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Background Circles */}
      <circle cx="200" cy="200" r="160" fill="rgba(99, 102, 241, 0.03)" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub - Fragmented Financial Systems */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="45" fill="rgba(239, 68, 68, 0.1)" stroke="url(#alertGradFinChal)" strokeWidth="2">
          <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Fragmented buildings */}
        <rect x="-22" y="-25" width="14" height="12" fill="url(#indigoGradFinChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-25;-28;-25" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="4" y="-20" width="14" height="12" fill="url(#purpleGradFinChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-20;-23;-20" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="-12" y="10" width="14" height="12" fill="url(#indigoGradFinChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="10;7;10" dur="2.5s" repeatCount="indefinite" />
        </rect>
        {/* X mark */}
        <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="url(#alertGradFinChal)" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Challenge Nodes */}
      {/* Top - Multi-system Integration */}
      <g transform="translate(200, 60)">
        <circle cx="0" cy="0" r="30" fill="rgba(99, 102, 241, 0.15)" stroke="url(#indigoGradFinChal)" strokeWidth="2" />
        {/* Multiple Systems Icon */}
        <rect x="-12" y="-8" width="8" height="16" fill="url(#indigoGradFinChal)" opacity="0.6" rx="1" />
        <rect x="-2" y="-8" width="8" height="16" fill="url(#purpleGradFinChal)" opacity="0.6" rx="1" />
        <rect x="8" y="-8" width="8" height="16" fill="url(#indigoGradFinChal)" opacity="0.6" rx="1" />
        <text x="0" y="45" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="600">多系统集成</text>
      </g>

      {/* Left - Compliance Requirements */}
      <g transform="translate(60, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(139, 92, 246, 0.15)" stroke="url(#purpleGradFinChal)" strokeWidth="2" />
        {/* Shield with Warning */}
        <path d="M0 -10 C-8 -10 -12 -4 -12 4 C-12 12 0 18 0 18 C0 18 12 12 12 4 C12 -4 8 -10 0 -10" fill="none" stroke="url(#purpleGradFinChal)" strokeWidth="2" opacity="0.8" />
        <text x="0" y="2" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">!</text>
        <text x="0" y="45" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="600">信创合规</text>
      </g>

      {/* Right - Consolidated Reports */}
      <g transform="translate(340, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(99, 102, 241, 0.15)" stroke="url(#indigoGradFinChal)" strokeWidth="2" />
        {/* Document Stack */}
        <rect x="-10" y="-10" width="20" height="8" fill="none" stroke="url(#indigoGradFinChal)" strokeWidth="2" rx="1" />
        <rect x="-10" y="-4" width="20" height="8" fill="none" stroke="url(#indigoGradFinChal)" strokeWidth="2" rx="1" opacity="0.7" />
        <rect x="-10" y="2" width="20" height="8" fill="none" stroke="url(#indigoGradFinChal)" strokeWidth="2" rx="1" opacity="0.4" />
        <text x="0" y="45" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="600">合并报表</text>
      </g>

      {/* Bottom - Business-Finance Integration */}
      <g transform="translate(200, 340)">
        <circle cx="0" cy="0" r="30" fill="rgba(139, 92, 246, 0.15)" stroke="url(#purpleGradFinChal)" strokeWidth="2" />
        {/* Disconnect Icon */}
        <circle cx="-6" cy="0" r="8" fill="none" stroke="url(#indigoGradFinChal)" strokeWidth="2" opacity="0.6" />
        <circle cx="6" cy="0" r="8" fill="none" stroke="url(#purpleGradFinChal)" strokeWidth="2" opacity="0.6" />
        <line x1="-2" y1="0" x2="2" y2="0" stroke="url(#alertGradFinChal)" strokeWidth="2" strokeDasharray="2 2" />
        <text x="0" y="45" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="600">业财融合</text>
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
        <circle cx="200" cy="30" r="4" fill="url(#alertGradFinChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="200" r="4" fill="url(#alertGradFinChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="200" r="4" fill="url(#alertGradFinChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="370" r="4" fill="url(#alertGradFinChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* System Labels */}
      <text x="110" y="195" textAnchor="middle" fill="rgba(99, 102, 241, 0.5)" fontSize="10" fontWeight="600">各业务系统</text>
      <text x="290" y="195" textAnchor="middle" fill="rgba(139, 92, 246, 0.5)" fontSize="10" fontWeight="600">集团财务</text>
    </svg>
  )
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            国有金融清算机构在数字化转型中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-indigo-500/10 border border-indigo-100">
              <FinancialSOEChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full text-white text-sm font-semibold shadow-lg">
              系统割裂
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-4">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-5 bg-white rounded-2xl border border-indigo-100 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-3xl font-bold text-indigo-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl text-white text-center">
          <p className="text-base">
            这些挑战直接影响了上海清算所的<span className="font-semibold">业务处理效率</span>、
            <span className="font-semibold">国产信创合规</span>和<span className="font-semibold">财务决策支撑能力</span>，
            制约了国有金融清算机构的数字化转型进程。
          </p>
        </div>
      </div>
    </section>
  )
}
