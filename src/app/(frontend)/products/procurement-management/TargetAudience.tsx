import React from 'react'
import { Users, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'

export const TargetAudience = () => {
  const painPoints = [
    { title: '集采管理难', desc: '各分子公司独立采购，无法保证商品质量，价格谈判无优势。' },
    { title: '信息共享难', desc: '环节数据无法完整记录，各部门间无法自动流转、穿透和统计。' },
    { title: '过程监督难', desc: '无法实现需求、计划、比价、订单等业务全过程闭环监督。' },
    { title: '预警提醒难', desc: '缺乏超期预警、到货提醒，关键信息易遗漏，错误信息埋隐患。' },
    { title: '审批控制难', desc: '采购规则难落地，过程把控不严，流程审批流于形式。' },
    { title: '统计分析难', desc: '采购数量庞大统计困难，无法通过数据分析发现并解决问题。' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">适用对象与核心痛点</h2>
          <p className="text-slate-600">深入理解行业采购挑战，为大中型组织提供精准的数字化采购治理方案。</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6">
              <Users className="w-6 h-6 text-blue-600" />
              适用组织
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <div>
                  <div className="font-bold text-slate-800">集团型企业</div>
                  <div className="text-slate-600 text-sm italic">多分支机构，需实现集中采购与分散执行的统一平衡。</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <div>
                  <div className="font-bold text-slate-800">强监管行业</div>
                  <div className="text-slate-600 text-sm italic">对采购合规性、审计追踪、廉洁内控有极高要求的行业。</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <div>
                  <div className="font-bold text-slate-800">供应链密集型</div>
                  <div className="text-slate-600 text-sm italic">拥有大量供应商，急需提升在线协同与准入评价效率。</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-8 rounded-2xl">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6">
              <XCircle className="w-6 h-6 text-red-600" />
              不适用情况
            </h3>
            <div className="space-y-4 text-slate-700">
              <p>• 仅需简单的零星采购记录，无流程审批诉求的微型工作室。</p>
              <p>• 纯线上 C2C 采购，无需与供应商进行深度业务协同的场景。</p>
              <p>• 既有 ERP 采购模块运行极其顺畅，无任何流程灵活性提升诉求。</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((item, index) => (
            <div key={index} className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-slate-200">0{index + 1}</span>
                <h4 className="font-bold text-slate-800">{item.title}</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
