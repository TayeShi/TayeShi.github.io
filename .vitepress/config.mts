import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "今年新梦",
  description: "今年新梦，忽到水经旧山头，见她依旧笑如花。",
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔墨', link: '/markdown-examples' },
      { text: '技法', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: '文章',
        items: [
          { text: '笔墨文章', link: '/markdown-examples' },
          { text: '技法详解', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TayeShi' }
    ],

    footer: {
      message: '今年新梦，忽到水经旧山头',
      copyright: '见她依旧笑如花'
    },

    outline: {
      label: '目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式'
  }
})
