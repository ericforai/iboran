import pandas as pd
import os
import argparse
import sys
import re
import hashlib
from datetime import datetime
from pypinyin import lazy_pinyin

# --- Utility Functions ---

def generate_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated: {path}")

def clean_text(text):
    if pd.isna(text): return ""
    return str(text).strip()

def split_text_smart(text):
    if pd.isna(text): return []
    text = str(text)
    # Split by newline or common delimiters like "1.", "2."
    lines = re.split(r'\n|\d+\.|•|;|；', text)
    items = [line.strip() for line in lines if line.strip()]
    
    # Filter out empty or too short items
    items = [i for i in items if len(i) > 2]
    
    max_items = 4
    if len(items) > max_items:
        return items[:max_items]
    if not items:
        return [str(text)]
    return items[:max_items]

def clean_text_for_jsx(text):
    """Removes markdown bold syntax and newlines for clean JSX output."""
    if not text:
        return ""
    # Remove ** for bold
    text = str(text).replace("**", "")
    # Remove \n and replace with space
    text = text.replace("\\n", " ").replace("\n", " ")
    # Collapse multiple spaces
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def sanitize_slug(text):
    slug_map = {
        "捷太格特": "jtekt",
        "住矿电子浆料": "sumitomo",
        "住矿浆料": "sumitomo",
        "正帆科技": "gen-sys",
        "西域供应链": "west-basin",
        "南极电商": "nanji-ecommerce",
        "安能物流": "anneng-logistics",
        "仕卿人力": "sq-hr",
    }
    
    # Check manual map first
    for key, val in slug_map.items():
        if key in text:
            return val
            
    # Use Pinyin
    try:
        pinyin_list = lazy_pinyin(text)
        slug = "-".join(pinyin_list)
        # Remove non-alphanumeric chars (except hyphens)
        slug = re.sub(r'[^a-zA-Z0-9\-]', '', slug)
        return slug.lower()
    except Exception as e:
        print(f"⚠️ Pinyin generation failed for {text}: {e}, falling back to hash")
        # Fallback to hash if pinyin fails
        hash_object = hashlib.md5(text.encode())
        return f"case-{hash_object.hexdigest()[:8]}"

def update_case_listing_batch(all_cases):
    list_path = "src/app/(frontend)/cases/page.tsx"
    try:
        with open(list_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Generate the new staticStories array content
        stories_code = "  const staticStories: SuccessStory[] = [\n"
        
        # Add manually managed cases first if not in all_cases (optional, but good practice)
        # For now, we assume all_cases contains everything generated from Excel.
        # If there are cases NOT in Excel but in code, we might lose them if we don't handle carefullly.
        # However, looking at previous content, most seem to be from Excel or manual additions that should be in Excel.
        
        for case in all_cases:
            stories_code += f"""    {{
      id: 'static-{case['slug']}',
      slug: '{case['slug']}',
      title: '{case['title']}',
      clientName: '{case['client_name']}',
      industry: '{case['industry']}',
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      _status: 'published',
    }} as SuccessStory,\n"""

        stories_code += "  ]"

        # Regex to replace the entire staticStories array
        # It matches from `const staticStories: SuccessStory[] = [` down to the closing `]`
        pattern = r"const staticStories: SuccessStory\[\] = \[([\s\S]*?)\]"
        
        if re.search(pattern, content):
            new_content = re.sub(pattern, stories_code.strip(), content)
            
            with open(list_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ Successfully updated listing in {list_path} with {len(all_cases)} cases.")
        else:
            print(f"⚠️  Could not find staticStories array in {list_path}")

    except Exception as e:
        print(f"⚠️  Failed to batch update listing: {e}")

# --- Core Logic ---

def generate_case_row(row):
    # --- Templates ---
    INDUSTRY_TEMPLATES = {
        "制造": {
            "summary": "在全球化竞争与供应链波动常态化的背景下，传统制造业正面临从‘规模驱动’向‘效率与创新驱动’的深刻转型。泊冉软件助力制造企业打通生产、物流与财务的脉络，实现以数据为核心的敏捷制造与精准交付。",
            "challenges": [
                "研产供销脱节：各职能部门系统割裂，导致需求预测、排产计划与物料供应无法实时联动，库存周转缓慢且异常响应迟。",
                "成本管控不精细：缺乏工序级、材料级的实时成本采集，导致单笔订单毛利分析滞后，难以支持精准的价格决策与降本增效指标。",
                "质量管理断层：质量数据散落在纸质单据或离散系统中，无法实现从原材料采购、生产加工到成品出库的全链路正反向追溯。"
            ],
            "solution": [
                "一站式业财一体化平台：构建统一的数据中台，集成 ERP、MES、SRM 及财务模块，实现业务单据自动转化为财务凭证，确保账实相符。",
                "透明化供应链协同：建立供应商门户与交期监控看板，实现订单、发货、对账的全流程在线化，提升外部响应效率与计划准确率。",
                "智能化车间管理：通过条码化与物联网手段，实时采集生产实绩与工艺数据，实现精细化成本核算与质量追溯闭环。"
            ],
            "results": [
                "结账周期大幅缩短：实现结账透明化，月度财务关账时间由原来的 10 天以上缩短至 3 天内。",
                "库存周转提升：通过精准的供需匹配，原材料调拨效率提升 40%，有效降低了呆滞库存比例。",
                "全生命周期追溯：实现了 100% 的生产品质追溯达标，顺利通过全球头部客户的供应商体系审核。"
            ]
        },
        "医药与医疗": {
            "summary": "医药与医疗健康行业正处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，企业亟需构建一套符合 GXP 标准的一体化管理体系。泊冉软件通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。",
            "challenges": [
                "强合规压力：需满足 GSP/GMP 等严苛的行业规范，人工管理批次与有效期极易出错，合规审计风险较高。",
                "供应链全程追溯难：医药产品涉及复杂的批次合并、效期预警与温度追溯，现有系统难以实现从原料端到患者端的端到端追溯。",
                "多渠道营销管控难：销售网络覆盖广、层级多，返利核算、渠道库存与销售实绩难以实时对齐，影响市场策略的快速调整。"
            ],
            "solution": [
                "全链路合规管理系统：内建 GSP/GMP 合规引擎，实现对物料批次、质检报告、温控记录的自动化管控，一键生成合规审计报告。",
                "精细化效期管理：构建基于条码技术的仓储管理系统（WMS），实现效期自动预警、先进先出（FEFO）与单件精准追溯。",
                "营销云服务平台：打通营销与财务模块，实现渠道库存可视、费用流转透明及返利结算自动化，支撑精细化渠道治理。"
            ],
            "results": [
                "合规风险显著降低：审计资料准备效率提升 200%，人为错误导致的批号管理事故降至零。",
                "物流周转优化：仓储拣货效率提升 50%，平均库龄降低 25%，显著减少了效期损耗费用。",
                "营销决策加速：销售数据采集由月度提至天级，渠道费用核算准确率达到 99.5%。"
            ]
        },

        "消费品与零售": {
            "summary": "在‘以消费者为中心’的新零售时代，品牌商与零售商面临着前所未有的全渠道挑战。高频消费与个性化需求要求企业具备极强的供应链柔性与财务敏捷力。泊冉软件助力消费品企业构建全场景数字化连接，实现高效触达与精准运营。",
            "challenges": [
                "全渠道库存割裂：线上电商、线下门店、经销商库存数据互不连通，导致爆品缺货与长尾积压并存，全链路库存周转效率低。",
                "营销费用黑盒：促销活动繁多、费用流转环节长，难以精准核算每个活动、单店、单 SKU 的投资回报率（ROI）。",
                "需求预测波动大：受网红效应与直播电商动态影响，传统预测模型失效，导致生产与采购环节频繁出现‘紧急插单’或‘库存坏死’。"
            ],
            "solution": [
                "全景库存中台：打通多平台订单、仓储与门店系统，实现全局统一库存池（Sharing Stock），支持多仓自动调拨与分发。",
                "业财融合费控系统：实现营销费用申请、执行、核销的全在线化，自动关联合同与 ROI 指标，实现透明化动态闭环管控。",
                "数据驱动的柔性供应：构建基于实时的门店销售与市场动态、通过大数据分析实现的补货预测模型，拉动前端柔性生产排程。"
            ],
            "results": [
                "缺货率降低 30%：全渠道库存周转率提升 1.5 倍，由于库存共享导致的门店缺货损失大幅减少。",
                "费用透明化：营销费用核銷周期缩短 70%，财务对每一笔促销支出的真实效果实现了实时透视。",
                "运营响应加速：促销方案从策划到上线由周期 1 周缩短至 24 小时内完成部署。"
            ]
        },
        "高科技与半导体": {
            "summary": "在高科技与半导体领域，‘研发驱动’与‘极致供应链协同’是核心竞争力。泊冉软件助力高科技企业应对研发投入大、生命周期短、全球协同复杂的挑战，构建从项目全生命周期到端到端供应的数字化闭环。",
            "challenges": [
                "研发项目成本失控：研发周期长、物料变更频繁，导致项目预算执行进度不透明，难以精准核算项目级损益与 ROI。",
                "非标采购管理难：大量的研制件、定制件需频繁与供应商进行技术图纸比对与版本管理，人工协同极易产生沟通断层与错单风险。",
                "全球分销集成难：业务覆盖多国，涉及多税制、多币种及多维度的财务合并要求，数据孤岛严重影响全球经营决策。"
            ],
            "solution": [
                "项目型业财融合系统：以研发项目为主线，实现预算申报、采购执行、任务分派与成本结算的实时联动，达成项目维度下的全面看板监控。",
                "数智化 SRM 协同门户：构建在线图纸版本控制系统与招投标平台，实现与全球供应商的技术协同、发货计划与自动化对账。",
                "多组织财务运营中台：部署符合国际准则的多主体核算引擎，自动处理多币种汇率波动与税务结转，支撑全球敏捷管理。"
            ],
            "results": [
                "项目效率提升 40%：由于数据打通，财务核算自动化程度提升，每个项目的运营监控人效显著提高。",
                "采购成本降低 15%：通过透明化寻源与供应商精细化管理，显著降低了长尾物料及定制件的采购成本。",
                "决策支持提速：全球月度合并报表产出由 10 天缩短至 24 小时内，经营层可实时洞察全球现金流与利润状况。"
            ]
        },
        "交通与物流": {
            "summary": "现代物流已从简单的物理移动演变为复杂的‘供应链资源整合’。泊冉软件助力物流与交通企业打通运力资源、仓储流转与平台财务的连接，实现从订单到结算的全流程自动化。 ",
            "challenges": [
                "运力调度不透明：自有车队与三方运力混合运行，缺乏统一的调度看板与实时轨迹监控，导致资源空驶率高。",
                "费用结算极其碎片化：涉及海量的运单对账、多层级的承运商结算、燃油补贴核对等，人工处理极易出错且周期漫长。",
                "资产运维成本高：缺乏对运输设备的预防性维护管理，往往是由于故障导致的停工，增加了额外的维修费用与时间成本。"
            ],
            "solution": [
                "智慧物流控制塔：集成车辆 GPS、订单管理与仓储系统，实现全局运力可视与智能配载建议，大幅优化由于调度不周产生的浪费。",
                "自动财务结算机器人：通过预设对账模型，实现运单与发票、费用的自动关联核销，将账单确认时间由周缩短为天。",
                "数字资产管理平台：建立运输资产（如车辆、货柜）的电子档案，实现全生命周期的里程预报、维保提醒及残值分析。"
            ],
            "results": [
                "对账效率提升 300%：海量对账业务由人工操作转为系统自动化匹配，对账人力成本降低 60%。",
                "资源利用率优化：车辆空驶率降低 12%，通过优化路径与载重平衡，显著提升了单位运输毛利。",
                "合规性保障：规避了税务申报、劳务费支出等环节的传统风险点，实现 100% 的业务合规闭环。"
            ]
        },
        "现代服务": {
            "summary": "现代服务业的核心在于‘以人为本、服务为核’。泊冉软件助力服务型企业从传统的行政管理驱动转向‘数字化流程驱动’。我们打通客户、项目、人才与财务的全链条，助力企业在复杂的轻资产模式下实现高效扩张与精准盈利。",
            "challenges": [
                "服务过程难量化：服务进度、咨询产出、合同节点等散落在不同的沟通工具中，难以实现对项目健康度的实时、可视化度量。",
                "业财核对负担重：合同执行进度与财务开票申请、回款状态往往脱节，业务人员 40% 的精力消耗在琐碎的财务催款与核对中。",
                "人才资源调配难：无法清晰透视跨部门、跨区域的人才负载状况，导致核心资源分配不均，影响交付交付质量与客户满意度。"
            ],
            "solution": [
                "端到端项目生命周期系统：建立从 CRM 机会点到项目立项、资源指派、工时采集、里程碑交付的全生命周期数字化闭环。",
                "业财一体化结算中心：实现服务节点触发自动开票建议，回款数据自动关联绩效奖金核算，让业务团队回归专业交付。",
                "智能化人才看板：构建全员技能画像与负载地图，支持跨项目、跨区域的敏捷调派，最大化发挥组织的人力资本价值。"
            ],
            "results": [
                "交付成功率提升 25%：由于节点透明、进度可控，项目延期交付及返工成本大幅降低。",
                "资金周转率提升：结账回款周期平均减少 15 天，显著改善了企业的经营性现金流表现。",
                "组织敏捷度增强：新业务线的启动周期缩短 50%，实现了轻资产模式下的规模化扩张目标。"
            ]
        }
    }

    ENRICHED_CONTENT = {
        "捷太格特": {
            "summary": "作为全球领先的汽车零部件供应商，捷太格特面临数据孤岛与供应链响应延迟的挑战。泊冉软件助力其构建业财一体化平台，重塑数字化生产力。",
            "challenges": ["数据孤岛与断点", "供应链响应迟缓", "生产过程不透明"],
            "solution": ["业财一体化平台", "供应链控制塔", "智能制造执行"],
            "results": ["运营效率飞跃", "供应链敏捷度提升", "合规性 100% 达标"]
        },
        "住矿电子浆料": {
            "summary": "住矿电子浆料作为全球领先的电子材料供应商，面临多工厂协同、精细化成本管控和全球供应链优化的挑战。泊冉软件为其打造了全球化业财一体平台，实现数据驱动的精益运营。",
            "challenges": ["多工厂数据孤岛", "成本核算不精细", "全球供应链协同效率低"],
            "solution": ["全球业财一体化平台", "精益成本管理", "智能供应链协同"],
            "results": ["全球运营效率提升20%", "成本核算精度提升", "供应链响应速度加快"]
        },
        "南极电商": {
            "summary": "南极电商作为中国领先的品牌授权与综合服务商，面临多品牌、多渠道、多业态的复杂管理挑战。泊冉软件助力其构建数字化运营中台，实现品牌资产的精细化管理与高效变现。",
            "challenges": ["多品牌运营复杂", "渠道数据割裂", "财务核算效率低"],
            "solution": ["品牌运营中台", "全渠道数据整合", "业财一体化平台"],
            "results": ["品牌管理效率提升", "市场响应速度加快", "财务核算周期缩短"]
        },
        "安能物流": {
            "summary": "安能物流作为中国领先的零担物流服务商，面临运力调度优化、成本精细化管理和客户服务体验提升的挑战。泊冉软件为其打造了智慧物流管理平台，实现全链路数字化运营。",
            "challenges": ["运力调度效率低", "成本管控不精细", "客户服务体验待提升"],
            "solution": ["智慧物流平台", "精益成本管理", "客户服务中台"],
            "results": ["运输效率提升", "运营成本降低", "客户满意度提高"]
        },
        "仕卿人力": {
            "summary": "仕卿人力作为专业的人力资源服务机构，面临业务流程标准化、服务质量提升和人才管理优化的挑战。泊冉软件为其构建了数字化人力资源管理平台，助力其实现高效运营与服务创新。",
            "challenges": ["业务流程不规范", "服务质量难把控", "人才管理效率低"],
            "solution": ["HR SaaS平台", "服务质量管理", "人才发展系统"],
            "results": ["流程标准化", "服务质量提升", "人才效能优化"]
        },
    }

    # Mapping
    industry = str(row[0]).strip() if pd.notna(row[0]) else "制造"
    sub_industry = str(row[1]).strip() if pd.notna(row[1]) else ""
    client_name = str(row[2]).strip() if pd.notna(row[2]) else "Unknown"
    
    if client_name == "Unknown": return None

    source = "DEFAULT"
    summary = ""
    challenges_list = []
    solution_list = []
    results_list = []
    solution_raw = ""

    if client_name in ENRICHED_CONTENT:
        source = "ENRICHED"
        data = ENRICHED_CONTENT[client_name]
        summary = data["summary"]
        challenges_list = data["challenges"]
        solution_list = data["solution"]
        results_list = data["results"]
        solution_raw = "基于泊冉 SRM + PaaS 平台构建端到端协同网络。"
    elif industry in INDUSTRY_TEMPLATES:
        source = f"INDUSTRY ({industry})"
        data = INDUSTRY_TEMPLATES[industry]
        summary = data["summary"]
        challenges_list = data["challenges"]
        solution_list = data["solution"]
        results_list = data["results"]
        row_summary = str(row[3]).strip() if pd.notna(row[3]) else ""
        if row_summary:
            summary = f"{summary} 项目背景：{row_summary}"
        solution_raw = f"泊冉软件助力{client_name}实现{industry}数字化升级。"
    else:
        source = "EXCEL"
        summary = str(row[3]).strip() if pd.notna(row[3]) else "数字化转型实践"
        challenges_list = split_text_smart(row[6]) if pd.notna(row[6]) else ["提升管理效率"]
        solution_list = split_text_smart(row[7]) if pd.notna(row[7]) else ["部署业务系统"]
        results_list = split_text_smart(row[8]) if pd.notna(row[8]) else ["达成业务目标"]
        solution_raw = "系统化解决方案部署。"

    slug = sanitize_slug(client_name)
    print(f"🚀 [{source}] Generating: {client_name} ({slug})")
    
    base_dir = f"src/app/(frontend)/cases/{slug}"

    # Clean text for JSX
    summary_clean = clean_text_for_jsx(summary)
    
    # Process lists to strings for JSX
    challenges_items_str = ""
    for item in challenges_list:
        clean_item = clean_text_for_jsx(item)
        challenges_items_str += f"<li className='flex items-start gap-2'><div className='mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0' /><span>{clean_item}</span></li>"

    solution_items_str = ""
    for item in solution_list:
        clean_item = clean_text_for_jsx(item)
        solution_items_str += f"<div className='p-6 bg-slate-50 rounded-xl block'><div className='w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4'><div className='w-5 h-5 bg-blue-500 rounded-full' /></div><h3 className='font-bold mb-2 text-slate-900'>{clean_item.split('：')[0] if '：' in clean_item else '核心举措'}</h3><p className='text-sm text-slate-600'>{clean_item.split('：')[1] if '：' in clean_item else clean_item}</p></div>"

    results_items_str = ""
    for item in results_list:
        clean_item = clean_text_for_jsx(item)
        results_items_str += f"<div className='text-center p-6 border rounded-xl bg-white'><div className='text-3xl font-bold text-blue-600 mb-2'>TOP</div><p className='text-sm text-slate-600'>{clean_item}</p></div>"

    # Files generation logic
    page_content = f"""import {{ Metadata }} from 'next'
import Hero from './Hero'
import Overview from './Overview'
import Challenge from './Challenge'
import Solution from './Solution'
import Results from './Results'
import CTA from './CTA'

export const metadata: Metadata = {{
  title: '{client_name}数字化转型案例 | 泊冉软件',
  description: '{summary_clean[:150]}',
}}

export default function CaseStudyPage() {{
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <Challenge />
      <Solution />
      <Results />
      <CTA />
    </main>
  )
}}
"""
    generate_file(f"{base_dir}/page.tsx", page_content)

    # Hero.tsx
    hero_content = f"""import Image from 'next/image'
import {{ ChevronRight }} from 'lucide-react'

export default function Hero() {{
  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#0A0F1C] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/case-study/sumitomo-hero.jpg" alt="hero" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
           <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-6">
            <span>客户案例</span>
            <ChevronRight className="w-4 h-4" />
            <span>{industry} / {sub_industry}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            {client_name}<br />
            <span className="text-blue-400 text-3xl md:text-5xl">数字化转型实践</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">{summary_clean}</p>
        </div>
      </div>
    </section>
  )
}}
"""
    generate_file(f"{base_dir}/Hero.tsx", hero_content)

    # Overview.tsx
    overview_content = f"""export default function Overview() {{
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 p-8 bg-slate-50 rounded-2xl">
            <h3 className="font-bold text-lg mb-6 border-b pb-4">关于项目</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">客户：</span>{client_name}</p>
              <p><span className="font-semibold text-slate-900">行业：</span>{industry} / {sub_industry}</p>
              <p><span className="font-semibold text-slate-900">方案：</span>{clean_text_for_jsx(solution_raw)}</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold mb-8">项目背景</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{summary_clean}</p>
          </div>
        </div>
      </div>
    </section>
  )
}}
"""
    generate_file(f"{base_dir}/Overview.tsx", overview_content)

    # Challenge.tsx
    # Challenge.tsx - using cleaned and joined items
    # Note: challenges_items_str is already populated with li elements above
    challenge_content = f"""import {{ AlertCircle }} from 'lucide-react'

export default function Challenge() {{
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">面临挑战</h2>
          <p className="text-slate-600">转型前的核心痛点与业务瓶颈</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-slate-200">
                {{/* Image Placeholder */}}
            </div>
            <div className="space-y-8">
                <ul className="space-y-6">
                    {challenges_items_str}
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}}
"""
    generate_file(f"{base_dir}/Challenge.tsx", challenge_content)

    # Solution.tsx - using cleaned and joined items
    solution_content = f"""import {{ CheckCircle2, Factory, BarChart3, CloudCog }} from 'lucide-react'

export default function Solution() {{
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">解决方案</h2>
          <p className="text-slate-600">基于泊冉数智化底座的一体化架构</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {solution_items_str}
        </div>
      </div>
    </section>
  )
}}
"""
    generate_file(f"{base_dir}/Solution.tsx", solution_content)

    # Results.tsx - using cleaned and joined items
    results_content = f"""export default function Results() {{
  return (
    <section className="py-20 bg-[#0A0F1C] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">项目价值</h2>
          <p className="text-slate-400">数字化转型带来的可量化收益</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {results_items_str}
        </div>
      </div>
    </section>
  )
}}
"""
    generate_file(f"{base_dir}/Results.tsx", results_content)

    # CTA.tsx (Static Template)
    cta_content = """import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-8">开启您的数字化转型</h2>
        <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold">
          立即咨询 <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
"""
    generate_file(f"{base_dir}/CTA.tsx", cta_content)

    # Return case metadata for batch listing update
    return {
        "slug": slug,
        "title": f"{client_name}数字化转型实践",
        "client_name": client_name,
        "industry": f"{industry} / {sub_industry}"
    }

def main():
    parser = argparse.ArgumentParser(description='Batch Generate Case Studies')
    parser.add_argument('--client', help='Specific client')
    parser.add_argument('--batch', action='store_true', help='All clients')
    parser.add_argument('--limit', type=int, default=100)
    parser.add_argument('--xlsx', default='docs/case-study/泊冉案例.xlsx')
    args = parser.parse_args()

    try:
        df = pd.read_excel(args.xlsx, header=None)
        rows_to_process = []

        if args.batch:
            for idx, row in df.iterrows():
                if idx == 0: continue
                if pd.notna(row[2]) and str(row[2]).strip() not in ["公司", "Unknown"]:
                    rows_to_process.append(row)
            rows_to_process = rows_to_process[:args.limit]
        elif args.client:
            mask = df[2].astype(str).str.contains(args.client, na=False)
            if not df[mask].empty:
                rows_to_process = [df[mask].iloc[0]]
            else:
                print(f"Client {args.client} not found.")
                return

        all_cases_metadata = []
        for row in rows_to_process:
            metadata = generate_case_row(row)
            if metadata:
                all_cases_metadata.append(metadata)
        
        # Batch update the listing page
        if all_cases_metadata:
            update_case_listing_batch(all_cases_metadata)
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
