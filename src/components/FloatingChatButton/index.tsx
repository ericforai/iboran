'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ConsultationModal } from '@/components/ConsultationModal'
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
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const { trackWeChatOpen } = useConversionTracking()

  const handleOpenModal = React.useCallback(() => {
    trackWeChatOpen('floating')
    setIsModalOpen(true)
  }, [trackWeChatOpen])
  const handleCloseModal = React.useCallback(() => setIsModalOpen(false), [])

  return (
    <>
      {!showOnMobile && (
        <div className="hidden lg:block fixed bottom-8 right-6 z-[60]">
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

      <ConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} data={contactData} />
    </>
  )
})

FloatingChatButton.displayName = 'FloatingChatButton'
