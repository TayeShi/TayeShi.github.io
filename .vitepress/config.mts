import VitePluginVitePressAutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "twinkle",
  description: "twinkle site",
  /** 文档源目录 */
  srcDir: 'docs',
  /** site.com/xxx -> site.com/xxx.html,简洁url */
  cleanUrls: true,
  vite: {
    plugins: [
      VitePluginVitePressAutoSidebar({})
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'Document', link: '/document/' },
      { text: 'Interview', link: '/interview/' },
      { text: 'Blog', link: '/blog/'}

    ],

    // sidebar: {
    //   '/document/': [
    //     {
    //       text: 'Document',
    //       base: '/document',
    //       link: '/',
    //       items: [
    //         { text: 'Git', link: '/git' },
    //       ]
    //     }
    //   ],
    //   '/interview/': [
    //     {
    //       text: 'Interview',
    //       base: '/interview',
    //       link: '/',
    //       items: [
    //         { text: 'TCP粘包', link: '/TCP粘包' },
    //       ]
    //     }
    //   ],
    // },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
