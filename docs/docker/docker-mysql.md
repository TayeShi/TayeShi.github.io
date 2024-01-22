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
- `-e`: 设置环境变量。`MYSQL_ROOT_PASSWORD=123456`设置 mysql 服务 root 用户密码 123456
