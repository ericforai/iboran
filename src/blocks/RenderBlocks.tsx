import React, { Fragment } from 'react'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { PainPointsBlock } from '@/blocks/PainPoints/Component'
import { MethodologyBlock } from '@/blocks/Methodology/Component'
import { BenefitMetricsBlock } from '@/blocks/BenefitMetrics/Component'
import { CodeBlock } from '@/blocks/Code/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  painPoints: PainPointsBlock,
  methodology: MethodologyBlock,
  benefitMetrics: BenefitMetricsBlock,
  code: CodeBlock,
}

type BlockType = keyof typeof blockComponents

export const RenderBlocks: React.FC<{
  blocks?: any[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          if (!block) return null

          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as BlockType]

            if (Block) {
              return (
                <div className={index === 0 ? 'mb-16' : 'my-16'} key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
