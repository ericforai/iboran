import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: 'MES 上了很重，不上很痛，到底怎么办？',
    slug: 'mes-implementation-dilemma',
    categorySlugs: ['manufacturing', 'digital-transformation', 'industry-insights'],
    tldr: 'MES (制造执行系统) 是车间的大脑。不上 MES，车间就是个黑箱，进度靠吼，质量靠猜。上了 MES，就要面临“数据采集”的巨大挑战。如果让工人一半时间在干活，一半时间在扫码，那就是失败的 MES。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'MES 到底能不能减人？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么上了系统工人很抵触？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '需要买多贵的设备？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、不要把 MES 做成“监工”', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多老板上 MES 是为了盯着工人干活（计件、防偷懒）。这完全搞反了。MES 的核心价值是“赋能”。告诉工人：下一个做啥（防错），图纸在哪（防呆），物料齐没齐（防停工）。如果你把 MES 变成了电子监工，工人有一百种方法搞死系统（比如把扫码枪“不小心”摔坏）。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：极简交互', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 自动采集。能用设备直接读数据的，绝不让人录。能用 RFID 自动感应的，绝不让人扫码。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 电子看板。把进度、良率直接投屏在产线头。让数据透明，形成“比学赶帮超”的氛围。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 质量追溯。出了问题，一键查出这批货是哪台设备、哪个工人、哪批料做出来的。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 工人操作系统的步骤是否在 3 步以内？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 现场网络（WiFi/5G）是否覆盖无死角？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：被扔掉的 PAD', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某厂给每个工位配了 PAD 报工。结果工人满手油污，屏幕划不动，还经常死机。最后 PAD 被工人扔在角落积灰。后来改成“脚踏式开工按钮”和“大屏显示”，工人踩一下就开始计时，再踩一下结束。简单粗暴，效果极好。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '生产现场管理。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 客户要求全流程追溯（如汽车、医疗） → THEN 必须上 MES', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 工艺极其简单（如组装圆珠笔） → THEN 没必要', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '离散制造、流程制造', type: 'suitable' },
       { condition: '手工作坊', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'MOM 和 MES 啥区别？', answer: 'MOM（制造运营管理）范围更大，包含了 MES、仓库、质量、设备维护等。MES 是核心。别纠结名词，看功能。' }
    ]
  },
  {
    title: '预测性维护：设备还没坏，为什么要修？',
    slug: 'predictive-maintenance-why-fix-if-not-broken',
    categorySlugs: ['manufacturing', 'products-tech'],
    tldr: '传统的“坏了再修”是救火，“定期保养”是浪费。预测性维护是“算命”。通过监测设备的声音、振动、温度，预测它什么时候会挂。在它挂掉前的 1 小时，优雅地把它停下来换个零件。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '装传感器要多少钱？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '真的能预测准吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '设备停机一小时损失多少钱？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、告别“过度保养”', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多企业为了怕坏，规定每周五停机保养。其实很多零件根本没坏，也被换掉了。这叫“过度医疗”。预测性维护就是“体检”，有病治病，没病干活。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：听诊器', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 加装传感器。重点监控电机振动、轴承温度、电流波动。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 建立模型。什么样的波形代表轴承要断了？训练 AI 模型。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 联动工单。监测到异常，自动通过 MES 给维修工派单：“3号机轴承磨损 80%，请在下班后更换。”', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否识别了全厂的“关键瓶颈设备”？（优先做这些）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 维修工是否会看数据分析报告？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：一根皮带救了一船货', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某港口吊机，传感器发现电机电流微弱异常。系统预警。维修工上去检查，发现皮带已经裂了 90%，马上就会断。如果没发现，吊机断裂会砸坏下面的集装箱，损失几百万。换根皮带只要 200 块。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '重资产、连续生产企业。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 设备一停，全线瘫痪 → THEN 必须上', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 我们有备用机 → THEN 坏了再修也行', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '电力、化工、精密加工', type: 'suitable' },
       { condition: '设备便宜且非瓶颈', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '老旧设备能改吗？', answer: '能。外挂传感器不需要改动设备内部电路。就像给老人戴个智能手环一样。' }
    ]
  },
  {
    title: '质量是检测出来的，还是生产出来的？',
    slug: 'quality-is-manufactured-not-inspected',
    categorySlugs: ['manufacturing', 'industry-insights'],
    tldr: '靠质检员去烂苹果里挑好苹果，是最笨的办法。质量管理的核心是 SPC（统计过程控制）。在烂苹果还没长出来之前，监测到土壤酸碱度的变化，从而防止烂苹果的产生。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么我们的废品率一直降不下来？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '多招几个质检员有用吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'SPC 系统能不能自动拦截不良品？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、预防胜于治疗', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '检测就像治病，不仅花钱，还痛苦。过程控制就像养生。SPC 通过监控生产过程中的参数（如温度、压力、尺寸），发现“趋势”。如果发现尺寸越来越偏大（虽然还在合格范围内），立刻停机调整。这时候，一个废品都没产生。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：防错 (Poka-yoke)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 关键特性识别。哪些参数决定了质量？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 在线检测与 SPC。机台直连系统，每生产一个，自动上传数据。CPK（工序能力指数）一降，红灯亮。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 设备互锁。SPC 报警，设备自动停止，不让工人继续生产。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 质检记录是写在纸上还是录入系统？（只有进系统才能分析）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 发生质量问题是否有关闭流程（8D报告）？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：消失的漏装风险', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某汽车零部件组装，以前经常漏装垫片。靠人眼看经常看漏。后来上了视觉检测系统，配合扭矩枪。如果没装垫片，扭矩枪根本都不转。这叫“想做错都难”。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '高质量要求行业。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 你的客户要求 100% 全检 → THEN 必须上自动化检测', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '大批量生产', type: 'suitable' },
       { condition: '艺术品制作', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'SPC 很难学吗？', answer: '逻辑有点难，但现在的 QMS 系统都封装好了。工人只需要看“红绿灯”，管理者看 CPK 报表就行。' }
    ]
  },
  {
    title: '数字孪生：是动画片还是生产力？',
    slug: 'digital-twin-hype-vs-reality',
    categorySlugs: ['manufacturing', 'products-tech', 'digital-transformation'],
    tldr: '如果数字孪生只是为了在大屏上展示一个酷炫的三维模型，那就是动画片。真正的数字孪生，是为了“低成本试错”。在虚拟世界里撞车，现实世界里才安全。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '做一个数字孪生要多少钱？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '除了好看，能帮我省钱吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '现在技术成熟了吗？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、不要为展厅买单', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多公司花几百万做个数字孪生，就是为了领导视察时好看。这叫“可视化”，不叫“孪生”。孪生的核心是“双向数据流动”和“仿真预测”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：仿真先行', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 产线布局仿真。新工厂建设前，先在电脑里摆一下设备。看会不会打架？物流是不是顺畅？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 工艺仿真。新产品试制，先模拟一下注塑过程，看会不会有气泡？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 实时联动。物理工厂报警，虚拟工厂同步变红，并模拟出最优解决方案。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 我们是否有 3D 数据基础（如 CAD 模型）？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是为了解决具体问题（如堵塞），还是为了展示？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：避开拥堵', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某物流中心，原计划投入 10 台 AGV（自动搬运车）。通过数字孪生仿真跑了一个月数据，发现 10 台车会造成严重的路径拥堵，效率反而不如 8 台。最后只买了 8 台，不仅省了钱，效率还最高。这就是仿真的价值。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '高昂的试错成本场景。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 建一个新工厂要几个亿 → THEN 必须做仿真', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只是挪动几张办公桌 → THEN 别折腾了', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '新工厂规划、高价值设备维护', type: 'suitable' },
       { condition: '小规模传统制造', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '我们可以只做大屏展示吗？', answer: '可以，那叫“数据可视化看板”，不叫数字孪生。说清楚需求，价格差个零。' }
    ]
  },
  {
    title: '精益生产 vs 大规模生产：矛盾吗？',
    slug: 'lean-vs-mass-production',
    categorySlugs: ['manufacturing', 'industry-insights'],
    tldr: '不矛盾。精益生产不是让你变慢，而是让你变得更“顺”。通过 SMED（快速换模）和单件流，实现“小批量、多批次”的连续流动。这是对抗市场不确定性的唯一解药。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们的订单越来越碎，单次生产量越来越少，怎么办？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '换线太浪费时间了，很难受。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '精益是不是就是省钱？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、库存是万恶之源', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '大规模生产依靠库存来缓冲。精益生产依靠“流动”来消除库存。库存掩盖了所有的问题（设备故障、质量不稳定、缺料）。当水位下降（库存减少），石头（问题）就露出来了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：缩短切换', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: SMED（一分钟换模）。把“内部时间”（停机换模）转化为“外部时间”（不停机准备）。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 单元化生产 (Cell)。打破长流水线，建立 U 型单元。一个人能管多台设备。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 拉动式生产 (Kanban)。后道工序要什么，前道工序做什么。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 换型时间是否记录并考核？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有专门的“模具快换小车”？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：F1 进站维修', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'SMED 的极致就是 F1 赛车进站。十几个人在 2 秒钟内换完 4 个轮胎。因为他们把所有工具都准备好了，所有动作都标准化了。工厂换模也一样，先把螺丝拧松这种事在停机前做好。把换模时间从 2 小时缩短到 10 分钟，就能接受更小的订单。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '多品种、小批量生产。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 客户频繁插单、改单 → THEN 必须精益', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '离散制造', type: 'suitable' },
       { condition: '连续化工生产（不需要换型）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '精益生产是不是不要 ERP 了？', answer: '错。精益是理顺流程，ERP 是固化流程。没有精益思想的 ERP 是垃圾进垃圾出。没有 ERP 的精益很难规模化复制。' }
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
            keywords: 'MES, 预测性维护, 质量管理, 数字孪生, 精益生产'
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
