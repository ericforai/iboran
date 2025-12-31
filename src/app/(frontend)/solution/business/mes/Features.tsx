'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, ShieldCheck, Cpu, Smartphone, BarChartHorizontal, Link } from 'lucide-react'

const features = [
  {
    icon: CalendarCheck,
    title: '车间作业调度',
    desc: '基于有限产能的工序级排程，任务直达机台与工位，实现"工序-派工-报工"闭环管理。'
  },
  {
    icon: ShieldCheck,
    title: 'SPC 质量过程控制',
    desc: '集成质检设备自动采集数据。应用 SPC 统计过程控制，实时监控质量波动，预防批量不良。'
  },
  {
    icon: Cpu,
    title: 'MDC/DNC 设备联网',
    desc: '兼容主流数控系统与 PLC，实时采集机床状态与参数。自动计算 OEE，实现设备预知性维护。'
  },
  {
    icon: Smartphone,
    title: '工序级实时报工',
    desc: '多端（PDA/工控机）实时报工。数据无需二次录入，直接驱动成本卷积计算，确保"料动账动"。'
  },
  {
    icon: BarChartHorizontal,
    title: 'Andon 异常安灯',
    desc: '车间异常一键呼叫，声光报警联动。多级推送机制确保设备故障、缺料等问题得到快速响应与处理。'
  },
  {
    icon: Link,
    title: '线边仓与投料防错',
    desc: '生产现场线边库存实时扣减，与 AGV 联动实现自动叫料。关键工序扫码投料防错，确保物料准确无误。'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            核心功能场景
          </h2>
          <p className="text-lg text-slate-600">
            覆盖从生产派工、执行、质检到设备管理的制造全场景，打造数据驱动的数字化车间
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
