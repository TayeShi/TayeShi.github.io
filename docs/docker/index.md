# Docker

## install

(ubuntu22.04, 参考 https://docs.docker.com/engine/install/ubuntu/ )

1. Set up Docker's apt repository.

```shell
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

2. Install the Docker packages.

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

3. 验证安装

```shell
docker --version
```

## 配置

### 修改 docker 源

环境：

- Ubuntu22.04

1. 修改`/etc/docker/daemon.json`文件，如果没有则在对应目录下创建一个`sudo vim /etc/docker/daemon.json`
   ```json
   {
     "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
   }
   ```
2. 使配置生效`sudo systemctl daemon-reload`
3. 重启 docker`sudo service docker restart`
