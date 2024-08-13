# hadoop

## 环境

准备3台虚拟机，2CPU 4G 50G. hadoop001 hadoop002 hadoop003

设置对应服务器名
`vim /etc/hostname`

配置清华源

参考：https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/

```
sudo apt upgrade
sudo apt update
```

安装net-tools

`sudo apt install net-tools`

确保可以ping通外网

关闭且禁用防火墙

`sudo ufw disable`

`sudo ufw status` 当显示 `Status: inactive` 则为关闭且禁用的状态

root下创建shadoop用户，且设置密码shadoop
`useradd shadoop`
`passwd shadoop`

配置shadoop用户root权限，方便需要sudo的命令`vim /etc/sudoers`添加`shadoop ALL=(ALL) NOPASSWD:ALL`

创建两个文件夹`mkdir /opt/module`,`mkdir /opt/software`  
修改用户组`chown shadoop:shadoop /opt/module`,`chown shadoop:shadoop /opt/software`  
查看`ll`

添加hosts`vim /etc/hosts`
```
xxx.xxx.xxx.xxx hadoop001
xxx.xxx.xxx.xxx hadoop002
xxx.xxx.xxx.xxx hadoop003
```

安装openjdk`apt install openjdk-8-jdk`

安装openjdk后配置JAVA_HOME变量到shell

```
#JAVA_HOME
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
```

配置hadoop001,hadoop002,hadoop003的shadoop相互ssh免密访问

下载[hadoop-3.1.3.tar.gz](https://archive.apache.org/dist/hadoop/common/hadoop-3.1.3/) 到`/opt/software`  hadoop001

解压`tar -zxvf hadoop-3.1.3.tar.gz -C /opt/module/`

将hadoop添加到环境变量

`sudo vim /etc/profile.d/my_env.sh`

```
#HADOOP_HOME
export HADOOP_HOME=/opt/module/hadoop-3.1.3
export PATH=$PATH:$HADOOP_HOME/bin
export PATH=$PATH:$HADOOP_HOME/sbin
```

`source /etc/profile`



