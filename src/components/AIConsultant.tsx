'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { MessageSquare, X, Send, Bot, Minimize2, Lightbulb, Sparkles, PhoneCall, Link as LinkIcon, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { aiService, ChatMessage } from '../utilities/aiService';
import { chatService } from '../utilities/chatService';
import { AIWidgetConfig, GroundingChunk } from '../types/ai';

interface AIConsultantProps {
  /** 机器人的配置信息（人设、欢迎语、建议等） */
  config: AIWidgetConfig;
  /** 是否默认展开 */
  defaultOpen?: boolean;
  /** 自定义类名 */
  className?: string;
}

// 主题颜色映射表
const THEMES = {
  red: {
    bg: 'bg-red-600',
    bgHover: 'hover:bg-red-700',
    text: 'text-red-600',
    textHover: 'group-hover:text-red-600',
    textDark: 'text-red-900',
    border: 'focus:border-red-600',
    ring: 'focus:ring-red-600/5',
    lightBg: 'bg-red-50',
    borderLight: 'border-red-100',
    shadow: 'shadow-red-200',
    shadowHover: 'hover:shadow-red-500/5',
    gradient: 'from-red-600/0 via-red-600/5 to-red-600/0',
    msgUser: 'bg-red-600',
    pulse: 'bg-red-400',
    subText: 'text-red-100',
    marker: 'text-red-600',
    blockquote: 'border-red-600',
    citationBg: 'bg-red-50/50',
    citationText: 'text-red-700'
  },
  blue: {
    bg: 'bg-blue-600',
    bgHover: 'hover:bg-blue-700',
    text: 'text-blue-600',
    textHover: 'group-hover:text-blue-600',
    textDark: 'text-blue-900',
    border: 'focus:border-blue-600',
    ring: 'focus:ring-blue-600/5',
    lightBg: 'bg-blue-50',
    borderLight: 'border-blue-100',
    shadow: 'shadow-blue-200',
    shadowHover: 'hover:shadow-blue-500/5',
    gradient: 'from-blue-600/0 via-blue-600/5 to-blue-600/0',
    msgUser: 'bg-blue-600',
    pulse: 'bg-blue-400',
    subText: 'text-blue-100',
    marker: 'text-blue-600',
    blockquote: 'border-blue-600',
    citationBg: 'bg-blue-50/50',
    citationText: 'text-blue-700'
  },
  indigo: {
    bg: 'bg-indigo-600',
    bgHover: 'hover:bg-indigo-700',
    text: 'text-indigo-600',
    textHover: 'group-hover:text-indigo-600',
    textDark: 'text-indigo-900',
    border: 'focus:border-indigo-600',
    ring: 'focus:ring-indigo-600/5',
    lightBg: 'bg-indigo-50',
    borderLight: 'border-indigo-100',
    shadow: 'shadow-indigo-200',
    shadowHover: 'hover:shadow-indigo-500/5',
    gradient: 'from-indigo-600/0 via-indigo-600/5 to-indigo-600/0',
    msgUser: 'bg-indigo-600',
    pulse: 'bg-indigo-400',
    subText: 'text-indigo-100',
    marker: 'text-indigo-600',
    blockquote: 'border-indigo-600',
    citationBg: 'bg-indigo-50/50',
    citationText: 'text-indigo-700'
  },
  emerald: {
    bg: 'bg-emerald-600',
    bgHover: 'hover:bg-emerald-700',
    text: 'text-emerald-600',
    textHover: 'group-hover:text-emerald-600',
    textDark: 'text-emerald-900',
    border: 'focus:border-emerald-600',
    ring: 'focus:ring-emerald-600/5',
    lightBg: 'bg-emerald-50',
    borderLight: 'border-emerald-100',
    shadow: 'shadow-emerald-200',
    shadowHover: 'hover:shadow-emerald-500/5',
    gradient: 'from-emerald-600/0 via-emerald-600/5 to-emerald-600/0',
    msgUser: 'bg-emerald-600',
    pulse: 'bg-emerald-400',
    subText: 'text-emerald-100',
    marker: 'text-emerald-600',
    blockquote: 'border-emerald-600',
    citationBg: 'bg-emerald-50/50',
    citationText: 'text-emerald-700'
  },
  orange: {
    bg: 'bg-orange-600',
    bgHover: 'hover:bg-orange-700',
    text: 'text-orange-600',
    textHover: 'group-hover:text-orange-600',
    textDark: 'text-orange-900',
    border: 'focus:border-orange-600',
    ring: 'focus:ring-orange-600/5',
    lightBg: 'bg-orange-50',
    borderLight: 'border-orange-100',
    shadow: 'shadow-orange-200',
    shadowHover: 'hover:shadow-orange-500/5',
    gradient: 'from-orange-600/0 via-orange-600/5 to-orange-600/0',
    msgUser: 'bg-orange-600',
    pulse: 'bg-orange-400',
    subText: 'text-orange-100',
    marker: 'text-orange-600',
    blockquote: 'border-orange-600',
    citationBg: 'bg-orange-50/50',
    citationText: 'text-orange-700'
  }
};

const HANDOFF_POLL_INTERVAL_MS = Math.max(
  2500,
  Number(process.env.NEXT_PUBLIC_HUMAN_HANDOFF_POLLING_MS || 1200),
);
const VISITOR_ID_KEY = 'chat-visitor-id-v2';

/**
 * Fetch a secure, server-signed visitor ID.
 * This prevents unauthorized access to conversations.
 */
const fetchSecureVisitorId = async (): Promise<string> => {
  try {
    const response = await fetch('/api/chat/visitor', {
      method: 'POST',
    })
    if (!response.ok) {
      throw new Error('Failed to get visitor ID')
    }
    const data = (await response.json()) as { visitorId: string }
    return data.visitorId
  } catch {
    // Fallback to a random ID (not ideal, but prevents total failure)
    return `fallback-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
  }
}

/**
 * Get or create a secure visitor ID.
 * Uses localStorage to cache the ID across sessions.
 */
const getOrCreateVisitorId = async (): Promise<string> => {
  if (typeof window === 'undefined') {
    return 'server-visitor'
  }

  // Try to get existing visitor ID from localStorage
  try {
    const existing = window.localStorage.getItem(VISITOR_ID_KEY)
    if (existing) {
      const parsed = JSON.parse(existing) as { visitorId: string; expiresAt: number }
      // Check if expired (30 days)
      if (parsed.expiresAt > Date.now()) {
        return parsed.visitorId
      }
      // Remove expired ID
      window.localStorage.removeItem(VISITOR_ID_KEY)
    }
  } catch {
    // Ignore invalid cache
  }

  // Fetch new visitor ID from server
  const visitorId = await fetchSecureVisitorId()
  const expiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 days

  try {
    window.localStorage.setItem(
      VISITOR_ID_KEY,
      JSON.stringify({ visitorId, expiresAt }),
    )
  } catch {
    // Ignore storage errors
  }

  return visitorId
}

const buildVisitorContext = async () => {
  if (typeof window === 'undefined') {
    return {
      visitorId: 'site-visitor',
      sourcePage: '/',
    };
  }

  const search = new URLSearchParams(window.location.search);
  const utmSource = search.get('utm_source')?.trim().toLowerCase();
  const referrerHost = (() => {
    if (!document.referrer) return '';
    try {
      return new URL(document.referrer).hostname.replace(/^www\./, '');
    } catch {
      return '';
    }
  })();
  const channel = utmSource || (referrerHost ? 'referral' : 'direct');

  const visitorId = await getOrCreateVisitorId()

  return {
    visitorId,
    sourcePage: `${window.location.pathname}${window.location.search} | channel=${channel}${referrerHost ? ` | ref=${referrerHost}` : ''}`,
  };
};

const AIConsultant: React.FC<AIConsultantProps> = ({ config, defaultOpen = false, className = '' }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHandoffLoading, setIsHandoffLoading] = useState(false);
  const [handoffStatus, setHandoffStatus] = useState<'none' | 'requested' | 'active' | 'closed'>('none');
  const [conversationId, setConversationId] = useState<string>();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const syncedServerMessageIds = useRef<Set<string>>(new Set());
  
  // 获取当前主题样式，默认为 red
  const t = THEMES[config.theme || 'red'];

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Sync with Tailwind lg breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const createClientMessageId = () => {
    return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  };

  const markMessageAsSent = useCallback((clientMessageId: string) => {
    setChatHistory((prev) =>
      prev.map((message) =>
        message.role === 'user' && message.clientMessageId === clientMessageId
          ? { ...message, deliveryStatus: 'sent' }
          : message,
      ),
    );
  }, []);

  const markLatestSentMessageAsRead = useCallback(() => {
    setChatHistory((prev) => {
      const next = [...prev];
      for (let i = next.length - 1; i >= 0; i -= 1) {
        const item = next[i];
        if (item.role === 'user' && item.deliveryStatus === 'sent') {
          next[i] = { ...item, deliveryStatus: 'read' };
          break;
        }
      }
      return next;
    });
  }, []);

  const applyServerMessages = useCallback((messages: { id: string; role: 'visitor' | 'ai' | 'agent' | 'system'; content: string }[]) => {
    const newMessages: ChatMessage[] = [];
    let hasAgentMessage = false;

    for (const message of messages) {
      if (syncedServerMessageIds.current.has(message.id)) continue;
      syncedServerMessageIds.current.add(message.id);

      if (message.role === 'agent') {
        hasAgentMessage = true;
        newMessages.push({
          role: 'model',
          parts: [{ text: `人工客服：${message.content}` }],
        });
        continue;
      }

      if (message.role === 'system' || message.role === 'ai') {
        newMessages.push({
          role: 'model',
          parts: [{ text: message.content }],
        });
      }
    }

    if (newMessages.length > 0) {
      setChatHistory(prev => [...prev, ...newMessages]);
      markLatestSentMessageAsRead();
    }

    if (hasAgentMessage) {
      setHandoffStatus('active');
    }
  }, [markLatestSentMessageAsRead]);

  const syncConversationMessages = useCallback(async (targetConversationId?: string) => {
    const id = targetConversationId || conversationId;
    if (!id) return;

    try {
      const visitorContext = await buildVisitorContext();
      const messages = await chatService.getConversationMessages(id, 80, visitorContext.visitorId);
      applyServerMessages(messages);
    } catch {
      // Silent fallback to avoid interrupting chat interaction.
    }
  }, [applyServerMessages, conversationId]);

  useEffect(() => {
    if (!scrollRef.current) return;
    const lastMessage = chatHistory[chatHistory.length - 1];
    const shouldStickToBottom = isLoading || lastMessage?.role === 'user';
    if (!shouldStickToBottom) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatHistory, isLoading]);

  useEffect(() => {
    if (!scrollRef.current || isLoading || chatHistory.length === 0) return;
    const lastIndex = chatHistory.length - 1;
    const lastMessage = chatHistory[lastIndex];
    if (lastMessage?.role !== 'model') return;

    const timer = window.setTimeout(() => {
      const selector = `[data-chat-role="model"][data-chat-index="${lastIndex}"]`;
      const target = scrollRef.current?.querySelector(selector) as HTMLElement | null;
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 20);

    return () => window.clearTimeout(timer);
  }, [chatHistory, isLoading]);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener('open-ai-consultant', handleOpen);
    return () => window.removeEventListener('open-ai-consultant', handleOpen);
  }, []);

  const handleSend = async (customText?: string) => {
    const messageToSend = customText || input;
    if (!messageToSend.trim() || isLoading) return;

    setInput('');

    // Check if this is a trigger event
    if (messageToSend.startsWith('trigger:')) {
      const eventName = messageToSend.split(':')[1];
      window.dispatchEvent(new CustomEvent(eventName, { detail: { source: 'ai-consultant' } }));
      setIsMinimized(true);
      return;
    }

    // Check if this is a suggestion with a pre-defined answer
    const suggestionWithAnswer = config.suggestions.find(s => s.query === messageToSend && s.answer);
    if (suggestionWithAnswer?.answer) {
      // Still add user message to history
      const clientMessageId = createClientMessageId();
      const newUserMessage: ChatMessage = {
        role: 'user',
        parts: [{ text: messageToSend }],
        clientMessageId,
      };
      setChatHistory(prev => [...prev, newUserMessage]);

      // Return pre-defined answer immediately without calling API
      setTimeout(() => {
        const assistantMessage: ChatMessage = {
          role: 'model',
          parts: [{ text: suggestionWithAnswer.answer! }]
        };
        setChatHistory(prev => [...prev, assistantMessage]);
      }, 300);
      return;
    }

    // Normal message flow
    const clientMessageId = createClientMessageId();
    const newUserMessage: ChatMessage = {
      role: 'user',
      parts: [{ text: messageToSend }],
      clientMessageId,
      deliveryStatus: 'sending',
    };

    setChatHistory(prev => [...prev, newUserMessage]);

    // Get visitor context and send message to server
    const visitorContext = await buildVisitorContext();

    void chatService.sendVisitorMessage({
      conversationId,
      visitorId: visitorContext.visitorId,
      sourcePage: visitorContext.sourcePage,
      content: messageToSend,
      clientMessageId,
    }).then((result) => {
      markMessageAsSent(clientMessageId);
      if (result.conversation?.id) {
        setConversationId(prev => prev || result.conversation?.id);
        void syncConversationMessages(result.conversation.id);
      }
      if (result.conversation?.handoffStatus) {
        setHandoffStatus(result.conversation.handoffStatus);
      }
    }).catch(() => {
      markMessageAsSent(clientMessageId);
      // Keep chat UX responsive even if persistence API is temporarily unavailable.
    });

    // Don't call AI if human is taking over
    if (handoffStatus === 'requested' || handoffStatus === 'active') {
      return;
    }

    setIsLoading(true);

    try {
      // Pass the specific System Instruction from config to the service
      const response = await aiService.getConsultantResponse([...chatHistory, newUserMessage], config.systemInstruction);

      const assistantMessage: ChatMessage = {
        role: 'model',
        parts: [{ text: response.text || '抱歉，暂时无法回复您的咨询。' }],
        groundingChunks: response.groundingChunks
      };

      setChatHistory(prev => [...prev, assistantMessage]);
    } catch {
      setChatHistory(prev => [...prev, {
        role: 'model',
        parts: [{ text: config.errorMessage }]
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestHuman = async () => {
    if (isHandoffLoading || handoffStatus === 'requested' || handoffStatus === 'active') return;

    setIsHandoffLoading(true);
    setHandoffStatus('requested');
    setChatHistory((prev) => [
      ...prev,
      {
        role: 'model',
        parts: [{ text: '已为你转人工，正在连接客服，请稍候。' }],
      },
    ]);
    const visitorContext = await buildVisitorContext();
    try {
      const response = await chatService.requestHandoff({
        conversationId,
        visitorId: visitorContext.visitorId,
        sourcePage: visitorContext.sourcePage,
      });

      if (response.conversation?.id) {
        setConversationId(response.conversation.id);
        void syncConversationMessages(response.conversation.id);
      }

    } catch {
      setHandoffStatus('none');
      setChatHistory(prev => [
        ...prev,
        {
          role: 'model',
          parts: [{ text: '转人工请求发送失败，请稍后重试。' }],
        },
      ]);
    } finally {
      setIsHandoffLoading(false);
    }
  };

  useEffect(() => {
    if (!conversationId || !isOpen) return;
    if (handoffStatus !== 'requested' && handoffStatus !== 'active') return;

    let unsubscribe: (() => void) | undefined;
    let timer: ReturnType<typeof setInterval> | undefined;

    const setupSubscription = async () => {
      void syncConversationMessages(conversationId);

      const visitorContext = await buildVisitorContext();
      unsubscribe = chatService.subscribeConversation(conversationId, visitorContext.visitorId, {
        onMessages: (messages) => {
          applyServerMessages(messages);
        },
      });

      timer = window.setInterval(() => {
        void syncConversationMessages(conversationId);
      }, Math.max(8000, Math.floor(HANDOFF_POLL_INTERVAL_MS * 3)));
    };

    void setupSubscription();

    return () => {
      if (timer) window.clearInterval(timer);
      if (unsubscribe) {
        try {
          unsubscribe();
        } catch (e) {
          console.warn('EventSource cleanup failed:', e);
        }
      }
    };
  }, [applyServerMessages, conversationId, handoffStatus, isOpen, syncConversationMessages]);

  // Memoize render components to prevent re-creation on every render
  // This keeps component identities stable and prevents remounting of all message subtrees
  const MarkdownRenderer = useMemo(() => {
    const MarkdownRendererComponent: React.FC<{ content: string }> = ({ content }) => {
    return (
      <div className="markdown-content">
        <ReactMarkdown
          components={{
            h3: ({ node: _node, ...props }) => (
              <h3 className="text-[15px] font-bold text-slate-900 mt-6 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2" {...props} />
            ),
            p: ({ node: _node, ...props }) => <p className="mb-4 last:mb-0 leading-relaxed text-slate-600" {...props} />,
            ul: ({ node: _node, ...props }) => <ul className="list-none pl-1 mb-4 space-y-3" {...props} />,
            ol: ({ node: _node, ...props }) => <ol className="list-decimal pl-5 mb-4 space-y-3" {...props} />,
            li: ({ node: _node, ...props }) => (
              <li className="flex gap-2 text-slate-600">
                <span className={`${t.marker} font-bold shrink-0`}>•</span>
                <span>{props.children}</span>
              </li>
            ),
            strong: ({ node: _node, ...props }) => (
              <strong className={`font-bold text-slate-900 ${t.lightBg} px-1.5 py-0.5 rounded border ${t.borderLight}/50`} {...props} />
            ),
            blockquote: ({ node: _node, ...props }) => (
              <blockquote className={`border-l-4 ${t.blockquote} pl-4 py-3 my-6 text-[13px] text-slate-700 bg-slate-50/80 rounded-r-2xl shadow-inner italic`} {...props} />
            ),
            a: ({ node: _node, ...props }) => {
              // Prevent XSS by validating href
              const href = props.href || '';
              const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
              const isSafe = safeProtocols.some(protocol => href.startsWith(protocol));

              if (!isSafe) {
                // Render as span with class instead of anchor for unsafe links
                return (
                  <span className={`${t.text} underline underline-offset-2 opacity-60`}>
                    {props.children}
                  </span>
                );
              }

              return (
                <a
                  className={`${t.text} underline underline-offset-2 hover:text-slate-900 transition-colors font-medium`}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              );
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  };
    MarkdownRendererComponent.displayName = 'MarkdownRenderer';
    return MarkdownRendererComponent;
  }, [t]);

  const SourcesDisplay = useMemo(() => {
    const SourcesDisplayComponent: React.FC<{ chunks: GroundingChunk[] }> = ({ chunks }) => {
    if (!chunks || chunks.length === 0) return null;

    const validChunks = chunks.filter((c) => c.web?.title || c.source);

    if (validChunks.length === 0) return null;

    return (
      <div className={`mt-4 pt-3 border-t ${t.borderLight} text-xs`}>
        <div className={`flex items-center gap-2 mb-2 ${t.textDark} font-bold opacity-80`}>
          <LinkIcon className="w-3 h-3" />
          <span>参考来源</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {validChunks.map((chunk, idx) => {
            const label = chunk.web?.title || chunk.source || `来源 ${idx + 1}`;
            const description = chunk.source || '';

            if (chunk.web?.uri) {
              return (
                <a
                  key={idx}
                  href={chunk.web.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={description}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${t.citationBg} ${t.citationText} hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm transition-all max-w-full`}
                >
                  <ExternalLink className="w-3 h-3 shrink-0" />
                  <span className="truncate max-w-[180px]">{label}</span>
                </a>
              );
            }

            return (
              <div
                key={idx}
                title={description}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${t.citationBg} ${t.citationText} border border-transparent max-w-full`}
              >
                <LinkIcon className="w-3 h-3 shrink-0" />
                <span className="truncate max-w-[220px]">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
    SourcesDisplayComponent.displayName = 'SourcesDisplay';
    return SourcesDisplayComponent;
}, [t]);

  if (!mounted) return null;

  // On mobile, if chat is not open, don't render anything at all
  if (isMobile && !isOpen) return null;

  return (
    <div className={`fixed ${isOpen && !isMinimized ? 'inset-0 sm:inset-auto sm:bottom-8 sm:right-8' : 'bottom-0 right-0 sm:right-8'} z-[9999] flex flex-col items-end p-4 sm:p-0 ${isOpen && !isMinimized ? 'bg-black/20 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none' : 'pointer-events-none'} ${className} font-sans text-base text-left antialiased box-border`}>
      {/* 聊天窗口 (Mobile & Desktop) */}
      {isOpen && !isMinimized && (
        <div className="w-[calc(100vw-2rem)] sm:w-[480px] h-[calc(100vh-140px)] sm:h-[calc(100vh-100px)] max-h-[720px] bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] border border-slate-100 flex flex-col mb-20 sm:mb-6 animate-in slide-in-from-bottom duration-500 overflow-hidden pointer-events-auto">
          {/* 头部 */}
          <div className={`p-5 sm:p-7 ${t.bg} flex items-center justify-between text-white shadow-lg relative overflow-hidden shrink-0`}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            
            <div className="flex items-center gap-3 sm:gap-4 relative z-10">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 shadow-inner group shrink-0">
                <Bot className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="font-bold text-lg sm:text-xl tracking-tight">{config.name}</div>
                <div className={`text-[10px] ${t.subText} flex items-center gap-2 font-bold uppercase tracking-[0.15em]`}>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                  {config.subTitle}
                </div>
              </div>
            </div>
            <div className="flex gap-1 sm:gap-2 relative z-10">
               <button onClick={() => setIsMinimized(true)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
                <Minimize2 className="w-5 h-5" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 顶部固定快捷问题 */}
          {config.suggestions.length > 0 && (
            <div className="shrink-0 border-b border-slate-100 bg-white/95 px-4 py-3 sm:px-7 sm:py-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                  快捷问题
                </span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {config.suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(s.query)}
                    className={`shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-left text-[12px] font-bold text-slate-700 transition-all hover:bg-white ${t.textHover}`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 消息区域 */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8 bg-[#FAFAFA] scroll-smooth">
            {chatHistory.length === 0 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="bg-white p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] border border-slate-100 text-slate-700 shadow-sm leading-relaxed relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-2 h-full ${t.bg}/10`}></div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${t.lightBg} rounded-xl flex items-center justify-center ${t.text}`}>
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <p className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">{config.welcomeTitle}</p>
                  </div>
                  
                  <div className="text-slate-500 mb-6 text-sm leading-loose">
                    <MarkdownRenderer content={config.welcomeMessage} />
                  </div>
                </div>
              </div>
            )}
            {chatHistory.map((m, i) => (
              <div
                key={m.clientMessageId || `msg-${m.role}-${i}`}
                data-chat-index={i}
                data-chat-role={m.role}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[95%] p-4 sm:p-6 rounded-[24px] sm:rounded-[28px] text-[14px] leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? `${t.msgUser} text-white rounded-tr-none font-medium` 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-slate-200/20'
                }`}>
                  {m.role === 'model' 
                    ? (
                        <>
                          <MarkdownRenderer content={m.parts[0].text} />
                          {m.groundingChunks && <SourcesDisplay chunks={m.groundingChunks} />}
                        </>
                      ) 
                    : m.parts[0].text}
                  {m.role === 'user' && m.deliveryStatus && (
                    <div className="mt-2 text-[11px] text-white/75 text-right">
                      {m.deliveryStatus === 'sending'
                        ? '发送中'
                        : m.deliveryStatus === 'sent'
                          ? '已送达'
                          : '已读'}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white p-6 rounded-[28px] shadow-sm border border-slate-100 rounded-tl-none flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <span className={`w-2.5 h-2.5 ${t.pulse} rounded-full animate-bounce`}></span>
                    <span className={`w-2.5 h-2.5 ${t.bg} rounded-full animate-bounce [animation-delay:0.2s]`}></span>
                    <span className={`w-2.5 h-2.5 ${t.textDark.replace('text', 'bg')} rounded-full animate-bounce [animation-delay:0.4s]`}></span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">AI 正在查阅资料...</span>
                </div>
              </div>
            )}
          </div>

          {/* 输入区域 */}
          <div className="p-5 sm:p-8 bg-white border-t border-slate-100 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.03)] relative z-10 shrink-0">
            {handoffStatus !== 'none' && (
              <div className={`mb-3 rounded-xl px-3 py-2 text-xs ${t.lightBg} ${t.textDark}`}>
                {handoffStatus === 'requested'
                  ? '人工客服接入中，当前由 AI 继续为你服务。'
                  : handoffStatus === 'active'
                    ? '人工客服已接入当前会话。'
                    : '本次人工会话已结束。'}
              </div>
            )}
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="输入您的咨询问题..."
                className={`w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 sm:py-5 pl-5 sm:pl-7 pr-16 focus:bg-white ${t.border} focus:ring-4 ${t.ring} transition-all text-[14px] sm:text-[15px] outline-none shadow-inner`}
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className={`absolute right-2 sm:right-3 p-3 sm:p-4 ${t.bg} text-white rounded-xl ${t.bgHover} active:scale-95 transition-all disabled:opacity-50 shadow-lg ${t.shadow}`}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className={`flex ${config.actionButton ? 'justify-between' : 'justify-end'} items-center mt-4 sm:mt-5 gap-3`}>
               <button
                 type="button"
                 onClick={handleRequestHuman}
                 disabled={isHandoffLoading || handoffStatus === 'requested' || handoffStatus === 'active'}
                 className={`text-[10px] sm:text-[11px] font-black px-3 py-1.5 rounded-full border transition-all ${
                   handoffStatus === 'requested' || handoffStatus === 'active'
                     ? 'text-slate-400 border-slate-200 cursor-not-allowed'
                     : `${t.text} border-current hover:bg-slate-50`
                 }`}
               >
                 {isHandoffLoading ? '提交中...' : handoffStatus === 'active' ? '人工已接入' : '转人工'}
               </button>
               <a
                 href="tel:4009955161"
                 className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] sm:text-[11px] font-black ${t.text} ${t.lightBg} border-current hover:bg-white transition-colors`}
               >
                 <PhoneCall className="h-3.5 w-3.5" />
                 <span>热线电话 400-9955-161</span>
               </a>
               {config.actionButton && (
                 <div className="flex items-center gap-2 group cursor-pointer active:scale-95 transition-all" onClick={() => {
                   if (config.actionButton?.command?.startsWith('trigger:')) {
                     const eventName = config.actionButton.command.split(':')[1];
                     window.dispatchEvent(new CustomEvent(eventName, { detail: { source: 'ai-consultant' } }));
                     setIsMinimized(true);
                   } else {
                     handleSend(config.actionButton!.command);
                   }
                 }}>
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   <span className={`text-[10px] sm:text-[11px] ${t.text} font-black hover:underline`}>
                     {config.actionButton.label}
                   </span>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}

      {/* 悬浮按钮 (仅在桌面端显示，移动端已由底栏取代) */}
      {(!isOpen || isMinimized) && (
        <button 
          onClick={() => {setIsOpen(true); setIsMinimized(false);}}
          className={`hidden lg:flex group items-center gap-3 sm:gap-4 bg-white p-2.5 pl-6 sm:pl-8 rounded-full shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-3 border ${t.borderLight} relative overflow-hidden pointer-events-auto mb-8`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${t.gradient} -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}></div>
          <div className="flex flex-col items-start pr-2 relative z-10">
             <span className={`text-[10px] sm:text-[11px] font-black ${t.text} uppercase tracking-[0.25em] mb-1 leading-none`}>AI Consultant</span>
             <span className={`text-[14px] sm:text-[16px] font-black text-slate-900 ${t.textHover} transition-colors tracking-tight`}>
              {config.name}
            </span>
          </div>
          <div className={`w-12 h-12 sm:w-16 sm:h-16 ${t.bg} rounded-full flex items-center justify-center text-white relative shadow-2xl group-hover:rotate-12 transition-transform`}>
            <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />
            <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 border-[3px] border-white rounded-full shadow-lg"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
