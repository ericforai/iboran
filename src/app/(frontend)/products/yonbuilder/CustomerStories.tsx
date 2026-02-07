'use client'

import { motion } from 'framer-motion'
import { Quote, Building2, ShoppingBag, Factory } from 'lucide-react'

const stories = [
  {
    customer: '中国一汽',
    industry: '汽车制造',
    icon: Building2,
    logo: '/images/customers/faw.png', // Placeholder for concept
    title: '构建集团级数智化核心平台',
    desc: '基于 YonBuilder 重构了启明数智化平台，实现了组件化能力沉淀与场景化快速构建，支撑一汽集团数字化转型战略落地。',
    stats: [
      { label: '开发效率提升', value: '300%' },
      { label: '组件复用率', value: '80%' }
    ]
  },
  {
    customer: '良品铺子',
    industry: '新零售',
    icon: ShoppingBag,
    logo: '/images/customers/lppz.png',
    title: '全渠道营销闭环管理',
    desc: '利用低代码平台快速打通 30+ 异构系统，构建了精准的会员识别与营销触达体系，支撑双十一海量并发业务。',
    stats: [
      { label: '会员触达', value: '千万级' },
      { label: '营销转化率', value: '+25%' }
    ]
  },
  {
    customer: '威偲集团',
    industry: '食品加工',
    icon: Factory,
    logo: '/images/customers/weisi.png',
    title: '肉制品加工智能排产',
    desc: '覆盖从屠宰到精深加工的全链路数字化管理，通过低代码快速搭建符合行业特性的智能排产与追溯系统。',
    stats: [
      { label: '库存周转', value: '-20%' },
      { label: '排产准确率', value: '99%' }
    ]
  }
]

export default function CustomerStories() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            头部企业选择 <span className="text-[#E60012]">YonBuilder</span>
          </h2>
          <p className="text-lg text-slate-600">
            赋能各行各业实现数智化创新，见证低代码的商业价值
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="h-2 bg-[#E60012]/80 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                    <story.icon className="w-4 h-4" />
                    <span>{story.industry}</span>
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 fill-slate-100" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2">{story.customer}</h3>
                <h4 className="text-sm font-bold text-[#E60012] mb-4">{story.title}</h4>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8 h-20">
                  {story.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                  {story.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-xl font-bold text-slate-800">{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
