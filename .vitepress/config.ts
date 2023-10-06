import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Pyae Sone Aung',
  description: 'Personal Blog',
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
  ],
  buildEnd: genFeed
})
