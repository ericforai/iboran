import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '为什么库存周转率是供应链的第一指标？',
    slug: 'inventory-turnover-importance',
    categorySlugs: ['supply-chain', 'industry-insights', 'digital-transformation'],
    tldr: '库存放在仓库里不是资产，是负债。它占用了现金，还要付房租、人工，还有贬值的风险。周转率就是资金的“流速”。流速越快，赚钱效率越高。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么销售额涨了 20%，账户上却没钱？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们的周转率在行业里算好还是算差？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么提升周转率？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、现金流杀手', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多老板以为货多了是家底厚。错。货在卖出去之前，每一天都在“吃钱”。如果你的毛利只有 10%，但库存周转只有 1 次（一年才卖一次），那你的资金回报率就是 10%。如果周转 5 次，回报率就是 50%。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：加速流动', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 盘点家底。先把仓库里那堆 3 年没动的“死货”找出来，打折卖掉或报废。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 设卡限流。采购必须按计划买，不能因为“便宜”就多买。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 齐套管理。缺一个螺丝，整个机器发不出去，剩下 99% 的零件都在陪着“坐牢”。必须按套采购。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 财务报表里是否每个月都有“存货库龄分析”？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 采购员的绩效是否挂钩“库存周转率”？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：赚了利润赔了钱', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某服装厂，为了降低成本，每次面料都买一年的量（量大折扣）。结果第二年流行风向变了，面料全砸手里。账面上看采购成本省了 10%，实际上几百万库存变成了废布。最后不得不按斤卖给收废品的。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '供应链绩效复盘。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 毛利低（如贸易、批发） → THEN 必须疯狂追求高周转', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 毛利极高（如奢侈品、茅台） → THEN 周转率可以低一点，保品牌', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '快消品、电子产品等跌价快的行业', type: 'suitable' },
       { condition: '现金流紧张的企业', type: 'suitable' },
       { condition: '古董店、陈年老酒（越放越值钱）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '周转率越高越好吗？', answer: '不是。太高可能意味着经常断货。要在“不断货”的前提下追求最高周转。' }
    ]
  },
  {
    title: '呆滞料（长库龄库存）是怎么产生的？',
    slug: 'causes-of-obsolete-inventory',
    categorySlugs: ['supply-chain', 'industry-insights'],
    tldr: '呆滞料是企业的癌症。它通常源于三个“不通”：销售变更没通知计划，研发变更没通知采购，仓库收货没看日期。打通信息流，才能消灭呆滞。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么好好的料突然就不动了？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '这些呆滞料还能用吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '以后怎么防止再产生？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、根因：信息孤岛', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '技术部改了图纸，把 A 零件换成了 B 零件。忘了发 ECN（变更通知）给仓库。仓库还以为 A 零件要用，继续备货。结果 A 零件就永远躺在那里了。这是最典型的呆滞成因。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：ECN 闭环', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 变更联动。系统强控：工程变更（ECN）生效前，必须强制处置旧物料。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 呆滞预警。系统设置规则：超过 90 天没领用的物料，自动变黄灯。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 责任到人。呆滞产生了，谁下的单？谁改的图？追责扣钱。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ ECN 流程是否有“物料评审”环节？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 仓库是否定期（如每季度）提交呆滞料清单给老板？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：被遗忘的芯片', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某电子厂仓库角落里发现一箱芯片，价值 50 万。一查，是两年前的项目剩下的。当时项目取消了，销售忘了在系统里取消订单，采购就买了回来。因为没上系统，这箱货就一直没人管，直到 2 年后大扫除才发现。现在这芯片已经淘汰了，一文不值。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '仓库管理复盘。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 研发改图纸很随意 → THEN 呆滞风险极高', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 销售预测经常放卫星 → THEN 呆滞风险极高', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '产品迭代快的科技与制造企业', type: 'suitable' },
       { condition: '原材料通用的传统企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '呆滞料留着万一以后能用呢？', answer: '别幻想了。经验数据表明，呆滞超过 1 年的料，99% 的结局是当废品卖。早处理还能回笼点资金，腾出地方。' }
    ]
  },
  {
    title: '安全库存到底是“安全”还是“浪费”？',
    slug: 'safety-stock-insurance-or-waste',
    categorySlugs: ['supply-chain', 'digital-transformation'],
    tldr: '安全库存是保险。买保险要花钱，但不买保险可能破产（断货）。关键是找到那个平衡点：既能覆盖 95% 的需求波动，又不至于占用太多资金。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们的安全库存是怎么定出来的？拍脑袋？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么设了安全库存还是断货？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '能不能取消安全库存？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、计算逻辑', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '科学的安全库存 = 服务水平系数 × 需求波动标准差 × 补货周期。看不懂没关系，核心逻辑是：1. 需求波动越大，安全库存要越高；2. 供应商送货越慢，安全库存要越高；3. 你越想 100% 不缺货，代价就呈指数级上升。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：动态调整', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 区分 ABC 类。A 类（贵、重要）少备，通过加快补货来解决；C 类（便宜、不重要）多备，反正不值钱。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 系统计算。让 ERP 根据历史数据自动算出建议值。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 季节性调整。旺季前系统自动调高，淡季自动调低。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否每一类物料都有定义“采购前置期”（Lead Time）？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否每半年重新评估一次安全库存策略？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：海运的锅', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某进口商，通常设 15 天安全库存。结果遇上红海危机，海运周期从 30 天变成 60 天。系统如果没有及时更新 Lead Time 参数，还是按 15 天报警，结果就是断货 1 个月。上系统后，只要修改海运周期参数，安全库存水位自动上涨，提前触发采购建议。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '库存策略制定。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 客户容忍度低（断货就罚款） → THEN 高安全库存', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 供应商就在隔壁，送货只要 2 小时 → THEN 零库存（JIT）', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '需求波动大的行业', type: 'suitable' },
       { condition: '长周期采购（进口）', type: 'suitable' },
       { condition: '订单式生产（MTO），有单才买料', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'JIT（零库存）适合我们吗？', answer: 'JIT 的前提是你对供应商有极强的掌控力（如丰田）。大部分中小企业搞 JIT 就是找死，供应链一断就停产。老老实实备点安全库存吧。' }
    ]
  },
  {
    title: '供应商管理 (SRM)：除了杀价，还能管什么？',
    slug: 'supplier-relationship-management-beyond-price',
    categorySlugs: ['supply-chain', 'industry-insights'],
    tldr: '一味压榨供应商，最后得到的是“劣币驱逐良币”。SRM 系统要管的是供应商的“全生命周期”：从准入验厂，到绩效考核，再到优胜劣汰。建立透明的规则，比单纯杀价更重要。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '采购有没有吃回扣？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么供应商总是交货不准时？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么评价一个供应商的好坏？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、TCO（总体拥有成本）', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'A 供应商卖 10 块，B 供应商卖 11 块。选 A？如果 A 经常次品、经常迟交，导致你产线停工、客户退货，实际成本可能是 20 块。SRM 系统会记录每次迟交、每次退货，算出一个综合评分。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：透明化', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 在线协同。通过 SRM 门户，供应商自己上网接单、确认交期、打印标签。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 自动对账。入库单自动生成对账单，供应商确认后直接开票。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 绩效画像。系统每季度自动生成供应商计分卡（质量、交期、价格、服务）。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 采购与供应商的沟通是否都在系统留言（而不是微信）？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有明确的“黑名单”退出机制？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：协同的力量', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某车企，要求一级供应商必须上 SRM。供应商发货前，必须在系统里打印标准条码贴在箱子上。货车一到车企仓库，扫描枪一扫，秒级入库。以前要人工点数、核对半天，现在效率提升 10 倍。这就是上下游协同的价值。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '供应商数量众多的企业。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 采购员每天花 4 小时在电话催货 → THEN 需要 SRM', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 对账要对一周 → THEN 需要 SRM', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '制造业、连锁零售', type: 'suitable' },
       { condition: '单一供应商的特殊行业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '供应商不愿意用怎么办？', answer: '设门槛。想做生意就得按规矩来。同时给供应商好处：用了系统，对账快，回款快。' }
    ]
  },
  {
    title: '销售预测永远不准，还要不要做？',
    slug: 'sales-forecast-accuracy-dilemma',
    categorySlugs: ['supply-chain', 'digital-transformation'],
    tldr: '预测从来不是为了“准”，而是为了“共识”。做预测的过程，是销售部和生产部坐下来“讨价还价”的过程：如果卖多了，我产能怎么备？如果卖少了，库存谁负责？系统是固化这个博弈过程的工具。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '既然都不准，为什么还要浪费时间做？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '谁该为预测准确率负责？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么提高准确率？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、滚动预测', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '别指望能看清一年。能看清下个月就不错了。S&OP（销售与运营计划）会议的核心，就是每个月根据最新的市场情况，刷新未来 3 个月的预测。用不断的修正来逼近真相。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：S&OP', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 销售报数。销售必须在每月 25 号前在系统录入下月预测。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 计划平衡。生产看能不能做出来，采购看料够不够。有缺口就报警。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 老板拍板。针对供需矛盾（想卖但没货，或有货卖不掉），老板决定保哪个、弃哪个。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否建立了月度 S&OP 会议机制？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 预测准确率是否纳入了销售的考核（不仅仅是考核业绩）？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：拍脑袋的代价', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '老板觉得今年行情好，大手一挥让工厂按去年 2 倍备货。结果市场遇冷。仓库爆仓，资金链断裂。如果有 S&OP 流程，采购和财务会拿着数据告诉老板：按现在的现金流，最多只能备 1.2 倍的货。用数据约束冲动。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '供需平衡管理。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 备货型生产（MTS） → THEN 预测是命根子', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 订单型生产（MTO） → THEN 预测只要做长周期物料的', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '产销分离的企业', type: 'suitable' },
       { condition: '拿单再生产的小作坊', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '历史数据有参考价值吗？', answer: '有。系统可以通过算法剔除季节波动，给出基准预测。销售在这个基础上微调，比凭空捏造靠谱得多。' }
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
            keywords: '库存周转, 呆滞料, 安全库存, 供应商管理, 销售预测'
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
