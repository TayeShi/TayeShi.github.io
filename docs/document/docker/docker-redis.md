# docker-redis

## docker 启动 redis

### 拉取镜像

```shell
docker pull redis:latest
```

### 启动镜像

```shell
docker run -itd --name local-redis -p 6379:6379 redis
```

- `-p`: 指定容器端口映射到主机端口
- `--name`: 指定运行容器名

### 进入运行的 Redis 服务

```shell
docker exec -it local-redis /bin/bash
```