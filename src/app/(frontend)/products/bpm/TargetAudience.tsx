'use client'

import { Target, Users, AlertCircle, CheckCircle2, XCircle } from 'lucide-react'

const targets = [
  {
    title: '集团化大型企业',
    desc: '拥有复杂跨部门协作流程，需统一流程标准、强化总部管控与审计合规。',
    icon: <Users className="text-blue-600" />
  },
  {
    title: 'ERP 使用型组织',
    desc: '已上线 SAP、用友 NC/BIP 或金蝶，需要流程引擎增强业务流转灵活性与移动化。',
    icon: <Target className="text-blue-600" />
  },
  {
    title: '合规驱动型行业',
    desc: '如制造、医药、金融等对流程留痕、审批时效、权限隔离有严格监管要求的行业。',
    icon: <CheckCircle2 className="text-blue-600" />
  }
]

const conditions = {
  suitable: [
    '审批链条长（>5个节点），涉及多部门联合会签',
    '流程变动频繁，IT响应速度难以支撑业务调整',
    '缺乏端到端的数据监控，无法量化流程运行效率',
    '多套异构系统并行，需要统一的流程门户（Portal）'
  ],
  unsuitable: [
    '初创期企业，流程尚未定型或处于极简状态',
    '单体应用使用者，业务逻辑极度单一且无集成需求',
    '对移动化、自动化无要求的传统纯纸质办公环境'
  ]
}

export default function TargetAudience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">谁需要 BPM 流程管理平台？</h2>
          <p className="text-slate-600">
            并不是所有企业都适合立即部署重型 BPM。我们建议具备一定管理规模和数字化基础的企业引入。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {targets.map((item, idx) => (
            <div key={idx} className="p-8 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-slate-900 rounded-2xl overflow-hidden">
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">理想适用情况</h3>
            </div>
            <ul className="space-y-4">
              {conditions.suitable.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">建议暂缓引入</h3>
            </div>
            <ul className="space-y-4">
              {conditions.unsuitable.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-400 italic">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="text-red-400 font-bold">提示：</span>过度设计的流程会扼杀初创企业的灵活性。对于微型团队，建议优先使用简捷协作工具。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
