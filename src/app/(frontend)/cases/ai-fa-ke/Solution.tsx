import { Database, Network, Cpu } from 'lucide-react'

export default function Solution() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 tracking-tight">
            一体化解决方案
          </h2>
          <p className="text-xl text-slate-500 font-light">
            基于泊冉数智化底座构建的统一架构。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
           {/* Feature 1 */}
           <div className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-blue-600 transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Database className="w-32 h-32 text-slate-900 group-hover:text-white" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                      <Database className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                      一站式业财一体化
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-blue-100 transition-colors mb-8 flex-grow">
                      构建统一数据中台，集成 ERP、MES、SRM 及财务模块。实现业务单据自动转化为财务凭证，以保障账实相符。
                  </p>
                  
                  <div className="pt-6 border-t border-slate-200 group-hover:border-blue-500/30 transition-colors">
                      <span className="text-sm font-semibold text-blue-600 group-hover:text-white flex items-center gap-2">
                        统一平台
                      </span>
                  </div>
              </div>
           </div>

           {/* Feature 2 */}
           <div className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-blue-600 transition-colors duration-500 overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Network className="w-32 h-32 text-slate-900 group-hover:text-white" />
              </div>

               <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                      <Network className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                      透明化供应链协同
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-blue-100 transition-colors mb-8 flex-grow">
                      建立供应商门户与交期监控看板。实现订单、发货、对账的全流程在线化，提升外部响应效率与计划准确率。
                  </p>

                   <div className="pt-6 border-t border-slate-200 group-hover:border-blue-500/30 transition-colors">
                      <span className="text-sm font-semibold text-blue-600 group-hover:text-white flex items-center gap-2">
                        高效协同
                      </span>
                  </div>
              </div>
           </div>

           {/* Feature 3 */}
           <div className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-blue-600 transition-colors duration-500 overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu className="w-32 h-32 text-slate-900 group-hover:text-white" />
              </div>

               <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                      <Cpu className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                      智能化车间管理
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-blue-100 transition-colors mb-8 flex-grow">
                      通过条码化与 IoT 手段，实时采集生产实绩与工艺数据。实现精细化成本核算与质量追溯闭环。
                  </p>

                   <div className="pt-6 border-t border-slate-200 group-hover:border-blue-500/30 transition-colors">
                      <span className="text-sm font-semibold text-blue-600 group-hover:text-white flex items-center gap-2">
                        物联网+智能
                      </span>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
