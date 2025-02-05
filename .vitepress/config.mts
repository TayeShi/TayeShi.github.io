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
    ]
  },
  themeConfig: {
    lastUpdated: {
      text: '最后更新于：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'Document', link: '/document/' },
      { text: 'Interview', link: '/interview/' },
      { text: 'Blog', link: '/blog/2025-02-05-本地部署deepseek'},
      {
        text: 'awesome',
        link: '/awesome/'
      }
    ],

    sidebar: {
      '/document/': [
        {
          text: 'Document',
          base: '/document',
          link: '/',
          items: [
            { text: 'Git', link: '/git' },
            { 
              text: 'Docker',
              base: '/document/docker',
              items: [
                { text: 'Docker快速部署容器', link: '/docker快速部署容器'}
              ]
            }
          ]
        }
      ],
      '/interview/': [
        {
          text: 'Interview',
          base: '/interview',
          link: '/',
          items: [
            { text: 'TCP粘包', link: '/TCP粘包' },
          ]
        }
      ],
      '/blog/': [
        {
          text: 'Blog',
          base: '/blog',
          items: [
            { text: '本地部署deepseek', link: '/2025-02-05-本地部署deepseek'},
            { text: 'hadoop', link: '/2024-08-23-hadoop'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
