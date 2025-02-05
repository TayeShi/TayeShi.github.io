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