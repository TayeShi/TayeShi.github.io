# Git

## Conventional Commits 规范

**Conventional Commits**是一种为 Git 提交消息提供标准化结构的规范，旨在使这些提交消息更易于阅读和自动处理。这种格式的使用有助于自动化版本控制、生成更有意义的发布日志，并能更好地管理和维护大型项目。

1. 基本结构

提交消息通常遵循以下格式：

```scss
<类型>[可选的作用域]: <描述> [可选的正文] [可选的脚注];
```

2. 类型(Type)

类型是提交消息的必要部分，用于说明提交的目的或影响。常见的类型包括：

- `feat`：新增功能（feature）。
- `fix`：修复 bug。
- `docs`：仅文档的更改。
- `style`：不影响代码含义的更改（空格、格式化、缺少分号等）。
- `refactor`：既不修复错误也不添加功能的代码更改。
- `perf`：提高性能的代码更改。
- `test`：添加或修正测试。
- `chore`：对构建过程或辅助工具和库（如文档生成）的更改。
- `ci`：对 CI 配置文件和脚本的更改。

3. 作用域(Scope)（可选）

作用域提供了关于提交影响的上下文信息（如模块、包、类等）。它是可选的，有助于提供更详细的变更信息。

4. 描述(Description)

描述应该是一个简洁的总结，说明了这次提交做了哪些更改或为什么做这些更改。

5. 正文(Body)（可选）

正文提供了对更改的详细描述。这部分可以解释是什么被改变了，为什么要改变，以及与之前行为的对比。

6. 脚注(Footer)（可选）

脚注用于提供关于提交的其他信息，如关联的 issue、关闭的 bug 等。

```scss
feat(lang): 添加德语翻译 - 添加了德语翻译文件 - 更新了相关文档和测试 Closes
  #1234;
```

这种结构化的提交信息有助于自动化工具（如自动生成 CHANGELOG、语义版本控制等）更好地理解和处理提交。例如，可以根据 feat 和 fix 类型自动确定版本号的增加。

### 注意事项

**Conventional Commits**是一种社区驱动的最佳实践，但并非所有项目都需要严格遵守。

项目团队可以根据自己的需要调整或扩展这些规则。

### 关于 Emoji 的使用约定

在**Conventional Commits**规范中，使用 emoji 主要是为了给提交信息添加更直观的视觉元素和额外的语义层次。虽然**Conventional Commits**本身没有强制要求使用 emoji，但在实践中，许多开发者和团队采用 emoji 来传达特定的意义，使提交信息更易于快速识别和理解。

- ✨ `:sparkles:`： 引入新功能（与 feat 类型相关）。
- 🐛 `:bug:`： 修复 bug（与 fix 类型相关）。
- 📚 `:books:`： 文档相关的更改（与 docs 类型相关）。
- 🎨 `:art:`： 改进代码结构/代码格式（与 style 类型相关）。
- 🔨 `:hammer:`： 代码重构（与 refactor 类型相关）。
- ⚡ `:zap:`： 提高性能的更改（与 perf 类型相关）。
- ✅ `:white_check_mark:`： 添加测试（与 test 类型相关）。
- 🔧 `:wrench:`： 修改配置文件（与 chore 或 config 类型相关）。
- 🔀 `:twisted_rightwards_arrows:`： 合并分支（与分支操作相关）。

#### 注意事项

- 使用 emoji 应考虑其清晰度和跨文化的可理解性。不同的文化和个人对 emoji 的理解可能有所不同。
- 在某些环境或平台中，emoji 可能无法正确显示或解释，因此要确保它们的使用不会影响提交信息的基本理解。
- 项目团队可以根据自己的需要和偏好，定义自己的 emoji 使用准则。

总的来说，emoji 在提交信息中的使用更多地是一个社区和团队文化的体现，而不是一个严格的规范要求。正确使用时，它们可以使提交历史更加生动和易于理解。

### VSCode 中可使用的相关插件

- _Conventional Commits_
- _Git CZ Emoji_

## Git 常用操作

### 删除本地冗余分支

（开发通过 PR 提交代码，时间久了，本地会产生大量遗留的分支。）  
处理 GitHub PR（Pull Request）开发流程中本地遗留的分支

处理逻辑：首先同步远程仓库的状态，然后清理本地不再需要的分支。

```shell
git fetch --prune
```

这个命令会获取最新的远程仓库信息，并删除那些在远程仓库中已经被删除的分支的本地引用。

`git branch --merged master | grep -v "master" | xargs git branch -d`

```shell
git branch --merged master | grep -v "(^\*|master|main)" | xargs git branch -d
```

- `git branch --merged master`：列出所有已经合并到 master 分支的本地分支。
- `grep -v "master"`：确保 master 分支本身不会被列出。
- `xargs git branch -d`：对列出的每一个分支，使用 git branch -d 命令来删除它们。
