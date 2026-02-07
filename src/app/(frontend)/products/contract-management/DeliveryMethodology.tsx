import { SearchCode, FileEdit, Rocket, ShieldCheck } from 'lucide-react'

export default function DeliveryMethodology() {
  const steps = [
    {
      title: '合规诊断与需求建模',
      desc: '梳理企业合同类型、权责体系及风控红线，构建符合业务逻辑的合同元数据模型与审批流。',
      icon: <SearchCode className="text-blue-600" />,
      output: '《合同管理业务调研报告》、《流程体系设计书》',
      delay: 'Week 1-2'
    },
    {
      title: '范本标准化与配置',
      desc: '建立标准合同范本库，配置智能提取变量。集成电子签章组件（法大大等）并完成权限隔离。',
      icon: <FileEdit className="text-blue-600" />,
      output: '《标准范本库清单》、配置完备的系统原型',
      delay: 'Week 3-4'
    },
    {
      title: '系统集成与数据迁移',
      desc: '打通财务（NC/U8/SAP）及业务系统，实现收付款关联。自动化迁移历史存量合同，以保障数据闭环。',
      icon: <Rocket className="text-blue-600" />,
      output: '集成接口文档、千万级合同历史归档数据',
      delay: 'Week 5-6'
    },
    {
      title: '法务合规验证与交付',
      desc: '模拟多维度风控场景测试，以保障电子签、存证等环节法律合效。进行全员宣贯与管路赋能。',
      icon: <ShieldCheck className="text-blue-600" />,
      output: '《系统验收报告》、法务合规审计通过证明',
      delay: 'Week 7-8'
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">“交付即合规”的落地路径</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            我们不只是交付一套软件，更是通过 8 周的深度梳理与技术适配，为您构建一套“能审计、会预警、降成本”的合同运营支撑体系。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-blue-100 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-blue-50 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                {step.icon}
              </div>
              <div className="text-center lg:text-left">
                <div className="text-blue-600 font-bold text-xs mb-2 tracking-widest uppercase">{step.delay}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {step.desc}
                </p>
                
                <div className="mt-auto p-4 bg-white/60 rounded-lg border border-slate-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase mb-2">交付产出物</div>
                  <div className="text-xs text-slate-700 font-medium">
                    {step.output}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
