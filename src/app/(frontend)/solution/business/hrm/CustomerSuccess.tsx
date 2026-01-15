'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

const caseStudies = [
  {
    company: "中国中化 (Sinochem)",
    industry: "大型央企 / 化工与农业",
    challenge: "多组织架构下的人力资源管控难度大，发薪与绩效周期长，数据分散，协同效率低。",
    solution: "通过用友BIP HRM建设智慧人力一体化平台，全面打通数据壁垒，实现端到端管控。",
    results: [
      { label: "发薪自动化率", value: "90%", desc: "由 60% 提升至 90%" },
      { label: "发薪处理效率", value: "4小时", desc: "由 4天 缩短至 4小时" },
      { label: "绩效核算时间", value: "3天", desc: "由 10天 缩短至 3天" },
      { label: "数据同步效率", value: "1小时", desc: "从 3天 提升至 1小时" }
    ],
    quote: "不仅优化了人力资源管理模式，更实现了全集团人力资源的高效协同与精准管控。"
  },
  {
    company: "招商局集团 (CMG)",
    industry: "大型央企 / 交通、金融、地产",
    challenge: "全球化运营面临的差异化合规挑战，海量业务处理压力，及数字化转型的战略需求。",
    solution: "依托用友领先的人力资源数智化解决方案，重构人才供应链与共享服务体系。",
    results: [
      { label: "业务处理效能", value: "+68%", desc: "单一业务处理时长大幅缩短" },
      { label: "数据准确率", value: "100%", desc: "关键数据实现实时同步与纠偏" },
      { label: "离职预测能力", value: "具备", desc: "利用大数据实现人才风险提前预警" },
      { label: "员工满意度", value: "优秀", desc: "数智化员工服务提升全员体验" }
    ],
    quote: "强强联手，赋能员工并激活组织，重构其在数字化浪潮中的核心组织力。"
  }
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">领先企业的一致选择</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            助力大型企业实现从人事管理到人才经营的质变，已有超过 10,000+ 家知名企业选择了用友。
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 bg-[#F7F8FA] rounded-[2.5rem] overflow-hidden p-8 lg:p-12 border border-slate-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Left Side: Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#E60012] shadow-sm">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F2329]">{item.company}</h3>
                    <p className="text-[#0052D9] font-medium text-sm">{item.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8 text-sm leading-relaxed">
                  <div className="bg-red-50/50 p-4 rounded-xl border-l-4 border-red-500">
                    <span className="font-bold text-red-700 block mb-1">挑战：</span>
                    <p className="text-slate-700">{item.challenge}</p>
                  </div>
                  <div className="bg-blue-50/50 p-4 rounded-xl border-l-4 border-blue-500">
                    <span className="font-bold text-blue-700 block mb-1">方案：</span>
                    <p className="text-slate-700">{item.solution}</p>
                  </div>
                </div>

                <blockquote className="italic text-slate-500 mb-8 pl-4 border-l-2 border-slate-200">
                  “{item.quote}”
                </blockquote>
              </div>

              {/* Right Side: Results Grid */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {item.results.map((result, rIdx) => (
                  <div key={rIdx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow min-w-0">
                    <div className="text-xl xl:text-2xl font-bold text-[#1F2329] mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{result.value}</div>
                    <div className="text-xs font-bold text-[#0052D9] mb-2 uppercase tracking-wide">{result.label}</div>
                    <p className="text-[10px] text-slate-400">{result.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Wall Placeholder Area */}
        <div className="mt-20 pt-16 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm font-medium mb-10">服务部分行业客户</p>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 grayscale opacity-40">
               {/* Simplified UI placeholders for logos */}
               {['招商局集团', '中国中化', '居然之家', '通威农发', '中国燃气', '蜜雪冰城'].map((logo, i) => (
                 <span key={i} className="text-xl font-extrabold tracking-tighter text-slate-900">{logo}</span>
               ))}
            </div>
        </div>
      </div>
    </section>
  )
}
