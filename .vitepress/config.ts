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
    ['script', {
      async: '',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-ZQPYBNC3CY'
    }],
    ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-ZQPYBNC3CY');"]
  ],
  buildEnd: genFeed
})
