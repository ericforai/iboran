import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '审批流越复杂越好，还是越简单越好？',
    slug: 'approval-workflow-complexity',
    categorySlugs: ['manage-change', 'project-management', 'finance-management'],
    tldr: '审批流不是用来“防贼”的，是用来“授权”的。审批节点超过 5 个，效率就会呈指数级下降。本文教你如何用“金额分级”和“信用体系”来精简流程。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '老板是不是必须审每一笔钱？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么我们的审批流程要走半个月？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '能不能手机审批？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、审批的误区：连坐制', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多企业设置 8 个审批节点（主管、经理、总监、副总、财务、出纳、老板...），是因为谁都不敢担责。多一个人签字，就多一个人分锅。结果是：审的人根本不看内容，只看“前面的人签没签”。出了事，法不责众。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：分层授权', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Level 1: 部门经理审批。2000 元以下。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Level 2: 总监审批。2000-10000 元。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Level 3: 老板审批。10000 元以上。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 80% 的单据是否在 3 个节点内结束？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否启用了“超时自动同意”或“超时自动催办”？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：被一瓶水卡住的项目', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某工程公司，买一箱矿泉水都要走到副总审批。副总出差一周，工地没水喝，工人罢工半天。损失几万块。后来改革：5000 元以下项目经理说了算，事后财务抽查。如果发现违规，双倍罚款并计入征信。效率提升百倍。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '流程优化阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 老板每天花 2 小时签字 → THEN 授权机制失效', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 签字的人都不知道这笔钱是干嘛的 → THEN 流程失效', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '信任基础好的企业', type: 'suitable' },
       { condition: '管理成熟的职业经理人团队', type: 'suitable' },
       { condition: '充满猜疑的小作坊', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '放权了怎么监管？', answer: '事后审计。像抓醉驾一样，不查每辆车，但查到了就重罚。让大家不敢违规，而不是不能违规。' }
    ]
  },
  {
    title: '移动化报销：如何平衡“方便”与“合规”？',
    slug: 'mobile-expense-reimbursement',
    categorySlugs: ['financial-management', 'products-tech', 'industry-insights'],
    tldr: '手机拍发票很爽，但财务审核很惨。如果不能解决“电子发票查重验真”和“消费场景真实性核验”，移动报销就是合规的噩梦。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '能不能不贴发票了？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '同一张电子发票会不会被报销两次？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '滴滴、携程的单子能不能直接进系统？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、合规痛点：P 图高手', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '现在的 P 图技术，连财务老手都看不出真假。而且电子发票是可以无限打印的。如果不靠系统自动查重（连接国税接口），财务就是人肉验钞机，累死也防不住。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：发票电子化', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1:OCR 识别。手机拍照，自动识别发票代码、金额、日期。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 验真查重。后台自动调税局接口，验证发票真伪，检查是否重复报销。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 消费集成。直接对接滴滴企业版、携程商旅。员工根本碰不到发票，公司直接和平台结算。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 系统是否连接了商旅平台（TMC）？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 员工报销时是否需要手动输入金额？（最佳实践是不需要，全自动提取）', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：P 图被抓', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某公司上线费控系统后，第一周就抓住了 5 张假发票。系统提示“发票代码不存在”。员工辩称是打印不清，后来承认是改了日期（把去年的票拿到今年报）。系统比人眼毒。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '差旅报销频繁的企业。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 销售人员长期在外，贴发票耗时巨大 → THEN 必须移动化', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '全员用智能手机', type: 'suitable' },
       { condition: '销售驱动型公司', type: 'suitable' },
       { condition: '还在用翻盖手机的老国企', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '还需要打印出来贴在单子上吗？', answer: '看当地税局要求。目前大部分地区还是要求打印归档作为原始凭证（除非你上了电子会计档案系统）。' }
    ]
  },
  {
    title: '“电子会计档案”是不是伪需求？',
    slug: 'electronic-accounting-archives',
    categorySlugs: ['financial-management', 'digital-transformation'],
    tldr: '不是伪需求，是未来。存纸质凭证的成本（库房、人工、防火防潮）远高于电子存储。而且纸质档案检索极难。电子档案不仅省钱，更让数据“活”起来。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '电子档案法律认可吗？税局查账认吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '真的能做到 100% 无纸化吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '数据丢了怎么办？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、无纸化的最后一公里', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '财政部已经发文（会计档案管理办法），明确电子档案具有法律效力。只要符合“四性检测”（真实、完整、可用、安全），就不需要打印即归档。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否具备“四性检测”的系统能力？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 备份机制是否完善（异地容灾）？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、真实案例：消失的档案室', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某集团每年凭证 10 万本，租了 300 平米的地下室放档案，还要雇 2 个人专门管。每次审计来查账，翻箱倒柜找半天。上线电子档案后，档案室退租了，省了 50 万房租。审计查账，直接给个账号登录系统查，效率高了 10 倍。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '凭证量巨大的企业。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 每年为了装订凭证要买几万块的凭证纸和封面 → THEN 上电子档案', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '电商、零售等高频交易行业', type: 'suitable' },
       { condition: '业务量极少的小公司', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '还需要保管纸质发票吗？', answer: '如果是全电发票，完全不需要。如果是传统纸质发票，建议还是保留（虽然政策允许影像件，但实操中纸质原件还是最保险）。' }
    ]
  },
  {
    title: '还在用 Excel 做预算？你Out了',
    slug: 'excel-budgeting-nightmare',
    categorySlugs: ['financial-management', 'industry-insights'],
    tldr: 'Excel 的死穴是“版本混乱”和“无法协同”。10 个部门交上来 10 个版本的 Excel，财务光是合并表格就要脱层皮。而且 Excel 里的公式很容易被误删。预算系统解决的是“多版本管理”和“执行控制”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '系统做预算比 Excel 快吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '太复杂的预算模型系统能支持吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '能不能滚动预测？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、Excel 地狱', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '“销售预算_V1.xls”，“销售预算_V2_最终版.xls”，“销售预算_V3_打死不改版.xls”... 这种文件名你一定不陌生。每改一次，财务就要重新合并一次。而且没人知道 V2 和 V3 到底改了哪里。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：系统化', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 模板固化。在系统里定义好表格样式，谁也不能乱改行和列。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 流程驱动。填报 -> 审批 -> 汇总 -> 下达，全在系统里走。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 滚动预测。季末自动根据实际发生数，预测下季度的预算。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 系统是否支持 Excel 导入导出（照顾用户习惯）？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 修改历史是否可追溯（谁改的、改了什么）？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：被公式坑惨了', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某公司用 Excel 做预算，某个单元格的求和公式没有拉到底，漏算了 5 行数据。结果导致全年的利润预测虚高了 500 万。老板按这个预测去贷款，最后还不上了。系统不会犯这种低级错误。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '多部门协作预算。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只有财务部自己在编预算 → THEN Excel 够用了', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需要业务部门填报 → THEN 必须上系统', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '部门超过 5 个的企业', type: 'suitable' },
       { condition: '小微企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '系统太贵买不起怎么办？', answer: '现在的云预算（SaaS）很便宜，按年付费。几万块就能用起来。比养一个专门合并报表的会计便宜多了。' }
    ]
  },
  {
    title: '资金管理 (TMS)：如何让钱生钱？',
    slug: 'treasury-management-money-makes-money',
    categorySlugs: ['financial-management', 'finance-management', 'industry-insights'],
    tldr: '资金不仅是血液，也是资产。闲置的资金是浪费，断流的资金是致命。资金管理系统的核心是“可视”和“调度”。把分散在 100 个账户里的钱，聚成一个拳头。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我到底有多少钱？（为什么这个问题这么难回答？）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '下个月我会不会缺钱？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '银行的钱能不能少贷点？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、资金池模式', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '集团A公司账上有 1000 万闲着，B公司却在向银行借钱（付利息）。这是极大的浪费。建立资金池，让内部资金流动起来。A 借给 B，B 给 A 利息（肥水不流外人田）。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否实现了银企直连（在 ERP 里直接看银行余额）？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有每日资金日报表？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、真实案例：被遗忘的账户', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某集团清理账户时，发现一个 3 年前开设的临时账户里还有 500 万躺着睡觉。而集团总部还在以 6% 的利率借贷。上线资金系统后，所有账户实时监控，这种“灯下黑”再也没发生过。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '多账户、多子公司的集团。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 银行账户超过 20 个 → THEN 需要 TMS', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '现金流充沛但利用率低的集团', type: 'suitable' },
       { condition: '只有 1 个基本户的小公司', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '银企直连安全吗？', answer: '安全。用的是银行给的 U 盾和接口加密。本质上和你登网银一样，只是操作界面换成了 ERP。' }
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
            keywords: '审批流优化, 移动报销, 电子发票, 资金管理'
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
