'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const scenarios = [
  {
    title: 'L2C 项目全流程',
    problem: '线索转化率低，项目立项审批慢，交付进度不可控，回款周期长，导致坏账风险增加。',
    solution: '构建从线索(Lead)到现金(Cash)的端到端闭环，实现商机管理、项目立项、合同签订、项目交付、里程碑验收、开票回款的一体化管理。',
    outcome: '项目交付及时率提升 25%，回款周期缩短 20%。',
    // screenshot: '/images/solutions/tech-services-project.png' 
  },
  {
    title: '数智人力服务',
    problem: '简历筛选耗时长，入职流程繁琐，考勤薪资计算复杂且易出错，员工满意度低。',
    solution: '提供智能招聘、电子签核、移动考勤、一键算薪等全流程人力资源服务，支持多维组织架构和复杂薪酬体系。',
    outcome: '算薪效率提升 70%，入职办理时间缩短至 10 分钟。',
  },
  {
    title: '业财一体化',
    problem: '业务数据与财务数据不同步，手工录入凭证工作量大，财务报表滞后，无法支撑实时决策。',
    solution: '基于事项会计理论，实现业务单据自动生成财务凭证，资金流与业务流实时匹配，多维度经营报表随时可查。',
    outcome: '财务凭证自动化率 近100%，月结时间大幅缩短。',
  },
  {
    title: '合规与风控',
    problem: '合同条款风险难识别，费用报销不规范，缺乏统一的风控体系，合规隐患大。',
    solution: '嵌入智能风控模型，实现合同智能审查、费用预算刚性控制、税务风险自动预警，以保障经营合规。',
    outcome: '合规风险降低 90%，审计成本大幅减少。',
  }
]

export default function KeyScenarios() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Key Scenarios
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            核心业务场景
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        {/* Tab 切换 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === idx
                  ? 'bg-[#0052D9] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>
        
        {/* 场景内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* 左侧：问题-方案-成果 */}
            <div className="space-y-8">
              <div className="p-6 bg-red-50 rounded-xl">
                <h4 className="text-sm font-semibold text-red-600 mb-2">😣 行业痛点</h4>
                <p className="text-slate-700">{scenarios[activeTab].problem}</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl">
                <h4 className="text-sm font-semibold text-blue-600 mb-2">💡 解决方案</h4>
                <p className="text-slate-700">{scenarios[activeTab].solution}</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  实现效果
                </h4>
                <p className="text-slate-700">{scenarios[activeTab].outcome}</p>
              </div>
            </div>
            
            {/* 右侧：场景截图 (Placeholder as no real screenshot available yet) */}
            <div className="bg-slate-100 rounded-2xl p-4 aspect-video flex flex-col items-center justify-center border-2 border-dashed border-slate-300">
               <div className="text-6xl mb-4 opacity-20">🖼️</div>
               <div className="text-center text-slate-400">
                  <p className="font-semibold text-lg">{scenarios[activeTab].title}</p>
                  <p className="text-sm">场景演示截图</p>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
