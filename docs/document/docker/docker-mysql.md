# docker-mysql

## docker 启动 mysql

### 拉取镜像

```shell
docker pull mysql:latest
```

### 启动镜像

```shell
docker run -itd --name local-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```

- `-p`: 指定容器端口映射到主机端口
- `--name`: 指定运行容器名
- `-e`: 设置环境变量。
  - `MYSQL_ROOT_PASSWORD=123456`设置 mysql 服务 root 用户密码 123456
- `--restart=always`: 当Docker守护进程启动时，这个设置确保即使容器停止，它也会自动重启。

- `-v <宿主机文件夹路径，如：/**/mysql>:/var/lib/mysql`: 将宿主机上的目录`/**/mysql`映射到容器内的`/var/lib/mysql`目录。这样可以将数据持久化存储在宿主机上，避免容器重启或销毁时丢失数据。
- `-d`: 这个标志表示容器应该以后台（守护进程）模式运行，不会阻塞终端。