import React from 'react'
import { LayoutGrid, Smartphone, RefreshCw, GitMerge, Link2, Share2, BarChart3, Database, ShieldCheck } from 'lucide-react'

export const Capabilities = () => {
  const items = [
    {
      icon: LayoutGrid,
      title: '采购门户管理',
      desc: '为不同角色设定专属工作台，集成待办、预警、报表与核心业务入口。'
    },
    {
      icon: Smartphone,
      title: '移动采购管理',
      desc: '支持通过微信、钉钉、移动端随时随地处理审批，提升请购响应时效。'
    },
    {
      icon: GitMerge,
      title: '采购模式管理',
      desc: '灵活支撑集中采购、分散采购、JIT 采购等多种业务模式，满足组织多样性。'
    },
    {
      icon: RefreshCw,
      title: '采购类型全覆盖',
      desc: '覆盖物资、服务、工程等全类型采购流程，预置合规模板，规范申报准则。'
    },
    {
      icon: Share2,
      title: '供应商在线协同',
      desc: '统一门户发布询价、招标，供应商在线投标、确认订单，消除信息孤岛。'
    },
    {
      icon: ShieldCheck,
      title: '供应商全生命周期',
      desc: '涵盖准入考察、分级评价、黑名单管理，沉淀企业核心供应商资产。'
    },
    {
      icon: BarChart3,
      title: '报表决策驾驶舱',
      desc: '穿透各个环节数据，实时分析采购执行率、成本节约率、供应商履约率。'
    },
    {
      icon: Link2,
      title: '业务流程闭环',
      desc: '从请购申请到比质比价、订单生成、入库验收、收票结算的全过程可追溯。'
    },
    {
      icon: Database,
      title: '基础数据治理',
      desc: '建立标准物料库、供应商库、价格库，以保障业务原始数据的一致性与准确性。'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">100+ 功能应用，实现全场景覆盖</h2>
          <p className="text-slate-600">基于低代码平台，可根据企业管理深度快速扩展业务模块。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
