# 文章清单
### 科技类
### 白嫖类
### 下载类
<!-- 任意非主页的 .md 文件 -->
<script setup>
import { useData } from 'vitepress'
const { page } = useData()
console.log('当前布局:', page.value.frontmatter.layout)
</script>
