# Docker



## 安装配置docker



### 配置代理加速

```shell
# 编辑配置文件
sudo vim /etc/docker/daemon.json
# or 如下
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://docker.1panel.live"]
}
EOF
# []内写入对应地址，参考 https://github.com/cmliu/CF-Workers-docker.io
# 重启服务加载配置
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 启动实例

### postgres

```shell
docker run --name local-postgres \
  -e POSTGRES_PASSWORD=local123456 \
  -e POSTGRES_USER=local \
  -e POSTGRES_DB=local_dev \
  -p 5432:5432 \
  -d postgres:15
```

参考https://hub.docker.com/_/postgres



