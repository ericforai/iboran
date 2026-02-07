import { ClipboardList, PenTool, Server, CheckSquare } from 'lucide-react'

export default function DeliveryMethodology() {
  const steps = [
    {
      id: "01",
      name: "诊断与蓝图规划",
      desc: "不仅是实施软件，更是梳理业务。",
      icon: ClipboardList,
      inputs: ["业务现状调研", "现有系统清单", "管理制度文件"],
      outputs: ["数字化转型蓝图", "业务流程梳理文档 (L1-L4)", "实施主计划"]
    },
    {
      id: "02",
      name: "方案设计与验证",
      desc: "所见即所得，以保障需求准确落地。",
      icon: PenTool,
      inputs: ["蓝图确认书", "关键用户需求"],
      outputs: ["系统详细设计方案", "原型演示系统", "集成接口规范", "数据迁移方案"]
    },
    {
      id: "03",
      name: "系统构建与集成",
      desc: "标准化配置 + 必要的个性化开发。",
      icon: Server,
      inputs: ["设计方案", "历史静态数据"],
      outputs: ["UAT 环境", "客开代码包", "数据清洗报告", "权限配置清单"]
    },
    {
      id: "04",
      name: "上线切换与赋能",
      desc: "扶上马，送一程。",
      icon: CheckSquare,
      inputs: ["UAT 验收单", "动态业务数据"],
      outputs: ["正式生产环境", "用户操作手册 (SOP)", "运维交接文档", "知识转移培训"]
    }
  ]

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            泊冉交付方法论
          </h2>
          <p className="text-slate-600">
            从咨询到上线，我们提供全生命周期的专业交付服务，以保障项目按时、保质交付。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl p-6 relative group overflow-hidden shadow-sm hover:shadow-lg transition-all">
              {/* Step Number Background */}
              <div className="absolute -right-4 -top-6 text-9xl font-bold text-slate-50 group-hover:text-blue-50 transition-colors select-none">
                {step.id}
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-[#0052D9] text-white rounded-lg flex items-center justify-center mb-6 shadow-md shadow-blue-200">
                  <step.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1F2329] mb-2">{step.name}</h3>
                <p className="text-sm text-slate-500 mb-6 h-10">{step.desc}</p>
                
                <div className="mt-auto space-y-4 pt-6 border-t border-slate-100">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">主要输入</div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {step.inputs.map((i, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">关键产出 (交付物)</div>
                    <ul className="text-xs text-[#0052D9] font-medium space-y-1">
                      {step.outputs.map((o, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                          {o}
                        </li>
                      ))}
                    </ul>
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
