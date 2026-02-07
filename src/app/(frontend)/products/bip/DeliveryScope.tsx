import { Check, Info, X } from 'lucide-react'

export default function DeliveryScope() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            典型交付范围与边界
          </h2>
          <p className="text-slate-600">
            清晰定义“做什么”和“不做什么”，以保障项目目标明确，避免交付扯皮。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Included */}
          <div className="bg-white rounded-xl shadow-sm border-t-4 border-[#0052D9] p-8">
            <h3 className="text-lg font-bold text-[#1F2329] mb-6 flex items-center justify-between">
              标准交付范围
              <span className="text-xs bg-blue-50 text-[#0052D9] px-2 py-1 rounded">Default</span>
            </h3>
            <ul className="space-y-4">
              {[
                "标准模块安装部署与初始化",
                "标准业务流程 (L1-L3) 配置",
                "基础数据迁移 (期初数据)",
                "标准打印模板设置 (凭证/单据)",
                "关键用户操作培训",
                "标准角色与权限配置"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600">
                  <Check className="w-5 h-5 text-[#0052D9] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Optional */}
          <div className="bg-white rounded-xl shadow-sm border-t-4 border-amber-500 p-8">
            <h3 className="text-lg font-bold text-[#1F2329] mb-6 flex items-center justify-between">
              可选增值服务
              <span className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded">Optional</span>
            </h3>
            <ul className="space-y-4">
              {[
                "个性化需求二次开发",
                "异构系统集成 (OA/MES/WMS)",
                "历史全量数据清洗与迁移",
                "BI 报表定制开发",
                "复杂审批工作流定义",
                "私有化部署环境搭建与调优"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600">
                  <Info className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className="bg-white rounded-xl shadow-sm border-t-4 border-slate-300 p-8 grayscale">
            <h3 className="text-lg font-bold text-[#1F2329] mb-6 flex items-center justify-between">
              不包含范围
              <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Out of Scope</span>
            </h3>
            <ul className="space-y-4">
              {[
                "非相关业务流程再造咨询",
                "硬件设备采购与维护",
                "操作系统/数据库授权购买",
                "客户方网络环境搭建",
                "非软件原因导致的数据错误修正"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-500">
                  <X className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
