import { Coins, Users, Truck, MessageSquare, ShoppingCart, Factory, PenTool, Braces, Briefcase, Database } from 'lucide-react'

export default function Capabilities() {
  const capabilities = [
    { name: "财务云", icon: Coins, desc: "全球司库、费控报销、合并报表、税务服务" },
    { name: "人力云", icon: Users, desc: "核心人力、薪酬绩效、人才发展、招聘管理" },
    { name: "供应链云", icon: Truck, desc: "采购协同、库存中心、全渠道订单、物流服务" },
    { name: "营销云", icon: MessageSquare, desc: "全渠道营销、会员管理、零售门店、各种电商平台对接" },
    { name: "采购云", icon: ShoppingCart, desc: "供应商寻源、合同管理、采购执行、电商采购" },
    { name: "制造云", icon: Factory, desc: "智能工厂、MOM、IoT 设备互联、生产计划" },
    { name: "研发云", icon: PenTool, desc: "PLM、项目管理、研发效能管理" },
    { name: "资产云", icon: Database, desc: "EAM 资产全生命周期管理、设备维护" },
    { name: "协同云", icon: Braces, desc: "企业协同、移动办公、低代码开发平台" },
    { name: "项目云", icon: Briefcase, desc: "项目全生命周期管理、成本管控、进度管理" }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            全面覆盖企业核心业务
          </h2>
          <p className="text-slate-600">
            十大领域云服务，既可单点切入，也可一体化部署。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilities.map((item, idx) => (
            <div key={idx} className="group p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white text-center cursor-default">
              <div className="w-12 h-12 mx-auto bg-slate-50 group-hover:bg-blue-600 rounded-full flex items-center justify-center mb-4 transition-colors">
                <item.icon className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#1F2329] mb-2">{item.name}</h3>
              <p className="text-xs text-slate-500 leading-normal group-hover:text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
