'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Workflow, 
  BarChart3, 
  ArrowRight,
  MonitorCheck,
  PackageSearch,
} from 'lucide-react';

const scenarios = [
  {
    id: 'rd-collab',
    title: '研发项目协同',
    icon: Workflow,
    subtitle: '打通从立项到 mass production 的全旅程',
    desc: '集成项目时间表、关键里程碑（Tape-out, CP, FT）及技术文档管控。实现多角色（PM, 设计, 运营）的高效实时协同，确保流片进度可控。',
    features: ['5阶段生命周期节点管控', 'IP资产与版本安全管控', '流片异常预警机制'],
    stats: '项目周期缩短 15-20%'
  },
  {
    id: 'wip-visibility',
    title: '委外看板',
    icon: MonitorCheck,
    subtitle: '透视外部代工厂与封测厂的实时在制',
    desc: '穿透封闭的委外环节，实时获取 Foundry 晶圆产出、CP 测试良率、AB 封装入仓及 FT 完工进度。解决“数据黑盒”，实现主动供应管理。',
    features: ['代工厂数据直接互联', 'WIP 分布与状态可视化', '自动对账与结算预收'],
    stats: '协同效率提升 300%'
  },
  {
    id: 'part-number',
    title: '品号与条码',
    icon: PackageSearch,
    subtitle: '多维度精细化品号体系与物流追溯',
    desc: '建立覆盖芯片尺寸、厚度、管脚、封装形式的多维档案。通过条码贯穿仓储流转，实现 Wafer 级、Lot 级到成品 DateCode 的全流程追溯。',
    features: ['多层级芯片 BOM 架构', 'Wafer/Lot 批次属性强管控', '移动端扫码入出库'],
    stats: '追溯准确率 99.9%'
  },
  {
    id: 'cost-restoration',
    title: '成本可视化还原',
    icon: BarChart3,
    subtitle: '穿透多层委外，真实还原芯片盈利模型',
    desc: '支持复杂的“委外+内制”混合成本核算。自动将晶圆成本、测试费用、封装摊销按照批次进行归集，实现真正意义上的“单片芯片成本还原”。',
    features: ['多工序费用自动分摊', '批次良率与损耗看板', '毛利水平精准动态分析'],
    stats: '核算误差 < 1.0%'
  },
];

const KeyScenarios = () => {
  const [activeTab, setActiveTab] = useState(scenarios[0].id);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 font-primary">
              核心业务场景：数智化驱动业务增长
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              针对芯片研发企业的特定流程，构建深度适配的业务化底座，实现全价值链条的精细化管控。
            </p>
          </motion.div>
        </div>

        {/* Tab Sidebar Mobile / Desktop Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {scenarios.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center text-left p-6 rounded-2xl transition-all border ${
                  activeTab === item.id 
                    ? 'bg-white shadow-xl border-blue-100 scale-105 z-10' 
                    : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-5 transition-colors ${
                  activeTab === item.id ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-bold transition-colors ${
                    activeTab === item.id ? 'text-slate-900' : 'text-slate-500'
                  }`}>
                    {item.title}
                  </h4>
                  <p className="text-xs truncate max-w-[150px] opacity-60 font-medium">{item.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 h-full">
            <AnimatePresence mode="wait">
              {scenarios.map((item) => item.id === activeTab && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-blue-50/50 relative overflow-hidden h-full flex flex-col"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-8">
                      <div className="text-blue-600 font-black text-sm uppercase tracking-widest mb-4 flex items-center">
                        <span className="w-8 h-px bg-blue-600 mr-2" />
                        {item.subtitle}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">{item.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {item.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-slate-700 font-semibold group">
                          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                            <ArrowRight className="w-3 h-3 text-blue-600 group-hover:text-white" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                          <BarChart3 className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold text-slate-400">预期收益指标</span>
                      </div>
                      <div className="text-3xl font-black text-blue-600">
                        {item.stats}
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic backgrounds */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-50 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyScenarios;
