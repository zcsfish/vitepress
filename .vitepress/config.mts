import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"; 
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      AnnouncementPlugin({
        title: '公告栏',
        body: [
          { type: 'text', content: '开始阅读网站内容前，请先认真阅读《网站使用条款》、《网站隐私政策》。如果您访问了网站的任何内容，则视为您同意了本网站的所有条约。' }
        ],
        footer: [
          {
            type: 'button',
            content: '使用条款',
            link: '/eula.html#网站使用条款'
          },
          {
            type: 'button',
            content: '隐私政策',
            link: '/eula.html#网站隐私政策'
          }
        ],
      })
    ]
  },
  extends: '@vue/theme',
  ignoreDeadLinks: true,
  title: "鳝鱼の网站",
  description: "A VitePress Site",
  srcDir: "./docs",
  markdown: { 
    //行号显示
    lineNumbers: true, 
    //时间线 //
    config: (md) => {
      md.use(timeline);
    },
  }, 
  themeConfig: {
    nav: [
      { text: '🏠返回主页', link: '/' },
      { text: '📄文章列表', link: '/list.html' },
      {
        text: 'WiKi',
        items: [
          {text: '三角洲行动', link: '/wiki/df/'}
        ]
      }
    ],
    sidebar: [
      {
        text: '博客',
        items: [
          { text: '科技类别', link: '/list.html#科技类' },
          { text: '免费类别', link: '/list.html#白嫖类' },
          { text: '下载类别', link: '/list.html#下载类' }
        ]
      },
      {
        text: 'WiKi',
        items: [
          { text: '三角洲行动', link: '/wiki/df' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zcsfish/vitepress' }
    ]
  }
})
