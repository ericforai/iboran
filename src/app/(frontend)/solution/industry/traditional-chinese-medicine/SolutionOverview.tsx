import { Layers, Database, Cpu } from 'lucide-react'

export function SolutionOverview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            YonBIP 中药企业一体化解决方案
          </h2>
          <p className="text-lg text-slate-600">
            基于用友BIP超级版，打造“业财融合 + 质量合规 + 智能制造”的数智底座，
            覆盖中药产业链全场景，助力企业高质量发展。
          </p>
        </div>

        <div className="relative">
          {/* Central Architecture Visual */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              
              {/* Layer 1: Business Platform */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">业务中台</h3>
                    <p className="text-sm text-slate-500">全产业链业务协同</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    '产供销协同计划 (S&OP)',
                    '中药材基地管理 (GAP)',
                    'GMP 生产制造执行',
                    'GSP 医药流通管理',
                    '全渠道营销平台'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Layer 2: Data & Intelligence */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">数据与合规中台</h3>
                    <p className="text-sm text-slate-500">数据驱动与法规遵从</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    '全生命周期质量追溯',
                    '电子批记录 (EBR)',
                    'CSV 计算机系统验证',
                    '精细化成本核算',
                    '基于大数据的经营分析'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Layer 3: AI & Foundation */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">智能技术底座</h3>
                    <p className="text-sm text-slate-500">YonGPT 2.0 赋能</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    'AI 智能质检',
                    '供应链智能预警',
                    '大模型辅助研发',
                    'RPA 流程自动化',
                    '云原生高可用架构'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            
            {/* Bottom Banner */}
            <div className="bg-slate-900 py-6 px-8 text-center">
              <p className="text-slate-400 text-sm font-medium tracking-wide">
                支撑企业 <span className="text-white mx-2">规避风险 • 降本增效 • 创新发展</span> 迈向制药工业4.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
