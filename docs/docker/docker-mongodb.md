# docker-mongodb

## docker 启动 mongodb

### 拉取镜像

```shell
sudo docker pull mongo:4.2.24
```

也可以换成其他版本

```shell
sudo docker run -itd --name mongo-4.2.24 -p 27017:27017 mongo:4.2.24 -auth
```

- `-auth`: 需要验证


进入MongoDB容器
```shell
docker exec -it <容器名> mongo admin
```

配置用户
```shell
db.createUser(
  {
    user: "taye_mongo",
    pwd: "2ukASZVAXBVx",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ],
  }
);
```

验证配置的用户
```shell
db.auth("taye_mongo", "2ukASZVAXBVx");
```