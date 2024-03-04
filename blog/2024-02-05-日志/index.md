---
slug: 2024-02-05-日志
title: 2024-02-05-日志
authors: [taye]
tags: [day]
---

# 2024-02-05

## Kubernetes

### 集群部署

#### 1. 基础环境

切换国内源

```shell
vim /etc/apt/sources.list
# 内容参考文档
apt update

#
https://developer.aliyun.com/mirror/ubuntu
https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/
# 如果是arm 架构的芯片
https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu-ports/
https://developer.aliyun.com/mirror/ubuntu-ports
```

```shell
#各个机器设置自己的域名
hostnamectl set-hostname xxxx


# 将 SELinux 设置为 permissive 模式（相当于将其禁用）
sudo setenforce 0
sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config

#关闭swap
swapoff -a
sed -ri 's/.*swap.*/#&/' /etc/fstab

#允许 iptables 检查桥接流量
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
br_netfilter
EOF

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sudo sysctl --system
```

add: 安装 docker

#### 2. 安装 kubelet、kubeadm、kubectl

```shell
apt-get update && apt-get install -y apt-transport-https
curl -fsSL https://mirrors.aliyun.com/kubernetes-new/core/stable/v1.28/deb/Release.key |
    gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://mirrors.aliyun.com/kubernetes-new/core/stable/v1.28/deb/ /" |
    tee /etc/apt/sources.list.d/kubernetes.list
apt-get update
apt-get install -y kubelet kubeadm kubectl
# 用阿里的方式安装，就使用阿里源
```

## 参考文档

https://www.yuque.com/leifengyang/oncloud
https://developer.aliyun.com/mirror/kubernetes
