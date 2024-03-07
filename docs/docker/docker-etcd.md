# docker-etcd

## docker 启动 etcd

### 拉取镜像

```shell
sudo docker pull bitnami/etcd
```

```shell
docker run -d --name etcd --restart always \
-v $PWD/etcd.conf.yml:/opt/etcd/conf/etcd.conf.yml \
-v $PWD/data:/opt/etcd/data \
-e ETCD_ADVERTISE_CLIENT_URLS=http://127.0.0.1:2379 \
-e ETCD_LISTEN_CLIENT_URLS=http://127.0.0.1:2379 \
-e ALLOW_NONE_AUTHENTICATION=yes \
-e ETCD_CONFIG_FILE=/opt/etcd/conf/etcd.conf.yml \
-e ETCD_DATA_DIR=/opt/etcd/data \
bitnami/etcd
```

提前给挂载路径写入777权限
