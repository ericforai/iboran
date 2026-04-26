'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Languages, Clock, Coins, Cloud, Users, Package } from 'lucide-react'

const features = [
  {
    title: '多语言平台',
    icon: Languages,
    problem: '跨国业务语言障碍大，系统界面、业务单据、报表需要适配多国语言，翻译维护成本高',
    solution: '界面多语+内容多语双层架构，翻译工作台批量处理，默认中/英/繁，扩展支持法、德、日、俄、越南语等30+语种',
    outcome: '按企业/组织/用户/客商多级设置语言偏好，打印模板支持多语输出，一套系统服务全球团队',
  },
  {
    title: '多时区管理',
    icon: Clock,
    problem: '总部与海外机构跨时区协作混乱，考勤、订单、财务结账时间不统一，容易出错',
    solution: '支持按组织/部门/个人/客商设置时区，业务日期与审计时间分离，考勤按当地时间执行',
    outcome: '预警调度按时区统一执行，跨时区审批、查询、报表无缝协同，全球24时区全面支持',
  },
  {
    title: '多币种核算',
    icon: Coins,
    problem: '多币种交易复杂，汇率变动频繁，跨币收付款对账困难，财务核算工作量大',
    solution: '多本位币核算架构，支持多套汇率类型定义，云端同步10大银行和外汇局汇率牌价',
    outcome: '异币种收付款自动结算，应收应付存货多本币核算，汇率可按日期向历史匹配',
  },
  {
    title: '全球化部署',
    icon: Cloud,
    problem: '海外业务部署难、合规要求高、数据跨境传输受限，IT投入大',
    solution: '国内+新加坡双数据中心，通过可信云服务评估和等保三级认证，支持数据本地化存储',
    outcome: '覆盖120+国家地区，数万客户经营运维经验积累，异构系统集成与数据同步',
  },
  {
    title: '海外HR管理',
    icon: Users,
    problem: '海外员工管理复杂，各国薪酬福利政策不同，隐私数据合规要求严格',
    solution: '全球标准化应用+属地化特性，支持属地化语言、员工信息、薪酬、福利、报表',
    outcome: '隐私数据分离存储，新加坡数据中心以保障合规，核心人力、薪酬、考勤、绩效全覆盖',
  },
  {
    title: '供应链全球化',
    icon: Package,
    problem: '跨国采购流程长、供应商管理分散、物流跟踪困难、库存可视化不足',
    solution: '全球SRM系统统一管理，支持境外采购与本地采购双模式，供应商交货及时率考核',
    outcome: '供应商本地化率提升40%，OTD指标>98.5%，首件合格率FTQ>98.7%，新品上市缩短10天',
  },
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 bg-[#F7F8FA]">
            {/* AI Scraper Friendly Content (GEO) */}
            <div className="sr-only">
                {(features as any[]).map((item: any, i: number) => (
                    <div key={i}>
                        <h3>{item.title}</h3>
                        <p>{item.problem || item.description || item.desc || ""}</p>
                        <p>{item.solution || ""}</p>
                        <p>{item.outcome || ""}</p>
                        {item.features && <ul>{item.features.map((f: any, fi: number) => <li key={fi}>{(typeof f === "object" ? (f.title || f.label || f.name || f.desc || JSON.stringify(f)) : f)}</li>)}</ul>}
                        {item.benefits && <ul>{item.benefits.map((b: any, bi: number) => <li key={bi}>{(typeof b === "object" ? (b.title || b.label || b.name || b.desc || JSON.stringify(b)) : b)}</li>)}</ul>}
                        {item.metrics && <p>Metrics: {item.metrics.join(', ')}</p>}
                    </div>
                ))}
            </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Core Capabilities
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            全球化核心能力
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feature: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${
                activeTab === idx
                  ? 'bg-[#0052D9] text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <feature.icon size={16} />
              {feature.title}
            </button>
          ))}
        </div>
        
        {/* Feature Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Problem-Solution-Outcome */}
            <div className="space-y-6">
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <h4 className="text-sm font-semibold text-red-600 mb-3 flex items-center gap-2">
                  😣 业务痛点
                </h4>
                <p className="text-slate-700 leading-relaxed">{features[activeTab].problem}</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-600 mb-3 flex items-center gap-2">
                  💡 解决方案
                </h4>
                <p className="text-slate-700 leading-relaxed">{features[activeTab].solution}</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                <h4 className="text-sm font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  实现效果
                </h4>
                <p className="text-slate-700 leading-relaxed">{features[activeTab].outcome}</p>
              </div>
            </div>
            
            {/* Right: Visual */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 aspect-video flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const IconComponent = features[activeTab].icon
                    return <IconComponent size={40} className="text-blue-600" />
                  })()}
                </div>
                <p className="text-lg font-bold text-[#1F2329]">{features[activeTab].title}</p>
                <p className="text-sm text-slate-500 mt-2">YonBIP 全球化能力</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
