import React from 'react'

export type Step = {
  title: string
  description: string
  image?: any
}

export type MethodologyBlockProps = {
  title: string
  steps: Step[]
  blockType: 'methodology'
}

export const MethodologyBlock: React.FC<MethodologyBlockProps> = ({ title, steps }) => {
  return (
    <div className="container py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
      <div className="space-y-12">
        {steps?.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-blue-600 font-bold text-5xl mb-4 block">0{index + 1}</span>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg text-gray-600">{step.description}</p>
            </div>
            <div className="flex-1 w-full bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              {/* Image placeholder */}
              <span className="text-gray-400">Step Image Placeholder</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
