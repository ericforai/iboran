'use client'

import { Check, X, Package, ShieldCheck, HelpCircle } from 'lucide-react'

const scopeItems = [
  {
    category: '包含项目 (Included)',
    items: [
      { name: 'BPM 核心引擎许可', status: 'included' },
      { name: '表单/流程可视化建模工具', status: 'included' },
      { name: '标准移动端适配 (微信/钉钉/飞书)', status: 'included' },
      { name: '基础实施：环境搭建与发布', status: 'included' },
      { name: '典型业务流程上线 (3-5条)', status: 'included' },
      { name: '管理员与专家用户培训', status: 'included' }
    ]
  },
  {
    category: '可选增值 (Optional)',
    items: [
      { name: '异构系统深度定制集成 (API)', status: 'optional' },
      { name: '大规模历史数据清洗与迁移', status: 'optional' },
      { name: 'AI 智能审批补丁包', status: 'optional' },
      { name: '专业版 BPI 流程审计报告定制', status: 'optional' },
      { name: '7×24 小时专属技术响应', status: 'optional' }
    ]
  }
]

export default function DeliveryScope() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">明确交付边界，减少后期争议</h2>
          <p className="text-slate-600">
            我们提倡“透明化交付”。在项目启动前，我们将明确界定软件许可、实施服务及增值项的范围。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {scopeItems.map((group, gIdx) => (
            <div key={gIdx} className={`rounded-2xl border ${gIdx === 0 ? 'border-blue-100 bg-blue-50/30' : 'border-slate-200 bg-slate-50/50'} overflow-hidden`}>
              <div className={`px-8 py-6 border-b ${gIdx === 0 ? 'border-blue-100 bg-blue-100/50' : 'border-slate-200 bg-slate-100/50'}`}>
                <div className="flex items-center gap-3">
                  {gIdx === 0 ? <Package className="text-blue-600" /> : <ShieldCheck className="text-slate-600" />}
                  <h3 className="text-xl font-bold text-slate-900">{group.category}</h3>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        {item.status === 'included' ? (
                          <Check className="text-green-500" size={18} />
                        ) : (
                          <HelpCircle className="text-blue-400" size={18} />
                        )}
                        <span className={`text-sm ${item.status === 'included' ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{item.name}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${item.status === 'included' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {item.status === 'included' ? 'Standard' : 'Add-on'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-red-600 rounded-xl text-white">
              <X size={32} strokeWidth={3} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">服务排除 (Excluded)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                为了保证交付效率，以下项目不包含在标准交付包中：异构系统本身的二次开发、非项目相关的服务器硬件成本、非标准的工作流程咨询。
              </p>
            </div>
            <div className="md:ml-auto">
              <button className="whitespace-nowrap px-6 py-3 bg-white text-slate-900 rounded-md font-bold hover:bg-slate-100 transition">
                查看详细交付文件
              </button>
            </div>
          </div>
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      </div>
    </section>
  )
}
