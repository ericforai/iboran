'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

export type Step = {
  title: string
  description: string
  image?: MediaType | string | number
}

export type MethodologyBlockProps = {
  title: string
  steps: Step[]
  blockType: 'methodology'
}

export const MethodologyBlock: React.FC<MethodologyBlockProps> = ({ title, steps }) => {
  return (
    <div className="bg-white py-24 px-4 md:px-0">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>

          <div className="space-y-24">
            {steps?.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12 md:gap-24`}
              >
                <div className="flex-1 w-full text-center md:text-left">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-6 shadow-lg shadow-blue-200`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden shadow-xl shadow-gray-100 border border-gray-100 group">
                    {step.image && typeof step.image === 'object' ? (
                      <Media
                        resource={step.image}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg
                          className="w-16 h-16 opacity-20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
