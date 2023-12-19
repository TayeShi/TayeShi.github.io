---
slug: vite-react项目配置alias
title: vite-react项目配置alias
authors: [taye]
tags: [frontend, solution]
---
# vite-react项目配置alias

alias别名配置，可以使相对路径引入为相对于别名的绝对路径

需要修改两个文件

`vite.config.ts` 和 `tsconfig.json`，一个用于vite编译，一个用于vscode处理

## 修改`vite.config.ts`文件

配置中添加或修改 resolve.alias 部分来设置别名

例如将`@`指向`src`目录

```typescript
import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
```

使用了path，需要引入npm包`@types/node`

## 修改`tsconfig.json`文件

在`compilerOptions`中添加或修改`path`选项，`baseUrl`是必须的

例如将`@`指向`src`目录

```json
{
  "compilerOptions": {
    // ... 其他配置项
    "baseUrl": ".", // 这是必要的，以支持相对路径
    "paths": {
      "@/*": ["./src/*"]
    }
  }
  // ... 其他配置项
}

```

配置完以上内容，重启vscode生效
