import { ShieldCheck, Database, Zap } from 'lucide-react'

export function SolutionOverview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            全产业链数智化解决方案架构
          </h2>
          <p className="text-lg text-slate-600">
            以“合规、融合、创新”为核心，构建覆盖研发、生产、营销、管控的一体化平台
          </p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* Layer 1: Operational Excellence */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">业务运营层</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                  <div>
                    <strong className="block text-slate-900">CDMO研产一体化</strong>
                    <span className="text-sm text-slate-500">项目进度可视，工艺无缝转移</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                  <div>
                    <strong className="block text-slate-900">数字化营销</strong>
                    <span className="text-sm text-slate-500">全域营销闭环，费用精准管控</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                  <div>
                    <strong className="block text-slate-900">智能供应链</strong>
                    <span className="text-sm text-slate-500">供需协同，库存动态优化</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Layer 2: Compliance & Risk */}
            <div className="p-8 lg:p-10 bg-gradient-to-b from-blue-50/50 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">合规管控层</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2"></span>
                  <div>
                    <strong className="block text-slate-900">GMP质量管理</strong>
                    <span className="text-sm text-slate-500">全流程质量追溯，放行管理</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2"></span>
                  <div>
                    <strong className="block text-slate-900">GSP流通合规</strong>
                    <span className="text-sm text-slate-500">首营管理，证照效期预警</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2"></span>
                  <div>
                    <strong className="block text-slate-900">CSV验证支持</strong>
                    <span className="text-sm text-slate-500">满足FDA/NMPA审计要求</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Layer 3: Data & Intelligence */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Database className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">数智决策层</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2"></span>
                  <div>
                    <strong className="block text-slate-900">YonGPT AI 智能体</strong>
                    <span className="text-sm text-slate-500">AI+100+行业场景，智能洞察赋能</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2"></span>
                  <div>
                    <strong className="block text-slate-900">事项会计中台</strong>
                    <span className="text-sm text-slate-500">精细多维核算，实时业财大数据</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2"></span>
                  <div>
                    <strong className="block text-slate-900">全球化数据运营</strong>
                    <span className="text-sm text-slate-500">多组织、多准则、多币种实时管控</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          
          {/* Bottom Bar: Value */}
          <div className="bg-slate-900 p-6 text-center">
            <p className="text-slate-300 text-sm md:text-base">
              已帮助 <span className="text-white font-bold">500+</span> 生物医药企业实现合规经营与降本增效，
              <span className="text-blue-400">IPO通过率99%以上</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
