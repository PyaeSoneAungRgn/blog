import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://pyaesoneaung.dev`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'Pyae Sone Aung',
    description: 'Personal Blog',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: '${baseUrl}/logo.png',
    favicon: `${baseUrl}/favicon.ico`,
    copyright:
      'Copyright (c) 2020-present, Pyae Sone Aung'
  })

  const posts = await createContentLoader('posts/*.md', {
    excerpt: false,
    render: false
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html?.replaceAll('&ZeroWidthSpace;', ''),
      author: [
        {
          name: 'Pyae Sone Aung',
          link: 'https://twitter.com/psa1999'
        }
      ],
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
