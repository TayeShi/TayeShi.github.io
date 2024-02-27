# Docker

## 配置

### 修改docker源

环境：
- Ubuntu22.04

1. 修改`/etc/docker/daemon.json`文件，如果没有则在对应目录下创建一个`sudo vim /etc/docker/daemon.json`
    ```json
    {
        "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
    }
    ```
2. 使配置生效`sudo systemctl daemon-reload`
3. 重启docker`sudo service docker restart`
