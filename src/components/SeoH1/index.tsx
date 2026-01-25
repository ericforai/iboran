import React from 'react'

type SeoH1Props = {
  title: string
  className?: string
}

const getSeoTitle = (title: string) =>
  title
    .split('|')[0]
    .split('｜')[0]
    .split(/\s[-—]\s/)[0]
    .trim()

export const SeoH1 = ({ title, className }: SeoH1Props) => {
  const cleaned = getSeoTitle(title)
  const classes = className ? `sr-only ${className}` : 'sr-only'
  return <h1 className={classes}>{cleaned || title}</h1>
}

export default SeoH1
