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
    [
      'link',
      {
        rel: 'me',
        href: 'https://burma.social/@psa'
      }
    ],
    [
      'script',
      {
        src: 'https://f.convertkit.com/ckjs/ck.5.js'
      }
    ],
  ],
  mpa: true,
  buildEnd: genFeed,
  sitemap: {
    hostname: 'https://pyaesoneaung.dev'
  }
})
