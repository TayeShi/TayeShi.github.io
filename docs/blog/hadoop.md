# hadoop

## 环境

准备 3 台虚拟机，2CPU 4G 50G. hadoop001 hadoop002 hadoop003

设置对应服务器名
`vim /etc/hostname`

配置清华源

参考：https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/

```
sudo apt upgrade
sudo apt update
```

安装 net-tools

`sudo apt install net-tools`

确保可以 ping 通外网

关闭且禁用防火墙

`sudo ufw disable`

`sudo ufw status` 当显示 `Status: inactive` 则为关闭且禁用的状态

root 下创建 shadoop 用户，且设置密码 shadoop
`useradd shadoop`
`passwd shadoop`

配置 shadoop 用户 root 权限，方便需要 sudo 的命令`vim /etc/sudoers`添加`shadoop ALL=(ALL) NOPASSWD:ALL`

创建两个文件夹`mkdir /opt/module`,`mkdir /opt/software`  
修改用户组`chown shadoop:shadoop /opt/module`,`chown shadoop:shadoop /opt/software`  
查看`ll`

添加 hosts`vim /etc/hosts`

```
xxx.xxx.xxx.xxx hadoop001
xxx.xxx.xxx.xxx hadoop002
xxx.xxx.xxx.xxx hadoop003
```

安装 openjdk`sudo apt install openjdk-8-jdk`

安装 openjdk 后配置 JAVA_HOME 变量到 shell

```
sudo vim /etc/profile.d/my_env.sh

#JAVA_HOME
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64

#mac m
JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

配置 hadoop001,hadoop002,hadoop003 的 shadoop 相互 ssh 免密访问

生成 ssh`ssh-keygen -t rsa`

下载[hadoop-3.1.3.tar.gz](https://archive.apache.org/dist/hadoop/common/hadoop-3.1.3/) 到`/opt/software` hadoop001

下载慢的话，下载到宿主机，scp 到 hadoop001 `scp hadoop-3.1.3.tar.gz ubuntu@hadoop001:/opt/software`

解压`tar -zxvf hadoop-3.1.3.tar.gz -C /opt/module/`

将 hadoop 添加到环境变量

`sudo vim /etc/profile.d/my_env.sh`

```
#HADOOP_HOME
export HADOOP_HOME=/opt/module/hadoop-3.1.3
export PATH=$PATH:$HADOOP_HOME/bin
export PATH=$PATH:$HADOOP_HOME/sbin
```

`source /etc/profile`

验证 `hadoop version`

如果出现`ERROR: JAVA_HOME is not set and could not be found.`

```
vim /opt/module/hadoop-3.1.3/etc/hadoop/hadoop-env.sh

# 添加
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64
export HADOOP_HOME=/opt/module/hadoop-3.1.3
```
