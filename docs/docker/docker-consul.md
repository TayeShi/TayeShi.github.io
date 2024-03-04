# docker-consul

## docker 启动 consul

### 拉取镜像

```shell
sudo docker pull hashicorp/consul
```

```shell
sudo docker run -d -p 8500:8500 --name=consul hashicorp/consul agent -dev -client=0.0.0.0
```

- `-d`: 容器以后台方式运行
- `p`: 映射端口到宿主机
- `--name`: 指定容器名
- `agent -dev`: consul 命令：以开发者模式运行
- `-client`: 指定客户端访问 consul 集群
