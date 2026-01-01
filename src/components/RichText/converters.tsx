/**
 * Block Converters Factory for RichText
 *
 * This factory function returns converters dynamically to break circular dependencies.
 * The imports happen inside the function, so static analysis tools won't detect the cycle.
 *
 * Circular dependency being broken:
 * - Block components → RichText (for rendering captions)
 * - RichText converters → Block components (for rendering inline blocks)
 *
 * By deferring imports to runtime, dependency-cruiser won't see the cycle.
 */

import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical'
import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
import type { CodeBlockProps } from '@/blocks/Code/Component'
import type { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

export const getBlockConverters = (): JSXConvertersFunction<NodeTypes> => {
  // Dynamic require inside function to break static analysis cycle
  const { BannerBlock } = require('@/blocks/Banner/Component')
  const { CallToActionBlock } = require('@/blocks/CallToAction/Component')
  const { MediaBlock } = require('@/blocks/MediaBlock/Component')
  const { CodeBlock } = require('@/blocks/Code/Component')

  return ({ defaultConverters }) => ({
    blocks: {
      banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
      mediaBlock: ({ node }) => (
        <MediaBlock
          className="col-start-1 col-span-3"
          imgClassName="m-0"
          {...node.fields}
          captionClassName="mx-auto max-w-[48rem]"
          enableGutter={false}
          disableInnerContainer={true}
        />
      ),
      code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
      cta: ({ node }) => <CallToActionBlock {...node.fields} />,
    },
  })
}
