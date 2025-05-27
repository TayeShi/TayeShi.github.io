# Docker Redis


```shell
docker pull redis:latest
```

```shell
docker run -itd --name local-redis --restart=always -p 6379:6379 redis
```

- `-p`: 指定容器端口映射到主机端口
- `--name`: 指定运行容器名

**进入运行的 Redis 服务**

```shell
docker exec -it local-redis /bin/bash
```



### 单节点部署Redis操作

1. 拉取基本配置文件到配置目录

   从github的redis里获取，比如当前最新版本为7.4，则地址为https://github.com/redis/redis/blob/8.0/redis.conf

   拷贝内容，写入/home/docker/redis/config名为redis.conf

2. 启动 创建数据卷，启动docker

```
# 创建数据卷
sudo docker volume create redis-data
# 启动docker
sudo docker run -d \
  --privileged \
  --network host \
  --name redis \
  -v /home/docker/redis/config:/etc/redis \
  -v redis-data:/data \
  redis \
  redis-server /etc/redis/redis.conf
```

3. 修改配置

   - `protected-mode no`：可非本host访问

   - `requirepass 123456`: 开启密码访问

   - `appendonly yes`：启用AOF持久化

   - `aof-use-rdb-preamble yes`：开启混合持久化模式（RDB + AOF）

   - `bind 0.0.0.0 -::1`：使宿主机可以访问

     重启redis

#### 注意

> 问题1：
>
> WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. Being disabled, it can also cause failures without low memory condition, see https://github.com/jemalloc/jemalloc/issues/1328. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
>
> 解决：`sudo vim /etc/sysctl.conf`,`sudo sysctl -p`,`sysctl vm.overcommit_memory`重启docker的redis
>
> 问题2：
>
> 启动后docker logs发现报错 Failed to write PID file: Permission denied
>
> 解决：使用`--privileged`启动提升权限

