import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { 
  LayoutDashboard, 
  Map, 
  Database, 
  Repeat, 
  Share2, 
  Smartphone, 
  Info, 
  BarChart3 
} from 'lucide-react'

const capabilities = [
  {
    title: '项目管理门户',
    desc: '为不同角色（客户、供应商、专家）配置个性化工作空间，聚焦核心任务。',
    icon: <LayoutDashboard className="w-6 h-6" />
  },
  {
    title: '业务导图设计',
    desc: '图形化配置项目管理入口，所有业务模块一目了然，灵活适配管理需求。',
    icon: <Map className="w-6 h-6" />
  },
  {
    title: '项目模板库',
    desc: '沉淀企业最佳实践，定制统一管理模板，实现同类项目的高效复用。',
    icon: <Database className="w-6 h-6" />
  },
  {
    title: '项目过程管理',
    desc: '周报、变更单、风险预警，支持自定义流程，全过程可跟踪、可追查。',
    icon: <Repeat className="w-6 h-6" />
  },
  {
    title: '移动项目管理',
    desc: '依托移动端，随时随地处理审批、汇报项目进度，保障时效性。',
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: '多维统计报表',
    desc: '实时展现数据统计与全局视图，甘特图直观呈现项目进度与资源负荷。',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: '业务集群协同',
    desc: '深度集成工作计划、合同、费用等模块，避免多系统切换，效率倍增。',
    icon: <Share2 className="w-6 h-6" />
  },
  {
    title: '项目资产沉淀',
    desc: '集中存储项目文档、知识，实现管理经验的可复制与角色化应用。',
    icon: <Info className="w-6 h-6" />
  }
]

export const Capabilities = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">核心能力清单</h2>
          <p className="text-gray-600 text-lg">
            不堆砌功能，只为您提供最落地的项目管理手段。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <Card key={idx} className="border-gray-100 hover:border-brand-blue/30 transition-all hover:shadow-lg group">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
