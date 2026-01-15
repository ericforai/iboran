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
      <div className={[className, 'raw-html-container'].filter(Boolean).join(' ')}>
        <style dangerouslySetInnerHTML={{ __html: `
          .raw-html-container img { max-width: 100%; height: auto; }
          .raw-html-container iframe { max-width: 100%; }
        `}} />
        <div
          className="w-full overflow-hidden"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>
    )
  }

  return (
    <div className={[className, 'not-prose container mx-auto my-8'].filter(Boolean).join(' ')}>
      <Code code={code} language={language} />
    </div>
  )
}
