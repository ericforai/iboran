# Utility Skill — Near-Duplicate Detector（防同质化）

## Purpose
批量页面生成后，检测近重复：
- 相似度过高的页面对
- 高复用段落位置

## Input
- pages: list[{id, markdown_text}]
- threshold: float (default 0.85)

## Output
{
  "pairs": [
    {"a":"row12","b":"row57","similarity":0.91,"suspect_sections":["FAQ","Comparison"]}
  ],
  "recommendations": [
    "为每个行业包补充 2 条行业特有闭环与 3 条行业FAQ"
  ]
}
