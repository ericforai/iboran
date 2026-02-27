'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Quote, ArrowUpRight } from 'lucide-react';

const cases = [
  {
    company: '某知名 12 寸晶圆级定制芯片设计商',
    tag: '委外看板 + 良率分析',
    result: '外部 WIP 同步效率提升 300%',
    desc: '面多复杂的多级委外订单，该客户通过泊冉 WIP 看板实现了代工厂与封测厂数据的小时级同步，显著降低了由于排程冲突导致的交付延迟。',
    quote: '泊冉的系统不仅是一个 ERP，更是一个连接我们与供应链的数智化纽带。',
  },
  {
    company: '某高增长车载 IC 设计独角兽',
    tag: '成本还原 + 批次追溯',
    result: '核算误差率从 12% 降至 <1%',
    desc: '传统的按工单核算难以支撑芯片级的成本分析，该企业部署 U8+ 芯片方案后，实现了从 Wafer 到成品（Die）的全生命周期成本可视化还原。',
    quote: '现在由于质量追溯的颗粒度提升到了 Wafer 级，我们的客诉处理响应速度提升了 50%。',
  },
];

const IndustryCases = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 font-primary">
              行业标杆案例：见证数智化转型力量
            </h2>
            <p className="text-lg text-slate-600">
              泊冉软件已成功助力多家先锋集成电路设计企业实现业务转型。
            </p>
          </div>
          <Link href="/cases" className="flex items-center space-x-2 text-blue-600 font-bold hover:underline group">
            <span>浏览更多行业案例</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-slate-50 p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {item.tag}
                </span>
                <div className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-lg">
                  {item.result}
                </div>
              </div>

              <h4 className="text-2xl font-black text-slate-900 mb-6 leading-tight">
                {item.company}
              </h4>
              
              <p className="text-slate-600 leading-relaxed mb-10 flex-grow">
                {item.desc}
              </p>

              <div className="pt-10 border-t border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600 rounded-xl shadow-lg shadow-red-200">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-500 italic font-medium leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default IndustryCases;
