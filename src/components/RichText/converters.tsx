import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
} from '@payloadcms/richtext-lexical'
import React from 'react'

import type { CodeBlockProps } from '@/blocks/Code/Component'
import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

// We pass components in to avoid circular dependencies without using 'require'
type BlockComponent = React.ComponentType<Record<string, unknown>>

export const getBlockConverters = (components: {
  BannerBlock: BlockComponent
  CallToActionBlock: BlockComponent
  MediaBlock: BlockComponent
  CodeBlock: BlockComponent
}): JSXConvertersFunction<NodeTypes> => {
  const { BannerBlock, CallToActionBlock, MediaBlock, CodeBlock } = components

  return ({ defaultConverters: _defaultConverters }) => ({
    blocks: {
      banner: ({ node }) => {
        if (!BannerBlock) return null
        return <BannerBlock className="col-start-2 mb-4" {...node.fields} />
      },
      mediaBlock: ({ node }) => {
        if (!MediaBlock) return null
        return (
          <MediaBlock
            className="col-start-1 col-span-3"
            imgClassName="m-0"
            {...node.fields}
            captionClassName="mx-auto max-w-[48rem]"
            enableGutter={false}
            disableInnerContainer={true}
          />
        )
      },
      code: ({ node }) => {
        if (!CodeBlock) return null
        return <CodeBlock className="col-start-2" {...node.fields} />
      },
      cta: ({ node }) => {
        if (!CallToActionBlock) return null
        return <CallToActionBlock {...node.fields} />
      },
    },
  })
}
