import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '为什么“齐套率”比“准时交货率”更重要？',
    slug: 'kitting-rate-vs-on-time-delivery',
    categorySlugs: ['supply-chain', 'manufacturing', 'industry-insights'],
    tldr: '对于装配型企业，齐套率就是生命线。缺一个螺丝，整台机器就发不出去。准时交货率是结果，齐套率是原因。抓住了齐套率，就抓住了交付的牛鼻子。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么仓库里堆满了料，生产线还在喊缺料？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们的库存周转率为什么这么低？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '能不能先装配一部分？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、木桶效应', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '一台机器由 1000 个零件组成。999 个都到了，就缺一个标牌。这台机器就不能包装、不能入库、不能发货、不能收钱。那 999 个零件的钱就被锁死在车间里。这就是“不齐套”带来的资金占用。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：齐套管理', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 齐套检查。开工前，系统自动检查 BOM 里所有物料的库存。不齐套不准发料。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 缺料预警。根据采购在途预计，提前 3 天告诉计划员：哪个订单会缺料，赶紧催。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 锁定分配。A 订单急，先把料锁给 A，不让 B 订单抢走。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 生产工单是否必须“齐套发料”？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 采购员的考核指标里是否有“齐套率”？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：一地鸡毛的车间', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某设备厂，以前是“有多少料发多少料”。结果车间里堆满了半成品，工人为了找零件要翻半天。丢件、损毁严重。上线齐套管理后，坚持“不齐套不发料”。车间变得空荡荡的，只有正在装的机器。生产周期从 20 天缩短到 5 天。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '离散制造（装配型）。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 在制品（WIP）堆积如山 → THEN 必须严抓齐套', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '机械、电子组装', type: 'suitable' },
       { condition: '流程化工（炼钢、化工）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '欠料能不能先领出来？', answer: '原则上不行。除非是长周期物料且不影响后续工序（比如最后的包装箱）。' }
    ]
  },
  {
    title: 'APS（高级排程）是不是智商税？',
    slug: 'aps-advanced-scheduling-scam',
    categorySlugs: ['supply-chain', 'manufacturing', 'products-tech'],
    tldr: '对于 90% 的企业来说，APS 确实是智商税。APS 对数据准确性的要求是 ERP 的 10 倍。如果你连库存都准不了，工艺路线都不全，上 APS 就是找死。先用好 MRP，再谈 APS。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么 ERP 算出来的计划车间不执行？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '花了 200 万买 APS，为什么最后还是用 Excel 排产？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们需要 APS 吗？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、有限能力 vs 无限能力', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 的 MRP 逻辑默认能力是无限的（只要有单子就排）。但车间的机器是有限的，人是有限的。APS 就是要解决“有限资源下的最优解”。这需要极其精准的“工时数据”和“约束条件”（如换模时间）。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：数据清洗', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 测工时。每个工序到底需要几秒？误差不能超过 5%。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 撸逻辑。换这个模具要多久？洗这个罐子要多久？逻辑必须数字化。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 试排产。拿一个车间做试点。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 标准工时（UPH）是否覆盖了 95% 的产品？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 计划员是否具备极强的数据分析能力？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：回归 Excel', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某工厂重金上了 APS。因为没考虑“模具维修”这个约束，排出来的计戈划全是错的（要把正在修的模具装上去）。车间主任一看就扔一边了：还不如我脑子好使。最后 APS 系统成了摆设。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '生产瓶颈明显且逻辑固定的场景。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 瓶颈不在机器在人（人的变数大） → THEN 别上 APS', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 生产逻辑极其复杂且依赖老师傅经验 → THEN 慎重', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: 'SMT、注塑、芯片制造等高度自动化行业', type: 'suitable' },
       { condition: '手工装配、非标定制', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '不上 APS 怎么排产？', answer: '用 ERP 的 MRP 跑物料需求。用 Excel 做粗能力平衡。对大部分企业足够了。' }
    ]
  },
  {
    title: '寄售库存 (VMI)：能不能让供应商帮我背库存？',
    slug: 'vmi-consignment-inventory',
    categorySlugs: ['supply-chain', 'financial-management'],
    tldr: 'VMI (Vendor Managed Inventory) 是每个采购总监的梦想。货放在我的仓库里，但物权是供应商的。我用多少拿多少，拿了再结账。这是极致的“借鸡生蛋”。但前提是：你要给供应商透明的数据。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '供应商凭什么答应？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '货丢了算谁的？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '会不会泄露我们的生产机密？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、利益交换', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '供应商不仅是看在“你是大客户”的面子上。VMI 对供应商也有好处：他可以看到你的实时库存消耗，从而安排自己的生产，避免“牛鞭效应”导致的急单或库存积压。这是用“信息透明”换取“库存责任”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：结算后移', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 物理分区。仓库里划一块地，专放 VMI 物料。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 系统消耗。生产领料时，系统自动触发“所有权转移”，生成应付单。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 每月对账。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 合同是否明确了“盘点差异”的赔偿责任？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 系统是否支持 VMI 仓的管理？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：双赢', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某家电厂对包材实施 VMI。以前包材占用了 3000 万资金。VMI 后，资金占用为 0。供应商虽然背了库存，但因为能看到家电厂的排产计划，备货更精准了，库存总量反而下降了 20%。双方都开心。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '通用性强、价值相对低的物料。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 我们是供应商的甲级客户（话语权大） → THEN 强推 VMI', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '标准件（螺丝、包材）', type: 'suitable' },
       { condition: '定制件（专门为你做的）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'VMI 仓库需要谁来管？', answer: '通常还是还是买方（我们）管，或者是第三方物流（3PL）管。供应商只负责补货。' }
    ]
  },
  {
    title: '退货流程为什么比发货流程难 10 倍？',
    slug: 'reverse-logistics-nightmare',
    categorySlugs: ['supply-chain', 'industry-insights'],
    tldr: '正向物流是“标准化”的，逆向物流是“非标”的。退回来的货，包装破了、配件少了、甚至换了零件。如果没有专门的逆向处理流程，退货仓就是个垃圾堆，财务账永远对不上。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么退款这么慢，客户在投诉？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '退回来的货去哪了？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么减少退货？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、流程痛点：质检瓶颈', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '退货收货难在“验货”。是质量问题？是物流破损？还是客户由于不喜欢？由于责任认定不清，仓库不敢收，质检没空验，财务不敢退款。所有环节都卡住了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：快速分流', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 先退款后收货（针对信用好的客户）。保留追索权，先把客户安抚好。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 二次入库。完好的，清洗包装后重新上架销售。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 报废拆解。坏的，拆零件当备件用。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有专门的“退货待处理区”？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 退货原因是否做了结构化记录（用于改进产品）？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：被退货拖垮的服装店', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某女装品牌，双十一退货率 40%。大量的衣服堆在仓库里，错过了销售季节，变成了库存。后来改进流程：退货必须在 24 小时内完成质检和熨烫，重新上架。挽回了 50% 的销售机会。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '电商、零售等退货率高的行业。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 退货处理成本 > 货值 → THEN 直接送给客户，别退了', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '服装、鞋帽', type: 'suitable' },
       { condition: '食品（退回来也只能销毁）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '退货算销售冲减吗？', answer: '是的。在财务报表上，必须冲减当期的销售收入。所以年底压货冲业绩，年初退货，是常见的财务造假手段。' }
    ]
  },
  {
    title: '供应链协同：如何消灭“牛鞭效应”？',
    slug: 'bullwhip-effect-supply-chain-collaboration',
    categorySlugs: ['supply-chain', 'industry-insights'],
    tldr: '市场打个喷嚏，工厂就得感冒，供应商就得发高烧。这就是牛鞭效应。越往上游，信息越失真，波动越大。消灭它的唯一办法是：共享终端销售数据。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么我们总是一会儿忙死，一会儿闲死？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '库存为什么越积越多？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '经销商到底卖了多少？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、恐惧导致波动', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '零售商卖了 10 个，但他怕缺货，向批发商订了 15 个。批发商怕缺货，向厂家订了 20 个。厂家向供应商订了 40 个材料。结果市场其实只需 10 个。多出来的 30 个库存，就是这一串人的“恐惧”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：DMS（经销商管理系统）', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 数据采集。强制经销商上 DMS 系统，不上不给返利。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 自动补货。根据经销商的实际库存和销量，厂家自动算补货量，推给经销商确认。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 产销协同。工厂直接按终端销量排产。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 我们是否能看到一级经销商的进销存？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否和核心供应商开了信息共享接口？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：宝洁与沃尔玛', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '经典的 CFAR 模式。沃尔玛把 POS 机数据直接给宝洁。宝洁看到尿布卖快了，直接安排生产发货，不用等沃尔玛下订单。库存下降了 70%，缺货率几乎为 0。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '渠道层级多的品牌商。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 渠道压货严重（窜货乱价） → THEN 必须上 DMS 管控', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '快消品、家电、汽车', type: 'suitable' },
       { condition: '直销模式', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '经销商不填真数据怎么办？', answer: '利益捆绑。告诉他：填真数据，我能帮你优化库存，让你少积压资金。如果不填，缺货了别找我。' }
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
            keywords: '齐套率, APS, VMI, 逆向物流, 供应链协同'
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
