'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertCircle, 
  Search, 
  Divide, 
  EyeOff
} from 'lucide-react';

const IndustryChallenges = () => {
  const challenges = [
    {
      title: 'Fabless 委外黑盒',
      desc: '芯片生产环节高度委外（Foundry, Mask, CP, AB, FT），制造进度、在制品及良率信息滞后，形成“信息孤岛”。',
      dataPoint: '委外异常响应延迟 > 24H',
      icon: EyeOff,
      color: 'bg-red-50 text-red-600 border-red-100',
    },
    {
      title: '批次良率与成本还原困难',
      desc: '每一批次由于晶圆、CP、封装及FT的差异，导致良率波动大。传统ERP难以实现精确到晶圆片号的“成本还原”。',
      dataPoint: '核算误差率约 5-15%',
      icon: Divide,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      title: '颗粒度精细化追溯深度不足',
      desc: '面对高要求的技术审计与质量管控，难以实现从晶圆、Lot编号到成品 SN 的全路径正反向穿透追踪。',
      dataPoint: '质量事故精准定位率 < 60%',
      icon: Search,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 font-primary">
              行业管理难点：突破芯片研发的数智化阻碍
            </h2>
            <p className="text-lg text-slate-600">
              芯片行业高技术含量、长研发周期、复杂委外链的特性，对数字化系统提出了极高的实时性与精细化要求。
            </p>
          </motion.div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full relative group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${challenge.color} group-hover:scale-110 transition-transform`}>
                  <challenge.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{challenge.title}</h3>
                <p className="text-slate-600 mb-10 flex-grow leading-relaxed">
                  {challenge.desc}
                </p>
                
                <div className="pt-6 border-t border-slate-50">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">业务痛点数据</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 mt-1">
                    {challenge.dataPoint}
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute top-4 right-4 text-slate-50 font-black text-6xl -z-10 group-hover:text-slate-100 transition-colors">
                  0{idx + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default IndustryChallenges;
