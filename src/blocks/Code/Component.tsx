import React from 'react'

import { Code } from './Component.client'

export type CodeBlockProps = {
  code: string
  language?: string
  type?: 'code-snippet' | 'raw-html'
  blockType: 'code'
}

type Props = CodeBlockProps & {
  className?: string
}

export const CodeBlock: React.FC<Props> = ({ className, code, language, type = 'code-snippet' }) => {
  if (type === 'raw-html') {
    return (
      <div
        className={[className, 'raw-html'].filter(Boolean).join(' ')}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    )
  }

  return (
    <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
      <Code code={code} language={language} />
    </div>
  )
}
