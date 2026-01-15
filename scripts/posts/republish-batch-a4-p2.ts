import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '工业物联网 (IIoT)：设备连上网就能叫智能制造吗？',
    slug: 'iiot-smart-manufacturing-myth',
    categorySlugs: ['manufacturing', 'digital-transformation', 'products-tech'],
    tldr: '联网只是第一步（搭路）。如果路修好了没车跑（数据应用），那就是浪费。IIoT 的价值不在于“连”，而在于“懂”。懂设备的语言，懂工艺的逻辑。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '老设备没有网口能连吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '连上网了数据给谁看？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '数据安全怎么办？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、数据坟墓', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多工厂把设备数据采上来，存进数据库，然后...就没有然后了。这些数据如果不经过清洗、分析、建模，就是数字垃圾。边缘计算（Edge Computing）正在解决这个问题：在设备端就处理掉 90% 的无效数据，只传有价值的信息上云。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：小步快跑', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 状态监控。先看设备是开是关，是不是在空转。这个最简单，见效最快。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 工艺参数。采集温度、压力、转速。关联产品质量。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 反向控制。云端下发指令，自动调整设备参数。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有专门的 OT（运营技术）团队负责设备联网？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 工业防火墙是否部署到位？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：抓出“摸鱼”的机器', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某注塑厂，以前认为设备利用率是 80%。上了 IIoT 一测，发现只有 50%。因为大量时间机器在“待机”（加热但不生产）。原来是夜班工人为了省事，长时间不换模，或者调机时间过长。数据一公开，OEE（设备综合效率）立马提升了 20%。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '设备数字化改造。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 设备多且分散（如水泵房） → THEN IIoT 价值巨大（省巡检）', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '自动化程度高的工厂', type: 'suitable' },
       { condition: '纯手工装配线', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '必须用 5G 吗？', answer: '不一定。大部分场景 WiFi 6 或有线网络就够了。除非是 AGV 或者需要极低延迟的控制场景才需要 5G。' }
    ]
  },
  {
    title: '柔性制造系统 (FMS)：如何一条线生产 100 种产品？',
    slug: 'flexible-manufacturing-system-mass-customization',
    categorySlugs: ['manufacturing', 'industry-insights'],
    tldr: '刚性产线是“为了效率牺牲灵活性”，专机专用。柔性产线是“鱼和熊掌兼得”。通过模块化设计、AGV 物流、和软件定义的工艺，实现“大规模定制”。成本只比大规模生产高一点点。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '设备是不是都要换？投入大吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '切换产品需要停机多久？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '工人能适应吗？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、软件定义制造', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '以前换产品要换硬件（模具、夹具）。现在换产品是换软件（程序）。机器手还是那个机器手，只要下载新的路径程序，它就能抓不同的东西。这就是 FMS 的核心：硬件通用化，软件个性化。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：岛式生产', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 拆流水线。把“长龙”拆成一个个独立的“岛”。A 岛做加工，B 岛做装配。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: AGV 串联。用 AGV 小车在岛之间运送物料。路径可以随时改。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 混流排产。一条线上同时跑 A、B、C 三种产品。系统自动识别身份，自动切换工艺。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 产品设计是否模块化？（这是前提）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有专门的“工艺工程师”负责写程序？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：定制服装厂', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某西装定制工厂。每一件衣服都是不同的尺寸、面料。通过 RFID 吊挂系统，衣服流到某个工位时，屏幕自动显示这件衣服该怎么缝（比如双排扣还是单排扣）。工人不用动脑子，照着屏幕做就行。日产 2000 件，件件不同。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '个性化定制与快速迭代。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 产品生命周期 < 6 个月 → THEN 必须上柔性线', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 生产老干妈辣酱 → THEN 刚性专机线效率最高', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '服装、3C、家具', type: 'suitable' },
       { condition: '玻璃、水泥', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '柔性线会不会效率低？', answer: '理论上比刚性线低一点（因为有切换动作）。但考虑到库存成本和市场响应速度，总效益是极高的。' }
    ]
  },
  {
    title: '制造智能 (MI)：比 BI 强在哪？',
    slug: 'manufacturing-intelligence-vs-bi',
    categorySlugs: ['manufacturing', 'digital-transformation', 'industry-insights'],
    tldr: 'BI (商业智能) 告诉你“在这个月废品率是多少”（结果）。MI (制造智能) 告诉你“为什么废品率高”（相关性），并预测“下个月废品率会怎样”（趋势）。MI 是深入到工艺机理层面的数据分析。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '报表能不能自动找原因？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '能不能不仅看，还能改？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、从 Report 到 Insight', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '传统的报表是静态的。MI 是动态的。它能把看似无关的变量关联起来。比如，MI 发现每当“车间温度超过 30 度”且“使用 B 供应商材料”时，废品率就会飙升。这种洞察是人脑很难发现的。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 数据采集颗粒度是否达到秒级？（分钟级数据没法做 MI）', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、真实案例：良率提升', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某光伏切片厂。通过 MI 分析，发现切片良率与金刚线的“张力波动”有强相关性。调整了张力控制算法后，良率提升了 1%。在光伏行业，1% 就是几个亿的利润。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '工艺优化。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 工艺已达到瓶颈，靠老师傅经验调不动了 → THEN 上 MI 挖数据价值', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '半导体、光伏、锂电', type: 'suitable' },
       { condition: '数据量小的组装厂', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'MI 需要懂 AI 算法吗？', answer: '不需要。现代 MI 平台都是低代码的，拖拉拽就能做相关性分析。把工具给工艺工程师用，而不是给 IT 用。' }
    ]
  },
  {
    title: '能源管理 (EMS)：一度电的精细化管理',
    slug: 'energy-management-system-cost-saving',
    categorySlugs: ['manufacturing', 'digital-transformation'],
    tldr: '能源成本通常占制造业成本的 5%-20%。EMS 不是简单的抄电表，而是“削峰填谷”和“能效分析”。把电当成原材料一样去管理，一度电都不能浪费。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '一年能省多少电费？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '哪里浪费电了？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、看不见的浪费', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '大功率设备空转、空压机漏气、下班不关灯... 这些浪费在每个月几百万的电费单里微不足道，但积少成多。更重要的是“峰谷电价差”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：削峰填谷', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 分项计量。给每个大设备装智能电表。知道谁是“电老虎”。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 错峰生产。把高能耗工序安排在谷电时段（晚上）开机。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 单位产品能耗是否纳入考核？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：避开尖峰', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某水泥厂，利用 EMS 自动监测实时电价。当电价处于尖峰时，自动降低球磨机功率；当电价处于低谷时，满负荷生产。仅此一项，每年电费节省 200 万。产量没变，电费降了。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '高能耗企业。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 电费占成本比例 > 5% → THEN 上 EMS 回本极快', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '水泥、钢铁、化工', type: 'suitable' },
       { condition: '组装厂（电费占比极低）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'EMS 要接硬件吗？', answer: '要。智能电表、水表、气表。这是一次性投入，长期受益。' }
    ]
  },
  {
    title: '碳足迹：绿色制造是成本还是竞争力？',
    slug: 'carbon-footprint-competitiveness',
    categorySlugs: ['manufacturing', 'industry-insights'],
    tldr: '以前绿色制造是情怀，现在是门票。欧盟碳关税（CBAM）来了，大客户的“碳中和”承诺来了。如果不算碳账，你可能连投标资格都没有。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我是做内销的，也要管碳吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么算我的产品排了多少碳？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、供应链倒逼', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '苹果、宝马都承诺了 2030 年碳中和。他们怎么实现？逼供应商减碳。如果你提供不了碳足迹报告，他们就会把订单给能提供的对手。这已经是在发生的现实。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否摸清了家底（基准线排查）？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否买了绿电？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：一张门票', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某电池厂，因为提前部署了碳管理系统，能够出具详尽的碳足迹报告。在竞标欧洲某车企订单时，虽然价格比对手高一点，但因为符合对方的低碳战略，最终中标。绿色就是金钱。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '出口型企业。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 客户在欧洲 → THEN 碳管理是生死线', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '外贸企业、头部供应链', type: 'suitable' },
       { condition: '即使是小厂也要开始关注', type: 'suitable' }
    ],
    atomicFAQs: [
      { question: '碳交易能赚钱吗？', answer: '能。如果你减排做得好，把多余的配额卖给别人，是一笔纯利润。特斯拉靠卖碳积分赚了几十亿。' }
    ]
  }
]

async function publishBatch() {
  const payload = await getPayload({ config: configPromise })
  
  for (const postData of POSTS) {
    console.log(`Processing: ${postData.title}`)
    
    // 1. Resolve Categories
    const categoryIds = []
    for (const slug of postData.categorySlugs) {
        const res = await payload.find({ collection: 'categories', where: { slug: { equals: slug } }, depth: 0 })
        if (res.docs.length) categoryIds.push(res.docs[0].id)
    }

    // 2. Find existing post
    const existing = await payload.find({
        collection: 'posts',
        where: { title: { equals: postData.title } },
        limit: 1
    })

    const data = {
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        decisionFramework: postData.decisionFramework,
        boundaries: postData.boundaries,
        atomicFAQs: postData.atomicFAQs,
        tldr: postData.tldr,
        meta: {
            title: postData.title + ' | 泊冉软件',
            description: postData.tldr,
            keywords: 'IIoT, 柔性制造, 制造智能, 能源管理, 碳中和'
        },
        categories: categoryIds,
        _status: 'published'
    }

    try {
        if (existing.docs.length > 0) {
            await payload.update({
                collection: 'posts',
                id: existing.docs[0].id,
                data: data
            })
            console.log(`Updated (V3.0): ${postData.slug}`)
        } else {
             await payload.create({
                collection: 'posts',
                data: { ...data, publishedAt: new Date().toISOString() }
            })
            console.log(`Created (V3.0): ${postData.slug}`)
        }
    } catch (e) {
        if (e.message?.includes('revalidatePath')) {
             console.log(`Published (revalidate warning): ${postData.slug}`)
        } else {
             console.error(`Failed to publish ${postData.slug}`, e)
        }
    }
  }
  process.exit(0)
}

publishBatch().catch(console.error)
