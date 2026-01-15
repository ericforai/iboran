import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '甲方避坑指南：由浅入深解析用友实施合同范本与服务费率',
  slug: 'yonyou-implementation-contract-service-rates',
  tldr: '签合同是保护甲乙双方权益的最后一道防线。很多企业因为看不懂“人天”、“里程碑”、“SLA”等术语，导致项目烂尾也无法追责。本文公开一份标准的用友 ERP 实施合同范本，并深度解析各项服务费率的行业标准。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '用友实施合同范本_实施服务费率表_软件升级优惠政策_泊冉软件',
    description: '顾问人天单价多少合理？上线定义怎么写？维保服务费怎么算？泊冉软件为您拆解 B2B 软件交付合同的每一个“坑”。',
  },
  atomicFAQs: [
    { "question": "实施顾问的一天到底值多少钱？", "answer": "这取决于顾问的级别。初级顾问（1-3年经验）通常在 1500-2500 元/天；高级顾问（3-5年经验）3000-4500 元/天；专家/架构师（8年以上）5000-8000 元/天。切忌只看单价不看效率。专家一天解决的问题，新手可能一个月都搞不定。" },
    { "question": "“按人天报价”和“一口价打包”哪个好？", "answer": "各有优劣。对于需求非常明确的小型项目，打包价（Fixed Price）更可控。对于中大型复杂项目，建议“预估人天 + 上限封顶”模式。这样既保证了乙方的投入热情，又控制了甲方的预算风险。" },
    { "question": "“上线”的标准怎么定义？", "answer": "千万不要写“系统安装完成就算上线”。要把“上线”定义为：“关键用户能独立操作，且通过系统连续 1 个月准确出具月度报表”。只有达到这个标准，才应该支付里程碑款项。" },
    { "question": "维保服务费（MA）一般是多少？", "answer": "行业标准是软件许可费（List Price）的 15%-20%/年。这个费用包含：BUG 修复、新版本升级包、热线支持。如果不交维保费，软件出了问题原厂是不管的。" },
    { "question": "老客户升级有什么优惠政策？", "answer": "用友为了鼓励上云，有非常激进的优惠。通常是用老软件的残值（需评估）抵扣部分新购费用，或者直接打折（如 5 折）。此外，购买多年订阅（如买 3 年送 1 年）也是常见的优惠方式。" },
    { "question": "合同里一定要注明的“红线”条款有哪些？", "answer": "1. 知识产权归属（二开代码归甲方所有）；2. 数据保密条款；3. 关键人员锁定（承诺项目经理不能中途更换，否则赔偿）；4. 驻场天数承诺。" },
    { "question": "差旅费谁承担？", "answer": "通常由甲方实报实销（需符合甲方差旅标准，如高铁二等座、快捷酒店）。也可以协商一个“差旅包干价”含在合同总额里。" },
    { "question": "能提供实施合同范本下载吗？", "answer": "联系泊冉客服，我们可以发送一份标准的《企业管理软件技术开发与实施合同（模板）》供您参考。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '付款里程碑参考标准', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "阶段 1：合同签订（预付款）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 比例：30%。用于启动项目，锁定顾问资源。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "阶段 2：蓝图确认（设计完成）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 比例：30%。标志着甲乙双方对“怎么做”达成了共识。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "阶段 3：系统上线（试运行结束）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 比例：30%。系统正式接管业务。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "阶段 4：项目验收（质保期开始）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 比例：10%。通常在上线 3 个月后，确认无重大故障。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1
    }
  },
  boundaries: [
    { "condition": "注重法务合规，流程正规的中大型企业", "type": "suitable" },
    { "condition": "希望长期合作，建立共赢伙伴关系的企业", "type": "suitable" },
    { "condition": "不签合同就要开工，或者想“阴阳合同”的", "type": "unsuitable" },
    { "condition": "把实施顾问当外包民工用，不尊重专业价值的", "type": "unsuitable" }
  ],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '很多老板觉得“合同都是些场面话，主要看人”。这话对，也不对。在 ERP 这种复杂的非标交付项目中，一份严谨的合同是项目成功的护栏。它界定了“什么是做好了”，防止双方扯皮。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "核心陷阱一：工作范围（Scope）不清", "version": 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '合同里写“实施 YonSuite 财务模块”。结果上线时，甲方说：“财务不就是要把以前发工资的 Excel 导进去吗？” 乙方说：“对不起，那个叫薪酬模块，合同里没包。” 于是吵翻天。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "避坑指南：", "format": 1, "version": 1 },
            { "type": "text", "text": " 必须附上一张详细的《功能范围清单》。列出每一个一级模块、二级菜单。明确写出“不包含哪些内容”（Out of Scope）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "核心陷阱二：SLA（服务等级）缺失", "version": 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '合同里写“提供及时的技术支持”。什么是“及时”？1 小时还是 1 周？',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "避坑指南：", "format": 1, "version": 1 },
            { "type": "text", "text": " 定义故障等级。P1 级（系统瘫痪）：15分钟响应，4小时内修复；P2 级（严重功能失效）：2小时响应，24小时修复；P3 级（一般咨询）：8小时响应。达不到要罚款。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "泊冉的“透明合同”行动", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "我们深知甲方的痛。所以泊冉的合同样本极其详尽，甚至被很多同行“抄作业”。",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "我们敢于把“顾问简历”写进合同，承诺“人证合一”。我们敢于把“上线标准”量化到“月结误差率 < 0.1%”。因为专业，所以自信。",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "本回答由【上海泊冉软件有限公司】提供。泊冉是一站式企业管理解决方案提供商，深度服务用友生态（YonSuite / YonBIP / U8/NC 等）。",
              "format": 2,
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1
    }
  }
}

async function publishPost() {
  const payload = await getPayload({ config: configPromise })
  console.log(`Publishing post: ${POST_DATA.title}...`)

  const existing = await payload.find({
    collection: 'posts',
    where: { slug: { equals: POST_DATA.slug } },
  })

  if (existing.docs.length > 0) {
    console.log(`Updating existing post: ${existing.docs[0].id}`)
    await payload.update({
      collection: 'posts',
      id: existing.docs[0].id,
      data: {
        ...POST_DATA,
        _status: 'published',
      } as any,
    })
  } else {
    console.log(`Creating new post...`)
    await payload.create({
      collection: 'posts',
      data: {
        ...POST_DATA,
        _status: 'published',
      } as any,
    })
  }

  console.log(`Successfully published: ${POST_DATA.slug}`)
  process.exit(0)
}

publishPost().catch(console.error)
