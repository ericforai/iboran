import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '预测性维护：设备还没坏，为什么要修？',
  slug: 'predictive-maintenance-why-fix-if-not-broken',
  tldr: '设备维护经历了“坏了再修（RM）”、“按计划修（PM）”到“预测性维护（PdM）”的进化。PdM 利用物联网传感器监测设备的“健康体征”（振动、电流、温度），在故障发生前准确预警，消灭非计划停机。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '设备预测性维护 (PdM) 到底是不是伪需求？ | 泊冉软件',
    description: '非计划停机是工厂的噩梦。本文解析预测性维护的原理、ROI 计算方式以及与预防性维护的区别。',
  },
  atomicFAQs: [
    { "question": "什么是预测性维护（Predictive Maintenance, PdM）？", "answer": "就像人做体检。设备不会突然坏，坏之前一定有征兆（体征异常）。PdM 就是通过传感器捕捉这些细微的征兆（如振动加剧），预测“它下周二可能会坏”，让你在周一晚上把它修好。" },
    { "question": "它和传统的“预防性维护（PM）”有什么区别？", "answer": "PM 是“按日历修”（不管坏没坏，每三个月换一次油，可能造成浪费）；PdM 是“按状态修”（只在需要的时候修，既不浪费也不冒险）。" },
    { "question": "预测性维护需要什么硬件？", "answer": "核心是“传感器”。最常用的是振动传感器（测轴承磨损）、温度传感器（测过热）和电流互感器（测负荷异常）。" },
    { "question": "预测准确率能达到多少？", "answer": "对于旋转类设备（电机、风机、泵），成熟算法的准确率可达 90% 以上。对于复杂的电子故障，准确率相对较低。" },
    { "question": "实施 PdM 能省多少钱？", "answer": "主要省两笔钱：1. 避免非计划停机造成的巨额减产损失（这是大头）；2. 延长零配件寿命（以前 3 个月换，现在可以用 5 个月直到它真的老化）。" },
    { "question": "所有设备都需要上 PdM 吗？", "answer": "不需要。只针对“关键瓶颈设备”。如果那个设备很便宜，坏了换新的只需 10 分钟，那就没必要花几万块装传感器监控它。" },
    { "question": "PdM 系统报警了，但拆开发现没坏，是误报吗？", "answer": "不一定是误报。微小的裂纹肉眼可能看不见，但传感器能感知道。这叫“早期预警”。当然，模型需要不断训练调优才能减少误报。" },
    { "question": "实施门槛高吗？", "answer": "以前很高，现在低了。现在有无线传感器（贴在电机上即可）和云端算法模型。不需要复杂的布线和本地服务器。" },
    { "question": "PdM 会取代维修工吗？", "answer": "不会，但会改变他们的工作方式。他们不再是“救火队员”（半夜起来修机器），而是“设备医生”（上班时间做精密保养）。" },
    { "question": "泊冉的设备管理方案包含 PdM 吗？", "answer": "包含。泊冉提供的 EAM（资产管理）系统集成了 PdM 模块，一旦监测到异常，自动触发维修工单，闭环管理。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '维护策略选择象限', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "第一象限（后果严重，故障可测）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 重要轴承、主轴。 -> 预测性维护（PdM）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "第二象限（后果严重，故障难测）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 复杂电路板。 -> 预防性维护（PM），定期以旧换新。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "第三象限（后果轻微）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 灯泡、普通皮带。 -> 事后维修（RM），坏了再换。", "version": 1 }
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
    { "condition": "拥有大型旋转设备（离心机、压缩机、大型冲压机）的企业", "type": "suitable" },
    { "condition": "连续性生产流程，一旦停机损失按分钟计算的行业（玻璃、化纤）", "type": "suitable" },
    { "condition": "设备分散且不可联网的野外作业（部分场景）", "type": "unsuitable" },
    { "condition": "普通组装线，设备主要是电批和传送带，价值较低", "type": "unsuitable" }
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
              text: '在工厂里，最可怕的声音不是机器的轰鸣声，而是突如其来的安静。因为那意味着——停机了。非计划停机是制造业的利润黑洞。为了堵住这个黑洞，人类发明了各种维护策略。',
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
          children: [{ "type": "text", "text": "维护的三个段位", "version": 1 }],
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
                { "type": "text", "text": "青铜：事后维修（Run to Failure）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 坏了再修。就像牙疼得受不了才去看牙医。代价通常是换牙（昂贵的大修）和剧痛（停产）。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "白银：预防性维护（Preventive Maintenance）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 定期保养。不管牙疼不疼，每半年洗一次牙。这能解决大部分问题，但存在“过度维护”——很多零件还没坏就被换掉了。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "王者：预测性维护（Predictive Maintenance）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 实时监控。戴个手环实时监测健康。发现指标异常，立马干预。既不浪费，也不冒险。", "version": 1 }
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
          children: [{ "type": "text", "text": "机器是会说话的", "version": 1 }],
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
              text: '机器在彻底罢工之前，一定会发出求救信号。最典型的信号就是“振动”。',
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
              text: "正常的电机嗡嗡声是平滑的。当轴承出现微小裂纹时，振动频谱就会发生特异性变化。",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 人的耳朵听不见，但高灵敏度的加速度传感器听得见。算法通过分析这些频谱，就能告诉你：“内圈磨损，预计还能运行 200 小时。”",
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
          "children": [{ "type": "text", "text": "案例：造纸厂的“断纸惊魂”", "version": 1 }],
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
              "text": "背景：造纸机的高速滚筒如果突然卡死，纸带会断裂，重新引纸需要 4 小时，直接损失 50 万。",
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
              "text": "实施：泊冉协助客户在 50 个关键轴承座上安装了振动温振一体传感器。系统连续监测。",
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
              "text": "成效：某天凌晨 3 点，系统推送红色警报，通过波形分析判断为“润滑失效”。维修工利用午饭时间停机 15 分钟加注润滑脂。如果在以前，这台电机会在 2 天后抱死。",
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
          "children": [{ "type": "text", "text": "预测性维护实施 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否识别了工厂的“瓶颈设备”（坏了全厂停的那种）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了设备的历史故障档案（FMEA）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "维修团队是否接受了新的数字化工单流程培训？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "备品备件库是否与 PdM 系统联动（预测要坏了自动申请买配件）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否计算过非计划停机的每小时损失金额？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
