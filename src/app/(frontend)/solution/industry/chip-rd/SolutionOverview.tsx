'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  ShieldCheck,
  Zap,
  Layers,
  Settings,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const SolutionOverview = () => {
  const modules = [
    { title: '芯片研发 (PDM)', icon: Settings, desc: '从立案到量产的 9 阶段生命周期管理，集成 IP 与图纸管控。' },
    { title: '委外加工 (WIP)', icon: Layers, desc: '实时穿透 Foundry/CP/AB/FT 节点，同步在制品、良率与计划。' },
    { title: '质量追溯 (Trace)', icon: ShieldCheck, desc: '晶圆级、批次级正反向追溯，自动生成质量分析报告与客诉处理。' },
    { title: '精细化成本 (Cost)', icon: Zap, desc: 'Turnkey 模式成本核算，实现从 Wafer 到 Dice 的多层级成本还原。' },
  ];
  const deliverables = [
    {
      title: '研发流程与主数据蓝图',
      desc: '项目阶段、物料与版本规则统一，沉淀可执行蓝图。',
    },
    {
      title: '委外节点穿透清单',
      desc: 'Foundry/CP/AB/FT 节点管控清单与协同规则。',
    },
    {
      title: '质量追溯规则与模板',
      desc: '晶圆/批次追溯规则与质量报告模板沉淀。',
    },
    {
      title: '成本还原模型与指标',
      desc: 'WIP 成本还原模型与关键看板指标定义。',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Visual Architecture */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative p-10 bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden group">
              {/* Architecture Diagram Placeholder */}
              <div className="aspect-square relative flex items-center justify-center">
                
                {/* Simplified Architecture Flow (CSS/SVG) */}
                <div className="relative z-10 w-full max-w-sm">
                  <div className="flex flex-col gap-6">
                    {/* Layer 1: Market/R&D */}
                    <div className="flex justify-center">
                      <div className="w-32 h-16 bg-blue-600 rounded-xl flex items-center justify-center border border-white/20 shadow-lg text-white font-bold text-xs uppercase tracking-tighter">
                        市场/研发项目
                      </div>
                    </div>
                    
                    <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-blue-400 rotate-90" /></div>
                    
                    {/* Layer 2: Core ERP/U8 */}
                    <div className="w-full h-32 bg-slate-800 rounded-2xl border border-white/10 flex flex-col items-center justify-center relative">
                      <div className="text-white font-black text-lg mb-2">BORAN U8+</div>
                      <div className="flex gap-4">
                        <div className="w-4 h-4 rounded bg-red-500/50" />
                        <div className="w-4 h-4 rounded bg-blue-500/50" />
                        <div className="w-4 h-4 rounded bg-green-500/50" />
                      </div>
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shadow-lg">
                        <Database className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-blue-400 rotate-90" /></div>

                    {/* Layer 3: External Nodes */}
                    <div className="flex justify-between gap-4">
                      {['Foundry', 'CP', 'Package', 'FT'].map((node, idx) => (
                        <div key={idx} className="flex-1 h-14 bg-slate-800/50 border border-white/5 rounded-lg flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase">
                          {node}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting lines decoration */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/10 rounded-full animate-pulse -z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-blue-500/5 rounded-full -z-10" />
                </div>

              </div>

              {/* Tag overlay */}
              <div className="absolute top-8 left-8 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest leading-none">
                Technical Architecture
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 font-primary">
                全栈式数智化架构<br />
                <span className="text-blue-600">打通“设计-交付”全链路</span>
              </h2>
              
              <p className="text-slate-600 mb-12 text-lg">
                基于泊冉统一协作门户与 U8+ 核心底座，为芯片研发企业构建的一套高度集成的业务管理平台，实现内外部业务的高效协同。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {modules.map((module, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <module.icon className="w-5 h-5 text-blue-600 group-hover:text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900">{module.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {module.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-slate-100">
                <blockquote className="text-slate-400 italic font-medium leading-relaxed">
                  “通过该架构，我们成功将外部 WIP 的同步频率从‘周’提升到了‘小时级’，极大地释放了运营团队的排程压力。”
                </blockquote>
              </div>
            </motion.div>
          </div>
          
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">
              交付
            </span>
            <h3 className="text-xl font-bold text-slate-900">交付物清单</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
