import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '逆向物流：退货流程为什么比发货流程难 10 倍？',
  slug: 'reverse-logistics-nightmare',
  tldr: '发货是“标准流”，退货是“异常流”。B2B 企业的退货之痛在于：状态不可知、实物难匹配、财务难对账。建立规范的 RMA（退货授权）体系，结合 SN 码（序列号）全生命周期追踪，是破解逆向物流难题的唯一出路。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '逆向物流 (Reverse Logistics) 管理难点与 RMA 表单优化 | 泊冉软件',
    description: '客户退回来的货去哪了？如何区分良品、维修品和报废品？详解 B2B 逆向物流的标准作业流程（SOP）。',
  },
  atomicFAQs: [
    { "question": "什么是逆向物流（Reverse Logistics）？", "answer": "正向物流是产品从工厂到客户；逆向物流是产品从客户回到工厂。包括：客户退货、维修召回、包装回收、废旧品处理。" },
    { "question": "为什么逆向物流这么难？", "answer": "1. 渠道多（正向只有发货一个口，逆向有客户寄回、经销商带回、工程师现场取回）；2. 状态乱（发出去是新机，回来可能是坏的、旧的、不全的）；3. 预测难（你不知道明天会退回来多少）。" },
    { "question": "什么是 RMA（退货授权）？", "answer": "Return Merchandise Authorization。客户想退货，必须先申请 RMA 号码。没有这个号码的产品，仓库一律拒收。这叫“先授权，后寄回”。" },
    { "question": "退回来的货怎么处理？", "answer": "通常分三条路：1. Restocking（良品重新入库，直接再卖）；2. Refurbish（翻新维修，降级销售）；3. Scrap（报废拆解，卖废品）。" },
    { "question": "如何避免“假退货”？", "answer": "依靠 SN 码。收到退货时，扫描 SN 码。系统会校验：这台机器是不是我卖给你的？是不是还在保修期内？有没有被“调包”（外壳是真的，芯片被换了）。" },
    { "question": "财务对账为什么老对不上？", "answer": "因为“借贷方向”反了。正向是“应收账款”，逆向是“红字应收”或“应付账款”。而且经常涉及“换货补差价”，很多 ERP 处理不好这种复杂的逻辑。" },
    { "question": "逆向物流能外包吗？", "answer": "可以，但很难。正向物流（快递）已经很标准化了，但逆向物流涉及“检测”和“定级”。第三方很难判断这台机器修一下还能不能用，除非是非常专业的售后服务商。" },
    { "question": "怎么降低退货率？", "answer": "从源头抓起。如果退货原因是“发错货”，那就优化发货扫描流程；如果是“不懂怎么用”，那就优化说明书；如果是“质量差”，那就找研发部门。" },
    { "question": "备件库和退货库要分开吗？", "answer": "一定要物理隔离。绝不能把好坏件混在一起。一旦把坏件当成新备件发给了下一个急需维修的客户，就是重大事故。" },
    { "question": "泊冉的逆向物流方案支持移动端吗？", "answer": "支持。销售人员可以在手机上发起 RMA 申请并上传照片；仓库人员可以用手机扫描收货并拍照留底。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '退货处理流程树', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "收到退货 -> 外观质检：", "format": 1, "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'list',
          listType: 'bullet',
          children: [
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "完好无损 -> 良品库 -> 等待再次销售。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "有瑕疵/故障 -> 功能检测：", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          tag: 'ul'
        },
        {
          type: 'list',
          listType: 'bullet',
          children: [
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "  -> 可维修 -> 维修中心 -> 翻新库（备件）。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 1,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "  -> 不可维修 -> 拆解中心 -> 报废库。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 1,
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          tag: 'ul'
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1
    }
  },
  boundaries: [
    { "condition": "高价值、长周期的耐用品（工程机械、医疗设备）", "type": "suitable" },
    { "condition": "承诺无理由退换货的电商型 B2B 企业", "type": "suitable" },
    { "condition": "不支持退货的定制化产品（除非严重质量事故）", "type": "unsuitable" },
    { "condition": "低价值耗材（螺丝钉），运费比货值还贵，直接让客户扔了即可", "type": "unsuitable" }
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
              text: '很多老板只盯着“发货量”，却自动忽略“退货量”。直到年底盘点时，发现仓库角落里堆满了灰扑扑的纸箱，打开一看，全是这几年退回来的货，价值好几百万。这就是逆向物流管理的黑洞。',
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
          children: [{ "type": "text", "text": "为什么退货比发货难 10 倍？", "version": 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'list',
          listType: 'number',
          children: [
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "信息流是断的", "format": 1, "version": 1 },
                { "type": "text", "text": " — 发货时，ERP 里有明确的订单。退货时，经常是客户直接把东西寄回来，包裹里连张纸条都没有。仓库根本不知道这是谁退的、为什么要退。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "实物是乱的", "format": 1, "version": 1 },
                { "type": "text", "text": " — 客户寄回来的包装五花八门，有的缺配件，有的沾满油污。需要大量人工去拆包、鉴定。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "财务是晕的", "format": 1, "version": 1 },
                { "type": "text", "text": " — 是直接退款？还是抵扣下次货款？还是换货补差价？发票怎么红冲？这些逻辑在 ERP 里非常复杂。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 3
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          tag: 'ol',
          start: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "RMA：逆向物流的身份证", "version": 1 }],
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
              text: '管理混乱的根源在于“无序”。解决办法就是引入 RMA（退货授权）机制。',
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
            {
              type: "text",
              text: "规则很简单：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 任何退货必须先在系统申请 RMA 号。申请时必须填写 SN 码、故障现象、照片。客服审核通过后，客户打印 RMA 单贴在包装箱外。仓库只收贴了条码的包裹，其它的拒收。",
              "version": 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "案例：某医疗器械厂的“闭环管理”", "version": 1 }],
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
              "text": "背景：经常有医院把用坏的设备寄回来修，修好了发回去，但最后搞不清该收多少钱，导致大量未结坏账。",
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
              "text": "改进：泊冉为其搭建了售后云平台。医院在公众号上扫码报修 -> 申请 RMA -> 寄回。仓库收货扫描，系统自动关联到原始销售订单，判断是否在保修期。",
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
              "text": "流程：维修工程师拆机检测 -> 系统生成报价单 -> 推送给医院 -> 医院手机确认付款 -> 开始维修 -> 寄回。全流程可视化，坏账率降为 0。",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "逆向物流优化 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否强制执行“无 RMA 不收货”的纪律？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "仓库里是否划分了专门的“退货待检区”和“不良品库”？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了清晰的“退货分级标准”（A级充新、B级翻新、C级报废）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "退货数据（原因、频率）是否反馈给了研发和质量部门？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否定期（如每季度）清理报废库，释放仓储空间？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1,
          "tag": "ul",
          "start": 1
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
