declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 为Giscus组件添加类型声明（如果使用）
declare module '@giscus/vue' {
  export interface GiscusProps {
    repo: string
    repoId: string
    category: string
    categoryId: string
    mapping?: string
    reactionsEnabled?: string
    emitMetadata?: string
    theme?: string
  }
  const Giscus: DefineComponent<GiscusProps>
  export default Giscus
}
