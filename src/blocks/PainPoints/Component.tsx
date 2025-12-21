import React from 'react'

export type PainPoint = {
  icon?: any
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
    <div className="container py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {points?.map((point, index) => (
          <div key={index} className="p-6 border rounded-lg bg-white shadow-sm">
            {/* Icon placeholder */}
            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
