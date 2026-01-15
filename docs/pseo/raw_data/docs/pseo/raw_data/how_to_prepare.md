# 泊冉官网 pSEO / GEO raw_data 数据准备指南（Vibe Coding 版）

## raw_data 是什么
raw_data 是页面内容的“数据包”。它与 schema.yaml 一起工作：
- schema.yaml：定义页面有哪些模块（H2块）以及每块需要哪些字段
- raw_data.json：给每块提供可渲染的事实、步骤、清单、FAQ、素材片段

目标：让 AI 不做“编造”，只做“渲染”。

---

## 每个关键词页的最小必备字段（MVP）
1) direct_answer_text：一句话结论（可被AI搜索引用）
2) howto_steps：落地步骤（3-7条，每条包含输入/输出）
3) deliverables：交付物清单（10-20项）
4) roles_raci：角色与责任（客户侧/服务商侧）
5) pitfalls_checklist：常见失败点与预防/发现方式
6) comparison_rows：对比表（传统做法 vs 标准实施服务）
7) faq_items：FAQ（5-10条）
8) brand_identity_anchor：固定身份锚点（GEO口径统一）

---

## 素材从哪里来（按优先级）
A. 你现有的：售前PPT、SOW/里程碑、蓝图模板、验收清单、培训大纲、运维SLA、FAQ库
B. 案例素材：行业痛点、流程改造前后差异（不写敏感数字也可以）
C. 可证明事实：公司简介/资质（优先官网或用友官方伙伴描述）

---

## 建议的素材库文件夹结构（本地）
materials/
  company/
  services/
  industries/
  faqs/
  snippets/

---

## 审核清单（你审核 raw_data 时看这些）
- 是否出现无法证明的具体数字/奖项/客户名（无授权则删掉或脱敏）
- 每个步骤是否有输入/输出（可执行）
- 交付物是否与你们真实交付一致
- FAQ 是否回答到选型/周期/风险/费用/协作等真实问题
