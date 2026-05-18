---
outline: deep
---

# 笔墨文章

此页展示 VitePress 所提供的 Markdown 扩展功能。

## 语法高亮

VitePress 基于 [Shiki](https://github.com/shikijs/shiki) 提供语法高亮，并支持行高亮等额外功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: '妙笔生花！'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: '妙笔生花！'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
此为信息提示。
:::

::: tip
此为温馨提示。
:::

::: warning
此为警告提示。
:::

::: danger
此为危险警告。
:::

::: details
此为折叠详情。
:::
```

**输出**

::: info
此为信息提示。
:::

::: tip
此为温馨提示。
:::

::: warning
此为警告提示。
:::

::: danger
此为危险警告。
:::

::: details
此为折叠详情。
:::

## 更多

查阅文档了解 [完整的 Markdown 扩展列表](https://vitepress.dev/guide/markdown)。
