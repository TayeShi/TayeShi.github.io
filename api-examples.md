---
outline: deep
---

# 技法详解

此页展示 VitePress 提供的部分运行时 API 用法。

核心 API `useData()` 可用于访问当前页面的站点数据、主题数据和页面数据，适用于 `.md` 文件和 `.vue` 文件：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面 Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面 Frontmatter
<pre>{{ frontmatter }}</pre>

## 更多

查阅文档了解 [完整的运行时 API 列表](https://vitepress.dev/reference/runtime-api#usedata)。
