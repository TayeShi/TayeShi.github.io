# Docker 快速部署容器

## Docker 部署 Mysql

```shell
docker pull mysql:latest
```

```shell
docker run -itd --name local-mysql --restart=always -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```

- `-p`: 指定容器端口映射到主机端口
- `--name`: 指定运行容器名
- `-e`: 设置环境变量。
  - `MYSQL_ROOT_PASSWORD=123456`设置 mysql 服务 root 用户密码 123456
- `--restart=always`: 当Docker守护进程启动时，这个设置确保即使容器停止，它也会自动重启。

- `-v <宿主机文件夹路径，如：/**/mysql>:/var/lib/mysql`: 将宿主机上的目录`/**/mysql`映射到容器内的`/var/lib/mysql`目录。这样可以将数据持久化存储在宿主机上，避免容器重启或销毁时丢失数据。
- `-d`: 这个标志表示容器应该以后台（守护进程）模式运行，不会阻塞终端。

`docker run -itd --name local-mysql --restart=always -v /home/docker/mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql`

## Docker 部署 Mongodb

```
docker pull mongo
```

```
docker run -itd --name local-mongo -p 27017:27017 mongo <-auth>
```

**指定版本**

`docker pull mongo:4.2.24`

`docker run -itd --name mongo-4.2.24 -p 27017:27017 mongo:4.2.24`

### 单节点部署mongo

写入初始mongod.conf（`/home/docker/mongo/config/mongod.conf`）

```
# 允许外网访问
net:
  bindIp: 0.0.0.0
  port: 27017
```



```
sudo docker volume create mongo-data

docker run -d \
  --name mymongo \
  -v mongo-data:/data/db \
  -v /home/docker/mongo/config:/etc/mongo \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=123456 \
  mongo \
  --config /etc/mongo/mongod.conf
```






## Docker 部署 Redis

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

   从github的redis里获取，比如当前最新版本为7.4，则地址为https://github.com/redis/redis/blob/7.4/redis.conf

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
  -p 6379:6379 \
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





## Docker 部署 Minio

`docker pull minio/minio`

**linux**

```shell
docker run \
-p 9000:9000 \
-p 9001:9001 \
--name=local-minio \
-d --restart=always \
-e "MINIO_ROOT_USER=admin" \
-e "MINIO_ROOT_PASSWORD=admin123456" \
-v /home/data:/data \
-v /home/config:/root/.minio \
minio/minio server /data --console-address ":9001"
```

**windows**

```
docker run \
-p 9000:9000 \
-p 9001:9001 \
--name=local-minio \
-d --restart=always \
-e "MINIO_ROOT_USER=admin" \
-e "MINIO_ROOT_PASSWORD=admin123456" \
-v /c/Users/noahs/Documents/docker/data:/data \
-v /c/Users/noahs/Documents/docker/config:/root/.minio \
minio/minio server /data --console-address ":9001"
```

`/data`：

在MinIO中，`/data`目录是默认的数据存储位置。这意味着所有的对象数据（上传的文件、桶信息等）都将存储在宿主机的`/home/data`目录下，而不是在容器内部。这种做法的好处是：

- 数据持久化：即使容器被删除或重建，数据仍然保留在宿主机上，不会丢失。
- 数据独立：数据存储在宿主机上，不依赖于容器的存在，便于数据管理和迁移。
- 多容器共享：如果多个MinIO容器需要共享相同的数据，可以指向同一个目录。

`/root/.minio`:

这个映射将宿主机上的`/home/config`目录映射到容器内的`/root/.minio`目录。在MinIO中，`/root/.minio`目录通常用于存储MinIO的配置文件和证书等敏感信息。通过映射到宿主机上的目录，你可以：

- 配置持久化：容器内的配置更改可以永久保存在宿主机上，即使容器重启或重建，配置依然存在。
- 安全性：敏感信息如访问密钥、安全证书等可以安全地存储在宿主机上，而不是在容器内部，减少安全风险。
- 可管理性：在宿主机上直接编辑配置文件，无需进入容器内部，便于管理和备份。

`server /data --console-address ":9001"`: 这是运行MinIO服务器的命令，`server /data`表示使用`/data`目录作为数据存储路径，`--console-address ":9001"`则指定了Web控制台的监听地址为容器内部的9001端口。

浏览器访问：http://IP:9001/minio/login，登录使用自定义账户密码admin/admin123456登录

## Docker 部署 consul

### 单节点部署

```
# 创建数据卷
docker volume create consul-data
# 启动一个开发模式的 Consul 容器
docker run -d \
  --name consul \
  -p 8500:8500 \
  -p 8600:8600/udp \
  -v /home/docker/consul/config:/consul/config \
  -v consul-data:/consul/data \
  hashicorp/consul \
  agent -server -ui -node=node1 -bootstrap-expect=1 -client=0.0.0.0 \
  -config-dir=/consul/config \
  -data-dir=/consul/data
```

- `-p 8500:8500`: HTTP API 和 Web UI
- `-p 8600:8600/udp`: DNS 接口
- `-v /home/docker/consul/config:/consul/config`: 挂载配置目录
- `-v consul-data:/consul/data`: 挂载数据目录仍用 Volume
- `-config-dir=/consul/config`: 指定配置目录
- `-data-dir=/consul/data`: 指定数据目录

https://developer.hashicorp.com/consul/tutorials/archive/docker-container-agents#configure-and-run-a-consul-server

### consul操作

#### docker启动完整单节点consul

##### 1. 配置acl.hcl

宿主机/home/docker/consul/config/acl.hcl

```
acl = {
  enabled = true
  default_policy = "deny"
  enable_token_persistence = true
}
```

##### 2. 启动 创建卷，启动docker

```shell
# 创建数据卷
docker volume create consul-data
# 启动一个开发模式的 Consul 容器
docker run -d \
  --name consul \
  -p 8500:8500 \
  -p 8600:8600/udp \
  -v /home/docker/consul/config:/consul/config \
  -v consul-data:/consul/data \
  hashicorp/consul \
  agent -server -ui -node=node1 -bootstrap-expect=1 -client=0.0.0.0 \
  -config-dir=/consul/config \
  -data-dir=/consul/data
```

##### 3. 生成token

启动后, `docker exec consul consul acl bootstrap` 命令生成 Bootstrap Token（超级管理员权限）

输出example:

```
AccessorID:   d4a0d9a5-3f3a-4f5a-90d1-2d8b7d3e3f3a
SecretID:     e1d8c4d7-1c1a-4e2a-9d3b-8c7d6e5f4a3b
Description:  Bootstrap Token (Global Management)
Local:        false
Create Time:  2023-10-01 12:00:00 +0000 UTC
Policies:
  00000000-0000-0000-0000-000000000001 - global-management
```

##### 4. 创建operate.hcl

/home/docker/consul/config/admin-operate.hcl

```
node_prefix "" {
  policy = "write"  # 允许节点注册、更新、删除
}
service_prefix "" {
  policy = "write"  # 允许服务注册、更新、删除
}
key_prefix "" {
  policy = "write"  # 允许所有 KV 操作
}
operator = "write"  # 允许运维操作（如节点维护）
```

##### 5. 使用 Bootstrap Token 创建策略

```shell
sudo docker exec consul consul acl policy create \
  -name "admin-operate-policy" \
  -description "允许节点和服务的完全操作权限" \
  -rules @/consul/config/admin-operate.hcl \
  -token <bootstrap token>
```

就可以使用token登录了

