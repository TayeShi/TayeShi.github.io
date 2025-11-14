# Jupyter Notebook

## 安装

```

wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

bash Miniconda3-latest-Linux-x86_64.sh

# 创建并激活环境
conda create -n myenv python=3.9
conda activate myenv
```

conda env: env相关

```
conda install jupyter

# 基本启动
jupyter notebook

# 指定端口启动
jupyter notebook --port 8888

# 不自动打开浏览器
jupyter notebook --no-browser

# 指定工作目录
jupyter notebook --notebook-dir=/path/to/your/notebooks
```

存在没有的包， conda install 包名