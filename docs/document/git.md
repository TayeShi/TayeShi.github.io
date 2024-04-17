# Git

## 常用操作

### 删除本地已合并到remote的分支

通常开发会新建个分支在本地开发，开发完成后，提交到remote并合并到master/main。

然后，本地开发的分支就出现了冗余。

![image-20240417090445729](https://assets.tayeshi.cn/markdown/image-20240417090445729.png)

**批量清除命令：**

主分支`main`：`git branch --merged origin/main | grep -vE '^(main|origin/main)$' | xargs git branch -d`

主分支`master`：`git branch --merged origin/master| grep -vE '^(master|origin/master)$' | xargs git branch -d`

**命令解析：**

1. `git branch --merged origin/main`：列出所有已经合并到 `origin/main` 的本地分支。这里假设你的主分支是 `main`，并且远程跟踪分支是 `origin/main`。如果你的主分支是 `master`，那么你需要将 `origin/main` 替换为 `origin/master`。
2. `grep -vE '^(main|origin/main)$'`：过滤掉 `main` 和 `origin/main` 分支，因为我们通常不想删除这些分支。
3. `xargs git branch -d`：对过滤后的分支列表执行 `git branch -d` 命令来删除这些分支。`-d` 选项会在分支未合并时阻止删除操作，如果你想强制删除即使未合并的分支，可以使用 `-D` 选项代替 `-d`。