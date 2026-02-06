export interface AISuggestion {
  title: string;
  desc: string;
  query: string;
  answer?: string; // 可选的预设答案，存在时点击直接显示不调用 API
}

export interface AIWidgetConfig {
  /** 
   * 主题色配置 
   * @default 'red'
   */
  theme?: 'red' | 'blue' | 'indigo' | 'emerald' | 'orange';
  
  /** 机器人名称 */
  name: string;
  /** 机器人副标题/状态 */
  subTitle: string;
  /** 核心系统提示词 (AI的大脑) */
  systemInstruction: string;
  /** 欢迎卡片标题 */
  welcomeTitle: string;
  /** 欢迎卡片内容 (支持 Markdown) */
  welcomeMessage: string;
  /** 快捷提问建议 */
  suggestions: AISuggestion[];
  /** 错误时的兜底回复 */
  errorMessage: string;
  /** 底部行动点配置 */
  actionButton?: {
    label: string;
    command: string; // 点击后发送的指令
  };
}

/** Google Search Grounding 来源数据结构 */
export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  source?: string;
  excerpt?: string;
}
