'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

export type PainPoint = {
  icon?: MediaType | string | number
  title: string
  description: string
}

export type PainPointsBlockProps = {
  title: string
  points: PainPoint[]
  blockType: 'painPoints'
}

export const PainPointsBlock: React.FC<PainPointsBlockProps> = ({ title, points }) => {
  return (
    <div className="bg-gray-50 py-20 px-4 md:px-0">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points?.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                {point.icon && typeof point.icon === 'object' ? (
                  <Media
                    resource={point.icon}
                    className="w-8 h-8 object-contain transition-filter duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                  />
                ) : (
                  <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
