<script setup>
import DefaultTheme from 'vitepress/theme'
import HomeLayout from './HomeLayout.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout === 'home'" class="custom-home-wrapper">
    <HomeLayout />
  </div>
  <DefaultTheme.Layout v-else />
</template>

<style scoped>
.custom-home-wrapper {
  min-height: calc(100vh - var(--vp-nav-height));
}
</style>
