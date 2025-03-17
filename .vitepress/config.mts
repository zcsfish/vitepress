import { defineConfig } from 'vitepress'
import { h } from 'vue'
import Theme from 'vitepress/theme'
import GiscusComment from './components/GiscusComment.vue'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "鳝鱼の网站",
  description: "A VitePress Site",
  srcDir: "./docs",
  
  // 主题配置与自定义布局
  extends: class extends Theme {
    Layout() {
      return h(Theme.Layout, null, {
        'doc-after': () => h(GiscusComment)
      })
    }
  },

  // 主题配置
  themeConfig: {
    nav: [
      { text: '🏠返回主页', link: '/' },
      { text: '📄文章列表', link: '/list.html' }
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
