import { AlertCircle, FileText, Landmark, ScrollText, BarChart3 } from 'lucide-react'

const challenges = [
  {
    icon: FileText,
    title: "多系统集成困难",
    description: "各业务系统间数据割裂，形成信息孤岛，严重影响合并报表的及时生成与数据准确性，制约集团财务管控效能。"
  },
  {
    icon: Landmark,
    title: "资金管理分散低效",
    description: "缺乏统一的司库管理机制，资金分散于各子公司账户，归集困难，使用效率低下，难以满足国资体系对资金安全与效益的双重要求。"
  },
  {
    icon: ScrollText,
    title: "税务合同管理落后",
    description: "税务管理与合同管理仍依赖人工操作，流程不规范，追溯困难，存在较大合规风险，难以适应国资监管日趋严格的趋势。"
  },
  {
    icon: BarChart3,
    title: "财务共享体系缺失",
    description: "业财数据脱节，财务管理无法有效支撑业务决策，业财融合程度低，影响整体管理效率与决策质量。"
  }
]

// Transportation SOE Challenge Visualization
function TransportSOEChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradSOE" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="cyanGradSOE" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="alertGradSOE" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Background Circles */}
      <circle cx="200" cy="200" r="160" fill="rgba(59, 130, 246, 0.03)" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub - Fragmented SOE Systems */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="45" fill="rgba(239, 68, 68, 0.1)" stroke="url(#alertGradSOE)" strokeWidth="2">
          <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Fragmented buildings */}
        <rect x="-20" y="-25" width="14" height="12" fill="url(#blueGradSOE)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-25;-28;-25" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="2" y="-20" width="14" height="12" fill="url(#cyanGradSOE)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-20;-23;-20" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="-12" y="8" width="14" height="12" fill="url(#blueGradSOE)" opacity="0.4" rx="1">
          <animate attributeName="y" values="8;5;8" dur="2.5s" repeatCount="indefinite" />
        </rect>
        {/* X mark */}
        <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="url(#alertGradSOE)" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Challenge Nodes */}
      {/* Top - Consolidated Reports */}
      <g transform="translate(200, 60)">
        <circle cx="0" cy="0" r="30" fill="rgba(59, 130, 246, 0.15)" stroke="url(#blueGradSOE)" strokeWidth="2" />
        {/* Document Stack */}
        <rect x="-10" y="-10" width="20" height="8" fill="none" stroke="url(#blueGradSOE)" strokeWidth="2" rx="1" />
        <rect x="-10" y="-4" width="20" height="8" fill="none" stroke="url(#blueGradSOE)" strokeWidth="2" rx="1" opacity="0.7" />
        <rect x="-10" y="2" width="20" height="8" fill="none" stroke="url(#blueGradSOE)" strokeWidth="2" rx="1" opacity="0.4" />
        <text x="0" y="45" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600">合并报表</text>
      </g>

      {/* Left - Treasury Management */}
      <g transform="translate(60, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(59, 130, 246, 0.15)" stroke="url(#blueGradSOE)" strokeWidth="2" />
        {/* Bank/Vault Icon */}
        <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="url(#blueGradSOE)" strokeWidth="2" rx="2" />
        <rect x="-6" y="-6" width="12" height="10" fill="url(#blueGradSOE)" opacity="0.5" rx="1" />
        <circle cx="0" cy="-1" r="2" fill="#0a1628" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600">司库管理</text>
      </g>

      {/* Right - Tax & Contract */}
      <g transform="translate(340, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(6, 182, 212, 0.15)" stroke="url(#cyanGradSOE)" strokeWidth="2" />
        {/* Document with Seal */}
        <rect x="-10" y="-8" width="20" height="16" fill="none" stroke="url(#cyanGradSOE)" strokeWidth="2" rx="1" />
        <circle cx="3" cy="0" r="4" fill="url(#cyanGradSOE)" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">税务合同</text>
      </g>

      {/* Bottom - Financial Shared Services */}
      <g transform="translate(200, 340)">
        <circle cx="0" cy="0" r="30" fill="rgba(6, 182, 212, 0.15)" stroke="url(#cyanGradSOE)" strokeWidth="2" />
        {/* Shared Service Hub */}
        <circle cx="0" cy="0" r="10" fill="none" stroke="url(#cyanGradSOE)" strokeWidth="2" />
        <circle cx="-5" cy="-4" r="3" fill="url(#cyanGradSOE)" opacity="0.5" />
        <circle cx="5" cy="-4" r="3" fill="url(#cyanGradSOE)" opacity="0.5" />
        <circle cx="0" cy="6" r="3" fill="url(#cyanGradSOE)" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">财务共享</text>
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
        <circle cx="200" cy="30" r="4" fill="url(#alertGradSOE)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="200" r="4" fill="url(#alertGradSOE)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="200" r="4" fill="url(#alertGradSOE)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="370" r="4" fill="url(#alertGradSOE)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* System Labels */}
      <text x="110" y="195" textAnchor="middle" fill="rgba(59, 130, 246, 0.5)" fontSize="10" fontWeight="600">各业务单元</text>
      <text x="290" y="195" textAnchor="middle" fill="rgba(6, 182, 212, 0.5)" fontSize="10" fontWeight="600">集团总部</text>
    </svg>
  )
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            市级国资交通企业在集团化运营中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-blue-500/10 border border-blue-100">
              <TransportSOEChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white text-sm font-semibold shadow-lg">
              数据孤岛
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-4">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-5 bg-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-3xl font-bold text-blue-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-white text-center">
          <p className="text-base">
            这些挑战直接影响了强生交通的<span className="font-semibold">国有资产管控效能</span>、
            <span className="font-semibold">数据集成效率</span>和<span className="font-semibold">合规管理水平</span>，
            制约了企业在公共交通服务领域的数字化转型。
          </p>
        </div>
      </div>
    </section>
  )
}
