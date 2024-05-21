<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'
import Custom from './Custom.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="antialiased dark:bg-slate-900">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="Pyae Sone Aung">
          <img class="inline-block mr-2 rounded-full" style="width: 36px; height: 36px" alt="logo" src="/logo.png" />
          <span v-if="!frontmatter.index" class="hidden md:inline dark:text-white">Pyae Sone Aung</span>
        </a>
        <div class="text-sm text-gray-500 dark:text-white leading-5">
          <a class="hover:text-gray-700 dark:hover:text-gray-200" href="/about">About</a>
          <span class="mr-2 ml-2">·</span>
          <a class="hover:text-gray-700 dark:hover:text-gray-200" href="/books">Books</a>
          <span class="mr-2 ml-2">·</span>
          <a class="hover:text-gray-700 dark:hover:text-gray-200" href="https://github.com/PyaeSoneAungRgn"
            target="_blank">Github</a>
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Custom v-else-if="frontmatter.custom" />
      <Article v-else />
    </main>
  </div>
</template>
