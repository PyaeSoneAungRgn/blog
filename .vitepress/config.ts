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
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/leaflet/dist/leaflet.css'
      }
    ],
    [
      'script',
      {
        src: 'https://unpkg.com/leaflet/dist/leaflet.js'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3'
      }
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3'
      }
    ],
    [
      'script',
      {
        src: '/custom.js'
      }
    ],
    [
      'script',
      {
        src: '/map.js'
      }
    ],
  ],
  mpa: true,
  buildEnd: genFeed,
  sitemap: {
    hostname: 'https://pyaesoneaung.dev'
  }
})
