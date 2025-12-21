'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

export type Metric = {
  label: string
  value: string
  suffix?: string
}

export type BenefitMetricsBlockProps = {
  title: string
  metrics: Metric[]
  blockType: 'benefitMetrics'
}

const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const spring = useSpring(0, { stiffness: 50, damping: 30 })
  const displayValue = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString()
  )

  const numericValue = parseFloat(value.replace(/,/g, ''))
  const isNumeric = !isNaN(numericValue)

  useEffect(() => {
    if (isNumeric && isInView) {
      spring.set(numericValue)
    }
  }, [isNumeric, isInView, spring, numericValue])

  if (!isNumeric) return <span>{value}</span>

  return <motion.span ref={ref}>{displayValue}</motion.span>
}

export const BenefitMetricsBlock: React.FC<BenefitMetricsBlockProps> = ({ title, metrics }) => {
  return (
    <div className="bg-[#002B5B] py-20 px-4 md:px-0 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 uppercase tracking-widest mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics?.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-4 flex justify-center items-baseline group-hover:text-red-400 transition-colors duration-300">
                <AnimatedNumber value={metric.value} />
                {metric.suffix && (
                  <span className="text-2xl md:text-3xl ml-1 text-blue-300 group-hover:text-white transition-colors duration-300">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="text-blue-100 text-lg font-medium max-w-[200px] mx-auto leading-tight">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
