
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const casesData = {
  "西域": {
    "slug": "west-basin",
    "title": "西域供应链业财一体化实践",
    "industry": "现代服务业 / 电商/MRO",
    "clientName": "西域供应链",
    "challenges": [
      "多系统集成不畅，数据孤岛严重",
      "财务与业务一体化不足，融合难度高",
      "付款自动化程度低，结算效率不高",
      "供应链金融缺乏工具支持，资金周转压力大"
    ],
    "solution": {
      "oneLiner": "构建集“多系统集成、付款自动化、合并报表、集团财务、供应链金融”于一体的智能化管控平台。",
      "modules": [
        { "item": "多系统集成平台 (odoo/银行/内部系统)" },
        { "item": "付款自动化管理系统" },
        { "item": "集团财务合并报表系统" },
        { "item": "融易联供应链金融平台" }
      ],
      "keyDesign": "打通资金流、物流、信息流，构建高效、智能、可追溯的一体化供应链管控平台。"
    },
    "keyResults": {
      "efficiency": "付款自动化率提升至90%以上",
      "quality": "数据准确性达到99%以上，消除人工核算误差",
      "risk": "资金流转透明可控，降低财务风险",
      "business": "全面支撑集团化运营与可持续发展"
    },
    "projectOverview": {
      "deliveryMode": "敏捷交付",
      "cycle": "6个月"
    }
  },
  "南极电商": {
    "slug": "nanji-ecommerce",
    "title": "南极电商阿米巴经营与数据治理实践",
    "industry": "现代服务业 / 电商",
    "clientName": "南极电商",
    "challenges": [
      "阿米巴经营模式下多经营单元独立核算复杂",
      "收入确认规则多样，口径不一",
      "多电商平台与内部系统并行，数据割裂",
      "业财融合推进困难"
    ],
    "solution": {
      "oneLiner": "构建多系统集成平台，强化数据治理，统一数据标准与核算口径。",
      "modules": [
        { "item": "阿米巴经营核算系统" },
        { "item": "全渠道收入确认平台" },
        { "item": "数据治理与标准中心" },
        { "item": "业财一体化协同平台" }
      ],
      "keyDesign": "实现业务流、数据流、财务流的高效贯通，支撑阿米巴模式下的精细化考核。"
    },
    "keyResults": {
      "efficiency": "收入确认时效性提升50%",
      "quality": "核算口径统一，报表准确率99%以上",
      "risk": "合规性显著增强，审计风险降低",
      "business": "支撑品牌授权业务规模化扩张"
    },
    "projectOverview": {
      "deliveryMode": "混合交付",
      "cycle": "8个月"
    } 
  },
  "住矿": {
    "slug": "sumitomo",
    "title": "住矿浆料业财一体化实践",
    "industry": "智能制造 / 电子材料",
    "clientName": "住矿浆料",
    "challenges": [
      "ERP 系统未能与 SPC 质量管控深度集成，形成信息孤岛",
      "无法实时预警工艺偏差，质量数据采集滞后",
      "“四码校验”与“扫码称重联动”依赖人工干预",
      "营业计划与实际生产执行在数据层面无法同步"
    ],
    "solution": {
      "oneLiner": "用规则引擎打通 ERP 与 SPC 质量管理系统，建立自动化生产执行与校验体系。",
      "modules": [
        { "item": "ERP + SPC 深度集成模块" },
        { "item": "规则引擎驱动模块" },
        { "item": "四码校验与联动集成模块" },
        { "item": "全流程可视化平台" }
      ],
      "keyDesign": "打通营业计划、生产执行、质量检测、扫码称重数据链路，构建端到端的闭环指标体系。"
    },
    "keyResults": {
      "efficiency": "审批流转时间缩短 50%",
      "quality": "产品良品率提升明显，SPC 实时闭环预警",
      "risk": "数据差错率降低 90%，作业精度 99%以上",
      "business": "利润核算更清晰，订单执行全程可视化"
    },
    "projectOverview": {
      "deliveryMode": "混合交付",
      "cycle": "3个月"
    }
  },
  "安能物流": {
    "slug": "anneng-logistics",
    "title": "安能物流利润中心导向的业财融合实践",
    "industry": "现代服务业 / 物流",
    "clientName": "安能物流",
    "challenges": [
      "各业务单元盈利情况难以实时精准反映",
      "快递、零担、整车等业务线复杂，数据孤岛严重",
      "核心服务环节与财务系统集成度低",
      "多会计准则下报表编制困难"
    ],
    "solution": {
      "oneLiner": "打造以业务驱动财务的智能管理体系，实现多系统高效集成与多会计准则自动化适配。",
      "modules": [
        { "item": "利润中心管理会计系统" },
        { "item": "全业务链业财融合平台" },
        { "item": "多会计准则自动转换引擎" },
        { "item": "智能财务分析驾驶舱" }
      ],
      "keyDesign": "打通业务与财务系统的全链路数据通道，消除人工干预。"
    },
    "keyResults": {
      "efficiency": "决策响应速度提升3倍",
      "quality": "财务数据实时性达到分钟级",
      "risk": "自动化合规披露，满足上市监管要求",
      "business": "推动财务管理向战略支撑转型"
    },
    "projectOverview": {
      "deliveryMode": "瀑布交付",
      "cycle": "12个月"
    }
  }
}

async function seedStories() {
  const payload = await getPayload({ config: configPromise })

  console.log('Seeding stories...')

  for (const data of Object.values(casesData)) {
    console.log(`Processing ${data.title}...`)
    
    // Check if exists
    const existing = await payload.find({
      collection: 'success-stories',
      where: {
        slug: { equals: data.slug }
      }
    })

    const storyData = {
      title: data.title,
      slug: data.slug,
      clientName: data.clientName,
      industry: data.industry,
      challenges: data.challenges.map(c => ({ challenge: c })),
      solution: {
        oneLiner: data.solution.oneLiner,
        modules: data.solution.modules,
        keyDesign: data.solution.keyDesign
      },
      keyResults: data.keyResults,
      projectOverview: data.projectOverview,
      tldr: data.solution.oneLiner, // Use oneLiner as tldr for now
      publishedDate: new Date().toISOString(),
    }

    if (existing.docs.length > 0) {
      console.log(`Updating ${data.slug}...`)
      await payload.update({
        collection: 'success-stories',
        id: existing.docs[0].id,
        data: storyData
      })
    } else {
      console.log(`Creating ${data.slug}...`)
      await payload.create({
        collection: 'success-stories',
        data: storyData
      })
    }
  }

  console.log('Seeding complete.')
  process.exit(0)
}

seedStories()
