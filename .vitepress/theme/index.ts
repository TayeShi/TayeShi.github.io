// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomHome from './CustomHome.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: CustomHome,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
