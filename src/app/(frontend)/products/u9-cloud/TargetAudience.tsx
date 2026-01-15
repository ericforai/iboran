import React from 'react'
import { Users, AlertCircle, CheckCircle2 } from 'lucide-react'

const targets = [
  { name: '装备制造', desc: '解决多工序、长周期、高协同挑战' },
  { name: '汽配行业', desc: '适配高频变动、严苛合规与JIT供应' },
  { name: '电子电器', desc: '应对快节奏更迭、精细化BOM管理' },
  { name: '新材料', desc: '解决配方管理、批次追溯与能效分析' },
  { name: '家居制造', desc: '支撑大规模个性化定制与前后端一体化' },
]

const pains = [
  {
    title: '订单交付不受控',
    desc: '由于信息孤岛，计划与现场断层，导致订单交付周期长，紧急插单处理难，延期率高。',
  },
  {
    title: '库存积压严重',
    desc: '采购与生产脱节，呆滞料无法复用，物料齐套率低，大量资金被占用，影响周转。',
  },
  {
    title: '成本核算不精细',
    desc: '缺乏项目维度的实时成本，阿米巴考核难以落地，利润漏损点隐蔽，决策缺乏支撑。',
  },
]

export const TargetAudience = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Targets */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">适用对象与行业</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              U9 cloud 专为追求精益管理、敏捷制造的中大型制造企业打造，深度适配以下核心行业：
            </p>
            <div className="space-y-4">
              {targets.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 block">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border-l-4 border-gray-300 italic text-gray-500 text-sm">
              * 不适用：纯单一生产组织、非离散制造、初创型小微企业。
            </div>
          </div>

          {/* Pain Points */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 rounded-xl">
                <AlertCircle className="w-6 h-6 text-brand-red" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">典型业务现状</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              当您的企业面临以下“生长痛”时，说明您迫切需要一套高性能的数智底座：
            </p>
            <div className="space-y-6">
              {pains.map((item, idx) => (
                <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-red-200 before:rounded-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
