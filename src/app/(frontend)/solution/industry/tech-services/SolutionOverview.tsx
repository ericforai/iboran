import { Layers, Check } from 'lucide-react'

export default function SolutionOverview() {
  const coreProducts = [
    { name: '项目云', role: 'L2C 全流程管理' },
    { name: '财务云', role: '业财税金一体化' },
    { name: '人力云', role: '选育用留全周期' },
    { name: '协同云', role: '高效办公与协作' },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Solution Overview
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            &quot;项目+人才+财务&quot; 一体化解决方案
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
          <p className="max-w-3xl mx-auto mt-6 text-slate-600 text-lg">
            基于用友 BIP 强大的数智底座，YonSuite 为科技服务企业构建以项目为核心，
            深度融合人力资源与财务管理的数字化经营平台。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：核心能力 */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#1F2329] mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#0052D9]" />
                核心产品组合
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {coreProducts.map((product, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                    <Check className="w-4 h-4 text-green-500" />
                    <div>
                      <div className="font-semibold text-[#1F2329]">{product.name}</div>
                      <div className="text-xs text-slate-500">{product.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-[#0052D9]">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1F2329] mb-1">业财深度融合</h4>
                  <p className="text-slate-600">
                    打破数据孤岛，项目业务数据实时转化为财务数据，凭证自动生成，报表实时出具。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-[#0052D9]">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1F2329] mb-1">项目全生命周期管控</h4>
                  <p className="text-slate-600">
                    从商机到立项、执行、交付、验收、回款，全流程在线协同，风险实时预警。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-[#0052D9]">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1F2329] mb-1">精细化人才运营</h4>
                  <p className="text-slate-600">
                    构建人才画像，实现精准招聘与高效配置，建立以奋斗者为本的激励机制。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：架构图 (使用占位符或 conceptual drawing) */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full flex flex-col justify-center">
             {/* 模拟架构图 */}
             <div className="relative">
                {/* 顶层：决策分析 */}
                <div className="bg-slate-800 text-white p-4 rounded-lg text-center mb-4 text-sm font-semibold">
                  智能决策中心：项目盈利分析 | 人效分析 | 经营大屏
                </div>
                
                {/* 中层：业务执行 */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                   <div className="bg-[#E3F2FD] p-4 rounded-lg text-center border border-blue-200">
                      <div className="font-bold text-[#0052D9] mb-2">项目管理</div>
                      <div className="text-xs text-slate-600 space-y-1">
                        <div>商机/立项</div>
                        <div>计划/执行</div>
                        <div>交付/验收</div>
                      </div>
                   </div>
                   <div className="bg-[#E8F5E9] p-4 rounded-lg text-center border border-green-200">
                      <div className="font-bold text-green-700 mb-2">人才管理</div>
                      <div className="text-xs text-slate-600 space-y-1">
                        <div>招聘/入职</div>
                        <div>假勤/薪资</div>
                        <div>绩效/培训</div>
                      </div>
                   </div>
                   <div className="bg-[#FFF3E0] p-4 rounded-lg text-center border border-orange-200">
                      <div className="font-bold text-orange-700 mb-2">财务管理</div>
                      <div className="text-xs text-slate-600 space-y-1">
                        <div>应收/应付</div>
                        <div>费控/报销</div>
                        <div>总账/报表</div>
                      </div>
                   </div>
                </div>
                
                {/* 底层：数智底座 */}
                <div className="bg-slate-100 text-slate-500 p-3 rounded-lg text-center text-xs border border-slate-200">
                   用友 BIP 数智底座 (PaaS | Data | AI)
                </div>

                {/* 连接线示意 */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -z-10" />
                <div className="absolute top-[25%] left-1/2 w-0.5 h-[50%] bg-slate-200 -z-10" />
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
