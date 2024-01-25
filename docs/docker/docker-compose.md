# Docker Compose

## yml 配置参数

```yml
# 指定 yml 依从的 compose 版本
version: "3"

# 服务
services:
  # 服务名
  mysql:
    # 指定容器运行的镜像
    image: "mysql:latest"
    # 指定自定义容器名称
    container_name: local_mysql
    # 将主机的数据卷或着文件挂载到容器里
    volumes:
      - ./pkg/configs/sql:/docker-entrypoint-initdb.d
    # 指定映射端口
    ports:
      - "18000:3306"
    # 添加环境变量。您可以使用数组或字典、任何布尔值，布尔值需要用引号引起来，以确保 YML 解析器不会将其转换为 True 或 False
    environment:
      - MYSQL_DATABASE=douyin
      - MYSQL_USER=douyin
      - MYSQL_PASSWORD=douyin123
      - MYSQL_RANDOM_ROOT_PASSWORD="yes"
    # 容器重启策略
    restart: always
    # 可以使用的环境
    profiles:
      - dev
      - release
    # 依赖关系
    depends_on:
```

`restart`

- `no`：是默认的重启策略，在任何情况下都不会重启容器。
- `always`：容器总是重新启动。
- `on-failure`：在容器非正常退出时（退出状态非 0），才会重启容器。
- `unless-stopped`：在容器退出时总是重启容器，但是不考虑在 Docker 守护进程启动时就已经停止了的容器

## 快速参考

https://www.runoob.com/docker/docker-compose.html
