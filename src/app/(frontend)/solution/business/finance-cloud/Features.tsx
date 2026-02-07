'use client'

import { useState } from 'react'
import { Activity, Globe, Archive, FileCheck, Layers, Calculator } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  {
    id: 'accounting',
    label: '智能会计',
    description: '从价值记录到价值创造，构建业财融合的新核算体系',
    icon: Activity,
    groups: [
      {
        title: "事项会计平台",
        features: [
          { title: "事项库建模", desc: "基于'事项法'采集全量业务属性，打破科目限制。" },
          { title: "多准则核算", desc: "同一事项自动生成中准、国际、税务多套凭证。" },
          { title: "实时核算引擎", desc: "业务触发核算规则，凭证生成率达 95% 以上。" }
        ]
      },
      {
        title: "智能管理会计",
        features: [
          { title: "多维利润分析", desc: "按产品、区域、客户等维度实时穿透盈利状况。" },
          { title: "实时成本结转", desc: "支持日结、按单结，实时掌握生产与经营成本。" },
          { title: "全面预算管控", desc: "事中实时预警与刚性控制，实现预算执行闭环。" }
        ]
      }
    ]
  },
  {
    id: 'treasury',
    label: '全球司库',
    description: '看紧现金流，提高资金效率，降低融资成本',
    icon: Globe,
    groups: [
      {
        title: "资金集中管理",
        features: [
          { title: "全球资金可视", desc: "实时掌握全球账户余额、变动及资金分布视图。" },
          { title: "自动化资金池", desc: "支持全球资金自动归集与下拨，减少闲置冗余。" },
          { title: "多币种结算", desc: "支持本外币一体化支付，优化跨境结算路径。" }
        ]
      },
      {
        title: "财资决策优化",
        features: [
          { title: "现金流预测", desc: "基于业务需求构建动态模型，精准预估缺口。" },
          { title: "票据全生命管理", desc: "票据池统筹管理，降低贴现成本与结算风险。" },
          { title: "投融资分析", desc: "融资成本、投资收益实时动态测算，辅助决策。" }
        ]
      }
    ]
  },
  {
    id: 'invoice',
    label: '电子票据中心',
    description: '六号令合规，全渠道采集，自动化开票与验真',
    icon: FileCheck,
    groups: [
      {
        title: "进项智慧采集",
        features: [
          { title: "多渠道采集", desc: "拍照、扫描、电子版解析、手工录入全支持。" },
          { title: "智能验真防重", desc: "自动对接税局验真，防范假票、二次报销。" },
          { title: "合规性检查", desc: "基于六号令执行清单，自动纠查票据违规项。" }
        ]
      },
      {
        title: "销项自动化",
        features: [
          { title: "一键批量开票", desc: "结合业务场景（销/服），实现纸、电秒级开票。" },
          { title: "自动交付通知", desc: "通过邮件、微信等多种渠道自动推送电子发票。" },
          { title: "票税表一体化", desc: "开票数据自动关联税务申报，以保障账实一致。" }
        ]
      }
    ]
  },
  {
    id: 'archive',
    label: '会计档案',
    description: '纸电同步管理，全流程自动化，审计调阅秒级响应',
    icon: Archive,
    groups: [
      {
        title: "档案全生命周期",
        features: [
          { title: "自动化收集", desc: "从核算、税务、司库系统自动同步待归档单据。" },
          { title: "电子化整理", desc: "自动勾选、装册、编号，充分符合无纸化要求。" },
          { title: "安全存储加密", desc: "多重技术手段保障档案防篡改、防丢失。 " }
        ]
      },
      {
        title: "智能档案利用",
        features: [
          { title: "全文检索穿透", desc: "支持多维度关键字快速查询，凭证附件一键联查。" },
          { title: "在线借阅审批", desc: "全程留痕，满足合规内外部审计调阅需求。" },
          { title: "纸电双向索引", desc: "即便保留纸质档案，亦能实现数字化的高效率检索。" }
        ]
      }
    ]
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4">YonBIP 财务云核心能力</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2563EB] to-[#F97316] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto font-normal">
            基于数智化技术重构财务架构，实现业财税一体化的深度融合，支撑企业从财务核算向财务管理转型。
          </p>
        </div>

        {/* Tabs Control */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                   ? 'bg-[#2563EB] text-white shadow-xl shadow-blue-100 scale-105'
                   : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 min-h-[500px] shadow-2xl shadow-slate-200/50">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => tab.id === activeTab && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-2">{tab.label}</h3>
                  <p className="text-[#2563EB] font-semibold">{tab.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {tab.groups.map((group, groupIdx) => (
                    <div key={groupIdx}>
                      <h4 className="flex items-center gap-2 text-lg font-bold text-[#1E293B] mb-6 border-b border-slate-200 pb-2">
                        <Layers size={20} className="text-[#2563EB]" />
                        {group.title}
                      </h4>
                      <div className="space-y-6">
                        {group.features.map((feature, featureIdx) => (
                          <div 
                            key={featureIdx}
                            className="bg-white p-6 rounded-2xl hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group flex items-start gap-4 border border-slate-100 hover:border-blue-100 cursor-pointer"
                          >
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB] shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                              <Calculator size={20} />
                            </div>
                            <div>
                              <h5 className="font-bold text-[#1E293B] mb-1 group-hover:text-[#2563EB] transition-colors">{feature.title}</h5>
                              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
