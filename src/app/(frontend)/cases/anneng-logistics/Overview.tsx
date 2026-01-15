'use client'

import { motion } from 'framer-motion'
import { Database, Cloud, Activity, FileText } from 'lucide-react'

const techStack = [
  { name: 'NC/BIP', icon: Database },
  { name: '微服务架构', icon: Cloud },
  { name: '业财一体化', icon: Activity },
  { name: '多准则核算', icon: FileText },
]

export default function Overview() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Sidebar Info Card */}
          <div className="lg:col-span-4 sticky top-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
            >
              <h3 className="font-heading font-bold text-lg mb-6 pb-4 border-b border-slate-200">项目概览</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">客户</div>
                  <div className="font-medium text-slate-900 text-lg">安能物流</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">行业 / 细分</div>
                  <div className="font-medium text-slate-900 text-lg">现代服务业 / 零担快运 (LTL)</div>
                </div>
                <div>
                   <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">核心价值</div>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">利润中心管理</span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">业财深度融合</span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">战略支撑转型</span>
                   </div>
                </div>
                
                {/* Tech Stack Chips */}
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">关键技术栈</div>
                  <div className="grid grid-cols-2 gap-2">
                    {techStack.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-100 text-xs font-medium text-slate-600">
                        <tech.icon className="w-3 h-3 text-blue-500" />
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-heading font-bold mb-8 text-slate-900 leading-tight"
            >
              构建以<span className="text-blue-600">利润中心</span>为导向的智能财务与运营体系
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="prose prose-lg prose-slate max-w-none text-slate-600"
            >
              <p className="lead text-xl leading-relaxed font-light text-slate-500 mb-8">
                作为中国领先的零担快运（LTL）服务商，安能物流由于业务线复杂（涵盖快递、零担、整车及仓储），各业务单元的盈利情况难以被财务体系实时、精准反映。多系统并存导致的数据孤岛，使得决策层无法高效获取运营全貌。
              </p>
              <p>
                安能物流携手泊冉软件，依托 <strong>NC/BIP</strong> 平台，开启了深度的业财融合转型。我们不仅仅是打通了数据接口，更重要的是重构了&quot;业务驱动财务&quot;的管理逻辑。通过建立统一的数据标准和自动化的凭证引擎，实现了物流业务（接单、调度、转运、签收）与财务核算（收入确认、成本归集、利润分析）的无缝衔接。
              </p>
              <p>
                此外，针对安能复杂的组织架构和资本市场要求，新系统支持多会计准则的自动适配与合规披露，将财务团队从繁琐的核算工作中解放出来，真正转型为支持企业战略扩张的智慧大脑。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
