# boran_raw_data_pack_v3

生成时间：2025-12-28 09:40:16

## 目录
- docs/pseo/raw_data/common/：通用事实库、约束、claims 与核验清单
- docs/pseo/raw_data/industry_packs/：行业补丁包
- docs/pseo/raw_data/pages/：页面级 raw_data（按关键词）
- docs/pseo/raw_data/pages_index.csv：页面索引
- docs/pseo/raw_data/field_dictionary.csv：字段说明
- docs/pseo/raw_data/how_to_prepare.md：数据准备说明

## 使用方式（配合你的 pSEO skills）
1) 先用 common/* 固化口径（尤其是 identity_anchor_text 与 constraints）。
2) 选 pages_index.csv 里的某个页面 json，作为 Step 3 Render 的 raw_data 输入。
3) 没有 UGC/截图时保持为空，渲染器必须走 fallback（不允许编造）。

## 注意
- 本包中的公司规模/客户/资质等条目默认 verify_required=true（待你审核确认）。
