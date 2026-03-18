// Input: useConversionTracking hook, Contact global data
// Output: 悬浮聊天按钮，跟踪微信咨询打开转化
// Pos: components/FloatingChatButton - 悬浮按钮组件
// 一旦我被更新，务必更新我的开头注释，以及所属的文件夹的 md。
'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Contact } from '@/payload-types'
import { useConversionTracking } from '@/hooks/useConversionTracking'

interface FloatingChatButtonProps {
  contactData?: Contact
  showOnMobile?: boolean
}

export const FloatingChatButton: React.FC<FloatingChatButtonProps> = React.memo(({
  contactData,
  showOnMobile = false,
}) => {
  const { trackWeChatOpen } = useConversionTracking()

  const handleOpenModal = React.useCallback(() => {
    trackWeChatOpen('floating')
    // Prefer the in-page consultation widget when available.
    const selectors = ['#nb_icon_wrap', '.nb-icon-inner-wrap', '#lxb-container-icon', '.lxb-container'];
    let triggered = false;
    for (const selector of selectors) {
        const el = document.querySelector(selector) as HTMLElement;
        if (el) {
            el.click();
            triggered = true;
            break;
        }
    }
    if (!triggered) {
        window.open('https://affim.baidu.com/unique_52771578/chat?siteId=22949567&userId=52771578&siteToken=aac20df95e015006d1b11e4bd6e64a83', '_blank');
    }
  }, [trackWeChatOpen])

  return (
    <>
      {!showOnMobile && (
        <div className="hidden lg:block fixed bottom-8 right-6 z-[110]">
          <AnimatePresence>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={handleOpenModal}
              className="group relative flex items-center gap-3 px-5 py-3 bg-[#0052D9] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium text-sm">企业项目顾问</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </motion.button>
          </AnimatePresence>
        </div>
      )}
    </>
  )
})

FloatingChatButton.displayName = 'FloatingChatButton'
