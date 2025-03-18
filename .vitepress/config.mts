import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"; 

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "鳝鱼の网站",
  description: "A VitePress Site",
  srcDir: "./docs",
  footer: {
    copyright: "©️ 2025 鳝鱼のWiKi All right reseverd.",
    message: "[三角洲行动]为[腾讯公司]注册商标，本站内容与版权方无关联。"
  },
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
