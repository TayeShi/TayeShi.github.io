# docker-mongodb

## docker运行mongodb

### 拉取镜像

```
docker pull mongo
```

### 启动

```
docker run -itd --name local-mongo -p 27017:27017 mongo <-auth>
```

## 指定版本

`docker pull mongo:4.2.24`

`docker run -itd --name mongo-4.2.24 -p 27017:27017 mongo:4.2.24`