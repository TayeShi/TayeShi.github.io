# rust 代码格式化

1. 检查rustfmt是否已经安装

```shell
rustfmt --version

# 如果没有安装
rustup component add rustfmt
```

2. 项目中创建**rustfmt.toml**文件

```toml
# 使用默认的格式化风格
edition = "2024"
max_width = 100
tab_spaces = 4
newline_style = "Unix"

# 导入排序
imports_granularity = "Module"
group_imports = "StdExternalCrate"
```

3. 配置编辑器保存自动格式化

vscode：

编辑.vscode/settings.json，写入内容：

```toml
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "rust-lang.rust-analyzer",
    "[rust]": {
        "editor.defaultFormatter": "rust-lang.rust-analyzer"
    },
    "rust-analyzer.check.command": "clippy",
    "rust-analyzer.checkOnSave": true
}
```

4. 代码git提交勾子

编辑.git/hooks/pre-commit文件：

```shell
#!/bin/sh
# 预提交钩子：在提交前自动格式化代码
cargo fmt -- --check || (echo "代码需要格式化，请运行 'cargo fmt' 后重新提交" && exit 1)
```

