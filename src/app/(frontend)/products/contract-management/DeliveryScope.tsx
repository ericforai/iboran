import { Check, Info, X } from 'lucide-react'

export default function DeliveryScope() {
  const sections = [
    {
      title: '标准交付项（含）',
      items: [
        '合同全生命周期管理模块部署',
        '标准合同范本库配置（≤20个）',
        '多级审批流引擎配置',
        '移动审批及移动调阅功能',
        '基础台账及 5 个固定报表',
        '法务风控红线系统设置',
      ],
      type: 'included'
    },
    {
      title: '增值选配件',
      items: [
        '法大大/上机等电子签章集成',
        'NC/U8/SAP 财务集成接口',
        'OCR 智能识别与比对模块',
        '定制化复杂报表开发',
        '历史存量数据清洗与迁移',
      ],
      type: 'optional'
    },
    {
      title: '服务边界（不含）',
      items: [
        '合同文案的法律效力定性',
        '非标第三方硬件设备采购',
        '云服务器租赁费用',
        '企业内部网络环境改造',
        '长期驻场运营支撑',
      ],
      type: 'excluded'
    }
  ]

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">明确交付范围，杜绝执行扯皮</h2>
          <p className="text-slate-400">
            透明的交付标准是项目成功的基石，我们为您清晰界定服务边界。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border ${
              section.type === 'included' ? 'border-blue-500/30 bg-blue-500/5' : 
              section.type === 'optional' ? 'border-slate-700 bg-slate-800/50' : 
              'border-red-500/30 bg-red-500/5'
            }`}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 rounded-lg ${
                  section.type === 'included' ? 'bg-blue-500 text-white' : 
                  section.type === 'optional' ? 'bg-slate-700 text-slate-300' : 
                  'bg-red-500 text-white'
                }`}>
                  {section.type === 'included' ? <Check size={20} /> : 
                   section.type === 'optional' ? <Info size={20} /> : 
                   <X size={20} />}
                </div>
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>

              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
