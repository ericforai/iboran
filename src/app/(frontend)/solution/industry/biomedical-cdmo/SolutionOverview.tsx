import React from 'react'
import { Layout, Shield, Database, ArrowRight } from 'lucide-react'

export function SolutionOverview() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 outline-none">
            数智 CDMO 
            <span className="text-blue-600"> 全生命周期解决方案</span>
          </h2>
          <p className="text-slate-600 text-lg">
            基于 YonSuite 统一云平台，构建覆盖研发、生产、质量到核算的一体化数智基座。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Layer 1: Business Operations */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Layout className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">精益运营层</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>研产一体化协同：</strong>从研发BOM到生产BOM的无缝转化</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>多管线项目管理：</strong>立项、预算、任务、工时全周期颗粒化管控</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>敏捷柔性供应链：</strong>项目联动采购，减少呆滞库存，保障物料配套</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Layer 2: Compliance & Quality */}
          <div className="bg-blue-600 rounded-3xl shadow-sm border border-blue-500 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6 text-white">
                <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">质量合规层</h3>
              </div>
              <ul className="space-y-4 text-blue-50">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                  <span><strong>GMP/GSP 流程管控：</strong>内置行业标准，满足药典化质量管理规范</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                  <span><strong>CSV 计算机化系统验证：</strong>符合 GAMP5 与 21 CFR Part 11 标准</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                  <span><strong>全过程追溯：</strong>从临床前研发到商业化批次的电子审计追踪</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Layer 3: Data & Intelligence */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Database className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">数智决策层</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>事项会计中台：</strong>支持多组织、多准则、多币种实时核算</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>精细成本核算：</strong>单项目/单批次成本层层穿透，助力精准定价</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>YonGPT AI 智能体：</strong>基于实验大模型的智能分析与预测</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
