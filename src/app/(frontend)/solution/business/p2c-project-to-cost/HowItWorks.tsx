'use client'

import { motion } from 'framer-motion'
import { FileText, Settings, Wallet, BarChart4, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    id: '01',
    title: 'L2P: 从线索到立项',
    icon: FileText,
    desc: '实现商机到项目的无缝流转',
    items: [
      '商机阶段预立项，提前规化投入',
      '售前/投标 WBS 任务分解',
      '中标后自动转正式立项，继承前期数据'
    ]
  },
  {
    id: '02',
    title: 'Plan: 精细化预算与计划',
    icon: Settings,
    desc: '预算驱动业务，计划指引执行',
    items: [
      '3级 WBS 分解：资金/预算/执行',
      '收入/成本/费用多维度预算编制',
      '关键里程碑与交付物定义'
    ]
  },
  {
    id: '03',
    title: 'Do: 一体化协同执行',
    icon: CheckCircle2,
    desc: '打破部门墙，全员高效协同',
    items: [
      '采购/分包申请严格关联预算',
      '全员移动端工时填报',
      '项目进度与交付物实时反馈'
    ]
  },
  {
    id: '04',
    title: 'Cost: 业财融合核算',
    icon: Wallet,
    desc: '每一笔钱都花得明明白白',
    items: [
      '无预算不支出，超支实时预警',
      '银企直联实现自动付款',
      '人工/费用/材料成本自动归集'
    ]
  },
  {
    id: '05',
    title: 'Analysis: 经营闭环分析',
    icon: BarChart4,
    desc: '从这就数核算转向经营决策',
    items: [
      '实时项目盈亏分析 (P&L)',
      '项目现金流监控',
      '多维经营报表自动生成'
    ]
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0052D9] text-sm font-semibold mb-4">
            Process Flow
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            P2C 全流程闭环：不仅是管理，更是经营
          </h2>
          <p className="text-slate-600">
            以 WBS 为核心，打通 L2C（线索到现金）与 P2P（采购到付款），构建企业级项目价值链。
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                 {/* Step Number Dot */}
                <div className="w-8 h-8 bg-[#0052D9] text-white rounded-full flex items-center justify-center font-bold text-sm absolute -top-4 left-1/2 -translate-x-1/2 ring-4 ring-slate-50">
                  {step.id}
                </div>

                <div className="mt-4 text-center">
                  <div className="w-12 h-12 bg-blue-50 text-[#0052D9] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon size={24} />
                  </div>
                  <h3 className="font-bold text-[#1F2329] mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 mb-4 h-8">{step.desc}</p>
                  
                  <ul className="text-left space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-tight">
                        <div className="w-1 h-1 bg-[#E60012] rounded-full mt-1.5 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
